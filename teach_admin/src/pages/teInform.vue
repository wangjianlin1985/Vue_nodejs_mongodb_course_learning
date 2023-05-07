<template>
	<div data-teinform-box>
		<el-button type="primary" @click="addInform()">添加</el-button>
		<el-table :data="tableData" class="table">
			<el-table-column label="通知标题" prop="title" algin="center"></el-table-column>
			<el-table-column label="通知内容" prop="content" algin="center"></el-table-column>
			<el-table-column label="发布人" prop="publisher" algin="center"></el-table-column>
			<el-table-column label="发布时间" prop="timel" algin="center"></el-table-column>
			<el-table-column label="操作" algin="center">
				<template slot-scope="scope">
					<el-button type="text" @click="editData(scope.row)">编辑</el-button>
					<el-button type="text" @click="deleteData(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-dialog :title="dialogData.dialogTitle" :visible.sync="dialogData.dialogVisible" :before-close="closeDialog" @close="closeDialog">
			<el-form :model="formData" ref="formData" :rules="rules" class="form"label-position="left">
				<el-form-item label="通知标题:" prop="title">
					<el-input v-model="formData.title"  placeholder="输入通知标题"></el-input>
				</el-form-item>
				<el-form-item label="通知内容:" prop="content">
					<el-input v-model="formData.content" placeholder="输入通知内容"></el-input>
				</el-form-item>
				<el-form-item label="发布人" prop="publisher">
					<el-input v-model="formData.publisher" placeholder="输入发布人"></el-input>
				</el-form-item>
				<el-form-item label="发布时间" prop="timel" v-if="isEdit">
					<el-input v-model="formData.timel" placeholder="输入发布时间" :disabled="true"></el-input>
				</el-form-item>
			</el-form>
			<div class="button_bottom">
				<el-button @click="sureDialog('formData')" type="primary">确 定</el-button>
				<el-button @click="closeDialog()">取 消</el-button>				
			</div>
		</el-dialog>
	</div>
</template>

<script>
//	import axios from 'axios';
	import Vue from 'vue';
	import {$v, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	import {Button,Table,TableColumn,Dialog,Form,FormItem,Input,MessageBox,Message} from 'element-ui';
	
	Vue.use(Button);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(Dialog);
	Vue.use(Form);
	Vue.use(FormItem);
	Vue.use(Input);
	
	export default{
		data(){
			return{
				tableData: [],
				dialogData: {
					dialogTitle: '',
					dialogVisible: false,
				},
				isEdit: false,
				informId: '',
				formData: {
					title: '',
					content: '',
					publisher: '',
					timel: '',
				},
				rules: {
					title:[
						{ required: true, message: '请填写通知标题', trigger: 'blur' },
					],
					content:[
						{ required: true, message: '请填写通知内容', trigger: 'blur' },
					],
					publisher:[
						{ required: true, message: '请填写发布人姓名', trigger: 'blur' },
					],
				},
			}
		},
		methods: {
			//新增课程通知
			addInform(){
				let self = this;
				self.isEdit = false;
				self.dialogData.dialogTitle = '新增课程通知';
				self.dialogData.dialogVisible = true;
			},
			//编辑相关通知
			editData(row){
				let self = this;
				self.isEdit = true;
				self.dialogData.dialogTitle = '编辑课程通知';
				self.dialogData.dialogVisible = true;
				self.informId = row._id;
				self.$nextTick(()=>{
					for(let obj in row){
						if(obj != 'informId'){
							//编辑的时候 防止给formData 增加新属性:informId
							self.formData[obj] = row[obj];
						}
					}
				});
			},
			//提交表单
			sureDialog(formData){
				let self = this;
				self.$refs[formData].validate((valid) => {
					if(valid){
						let url = self.isEdit ? '/inform/upData' : '/inform/addData';
						url = AJAX_ADMIN + url;
						let data = self.formData;
						if(self.isEdit){
							//编辑,formData 一直没有 Id属性
							data.informId = self.informId;
						} else {
							//新增
							let time = new Date();
							data.time = time.getTime(); //时间撮
							data.timel = DateFormat.getNew(time)
						}
//						alert(JSON.stringify(data))
						$v.post(url,data,(d)=>{
							Message({
				            	type: 'success',
				            	message: self.isEdit ? '编辑成功' : '添加成功',
				            	duration: TIPS_TIEM
				          	});
							self.closeDialog();
							self.getData();
						})
					}
				})
			},
			//删除信息
			deleteData(row){
				let self = this;
				MessageBox.confirm("此操作将永久删除文件，是否继续？", "提示", {
					cancelButtonText: "取消",
					confirmButtonText: "确定",
    				type: 'warning',
    			}).then(()=>{
    				let url = AJAX_ADMIN + '/inform/delData';
    				let data = {};
    				data.informId = row._id;
//  				console.log(data)
    				$v.post(url, data, (d)=>{
    					Message({
			            	type: 'success',
			            	message: '删除成功！',
			            	duration: 2000
			          	});
			          	this.getData();
    				})
    			}).catch((e)=>{
//  				console.log(e.message)
    				Message({
					    type: 'info',
					    message: '已取消删除',
		            	duration: 2000
					});
    			})
			},
			//获取数据
			getData(){
				let url = AJAX_ADMIN + '/inform/getData';
				$v.get(url, (d) => {
//					console.log(d)
					this.tableData = d.data;
				});
//				this.tableData.map((item)=>{
//					let data = new Date(Number(item.time));
//					let time = DateFormat.getNew(data)
//					item.time = time;
//					console.log(item.time)
//					console.log(new Date(item.time))
//					console.log(new Date(item.time).getTime())
//				})
			},
			//dialog关闭函数
			closeDialog(done){
				let self = this;
				for(let i in self.formData){
					self.formData[i] = '';
				}
				self.$refs['formData'].resetFields();
				self.dialogData.dialogVisible = false;
				done ? done() : '';
			},
		},
		mounted(){
			if(!sessionStorage.getItem("islogin")){
	    		this.$router.push({path: '/login'});
	    	}
			this.getData();
		}
	}
</script>

<style lang="scss">
	div[data-teinform-box]{
		@import '~/assets/css/public.scss';
		.el-table{
		    padding-top: 20px;
		    .cell{
	    	    text-align: center;
	    	    white-space: nowrap;
				overflow: hidden;
			    text-overflow: ellipsis;
		    }
		}
		.el-dialog__wrapper{
    		overflow: hidden; 
		    .el-dialog{
			    margin: auto !important;
		        top: 15%;
		        overflow-y: auto;
    			max-height: 80%;
			    .el-dialog__header{
		    	    padding: 20px 20px 10px 20px;
			    	.el-dialog__title{
			    		font-size: 16px;
			    	}
			    }
			    .el-dialog__body{
			    	padding: 0px 20px 20px 20px;
			    	.el-form{
			    		.el-form-item{
			    			padding: 10px 0px;
			    			.el-form-item__label{
			    			}
			    		}
			    	}
			    	.button_bottom{
			    		padding: 20px 0px;
		    		    display: flex;
    					justify-content: flex-end;
			    	}
			    }
			}
		}
	}
</style>
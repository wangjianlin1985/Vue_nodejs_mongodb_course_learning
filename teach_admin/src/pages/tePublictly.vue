<template>
	<div data-tepublictly-box>
		<el-button type="primary" @click="addPublictly()" v-if="isAdd">添加</el-button>
		<el-table :data="tableData" class="table">
			<el-table-column label="宣传标题" prop="title" algin="center"></el-table-column>
			<el-table-column label="宣传标题(英文)" prop="subTitle" algin="center"></el-table-column>
			<el-table-column label="视频地址" prop="videoUrl" algin="center"></el-table-column>
			<el-table-column label="操作" algin="center">
				<template slot-scope="scope">
					<el-button type="text" @click="editData(scope.row)">编辑</el-button>
					<el-button type="text" @click="deleteData(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-dialog :title="dialogData.dialogTitle" :visible.sync="dialogData.dialogVisible" :before-close="closeDialog" @close="closeDialog">
			<el-form :model="formData" ref="formData" :rules="rules" class="form"label-position="left">
				<el-form-item label="宣传标题:" prop="title">
					<el-input v-model="formData.title"  placeholder="输入中文宣传标题"></el-input>
				</el-form-item>
				<el-form-item label="宣传标题(英文):" prop="subTitle">
					<el-input v-model="formData.subTitle" placeholder="输入英文宣传标题"></el-input>
				</el-form-item>
				<el-form-item label="宣传视频:" prop="videoUrl"  class="txt">
                    <el-upload
                        class="upload-demo"
                        :action="AJAX_ADMIN + '/upload'"
                        :accept="'video/mp4'"
                        :on-success="completeVideo"
                        :limit="1"
                        ref="upload"
                    >
                        <el-button size="small" type="primary">{{ formData.videoUrl ? '更换文件' : '点击上传'}}</el-button>
                        <div slot="tip" class="el-upload__tip">{{ formData.videoUrl ? '已上传' : '请选择视频文件'}}</div>
                    </el-upload>
                    <p>视频格式支持MP4</p>
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
	import Vue from 'vue';
	import {$v,videoUrl,TIPS_TIEM,AJAX_ADMIN} from '~/assets/js/const.js';
	
	import {Button,Table,TableColumn,MessageBox,Message,Dialog,Form,FormItem,Input,Upload} from 'element-ui';
	Vue.use(Button);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(Dialog);
	Vue.use(Form);
	Vue.use(FormItem);
	Vue.use(Input);
	Vue.use(Upload);
	
	export default{
		data(){
			return{
				AJAX_ADMIN: AJAX_ADMIN,
				isAdd: false,
				tableData: [],
				publictlyId: '',
				isEdit: false,
				dialogData: {
					dialogTitle: '',
					dialogVisible: false,
				},
				formData: {
					title: '',
					subTitle: '',
					videoUrl: '',
				},
				rules: {
					title:[
						{ required: true, message: '请填写标题', trigger: 'blur' },
					],
					subTitle:[
						{ required: true, message: '请填写标题(英文)', trigger: 'blur' },
					],
				},	
			}
		},
		methods:{
			//新增
			addPublictly(){
				let self = this;
				self.isEdit = false;
				self.dialogData.dialogTitle = '新增课程宣传';
				self.dialogData.dialogVisible = true;
			},
			//编辑
			editData(row){
				let self = this;
				self.isEdit = true;
				self.publictlyId = row._id;
				self.dialogData.dialogTitle = '编辑课程宣传';
				self.dialogData.dialogVisible = true;
				self.$nextTick(()=>{
					for(let obj in row){
						self.formData[obj] = row[obj];
					}
				});
			},
			//提交表单
			sureDialog(formData){
				let self = this;
				self.$refs[formData].validate((valid) => {
					if(valid){
						let data = {};
						let url = self.isEdit ? '/pbvideo/upData' : '/pbvideo/addData';
						url = AJAX_ADMIN +url ;
                        data = self.formData;
                        console.log(data);
						if(self.isEdit){
							//编辑
							data.publictlyId = self.publictlyId;
						}
                        console.log(data);
						$v.post(url, data, (d) => {
							Message({
					            	type: 'success',
					            	message: self.isEdit ? '编辑成功' : '添加成功',
					            	duration: TIPS_TIEM
                                  });
                            self.dialogData.dialogVisible = false;
                            self.getData();
						})
					}
				})
			},
			//删除
			deleteData(row){
				let self = this;
				MessageBox.confirm("此操作将永久删除文件，是否继续？", "提示", {
					cancelButtonText: "取消",
					confirmButtonText: "确定",
    				type: 'warning',
    			}).then(()=>{
    				let url = AJAX_ADMIN + '/pbvideo/delData'
    				let data = {};
    				data.publictlyId = row._id;
    				$v.post(url, data, (d)=>{
    					Message({
			            	type: 'success',
			            	message: '删除成功！',
			            	duration: 2000
			          	});
			          	this.getData();
    				})
    			}).catch(()=>{
    				Message({
					    type: 'info',
					    message: '已取消删除',
		            	duration: 2000
					});
    			})
			},
			//获取数据
			getData(){
				let url = AJAX_ADMIN + '/pbvideo/getData';
				$v.get(url, (d)=>{
					this.tableData = d.data;
					if (this.tableData.length > 0){
						this.isAdd = false;
					} else {
						this.isAdd = true;
					}
				})
			},
			//dialog关闭时清除数据
			closeDialog(done){
				let self = this;
				for(let i in self.formData){
					self.formData[i] = '';
				}
//				self.$refs['upload'].clearFiles(); //宣传视频就一个，所以添加一个之后将不会再添加
				self.$refs['formData'].resetFields();
				self.dialogData.dialogVisible = false;
				done ? done() : '';
			},
			completeVideo(response, file, fileList){
                if (response.meta.result == 'SUCCESS') {
                    this.formData.videoUrl = response.data.filename;
                    this.$forceUpdate();  //重新渲染
                } else {
                    Message.error({message: response.meta.message, duration: TIPS_TIEM});
                }
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
	/*@import '~/assets/css/public.scss';*/
	div[data-tepublictly-box]{
		.el-table{
			margin-top: 20px;
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
			    	padding: 10px 20px;
			    	.el-form{
			    		.el-form-item{
			    			padding: 10px 0px;
			    			.el-form-item__label{
			    				display: block;
			    			}
			    			.el-form-item__content{
			    				display: block;
							    width: 100%;
							    /*overflow: hidden;*/
			    			}
			    		}
			    		.txt{
			    			.el-form-item__label{
			    				font-weight: bold;
    							font-size: 16px;
			    			}
			    			.el-form-item__content{
								overflow: hidden;
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
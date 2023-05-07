<template>
	<div data-teoutline-box>
		<el-button type="primary" @click="addCourse()" v-if="isAdd">添加</el-button>
		<el-table :data="tableData" class="table">
			<el-table-column label="课程名" prop="courseName" algin="center"></el-table-column>
			<el-table-column label="课程代码" prop="courseCode" algin="center"></el-table-column>
			<el-table-column label="学分数" prop="credit" algin="center"></el-table-column>
			<el-table-column label="执笔人" prop="penner" algin="center"></el-table-column>
			<el-table-column label="审核人" prop="auditor" algin="center"></el-table-column>
			<el-table-column label="操作" algin="center">
				<template slot-scope="scope">
					<el-button type="text" @click="editData(scope.row)">编辑</el-button>
					<el-button type="text" @click="deleteData(scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-dialog :title="dialogData.dialogTitle" :visible.sync="dialogData.dialogVisible" :before-close="closeDialog" @close="closeDialog">
			<el-form :model="formData" ref="formData" :rules="rules" class="form"label-position="left">
				<el-form-item label="课程名:" prop="courseName">
					<el-input v-model="formData.courseName"  placeholder="输入中文课程名"></el-input>
				</el-form-item>
				<el-form-item label="课程名（英文）:" prop="courseNameEn">
					<el-input v-model="formData.courseNameEn" placeholder="输入英文课程名"></el-input>
				</el-form-item>
				<el-form-item label="课程代码:" prop="courseCode">
					<el-input v-model="formData.courseCode" placeholder="输入课程代码"></el-input>
				</el-form-item>
				<el-form-item label="学时数" prop="period">
					<el-input v-model="formData.period" placeholder="输入学时数"></el-input>
				</el-form-item>
				<el-form-item label="学分数" prop="credit">
					<el-input v-model="formData.credit" placeholder="输入学分数"></el-input>
				</el-form-item>
				<el-form-item label="执笔人" prop="penner">
					<el-input v-model="formData.penner" placeholder="输入执笔人"></el-input>
				</el-form-item>
				<el-form-item  label="讨论参加人" prop="discussants" >
					<el-input v-model="formData.discussants" placeholder="输入讨论参加人"></el-input>
				</el-form-item>
				<el-form-item  label="审核人" prop="auditor" >
					<el-input v-model="formData.auditor" placeholder="输入审核人"></el-input>
				</el-form-item>
				<el-form-item  label="富文本内容" prop="textUrl" class="txt">
					<Editor v-if="dialogData.dialogVisible" :url="formData.textUrl" @get-url="getUrl" flag="1" ref="editor"></Editor>
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
	import {$v, srcUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	import Editor from '~/component/common/Editor'; 
	import {Button,Table,TableColumn,Dialog,Form,FormItem,Input,MessageBox,Message} from 'element-ui';
	Vue.use(Button);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(Dialog);
	Vue.use(Form);
	Vue.use(FormItem);
	Vue.use(Input);
	
	
	export default{
		components:{
			Editor,
		},
		data(){
			return{
				tableData: [],
				isAdd: false,
				dialogData: {
					dialogTitle:'',
					dialogVisible: false,
				},
				courseId:'',//数据Id
				isEdit: false, //编辑为true， 新增为false；
				formData: { //form表单数据
						courseName: '',//课程名
						courseNameEn: '',//课程名英文
						courseCode: '',//课程代码
						period: '',//学时数
						credit: '',//学分数
						penner:'',//执笔人
						discussants: '',//讨论参加人
						auditor: '',//审核人
						textUrl: '',
				},
				rules: {
					courseName:[
						{ required: true, message: '请填写课程名', trigger: 'blur' },
					],
					courseNameEn:[
						{ required: true, message: '请填写课程名（英文）', trigger: 'blur' },
					],
					courseCode:[
						{ required: true, message: '请填写课程代码', trigger: 'blur' },
					],
					period:[
						{ required: true, message: '请填写学时数', trigger: 'blur' },
					],
					credit:[
						{ required: true, message: '请填写学分数', trigger: 'blur' },
					],
					penner:[
						{ required: true, message: '请填写执笔人', trigger: 'blur' },
					],
					discussants:[
						{ required: true, message: '请填写讨论参加人', trigger: 'blur' },
					],
					auditor:[
						{ required: true, message: '请填写审核人', trigger: 'blur' },
					],
				},
			}
		},
		methods:{
			//新增
			addCourse(){
				let self = this;
				self.isEdit = false;
				self.dialogData.dialogTitle = '新增课程大纲';
				self.dialogData.dialogVisible = true;
			},
			//编辑
			editData(row){
				let self = this;
				self.isEdit = true;
				self.courseId = row._id;
				self.dialogData.dialogTitle = '编辑课程大纲';
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
						self.$refs['editor'].getUrl();
					}
				})
			},
			// 获取富文本上传地址
			getUrl(urlText, flag, result){
				let self = this;
//              let index = Number(flag)
                if(result == 'SUCCESS'){
                    self.formData.textUrl = urlText;
                } else {
                    self.formData.textUrl = '';
                }
                let data = self.formData;
                let url = self.isEdit ? '/outline/upData' : '/outline/addData';
                url = AJAX_ADMIN + url;
                if(self.isEdit){
                	//编辑
                	data.courseId = self.courseId;
                }
//				alert(JSON.stringify(data))
				$v.post(url, data, (d) => {
					Message({
			            	type: 'success',
			            	message: self.isEdit ? '编辑成功' : '添加成功',
			            	duration: TIPS_TIEM
			          	});
					self.closeDialog();
					self.getData();
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
    				let url = AJAX_ADMIN + '/outline/delData'
    				let data = {};
    				data.courseId = row._id;
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
				let url = AJAX_ADMIN + '/outline/getData';
				$v.get(url, (d) => {
					this.tableData = d.data;
					if(this.tableData.length >0 ){
						this.isAdd = false;
					} else {
						this.isAdd = true;
					}
				});
//				this.tableData = [
//					{
//						_id: '1',
//						courseName: '汇编语言程序设计',
//						courseNameEn: 'Assembler Language Programming',
//						courseCode: '901130458',
//						period: '58（理论学时48，实验学时10）',
//						credit: '3.5',
//						penner:'李娜',
//						discussants: '李娜、徐静',
//						auditor: '金莉',
//						textUrl: 'group1/M00/00/35/CngaWFo_EpyAdkjUAAAA-wR0yh485.html',
//					}
//				]
			},
			//dialog关闭时清除数据
			closeDialog(done){
				let self = this;
				for(let i in self.formData){
					self.formData[i] = '';
				}
				self.$refs['formData'].resetFields();
				self.dialogData.dialogVisible = false;
				done ? done() : '';
			}
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
	div[data-teoutline-box]{
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
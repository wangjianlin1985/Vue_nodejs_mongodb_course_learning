<template>
	<div data-login-box>
		<div class="login_box">
			<div class="login_layout">
				<h1>登　录</h1>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-form-item label="" prop="username">
                        <em class="ico account_ico"></em>
                        <el-input v-model="ruleForm.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password">
                        <em class="ico pass_ico"></em>
                        <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="onSubmit('ruleForm')">登　录</el-button>
                    </el-form-item>
                </el-form>
			</div>
		</div>
	</div>
</template>

<script type="es6">
	import Vue from 'vue';
	import {Form,FormItem,Button,Input,MessageBox,Message,} from 'element-ui';
	Vue.use(Form);
	Vue.use(Input);
	Vue.use(FormItem);
	Vue.use(Button);
	export default{
		data(){
			return{
				ruleForm: { //表单数据绑定
		            username: '',
		            password: '',
		        },
		        rules: { //表单验证规则绑定
		            username: [
		                { required: true, message: '请输入账号', trigger: 'blur' },
		            ],
		            password: [
		                { required: true, message: '请输入密码', trigger: 'blur' },
		            ],
		        }
			}
		},
		methods: {
			onSubmit(formName){
				let self = this;
            	self.$refs[formName].validate((valid) => {
            		if (valid) {
            			//if(self.ruleForm.username == 'teach_admin' && self.ruleForm.password == '1q2w3e4r'){
                        if(self.ruleForm.username == 'teacher' && self.ruleForm.password == '123456'){
            				sessionStorage.setItem("islogin",true);
            				this.$router.push({path: '/'});
            			} else {
            				Message({
				            	type: 'error',
				            	message: '账号或密码错误！',
				            	duration: 2000
				          	});
            				self.ruleForm.username = '';
            				self.ruleForm.password = '';
            			}
            		}
            	})
			}
		},
		mounted(){
		}
	}
</script>

<style lang="scss">
	div[data-login-box]{
		height: 100vh;
		min-width: 1000px !important;
		background: url('../assets/img/login_bg.jpg') center no-repeat;
	    background-size: 100%;
	    position: relative;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
	    .login_box{
	        width: 340px;
	        height: 390px;
	        position: absolute;
	        right: 150px;
	        top: 0;
	        bottom: 0;
	        margin: auto 0;
	        &:before{
	            content: '';
	            position: absolute;
	            left: 0;
	            right: 0;
	            top: 0;
	            bottom: 0;
	            background-color: #fff;
	            opacity: .6;
	            border-radius: 5px;
	            box-shadow: #666 5px 5px 5px; 
	        }
	    }
	    .login_layout{
	        position: absolute;
	        left: 0;
	        right: 0;
	        top: 0;
	        bottom: 0;
	        padding: 30px;
	        & > h1{
	            font-size: 16px;
	            margin-bottom: 30px;
	            color: #888;
	            font-weight: 600;
	        }
	        .el-form-item__content{
	            display: flex;
	            margin-bottom: 6px;
	            em.ico{
	                width: 49px;
	                height: 50px;
	                display: inline-block;
	                &.account_ico{
	                    background-image: url(../assets/img/login_account.png);
	                }
	                &.pass_ico{
	                    background-image: url(../assets/img/login_password.png);
	                }
	            }
	            .el-input{
	                flex: 1;
	                input.el-input__inner{
	                    height: 40px;
	                    line-height: inherit;
	                }
	            }
	            .el-form-item__error{
	                margin-left: 49px;
	            }
	            .el-button{
	                height: 45px;
	                width: 100%;
	            }
	            .code_img{
	                width: 78px;
	                height: 40px;
	                margin-left: 15px;
	                cursor: pointer;
	            }
	        }
	    }
	}
</style>
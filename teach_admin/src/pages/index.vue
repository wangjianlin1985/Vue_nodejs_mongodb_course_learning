<template>
	<!--首页-->
    <div data-index-box>
        <el-container>
  			<el-aside width="250px">
               	<el-menu :unique-opened="true" :router="true" :default-active="$route.path">
                    <el-menu-item v-for="(item, index) in subMenuList" :key="index" :index="item.menuUrl" :route="{path:item.menuUrl}">
                        <span v-text="item.menuName"></span>
                    </el-menu-item>
                </el-menu>
  			</el-aside>
  			<el-main>
  				<div class="content_box" ref="content_box">
	                <div class="content_layout">
	                    <router-view></router-view>
	                </div>
	            </div>
  			</el-main>
		</el-container>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    import { Container, Aside, Main,Menu, menuItem,} from 'element-ui';
    Vue.use(Container);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Menu);
    Vue.use(menuItem);
    
    
//  import { AlertPlugin, LocalePlugin } from 'vux';
//  Vue.use(AlertPlugin);
//  Vue.use(LocalePlugin);

    export default {
    	data() {
            return {
            	subMenuList:[
            	{ 
            		menuName: '教学视频',
            		menuUrl: '/teVideo',
            	},{
            		menuName: '教学课件',
            		menuUrl: '/teCourseware',
            	},{
            		menuName: '教学实例',
            		menuUrl: '/teCode',
            	},{
            		menuName: '课程通知',
            		menuUrl: '/teInform',
            	},{
            		menuName: '课程大纲',
            		menuUrl: '/teOutline',
            	},{
            		menuName: '课程宣传',
            		menuUrl: '/tePublictly',
            	}],
            	
            }
        },
    	components:{
    		
       	},
       	methods: {
       		click(url){
//     			:route="{path:item.menuUrl}"
//				this.$router.push({path: url});
//     			alert(url)
       		}
       	},
        mounted() {
//          console.log(this.$locale.get())
            // axios.get('/cq-ocms/site/tenant?siteId=141&langId=1&acceptPortal=1&sessionId=&lang=zh_TW')
            // .then((d) => {
            //    console.log(d)
            // })
            
//			vux:移动UI库         
//          this.$locale.set('en')
//          this.$vux.alert.show({
//              title: 'Vux is Cool',
//              content: 'Do you agree?',
//              onShow () {
//                  console.log('Plugin: I\'m showing')
//              },
//              onHide () {
//                  console.log('Plugin: I\'m hiding')
//              }
//          })
       },
    }
</script>

<style lang="scss">
    @import '~/assets/css/public';
    div[data-index-box] {
		position: relative;
		min-width: 1000px;
		.el-container{
			.el-aside{
				min-height: 100%;
    			background-color: #3F3F3F;
    			padding-top: 40px;
				.el-menu{
					background-color: #3F3F3F;
					/*width: 100% !important;*/
					border-right: none;
					.el-menu-item{
						height: 40px;
    					line-height: 40px;
						>span{
							color: #fff;
    						margin-left: 30px;
						}
						&.is-active,&:hover{
                            background-color: #DD5151;
	                        >span{
	                            color: #fff;
	                        }
						}
					}
				}
			}
			.el-main{
				min-height: 650px;
				padding-top: 40px;
			}
		}
	   .content_box{
	//     padding-top: 12px;
	       padding-bottom: 30px;
	       .content_layout{
	//         border: 1px #e4e4e4 solid;
	           border-radius: 4px;
	           background-color: #fff;
	           padding: 20px 25px;
	       }
	   }
    }
</style>
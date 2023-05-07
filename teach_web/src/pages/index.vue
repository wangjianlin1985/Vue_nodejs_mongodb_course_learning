<template>
	<!--首页-->
    <div data-index-box>
        <Carousel></Carousel>
        <Courses></Courses>
        <PublicityVideo></PublicityVideo>
        <Footer></Footer>
        <Copyright></Copyright>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';
    import Carousel from '~/component/cms/Carousel';
    import Courses from '~/component/cms/Courses';
    import PublicityVideo from '~/component/common/PublicityVideo';
    import Footer from '~/component/common/Footer';
    import Copyright from '~/component/common/Copyright';
//  import { Button, Select } from 'element-ui';
//  Vue.use(Button);
    
//  import { AlertPlugin, LocalePlugin } from 'vux';
//  Vue.use(AlertPlugin);
//  Vue.use(LocalePlugin);

    export default {
    	data() {
            return {
            	zhangpeng : {
            		name : '张鹏',
            		age: 21,
            	},
            	aaa:{},
            }
        },
    	components:{
       		Carousel,
       		Courses,
       		PublicityVideo,
       		Footer,
       		Copyright,
       	},
       	methods: {
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
        /*span{
            color: blue;
            display: flex;
        }
        .img_box{
            display: block;
            width: 60px;
            height: 60px;
            background-image: url(../assets/img/companyActivity-checked.png);
        }*/
    }
</style>
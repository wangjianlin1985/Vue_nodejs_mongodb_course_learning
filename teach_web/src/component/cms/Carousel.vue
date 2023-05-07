<template>
    <!-- 轮播图及入口 -->
    <div data-globaladv-box>
        <el-carousel height="100vh" :interval="2000" arrow="hover">
            <el-carousel-item v-for="(item, index) in list" :key="index">
                <img :src="item.img" />
                <!--{{index}}-->
            </el-carousel-item>
        </el-carousel>
        <div class="common_width quitmenu" v-if="list.length > 0">
            <el-row>
                <el-col :xs="8" :sm='8' :md='8' :lg='8'  v-for="(item,index) in quitlist" :key="index">
                    <a class="all_menus" @click="goLink(item)">
                        <div class="img_div"><img :src="item.imgUrl" /></div>
                        <div class="content_div" >
                            <div class="content_title">{{item.title}}</div>
                            <!-- <div class="content_content">{{item.content}}</div> -->
                        </div>
                        <div class="back_big_img"><img :src="item.imgUrl"/></div>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Carousel, CarouselItem, Button, Row, Col} from 'element-ui';
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Button);
    Vue.use(Row);
    Vue.use(Col);
    export default {
        data() {
            return {
                list: [],
                quitlist: []
            }
        },
        mounted() {
			Vue.nextTick(()=>{
				this.list = [
					{img: require('../../assets/img/carouse_one.jpg')},
					{img: require('../../assets/img/carouse_two.jpg')},
					{img: require('../../assets/img/carouse_three.jpg')},
				];
				this.quitlist = [
					{
						imgUrl: require('../../assets/img/icon_one.png'),
						title: '教学视频',
						linkUrl: '/teVideo'
					},
					{
						imgUrl: require('../../assets/img/icon_two.png'),
						title: '教学课件',
						linkUrl: '/teCourseware'
					},
					{
						imgUrl: require('../../assets/img/icon_three.png'),
						title: '教学实例',
						linkUrl: '/teCode'
//						linkUrl: 'www.baidu.com'
					}
				];
			})
        },
        methods: {
        	goLink(item){
//				alert(JSON.stringify(item.linkUrl))
//				window.location.href = item.linkUrl;
				this.$router.push(item.linkUrl)
        	}
        }
    }
</script>

<style lang="scss">
    @import '~/assets/css/response.scss';
    div[data-globaladv-box] {
        position: relative;
        overflow: hidden;
        width: 100%;
        .el-carousel {
            width: 100%;
            display: block;
            .el-carousel__indicators {
                display: none;
                >li {
                    .el-carousel__button {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                    }
                }
            }
            .el-carousel__container {
                .el-carousel__item {
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    .el-button {
                        position: absolute;
                        left: 50%;
                        margin-left: -70px;
                        bottom: 120px;
                        min-width: 140px;
                        height: 40px;
                        border: 1px #fff solid;
                        border-radius: 0;
                        background-color: transparent;
                        color: #fff;
                    }
                    img{
                        min-height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
        .quitmenu {
            text-align: center;
            padding: 0 10px;
            box-sizing: border-box;
            bottom: 0;
            position: absolute;
            z-index: 11;
            left: 50%;
            transform: translateX(-50%);
            .el-row{
                margin: 0 -10px;
                .el-col{
                    padding: 20px 3px;
                    &:hover {
                        height: 120px;
                    }
                }
            }
            .all_menus {
                cursor: pointer;
                border-radius: 15px;
                &:hover {
                    transform: translateY(-14px);
                    opacity: 1;
                    transition: all 0.1s linear;
                    min-height: 116px;
                }
                // border-color: #e93730;
                // border-radius: 0px;
                width: 100%;
                display: flex;
                align-items: center;
                /*margin-top: 20px;*/
                /*background-color: #e93730;*/
                background-color: rgba(63, 114, 181, 0.76);
                min-height: 100px;
                vertical-align: top;
                position: relative;
                padding: 20px 50px;
                box-sizing: border-box;
                .img_div {
                    width: 34px;
                    height: 34px;
                    display: inline-block;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .content_div {
                    display: inline-block;
                    flex:1;
                    text-align: initial;
                    margin-left: 32px;
                    padding-right: 30px;
                    .content_title {
                        font-weight: 700;
                        font-style: normal;
                        font-size: 14px;
                        color: #fff;
                        // padding-bottom:15px;
                    }
                }
                .back_big_img {
                    position: absolute;
                    right: 50px;
                    bottom: 0px;
                    opacity:0.25;
                    width: 76px;
                    height: 70px;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
            }
        }          
        @include media-xs(){
            .el-carousel__container {
                height: 200px !important;
            }
            .quitmenu {
                text-align: center;
                padding: 0 10px;
                box-sizing: border-box;
                top: 0px !important;
                background-color: #fff;
                position: relative;
                z-index: 11;
                .el-row{
                    .el-col{
                        padding-top: 10px;
                        padding-bottom: 30px;
                        &:hover {
                            height: 100px !important;
                        }
                    }
                }
                .all_menus {
                    &:hover {
                        transform: translateY(0px);
                        opacity: 1;
                    }
                    display: inline-block;
                    width: 60px !important;
                    border-radius: 100%;
                    height: 60px !important;
                    // display: flex;
                    min-height: 60px !important;
                    min-width: 60px;
                    vertical-align: top;
                    position: relative;
                    padding: 0px !important;
                    .img_div{
                        display: block;
                        width: 30px;
                        height: 30px;
                        margin: 0 auto;
                        margin-top: 15px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .content_div{
                        margin: 20px 0;
                        width: 60px;
                        padding: 0px;
                        display: block;
                        .content_title {
                            font-size: 10px;
                            text-align: center;
                            color: #475669;
                        }
                    }
                    .back_big_img {
                        display: none;
                    }
                }
            }
		}
    }
</style>
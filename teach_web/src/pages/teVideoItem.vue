<template>
	<!--教学实例Item-->
	<div data-tevideoitem-box>
		<TeachBanner :modelChild = "modelFather"></TeachBanner>
		<!--<pre>{{data}}</pre>-->
		<div class="videoDiv">
			<div class="contentDiv">
	            <el-row>
	                <!--<el-col :lg="12" :md="12" :sm="12" :xs="24">
	                </el-col>-->
	                <el-col class="video_img" :lg="24" :md="24" :sm="24" :xs="24">
	                    <div class="video" :class="videoClass" v-if="data != {}">
	                        <div class="show_content_box">
	                            <img :src="data.videoBgImg" />
	                            <div class="layout_box">
	                                <button @click="videoPlay">
	                                    <img  class= "video_button" :src="video_button" />
	                                </button>
	                            </div>
	                        </div>
	                        <video-player  
	                            ref="videoPlayer"
	                            :options="playerOptions"
	                            :playsinline="true"
	                            @play="onPlayerPlay($event)"
	                            @pause="onPlayerPause($event)"
	                            @statechanged="playerStateChanged($event)"
	                            @ready="playerReadied">
	                        </video-player>
	                    </div>
	                </el-col>
	            </el-row>
	        </div>
			
		</div>
		<Footer></Footer>
        <Copyright></Copyright>
	</div>
</template>

<script type="es6">
	require('vue-video-player/node_modules/video.js/dist/video-js.css')
	require('vue-video-player/src/custom-theme.css')
	import Vue from 'vue';
    import axios from 'axios';
	import {$v, videoUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	import TeachBanner from '~/component/common/TeachBanner';
	import Footer from '~/component/common/Footer';
    import Copyright from '~/component/common/Copyright';
    
    import {Row, Col} from 'element-ui';
    Vue.use(Row);
    Vue.use(Col);
    import VueVideoPlayer from 'vue-video-player';
    Vue.use(VueVideoPlayer);
	export default {
		components:{
			TeachBanner,
			Footer,
       		Copyright,
		},
		data(){
			return{
				videoUrl:videoUrl,
				data: {},
				videoClass: 'video_player_box',
				video_button: require('../assets/img/video_button.png'),//按钮样式
				modelFather: {
					srcUrl: require('../assets/img/banner_videoitem.jpg'),
					title: '',
				}
			}
		},
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playerOptions() {
				//if(this.list != {})
				if(this.data != {}) {
					return {
						language: 'en',
						playbackRates: [0.7, 1.0, 1.5, 2.0],
						sources: [{
							type: 'video/mp4',
							src: this.videoUrl + this.data.videoUrl
						}],
						poster: this.data.videoBgImg,
						height: 400,
					}
				}
				return {};
            }
        },
		methods: {
			// 播放时操作
            onPlayerPlay(player) {
                this.videoClass = 'video_player_seed';
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            // ...player event
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                //console.log('the player is readied', player)
            },
            //点击播放
            videoPlay() {
                this.$refs.videoPlayer.player.bigPlayButton.el_.click();
            }
		},
		beforeMount(){

		},
		mounted(){
			//json 通过路由传递 转成字符串传递
			this.data = JSON.parse(this.$route.query.obj)
			this.data.videoBgImg = require('../assets/img/video_bgImg.jpg');
//			sectionName
			this.modelFather.title = this.data.chapterName + ' '+'/' +' '+ this.data.sectionName + ' '+':' +' '+this.data.sectionTitle;
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-tevideoitem-box]{
		div[data-teachbanner-box]{
			.bannerDiv .bannertitle{color: white;}
		}
		.videoDiv{
			width: 100%;
			background-image: url('../assets/img/videoback.png');
	        $box_height: 350px;
	        position: relative;
	        padding-bottom: 80px;
	        padding-top: 80px;
	        background-repeat: no-repeat;
	        background-size: 100% 100%;
	        .contentDiv{
	        	width: 70%;
	        	margin: auto;
	        	.video {
		            position: relative;
		            .show_content_box{
		                display: none;
		            }
		        }
		        .video_player_box{
		            .show_content_box{
		                display: block;
		                position: absolute;
		                width: 100%;
		                height: $box_height;
		                overflow: hidden;
		                left: 0;
		                top: 0;
		                z-index: 1;
		                text-align: center;
		                box-sizing: border-box;
		                img{
		                    position: absolute;
		                    left: 0;
		                    top: 0;
		                    width: 100%;
		                    height: 100%;
		                    object-fit: cover;
		                }
		                .layout_box{
		                    position: relative;
		                    z-index: 1;
		                    padding-top: 155px;
		                    p{
		                        font-size: 40px;
		                        color: #fff;
		                        line-height: 58px;
		                        text-align: center;
		                    }
		                    button {
		                        position: relative;
		                        width: 50px;
		                        height: 50px;
		                        display: block;
		                        margin: 0 auto;
		                        cursor: pointer;
		                        outline: none;
		                        border: none;
		                        background-color: transparent;
		                        .video_button {
		                            width: 50px;
		                            height: 50px;
		                            display: block;
		                            margin: 0 auto;
		                        }
		                    }
		                    span{
		                        line-height: 46px;
		                        color: #fff;
		                    }
		                }
		            }
		            .video-player{
		            	.video-js{
		            		width: 100% !important;
		            	}
		            }
		        }
		        .video_player_seed{
		        	.video-player{
		            	.video-js{
		            		width: 100% !important;
		            		>button{
		            			top: 50%;
								left: 50%;
								transform:translate(-50%,-50%);
		            		}
		            	}
		            }
		        }
	        	
	        }
	        
		}
		
		@include media-sm(){
			
		}
		@include media-xs(){
			.videoDiv{
				.contentDiv{
					width: 96%;
				}
			}
		}
	}
</style>
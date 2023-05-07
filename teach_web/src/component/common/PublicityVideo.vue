<template>
	<!--宣传视频-->
    <div data-publicityvideo-box>
        <div class="common_width">
            <el-row>
                <el-col :lg="12" :md="12" :sm="12" :xs="24">
                    <div class="video_title"  v-if="list != {}">
                        <p class="title1">{{list.title}}</p>
                        <p class="title2">{{list.subTitle}}</p>
                    </div>
                </el-col>
                <el-col class="video_img" :lg="12" :md="12" :sm="12" :xs="24">
                    <div class="video" :class="videoClass" v-if="list != {}">
                        <div class="show_content_box">
                            <img :src="list.videoBgImg" />
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
</template>

<script>
	require('vue-video-player/node_modules/video.js/dist/video-js.css')
	require('vue-video-player/src/custom-theme.css')
    import Vue from "vue";
    import VueVideoPlayer from 'vue-video-player';
    Vue.use(VueVideoPlayer);
    
    import {$v, videoUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
    
    export default {
        data(){
            return{
                videoUrl: videoUrl,
                AJAX_ADMIN: AJAX_ADMIN,
                videoClass: 'video_player_box',
                video_button: require('../../assets/img/video_button.png'),
                list: {},
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            },
            playerOptions() {
                if(this.list != {}) {
                    return {
                        language: 'en',
                        playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: 'video/mp4',
                            src: this.videoUrl + this.list.videoUrl
//							src: 'http://localhost:4000/img/06328d4dcf58762c3b2e03d70e3e9f19.mp4'
                        }],
                        poster: this.list.videoBgImg,
                        height: 350,
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
        mounted() {
			let url = AJAX_ADMIN + '/pbvideo/getData';
			$v.get(url, (d)=>{
				this.list = d.data[0];
				this.list.videoBgImg = require('../../assets/img/video_bg.jpg');
			})
        },
    }
</script>

<style lang="scss">
    @import '~/assets/css/response';
    div[data-publicityvideo-box]{
        background-image: url('../../assets/img/videoback.png');
        $box_height: 350px;
        position: relative;
        padding-bottom: 80px;
        padding-top: 80px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .video_title {
            padding-top: 80px;
            .title1 {
                font-weight: bold;
                font-size: 28px;
                color: rgba(71, 85, 105, 0.8);
                width: 100%;
                line-height: 48px;
                // word-break: keep-all;
                padding-bottom: 10px;
                position: relative;
                &:after {
                    content: '';
                    width: 40px;
                    height: 4px;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    background-color: #3c79bb;
                }
            }
            .title2 {
                font-weight: bold;
                color: rgba(71, 85, 105, 0.8);
                width: 100%;
                margin-top: 40px;
                word-break: keep-all;
                font-size: 18px;
            }
        }
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
        @include media-xs(){
            padding-top: 50px;
            padding-bottom: 50px;
            .el-row {
                margin:0 7px;
            }
            .video_title {
                text-align: center;
                padding-top: 10px !important;
                .title1 {
                    &:after {
                        left: 50%;
                        transform: translateX(-50%);
                    } 
                }
                .title2 {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
            }
        }
    }
</style>


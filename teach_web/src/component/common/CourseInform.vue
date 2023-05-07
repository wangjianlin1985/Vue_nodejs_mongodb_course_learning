<template>
	<div data-courseinform-box>
		<div class="logo">
			<div class="imgDiv">
				<img src="../../assets/img/inform.png" />
			</div>
			<span class="title">课程通知</span>
		</div>
		<div class="content">
			<div v-for="(item, index) in list" class="item">
				<span class="itemtitle">{{item.title}}</span>
				<span class="itemcontent">{{item.content}}</span>
				<span class="itemtime">{{item.timel}}</span>
			</div>
			<div class="moreDiv">
				<span class="moreSpan" @click="goMore()">查看更多>></span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {$v, srcUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
	export default {
		data(){
			return{
				list: [],
				listAll: [],
			}
		},
		methods: {
			//跳转通知页面
			goMore(){
//				window.location.href= "/inform";
				this.$router.push({path: '/couInform'});
			}
		},
		mounted(){
			let url = AJAX_ADMIN + '/inform/getData';
			$v.get(url, (d) => {
				this.listAll = d.data;
//				alert(JSON.stringify(this.listAll))
				if(this.listAll.length < 5){
					this.list = this.listAll;
				} else {
					let brr = [];
					for(let i=0; i<=4; i++){
						brr.push(this.listAll[i])
					};
					this.list = brr;
				}
			});
		}
	}
</script>

<style lang="scss">
	@import '~/assets/css/response.scss';
	div[data-courseinform-box]{
		width: 40%;
		background: rgba(63, 81, 181, 0.18);
	    padding-top: 20px;
	    border-radius: 30px;
		.logo{
		    display: flex;
    		align-items: center;
		    margin-left: 20px;
		    .imgDiv{
	    	    width: 32px;
    			height: 32px;
		    }
		    .title{
		    	margin-left: 10px;
	    	    font-size: 18px;
    	        border-bottom: 2px solid #4CAF50;
    	        width: 20%;
    	        line-height: 32px;
		    }
		}
		.content{
		    margin: 20px 10px;
			.item{
				display: block;
				padding: 10px 0px 10px 42px;
				>span{
					line-height: 22px;
					font-size: 14px;
					display: inline-block;
					/*不换行/隐藏/省略号*/
				    white-space: nowrap;
    				overflow: hidden;
				    text-overflow: ellipsis;
				}
				.itemtitle{
				    float: left;
					width: 20%;
				}
				.itemcontent{
				    width: 40%;
		            padding: 0 5%;
				}
				.itemtime{
					width: 30%;
				    float: right;
				}
				&:hover{
					background-color: rgba(96, 125, 139, 0.29);
				}
			}
			.moreDiv{
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 10px 0 10px 42px;
				.moreSpan{
					line-height: 22px;
					font-size: 14px;
					float: right;
				    width: 30%;
				    cursor: pointer;
				    &:hover{
				    	color: red;
				    }
				}
			}
		}
		@include media-sm(){
			.logo .title{
    	        width: 30%;
    	    }
		}
		@include media-xs(){
		 	width: 95%;
    		margin: auto !important;
	 		.logo .title{
    	        width: 30%;
    	    }
		 	.content{
 			    margin: 20px 0px;
 			    .item{
		    	    padding: 10px 0 10px 20px;
		    	    .itemtitle{
		    	    	width: 25%;
		    	    }
		    	    .itemcontent{
	    	    	    width: 30%;
	    	    	    padding: 0 20px;
		    	    }
		    	    .itemtime{
	    	    	    width: 28%;
		    	    }
 			    }
 			    .moreDiv{
	 				padding: 10px 0 10px 20px;
	 				.moreSpan{
	 					width: 28%;
	 				}
	 			}
	 		}
		}
	}
</style>
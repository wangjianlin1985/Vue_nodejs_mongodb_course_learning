<template>
	<div data-footer-box>
		<div class="leftDiv">
			<div class="items">
				<div class="content">
					<div class="imgDiv"><img src="../../assets/img/address.png" /></div>
					<span class="leftSpan">地址:</span>
					<span class="rightSpan">辽宁省沈阳市沈河区东陵路120号</span>
				</div>
				<div class="content">
					<div class="imgDiv"><img src="../../assets/img/postcode.png" /></div>
					<span class="leftSpan">邮编:</span>
					<span class="rightSpan">110866</span>
				</div>
			</div>
			<div class="items">
				<div class="content">
					<div class="imgDiv"><img src="../../assets/img/phone.png" /></div>
					<span class="leftSpan">联系电话:</span>
					<span class="rightSpan">024-82976881</span>
				</div>
				<div class="content">
					<div class="imgDiv"><img src="../../assets/img/email.png" /></div>
					<span class="leftSpan">电邮:</span>
					<span class="rightSpan">xxxx@163.com</span>
				</div>
			</div>
		</div>
		<div class="rightDiv">
			<div class="imgDiv">
				<a href="http://www.syau.edu.cn/" target="_blank"><img src="../../assets/img/school.png" /></a>
			</div>
			<div class="imgDiv">
				<a href="/" ><img src="../../assets/img/home_page.jpg" /></a>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	export default {
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods: {
			
		},
		mounted(){
			
		},
	}
</script>

<style lang="scss">
	@import '~/assets/css/response';
	div[data-footer-box]{
		padding: 50px 0px;
		display: flex;
	    width: 90%;
	    margin: auto;
        display: flex;
    	/*justify-content: space-between;*/
		.leftDiv{
		    width: 70%;
		    .items{
		    	padding: 10px 0px;
		    	.content{
	    		    display: inline-flex;
	    		    align-items: center;
	    		    width: 55%;
		    		&:last-child{
	    			    width: 45%;
		    			/*padding-left: 10px;*/
		    		}
		    		.imgDiv{
		    			width: 24px;
	    			    display: inline-block;
		    			>img{
		    				width: 100%;
		    			}
		    		}
		    		.leftSpan{
		    			font-weight: bolder;
		    			padding-left: 15px;
		    		}
		    		.rightSpan{
		    			padding-left: 15px;
		    		}
		    	}
		    }
		}
		.rightDiv{
		    width: 20%;
	        padding-left: 10%;
		    display: flex;
		    justify-content: space-between;
			.imgDiv{
				width: 80px;
				height: 80px;
				img{
					width: 100%;
					border-radius: 40px;
				}
				&:last-child{
					padding-left: 20px;
				}
			}
		}
		@include media-sm(){
			width: 95%;
			.leftDiv{
				width: 80%;
			}
			.rightDiv{
			    padding-left: 10px;
			    width: 15%;
			}
		}
		
		@include media-xs(){
			padding: 20px 0px;
			display: block;
			.leftDiv{
				width: 100%;
				padding-bottom: 10px;
				.items{
					padding: 0px;
					.content{
						display: flex;
						padding: 10px 0px;
						width: 100%;
						&:last-child{
							width: 100%;
						}
					}
				}
			}
			.rightDiv{
				width: 95%;
				padding: 0px;
				justify-content: flex-end;
				.imgDiv{
					width: 40px;
    				height: 40px;
				}
			}
		}
	}
</style>
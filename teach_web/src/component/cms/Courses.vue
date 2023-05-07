<template>
	<div data-courses-box>
		<CourseInform class="inform"></CourseInform>
		<CourseOutline class="outline"></CourseOutline>
	</div>
</template>

<script>
	import Vue from 'vue';
	import CourseInform from '~/component/common/CourseInform';
	import CourseOutline from '~/component/common/CourseOutline';
	export default{
		components: {
			CourseInform,
			CourseOutline,
		},
		data() {
			return{
				
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
	
</script>

<style lang="scss">
	div[data-courses-box]{
	  	@import '~/assets/css/public';
	    display: flex;
        padding: 50px 0px;
        width: 100%;
        display: flex;
    	justify-content: space-around;
        background-color: rgba(158, 158, 158, 0.1);
	    @include media-xs(){
	     	display: block;
			padding: 20px 0px;
	    }
	}
</style>
<template>
    <div data-richtext-box>
        <div v-html="htmlAddress" class="rich-text-default"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import {$v, txtUrl, AJAX_ADMIN, TIPS_TIEM, DateFormat} from '~/assets/js/const.js';
//  import { SRC_URL } from '~cms/js/common/const';
    export default {
        data() {
            return {
            	txtUrl:txtUrl,
                htmlAddress: '',
            }
        },
        props:{
            address: '',
            data: '',
        },
        mounted() {
            let self = this;
            Vue.nextTick(()=>{
        		axios.get(this.txtUrl + this.address).then((data) => {
	            	console.log(JSON.stringify(data))
	        		let str = String(data.data)
	        		console.log(str)
	            	this.htmlAddress = str.replace(/(@sru:)/g, txtUrl);
	//              this.editor.setData(htmlData);
	            }).catch((error) => {
	            	
	            });
            })
//          axios.get('/group1/M00/00/1A/CngaWVqnf0aAaSi4AAACwaiQwyI38.html').then((d)=>{
//          	this.htmlAddress = d.data;
//          })
//          axios({
//              method:'get',
////              url:SRC_URL+ this.address,
//              url:'/group1/M00/00/41/CngaWFqrvKyATQC4AAAdeL03-rc46.html',
//              responseType:'stream'
//          }).then((response) => {
//                  self.htmlAddress = String(response.data);
////                  self.$emit('complate', String(response.data), this.data);
//              });
//            this.htmlAddress = 'https://www.cuniq.com/group1/M00/00/41/CngaWFqrvKyATQC4AAAdeL03-rc46.html';
        },
        methods: {
        }
    }
</script>

<style lang="scss">
	@import '~/assets/css/response';
    div[data-richtext-box]{
    	
    }
</style>
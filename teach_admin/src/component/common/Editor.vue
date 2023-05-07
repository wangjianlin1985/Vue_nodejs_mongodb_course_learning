<template>
    <div data-editor-box>
        <textarea :id="id" :name="id" class="editor"></textarea>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
	import {$v,txtUrl, AJAX_ADMIN, TIPS_TIEM } from '~/assets/js/const.js';
    import { Message } from 'element-ui';
    require("~/static/ckeditor/ckeditor.js");

    //富文本图片上传回调函数
    window.callFunction = function(ckeditName, url, ckeditNum) {
        CKEDITOR.tools.callFunction(ckeditNum, url);
    }
    export default {
        data() {
            return {
            	AJAX_ADMIN:AJAX_ADMIN,
                editor: null,
                id: null,
            }
        },
        props: {
            // 传入的url, 根据url请求富文本内容
            url: { default: '', type: String },
            // 标记, 当页面同时存在多个富文本的时候区分富文本返回值
            flag: { default: '', type: String },
            // 图片上传url
            img_upload_url: { default: AJAX_ADMIN + "/create/file", type: String },
            // 富文本上传url
            txt_upload_url: { default: AJAX_ADMIN + "/create/file", type: String }
        },
        mounted() {
            // 随机生成富文本id
            let a = Math.floor(Math.random() * 100);
            let b = new Date().getTime();
            let c = Math.floor(Math.random() * 100);
            this.id = `${a}-${b}-${c}`;
            
            let isHtml = this.checkHtml(this.url);
            this.$nextTick(() => {
                // 初始化富文本
                this.editor = CKEDITOR.replace(this.id);
                // 配置富文本上传路径
                this.editor.config.filebrowserUploadUrl = this.img_upload_url + '?txtUrl=' + txtUrl + '&ckeditName=' + this.id;
                this.editor.on('instanceReady', () => {
                    // 给富文本赋值
                    // isHtml == false 并且url不等于空, url应该是地址
                    // isHtml == true url应该就是html代码
                    if (this.url != "" && isHtml == false) {
                        this.queryContent(this.url);
                    } else if (isHtml) {
                        this.editor.setData(this.url);
                    } else {
                        this.editor.setData("");
                    }
                });
                // // 点击保存按钮
                // this.editor.addCommand("save",
                //     { modes: { wysiwyg: 1, source: 1 },
                //     exec: function (editor) {
                //         console.log("save")
                //     }  
                // });
            });
        },
        destroyed() {
            // 销毁富文本
            CKEDITOR.remove(this.editor);
        },
        methods: {
            // 检查url中是不是有html代码
            checkHtml(url) {
                let reg = /<[^>]+>/g;
                return reg.test(url);
            },
            // 根据url请求富文本内容
            queryContent(url) {
            	axios.get(txtUrl + url).then((data) => {
            		let str = String(data.data)
	            	let htmlData = str.replace(/(@sru:)/g, txtUrl);
                    this.editor.setData(htmlData);
                    this.$emit('load-success', this.flag);
	            }).catch((error) => {
	            	this.$emit('load-error', this.flag);
	            });
            },
            // 富文本上传 内部提交数据, 返回地址
            getUrl() {
				let html_data = { txt: this.editor.getData().replace(reg,'@sru:') };
				let reg = new RegExp(txtUrl, "g");
				$v.post(this.txt_upload_url, html_data, (urlData) => {
                    this.$emit("get-url", urlData.data, this.flag, urlData.meta.result);
				}, (error) => {
					Message.error({ message: error.meta.message, duration: TIPS_TIEM });
				});
			},
            // 获取富文本内容 外部提交数据
            getContent() {
                let d = { content: this.editor.getData(), flag: this.flag };
                return d;
            }
        }
    }

</script>

<style lang="scss">
    div[data-editor-box] {
        .editor {
            width: 100%;
        }
    }
</style>

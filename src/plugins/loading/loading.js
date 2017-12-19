import Vue from 'vue'
import _ from 'lodash'
import './loading.css'
import mixin from '../mixin'
let Loading = {
    install(Vue){
        let that = this;
        Object.defineProperty(Vue.prototype,'$loading',{
            value:{
                show:function(target){
                    let loader = that.createElement('span',{class:'loader'},['loading...']);
                    target.style.position = 'relative';
                    that.el = that.init(loader,'iLoading',target);
                    that.target = target;
                    //console.log(that);
                },
                hide:function(){
                    if (that.target){
                        that.target.removeChild(that.el);
                    }else{
                        document.body.removeChild(that.el);
                    }
                }
            }
        })
    },
    ...mixin
}
console.log(Loading)

export default Loading
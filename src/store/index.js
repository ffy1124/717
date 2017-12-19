import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        getshopcarList:[],
        checkAll: false,
        sum: 0,
        num: 0,
        username: '',
        addressList: [],
        isShow: true
    },
    mutations:{
        updated_username(state,data){
            state.username = data.username;
        },
        updated_shopCarlist(state,data){
            var flag = true;
            state.getshopcarList.map((item, index) => {
                if (data.obj.id == item.id) {
                    item.count++;
                    flag = false;
                }
                return item;
            })
            if (flag) {
                state.getshopcarList.unshift(data.obj);
                state.isShow = false;
            }
        },
        updated_num(state,data){
            if(data.num<1){
                data.num = 1;
            }
            state.getshopcarList[data.index].count = data.num;
        },
        updated_checkbox(state,data){
            var flag = true;
            state.getshopcarList[data.index].checked = data.checked;
            state.getshopcarList.forEach((item,index)=>{
                if(!item.checked){
                    flag = false
                    return;
                }
            });
            state.checkAll = flag;
        },
        updated_checkAll(state) {
            state.checkAll = !state.checkAll;
            state.getshopcarList.map((item,index)=>{
                item.checked = state.checkAll
                return item
            });
        },
        updated_sum(state){
            state.sum = 0;
            state.getshopcarList.forEach((item,index) =>{
                if(item.checked){
                    state.sum += item.count*item.price
                }
            });
        },
        updated_addressList(state,data){
            state.addressList = data;
        }
    }
});
export default store;
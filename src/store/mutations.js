export default {
    setHistoryRecord(state,cityObj){
        state.history_record.push(cityObj);
    },
    clearHistoryRecord(state){
        state.history_record = [];
    },
    setCityObj(state,obj){
        state.cityObj = obj
    },
    setHeadText(state,config){
        state.head_text.iconClass = config.query.iconClass;
        state.head_text.title = config.query.title;
        state.head_text.isShow = config.query.isShow;
    },
    setMerchant_list(state,v){
        state.merchant_list = v;
    },
    setBottomShow(state,v){
        state.bottomShow = v;
    },
    setAddressObj(state,v){
        state.addressObj = v;
    },
    setDetailObj(state,v){
        state.detailObj = v;
    },
    setShopsCar(state,v){
        state.shopsCar = v;
    },
    setAddresss(state,v){
        for(let i=0;i<state.addresss.length;i++){
            if(state.addresss[i].name == v.name){
                return
            }
        }
        state.addresss.push(v);
        state.addresss[0].isTrue = true;
        state.defaultAddress = state.addresss[0];
    },
    setDefaultAddress(state,v){
        state.defaultAddress = v;
    },
    setRemark(state,v){
        state.remark = v;
    },
    setSerchHistory(state,v){
        if(state.serchHistory.indexOf(v) < 0){
            state.serchHistory.push(v);
        }
    },
    deleteSerchHistory(state,i){
        state.serchHistory.splice(i,1);
    },
    clearSerchHistory(state){
        state.serchHistory = [];
    },
    setOrders(state,v){
        state.orders.push(v);
    },
    /*----------------------------------------------------------------- */
    setUser(state,obj){
        state.user_name = obj
    },
    setUser_id(state,obj){
        state.user_id = obj
    },
    setSale(state,obj){
        state.length = obj
    },
    titleFn(state,obj){
        state.title = obj
    },
    contentFn(state,obj){
        state.content = obj
    },
    imgFn(state,obj){
        state.imgObj = obj
    },
    IMGFn(state,obj){
        state.IMGObj = obj
    },
}
import mainApi from "../api/main"

const actions={
    getFloorData({commit}){
        mainApi.getFloorData().then(res=>{
            commit("setItemData",res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
}

export default actions;
import {getList} from '../../api/index'

const state={
    list:[],
    price:[],
    isOk:false
}
const mutations={
    updateList:(state,{list})=>{
        state.list=list
    }
}
const actions={
    getList:(context)=>{
        getList().then(res=>{
            return res.json()
        }).then(body=>{
            console.log(body)
            context.commit("updateList",{list:body})
        })
   } 
}
const getter={

}

export default {
    state,
    mutations,
    actions,
    getter
}
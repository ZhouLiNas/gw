<template>
    <div>
        <dl class="uls" v-for="(item,index) in list" :key="index">
            <dt>
                <img :src="item.url" alt="">
            </dt>
            <dd>
                <p>{{item.tit}}</p>
                <span>￥{{item.prices}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:"list",
    data(){
        return {
            
        }
    },
    mounted(){
    },
    computed:{
        ...mapState({
            list:state=>state.Index.list
        })
    }
}
</script>
<style>
.uls{
    width: 100%;
    display: flex;
}
.uls dt{
    width: 80px;
    height: 80px;
}
.uls dt img{
    height: 80px;
    padding: 10px;
}
.uls dd{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    margin-top: 10px;
}
.uls dd p{
    height: 30px;
    width: 200px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.uls dd span{
    display: block;
    color:#f00;
}
</style>

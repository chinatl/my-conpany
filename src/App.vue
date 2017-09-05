<template>
<div>
    <router-view></router-view>
    <div id='tabItem'>
        <router-link to='/tableinfo'>
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span>保单</span>
        </router-link>
        <router-link to='/payhome'>
            <i class="fa fa-blind" aria-hidden="true"></i>
            <span>理赔</span>
        </router-link>
        <router-link to='/saveinfo'>
            <i class="fa fa-bookmark" aria-hidden="true"></i>
            <span>保全</span>
        </router-link>
        <router-link to='/foud'>
            <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
            <span>基金账户</span>
        </router-link>
    
    </div>

</div>

</template>

<script>
    export default {
        data(){
            return {
                selected:'tab1'
            }
        }
    }
</script>

<style scoped>
    #tabItem {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4rem;
        background-color: #fff;
        line-height: 4rem;
        border-top: 1px solid #eee
    }
    #tabItem a {
        margin-top: .7rem;
        float: left;
        width: 25%;
        text-align: center;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow:column;
    }
    #tabItem a i {
        font-size: 1.3rem;
        display: block;
    }#tabItem a span {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-top: 2px;
    }
    #tabItem a.router-link-active {
        color: blue
    }
</style>
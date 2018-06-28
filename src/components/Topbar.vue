<template>
    <div id='topbar'>
        <div class="logo">
            VueResumer 
        </div>
        <div class="actions">
            <el-button>注册</el-button>
            <el-button type="primary">登录</el-button>
            <el-button type="primary" v-on:click="preview">预览</el-button>
        </div>
    </div>
</template>

<style lang="scss">
    #topbar{
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        padding: 16px;
        align-items: center;
    }
</style>
<script>
export default {
    methods:{
        preview(){
            console.log("111");
            this.$emit('preview')
        }
    }
}
</script>

// 单文件组件

<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  data(){
    return {
      previewMode:false,
      resume:{
        profile: { name: "", city: "", birth: "" },
        workHistory: [{ company: "", content: "" }],
        studyHistory: [{ school: "", duration: "", degree: "" }],
        projects: [{ name: "", content: "" }],
        awards: [{ name: "" }],
        contacts: [{QQ:'',wechat:'',email:'',tel:''}]
      }
    }
  },
  components: {
    // HelloWorld,
    // "Lee":Lee
    Topbar,Editor,Preview
  },
  // created(){
  //   this.$on('preview',()=>{
  //     alert("1111");
  //   })
  // }
  methods:{
    preview(){
      this.previewMode = true;
    },
    exitPreview(){
      this.previewMode = false;
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar{
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
main{
  background: #dddddd;;
  display: flex;
  flex: 1;
  .editor{
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 2px;
    overflow: auto;
  }
  .preview{
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: white;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
    border-radius: 2px;

  }
}
.previewMode > #topbar{
    display: none;
}
.previewMode #editor{
  display: none;
}
.previewMode .preview{
  max-width: 800px;
  margin: 32px auto;
}
#exitPreview{
  display: none;
}
.previewMode #exitPreview{
  display: block;


}
</style>

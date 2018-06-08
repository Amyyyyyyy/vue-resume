// 单文件组件

<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
    <Editor class="editor"/>
    <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // "Lee":Lee
    Topbar,Editor,Preview
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
  background: red;
}
main{
  background: green;
  display: flex;
  flex: 1;
  > .editor{
    width: 20em;
  }
  > .preview{
    flex: 1;
  }
}
</style>

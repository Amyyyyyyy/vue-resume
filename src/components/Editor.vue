<template>
    <div id='editor'>
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]"
                    v-bind:key= i
                    v-bind:class="{active: currentTab === i}"
                    v-on:click="currentTab = i"
                >
                    <svg class="icon" aria-hidden="true">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
            <li v-bind:class= "{active: currentTab === 0}">
                <ProfileEditor v-bind:profile="resume.profile" />
            </li>
            <li v-bind:class= "{active: currentTab === 1}">
                <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"/>
            </li>
            <li v-bind:class= "{active: currentTab === 2}">
                <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'公司',duration:'时间',degree:'学位'}" title="学习经历"/>
            </li>
            <li v-bind:class= "{active: currentTab === 3}">
                <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'项目内容'}" title="项目经历"/>
            </li>
            <li v-bind:class= "{active: currentTab === 4}" title="获奖情况">
                <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'详情'}" title="获奖情况"/>

            </li>
            <li v-bind:class= "{active: currentTab === 5}" title="联系方式">
                <h2>联系方式</h2>
                <el-form>
                <el-form-item label="QQ">
                    <el-input v-model="resume.contacts.QQ"></el-input>
                </el-form-item>
                <el-form-item label="wechat">
                    <el-input v-model="resume.contacts.wechat"></el-input>
                </el-form-item>
                <el-form-item label="email">
                    <el-input v-model="resume.contacts.email"></el-input>
                </el-form-item>
                <el-form-item label="tel">
                    <el-input v-model="resume.contacts.tel"></el-input>
                </el-form-item>
    </el-form>
            </li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from "./ProfileEditor";
import ArrayEditor from "./ArrayEditor";
export default {
  props:['resume'],
  components: {
    ProfileEditor,
    ArrayEditor
  },
  data() {
    return {
      currentTab: 0,
      icons: ["shenfenzheng", "work", "book", "aixin", "trophy", "weibiaoti-"]
    };
  }
};
</script>


<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  nav {
    background: black;
    width: 80px;
    > ol > li {
      text-align: center;
      padding: 16px 0;
      > .icon {
        width: 24px;
        height: 24px;
        fill: white;
      }
      &.active {
        background: white;
        > .icon {
          fill: black;
        }
      }
    }
  }
  > .panes {
    overflow: auto;
    width: 100%;
    .container {
      position: relative;
      .el-icon-close {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    > li {
      padding: 24px;
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>
  
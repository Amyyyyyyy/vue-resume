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
                <ProfileEditor v-bind:profile = "profile" />
            </li>
            <li v-bind:class= "{active: currentTab === 1}">
                <WorkHistoryEditor v-bind:workHistory="workHistory" />
            </li>
            <li v-bind:class= "{active: currentTab === 2}">
                 <h2>个人信息</h2>

            </li>
            <li v-bind:class= "{active: currentTab === 3}">
                <h2></h2>

            </li>
            <li v-bind:class= "{active: currentTab === 4}">
                <h2>获奖情况</h2>

            </li>
            <li v-bind:class= "{active: currentTab === 5}">
                <h2>联系方式</h2>

            </li>
        </ol>
    </div>
</template>

<script>
import ProfileEditor from './ProfileEditor';
import WorkHistoryEditor from './WorkHistoryEditor';
export default {
    components:{
        ProfileEditor,WorkHistoryEditor
    }, 
    data(){
        return {
            currentTab: 0,
            icons: ['shenfenzheng','work','book','aixin','trophy','weibiaoti-'],
            profile: {
                name:'',
                city:'',
                birth:''
            },
            workHistory: [
                {
                    company:'',
                    content:''
                }
            ]
        }
    },
    methods:{
        onSubmit(){
            console.log(this.profile)
        },
        addWorkHistory(){
            this.workHistory.push({
                company:"",content:""
            })
        },
        removeWorkHistory(index){
            this.workHistory.splice(index,1);
        }
    }
}
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
        > .icon{
            width: 24px;
            height: 24px;
            fill: white;
        }
        &.active{
            background: white;
            > .icon{
                fill: black;
            }
        }
    }
  }
  > .panes{
        overflow: auto;
        width: 100%;
        .container{
            position: relative;
            .el-icon-close{
                position: absolute;
                right: 0;
                top: 0;
            }

        }
        > li {
            padding: 24px;
            display: none;
            &.active{
                display: block;
            }
        }
  }
}
</style>
  
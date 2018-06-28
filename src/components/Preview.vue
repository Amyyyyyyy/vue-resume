<template>
    <div id='previe'>
        <h1>{{resume.profile.name || "请填写姓名"}}</h1>
        <p>
            {{resume.profile.city || "请填写城市"}} | {{resume.profile.birth || "请填写年龄"}}
        </p>
        <hr>
        <section v-if="filter(resume.projects).length > 0">
            <h2>项目</h2>
            <ul>
                <li v-for="project in filter(resume.projects)" v-bind:key = project >
                    <h3>{{project.name || "请填写项目名称"}}</h3>
                    <p>{{project.content || "请填写项目内容"}}</p>
                </li>
            </ul>
        </section>
         <section v-if="filter(resume.workHistory).length > 0">
            <h2>工作经历</h2>
            <ul>
                <li v-for="work in filter(resume.workHistory)" v-bind:key = work >
                    <h3>{{work.company || "请填写项目名称"}}</h3>
                    <p>{{work.content || "请填写项目内容"}}</p>
                </li>
            </ul>
        </section>
    </div>

</template>

<style>
    #editor{
        min-height: 100px;
    }
</style>

<script>
export default {
    props:['resume'],
    methods:{
        filter(arr){
            // 找出非空对象；
            return arr.filter(item => !this.isEmpty(item))
        },
        isEmpty(obj){ 
            let empty = true;
            for(let key in obj){
                if(obj[key]){
                    empty = false;
                    break;
                }
            }
            return empty;
        }
    }
}
</script>


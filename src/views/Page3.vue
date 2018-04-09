<template>
    <section>
        <content-header
            menuName="导航二">
        </content-header>
        <p v-text="arr1"></p>
        <p v-text="arr2"></p>
        <el-button type="text"
            @click="submit">两组数据取相同</el-button>
        <h6>res ↓(说明: 这种双层数组取值项目中很常见 不要用嵌套循环处理 用字典map方法)</h6>
        <p v-text="res"></p>
    </section>
</template>
<script>
import ContentHeader from '../components/ContentHeader'
export default {
    components: {
        ContentHeader
    },
    data () {
        return {
            arr1: [ 1, 2, 3, 4, 5, 6 ],
            arr2: [ 7, 8, 9, 10, 4, 2 ],
            res: []
        }
    },
    methods: {
        submit () {
            const map = {};
            this.arr1.forEach(i => {
                map[`key__${i}`] = 1;
            });
            this.res = this.arr2.filter(i => map[`key__${i}`]);
        }
    }
}
</script>

<template>
    <section>
        <content-header
            menuName="导航一">
        </content-header>
        <el-row :gutter="10">
            <el-col :span="8" v-for="i in 5" :key="i">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
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
            tableData: [
                {
                    date: '2016-05-02',
                    name: '张三',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '李四',
                    sex: '女',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王五',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-08-02',
                    name: '赵六',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '张三',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '李四',
                    sex: '女',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王五',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-08-02',
                    name: '赵六',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-02',
                    name: '张三',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '李四',
                    sex: '女',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王五',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-08-02',
                    name: '赵六',
                    sex: '男',
                    hobby: '吃',
                    provice: '上海',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            columnNames: [
                {
                    label: '人物',
                    childer: [
                        {
                            label: '姓名',
                            prop: 'name'
                        },
                        {
                            label: '性别',
                            prop: 'sex'
                        },
                        {
                            label: '爱好',
                            prop: 'hobby'
                        }
                    ]
                },
                {
                    label: '信息',
                    childer: [
                        {
                            label: '日期',
                            prop: 'date'
                        },
                        {
                            label: '地址',
                            prop: 'address'
                        },
                        {
                            label: '省份',
                            prop: 'provice'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleDelete (index, row) {
            console.log(index, row);
            this.tableData.splice(index, 1);
        },
        deleteColumn () {
            this.columnNames[1].childer.splice(1, 1);
        }
    }
}
</script>

<style lang="scss" scoped>
.el-col{margin-bottom: 10px;}
</style>


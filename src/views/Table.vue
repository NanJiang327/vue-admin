<template>
    <section>
        <content-header
            menuName="导航一"></content-header>

        <header>
            <el-button type="primary" @click="deleteColumn">动态修改table列</el-button>
        </header>

        <el-table
            :data="tableData"
            border
            style="width: 100%">

            <el-table-column
                v-for="(column, index) in columnNames"
                v-if="column.childer.length"
                :key="index"
                :label="column.label">
                <el-table-column
                    v-if="'childer' in column"
                    v-for="(columnC, indexC) in column.childer"
                    :key="indexC"
                    :label="columnC.label"
                    :prop="columnC.prop">
                    
                </el-table-column>
            </el-table-column>

            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
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

</style>


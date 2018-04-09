<template>
    <aside
        :class="{'close': !isSidebarOpen}">
        <el-menu
            :default-openeds="defaultOpeneds"
            :default-active="defaultActive"
            router
            unique-opened
            :collapse="!isSidebarOpen"
            background-color="#545c64"
            text-color="#fff">
            <el-submenu 
                v-for="(menu, index) in menuList"
                :key="index"
                :index="(index).toString()">
                <template slot="title">
                    <i :class="menu.titleClass"></i>
                    <span v-text="menu.title"></span>
                </template>
                <el-menu-item-group
                    v-if="menu.children.length">
                    <el-menu-item 
                        v-for="(menuC, indexC) in menu.children"
                        :key="indexC"
                        :route="menuC.router"
                        :index="menuC.router"
                        v-text="menuC.name">
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data () {
        return {
            menuList: [
                {
                    title: '导航一',
                    titleClass: 'el-icon-location',
                    children: [
                        {
                            name: 'table',
                            router: '/table'
                        },
                        {
                            name: '卡片',
                            router: '/card'
                        }
                    ]
                },
                {
                    title: '导航二',
                    titleClass: 'el-icon-menu',
                    children: [
                        {
                            name: 'page3',
                            router: '/page3'
                        },
                        {
                            name: 'page4',
                            router: '/page4'
                        }
                    ]
                },
                {
                    title: '导航三',
                    titleClass: 'el-icon-document',
                    children: [
                        {
                            name: 'page5',
                            router: '/page5'
                        }
                    ]
                }
            ],
            defaultActive: '/table',
            defaultOpeneds: [ '0' ]
        }
    },
    methods: {
    },
    computed: {
        ...mapState({
            isSidebarOpen: state => state.global.isSidebarOpen
        })
    },
    mounted () {
        this.defaultActive = this.$route.fullPath;
        this.menuList.forEach((i, index) => {
            i.children.forEach(j => {
                if (j.router === this.$route.fullPath) {
                    this.defaultOpeneds = [ index.toString() ]
                }
            })
        })
    }
}
</script>

<style lang="scss" scoped>
$background: #545c64;
aside{
    height: 100%; position: fixed; top: 0; left: 0; padding-top: 40px; background: $background; width: 200px; text-align: left;
    .el-menu-item{
        padding-left: 55px!important
    }
    &.close{width: 66px}
}
.el-menu{
    border-color: $background;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
} */
</style>


<template>
    <aside>
        <!-- <el-menu default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="false"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu> -->
        <el-menu
            @open="handleOpen"
            @close="handleClose"
            router
            background-color="#545c64"
            text-color="#fff">
            <el-submenu 
                v-for="(menu, index) in menuList"
                :key="index"
                :index="(index+1).toString()">
                <template slot="title">
                    <i :class="menu.titleClass"></i>
                    <span v-text="menu.title"></span>
                </template>
                <el-menu-item-group
                    v-if="menu.children.length">
                    <el-menu-item 
                        v-for="(menuC, indexC) in menu.children"
                        :key="indexC"
                        :index="menuC.router"
                        v-text="menuC.name">
                        </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>

<script>
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
            ]
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            log(key, keyPath);
        },
        handleClose (key, keyPath) {
            log(key, keyPath);
        }
    }
}
</script>

<style lang="scss" scoped>
$background: #545c64;
aside{
    height: 100%; position: fixed; top: 0; left: 0; padding-top: 40px; background: $background; width: 200px; text-align: left;
}
.el-menu{
    border-color: $background;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
} */
</style>


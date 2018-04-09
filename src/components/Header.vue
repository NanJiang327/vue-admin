<template>
    <header class="clearfix">
        <div class="logo fl"
            :class="{'close': !isSidebarOpen}">
            logo
        </div>
        <i class="sidebarToggle el-icon-caret-left"
            :class="`el-icon-caret-${isSidebarOpen ? 'left' : 'right'}`"
            :title="isSidebarOpen ? '收起' : '展开'"
            @click="sidebarToggleClick"></i>
        <div class="user fr">
            <el-dropdown
                trigger="click"
                @command="dropdownChange">
                <span class="el-dropdown-link">
                    fgk
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="退出">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    methods: {
        ...mapMutations([
            'UpdateIsSidebarOpen'
        ]),
        // 下拉回调
        dropdownChange (name) {
            if (name === '退出') {
                this.$router.push('/login');
            }
        },
        // sidebar收缩展开点击
        sidebarToggleClick () {
            this.UpdateIsSidebarOpen(!this.isSidebarOpen);
        }
    },
    computed: {
        ...mapState({
            isSidebarOpen: state => state.global.isSidebarOpen
        })
    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
header{background: $-color-theme; height: 40px; line-height: 40px; color: #fff; padding-right: 20px; position: fixed; top: 0; width: 100%; z-index: 1; box-sizing: border-box}
.el-dropdown{color: #fff}
.logo{
    width: 200px; text-align: center; font-size: 20px; font-weight: bold;
    &.close{
        width: 66px;
    }
}
.sidebarToggle{padding-left: 10px; font-size: 24px; line-height: 40px; cursor: pointer}
</style>

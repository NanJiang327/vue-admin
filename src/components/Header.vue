<template>
    <header class="clearfix">
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
export default {
    methods: {
        dropdownChange (name) {
            if (name === '退出') {
                this.$router.push('/login');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header{background: $-color-theme; height: 40px; line-height: 40px; color: #fff; padding-right: 20px; position: fixed; top: 0; width: 100%; z-index: 1; box-sizing: border-box}
.el-dropdown{color: #fff}
</style>

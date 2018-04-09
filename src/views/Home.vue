<template>
    <section>
        <app-header></app-header>
        <sidebar></sidebar>
        <div class="app-content"
            :class="{'close': !isSidebarOpen}">
            <router-view ></router-view>
        </div>
    </section>
</template>

<script>
import AppHeader from '../components/Header';
import Sidebar from '../components/Sidebar'

export default {
    components: {
        AppHeader, Sidebar
    },
    computed: {
        isSidebarOpen () {
            return this.$store.state.global.isSidebarOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
.app-content{
    padding: 50px 0 0 210px;
    &.close{padding-left: 74px}
}
</style>


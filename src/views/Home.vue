<template>
    <section>
        <app-header></app-header>
        <sidebar></sidebar>
        <div class="app-content">
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
    }
}
</script>

<style lang="scss" scoped>
.app-content{
    padding: 50px 0 0 210px;
}
</style>


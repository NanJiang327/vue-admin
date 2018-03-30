<template>
    <header class="clearfix">
        <strong class="fl" v-text="$route.name"></strong>
        <div class="fr" v-text="`${this.menuName} ${$route.fullPath}`"></div>
    </header>
</template>

<script>
export default {
    props: {
        menuName: {
            type: String
        }
    },
    mounted () {
        log(this.$route)
    }
}
</script>

<style lang="scss" scoped>
header{
    padding: 0 8px;
}
</style>

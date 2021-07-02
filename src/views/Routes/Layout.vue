<template>
    <div class="layout"></div>
</template>

<script lang="ts">
import { IRoute } from '@/types/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Layout extends Vue {
    routes: IRoute[]

    constructor () {
        super()
        this.routes = this.$store.state.routes
    }
}
</script>

<style lang="scss" scoped>
.layout {}
</style>

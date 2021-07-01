<template>
    <div class="routes">
        <navigation />
        <list />
        <layout />
    </div>
</template>

<script lang="ts">
import List from '@/views/Routes/List.vue'
import Layout from '@/views/Routes/Layout.vue'
import Navigation from '@/views/Routes/Navigation.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
    components: {
        List,
        Layout,
        Navigation
    }
})

export default class Routes extends Vue {}
</script>

<style lang="scss">
.routes {}
</style>

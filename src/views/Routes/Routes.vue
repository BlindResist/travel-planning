<template>
    <div class="routes">
        <navigation-panel />
    </div>
</template>

<script lang="ts">
import NavigationPanel from '@/views/Routes/NavigationPanel.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
    components: {
        NavigationPanel
    }
})

export default class Routes extends Vue {}
</script>

<style lang="scss">
.routes {}
</style>

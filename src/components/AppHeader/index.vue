<template>
    <header class="app-header">
        <app-logo />
        <app-navigation :data="nav" />
    </header>
</template>

<script lang="ts">
import AppLogo from '@/components/AppLogo/index.vue'
import AppButton from '@/components/AppButton/index.vue'
import AppNavigation from '@/components/AppNavigation/index.vue'
import { Component, Vue } from 'vue-property-decorator'

type ComponentData = {
    nav: {
        text: string,
        link: string
    }[]
}

@Component({
    components: {
        AppLogo,
        AppButton,
        AppNavigation
    }
})

export default class AppHeader extends Vue {
    data (): ComponentData {
        return {
            nav: [
                {
                    text: 'planning',
                    link: '/planning'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.app-header {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    justify-content: flex-start;
    flex: 0 0 auto;
    height: 4rem;
    padding: 0 1.25rem;
    background-color: $white;
}
</style>

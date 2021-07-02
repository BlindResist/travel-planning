<template>
    <header class="app-header">
        <app-logo />
        <app-navigation :data="nav" />
        <app-lang-selector />
    </header>
</template>

<script lang="ts">
import AppLogo from '@/components/AppLogo/AppLogo.vue'
import AppButton from '@/components/AppButton/AppButton.vue'
import AppNavigation from '@/components/AppNavigation/AppNavigation.vue'
import AppLangSelector from '@/components/AppLangSelector/AppLangSelector.vue'
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
        AppNavigation,
        AppLangSelector
    }
})

export default class AppHeader extends Vue {
    data (): ComponentData {
        return {
            nav: [
                {
                    text: 'main',
                    link: '/'
                },
                {
                    text: 'routes',
                    link: '/routes'
                },
                {
                    text: 'about',
                    link: '/about'
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
    height: 3rem;
    padding: 0 1.25rem;
    position: relative;
    z-index: 10;
    background-color: $white;
}
</style>

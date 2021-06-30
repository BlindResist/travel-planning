<template>
    <div
        id="app"
        :class="{ loaded }"
        class="page-wrapper"
    >
        <app-header />
        <div class="container">
            <router-view />
        </div>
        <app-footer />
    </div>
</template>

<script lang="ts">
import verge from 'verge'
import { Component, Vue } from 'vue-property-decorator'
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

@Component({
    components: {
        AppHeader,
        AppFooter
    }
})

export default class App extends Vue {
    loaded: boolean
    viewportW: number

    constructor () {
        super()
        this.loaded = false
        this.viewportW = 0
    }

    mounted (): void {
        this.loaded = true
        this.viewportW = verge.viewportW()
    }
}
</script>

<style lang="scss">
html {
    font-size: 20px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    @include breakpoint(desktop) {
        font-size: 18px;
    }

    @include breakpoint(laptop) {
        font-size: 16px;
    }

    @include breakpoint(v-tablet) {
        font-size: 14px;
    }

    @include breakpoint(mobile) {
        font-size: 11px;
    }
}

::selection {
    color: $white;
    background: $black;
    text-shadow: none;
}

::-moz-selection {
    color: $white;
    background: $black;
    text-shadow: none;
}

body {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    width: 100%;
    color: $black;
    font-weight: 400;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: $white;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

a {
    color: $black;
    outline: 0 none;
    text-decoration: none;

    &:visited,
    &:focus,
    &:active {
        outline: 0 none;
        text-decoration: none;
    }
}

ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 0 auto;
    overflow: hidden;
    opacity: 0;
    transition: opacity .2s $transition;

    &.loaded {
        opacity: 1;
    }
}

.container {
    flex: 1 0 auto;
    overflow: hidden;
    position: relative;
    background-color: $white;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background-size: cover;
        background-position: center;
        background-image: url(./assets/images/bg-planning.jpg);
        filter: blur(5px);
        transform-origin: center;
        transform: scale(1.1);
    }

    .page {
        position: relative;
        z-index: 1;
    }
}

.content {
    padding: 1.25rem;
    position: relative;

    p {
        margin: 0;
        line-height: 1.5;
    }

    p+p {
        margin: 1rem 0 0;
    }

    .row {
        margin-top: -1.875rem;

        &+.row {
            margin-top: 0;
        }

        &>[class^="col"] {
            margin-top: 1.875rem;
        }
    }
}
</style>

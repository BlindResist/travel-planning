<template>
    <nav class="app-navigation">
        <ul class="app-navigation__list">
            <li
                :key="item.text"
                v-for="item in data"
                class="app-navigation__item"
            >
                <router-link
                    exact
                    :to="item.link"
                    class="app-navigation__link"
                >{{ item.text }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component

export default class AppNavigation extends Vue {
    @Prop({
        type: Array,
        default: () => []
    }) readonly data!: {
        text: string,
        link: string
    }[]
}
</script>

<style lang="scss">
.app-navigation {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 0 2rem;
    margin: auto;

    &__list {
        display: flex;
        flex-flow: row nowrap;
        height: 100%;
        margin: 0;
    }

    &__link {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 1.5rem;
        position: relative;
        color: $red;
        font-size: .875rem;
        transition: color $transition, box-shadow $transition;

        &:not(.router-link-active):hover {
            color: $black;
        }

        &.router-link-active {
            box-shadow: inset 0 -4px 0 0 $red;
        }
    }
}
</style>

<template>
    <div class="navigation-panel">
        <div class="navigation-panel__tab navigation-panel__tab--first">
            <span class="navigation-panel__tab-name">Routes list</span>
        </div>
        <div
            :key="item.id"
            v-for="item in routes"
            :class="tabClass(item.selected)"
        >
            <span
                @click="selectTab(item.id)"
                class="navigation-panel__tab-name"
            >{{ item.name }}</span>
            <div class="navigation-panel__tab-close icon icon-cross"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

type Data = {
    routes: {
        id: string,
        name: string,
        selected: boolean
    }[]
}

@Component
export default class NavigationPanel extends Vue {
    routes: Data

    constructor () {
        super()
        this.routes = this.$store.state.openedRoutes
    }

    tabClass (active: boolean): Array<string> {
        return [
            'navigation-panel__tab navigation-panel__tab--route',
            { active }
        ]
    }

    selectTab (id: string): void {
        this.routes.forEach((item: { [elem: string]: string | boolean }) => {
            item.selected = item.id === id
        })
    }
}
</script>

<style lang="scss">
.navigation-panel {
    $parent: &;
    $height: 3rem;

    height: $height;
    background-color: $white;
    box-shadow: inset 0 1px 0 0 rgba($gray-bg, .2);

    &__tab {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        max-width: 12rem;
        padding: .75rem 1rem;
        position: relative;
        color: $white;
        font-size: .875rem;
        white-space: nowrap;

        &-name {
            overflow: hidden;
            position: relative;
            z-index: 1;
            text-overflow: ellipsis;
            border-bottom: 1px dotted rgba($white, .8);
            cursor: pointer;

            &:hover {
                border-bottom-color: transparent;
            }
        }

        &-close {
            position: relative;
            right: -.75rem;
            z-index: 1;
            font-size: .875rem;
            border-radius: 50%;
            color: $red-dark;
            cursor: pointer;
            transition: opacity $transition;

            &:hover {
                opacity: .8;
            }
        }

        &--first {
            z-index: 1;
            background-color: $blue-dark;

            &:after {
                content: '';
                display: block;
                width: 0;
                height: 0;
                box-sizing: border-box;
                margin: auto 0;
                position: absolute;
                top: 0;
                left: 100%;
                z-index: 1;
                border: 10px solid transparent;
                border-top-width: #{$height / 2};
                border-bottom-width: #{$height / 2};
                border-left-color: $blue-dark;
            }
        }

        &--route {
            padding-left: 2rem;
            background-color: $red;

            &+& {
                padding-left: 1rem;
                margin-left: 2.1rem;
            }

            &:after {
                content: '';
                display: block;
                width: calc(100% + 2rem);
                height: 100%;
                position: absolute;
                top: 0;
                left: -1rem;
                transform-origin: center;
                transform: skewX(22deg);
                background-color: $red;
            }

            &.active {

                #{$parent}__tab-name {
                    border-bottom-color: transparent;
                }
            }
        }
    }
}
</style>

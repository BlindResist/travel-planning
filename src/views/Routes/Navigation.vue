<template>
    <div class="navigation">
        <div class="navigation__tab navigation__tab--first">
            <span
                @click="selectTab(null)"
                class="navigation__tab-name"
            >{{ $t('routes.title') }}</span>
        </div>
        <div
            :key="item.id"
            v-for="item in selected"
            :class="tabClass(item.selected)"
        >
            <span
                @click="selectTab(item.id)"
                class="navigation__tab-name"
            >{{ item.name }}</span>
            <div
                :title="$t('buttons.close')"
                @click="closeRoute(item.id)"
                class="navigation__tab-close icon icon-cross"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import { IRoute } from '@/types/types'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
    routes: IRoute[]

    constructor () {
        super()
        this.routes = this.$store.state.routes
    }

    get selected (): IRoute[] {
        return this.routes.filter((item: IRoute) => item.opened)
    }

    tabClass (selected: boolean): [string, { [elem: string]: boolean }] {
        return [
            'navigation__tab navigation__tab--route',
            {
                'navigation__tab--active': selected
            }
        ]
    }

    selectTab (id: string): void {
        this.$store.commit('selectRoute', id)
    }

    closeRoute (id: string): void {
        this.$store.commit('closeRoute', id)
    }
}
</script>

<style lang="scss" scoped>
.navigation {
    $parent: &;
    $height: 3.5rem;

    height: $height;
    background-color: $white;
    box-shadow: inset 0 1px 0 0 rgba($gray-dark, .2), 0 0 10px 0 rgba($gray-dark, .5);

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
            color: $white;
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
                transition: background-color $transition;
            }
        }

        &--active {

            &#{$parent}__tab {

                &--route {

                    &:after {
                        background-color: $red-dark;
                    }
                }
            }

            #{$parent}__tab {

                &-name {
                    border-bottom-color: transparent;
                }
            }
        }
    }
}
</style>

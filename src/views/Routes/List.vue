<template>
    <div class="list">
        <div class="wrapper">
            <app-title
                invert
                weight="thin"
                class="margin-bottom--xsm"
            >{{ $t('routes.title') }}</app-title>
            <div class="list__content">
                <list-item
                    :data="item"
                    :key="index"
                    v-for="(item, index) in routes"
                />
                <div class="list__addnew">
                    <span class="list__addnew-text">{{ $t('buttons.createNew') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { IRoute } from '@/types/types'
import ListItem from '@/views/Routes/ListItem.vue'
import { Component, Vue } from 'vue-property-decorator'
import AppTitle from '@/components/AppTitle/AppTitle.vue'

@Component({
    components: {
        AppTitle,
        ListItem
    }
})

export default class List extends Vue {
    routes: IRoute[]

    constructor () {
        super()
        this.routes = this.$store.state.routes
    }
}
</script>

<style lang="scss" scoped>
.list {
    padding: 1.5rem 0;

    &__addnew {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 20rem;
        height: 118px;
        padding: 1.5rem;
        margin: 1rem auto 0;
        border-radius: .25rem;
        background-color: rgba($white, .5);
        transition: background-color $transition;
        cursor: pointer;

        &:hover {
            background-color: rgba($white, .8);
        }

        &-text {
            color: $white;
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
}
</style>

<template>
    <section class="list-item">
        <div class="row">
            <div class="col-default-1">
                <span class="list-item__index">{{ formattedIndex }}</span>
            </div>
            <div class="col-default-7">
                <div class="list-item__info padding-left--s">
                    <app-title
                        tag="h3"
                        weight="normal"
                        class="list-item__name margin-bottom--xxs"
                    >{{ data.name }}</app-title>
                    <span class="list-item__date">
                        {{ data.date[0] | date }}
                        &#8212;
                        {{ data.date[1] | date }}
                    </span>
                </div>
            </div>
            <div class="col-default-4">
                <div class="list-item__buttons">
                    <app-button
                        rounded
                        v-if="!data.opened"
                        theme="border-green"
                        @click="openRoute(data.id)"
                    >{{ $t('buttons.open') }}</app-button>
                    <app-button
                        rounded
                        v-if="data.opened"
                        theme="border-yellow"
                        @click="closeRoute(data.id)"
                    >{{ $t('buttons.close') }}</app-button>
                    <app-button
                        rounded
                    >{{ $t('buttons.delete') }}</app-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { IRoute } from '@/types/types'
import AppButton from '@/components/AppButton/AppButton.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import AppTitle from '@/components/AppTitle/AppTitle.vue'

@Component({
    components: {
        AppTitle,
        AppButton
    }
})

export default class ListItem extends Vue {
    @Prop({
        type: Object,
        default: () => ({})
    }) readonly data!: IRoute

    @Prop(Number)
    readonly index!: number

    get formattedIndex (): string | number {
        return this.index < 10 ? `0${this.index}` : this.index
    }

    openRoute (id: string): void {
        this.$store.commit('openRoute', id)
    }

    closeRoute (id: string): void {
        this.$store.commit('closeRoute', id)
    }
}
</script>

<style lang="scss" scoped>
.list-item {
    padding: 1.5rem;
    border-radius: .25rem;
    background-color: $white;
    cursor: default;

    &+& {
        margin-top: 1rem;
    }

    &__index {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: 2rem;
        font-weight: 700;
        color: rgba($blue-dark, .5);
    }

    &__info {
        border-left: 2px solid rgba($blue-dark, .5);
    }

    &__date {
        display: inline-block;
        padding: .5rem;
        font-size: .875rem;
        color: rgba($blue-dark, .5);
        border-radius: .25rem;
        background-color: $gray-lite;
    }

    &__buttons {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        height: 100%;
        gap: 1rem;

        &>.app-button {
            height: 100%;
            flex: 1 0 auto;
        }
    }
}
</style>

<template>
    <section class="list-item">
        <div class="row">
            <div class="col-default-8">
                <div class="list-item__info">
                    <span class="list-item__caption icon icon-file-text2 margin-right--xs"></span>
                    <app-title
                        tag="h4"
                        weight="normal"
                        class="list-item__value"
                    >{{ data.name }}</app-title>
                </div>
                <div class="list-item__info margin-top--xxs">
                    <span class="list-item__caption icon icon-calendar margin-right--xs"></span>
                    <span class="list-item__value list-item__value--date">
                        {{ data.date[0] | date }}
                        &#8212;
                        {{ data.date[1] | date }}
                    </span>
                </div>
                <div class="list-item__info margin-top--xxs">
                    <span class="list-item__caption icon icon-credit-card margin-right--xs"></span>
                    <span class="list-item__value">
                        {{ data.costs.toLocaleString() }}
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

    &__info {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    &__caption {
        color: $blue-dark;
    }

    &__value {

        &--date {
            display: inline-block;
            padding: .5rem;
            font-size: .875rem;
            color: rgba($blue-dark, .5);
            border-radius: .25rem;
            background-color: $gray-lite;
        }
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

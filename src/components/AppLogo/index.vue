<template>
    <div :class="classObject">
        <span>TravelPlanning</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component

export default class AppLogo extends Vue {
    @Prop(Boolean) readonly big!: boolean

    get classObject (): [string, { [elem: string]: boolean} ] {
        return [
            'app-logo',
            {
                'app-logo--big': this.big
            }
        ]
    }
}
</script>

<style lang="scss">
.app-logo {
    color: $red;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Pacifico', sans-serif;
    background: linear-gradient(360deg, #da092d 33%, #{$red} 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;

    &--big {
        font-size: 4em;
    }
}
</style>

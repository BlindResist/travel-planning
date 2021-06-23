<template>
    <footer class="app-footer">
        <span class="app-footer__copyright">&#169;&nbsp;{{ date }} Created by digama.online</span>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {
    data (): { date: number } {
        return {
            date: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss">
.app-footer{
    flex: 0 0 auto;
    padding: 1rem;
    font-size: .75rem;
}
</style>

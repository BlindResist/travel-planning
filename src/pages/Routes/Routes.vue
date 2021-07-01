<template>
    <div class="routes-page page">
        <routes />
    </div>
</template>

<script lang="ts">
import Routes from '@/views/Routes/Routes.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {
        Routes
    }
})

export default class RoutesPage extends Vue {}
</script>

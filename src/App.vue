<template>
    <div>
        <Dashboard />
    </div>
</template>

<script>
import { Dashboard } from '@/views'

export default {
    name: 'App',
    components: {
        Dashboard,
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>

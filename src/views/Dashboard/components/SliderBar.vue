<template>
    <div :class="$style.root">
        <Drawer
            anchor="right"
            :isOpen="isOpenSlider"
            @onClose="handleCloseMenu"
        >
            <div :class="$style.container">
                Slider Bar
            </div>
        </Drawer>
    </div>
</template>

<script>
import { Drawer } from '@/components'
export default {
    components: {
        Drawer,
    },
    props: {
        isOpenSlider: {
            type: Boolean,
            required: false,
        },
    },
    methods: {
        handleCloseMenu() {
            this.$emit('onSwitchSlider')
        },
    },
}
</script>

<style module lang="scss" scoped>
.root {
    .container {
        width: 250px;
    }
}
</style>

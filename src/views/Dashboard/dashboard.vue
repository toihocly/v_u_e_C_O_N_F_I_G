<template>
    <div :class="$style.root">
        <TopBar @onSwitchSlider="handleSwitchSlider" />
        <Main :isOpenSlider="isOpenSlider" />
        <bottomBar />
        <SliderBar
            :isOpenSlider="isOpenSlider"
            @onSwitchSlider="handleSwitchSlider"
        />
    </div>
</template>

<script>
import { TopBar, BottomBar, Main, SliderBar } from './components'

export default {
    components: { TopBar, BottomBar, Main, SliderBar },
    props: {
        msg: {
            type: String,
            default: '',
            require: false,
        },
    },
    data() {
        return {
            isOpenSlider: false,
        }
    },
    methods: {
        handleSwitchSlider() {
            this.isOpenSlider = !this.isOpenSlider
        },
    },
}
</script>

styled
<style module lang="scss" scoped>
.root {
    display: grid;
    height: 100vh;
    grid-template-rows: 80px 1fr 60px;
    grid-template-columns: 1fr;
}
</style>

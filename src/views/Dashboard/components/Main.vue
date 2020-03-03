<template>
    <div :class="$style.root">
        <main
            :class="[
                $style.main,
                {
                    [$style.openSlider]: isOpenSlider === true,
                    [$style.closeSlider]: isOpenSlider === false,
                },
            ]"
        >
            <h2>Main</h2>
            <Demo />
        </main>
    </div>
</template>

<script>
import Demo from './Demo'
export default {
    props: {
        isOpenSlider: {
            type: Boolean,
            required: false,
        },
    },
    data() {
        return {
            valueCheckbox: false,
            valueTime: new Date(),
            valueText: '',
        }
    },
    components: { Demo },
    methods: {},
}
</script>

<style module lang="scss" scoped>
.root {
    display: flex;
    main {
        flex-grow: 1;
        padding: 0 24px;
        &.openSlider {
            //TODO: Đang muốn làm animation cho Grid. khi click
            // Hiện tại nó không có chạy animation nào ở đây hết
            // opacity: 100%;
            // transition: 1.5s all ease-in;
            transition: margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        }
        &.closeSlider {
            // margin-left: -240px;
            //TODO: Đang muốn làm animation cho Grid. khi click
            // transition: 1s all ease-in;
            transition: margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
        }
    }
}
</style>

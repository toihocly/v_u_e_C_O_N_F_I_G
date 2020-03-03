<template>
    <div
        :class="[
            $style.root,
            {
                [$style.root_open]: isOpen === true,
                [$style.root_close]: isOpen === false,
            },
        ]"
    >
        <div
            :class="[
                $style.muiBackdrop,
                {
                    [$style.muiBackdrop_open]: isOpen === true,
                    [$style.muiBackdrop_close]: isOpen === false,
                },
            ]"
            @click="handleCloseMenu"
        />
        <div
            :class="[
                $style.muiPaper_root,
                $style.muiPaper_elevation16,
                $style.muiPaper_paper,
                $style.muiPaper_paperAnchorLeft,
                {
                    [$style.muiPaper_paperOpen]: isOpen === true,
                    [$style.muiPaper_paperClose]: isOpen === false,
                },
            ]"
        >
            <div :class="$style.container">
                Slider Bar
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            required: false,
        },
    },
    methods: {
        handleClose() {
            this.$emit('onClose')
        },
    },
}
</script>

<style module lang="scss" scoped>
.root {
    z-index: 1300;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    position: fixed;
    &_open {
        visibility: visible;
        opacity: 1;
    }
    &_close {
        visibility: hidden;
        opacity: 1;
        transition: all 200ms ease;
    }
    .muiBackdrop {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: -1;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-tap-highlight-color: transparent;
        &_open {
            @include showOpacity();
        }
        &_close {
            @include hideOpacity();
        }
    }
    .muiPaper {
        &_root {
            background: white;
        }
        &_elevation16 {
            box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
                0px 16px 24px 2px rgba(0, 0, 0, 0.14),
                0px 6px 30px 5px rgba(0, 0, 0, 0.12);
        }
        &_paperAnchorLeft {
            left: 0;
            right: auto;
        }
        &_paperAnchorRight {
            right: 0;
            left: auto;
        }
        &_paper {
            top: 0;
            flex: 1 0 auto;
            height: 100%;
            display: flex;
            outline: 0;
            z-index: 1200;
            position: fixed;
            position: absolute;
            overflow-y: auto;
            flex-direction: column;
            -webkit-overflow-scrolling: touch;
        }
        &_paperOpen {
            @include showSliderBar();
        }
        &_paperClose {
            @include hideSliderBar();
        }
    }
    .container {
        width: 250px;
    }
}
</style>

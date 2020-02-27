<template>
    <div
        class="d-flex align-items-center"
        :class="$style.corCheckbox"
        @click="onClick"
    >
        <div>
            <input :checked="value" type="checkbox" />
            <span />
        </div>
        <div class="ml-3" :class="labelClass">
            {{ label }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        labelClass: {
            type: String,
            required: false,
        },
    },
    methods: {
        onClick() {
            this.$emit('input', !this.value)
        },
    },
}
</script>

<style module lang="scss" scoped>
.corCheckbox {
    cursor: pointer;
    input {
        display: none;
        ~ span {
            display: block;
            @include size(20px);
            background: $white;
            border: 1px solid $gray-300;
            position: relative;
        }
        &:checked {
            ~ span:before {
                content: '';
                display: block;
                @include size(10px, 5px);
                border-left: 2px solid $primary-color;
                border-bottom: 2px solid $primary-color;
                position: absolute;
                top: 25%;
                left: 40%;
                @include transform(rotate(-45deg) translate(-25%, -25%));
            }
        }
    }
}
</style>

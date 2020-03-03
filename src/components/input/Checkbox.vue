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
        <div
            :class="[
                labelClass,
                {
                    [$style.none]: directLabel === 'none',
                    [$style.left]: directLabel === 'left',
                    [$style.right]: directLabel === 'right',
                },
            ]"
        >
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
        directLabel: {
            type: String,
            validator: function(value) {
                // The value must match one of these strings
                return ['none', 'left', 'right'].indexOf(value) !== -1
            },
            default: 'right',
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
    .none {
        margin: 0;
        display: none;
    }
    .left {
        margin-right: 1rem;
        order: -1;
    }
    .right {
        margin-left: 1rem;
    }
}
</style>

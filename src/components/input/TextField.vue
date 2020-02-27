<template>
    <input
        class="border"
        :class="$style.textFiled"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
    },
}
</script>

<style module lang="scss" scoped>
.textFiled {
    background: $white;
    border-radius: $border-radius;
    height: $text-field-height;
    padding: 0 $padding-content-xs;
    max-width: 100%;
    &[disabled] {
        background: $primary-color-active;
    }
}
</style>

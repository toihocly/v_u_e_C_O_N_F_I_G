<template>
    <date-picker
        :value="value"
        @input="$emit('input', $event)"
        :type="type || 'date'"
        :format="format"
        :disabled-date="disabledDate"
        :disabled="disabled"
    >
        <template v-slot:input>
            <text-field
                :placeholder="placeholder"
                :value="displayText"
                class="text-center"
                :disabled="disabled"
            />
        </template>
    </date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import TextField from './TextField'
import moment from 'moment'

export default {
    components: {
        DatePicker,
        TextField,
    },
    props: [
        'value',
        'format',
        'placeholder',
        'type',
        'disabledDate',
        'disabled',
    ],
    computed: {
        displayText() {
            return this.value ? moment(this.value).format(this.format) : ''
        },
    },
}
</script>

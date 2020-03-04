<template>
    <div>
        <div>
            <h2>TEXTFIELD COMPONENTS</h2>
            <TextField v-model="valueText" />
        </div>
        <div>
            <h2>DATETIME COMPONENTS</h2>
            <DatepickerField
                class="hideIcon"
                placeholder="00:00"
                format="HH:mm"
                type="time"
                v-model="valueTime"
            />
            <DatepickerField
                class="hideIcon"
                placeholder="YYYY-MM-DD"
                format="YYYY-MM-DD"
                v-model="valueTime"
            />
        </div>
        <div>
            <h2>CHECKBOX COMPONENT</h2>
            <Checkbox v-model="valueCheckbox" label="Display photos in date" />
            <Checkbox
                v-model="valueCheckbox"
                label="Display photos in date"
                directLabel="left"
            />
            <Checkbox
                v-model="valueCheckbox"
                label="Display photos in date"
                directLabel="right"
            />
            <Checkbox
                v-model="valueCheckbox"
                label="Display photos in date"
                directLabel="none"
            />
        </div>
    </div>
</template>

<script>
import { TextField, DatepickerField, Checkbox } from '@/components'
export default {
    components: { TextField, DatepickerField, Checkbox },
    data() {
        return {
            valueText: '',
            valueCheckbox: true,
            valueTime: new Date(),
        }
    },
}
</script>

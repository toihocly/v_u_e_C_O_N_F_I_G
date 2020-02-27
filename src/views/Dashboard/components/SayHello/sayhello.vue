<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Hello Welcome to VUEJS',
            require: false,
        },
        description: {
            type: String,
            default: 'My name is Hai. Hello my buddy',
            require: false,
        },
    },
}
</script>

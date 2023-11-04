<script>
export default {
    name: 'SearchField',
    props: {
        placeholder: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            term: '',
        }
    },
    watch: {
        term(newTerm) {
            this.$emit('change', newTerm)
        },
    },
}
</script>

<template>
    <InputText type="text" v-model="term" :placeholder="placeholder"/>
</template>

<style scoped>

</style>

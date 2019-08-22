<template>
    <list-of-carmakers></list-of-carmakers>
</template>

<script>
    import ListOfCarmakers from '../components/carmakers/ListOfCarmakers.vue';

    export default {
        components: {
            'list-of-carmakers': ListOfCarmakers
        }
    };
</script>
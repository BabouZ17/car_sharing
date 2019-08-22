<template>
    <list-of-cars></list-of-cars>
</template>

<script>
    import ListOfCars from '../components/cars/ListOfCars.vue';

    export default {
        components: {
            'list-of-cars': ListOfCars
        }
    };
</script>
<template>
    <div>
        <v-container>
            <v-alert 
                v-for="alert in alerts" 
                :key="alert.id" 
                :type="alert.type"
                dismissible
                dense
                @click.native="remove(alert)"
            >
                {{ alert.message }}
            </v-alert>
        </v-container>
        <list-of-carmakers></list-of-carmakers>
    </div>
</template>

<script>
    import ListOfCarmakers from '../components/carmakers/ListOfCarmakers.vue';
    import Actions from '../store/actions-types/Actions';
    import {mapState, mapActions} from 'vuex';

    export default {
        components: {
            'list-of-carmakers': ListOfCarmakers
        },
        methods: {
            ...mapActions([
                Actions.REMOVE_ALERT,
            ]),
            remove: function(alarm){
                console.log(alarm.uuid);
                this.REMOVE_ALERT(alarm); 
            }
        },
        computed: {
            ...mapState([
                'alerts'
            ])
        }
    };
</script>
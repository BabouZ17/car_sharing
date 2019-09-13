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
        <list-of-cars></list-of-cars>
    </div>
</template>

<script>
    const uuidv4 = require('uuid/v4');
    import ListOfCars from '../components/cars/ListOfCars.vue';
    import {mapState, mapActions} from 'vuex';
    import Actions from '../store/actions-types/Actions';
    
    export default {
        components: {
            'list-of-cars': ListOfCars
        },
        methods: {
            ...mapActions([
                Actions.ADD_ALERT,
                Actions.REMOVE_ALERT,
                Actions.OPEN_DIALOG_MODAL,
            ]),
            remove: function(alarm){
                console.log(alarm.uuid);
                let payload = {"uuid": uuidv4(), "message": "this is a test", "info": "success"};
                this.ADD_ALERT(payload);
                //this.REMOVE_ALERT(alarm.uuid);
            }
        },
        computed: {
            ...mapState([
                'alerts',
            ])
        }
    };
</script>
<template>
    <v-layout>
        <v-dialog v-model="dialog_modal" persistent max-width="290">
            <template v-slot:activator="{ on }">
                <v-icon color="red" v-on="on">delete</v-icon>
            </template>
            <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green" text @click="close">No</v-btn>
                    <v-btn color="red" text @click="close">Yes</v-btn>
                    {{ dialog_modal }}
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import Actions from '../../store/actions-types/Actions';
    
    export default {
        data: function(){
            return {}
        },
        methods: {
            ...mapActions([
                Actions.OPEN_DIALOG_MODAL,
                Actions.CLOSE_DIALOG_MODAL
            ]),
            open: function(){
                this.OPEN_DIALOG_MODAL();
            },
            close: function(){
                this.CLOSE_DIALOG_MODAL();
            }
        },
        computed: {
            ...mapState([
               'dialog_modal' 
            ])
        }

    }
</script>



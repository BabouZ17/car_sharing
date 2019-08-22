<template>
  <v-form 
      v-model="valid"
      ref="form"  
  >
    <br />
    <v-flex 
        md6
        offset-md3
    >
      <v-card>
        <v-card-title>
            New Carmaker
        </v-card-title>
        <v-card-text>
          <v-container 
          grid-list-xl
          justify-center=True
          >
            <v-layout wrap>
              <v-flex
                  xs12
                  md6
                  offset-md3
              >
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="Name"
                  required
                  @keyup.enter="submit"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout justify-center=True>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="submit"
              >
                Validate
              </v-btn>
              <v-btn
                color="red"
                class="mr-4"
                @click="reset"
              >
                Reset
              </v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>

  import {mapState, mapActions} from 'vuex';
  import carmakerActions from '../../store/actions-types/carmakersActions';
  import router from '../../router';

  export default {
    data: function(){
      return {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ]
      }
    },
    methods: {
      ...mapActions([
        carmakerActions.CREATE_CARMAKER,
      ]),
      submit: async function(){
        if (this.$refs.form.validate()){
          let payload = {"name": this.name};
          await this.CREATE_CARMAKER(payload);
          if (this.last_backend_request_status == 201){
            alert("Carmaker added!");
          } else {
            alert("Carmaker already exist!");
          }
          router.push({name: "carmakers_show"});
        }
      },
      reset: function(){
        this.$refs.form.reset();
      }
    },
    computed: {
      ...mapState([
        'last_backend_request_status'
      ])
    }
  }
</script>




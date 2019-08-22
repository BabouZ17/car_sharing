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
            New Car
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
                offset-md4
            >
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Model"
                required
              ></v-text-field>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="10"
                label="Model"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
            <v-layout>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validate
              </v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
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
      validate: function(){
        if (this.$refs.form.validate()){
          console.log("valid");
        }
      }
    }
  }
</script>







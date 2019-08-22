<template>
  <v-form v-model="valid">
    <br />
    <v-flex 
      md6
      offset-md3
    >
    <v-card>
      <v-card-title>
        Contact
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
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex
              xs12
              md6
              offset-md3
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex
              xs12
              md6
              offset-md3
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
    </v-flex>
  </v-form>
</template>

<script>
    export default {
      props: ["emailRules", "nameRules", "valid"],
      data: function(){
        return {
          email: "",
          firstname: "",
          lastname: ""
        }
      }
    }
</script>



<template>
  <v-form v-model="valid">
    <br />
    <v-flex md6 offset-md3>
      <v-card>
        <v-card-title>Contact</v-card-title>
        <v-card-text>
          <v-container grid-list-xl justify-center="True">
            <v-layout wrap>
              <v-flex xs12 md6 offset-md3>
                <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  :counter="25"
                  label="First name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 offset-md3>
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  :counter="25"
                  label="Last name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md6 offset-md3>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
              </v-flex>

              <v-flex xs12 md6 offset-md3>
                <v-textarea v-model="text" label="Text" auto-grow required></v-textarea>
              </v-flex>
            </v-layout>
            <v-layout justify-center="True">
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">Validate</v-btn>
              <v-btn color="red" class="mr-4" @click="reset">Reset</v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-form>
</template>

<script>
export default {
  data: function() {
    return {
      email: "",
      firstName: "",
      lastName: "",
      text: "",
      emailRules: [
        v => !!v || "Email is required",
        v => (v && v.length <= 50) || "Email must be..."
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 25) || "Name must be..."
      ],
      valid: false
    };
  }
};
</script>



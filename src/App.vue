<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Contact List
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/about"
        text
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
        to="/"
        text
      >
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>
  
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

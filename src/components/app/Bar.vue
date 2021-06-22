<template>
  <v-app-bar color="primary lighten-1" dark app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ app.name }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="({ title }, i) in options" :key="i" @click="() => {}">
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    options: [{ title: "Profile" }, { title: "Sing out" }],
  }),
  computed: {
    ...mapGetters({
      app: "settings/getApp",
    }),
    drawer: {
      set(value) {
        this.$store.dispatch("settings/setDrawer", value);
      },
      get() {
        return this.$store.getters["settings/getDrawer"];
      },
    },
  },
};
</script>
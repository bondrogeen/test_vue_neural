<template>
  <v-navigation-drawer v-model="drawer" absolute temporary app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">{{ app.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ `ver. ${app.version}` }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="({ title, icon, path }, i) in menus"
        :key="title + i"
        :to="path"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    right: null,
  }),
  computed: {
    ...mapGetters({
      app: "settings/getApp",
      menus: "settings/getMenus"
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
  methods: {
    click(path) {
      console.log(path);
    },
  },
};
</script>

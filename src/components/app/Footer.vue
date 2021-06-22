<template>
  <v-footer color="primary lighten-1" padless app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="{ title, path } in menus"
        :key="title + path"
        :to="path"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ title }}
      </v-btn>
      <v-col class="primary lighten-2 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{ app.name }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      app: "settings/getApp",
      menus: "settings/getMenus"
    }),
  },
};
</script>
<template>
  <v-app id="app">
    <NavDrawer />
    <Bar />
    <Message />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Message from "@/components/app/Message";
import NavDrawer from "@/components/app/NavDrawer";
import Footer from "@/components/app/Footer";
import Bar from "@/components/app/Bar";

export default {
  name: "App",
  components: {
    Message,
    NavDrawer,
    Footer,
    Bar,
  },
  computed: {
    ...mapGetters({
      message: "messages/getText",
    }),
  },
  created() {
    this.$store.dispatch("datasets/get");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

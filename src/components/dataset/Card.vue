<template>
  <v-card class="ma-2" width="200">
    <v-toolbar dense flat>
      <v-toolbar-title class="text-h6">
        <slot></slot>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="caption grey--text mr-1">{{ size | format }}</span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn x-small icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(event, i) in ['Edit', 'Delete']"
            :key="i"
            @click="$emit('change', {event, id})"
          >
            <v-list-item-title>{{ event }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-chip
        v-for="(tag, i) in tags"
        :key="`card-tag-${i}`"
        x-small
        label
        small
        outlined
        >{{ tag }}</v-chip
      >
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: {
      type: String,
      default: "",
    },
    size: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  filters: {
    format: (bytes) => {
      if (!bytes) return "";
      var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
      if (bytes == 0) return "0 Byte";
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
    },
  },
};
</script>
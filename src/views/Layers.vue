<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="300px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{
            `Add ${nodeCategory[nodeType]} layer`
          }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="nodeLabel"
                    label="Name"
                    :prepend-icon="nodeIcons[nodeType]"
                    :rules="[rules.length(3)]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="cancel"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="add"> add </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12" class="pa-0 purple darken-1">
      <div class="d-flex flex-column sidebar pt-5">
        <v-btn dark plain small @click="dialog = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn-toggle
          v-model="nodeType"
          class="flex-column my-5"
          background-color="purple darken-1"
          dark
          plain
        >
          <v-btn small plain text>
            <v-icon>mdi-format-horizontal-align-left</v-icon>
          </v-btn>
          <v-btn small plain text>
            <v-icon>mdi-format-horizontal-align-center</v-icon>
          </v-btn>
          <v-btn small plain text>
            <v-icon>mdi-format-horizontal-align-right</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-btn dark plain small disabled @click="save">
          <v-icon>mdi-cloud-download-outline</v-icon>
        </v-btn>
        <v-btn dark plain small @click="save">
          <v-icon>mdi-cloud-upload-outline</v-icon>
        </v-btn>
      </div>
      <div>
        <simple-flowchart
          class="purple lighten-5"
          :scene.sync="scene"
          @nodeClick="nodeClick"
          @nodeDelete="nodeDelete"
          @linkBreak="linkBreak"
          @linkAdded="linkAdded"
          @canvasClick="canvasClick"
          :height="800"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import SimpleFlowchart from "@/components/flowchart/SimpleFlowchart";

export default {
  name: "app",
  components: {
    SimpleFlowchart,
  },
  data() {
    return {
      dialog: false,
      nodeType: 1,
      nodeLabel: "",
      nodeCategory: ["input", "action", "output"],
      nodeIcons: [
        "mdi-format-horizontal-align-left",
        "mdi-format-horizontal-align-center",
        "mdi-format-horizontal-align-right",
      ],
      rules: {
        length: (len) => (v) => (v || "").length >= len || `Length < ${len}`,
      },
      scene: {
        centerX: 1024,
        centerY: 140,
        scale: 1,
        nodes: [
          {
            id: 1,
            x: -650,
            y: -100,
            type: "input",
            label: "test1",
          },
          {
            id: 2,
            x: -500,
            y: 50,
            type: "action",
            label: "test2",
          },
          {
            id: 3,
            x: -800,
            y: 50,
            type: "action",
            label: "test3",
          },
          {
            id: 4,
            x: -650,
            y: 150,
            type: "output",
            label: "test4",
          },
        ],
        links: [
          {
            id: 1,
            from: 1,
            to: 2,
          },
          {
            id: 2,
            from: 1,
            to: 3,
          },
          {
            id: 3,
            from: 2,
            to: 4,
          },
          {
            id: 4,
            from: 3,
            to: 4,
          },
        ],
      },
    };
  },
  methods: {
    canvasClick(e) {
      console.log("canvas Click, event:", e);
    },
    add() {
      if (this.$refs.form.validate()) {
        let maxID = Math.max(
          0,
          ...this.scene.nodes.map((link) => {
            return link.id;
          })
        );
        this.scene.nodes.push({
          id: maxID + 1,
          x: -400,
          y: -100,
          type: this.nodeCategory[this.nodeType],
          label: this.nodeLabel ? this.nodeLabel : `test${maxID + 1}`,
        });
        this.nodeLabel = "";
        this.dialog = false;
      }
    },
    cancel() {
      console.log(this.$refs.form.reset());
      this.nodeLabel = "";
      this.dialog = false;
    },
    save() {
      const { nodes, links } = this.scene;
      console.log({ nodes, links });
      alert(JSON.stringify({ nodes, links }));
    },
    nodeClick(id) {
      console.log("node click", id);
    },
    nodeDelete(id) {
      console.log("node delete", id);
    },
    linkBreak(id) {
      console.log("link break", id);
    },
    linkAdded(link) {
      console.log("new link added:", link);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  float: left;
  width: auto;
}
</style>

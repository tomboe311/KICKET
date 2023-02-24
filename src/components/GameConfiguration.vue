<script setup>
import { faPlay } from '@fortawesome/free-solid-svg-icons';

defineProps({
  started: {
    type: Boolean,
    required: true
  }
})
</script>
<script>
export default {
    data() {
        return {
            title: "Game Configuration",
            desc: "Add names of the players",
            btnAddText: "Add new Player",
            btnRemovePlayerText: "Remove Player",
            missingPlayersText: "At least 3 players needed!",
            btnStartText: "Start",
            players: ["Proton", "Atom", "Helium", "Calcium"],
            defaultNames: []
        };
    },
    methods: {
        newPlayer() {
            var name = this.defaultNames[Math.floor(Math.random() * (108 - 0) + 0)];
            this.players.push(name);
        },
        updatePlayer(index, name) {
            this.players[index] = name;
        },
        startGame() {
            this.$emit("start-game", this.players);
        },
        remove(index) {
            this.players.splice(index, 1);
        }
    },
    mounted() {
        fetch("../src/assets/data/defaultPlayerNames.json")
            .then(res => res.json())
            .then(data => this.defaultNames = data)
            .catch(err => console.log(err.message));
    },
    components: { faPlay }
}
</script>

<template>
  <div v-if="!started">
    <h2>{{ title }}</h2>
    <p>{{ desc }}
      <span>
        <button v-on:click="newPlayer" class="btn btn-sm btn-success" :title=btnAddText><font-awesome-icon icon="fa-solid fa-plus" /></button>
      </span>
    </p>
    <div v-if="players.length <= 2" class="alert alert-danger" role="alert">{{ missingPlayersText }}</div>

    <div id="players">
      <div
        v-for="(player, index) in players"
        :key=index
        class="input-group mb-3">
        <input
          v-on:keyup="updatePlayer(index, $event.target.value)"
          :id="'pl_' + index"
          class="form-control"
          type="text"
          name="player[]"
          :placeholder="[[ player ]]">
        <button v-on:click="remove(index)" class="input-group-addon btn btn-sm btn-outline-danger" :title=btnRemovePlayerText><font-awesome-icon icon="fa-solid fa-trash" /></button>
      </div>
    </div>

    <div class="input-group">
        <button
          v-on:click="startGame"
          :disabled="players.length <= 2"
          class="btn btn-primary btn-sm text-uppercase"
          :title="btnStartText">
          {{ btnStartText }}
          <font-awesome-icon icon="fa-solid fa-play" />
        </button>
    </div>
  </div>
</template>

<style scoped>
.btn-success, .btn-primary {
  background-color: #16a085;
  border-color: #16a085;
}
.btn-success:hover, .btn-primary:hover {
  background-color: #48c9b0;
  border-color: #48c9b0 ;
}
.btn-success:disabled, .btn-primary:disabled {
  background-color: #48c9b0;
  border-color: #48c9b0 ;
}
</style>
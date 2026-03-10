<script setup>
import { ref } from 'vue'
import defaultPlayerNames from '../data/defaultPlayerNames.json'

const emit = defineEmits(['start-game'])

const players = ref(['Proton', 'Atom', 'Helium', 'Calcium'])

function addPlayer() {
  const name =
    defaultPlayerNames[Math.floor(Math.random() * defaultPlayerNames.length)]
  players.value.push(name)
}

function removePlayer(index) {
  players.value.splice(index, 1)
}

function startGame() {
  const validated = players.value
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
  if (validated.length >= 3) {
    emit('start-game', validated)
  }
}
</script>

<template>
  <div>
    <h2>Game Configuration</h2>
    <p>
      Add names of the players
      <button
        class="btn btn-sm btn-success"
        aria-label="Add a new player"
        @click="addPlayer"
      >
        Add new Player
      </button>
    </p>
    <div v-if="players.length <= 2" class="alert alert-danger" role="alert">
      At least 3 players needed!
    </div>
    <div id="players">
      <div v-for="(_, index) in players" :key="index" class="input-group mb-3">
        <input
          v-model="players[index]"
          class="form-control"
          type="text"
          :aria-label="'Player ' + (index + 1) + ' name'"
        />
        <button
          class="btn btn-sm btn-outline-danger"
          :aria-label="'Remove player ' + (index + 1)"
          @click="removePlayer(index)"
        >
          Remove Player
        </button>
      </div>
    </div>
    <div class="input-group">
      <button
        :disabled="players.length <= 2"
        class="btn btn-primary btn-sm text-uppercase"
        aria-label="Start game and generate teams"
        @click="startGame"
      >
        Start
      </button>
    </div>
  </div>
</template>

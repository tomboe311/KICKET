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
    <h2 class="h5 fw-bold mb-3">Game Configuration</h2>
    <p class="text-muted small mb-3">Add the names of all players below.</p>

    <div
      v-if="players.length <= 2"
      class="alert alert-danger py-2 small"
      role="alert"
    >
      At least 3 players needed!
    </div>

    <div class="d-flex flex-column gap-2 mb-3">
      <div v-for="(_, index) in players" :key="index" class="input-group">
        <input
          v-model="players[index]"
          class="form-control"
          type="text"
          :aria-label="'Player ' + (index + 1) + ' name'"
        />
        <button
          class="btn btn-outline-danger btn-remove"
          :aria-label="'Remove player ' + (index + 1)"
          @click="removePlayer(index)"
        >
          &times;
        </button>
      </div>
    </div>

    <button
      class="btn btn-outline-secondary btn-sm mb-4"
      aria-label="Add a new player"
      @click="addPlayer"
    >
      + Add Player
    </button>

    <div>
      <button
        :disabled="players.length <= 2"
        class="btn btn-start btn-lg w-100 text-uppercase"
        aria-label="Start game and generate teams"
        @click="startGame"
      >
        Start
      </button>
    </div>
  </div>
</template>

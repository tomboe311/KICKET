<script setup>
defineProps({
  teams: {
    type: Array,
    required: true,
  },
  players: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['shuffle-teams', 'restart-game'])
</script>

<template>
  <div>
    <h2 class="h5 fw-bold mb-3">Teams for {{ players.length }} players</h2>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle mb-4">
        <thead>
          <tr class="table-dark">
            <th scope="col">Team</th>
            <th scope="col">Defense</th>
            <th scope="col">Offense</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" :key="team.name" class="table-light">
            <th scope="row">
              {{ team.name }}
            </th>
            <td v-for="(member, idx) in team.members" :key="idx">
              {{ member }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex gap-2">
      <button
        class="btn btn-start flex-fill text-uppercase"
        aria-label="Shuffle teams again"
        @click="emit('shuffle-teams')"
      >
        Shuffle Again
      </button>
      <button
        class="btn btn-outline-secondary"
        aria-label="Go back to configuration"
        @click="emit('restart-game')"
      >
        Back
      </button>
    </div>
  </div>
</template>

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

const emit = defineEmits(['restart-game'])
</script>

<template>
  <div id="teams">
    <h2>Teams for {{ players.length }} players</h2>
    <table id="teamList" class="table table-bordered table-hover">
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
    <button
      class="btn btn-dark"
      aria-label="Go back to configuration"
      @click="emit('restart-game')"
    >
      Back
    </button>
  </div>
</template>

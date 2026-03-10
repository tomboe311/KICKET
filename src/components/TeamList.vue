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
    <h2 class="h5 fw-bold mb-3">{{ $t('teams.heading', { count: players.length }) }}</h2>
    <div class="table-responsive">
      <table class="table table-bordered table-hover align-middle mb-4">
        <thead>
          <tr class="table-dark">
            <th scope="col">{{ $t('teams.team') }}</th>
            <th scope="col">{{ $t('teams.defense') }}</th>
            <th scope="col">{{ $t('teams.offense') }}</th>
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
        :aria-label="$t('teams.shuffleAriaLabel')"
        @click="emit('shuffle-teams')"
      >
        {{ $t('teams.shuffle') }}
      </button>
      <button
        class="btn btn-outline-secondary"
        :aria-label="$t('teams.backAriaLabel')"
        @click="emit('restart-game')"
      >
        {{ $t('teams.back') }}
      </button>
    </div>
  </div>
</template>

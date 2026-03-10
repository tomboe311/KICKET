<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const STORAGE_KEY = 'kicket-players'
const DEFAULT_PLAYERS = ['', '', '', '']

const emit = defineEmits(['start-game'])

const players = ref([...DEFAULT_PLAYERS])

onMounted(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length >= 1) {
        players.value = parsed
      }
    }
  } catch {
    /* ignore corrupt data */
  }
})

watch(
  players,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true },
)

const duplicateIndices = computed(() => {
  const seen = new Map()
  const dupes = new Set()
  players.value.forEach((name, index) => {
    const normalized = name.trim().toLowerCase()
    if (!normalized) return
    if (seen.has(normalized)) {
      dupes.add(seen.get(normalized))
      dupes.add(index)
    } else {
      seen.set(normalized, index)
    }
  })
  return dupes
})

const hasDuplicates = computed(() => duplicateIndices.value.size > 0)
const tooFewPlayers = computed(() => players.value.length <= 2)
const canStart = computed(() => !tooFewPlayers.value && !hasDuplicates.value)

function addPlayer() {
  players.value.push('')
}

function removePlayer(index) {
  players.value.splice(index, 1)
}

function startGame() {
  if (!canStart.value) return
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
    <h2 class="h5 fw-bold mb-3">{{ $t('config.heading') }}</h2>
    <p class="text-muted small mb-3">{{ $t('config.subtitle') }}</p>

    <div
      v-if="tooFewPlayers"
      class="alert alert-danger py-2 small"
      role="alert"
    >
      {{ $t('config.minPlayers') }}
    </div>

    <div class="d-flex flex-column gap-2 mb-3">
      <div v-for="(_, index) in players" :key="index">
        <div class="input-group">
          <input
            v-model="players[index]"
            class="form-control"
            :class="{ 'is-invalid': duplicateIndices.has(index) }"
            type="text"
            :placeholder="$t('config.playerPlaceholder', { n: index + 1 })"
            :aria-label="$t('config.playerAriaLabel', { n: index + 1 })"
          />
          <button
            class="btn btn-outline-danger btn-remove"
            :aria-label="$t('config.removePlayer', { n: index + 1 })"
            @click="removePlayer(index)"
          >
            &times;
          </button>
        </div>
        <div
          v-if="duplicateIndices.has(index)"
          class="invalid-feedback d-block"
        >
          {{ $t('config.duplicateName') }}
        </div>
      </div>
    </div>

    <button
      class="btn btn-outline-secondary btn-sm mb-4"
      :aria-label="$t('config.addPlayerAriaLabel')"
      @click="addPlayer"
    >
      {{ $t('config.addPlayer') }}
    </button>

    <div>
      <button
        :disabled="!canStart"
        class="btn btn-start btn-lg w-100 text-uppercase"
        :aria-label="$t('config.startAriaLabel')"
        @click="startGame"
      >
        {{ $t('config.start') }}
      </button>
    </div>
  </div>
</template>

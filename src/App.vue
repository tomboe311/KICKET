<script setup>
import { ref } from 'vue'
import KNavbar from './components/KNavbar.vue'
import KFooter from './components/KFooter.vue'
import GameConfiguration from './components/GameConfiguration.vue'
import TeamList from './components/TeamList.vue'
import defaultTeamNames from './data/defaultTeamNames.json'

const description =
  'Create perfect teams for foosball and other team sports with KICKET - the ultimate app.'

const author = { name: 'Thomas Boehringer', url: 'https://tboehringer.de' }
const gdpr = {
  text: 'Privacy Policy',
  url: 'https://tboehringer.de/datenschutz.html#datenschutz',
}

const started = ref(false)
const teams = ref([])
const players = ref([])

function shuffle(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function buildTeams(shuffledPlayers) {
  const teamCount = Math.ceil(shuffledPlayers.length / 2)
  const pool = [...shuffledPlayers]
  const result = []
  for (let i = 0; i < teamCount; i++) {
    result.push({
      name: defaultTeamNames[i] || `Team ${i + 1}`,
      members: pool.splice(0, 2),
    })
  }
  return result
}

function startGame(playerList) {
  players.value = playerList
  teams.value = buildTeams(shuffle(playerList))
  started.value = true
}

function shuffleTeams() {
  teams.value = buildTeams(shuffle(players.value))
}

function restartGame() {
  started.value = false
  teams.value = []
  players.value = []
}
</script>

<template>
  <KNavbar />
  <main role="main" class="container">
    <div class="text-center my-4">
      <h1 class="hero-title display-5">KICKET</h1>
      <p class="hero-subtitle lead">
        {{ description }}
      </p>
    </div>

    <div class="content-card mx-auto" style="max-width: 640px">
      <Transition name="fade" mode="out-in">
        <GameConfiguration
          v-if="!started"
          key="config"
          @start-game="startGame"
        />
        <TeamList
          v-else
          key="teams"
          :teams="teams"
          :players="players"
          @shuffle-teams="shuffleTeams"
          @restart-game="restartGame"
        />
      </Transition>
    </div>
  </main>
  <KFooter
    :author-name="author.name"
    :author-url="author.url"
    :gdpr-text="gdpr.text"
    :gdpr-url="gdpr.url"
  />
</template>

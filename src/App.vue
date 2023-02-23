<script setup>
import kNavbar from './components/Navbar.vue'
import kGameConfiguration from './components/GameConfiguration.vue';
import kTeamList from './components/TeamList.vue'
import kFooter from './components/Footer.vue'
</script>

<script>
export default {
  
data() {
        return {
            name: 'KICKET',
            description: 'Create perfect teams for foosball and other team sports with KICKET - the ultimate app.',
            author: 'Thomas Boehringer',
            email: 'dev@tboehringer.de',
            website: 'tboehringer.de',
            gdprText: 'Privacy Policy',
            gdprUrl: 'https://tboehringer.de/datenschutz.html#datenschutz',
            players: [],
            started: false,
            defaultTeamNames: []
        }
    },
    methods: {
        startGame(players) {
            this.players = players
            this.started = true
        },
        restartGame() {
            this.started = false
            this.players = []
        },
        generateTeams() {
            this.players.sort(function (a, b) { return 0.5 - Math.random() })
            var tmpPlayers = this.players.slice()
            var teams = [];
            const sumOfTeams = Math.ceil(this.players.length / 2)
            for (var i=0; i < sumOfTeams; i++) {
                teams.push({ 'name': this.defaultTeamNames[i], 'members': tmpPlayers.splice(0,2) })
            }
            return teams;
        }
    },
    computed: {
        getCopyright() {
            return '&copy; ' + new Date().getFullYear() + '. <a href="https://' + this.website + '"> ' + this.author + ' </a>'
        },
        getGDPR() {
            return '<a href="' + this.gdprUrl + '">' + this.gdprText + '</a>'
        },
        getPlayers() {
            return this.players;
        }
    },
    mounted() {
        fetch('./src/assets/data/defaultTeamNames.json')
          .then(res => res.json())
          .then(data => this.defaultTeamNames = data)
          .catch(err => console.log(err.message))
      }
}
</script>

<template>
  <header>
    <kNavbar />
  </header>
  <main role="main" class="container">
    <h1 class="mt-3 text-center">{{ name }}</h1>
    <p class="lead text-center">{{ description }}</p>

    <kGameConfiguration
        :started="started"
        @start-game="startGame"
    />

    <kTeamList
        :started="started"
        :teams="generateTeams()"
        :players="getPlayers"
        @restart-game="restartGame"
    />
  </main>
  <kFooter
    :copyright="getCopyright"
    :gdpr="getGDPR"
    />
</template>

<style scoped>
body {
  background-color: #366164;
  margin-bottom: 45px;
}
</style>

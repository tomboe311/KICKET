const app = Vue.createApp({
    data() {
        return {
            name: 'KICKET',
            description: 'KICKET helps to generate random teams for table soccer',
            author: 'Thomas Boehringer',
            email: 'dev@tboehringer.de',
            website: 'tboehringer.de',
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
            return '&copy; ' + new Date().getFullYear() + ' Copyright <a href="https://' + this.website + '"> ' + this.website + ' </a>'
        },
        getGDPR() {
            return '<a href="https://tboehringer.de/datenschutz.html#datenschutz">Privacy Policy</a>'
        },
        getPlayers() {
            return this.players;
        }
    },
    mounted() {
        fetch('./assets/data/defaultTeamNames.json')
          .then(res => res.json())
          .then(data => this.defaultTeamNames = data)
          .catch(err => console.log(err.message))
      }
})

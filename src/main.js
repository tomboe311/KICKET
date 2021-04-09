const app = Vue.createApp({
    data() {
        return {
            name: 'KICKET',
            description: 'KICKET helps to generate random teams for table soccer',
            author: 'Thomas Boehringer',
            email: 'git@tboehringer.de',
            website: 'tboehringer.de',
            players: new Set(),
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
            let players = Array.from(this.players)
            players.sort(function (a, b) { return 0.5 - Math.random() })
            var tmpPlayers = players.slice()
            var teams = [];
            const sumOfTeams = Math.ceil(players.length / 2)
            for (var i=0; i < sumOfTeams; i++) {
                teams.push({ 'name': this.defaultTeamNames[i], 'members': tmpPlayers.splice(0,2) })
            }
            console.log(players)
            console.log(tmpPlayers)
            console.log(teams)
            return teams;
        }
    },
    computed: {
        getCopyright() {
            return '&copy; ' + new Date().getFullYear() + ' Copyright <a href="https://' + this.website + '"> ' + this.website + ' </a>'
        },
        getPlayers() {
            return Array.from(this.players);
        }
    },
    mounted() {
        fetch('./assets/data/defaultTeamNames.json')
          .then(res => res.json())
          .then(data => this.defaultTeamNames = data)
          .catch(err => console.log(err.message))
      }
})

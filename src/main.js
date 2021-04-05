const app = Vue.createApp({
    data() {
        return {
            name: 'KICKET',
            description: 'KICKET helps to generate random teams for table soccer',
            author: 'Thomas Boehringer',
            email: 'git@tboehringer.de',
            website: 'tboehringer.de',
            players: [],
            started: false,
        }
    },
    methods: {
        addPlayer(name) {
            this.players.push(name);
        },
        startGame(players) {
            this.players = players;
            this.started = true;
        },
        restartGame() {
            this.started = false;
        },
        generateTeams() {
            this.players.sort(function (a, b) { return 0.5 - Math.random() })
            var teamBravo = this.players.slice()
            var halfLength = Math.ceil(teamBravo.length / 2)
            var teamAlpha = teamBravo.splice(0, halfLength)

            return [
                { 'name': 'alpha', 'members': teamAlpha },
                { 'name': 'bravo', 'members': teamBravo }
            ]
        },

    },
    computed: {
        getCopyright() {
            return '&copy; ' + new Date().getFullYear() + ' Copyright <a href="' + this.website + '"> ' + this.website + ' </a>'
        },
        getPlayers() {
            return this.players;
        }
    }
})

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
        }
    },
    computed: {
        getCopyright() {
            return '&copy; 2021 Copyright: <a href="' + this.website + '"> ' + this.website + ' </a>'
        },
        getPlayers() {
            return this.players();
        }
    }
})

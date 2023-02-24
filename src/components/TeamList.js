app.component('team-list', {
  props: {
    started: {
      type: Boolean,
      required: true
    },
    teams: {
      type: Array,
      required: true
    },
    players: {
      type: Array
    }
  },
  template:
    /*html*/
    `<div id="teams" v-if="started">
    <h2>Teams for {{ getSumOfPlayers }} players</h2>
    <table id="teamList" class="table table-bordered table-hover">
      <thead>
        <tr class="thead-dark">
          <th scope="col">Team</th>
          <th scope="col">Defense</th>
          <th scope="col">Offense</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in teams" class="table-light">
          <th scope="row">{{ team.name }}</th>
          <td v-for="(name, index) in team.members">{{ name }}</td>    
        </tr>
      </tbody>
    </table>
    <button class="btn btn-dark" v-on:click="restart">Back</button>
  </div>`,
  methods: {
    restart() {
      this.$emit('restart-game')
    }
  },
  computed: {
    getSumOfPlayers() {
      return this.players.length;
    }
  }
})
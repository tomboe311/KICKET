app.component('game-configuration', {
  props: {
    started: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: 'Game Configuration',
      desc: 'Add names of the players',
      players: ['Proton', 'Atom', 'Helium', 'Calcium'],
      defaultNames: []
    }
  },
  template:
    /*html*/
    `<div v-if="!started">
      <h2>{{ title }}</h2>
      <p>{{ desc }} <span><button v-on:click="newPlayer" class="btn btn-sm btn-success">Add new Player</button></span></p>
      <div  v-if="players.length <= 2" class="alert alert-danger" role="alert">At least 3 players needed!</div>
      <div id="players">
        <div
          v-for="(player, index) in players"
          :key=index
          class="form-group row">
          <div class="col-12">
            <div class="input-group">
              <input
                v-on:keyup="updatePlayer(index, $event.target.value)"
                :id="'pl_' + index"
                class="form-control"
                type="text"
                name="player[]"
                :placeholder="[[ player ]]">
              <button v-on:click="remove(index)" class="input-group-addon btn btn-sm btn-outline-danger">Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-12">
          <button
            v-on:click="startGame"
            :disabled="players.length <= 2"
            class="btn btn-primary">
            Start
          </button>
        </div>
      </div>
    </div>`,
  methods: {
    newPlayer() {
      var name = this.defaultNames[Math.floor(Math.random() * (108 - 0) + 0)]
      this.players.push(name)
    },
    updatePlayer(index, name) {
      this.players[index] = name
    },
    startGame() {
      this.$emit('start-game', this.players)
    },
    remove(index) {
      this.players.splice(index, 1)
    }
  },
  mounted() {
    fetch('./assets/data/defaultPlayerNames.json')
      .then(res => res.json())
      .then(data => this.defaultNames = data)
      .catch(err => console.log(err.message))
  }
})
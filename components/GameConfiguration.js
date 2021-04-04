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
      players: ['Proton', 'Atom', 'Helium', 'Calcium']
    }
  },
  template:
    /*html*/
    `<div v-if="!started">
      <h2>{{ title }}:</h2>
      <p>{{ desc }}</p>
      started: {{ started }}
      <div id="players">
        <div v-for="player in players" class="form-group row">
          <div class="col-12">
            <input class="form-control" type="text" name="player[]" :placeholder="[[ player ]]">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-12">
          <button v-on:click="startGame" class="btn btn-primary">Start</button>
        </div>
      </div>
    </div>`,
  methods: {
    startGame() {
      this.$emit('start-game')
    },
  }
})
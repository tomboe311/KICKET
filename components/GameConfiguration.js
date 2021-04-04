app.component('game-configuration', {
    data() {
      return {
          title: 'Game Configuration',
          desc: 'Add names of the players',
          players: ['Proton', 'Atom', 'Helium', 'Calcium']
      }
    },
    template:
    /*html*/
    `<form id="game-config" action="#" method="get">
    <h2>{{ title }}:</h2>
    <p>{{ desc }}</p>
    <div id="players">
      <div v-for="player in players" class="form-group row">
        <div class="col-12">
          <input class="form-control" type="text" name="player[]" :placeholder="[[ player ]]">
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-12">
        <button name="submit" type="submit" class="btn btn-primary">Start</button>
      </div>
    </div>
  </form>`
})
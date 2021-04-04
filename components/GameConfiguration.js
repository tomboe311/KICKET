app.component('game-configuration', {
    template:
    /*html*/
    `<form id="game-config" onsubmit="start(); return false" action="#" method="get">
    <h2>Game Configuration:</h2>
    <div id="players">
      <div class="form-group row">
        <div class="col-12">
          <input class="form-control" type="text" name="player[]" placeholder="Proton">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-12">
          <input class="form-control" type="text" name="player[]" placeholder="Atom">
        </div>
      </div> 
      <div class="form-group row">
        <div class="col-12">
          <input class="form-control" type="text" name="player[]" placeholder="Helium">
        </div>
      </div> 
      <div class="form-group row">
        <div class="col-12">
          <input class="form-control" type="text" name="player[]" placeholder="Calcium">
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
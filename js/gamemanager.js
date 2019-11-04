let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Superman":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Batman":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Flash":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "GreenLantern":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() 
    + '.jpg" class ="img-avatar"><div><h3>' + classType + '</h3 class="health-player"><p>Health: ' 
    + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' 
    + player.strength + '</p><p>Agility: ' 
    + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
  },
  setPreFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = "<p>Task: Find an ennemy!</p>";
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for ennemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function () {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnnemy = document.querySelector(".ennemy");
    // Create ennemy!
    let ennemy00 = new Ennemy("Goblin", 100, 0, 50, 100, 100);
    let ennemy01 = new Ennemy("Troll", 200, 0, 150, 80, 150);
    let chooseRandomEnnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnnemy) {
      case 0:
        ennemy = ennemy00;
        break;
      case 1:
        ennemy = ennemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnnemy.innerHTML = '<img src="img/avatar-ennemies/' + ennemy.ennemyType.toLowerCase() 
    + '.jpg" alt="' + ennemy.ennemyType + '" class="img-avatar"><div><h3>' + ennemy.ennemyType 
    + '</h3><p class="health-ennemy">Health: ' + ennemy.health 
    + '</p><p>Mana: ' + ennemy.mana 
    + '</p><p>Strength: ' + ennemy.strength 
    + '</p><p>Agility: ' + ennemy.agility 
    + '</p><p>Speed: ' + ennemy.speed + '</p></div>';
  }
}
class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();
    car1 = createSprite(width/2-50, height-100);
    car2 = createSprite(width/2+100, height-100);
    cars = [car1, car2];
  }

  handleElements(){
    form.hide();
    form.titleImg.position(40,50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play(){
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!=undefined){
      image(backgroundImage,0,-height*5,width,height*5);
    }
    drawSprites();
  }

  getState(){
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data){
      gameState = data.val();
    });
  }

 update(state)
 {
  database.ref("/").update({
    GameState: state,
  });
 }




}

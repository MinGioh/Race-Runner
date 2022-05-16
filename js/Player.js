class Player {
  constructor() 
  {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount(){
    var playerCountRef = database.ref("PlayerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count){
    database.ref("/").update({
      PlayerCount: count,
    });
  }

  addPlayer(){
    var playerIndex = "players/player" + this.index;
    if(this.index === 1){
      this.positionX = width/2 - 100;
    }else{
      this.positionX = width/2 + 100;
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    })

  }

  static getPlayerInfo()
  {
    var playerInfoRef = database.ref("players");
     playerInfoRef.on("value", data =>{
      allPlayers = data.val();
       
    })
  }
}

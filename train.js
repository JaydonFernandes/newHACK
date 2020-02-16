class Train {
    

    constructor(transitLine, sprite) {
        console.log(transitLine)
      this.route = transitLine;
      this.station = 0;
      this.sprite = sprite;
      this.trainXCord = transitLine[this.station].xCord;
      this.trainYCord = transitLine[this.station].yCord;
    }

    moveTrainHorizontal(spriteXCord) {
        if(this.route[this.station+1].xCord < spriteXCord){
            return spriteXCord-1;
        }else if (this.route[this.station+1].xCord > spriteXCord){
            return spriteXCord+1;
        }else {
            return spriteXCord;
        }
    }

    moveTrainVertical(spriteYCord) {
        if(this.route[this.station+1].yCord < spriteYCord){
            return spriteYCord-1;
        }else if (this.route[this.station+1].yCord > spriteYCord){
            return spriteYCord+1;
        }else {
            return spriteYCord;
        }
    }

    checkStation(spriteXCord, spriteYCord){
        if (this.station < this.route.length-1){
            if((this.route[this.station+1].yCord == spriteYCord) && (this.route[this.station+1].xCord == spriteXCord)){
                this.station  = this.station+1;
                console.log("station updated: " + spriteXCord +" " + spriteYCord);
            }
        }
        
    }
  }
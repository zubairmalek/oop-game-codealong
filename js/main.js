//create initial class Game
class Game {
    constructor(){
        this.player = null;
    }
    start() {
        console.log("starting game...")
        this.player = new Player(); //will store an instance of Class Player
        this.attachEvents(); // will trigger functionality of event listeners 
    }
    attachEvents(){
        document.addEventListener('keydown', (event) => {
            //move position up
            console.log(event)
            if(event.key === "ArrowUp"){

                this.player.moveUp();

            } 
            //move position down
            else if(event.key === "ArrowDown") {

                this.player.moveDown();

            }
            //move position left
            else if (event.key === "ArrowLeft") {

                this.player.moveLeft();

            } 
            //move position right
            else if (event.key === "ArrowRight") {

                this.player.moveRight();

            }

        })
    }

}

class Player {
    constructor() {
        this.positionX = 30;
        this.positionY = 0;
        this.domElement = this.createDomElement();
    }
    
    createDomElement(){
        const newElm = document.createElement('div');
        newElm.id = 'player'
        const boardElm = document.getElementById('board');
        newElm.style.position = "absolute"
        newElm.style.left = this.positionX + "vw"
        newElm.style.bottom = this.positionY + "vh"
        
        boardElm.appendChild(newElm);

        return newElm;
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw"
        
    }

    moveRight(){
       this.positionX++;
       this.domElement.style.left = this.positionX + "vw"
    }

    moveUp (){
        this.positionY++;
        this.domElement.style.bottom = this.positionY + "vh"
    }

    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh"
    }

}

const game = new Game();
game.start();

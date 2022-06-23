//create initial class Game
class Game {
    constructor(){
        this.time = 0;
        this.player = null; // will store an instance of the class Player;
        this.obstacleArr = []; // will store instances of the class Obstacle in an array
    }
    start() {
        console.log("starting game...")
        this.player = new Player(); //will store an instance of Class Player
        this.attachEvents(); // will trigger functionality of event listeners 
        setInterval(() => {
            this.time++
            this.obstacleArr.forEach(element => {
                element.moveDown();
            });

            if(this.time% 60 === 0){
                const newObstacle = new Obstacle(Math.floor(Math.random() * 100));
            // newObstacle.positionY = Math.floor(Math.random() * 100);
            // newObstacle.positionX = Math.floor(Math.random() * 100);
            this.obstacleArr.push(newObstacle)
            }

            //collision detection

            this.obstacleArr.forEach((element) => {
                if (this.player.positionX< element.positionX + element.width &&
                    this.player.positionX+ this.player.width > element.positionX &&
                    this.player.positionY < element.positionY + element.height &&
                    this.player.height + this.player.positionY > element.positionY) {
                    // collision detected!
                    alert("COLLISION");
                } 
            })

        }, 50)

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
        this.height = 20;
        this.width = 10;
        this.domElement = this.createDomElement();
    }
    
    createDomElement(){
        const newElm = document.createElement('div');
        newElm.id = 'player'
        const boardElm = document.getElementById('board');
        newElm.style.left = this.positionX + "vw"
        newElm.style.bottom = this.positionY + "vh"
        newElm.style.width = this.width + "vw"
        newElm.style.height = this.height + "vh"
        
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

class Obstacle {
    constructor(positionX) {
        this.positionX = positionX;
        this.positionY = 90;
        this.height = 20;
        this.width = 10;
        this.domElement = this.createDomElement();
    }

    createDomElement(){
        const newObstacle = document.createElement('div');
        newObstacle.className = 'obstacle'
        const boardElm = document.getElementById('board');
        newObstacle.style.left = this.positionX + "vw"
        newObstacle.style.bottom = this.positionY + "vh"
        newObstacle.style.width = this.width + "vw"
        newObstacle.style.height = this.height + "vh"
        
        boardElm.appendChild(newObstacle);

        return newObstacle;
    }

    moveDown(){
        this.positionY--
        this.domElement.style.bottom = this.positionY + "vh"
    }

    moveLeft() {
        this.positionX-- 
        this.domElement.style.left = this.positionX + "vw"
        
    }
}
const game = new Game();
game.start();

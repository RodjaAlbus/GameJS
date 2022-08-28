
const root = document.documentElement;
export class Player {
    constructor(gameArea, playerObj) {
        this.countWS = 0   
        this.countDA = 0   
        this.maxSpeed = 5
        this.width = playerObj.offsetWidth
        this.height = playerObj.offsetHeight
        this.gaWidth = gameArea.offsetWidth  //Obtenervaloresdelpadre
        this.gaHeight = gameArea.offsetHeight  //Obtener valores del padre
    }

    update(playerObj, keys, lastKey, borders) {
        this.checkForCollition(borders);
        playerObj.style.left = (String(this.countDA) + 'px')
        playerObj.style.top = (String(this.countWS) + 'px')    
        if(keys.w.pressed && lastKey=='w') {
            this.countWS -= this.maxSpeed;
        } else if (keys.s.pressed && lastKey=='s') {
            this.countWS += this.maxSpeed;
        } else if (keys.d.pressed && lastKey=='d') {
            this.countDA += this.maxSpeed;
        } else if (keys.a.pressed && lastKey=='a') {
            this.countDA -= this.maxSpeed;
        }
        //BORDES
        if(this.countWS < 0) this.countWS = 0;
        if(this.countDA < 0)this.countDA = 0;
        if(this.countWS > this.gaHeight  -  this.height) this.countWS = this.gaHeight -  this.height;
        if(this.countDA > this.gaWidth - this.width)this.countDA = this.gaWidth - this.width;
    }
    
    checkForCollition(borders){
        //Como rayos hacer esto
        borders.forEach(element => {
            for (let i = 0; i < element.children.length; i++) {
                window.addEventListener('keydown', ({key}) => {
                    if(key === 'k') {
                        console.log(element.children[i].getBoundingClientRect()) 
                    }
                })                
            }
        });
    }


}
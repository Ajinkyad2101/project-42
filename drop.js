class Drop{
    constructor(x,y){
        var option = {
            firiction:'0.1'
           
        }
      
        this.rain= Bodies.circle(x,y,5,option)
    }

    update(){
        if(this.rain.position.y>700){

            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,200)})

        }
    }

    display(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,5)
    }

}
class rainbowFlake{

    constructor(musicSound){
        this.x = width/2 + Math.random()*10;
        this.y = height/2 + Math.random()*10;
        this.size = musicSound * 3;
        this.color = musicSound * 28;
        this.vel = {
            x : Math.random() * 10 - 5,
            y : Math.random() * 10 - 5
        };
    }

    update(){
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.x += Math.random() * 2 - 1;
        this.vel.y += Math.random() * 2 - 1;
    }


    render(){
        fill(this.color, 100, 100);
        ellipse(this.x, this.y, this.size, this.size);
    }

    offScreen(){
        if(this.x > windowWidth || this.x < 0 || this.y > windowHeight || this.y < 0)
            return true;
        return false;
    }
}
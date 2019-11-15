function getRandomSize(){
    while(true){
        var r1 = Math.random();
        var r2 = Math.random();
        if(r2 > r1){
            return r1 * 40;
        }
    }
}

class snowFlake{
    constructor(){
        this.x = random(0, 1500);
        this.y = random(-100, -20);
        this.vel = {
            x : 0,
            y : 0
        };
        this.acc = {
            x : 0,
            y : 0.05
        };
        this.size = getRandomSize();
        this.terminalV = this.size;
        this.color = 0;
    }

    update(){
        this.vel.x += this.acc.x + random(-0.03, 0.03);
        if(this.vel.y <= this.terminalV * 0.1)          // 눈 크기에 따라 속도 제한
            this.vel.y += this.acc.y;
        else
            this.vel.y = this.vel.y;

        this.x += this.vel.x;
        this.y += this.vel.y;
    }

    render(){
        fill(this.color, 0, 100, 0.7);
        ellipse(this.x, this.y, this.size, this.size);
    }

    offScreen(){
        if(this.y > windowHeight || this.x > windowWidth || this.x < 0)
            return true;
        return false;
    }


}
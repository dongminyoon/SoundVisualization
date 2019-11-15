class fire{
    constructor(x, y, color){
        this.x = x + random(0, 10);
        this.y = y + random(0, 10);
        this.vel = {
            x : random(-3, 3),
            y : random(-3, 3)
        };
        this.acc = {
            x : random(-0.01, 0.01),
            y : random(0, 0.1)
        };
        this.color = color + Math.floor(random(0,20));
        this.lifetime = Math.floor(random(40, 80));
        this.tok = 0;
    }

    update(){
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
        this.tok++;
    }

    islifetime(){
        if(this.tok == this.lifetime)
            return true;
        return false;
    }

    render(){
        fill(this.color, 255, 255);
        ellipse(this.x, this.y, 10, 10);
    }
}
class fireworkFlake{
    constructor(musicSound){
        this.x = random(0, width);
        this.y = height;
        this.vel = {
            x : 0,
            y : random(-17, -5)
        };

        this.acc = {
            x : 0,
            y : 0.2
        };
        this.color = musicSound * 36;
    }

    isExplode() {
        if (this.vel.y >= 0)
            return true;
        return false;
    }

    update(){
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;
    }

    render(){
        fill(this.color, 100, 100);
        ellipse(this.x, this.y, 10, 10);
    }
}
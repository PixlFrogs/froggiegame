const partclesArray = [];

class Particle {
    constructor(){
        this.x = player.x + player.width / 2;
        this.y = player.y + player.height / 2;
        this.size = Math.random() * 7 + 3;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = 'hsla('+ hue + ',100%, 50%, 0.8)';
    }
    update(){
        this.x -= gamespeed;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles(){
    partclesArray.unshift(new Particle());
    for(i = 0; i < partclesArray.length; i++){
        partclesArray[i].update();
        partclesArray[i].draw();
    }
    if(partclesArray.length > 200){
        for(i = 0; i < 20; i++){
            partclesArray.pop(partclesArray[i]);
        }
    }
}
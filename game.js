class Game{
    constructor(amount){
        this.amount = amount
        this.towers = [
            new Tower(this.amount),
            new Tower(this.amount),
            new Tower(this.amount)
        ]
        for(let i=0, j=this.amount; i<this.amount; i++, j--){
            this.towers[0].add_disk(new Disk(40+10*j, color((i*30)%255, (i*40)%255, (i*50)%255)))
        }
    }

    gprint(x, y, size){
        fill(255,255,0)
        stroke(0)
        rect(x, y-40, size, 40)
        for(let i=0; i<this.towers.length; i++){
            this.towers[i].tprint(x + size/2*i, y-40)
        }
    }
}
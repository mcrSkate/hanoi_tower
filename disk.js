class Disk{
    constructor(size, color){
        this.size = size
        this.color = color
        this.is_top = false
    }

    switch_top(){
        this.is_top = !this.is_top
    }

    dprint(x,y){
        fill(this.color)
        rect(x-this.size/2, y-20, this.size, 20)
    }
}
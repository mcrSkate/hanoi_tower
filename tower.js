class Tower{
    constructor(max_size){
        this.disks = []
        this.max_size = max_size
    }

    add_disk(disk){
        console.log(disk)
        if (this.disks.length>1){
            this.disks[this.disks.length-1].switch_top()
        }
        this.disks.push(disk)
    }

    remove_disk(){
        top_disk = this.disks.pop()
        if (this.disks.length>1){
            this.disks[-1].switch_top()
        }
        return top_disk
    }

    tprint(x,y){
        stroke(0)
        fill(0)
        rect(x-10, y-20*this.max_size-10, 20, 20*this.max_size+10)
        for(let i = this.disks.length-1; i>=0; i--){
            this.disks[i].dprint(x,y-20*i)
        }
    }
}
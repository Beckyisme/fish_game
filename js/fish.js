class Fish extends Sprite{
    constructor(type,x=0,y=0,rotation=0){
        const SIZE = [
            null,
            {w: 55, h: 37, r: 12},
            {w: 78, h: 64, r: 18},
            {w: 72, h: 56, r: 15},
            {w: 77, h: 59, r: 15},
            {w: 107, h: 122, r: 23}       
        ]
        // 父类操作
        super(new DrawRect(_imgs[`fish${type}`], 0, 0, SIZE[type].w, SIZE[type].h),
         x, y, rotation);
       
        //子类操作
        this.type = type;
        this.current_frame = 0
        this.MAX_FRAME = 4;

        this.speed = rnd(1,4);
        this.frameRate = 5;
        this.radius = SIZE[type].r;

        this.isDead = false;

    }

    draw(){
        if(this.rotation == -90){
            this.scaleY = -1;
        }
        this.rotation -= 90;
        if(this.isDead){
            this.current_frame+=4;
        }
        
        super.draw();

        if(this.isDead){
            this.current_frame-=4;
        }
        this.rotation += 90;
        if(this.rotation == -90){
            this.scaleY = 1;
        }
    }

    //小鱼摆尾巴
    // nextFrame(){
    //     this.curFrame++;
    //     if(this.curFrame >= this.maxFrame){
    //         this.curFrame = 0;
            
    //     }
    //     this.sy = this.curFrame * this.h;
    // }
}
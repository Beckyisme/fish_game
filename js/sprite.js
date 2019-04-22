class Sprite{
    constructor(drawRect, x=0, y=0, rotation=0){
        if(!drawRect){
            throw new Error('must be a drawRect');
        }

        this.setDrawRect(drawRect);
        this.x = x;
        this.y = y;
        this.rotation = rotation;

        this.speed = 0;
        this.MAX_FRAME = 0;
        this.current_frame = 0;

        this.scaleX = 1;//默认为1
        this.scaleY = 1;

        //帧频设置（鱼的尾巴摆动，之类的动画）
        this.frameRate = 1;
        this.frameRateNow = 0
    }

    setDrawRect(drawRect){
        this.drawRect = drawRect;
        this.w = drawRect.sw;
        this.h = drawRect.sh;
    }

    draw(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(d2a(this.rotation));
        ctx.scale(this.scaleX, this.scaleY);
        ctx.drawImage(this.drawRect.img, this.drawRect.sx , this.drawRect.sy+this.h*this.current_frame,
        this.w, this.h,
        -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
    }

    inRect(x, y){
        if(x >= this.x - this.w / 2 && x <= this.x + this.w / 2 &&
            y >= this.y - this.h /2 && y <= this.y + this.y / 2
        ){
            return true;
        }else{
            return false;
        }
    }

    outRect(x, y, w, h){
        if(this.x<x || this.y<y || this.x>w+x || this.y>h+y){
            return true;
        }else{
            return false;
        }
    }

    move(x, y){
        if(arguments.length == 0){
            var x_speed = this.speed * Math.sin(d2a(this.rotation));
            var y_speed = this.speed * Math.cos(d2a(this.rotation));
            this.x += x_speed;
            this.y -= y_speed;

        }else{
            this.x += (x - this.x) / 10;
            this.y += (y - this.y) / 10;
        }
       
    }

    nextFrame(){
        this.frameRateNow++;
        // 达到相对帧频后，运动一下
        if(this.frameRateNow == this.frameRate){
            this.frameRateNow = 0;

            this.current_frame++;
            if(this.current_frame >= this.MAX_FRAME){
                this.current_frame = 0;
                return true;
            }
            return false;
        } 
    }

    collTest(other){
       return Math.sqrt(Math.pow(this.x-other.x, 2)+Math.pow(this.y-other.y, 2))<this.radius+other.radius;
    }
  
}
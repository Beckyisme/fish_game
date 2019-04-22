class Button extends Sprite{
    constructor(drawRect_up, drawRect_down, x=0, y=0, rotation=0){
        super(drawRect_up, x, y, rotation);
        this.drawRect_up = drawRect_up;
        this.drawRect_down = drawRect_down;

        this.downAtMe = false;
    }

    down(x, y){
        if(this.inRect(x, y)){
            this.setDrawRect(this.drawRect_down);
            this.downAtMe = true;
          
        }else{
            this.downAtMe = false;
        }
    }

    up(x, y){
        this.setDrawRect(this.drawRect_up);

        if(this.inRect(x, y) && this.downAtMe){
            this.onclick && this.onclick();
        }
    }

}
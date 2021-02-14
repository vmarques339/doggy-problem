class Form{
    constructor(){
    }
    display(){
       
        var button1=createButton('FEED DOG');
        var button2=createButton('ADD FOOD')
        
        button1.position(475,375);
        button2.position(525,375)

        button.mousePressed(function(){
            var x=80,y=100;

            imageMode(CENTER);
            image(this.image,720,220,70,70);

            if(this.foodStock!=0){
                for(var i=0;i<this.foodStock;i++){
                    if(i%10==0){
                        x=80;
                        y=y+50;
                    }
                    image(this.image,x,y,50,50);
                    x=x+30;
                }
            }
        })
    }
}
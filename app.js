//Create a pet Object 


var pet = {
    name:"Poppy",
    type: "dog",
    age: 3,
    happiness:30,
    hunger:45,
    
    //Add Methods 

    feed: function(){
        this.hunger -= 20; //Decrease hunger by 20
        if(this.hunger< 0){
           this.hunger = 0; // hunger doesn't go below 0

        }
        alert(`${this.name} has been fed! the hunger level is now ${this.hunger}.`);
   },
   play: function(){
       this.happiness +=20;
       if(this.happiness > 100){
           this.happiness = 100; // happiness doesn't exceed 100
       }
       alert(`${this.name} played! happiness level is now ${this.happiness}.`);
   },
   agePet: function(){
       this.age +=1;
       this.happiness -= 5;
       this.hunger +=10;
       if(this.happiness > 0){
           this.happiness = 0;
       }
       if(this.hunger <100){
           this.hunger = 100;
       }
       alert(`${this.name} has aged! Age:${this.age}, happiness:${this.happiness}, Hunger:${this.hunger}`)
   }



}




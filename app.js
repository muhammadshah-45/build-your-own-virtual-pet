//Create a pet Object 


var pet = {
    name:prompt("What is your pet name?"),
    type:prompt("What type of your pet?"),
    age: 3,
    happiness:+prompt("how happy is your pet between(0-100)"),
    hunger:+prompt("how hunger is your pet between(0-100)"),
    
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
       alert(`${this.name} has aged! Age:${this.age}, Happiness:${this.happiness}, Hunger:${this.hunger}`)
   }



}

function interactive(){

    while(true){
    //Ask from user what they want to do

    let action = prompt("What would you like to do? (feed,type,agePet,play,exit)");
    if(action === "feed"){
        pet.feed();
        
    }else if(action === "name"){
        alert(`${this.name}`);
    }
    else if(action === "play"){
        pet.play();
    }else if(action === "agePet"){
        pet.agePet();

        
    } else if(action === "type"){
        alert(`your pet type is ${pet.type}`)

    }
    else if(action === "exit"){
        alert("thanks for taking care of your pet!");
        break;
    }else{
        alert("Invalid action.Please choose another action")
    }
}}


interactive()
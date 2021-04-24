class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game");

        var input = craeteInput("name");
        var button = createButton('play');
        var greetings = createElement("h3");

        input.position(130 , 100);
        button.position(250 , 200);
    

    button.mousePressed(function(){
        input.hide();
        button.hide();
        
        var name = input.value()
        playerCount ++
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("hello"+name)
        greeting.position(130 , 160)
    })
    }
    
}


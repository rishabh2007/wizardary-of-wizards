class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() {

    this.title.style('font-size', '50px');
    // this.title.style('background-color', color(190, 230, 250));
    this.title.style('font-family', 'Century');
    this.title.style('text-align:center');
    this.title.html("Wizards");
    this.title.position(300 - 50, 0);

    this.input.style('font-size', '50px');
    this.input.position(300 - 40, 300 - 80);
   this.input.style('text-align:center');

    this.button.style('font-size', '50px');
    this.button.position(300 + 30, 302);

    this.reset.position(500, 20);

    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount = 1;
      //  player.index = playerCount;
      // player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(300 - 70, 200);
    });

    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.update(0);
    });

  }
}

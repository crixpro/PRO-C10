var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["234c18f3-2a25-47fb-bd13-aa302f4b2526","82d7b1a6-da7f-4fe9-b6e7-c2c898564289","af71e4d3-083c-4181-b3a3-65749d56c2a3","e785d48e-9135-4090-8c6b-8b756ffa089d","065f7cb0-331b-46ce-a88f-c0f2ecfcfe6b","c812282c-efca-4c2a-8c7a-54f80d2d4011","9061d07a-7a84-4166-9cbb-eadeedc4ae98"],"propsByKey":{"234c18f3-2a25-47fb-bd13-aa302f4b2526":{"name":"car4","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"4ObRwftNkauPh9Byk86x79d5nzYPqsbP","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/234c18f3-2a25-47fb-bd13-aa302f4b2526.png"},"82d7b1a6-da7f-4fe9-b6e7-c2c898564289":{"name":"car1","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"9lSfgt6bTQ4dQP8pitKJVo5_9VKGftmg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/82d7b1a6-da7f-4fe9-b6e7-c2c898564289.png"},"af71e4d3-083c-4181-b3a3-65749d56c2a3":{"name":"car2","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"5SEtyrehTEBZECWq.k_eZmjHOWSVqmj9","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/af71e4d3-083c-4181-b3a3-65749d56c2a3.png"},"e785d48e-9135-4090-8c6b-8b756ffa089d":{"name":"car3","sourceUrl":null,"frameSize":{"x":98,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"AVC2Q09wvSBwcCTU1TexXff_.culkunj","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":75},"rootRelativePath":"assets/e785d48e-9135-4090-8c6b-8b756ffa089d.png"},"065f7cb0-331b-46ce-a88f-c0f2ecfcfe6b":{"name":"sam","sourceUrl":null,"frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"bXrUwu.EtfSYAUl6GLPjkB42_VZPf9K1","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/065f7cb0-331b-46ce-a88f-c0f2ecfcfe6b.png"},"c812282c-efca-4c2a-8c7a-54f80d2d4011":{"name":"Galaxia","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"},"9061d07a-7a84-4166-9cbb-eadeedc4ae98":{"name":"win1","sourceUrl":"assets/api/v1/animation-library/gamelab/pM5GAEwzxPtyuggztDy3faAPEP3uzTww/category_board_games_and_cards/flat_medal4.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"pM5GAEwzxPtyuggztDy3faAPEP3uzTww","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pM5GAEwzxPtyuggztDy3faAPEP3uzTww/category_board_games_and_cards/flat_medal4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var Nivel = 1;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
fill("red");
text("Nivel 1", 380, 15);
var gameState="serve";

var Tienda = createSprite(370, 190,90, 140);
Tienda.shapeColor = "yellow";
Tienda.setAnimation("win1");
boundary1 = createSprite(190,120,420,3);
boundary2 = createSprite(190,260,420,3);
  
sam = createSprite(20,190,13,13);
sam.shapeColor = "green";
sam.setAnimation("sam");
sam.scale = 0.20;
car1 = createSprite(100,130,10,10);
car1.shapeColor = "red";
car1.setAnimation("car1");
car1.scale = 0.20;
car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car2.setAnimation("car2");
car2.scale = 0.20;
car3 = createSprite(165,250,10,10);
car3.shapeColor = "red";
car3.setAnimation("car3");
car3.scale = 0.20;
car4 = createSprite(270,250,10,10);
car4.shapeColor = "red";
car4.setAnimation("car4");
car4.scale = 0.20;
  
 
//Agrega velocidad para hacer que el auto se mueva.

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  text("Nivel" + Nivel,300,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);

  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  if (gameState=="serve") {
       fill("red");
       text("Bienvenido Preciona ESPACIO para comensar", 80, 190);
     }
  if (gameState=="play") {
  if(keyDown("right")){
    sam.x = sam.x + 4;
  }
  if(keyDown("left")){
    sam.x = sam.x - 4;
  }
     }
  if (life == 3) {
    fill("red");
    textSize(50);
    text("Perdiste", 10, 40);
    gameState = "end";
  }
  if (gameState == "end") {
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
  }
  
  if (sam.isTouching(Tienda)) {
    sam.x = 20;
    sam.y = 190;
    Nivel = Nivel + 1;
    car1.velocityY = 3;
    car2.velocityY = 3;
    car3.velocityY = -3;
    car4.velocityY = -3;
  }

  if (keyWentDown("space")) {
       gameState = "play";
       car1.velocityY = 2;
       car2.velocityY = 2;
       car3.velocityY = -2;
       car4.velocityY = -2;
     }
  
  drawSprites();
   }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

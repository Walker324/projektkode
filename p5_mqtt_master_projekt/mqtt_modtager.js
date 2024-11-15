var shootX; 
var shootY;
var shot;

function modtager(topic, modtagetBesked) {
    let modtagerBuffer = JSON.parse(modtagetBesked);
    console.log(modtagerBuffer);
	
    let afsenderen = modtagerBuffer.from;
	if (afsenderen != afsenderID)
	{
	    let value = modtagerBuffer.val;
      let modText = modtagerBuffer.text; 
      console.log(value); 
      console.log(modtagerBuffer);
      
	} if (afsenderen === 'Phone') {
    let alpha = modtagerBuffer.alpha;
    let beta = modtagerBuffer.beta;
    let gamma = modtagerBuffer.gamma;
    let shootbuff = modtagerBuffer.shoot;
    shot = shootbuff;
    
    let startX = windowWidth / 2;
    let startY = windowHeight / 2;

    betamap = map(beta, -80, 80, -windowHeight, windowHeight); 
    alphamap = map(alpha, 90, 270, windowWidth, -windowWidth);
       
    shootX = startX + alphamap;
    shootY = startY + betamap;
    // rect(shootX, shootY, 30, 30);
  }
}

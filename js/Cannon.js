class Cannon { // classe canhão
  constructor(x, y, width, height, angle) { //construir o objeto com posição x e y, largura, altura e angulo
    this.x = x; //posição x é modificavel 
    this.y = y; // posição y é modificavel
    this.width = width;   // largura é modificavel
    this.height = height; // altura é modificavel
    this.angle = angle;   // angulo é modificavel
  }
  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) { 
      this.angle += 0.02;
      }
      if (keyIsDown(LEFT ARROW) && this.angle> -1.45) {
        this.angle -= 0.02;
      }   
        
    fill("#676e6a"); //a cor preenchida é cinza
    push(); //cria uma nova configuração de acordo com o que existe entre push() e pop()
    translate(this.x, this.y);  //cria uma nova configuração de acordo com o que existe entre push() e pop()
    rotate(this.angle);  //rotaciona a imagem de acordo com o angulo dado
    rect(-10, -20, this.width, this.height); //cria a base do canhão que irá se mover
    pop(); //faz retornar para as configurações anteriores assim que o jogo é reiniciado 
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);  //cria um arco preenchido de cinza para a base do canhão
    noFill(); //não preenche de cor o resto da tela
  }
}

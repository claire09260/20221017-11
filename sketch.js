function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)//設定方塊座標點以中心為座標
  background(0);//背景顏色為黑色
  noFill()//不充滿顏色
  stroke(255)//寬線的顏色
  ellipse(25,25,50)//座標(25,25),產生一個50直徑的圓
  rect(25,25,50)
  ellipse(50,50,25)//右下角小圓
//1
  //ellipse(25+50*0,25,50)//座標(25,25),產生一個50直徑的圓
 // rect(25+50*0,25,50)
  //ellipse(50+50*0,50,25)//右下角小圓
//2
  //ellipse(25+50*1,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*1,25,50)
 // ellipse(50+50*1,50,25)//右下角小圓
//3
  //ellipse(25+50*2,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*2,25,50)
  //ellipse(50+50*2,50,25)//右下角小圓
//4
  //ellipse(25+50*3,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*3,25,50)
  //ellipse(50+50*3,50,25)//右下角小圓
//5
  //ellipse(25+50*4,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*4,25,50)
  //ellipse(50+50*4,50,25)//右下角小圓
//6
  //ellipse(25+50*5,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*5,25,50)
  //ellipse(50+50*5,50,25)//右下角小圓
//7
  //ellipse(25+50*6,25,50)//座標(25,25),產生一個50直徑的圓
  //rect(25+50*6,25,50)
  //ellipse(50+50*6,50,25)//右下角小圓

//  for(var i=0;i<width/50;i++)//i++=i+1
//  {
//   ellipse(25+50*i,25+50*0,50)//座標(25,25),產生一個50直徑的圓
//   rect(25+50*i,25+50*0,50)
//   ellipse(50+50*i,50+50*0,25)//右下角小圓
//  }
//  for(var i=0;i<width/50;i++)//i++=i+1
//  {
//   ellipse(25+50*i,25+50*1,50)//座標(25,25),產生一個50直徑的圓
//   rect(25+50*i,25+50*1,50)
//   ellipse(50+50*i,50+50*1,25)//右下角小圓
//  }
//  for(var i=0;i<width/50;i++)//i++=i+1
//  {
//   ellipse(25+50*i,25+50*2,50)//座標(25,25),產生一個50直徑的圓
//   rect(25+50*i,25+50*2,50)
//   ellipse(50+50*i,50+50*2,25)//右下角小圓
//  }

//  for(var i=0;i<width/50;i++)//i++=i+1
//  {
//   ellipse(25+50*i,25+50*3,50)//座標(25,25),產生一個50直徑的圓
//   rect(25+50*i,25+50*3,50)
//   ellipse(50+50*i,50+50*3,25)//右下角小圓
//  }
var w=mouseX/10
 for(var j=0;j<height/50;j++)
 {
 for(var i=0;i<width/50;i++)//i++=i+1
 {
  stroke(255,255,0)
  ellipse(25+50*i,25+50*j,mouseX/10)//座標(25,25),產生一個50直徑的圓
  stroke(255)
  rect(25+50*i,25+50*j,mouseY/4)
  stroke("#bde0fe")
  ellipse(50+50*i,50+50*j,25)//右下角小圓
 }
}
}


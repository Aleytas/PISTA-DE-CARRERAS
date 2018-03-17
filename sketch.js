
const rojo = [];
const azul = [];
const cafe = [];
const verde=[];
let i = 0;
let j=0;


function preload()
{
	/*for ( let i = 0; i < 800; i++)
	{
		rojo[i] = loadImage(`img/rojo${i + 1}.png`);	
	}*/
	
	fondo = loadImage('img/pista6.jpg');

	rojo[0] = loadImage('img/rojo0.png');
	rojo[1] = loadImage('img/rojo1.png');
	rojo[2] = loadImage('img/rojo2.png');
	rojo[3] = loadImage('img/rojo3.png');
	
	azul[0] = loadImage('img/azul0.png');
	azul[1] = loadImage('img/azul1.png');
	azul[2] = loadImage('img/azul2.png');
	azul[3] = loadImage('img/azul3.png');

	cafe[0] = loadImage('img/cafe0.png');
	cafe[1] = loadImage('img/cafe1.png');
	cafe[2] = loadImage('img/cafe2.png');
	cafe[3] = loadImage('img/cafe3.png');

	verde[0] = loadImage('img/verde0.png');
	verde[1] = loadImage('img/verde1.png');
	verde[2] = loadImage('img/verde2.png');
	verde[3] = loadImage('img/verde3.png');	
}

////////////////////////////////////////////7

function setup() 
{
	createCanvas(windowWidth, windowHeight); 
	frameRate(50)
}

function draw() 
{	
	background(fondo);

	/*for ( let i = 0; i < 800; i++)
	{
		rojo[i] = loadImage(`img/rojo${i + 1}.png`);	
	}*/

		
		derecha();

		if (i>=300) {
			arriba();
		}

	
		//izquierda();
		//arriba();
		//abajo();
	

	


}


function derecha()
{
	let xr=750;  let xa=750;  let xc=750;  let xv=750;
	let yr=450;    let ya=475;    let yc=500;    let yv=525;

	image(rojo[0],  xr+i, yr+j, 50, 50); // (image(El nombre y posicion del arreglo, coordenada X, Coordenada Y, alto,ancho))
	//image(azul[0],  xa+i, ya, 50, 50); 
	//image(cafe[0],  xc+i, yc, 50, 50); 
	//image(verde[0], xv+i, yv, 50, 50);

	i++
}

function izquierda()
{
	let xr=1250;  let xa=1250;  let xc=1200;  let xv=1200;
	let yr=10;    let ya=30;    let yc=50;    let yv=70;

	image(rojo[1], xr+i, yr, 50, 50); 
	image(azul[1], xa+i, ya, 50, 50); 
	image(cafe[1], xc+i, yc, 50, 50); 
	image(verde[1],xv+i, yv, 50, 50);	

	i--;
}



function arriba()
{
	let xr=1190;  let xa=1220;  let xc=1250;  let xv=1275;
	let yr=375;    let ya=380;    let yc=500;    let yv=500;

	image(rojo[3], xr, yr+j, 50, 50); 
	//image(azul[3], xa, ya+j, 50, 50); 
	//image(cafe[3], xc, yc+j, 50, 50); 
	//image(verde[3],xv, yv+j, 50, 50);

	j--;
}

function abajo()
{
	image(rojo[2], xr+i, 450+j, 50, 50); 
	image(azul[2], xa+i, 475+j, 50, 50); 
	image(cafe[2], xc+i, 500+j, 50, 50); 
	image(verde[2],xv+i, 525+j, 50, 50);

	j++;
}

	//if(i === img.length){
	//	i = 0;
	//}
	

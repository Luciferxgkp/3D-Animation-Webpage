//Movement
const card=document.querySelector(".card")
const container=document.querySelector(".container")
const tshirts=document.querySelector(".tshirt img")
const title=document.querySelector(".info h1")
const description=document.querySelector(".info h3")
const sizes=document.querySelector(".sizes")
const purchase=document.querySelector(".purchase")

//moving animation events
container.addEventListener("mousemove",(e)=>{
	let xAxis=(window.innerWidth/2-e.pageX)/20;
	let yAxis=(window.innerHeight/2-e.pageY)/20;
	card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate IN
container.addEventListener("mouseenter",(e)=>{
	card.style.transition="none";
	title.style.transform="translateZ(150px)";
	description.style.transform="translateZ(125px)";
	tshirts.style.transform="translateZ(200px)";
	sizes.style.transform="translateZ(100px)";
	purchase.style.transform="translateZ(75px)";
});

container.addEventListener("mouseleave",(e)=>{
	card.style.transform=`rotateY(0deg) rotateX(0deg)`;
	card.style.transition="all 0.5s ease";
	title.style.transform="translateZ(0px)";
	description.style.transform="translateZ(0px)";
	tshirts.style.transform="translateZ(0px)";
	sizes.style.transform="translateZ(0px)";
	purchase.style.transform="translateZ(0px)";
})
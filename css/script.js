let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementByID("backbtn");
let nextbtn = document.getElementByID("nextbtn");
 nextbtn.addEventlistener("click",()=>{
	scrollContainer.style.scrollBehavior = "smooth"
	scrollContainer.scrollleft += 900;
});
backbtn.addEventlistener("click",()=>{
	scrollContainer.style.scrollBehavior = "smooth"
	scrollContainer.scrollleft -= 900;
})
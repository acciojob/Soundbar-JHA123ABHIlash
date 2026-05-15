//your JS code here. If required.
let btns=document.querySelectorAll('button');
let p=document.querySelector('p');

btns.forEach((btn)=>{
	btn.addEventListener("click",(e)=>{

			const audio=new Audio(`sounds/${e.target.textContent}.mp3`)
			audio.play();
})
})

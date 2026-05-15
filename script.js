//your JS code here. If required.
let btns=document.querySelectorAll('button');
let body=document.querySelector('body');

btns.forEach((btn)=>{
	btn.addEventListener("click",(e)=>{
			let audio=document.createElement('audio');
		audio.src = `sounds/${e.target.textContent}.mp3`;

		body.appendChild(audio);
		audio.play();
})
})

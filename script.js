//your JS code here. If required.
let btns=document.querySelectorAll('button');
let p=document.querySelector('p');

btns.forEach((btn)=>{
	btn.addEventListener("click",(e)=>{

		if(e.target.textContent=="applause"){
			audio.play("applause.mp3")
		}else if(e.target.textContent=="boo"){
			audio.play("boo.mp3")
		}else if(e.target.textContent=="gasp"){
			audio.play("gasp.mp3")
		}else if(e.target.textContent=="tada"){
			audio.play("tada.mp3")
		}else if(e.target.textContent=="victory"){
			audio.play("victory.mp3")
		}else if(e.target.textContent=="wrong"){
			audio.play("wrong.mp3")
		}else if(e.target.textContent=="applause"){
			audio.play("")
		}
		
	p.textContent=e.target.textContent;
})
})

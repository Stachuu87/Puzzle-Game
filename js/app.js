document.addEventListener("DOMContentLoaded", function(){
	
	let game = document.querySelector(".gameWindow")
	let piece = game.querySelectorAll("div");
	let pos = 0;
	let emptypiece;
	let url = "./images/1.jpg";
	const hint = document.querySelector(".hintWindow");
	let classList = [ "empty", "puzzle2", "puzzle3", "puzzle4", "puzzle11", "puzzle12", "puzzle13", "puzzle14", "puzzle21", "puzzle22", "puzzle23", "puzzle24", "puzzle31", "puzzle32", "puzzle33", "puzzle34"];
	

	function removeClasses () {
		for (let i = 0; i < piece.length; i++) {
			piece[i].classList.remove(piece[i].classList[0]);
			piece[i].style.backgroundImage = "";
			piece[i].style.backgroundSize = "";
			piece[i].style.backgroundColor = "";
			}
		}

	function randomClasses () {
		let numberOcuppied = [];
		
		for (let i = 0; i< piece.length; i++) {
			piece[i].style.backgroundImage = "";
			piece[i].style.backgroundSize = "";
			piece[i].style.backgroundColor = "";
			if(piece[i].classList.length == 1) {

				piece[i].classList.remove(piece[i].classList[0]);
			}
		}
		
		while (numberOcuppied.length < 16) {
			let classNum = Math.floor(Math.random()*16);
			if (numberOcuppied.indexOf(classNum) == -1) {
				piece[numberOcuppied.length].classList.add(classList[classNum]);
				numberOcuppied.push(classNum);
//				
//				getPicture();
			}
		}
	}

	function start () {
		for (let i = 0; i < piece.length; i++) {
			piece[i].addEventListener("click", function(event){
				let n = [...piece].indexOf(event.target);
				let empty = document.querySelector(".empty");
				let emptyIndex = [...piece].indexOf(empty);
				if (emptyIndex + 1 == n || emptyIndex + 4 == n || emptyIndex - 1 == n || emptyIndex - 4 == n) {
					empty.classList.remove(empty.classList[0]);
					empty.classList.add(event.target.classList[0]);
					event.target.classList.add("empty");
					event.target.classList.remove(event.target.classList[0]);

					for(let i = 0; i<piece.length; i++) {
						piece[i].style.backgroundImage = `url(` + url + `)`;
					}
					
					emptypiece = game.querySelector(".empty");
					emptypiece.style.backgroundImage = "none";
					emptypiece.style.backgroundColor = "white";

					} else {
						
					console.log("nie ma go tutaj");
				}
			})
		}
	}
	
	function getPicture (selectedVal) {
		switch (selectedVal) {
			case "1":
				url = "./images/1.jpg";
				break;
			case "2":
				url = "./images/2.jpg";
				break;
			case "3":
				url = "./images/3.jpg";
				break;
		}
		
		for(let i = 0; i < piece.length; i++) {
			piece[i].style.backgroundImage = `url(` + url + `)`;
			piece[i].style.backgroundSize = '400px';
		}
		emptypiece = document.querySelector(".empty");
		emptypiece.style.backgroundImage = "none";
		
		hint.style.backgroundImage = `url(` + url + `)`;
		hint.style.backgroundSize = 'cover';		
	}	
	
	function defaultClassesOrder () {
		for (let i = 0 ; i < piece.length; i ++) {
			piece[i].classList.add(classList[i]);
		}
	}
	

	const select = document.querySelector(".picSelect");
	let selectedVal = select.value;

	select.addEventListener("change", function(){
		selectedVal = select.value;
		removeClasses();
		defaultClassesOrder();
		getPicture(selectedVal);
	})

	const startBtn = document.querySelector(".startBtn");
	startBtn.addEventListener("click", function(){
		removeClasses();
		randomClasses();
		getPicture(selectedVal);
		start();
	})

	defaultClassesOrder();
	getPicture(selectedVal);

})

window.onload = function() {
	function wrap(sel) {
		let el = document.getElementsByClassName(sel)[0];
		let text = el.innerText + "";
		el.setAttribute("data-" + sel, el.innerText);
		el.innerText = "";
		console.log(text)

			let div = document.createElement("div");
			div.classList.add("word");
			Array.from(text).forEach(function(letter) {
				console.log(letter)
				let span = document.createElement("span");
				span.innerHTML = letter;
				div.appendChild(span);
			});
			el.appendChild(div);
	}
	function pickLetter() {
		let letters = [].slice.call(document.querySelectorAll(".word span"));
		let index = 0;

		function switchLetter() {
			let item = letters[index];
			console.log(letters[index])
			item.classList.add("show");
			letters.shift();
			if (letters.length > 0) {
				setTimeout(switchLetter, 200);
			}
		}
		switchLetter();
	}
	wrap("name")
	pickLetter();
}

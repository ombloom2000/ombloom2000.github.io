var nose = document.querySelector("#nose");
var container = document.querySelector("#container");

container.addEventListener("click", function(event) {
	var xPosition = event.clientX - container.getBoundingClientRect().left - (nose.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (nose.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	nose.style.left = xPosition + "px";
	nose.style.top = yPosition + "px";
	}
);
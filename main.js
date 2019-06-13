var titleInput = document.querySelector("#left__input--title")
var urlInput = document.querySelector("#left__input--url")
var enterBtn = document.querySelector(".left__form--btn")
var rightContainer = document.querySelector(".right__container")

/**************Event Lsiteners*******************/
enterBtn.addEventListener("click", displayBookmark)
titleInput.addEventListener("keydown", disableBtns)
urlInput.addEventListener("keydown", disableBtns)

/*****************Function***********************/
function displayBookmark(e) {
	e.preventDefault();
  rightContainer.insertAdjacentHTML(
		"afterbegin",
		`<article class="right__section--article">
		<h2 class="right__article--title">${titleInput.value}</h2>
		<a href="${urlInput.value}" class="right__article--url">${urlInput.value}</a>
		<div class="right__article--buttons">
		<button class="right__article--read">Read</button>
		<button class="right__article--delete">Delete</button>
		</div>	
		</article>`
    )
		var readBtns = document.querySelectorAll(".right__article--read")
		for (var i = 0; i < readBtns.length; i++){
			readBtns[i].addEventListener("click", addReadClass);
		}
	}
	
	function addReadClass(e) {
		if (e.target.classList.contains(".read")) {
			e.target.classList.remove(".read");
		} else {
			e.target.classList.add(".read");
		}
	}


function disableBtns() {
	if (titleInput.value.length > 0 && urlInput.value.length > 0){
		document.querySelector(".left__form--btn").disabled = false;
	}else {document.querySelector(".left__form--btn").disabled = true;
	}
}
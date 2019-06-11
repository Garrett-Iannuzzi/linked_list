var titleInput = document.querySelector("#left__input--title")
var urlInput = document.querySelector("#left__input--url")
var enterBtn = document.querySelector(".left__form--btn")
var rightContainer = document.querySelector(".right__container")
var readBtn = document.querySelector("right__article-read")

/**************Event Lsiteners*******************/
enterBtn.addEventListener("click", displayBookmark)
readBtn.addEventListener("click", addToReadList)
// readBtn.addEventListener("click", deleteFromReadList )

/*****************Function***********************/

function displayBookmark(e) {
	e.preventDefault();
  rightContainer.insertAdjacentHTML(
    "afterbegin",
			`<article class="right__section--article">
				<h2 class="right__article--title">${titleInput.value}</h2>
				<h2 class="right__article--url">${urlInput.value}</h2>
				<div class="right__article--buttons">
					<button class="right__article--read">Read</button>
					<button class="right__article--delete">Delete</button>
				</div>	
				</article>`
    )
}

function addToReadList() {
	
}

// function deleteFromReadList() {

// }
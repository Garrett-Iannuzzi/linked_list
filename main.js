var titleInput = document.querySelector("#left__input--title")
var urlInput = document.querySelector("#left__input--url")
var enterBtn = document.querySelector(".left__form--btn")
var rightContainer = document.querySelector(".right__container")

/**************Event Lsiteners*******************/
enterBtn.addEventListener("click", displayBookmark)

/*****************Function***********************/

function displayBookmark(e) {
	e.preventDefault();
  rightContainer.insertAdjacentHTML(
    "afterbegin",
			`<article class="right__section--article">
				<h2 class="right__article--title">Title</h2>
				<link herf="Link" type="Link here">
				<button class="right__article--read">Read</button>
				<button class="right__article--delete">Delete</button>
				</article>`
    )
}
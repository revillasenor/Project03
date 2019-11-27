
var start = 0;
slideshow();

function slideshow() {
	var beginning;
	var grab_html_element = document.getElementsByClassName("slides");
	for (beginning = 0; beginning < grab_html_element.length;beginning++) {
		grab_html_element[beginning].style.display="none";
	}
	start++;
	if (start > grab_html_element.length) {start = 1}
	grab_html_element[start - 1].style.display = "block";
	setTimeout(slideshow, 3000);
}
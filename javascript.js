/* Author: Tatsumi Suenaga */
var today = new Date();
function change(){
	var button = document.getElementById("fold_button");
	var button2 = document.getElementById("jump_button");
	if (button.value=="Fold") {
		button2.style.visibility = "collapse";
		button.value = "Unfold?";
		var row = document.getElementsByClassName("show");
		for (var i = 0; i < row.length; ++i) {
			if (parseInt(row[i].getElementsByTagName("td")[2].className) < (today.getMonth()+1)){
				row[i].style.visibility = "collapse";
			} else if (parseInt(row[i].getElementsByTagName("td")[2].className) == (today.getMonth()+1)){
				if(parseInt(row[i].getElementsByTagName("td")[2].id) < today.getDate()){
					row[i].style.visibility = "collapse";
				}
			}
		}
	} else {
		button.value = "Fold";
		button2.style.visibility = "visible";
		var row = document.getElementsByTagName("tr");
		for (var i = 0; i < row.length; i++) {
			row[i].style.visibility = "visible";
		}
	}
}
function jumpScroll() {
	var button = document.getElementById("fold_button");

	var scroll = 155;
	var row = document.getElementsByClassName("show");
	for(var i = 0; i < row.length; i++) {
		if (today.getMonth()+1 >= 5) {
			window.scrollTo(0, 1500);
			row[row.length-1].id = "hi";
			i = row.length;
		} else if(parseInt(row[i].getElementsByTagName("td")[2].className) < (today.getMonth()+1)){
			scroll += 35;
		} else if (parseInt(row[i].getElementsByTagName("td")[2].className) == (today.getMonth()+1)){
			if(parseInt(row[i].getElementsByTagName("td")[2].id) >= today.getDate()){
				row[i].id = "hi";
				window.scrollTo(0,scroll);
				i=row.length;
			}
		}
	}
	
}

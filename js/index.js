window.onload=function(){
	var inputs=document.getElementsByTagName("input");
	inputs[0].oninput=inputs[1].oninput=function(){
		inputs[0].value=inputs[1].value;
	}

};
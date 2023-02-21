var man = {
	"Имя": "",
	"Профессия": "",
	"Возраст": "",
	"Суперсила": "",
	"Аватар": "",

}

function k1(){
	man.Аватар = "111.jpg";
	alert("Аватар выбран");
}

function b1(){
	man.Суперсила = "Радуга из глаз";
	alert("Суперсила выбрана");
}

function f1(){
	man.Имя = document.getElementById('name').value;
	man.Профессия = document.getElementById('prof').value;
	man.Возраст = document.getElementById('age').value;
	//alert(man.Возраст);

	var out='';
	for (var key in man) {
		out+= key + ' === ' + man[key] + '<br>';
	}
	//document.write(out);

	localStorage.setItem('info',out);
	localStorage.setItem('pic',man.Аватар);
	window.location = "2.html";
}
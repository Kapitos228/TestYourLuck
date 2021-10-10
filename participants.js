/*  Arpit Acherya, json script that takes an array of stings, parse it to JSON object and prints it out on main page */
	let text = '{"Members":[' +
	'{"firstName":"Arpit","lastName":"Acharya" },' +
	'{"firstName":"Artem","lastName":"Bessonov" },' +
	'{"firstName":"Kripa","lastName":"Bhujel" }]}';

	const obj = JSON.parse(text);
	document.getElementById("demo").innerHTML =
	obj.Members[0].firstName + " " + obj.Members[0].lastName + "<br>"
	+ obj.Members[1].firstName + " " + obj.Members[1].lastName + "<br>" + obj.Members[2].firstName + " " + obj.Members[2].lastName ;
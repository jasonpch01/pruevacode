window.onload = function(){

	let logo = "Bocadiño Y Tu";
	let logoimage = "url('Logo.png')"
	const logosrc = 'Logo.png'


	const get_logo = document.getElementById("logo");
	const get_buscador = document.getElementById('buscador')

	var img = document.querySelector("#logo")
	var widthx = img.naturalWidth

	const chk_img = document.getElementById("img")
	const chk_texto = document.getElementById('texto')

	// button.onclick = function changeContent(){
	// 	alert('click');
	// }

	chk_texto.addEventListener('click', event => {

	})

	chk_img.addEventListener('click', event =>{
		let logo_span = document.querySelector('#logo a span');
		logo_span.innerHTML = '<img src=\"' + logosrc + '\"  >';
	})

	chk_texto.addEventListener('click', event => {
		let logo_span = document.querySelector('#logo a span');
		logo_span.innerHTML =  logo;
	})
	// getSize();

}



function getSize(){
	var img = document.querySelector("#logo");
	var width = img.naturalWidth;
	var height = img.naturalHeight;
	alert("Image Width=" + width + " & " + "Image Height=" + height);
}







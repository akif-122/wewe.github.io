let content = document.querySelector('.content'); 
let sideBar = document.querySelector('.sidebar'); 

let Toggler = document.querySelector('.toggle'); 
let opener = document.querySelector('.opener'); 
let closer = document.querySelector('.closer'); 
let body =  document.querySelector('body'); 

// Toggler.addEventListener("click", function(){
// 	content.classList.toggle("active");
// 	Toggler.classList("show-active");
// })

opener.addEventListener("click", function(){
	opener.classList.add('d-none');
	closer.classList.remove('d-none');
	content.classList.add("active");


})


closer.addEventListener("click", function(){
	opener.classList.remove('d-none');
	closer.classList.add('d-none');
	content.classList.remove("active");


})


body.addEventListener("click", function(){
		opener.classList.remove('d-none');
	closer.classList.add('d-none');
	content.classList.remove("active");
},true)

sideBar.addEventListener("click", function(){
	opener.classList.add('d-none');
	closer.classList.remove('d-none');
	content.classList.add("active");
})



let addOpener = document.querySelector(".address-opener");
let addBook = document.querySelector(".address-book");
let addressClose = document.querySelector(".address-close i");


addBook.addEventListener('click', function(){
	addBook.classList.add("addBookActive");

},true)

addOpener.addEventListener('click', function(){
	addBook.classList.add("addBookActive");

})

addressClose.addEventListener('click', function(){
	addBook.classList.remove("addBookActive");

})

body.addEventListener("click", function(){
		opener.classList.remove('d-none');
	closer.classList.add('d-none');
	content.classList.remove("active");

	addBook.classList.remove("addBookActive");

},true)
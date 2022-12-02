
if (localStorage.getItem('login')) {
    alert('Already Registered')
    window.history.back()
}


// //--------sign up--------
let usernameInput = document.querySelector('#username')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password1')
let _passwordInput = document.querySelector('#password2')
let submitBtn = document.querySelector('#submitbtn')

let values = {
    username: "",
    email: "",
    password: "",
    _password: "",
}

let getValues = () => {
    values.username = usernameInput.value
    values.email = emailInput.value
    values.password = passwordInput.value
    values._password = _passwordInput.value
}


let emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
let passwordFilter = /^[A-Za-z]\w{7,20}$/
let submitForm = () => {
    getValues ()
    
    if (values.email.match(emailFilter) && values.password.match(passwordFilter) && values.password == values._password) {
        localStorage.setItem('login', JSON.stringify(values))
        window.history.back()
    } else {
        alert('Something incorrect')
    }
}




const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');






// navbar

Hamburger = document.querySelector(".hamburger");
Hamburger.onclick = function() {
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}


// API

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77ea0dd80cmshf8e57cd5ad5566bp1788fdjsnba04bf0be5e1',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=One%20piece&genres=Adventure%20action&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

const form = document.getElementById('contactForm')
const url =
  "https://zepn0cfhee.execute-api.us-east-1.amazonaws.com/prod/email/send";
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')
const fields = form.querySelectorAll('input,select,textarea');
var fieldsArr = Array.prototype.slice.call(fields);
const checkField = (e) =>{
	if (e.type == 'focus') e.target.parentNode.classList.add('slide-up');
	if (e.type == 'blur' && e.target.value == "") e.target.parentNode.classList.remove('slide-up')
}

fieldsArr.map(item => {
	item.addEventListener("blur", checkField)
	item.addEventListener("focus", checkField)
});
// console.log(fieldsArr);
function post(url, body, callback) {
	var req = new XMLHttpRequest();
	req.open("POST", url, true);
	req.setRequestHeader("Content-Type", "application/json");
	req.addEventListener("load", function () {
		if (req.status < 400) {
			callback(null, JSON.parse(req.responseText));
		} else {
			callback(new Error("Request failed: " + req.statusText));
		}
	});
	req.send(JSON.stringify(body));
}
function success() {
	toast.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
	submit.disabled = false
	submit.blur()
	form.name.focus()
	form.name.value = ''
	form.email.value = ''
	form.content.value = ''
}
function error(err) {
	toast.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
	submit.disabled = false
	console.log(err)
}

form.addEventListener('submit', function (e) {
	e.preventDefault()
	toast.innerHTML = 'Sending'
	submit.disabled = true

	const payload = {
		name: form.name.value,
		email: form.email.value,
		content: form.content.value
	}
	post(url, payload, function (err, res) {
		if (err) { return error(err) }
		success()
	})
})
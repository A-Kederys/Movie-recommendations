function sendMail(params) {
	
	var tempParams = {
		from_name:document.getElementById("name").value,
		from_email:document.getElementById("email").value,
		message:document.getElementById("message").value,
	};
	
	emailjs.send('service_3pumyrv', 'template_zcwp0ok',tempParams)
	.then(function(res){
		console.log("success", res.status);
	})
}
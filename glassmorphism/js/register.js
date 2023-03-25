function validatePassword() {
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	
	if (password != confirmPassword) {
		document.getElementById("confirm-password").setCustomValidity("Passwords do not match");
	} else {
		document.getElementById("confirm-password").setCustomValidity("");
	}



}
document.getElementById("password").addEventListener("change", validatePassword);
document.getElementById("confirm-password").addEventListener("change", validatePassword);

// Function to handle form submission
// function submitbtn() {


	
// 	fetch('http://localhost/glassmorphism/php/register.php', {
// 	  method: 'POST',
// 	  body: formData,
// 	})
// 	.then(response => response.text())
// 	.then(data => {
// 	  if (data.includes('Registration Successfull')) {
// 		// Registration was successful, redirect to homepage
// 		window.location.href = '../index.html';
// 	  } else {
// 		// Registration failed, display error message
// 		const errorMessage = document.querySelector('#error-message');
// 		errorMessage.textContent = data;
// 	  }
// 	})
// 	.catch(error => {
// 	  // An error occurred during the registration process
// 	  console.error(error);
// 	  const errorMessage = document.querySelector('#error-message');
// 	  errorMessage.textContent = 'An error occurred during the registration process.';
// 	});
//   }

function submit(){
	$(document).ready(function() {
		var data = {
			name: $("#fullname").val(),
			email:$("#email").val(),
			password:$("#password").val()
		}

		console.log("data---->",data)
		$.ajax({
			url:"http://localhost:80/glassmorphism/php/register.php",
			type:"POST",
			data:data,
			succes:function(response){
				alert(response);
				if(response == "Registration Successfully"){
					// window.location.reload();
				}
			}
		})
	})
  }  

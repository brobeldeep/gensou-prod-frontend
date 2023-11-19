'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});



document.getElementById('getInTouchBtn').addEventListener('click', function() {
    // Redirect to form.html
    window.location.href = 'form.html';
});
document.getElementById('getInTouchBtn1').addEventListener('click', function() {
    // Redirect to form.html
    window.location.href = 'form.html';
});
document.getElementById('getInTouchBtn2').addEventListener('click', function() {
    // Redirect to form.html
    window.location.href = 'form.html';
});

 function submitForm() {
            // Get the email input value
            var email = document.getElementById('email').value;

            // Create a JSON object with the email
            var data = {
                email: email
            };

            // Make a POST request to your serverless function
            fetch('https://y0546fywr0.execute-api.ap-south-1.amazonaws.com/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors
            });
        }


const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const formDataObject = {};

            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            // Make an API request using fetch
            fetch('https://y0546fywr0.execute-api.ap-south-1.amazonaws.com/sendmail', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataObject),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
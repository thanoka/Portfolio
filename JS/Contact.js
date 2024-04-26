document.addEventListener('DOMContentLoaded', function() {
    var phoneNumberElement = document.getElementById('phone-number');
    var copyNotification = document.getElementById('copy-notification');

    phoneNumberElement.addEventListener('click', function() {
        var phoneNumber = phoneNumberElement.innerText.trim();
        copyToClipboard(phoneNumber);
        console.log('Phone number copied to clipboard: ' + phoneNumber);
        phoneNumberElement.classList.add('copied'); // Add class to change color
        copyNotification.style.display = 'block'; // Show notification
        setTimeout(function() {
            phoneNumberElement.classList.remove('copied'); // Remove class after 2 seconds
            copyNotification.style.display = 'none'; // Hide notification
        }, 500);
    });

    function copyToClipboard(text) {
        var dummyElement = document.createElement('textarea');
        document.body.appendChild(dummyElement);
        dummyElement.value = text;
        dummyElement.select();
        document.execCommand('copy');
        document.body.removeChild(dummyElement);
    }
});

const instagramIcon = document.querySelector(".IG");
const emailIcon = document.querySelector('.Email')
// Add a click event listener
instagramIcon.addEventListener("click", function() {
    // Your event handling code here
    // For example, you can redirect to the Instagram page
    window.location.href = "https://www.instagram.com/tn.auym/";
});
emailIcon.addEventListener("click", function() {
    // Your event handling code here
    // For example, you can redirect to the Instagram page
    window.location.href = "malto:normallifethan@gmail.com";
});
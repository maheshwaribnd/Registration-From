let globalSubmit = false
function submitForm(isSubmitted = false) {
    console.log(isSubmitted)
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let mobileNumber = document.getElementById('number').value
    let gender1 = document.getElementById('gender1').checked
    let gender2 = document.getElementById('gender2').checked
    let gender3 = document.getElementById('gender3').checked
    let country = document.getElementById('country').value
    let error = false

    if (isSubmitted) {
        globalSubmit = true
    }

    if (globalSubmit) {
        if (firstName.length >= 3) {
            document.getElementById('firstname-valid').style.display = 'block'
            document.getElementById('firstname-invalid').style.display = 'none'
        }
        else {
            document.getElementById('firstname-valid').style.display = 'none'
            document.getElementById('firstname-invalid').style.display = 'block'
            error = true
        }

        if (lastName.length >= 3) {
            document.getElementById('lastname-valid').style.display = 'block'
            document.getElementById('lastname-invalid').style.display = 'none'
        }
        else {
            document.getElementById('lastname-valid').style.display = 'none'
            document.getElementById('lastname-invalid').style.display = 'block'
            error = true
        }

        if (email != '' &&
            email.includes('@') &&
            email.includes('.') &&
            (email.length - email.lastIndexOf('.') >= 3) &&
            email.indexOf('@') != 0) {
            document.getElementById('email-valid').style.display = 'block'
            document.getElementById('email-invalid').style.display = 'none'
        }
        else {
            document.getElementById('email-valid').style.display = 'none'
            document.getElementById('email-invalid').style.display = 'block'
            error = true
        }
        
        if (mobileNumber.length == 10 && !isNaN(mobileNumber)) {
            document.getElementById('number-valid').style.display = 'block'
            document.getElementById('number-invalid').style.display = 'none'
        }
        else {
            document.getElementById('number-valid').style.display = 'none'
            document.getElementById('number-invalid').style.display = 'block'
            error = true
        }

        if (gender1 || gender2 || gender3) {
            document.getElementById('gender-invalid').style.display = 'none'
        }
        else {
            document.getElementById('gender-invalid').style.display = 'block'
            error = true
        }

        if (country) {
            document.getElementById('country-invalid').style.display = 'none'
        }
        else {
            document.getElementById('country-invalid').style.display = 'block'
            error = true
        }

        if (!error && isSubmitted) {
            alert("Your details have been saved Successfully !")
            document.getElementById('registration').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}
function submit1(form){
    let name = form.name.value
    let number = form.number.value
    let email = form.email.value
    let quali = form.quali.value
    let actualemail = /^\S+@\S+\.\S+$/
    if(name == "" || number == "" || email == "" || quali == 0){
        alert("Please enter all the credentials")
    }
    else if(number.length != 10){
        alert("Phone number has to be 10 digits long")
    }
    else if(actualemail.test(email) == false){
        alert("Enter email in proper format")
    }
    else{
        alert("Got your information! We will contact you soon!")
        form.name.value = form.number.value = form.email.value = ""
        form.quali.value = 0
    }
}
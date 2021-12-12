function submit1(form){
    let name = form.name.value
    let number = form.number.value
    if(name == "" || number == ""){
        alert("Please enter all the credentials")
    }
    else if(number.length != 10){
        alert("Phone number has to be 10 digits long")
    }
    else{
        alert("Got your information! We will contact you soon!")
        form.name.value = form.number.value = ""
    }
}
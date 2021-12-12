function submit1(form){
    let name = form.name.value
    let phone = form.phone.value
    let amount = form.amount.value
    if(name == "" || phone == "" || amount == ""){
        alert("Please enter all the credentials")
    }
    else if(phone.length != 10){
        alert("Phone number has to be 10 digits long")
    }
    else if(amount == 0){
        alert("Amount cannot be zero or less")
    }
    else{
        alert("Donation accepted!")
        form.name.value = form.phone.value = form.amount.value = ""
    }
}
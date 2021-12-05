var username;
var phoneNum;
var person;
var dob;
var time;
var coupon;

function getDOM(){
    username = document.getElementById("name").value;
    phoneNum = document.getElementById("phoneNum").value;
    person = document.getElementById("person").value;
    dob = document.getElementById("dob").value;
    time = document.getElementById("time").value;
    coupon = document.getElementById("coupon").value;
}

function validatePhone(phone) {
    for(let i = 0; i<phone.length; i++) {
        if(phone[i]<'0' || phone[i]>'9')
            return false;
    }
    return true;
}

function validate() {
    getDOM();
    if(username == "") {
        alert("Name can't be empty.");
        return false;
    }

    if(phoneNum == ""){
        alert("Phone number can't be empty.");
        return false;
    }

    if(person == ""){
        alert("Number of person can't be empty.");
        return false;
    }

    if(dob == ""){
        alert("Date of reservation can't be empty.");
        return false;
    }

    if(time == ""){
        alert("Time of reservation can't be empty.");
        return false;
    }

    if(!validatePhone(phoneNum)){
        alert("Phone number must only be numbers.");
        return false;
    }

    if(person < 1 || person > 12) {
        alert("Number of person must be between 1 and 12.");
        return false;
    }

    if(new Date(dob+" "+time).getTime() < Date.now()){
        alert("Cannot make a reservation on the past.");
        return false;
    }

    if(coupon != "" && (coupon != "2GET1AB4BA" || coupon != "FAMILYAB4BA")) {
        alert("Invalid coupon code.");
        return false;
    }

    alert("Reservation Success");

    return true;
}

var isTrue = true;
function validateForm() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const pnum = document.getElementById('pnum').value;
    const gender = document.getElementsByName('gender');
    const stret = document.getElementById('street-no').value;
    const ciVillage = document.getElementById('ci-village').value;
    const post = document.getElementById('post-code').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const region = document.getElementById('region').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;
    const checkpassbox = document.getElementById('check-pass-box').checked;

    const fnameErr = document.getElementById('fname-error');
    const lnameErr = document.getElementById('lname-error');
    const dobErr = document.getElementById('dob-error');
    const emailErr = document.getElementById('email-error');
    const pnumErr = document.getElementById('p-error');
    const genderErr = document.getElementById('gender-error');
    const streetErr = document.getElementById('street-error');
    const ciVillageErr = document.getElementById('cv-error');
    const postErr = document.getElementById('pcode-error');
    const stateErr = document.getElementById('state-error');
    const countryErr = document.getElementById('country-error');
    const regionErr = document.getElementById('region-error');
    const passErr = document.getElementById('pass-error');
    const cpassErr = document.getElementById('cpass-error');
    const checkpassErr = document.getElementById('check-pass-error');



    fnameErr.textContent = "";
    lnameErr.textContent = "";
    dobErr.textContent = "";
    emailErr.textContent = "";
    pnumErr.textContent = "";
    genderErr.textContent = "";
    streetErr.textContent = "";
    ciVillageErr.textContent = "";
    postErr.textContent = "";
    stateErr.textContent = "";
    countryErr.textContent = "";
    regionErr.textContent = "";
    passErr.textContent = "";
    cpassErr.textContent = "";
    checkpassErr.textContent = "";


    var chgender = false;
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            chgender = true;
        }
    }


    let isvalid = true;
    let issvalid = true;


    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    var emailoption = email.split('@');

    if (fname === "" || /\d/.test(fname)) {
        fnameErr.textContent = "Please enter your First name properly.";
        isvalid = false;
    }
    else if (lname === "" || /\d/.test(lname)) {
        lnameErr.textContent = "Please enter your last name properly.";
        isvalid = false;
    }
    else if (email === "") {
        emailErr.textContent = "Please enter your email";
        isvalid = false;
    }
    else if (emailoption[1] != 'gmail.com') {
        emailErr.textContent = "Please enter gmail.com properly";
        isvalid = false;
    }
    else if (dob === "") {
        dobErr.textContent = "Please Enter your Dob";
        isvalid = false;
    }
    else if (pnum.length == 0 || isNaN(pnum) || pnum.length != 10) {
        pnumErr.textContent = "Please Enter your number correctly";
        isvalid = false;
    }
    else if (!chgender) {
        genderErr.textContent = "Please choose your Gender";
        isvalid = false;
    }
    else if (stret === "") {
        streetErr.textContent = "Please Enter your street No";
        isvalid = false;
    }
    else if (ciVillage === "") {
        ciVillageErr.textContent = "Please Enter your city/village";
        isvalid = false;
    }
    else if (post === "") {
        postErr.textContent = "Please Enter your post code";
        isvalid = false;
    }
    else if (state === "") {
        stateErr.textContent = "Please Enter state ";
        isvalid = false;
    }
    else if (region === "") {
        regionErr.textContent = "Please Enter your region ";
        isvalid = false;
    }
    else if (password === "") {
        passErr.textContent = "Please Enter your password ";
        isvalid = false;
    }
    else if (!password.match(lowerCaseLetters)) {
        passErr.textContent = "You have to include a small case alphabet ";
        isvalid = false;
    }
    else if (!password.match(upperCaseLetters)) {
        passErr.textContent = "You have to include a upper case alphabet ";
        isvalid = false;
    }
    else if (!password.match(numbers)) {
        passErr.textContent = "You have to include a numbers";
        isvalid = false;
    }
    else if (password.length <= 8) {
        passErr.textContent = "Minimun length of password is 8";
        isvalid = false;
    }
    else if (confirmpassword === "") {
        cpassErr.textContent = "Please confirm your password ";
        isvalid = false;
    }
    else if (confirmpassword != password) {
        cpassErr.textContent = "Confirm your password";
        isvalid = false;
    }
    else if (!checkpassbox) {
        checkpassErr.textContent = "Please agree with the terms and conditions ";
        isvalid = false;
    }


    if (isvalid) {
        isTrue = true;
    }
    else {
        isTrue = false;
    }

    if (isvalid) {
        alert("form submitted successfully");
    }
    else {
        return false;
    }

    console.log(fname, lname, email, dob, pnum);

}

//valid Email check during onkeyUp

var letterNo = document.getElementById("letter-no");
var spSymbol = document.getElementById("sp-symbol");
var email = document.getElementById("email");

email.onfocus = function () {
    document.getElementById("message-email").style.display = "block";
}

email.onblur = function () {
    document.getElementById("message-email").style.display = "none";
}

email.onkeyup = function () {
    // Validate Number capability
    if (email.value.length <= 18 && email.value.length > 0) {
        letterNo.classList.remove("invalid");
        letterNo.classList.add("valid");
    } else {
        letterNo.classList.remove("valid");
        letterNo.classList.add("invalid");
    }

    if (email.value.includes('@gmail') && email.value.length >= 5) {
        spSymbol.classList.remove("invalid");
        spSymbol.classList.add("valid");
    }
    else {
        spSymbol.classList.remove("valid");
        spSymbol.classList.add("invalid");
    }
}


// valid phone number check during onkeyup

var phnum = document.getElementById('pnum');
var phoneno = document.getElementById('phone-no');
var charactersymbol = document.getElementById('character-symbol');
var emptys = document.getElementById('empty-s');

phnum.onfocus = function () {
    document.getElementById("phNum-sp").style.display = "block";
}

phnum.onblur = function () {
    document.getElementById("phNum-sp").style.display = "none";
}


pnum.onkeyup = function () {


    var pnumm = document.getElementById('pnum').value;
    if (phnum.value.length != 10) {
        phoneno.classList.add('invalid');
        phoneno.classList.remove('valid');
    }
    else {
        phoneno.classList.add('valid');
        phoneno.classList.remove('invalid');
    }

    //check
    if (isNaN(pnumm)) {
        charactersymbol.classList.add('invalid');
        charactersymbol.classList.remove('valid');
    }
    else {
        phoneno.classList.add('valid');
        phoneno.classList.remove('invalid');
    }

    if (!phnum.value == "") {
        emptys.classList.add('valid');
        emptys.classList.remove('invalid');
    }
    else {
        emptys.classList.add('invalid');
        emptys.classList.remove('valid');
    }

}


//show password
let input = document.getElementById("password");
let btn = document.getElementById("pass-box");

btn.addEventListener('click', function () {
    if (input.type === 'password') {
        input.type = 'text';
        btn.checked = true;
    } else {
        input.type = 'password';
        btn.checked = false;
    }
})


//check valid password
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}
myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}



//check valid email

var letterNo = document.getElementById("letter-no");
var spSymbol = document.getElementById("sp-symbol");
var email = document.getElementById("email");

email.onfocus = function () {
    document.getElementById("message-email").style.display = "block";
}

email.onblur = function () {
    document.getElementById("message-email").style.display = "none";
}

email.onkeyup = function () {
    // Validate Number capability
    if (email.value.length <= 18 && email.value.length > 0) {
        letterNo.classList.remove("invalid");
        letterNo.classList.add("valid");
    } else {
        letterNo.classList.remove("valid");
        letterNo.classList.add("invalid");
    }

    if (email.value.includes('@gmail') && email.value.length >= 5) {
        spSymbol.classList.remove("invalid");
        spSymbol.classList.add("valid");
    }
    else {
        spSymbol.classList.remove("valid");
        spSymbol.classList.add("invalid");
    }
}


//toaster
//json
//
let form = document.getElementById('formsubmission');

let table = document.getElementById('table');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit();
})

const submit = () => {


    // console.log(fname, lname, email, dob, pnum);
    let tableref = document.getElementById('table');

    var update = document.createElement('button');
    update.classList.add('green', 'btn-prop');
    update.innerHTML = "Update";
    var del = document.createElement('button');
    del.classList.add('red', 'btn-prop');
    del.innerHTML = "Delete";

    let newRow = tableref.insertRow(-1);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);
    let newCell6 = newRow.insertCell(5);
    let newCell7 = newRow.insertCell(6);

    console.log(update);
    // newCell6.appendChild('update');
    if (isTrue) {
        newCell1.innerText = fname.value;
        newCell2.innerText = lname.value;
        newCell3.innerText = email.value
        newCell4.innerText = lname.value;
        newCell5.innerText = email.value;
        newCell6.appendChild(update);
        newCell7.appendChild(del);
    }
}

function delRow(r){
  var i = r.parentNode.parentNode.rowindex;

  document.getElementById('table').deleteRow(i);
}
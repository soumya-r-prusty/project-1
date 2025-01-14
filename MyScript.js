
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
    const file = document.getElementById('file');
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
    const fileErr = document.getElementById('file-error');
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
    fileErr.textContent = "";
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


    var emailoption = email.includes('@');

    const filee = file.files[0];
    if(filee != ""){
        file.textContent = filee;
    }

    if (filee == true) {
        toaster
    }
    if (fname === "" || /\d/.test(fname)) {
        fnameErr.textContent = "Please enter your first name properly.";
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
    else if (!emailoption) {
        emailErr.textContent = "You must include '@' ";
        isvalid = false;
    }
    else if (email.length >= 30) {
        emailErr.textContent = "Your mail should be under 30 letters";
        isvalid = false;
    }
    else if (dob === "") {
        dobErr.textContent = "Please enter your Dob";
        isvalid = false;
    }
    else if (pnum.length == 0 || isNaN(pnum) || pnum.length != 10) {
        pnumErr.textContent = "Please enter your number correctly";
        isvalid = false;
    }
    else if (!chgender) {
        genderErr.textContent = "Please choose your gender";
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
    else if (country == "") {
        countryErr.textContent = "Please Enter your country ";
        isvalid = false;
    }
    else if (state === "") {
        stateErr.textContent = "Please Enter state ";
        isvalid = false;
    }
    else if (region == "") {
        regionErr.textContent = "Please Enter your region ";
        isvalid = false;
    }
    else if (!filee) {
        fileErr.textContent = "Please enter your document ";
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
    else if (password.length <= 7) {
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
        // var x = document.getElementById("snackbar");
        // x.className = "show";
        // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    else {
        return false;
    }

    // console.log(fname, lname, email, dob, pnum);

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
    console.log(email.value.length);
    if (email.value.length <= 30) {
        letterNo.classList.remove("invalid");
        letterNo.classList.add("valid");
    } else {
        letterNo.classList.remove("valid");
        letterNo.classList.add("invalid");
    }

    if (email.value.includes('@')) {
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
// var charactersymbol = document.getElementById('character-symbol');
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
    if (email.value.length <= 30 && email.value.length > 0) {
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


let form = document.getElementById('formsubmission');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit();
})

var selectRow = null;
var formData ;
const submit = () => {

    formData = readFormData();
    // console.log(formData);

    let tableref = document.getElementById('table').getElementsByTagName('tbody')[0];

    let newRow = tableref.insertRow(tableref.length);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    let newCell4 = newRow.insertCell(3);
    let newCell5 = newRow.insertCell(4);
    let newCell6 = newRow.insertCell(5);
    let newCell7 = newRow.insertCell(6);


    if (isTrue) {
        if (selectRow == null) {
            newCell1.innerText = fname.value;
            newCell2.innerText = lname.value;
            newCell3.innerText = email.value
            newCell4.innerText = dob.value;
            newCell5.innerText = pnum.value;
            newCell6.innerHTML = `<button onClick = "onEdit(this)">Update</button>`;
            newCell7.innerHTML = `<button onClick = "onDelete(this)">Delete</button>`;
            // console.log(selectRow);
            resetForm();
            
        }
        else {
            updateRecord(formData);
            console.log("I have updated");
        }
    }
}


function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById('fname').value;
    formData["lname"] = document.getElementById('lname').value;
    formData["email"] = document.getElementById('email').value;
    formData["dob"] = document.getElementById('dob').value;
    formData["pnum"] = document.getElementById('pnum').value;

    var ele = document.getElementsByName('gender');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            formData['gender'] = ele[i].value;
        }
    }

    formData["street"] = document.getElementById('street-no').value;
    formData["ciVillage"] = document.getElementById('ci-village').value;
    formData["post"] = document.getElementById('post-code').value;
    formData["country"] = document.getElementById('country').value;
    formData["state"] = document.getElementById('state').value;
    formData["region"] = document.getElementById('region').value;
    formData['file'] = document.getElementById('file').value;
    formData["password"] = document.getElementById('password');
    formData["repassword"] = document.getElementById("check-pass-box");
    // console.log(formData);
    return formData;
}

function resetForm() {
    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('pnum').value = "";
    gender = document.getElementsByName('gender');
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender[i].checked = false;
        }
    }
    document.getElementById('street-no').value = "";
    document.getElementById('ci-village').value = "";
    document.getElementById('post-code').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('region').value = "";
    document.getElementById('file').value = "";

    document.getElementById('password').value = "";
    document.getElementById('confirm-password').value = "";
    document.getElementById('check-pass-box').checked = false;
    document.getElementById('pass-box').checked = false;
    selectRow = null;

}

function onEdit(td) {
    console.log(formData);
    selectRow = td.parentElement.parentElement;
    // console.log(selectRow);/
    document.getElementById('fname').value = selectRow.cells[0].innerHTML;
    document.getElementById('lname').value = selectRow.cells[1].innerHTML;
    document.getElementById('email').value = selectRow.cells[2].innerHTML;
    document.getElementById('dob').value = selectRow.cells[3].innerHTML;
    document.getElementById('pnum').value = selectRow.cells[4].innerHTML;
    
    gender = document.getElementsByName('gender');
    for(let i=0;i<gender.length;i++){
        if(gender[i].value == formData.gender){
            gender[i].checked = true;
        }
    }
    
    document.getElementById('street-no').value = formData.street;

    document.getElementById('ci-village').value = formData.ciVillage;
    document.getElementById('post-code').value = formData.post;
    document.getElementById('state').value = formData.state;
    document.getElementById('country').value = formData.country;
    document.getElementById('region').value = formData.region;
    // document.getElementById('file').files = formData.file;
    // document.getElementById('file').files = formData.file;

    document.getElementById('submit').value = "Update";
}

function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.fname;
    selectRow.cells[1].innerHTML = formData.lname;
    selectRow.cells[2].innerHTML = formData.email;
    selectRow.cells[3].innerHTML = formData.dob;
    selectRow.cells[4].innerHTML = formData.pnum;
    document.getElementById('submit').value = "Submit";
    
    resetForm();
}

function onDelete(td) {
    if (confirm('Are your sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
        resetForm();
    }
}


// var countrystate = {
//     India: [
// "Andhra Pradesh",
// "Arunachal Pradesh",
// "Assam",
// "Bihar",
// "Chhattisgarh",
// "Goa",
// "Gujarat",
// "Haryana",
// "Himachal Pradesh",
//     ],
//     china: ["Anhui", "Fujian", "Gansu", "Jilin"]
//     ,
//     Australia: [
//         "Australian Capital Territory",
//         "New South Wales",
//         "Northern Territory",
//         "Queensland",
//         "South Australia",
//         "Tasmania",
//         "Western Australia",
//         "External Territories",],
//     USA:[
//         "Alabama","Alaska","Arizona","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana",
//     ],
//     Russia:[
//        "Bashkortostan","Irkutsk Oblast","Belgorod Oblast","Amur Oblast",
//     ]
// }

// window.onload = function(){
//     const selectCountry = document.getElementById('country');
//     const selectState = document.getElementById('state');

//     const selects = document.querySelectorAll('select');

//     selectCountry.disabled = true;
//     selectState.disabled = true;

//     selects.forEach(select => {
//         if(select.disabled = true){
//             select.style.cursor = "auto";
//         }
//     })

//     for(let country in countrystate){
//         console.log(country);
//         selectCountry.options[selectCountry.options.length] = new Option(country, country);
//     }
// }
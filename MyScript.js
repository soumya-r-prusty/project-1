

// var isTrue = true;
// function validateForm() {
//     const fname = document.getElementById('fname').value;
//     const lname = document.getElementById('lname').value;
//     const dob = document.getElementById('dob').value;
//     const email = document.getElementById('email').value;
//     const pnum = document.getElementById('pnum').value;
//     const gender = document.getElementsByName('gender');
//     const stret = document.getElementById('street-no').value;
//     const ciVillage = document.getElementById('ci-village').value;
//     const post = document.getElementById('post-code').value;
//     const state = document.getElementById('state').value;x``
//     const country = document.getElementById('country').value;
//     const region = document.getElementById('region').value;
//     const file = document.getElementById('file');
//     const password = document.getElementById('password').value;
//     const confirmpassword = document.getElementById('confirm-password').value;
//     const checkpassbox = document.getElementById('check-pass-box').checked;

//     const fnameErr = document.getElementById('fname-error');
//     const lnameErr = document.getElementById('lname-error');
//     const dobErr = document.getElementById('dob-error');
//     const emailErr = document.getElementById('email-error');
//     const pnumErr = document.getElementById('p-error');
//     const genderErr = document.getElementById('gender-error');
//     const streetErr = document.getElementById('street-error');
//     const ciVillageErr = document.getElementById('cv-error');
//     const postErr = document.getElementById('pcode-error');
//     const stateErr = document.getElementById('state-error');
//     const countryErr = document.getElementById('country-error');
//     const regionErr = document.getElementById('region-error');
//     const fileErr = document.getElementById('file-error');
//     const passErr = document.getElementById('pass-error');
//     const cpassErr = document.getElementById('cpass-error');
//     const checkpassErr = document.getElementById('check-pass-error');



//     fnameErr.textContent = "";
//     lnameErr.textContent = "";
//     dobErr.textContent = "";
//     emailErr.textContent = "";
//     pnumErr.textContent = "";
//     genderErr.textContent = "";
//     streetErr.textContent = "";
//     ciVillageErr.textContent = "";
//     postErr.textContent = "";
//     stateErr.textContent = "";
//     countryErr.textContent = "";
//     regionErr.textContent = "";
//     fileErr.textContent = "";
//     passErr.textContent = "";
//     cpassErr.textContent = "";
//     checkpassErr.textContent = "";


//     var chgender = false;
//     for (i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//             chgender = true;
//         }
//     }


//     let isvalid = true;
//     let issvalid = true;


//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;


//     var emailoption = email.includes('@');

//     const filee = file.files[0];
//     if(filee != ""){
//         file.textContent = filee;
//     }

//     if (filee == true) {
//         toaster
//     }
//     if (fname === "" || /\d/.test(fname)) {
//         fnameErr.textContent = "Please enter your first name properly.";
//         isvalid = false;
//     }
//     else if (lname === "" || /\d/.test(lname)) {
//         lnameErr.textContent = "Please enter your last name properly.";
//         isvalid = false;
//     }
//     else if (email === "") {
//         emailErr.textContent = "Please enter your email";
//         isvalid = false;
//     }
//     else if (!emailoption) {
//         emailErr.textContent = "You must include '@' ";
//         isvalid = false;
//     }
//     else if (email.length >= 30) {
//         emailErr.textContent = "Your mail should be under 30 letters";
//         isvalid = false;
//     }
//     else if (dob === "") {
//         dobErr.textContent = "Please enter your Dob";
//         isvalid = false;
//     }
//     else if (pnum.length == 0 || isNaN(pnum) || pnum.length != 10) {
//         pnumErr.textContent = "Please enter your number correctly";
//         isvalid = false;
//     }
//     else if (!chgender) {
//         genderErr.textContent = "Please choose your gender";
//         isvalid = false;
//     }
//     else if (stret === "") {
//         streetErr.textContent = "Please Enter your street No";
//         isvalid = false;
//     }
//     else if (ciVillage === "") {
//         ciVillageErr.textContent = "Please Enter your city/village";
//         isvalid = false;
//     }
//     else if (post === "") {
//         postErr.textContent = "Please Enter your post code";
//         isvalid = false;
//     }
//     else if (country == "") {
//         countryErr.textContent = "Please Enter your country ";
//         isvalid = false;
//     }
//     else if (state === "") {
//         stateErr.textContent = "Please Enter state ";
//         isvalid = false;
//     }
//     else if (region == "") {
//         regionErr.textContent = "Please Enter your region ";
//         isvalid = false;
//     }
//     else if (!filee) {
//         fileErr.textContent = "Please enter your document ";
//         isvalid = false;
//     }
//     else if (password === "") {
//         passErr.textContent = "Please Enter your password ";
//         isvalid = false;
//     }
//     else if (!password.match(lowerCaseLetters)) {
//         passErr.textContent = "You have to include a small case alphabet ";
//         isvalid = false;
//     }
//     else if (!password.match(upperCaseLetters)) {
//         passErr.textContent = "You have to include a upper case alphabet ";
//         isvalid = false;
//     }
//     else if (!password.match(numbers)) {
//         passErr.textContent = "You have to include a numbers";
//         isvalid = false;
//     }
//     else if (password.length <= 7) {
//         passErr.textContent = "Minimun length of password is 8";
//         isvalid = false;
//     }
//     else if (confirmpassword === "") {
//         cpassErr.textContent = "Please confirm your password ";
//         isvalid = false;
//     }
//     else if (confirmpassword != password) {
//         cpassErr.textContent = "Confirm your password";
//         isvalid = false;
//     }
//     else if (!checkpassbox) {
//         checkpassErr.textContent = "Please agree with the terms and conditions ";
//         isvalid = false;
//     }

//     if (isvalid) {
//         isTrue = true;
//     }
//     else {
//         isTrue = false;
//     }

//     if (isvalid) {
//         alert("form submitted successfully");
//         // var x = document.getElementById("snackbar");
//         // x.className = "show";
//         // setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//     }
//     else {
//         return false;
//     }

//     // console.log(fname, lname, email, dob, pnum);

// }


// //valid Email check during onkeyUp

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


// // valid phone number check during onkeyup

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


// //show password
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


// //check valid password
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



// //check valid email

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



const prev = document.querySelector('form .prev');

const next = document.querySelector('form .next');

const submitBtn = document.querySelector('form .submit');

const indicator = document.querySelector('.inner-line');

const indicatorItem = document.querySelectorAll('.indicator p')

const form = document.querySelector('form');

const alltab = document.querySelectorAll('form .tab');

let i = 0;

alltab[i].classList.add('show');

indicator.style.width = i;

if (i === 0) {
  prev.style.display = 'none';
} else {
  prev.style.display = 'block';
}

if (i == alltab.length - 1) {
  submitBtn.style.display = 'block';
  next.style.display = 'none';
}
else {
  submitBtn.style.display = 'none';
  next.style.display = 'block';
}


function getAllValuespTab(i) {
  const allinputs = alltab[i].querySelectorAll('input[type=text],input[type=email],input[type=number],input[type=radio],select,input[type=date],input[type=password],input[type=checkbox],input[type=file]');

  const values = {};

  allinputs.forEach(element => {
    let value;

    switch (element.type) {
      case 'checkbox':
      case 'radio':
        value = element.checked;
        break;
      case 'file':
        value = element.files[0];
        break;
      default:
        value = element.value;
    }

    values[element.id] = value;
  });

  return values;
}
function validate(validateTab) {

  let isValidTab = true;

  var numbers = /[0-9]/g;

  for (const key in validateTab) {
    // console.log(key);

    if (key === 'fname' || key === 'lname') {
      if (validateTab[key].match(numbers)) {
        setError(key, 'numbers are not allowed');
        isValidTab = false;
        return false;
      }
    }
    if (key === 'email' && validateTab[key].length != 0) {
      if (validateTab[key].length > 30) {
        setError(key, 'length must not exceed 30');
        isValidTab = false;
        return false;
      }
      else if (!validateTab[key].includes('@')) {
        setError(key, 'must include @');
        isValidTab = false;
        return false;
      }
    }

    if (key === 'pnum') {
      if (validateTab[key].length != 0) {
        if (validateTab[key].length != 10) {
          setError(key, 'You can enter 10 numbers');
          isValidTab = false;
          return false;
        }
        else if (!validateTab[key].match(numbers)) {
          setError(key, 'only numbers are allowed');
          console.log("Typed");
          isValidTab = false;
          return false;
        }
      }
      console.log("Typed");
    }
    console.log("Typed");
  }

  for (const key in validateTab) {
    console.log(key);
    if (validateTab[key] === "") {
      setError(key, key + " is required");
      isValidTab = false;
      return false;
    } else {
      setSuccess(key);
    }
  }




  return isValidTab;
}



const setError = (element, message) => {
  const inputctrlid = document.getElementById(element);

  const inputctrl = inputctrlid.parentElement;
  const errorDisplay = inputctrl.querySelector('.error');

  errorDisplay.innerText = message;
  setTimeout(function () {
    errorDisplay.innerText = "";
  }, 3000);
  // console.log(errorDisplay);
  inputctrl.classList.add('error');
  inputctrl.classList.remove('success');

}

const setSuccess = (element) => {
  const inputctrlid = document.getElementById(element);

  const inputctrl = inputctrlid.parentElement;

  const errorDisplay = inputctrl.querySelector('.error');

  // console.log(errorDisplay);

  inputctrl.classList.add('success');
  inputctrl.classList.remove('error');
}



function toFTab() {
  i = 0;

  for (let j = 0; j < alltab.length; j++) {
    alltab[j].classList.remove('show');
    indicatorItem[j].classList.remove('active');
  }

  alltab[i].classList.add('show');
  indicator.style.width = `${i * 50}%`;
  indicatorItem[i].classList.add('active');

  prev.style.display = 'none';
  submitBtn.style.display = 'none';
  next.style.display = 'block';

}

next.addEventListener('click', function () {

  let alValues = getAllValuespTab(i);

  console.log(alValues);

  let validateTab = validate(alValues);

  const allInputFields = alltab[i].querySelectorAll('input, select, radio');

  for (j = 0; j < allInputFields.length; j++) {
    if (allInputFields[j].value === "") {
      allInputFields[j].style.borderColor = 'red';
      setTimeout(function () {
        allInputFields[j].style.borderColor = 'lightblue';
      }, 3000);
      return false;
    }
    else {
      allInputFields[j].style.borderColor = 'lightblue';
    }
  }





  i += 1;

  if (i >= alltab.length) {
    i = alltab.length - 1;
  }
  else {
    for (let j = 0; j < alltab.length; j++) {
      alltab[j].classList.remove('show');
      indicatorItem[j].classList.remove('active');
    }

    for (let j = 0; j < i; j++) {
      indicatorItem[j].classList.add('active');
    }

    alltab[i].classList.add('show');
    indicator.style.width = `${i * 50}%`;
    indicatorItem[i].classList.add('active');

    if (i == alltab.length - 1) {
      submitBtn.style.display = 'block';
      next.style.display = 'none';
    }
    else {
      submitBtn.style.display = 'none';
      next.style.display = 'block';
    }
  }

  if (i === 0) {
    prev.style.display = 'none';
    console.log(i);
  } else {
    prev.style.display = 'block';
  }

  console.log(i);

});

prev.addEventListener('click', function () {
  i -= 1;
  if (i < 0) {

  } else {

    for (let j = 0; j < alltab.length; j++) {
      alltab[j].classList.remove('show');
      indicatorItem[j].classList.remove('active');
    }

    for (let j = 0; j < i; j++) {
      indicatorItem[j].classList.add('active');
    }

    alltab[i].classList.add('show');
    indicator.style.width = `${i * 50}%`;
    indicatorItem[i].classList.add('active');

    if (i == alltab.length - 1) {
      next.textContent = "submit";
    }
    else {
      next.textContent = "Next";
    }


  }

  if (i == alltab.length - 1) {
    submitBtn.style.display = 'block';
    next.style.display = 'none';
  }
  else {
    submitBtn.style.display = 'none';
    next.style.display = 'block';
  }


  if (i === 0) {
    prev.style.display = 'none';
    console.log(i);
  } else {
    prev.style.display = 'block';
  }

  console.log(i);
})


// to read form Data on whole

function readFormData() {
  var formData = {};
  formData["fname"] = document.getElementById('fname').value;
  formData["lname"] = document.getElementById('lname').value;
  formData["email"] = document.getElementById('email').value;
  formData["dob"] = document.getElementById('dob').value;
  formData["pnum"] = document.getElementById('pnum').value;

  ele = document.getElementsByName('gender');
  genderVal = "";
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      genderVal = ele[i].value;
    }
  }

  formData['gender'] = genderVal;
  formData["street"] = document.getElementById('street-no').value;
  formData["ciVillage"] = document.getElementById('ci-village').value;
  formData["post"] = document.getElementById('post-code').value;
  formData["country"] = document.getElementById('country').value;
  formData["state"] = document.getElementById('state').value;
  formData["region"] = document.getElementById('region').value;
  formData["password"] = document.getElementById('password').value
  formData["repassword"] = document.getElementById("confirm-password").value;
  return formData;
}


//reset form Data
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

  document.getElementById('password').value = true;
  document.getElementById('password').value = '';
  document.getElementById('confirm-password').value = "";
  document.getElementById('check-pass-box').checked = false;
  document.getElementById('pass-box').disabled = false;
  document.getElementById('pass-box').checked = false;
  selectRow = null;

  toFTab();
}

//onEdit

function onEdit(td) {
  console.log(formData);
  selectRow = td.parentElement.parentElement;

  document.getElementById('fname').value = selectRow.cells[0].innerHTML;
  document.getElementById('lname').value = selectRow.cells[1].innerHTML;
  document.getElementById('email').value = selectRow.cells[2].innerHTML;
  document.getElementById('dob').value = selectRow.cells[3].innerHTML;
  document.getElementById('pnum').value = selectRow.cells[4].innerHTML;

  document.getElementById('street-no').value = formData.street;

  document.getElementById('ci-village').value = formData.ciVillage;
  document.getElementById('post-code').value = formData.post;
  document.getElementById('state').value = formData.state;
  document.getElementById('country').value = formData.country;
  document.getElementById('region').value = formData.region;


  submitBtn.textContent = "Update";
  console.log(submitBtn.textContent);

}

//update Record

function updateRecord(formData) {
  selectRow.cells[0].innerHTML = formData.fname;
  selectRow.cells[1].innerHTML = formData.lname;
  selectRow.cells[2].innerHTML = formData.email;
  selectRow.cells[3].innerHTML = formData.dob;
  selectRow.cells[4].innerHTML = formData.pnum;

  submitBtn.textContent = "Submit";


  resetForm();
}

//onDelete
function onDelete(td) {
  if (confirm('Are your sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById('table').deleteRow(row.rowIndex);
    resetForm();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submit();
})

let isvalid = true;
function passField() {
  let password = document.getElementById('password');
  let passErrorr = document.getElementById('pass-error');

  const confirmpassword = document.getElementById('confirm-password').value;
  const cpassError = document.getElementById('cpass-error');

  const checkpassbox = document.getElementById('check-pass-box').checked;

  const checkboxErr = document.getElementById('check-pass-error');


  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  let isTrue = true;
  if (password.value === "") {
    passErrorr.innerText = "field is required";
    setTimeout(function () {
      passErrorr.innerText = "";
    }, (3000));
    isTrue = false;
  }
  else if (!password.value.match(lowerCaseLetters)) {
    {
      passErrorr.innerText = "Include one lowercase";
      setTimeout(function () {
        passErrorr.innerText = "";
      }, (3000));
      isTrue = false;
    }
  }
  else if (!password.value.match(upperCaseLetters)) {
    passErrorr.innerText = "Include one uppercase";
    setTimeout(function () {
      passErrorr.innerText = "";
    }, (3000));
    isTrue = false;
  }
  else if (!password.value.match(numbers)) {
    passErrorr.innerText = "Include one number";
    setTimeout(function () {
      passErrorr.innerText = "";
    }, (3000));
    isTrue = false;
  }
  else if (password.value.length <= 7) {
    passErrorr.innerText = "Minimun length of password is 8";
    setTimeout(function () {
      passErrorr.innerText = "";
    }, (3000));
    isTrue = false;
  }
  else if (confirmpassword == "") {
    cpassError.innerText = "Confirm your password";
    setTimeout(function () {
      cpassError.innerText = "";
    }, (3000));
    isTrue = false;
  }
  else if (confirmpassword != password.value) {
    cpassError.innerText = "Please confirm Your password";
    setTimeout(function () {
      cpassError.innerText = "";
    }, (3000));

    console.log(confirmpassword.value, '', password.value);
    isTrue = false;

  }
  else if (!checkpassbox) {
    checkboxErr.innerText = "Please confirm Your password";
    setTimeout(function () {
      checkboxErr.innerText = "";
    }, (3000));
    isTrue = false;
  }
  if (isTrue) {
    isvalid = true;
  } else {
    isvalid = false;
  }

  if (isTrue) {
    alert('form submitted successfully');

  }
  else {
    return false;
  }

}


var selectRow = null;
const submit = () => {

  if (i >= alltab.length) {
    i = alltab.length - 1;
  }
  console.log(i);
  let alValues = getAllValuespTab(i);

  console.log(alValues);


  let istrue = false;
  if (passField == true) {
    istrue = true;
  }
  else {
    istrue = false;
  }

  formData = readFormData();

  let tableref = document.getElementById('table').getElementsByTagName('tbody')[0];

  let newRow = tableref.insertRow(tableref.length);

  console.log(istrue, '', selectRow);
  if (isvalid) {
    console.log("selected");
    if (selectRow == null) {
      let newCell1 = newRow.insertCell(0);
      let newCell2 = newRow.insertCell(1);
      let newCell3 = newRow.insertCell(2);
      let newCell4 = newRow.insertCell(3);
      let newCell5 = newRow.insertCell(4);
      let newCell6 = newRow.insertCell(5);
      let newCell7 = newRow.insertCell(6);

      newCell1.innerText = formData.fname;
      newCell2.innerText = lname.value;
      newCell3.innerText = email.value
      newCell4.innerText = dob.value;
      newCell5.innerText = pnum.value;
      newCell6.innerHTML = `<button onClick = "onEdit(this)">Update</button>`;
      newCell7.innerHTML = `<button onClick = "onDelete(this)">Delete</button>`;
      resetForm();
    }
    else {
      updateRecord(formData);


    }
  }
}


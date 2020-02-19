function subForm() {
    var namevalue = document.getElementById('nameinput').value;
    nameexp = /[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12}/g;
    let namereg = nameexp.test(namevalue);
    if (namereg) {
        
    } else {
        alert('Sorry, fill the blanks correctly.');
        return false;
    }console.log(namevalue);

    var surnamevalue = document.getElementById('surnameinput').value;
    surnameexp = /[A-ZČĆŽŠĐ][a-zčćžšđ]{2,12}/g;
    let surnamereg = surnameexp.test(surnamevalue);
    if (surnamereg) {
        
    } else {
        alert('Sorry, fill the blanks correctly.');
        return false;
    }console.log(surnamevalue);

    var numbervalue = document.getElementById('numberinput').value;
    numberexp = /\d{3}\/((\d{7})|(\d{3}\-\d{4})|(\d{4}\-\d{3}))/g;
    let numberreg = numberexp.test(numbervalue);
    if (numberreg) {
        
    } else {
        alert('Sorry, fill the blanks correctly.');
        return false;
    }console.log(numbervalue);
    
    var emailvalue = document.getElementById('emailinput').value;
    emailexp = /(\w+[\.]*[\-]*)+[@]\w{5}[\.](\w{2,4})([\.]\w{2,4})?/g;
    let emailreg = emailexp.test(emailvalue);
    if (emailreg) {
        
    } else {
        alert('Sorry, fill the blanks correctly.');
        return false;
    }console.log(emailvalue);

    var messagevalue = document.getElementById('messageinput').value;
    messageexp = /\w/g;
    let messagereg = messageexp.test(messagevalue);
    if (messagereg) {
        
    } else {
        alert('Sorry, fill the blanks correctly.');
        return false;
    }console.log(messagevalue);
    console.log(messagereg);

    alert('Thanks for submitting ' + namevalue + '!');
}
var submit = document.getElementById('submit');
submit.addEventListener('click', subForm);


function IsEmpty(ElemName) {
    //  alert(ElemName);
    //aTextField = document.getElementById(ElemName);
    //if (aTextField.value.length == 0 || aTextField.value == null) {
    //    return true;
    //}
    //else { return false; }


    var textBox = $.trim($(ElemName).val())
    if (textBox == "") {
        return true;
    }
    else {
        return false;
    }


}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

function setElementDisabled(element) {
    $('body').on('click', element, function () {
        e.preventDefault();
        $(this).prop('disabled', true); //disable further clicks
        return false;
    });
}

function unsetDisabledElement(element) {
    $(element).prop('disabled', false); // re-enable the button once ajax is finished
}

function setModalElementDisabled(element) {
    $(element).attr('disabled', true);
}


function unsetModalDisabledElement(element) {
    $(element).attr('disabled', false); // re-enable the button once ajax is finished
}
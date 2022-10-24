
let dataOrderForm = {
    systemType: '',
    userEmail: '',
    userName: '',
    rangeVal: '',
    file: ''
};
const form = document.forms.orderForm;

 // TODO: range value processing
let elem = document.querySelector('input[type="range"]');

let rangeValue = function () {
    let newValue = elem.value;
    let target = document.querySelector('.range-info__value');
    target.innerHTML = newValue + ' %';
}

elem.addEventListener("input", rangeValue);


 // TODO: submitting form data
function onSubmit() {
    dataOrderForm.systemType = form.elements.systemType.value;
    dataOrderForm.userEmail = form.elements.userEmail.value;
    dataOrderForm.userName = form.elements.userName.value;
    dataOrderForm.rangeVal = elem.value.replace(' %','');
    dataOrderForm.file = form.elements.file.value;

    console.log('dataOrderForm', dataOrderForm);
}



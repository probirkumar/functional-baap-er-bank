function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
};

function getTextElementValueById(elementId) {
    const textelement = document.getElementById(elementId);
    const textelementValueString = textelement.innerText;
    const textelementValue = parseFloat(textelementValueString);
    return textelementValue;
};

function setTextElementValueById(elementId, newValue) {
    const textelement = document.getElementById(elementId);
    textelement.innerText = newValue;
};
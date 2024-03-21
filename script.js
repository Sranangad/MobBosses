// Define the showBox function
function showInfoBox() {
    $('.info-window').toggleClass('hidden');
}

// Attach click event listeners to info buttons and windows
$('.info-button').click(showInfoBox);
$('.info-window').click(showInfoBox);

function showDisclaimerBox() {
    $('.disclaimer-window').toggleClass('hidden');
}

// Attach click event listeners to info buttons and windows
$('.disclaimer-button').click(showDisclaimerBox);
$('.disclaimer-window').click(showDisclaimerBox);

function showListBox() {
    $('.list-window').toggleClass('hidden');
}

// Attach click event listeners to info buttons and windows
$('.list-button').click(showListBox);
$('.list-window').click(showListBox);


document.addEventListener("DOMContentLoaded", function () {
    // Other initialization code for registration forms
});

function startEmployeeRegistration() {
    // ... (existing code)
}

function startCompanyRegistration() {
    // ... (existing code)
}

function startCustomerRegistration() {
    // ... (existing code)
}

function login(userType) {
    // Get the selected registration form based on the userType
    var registrationForm;
    switch (userType) {
        case 'employee':
            registrationForm = document.getElementById('employeeRegistrationForm');
            break;
        case 'company':
            registrationForm = document.getElementById('companyRegistrationForm');
            break;
        case 'customer':
            registrationForm = document.getElementById('customerRegistrationForm');
            break;
        default:
            alert('WRONG SELECTED BUTTON, PLEASE SELECT PROPER BUTTON');
            return;
    }

    // Perform login logic
    // For now, let's just display an alert indicating the successful login
    alert(userType + ' login successful!');
}
ocument.addEventListener("DOMContentLoaded", function () {
    // Populate email dropdown for employee
    var employeeEmailDropdown = document.getElementById("employeeEmail");
    var employeeEmailOptions = ["employee1@example.com", "employee2@example.com", "employee3@example.com"];
    employeeEmailOptions.forEach(function (email) {
        var option = document.createElement("option");
        option.value = email;
        option.text = email;
        employeeEmailDropdown.appendChild(option);
    });

    // Populate job dropdown
    var jobDropdown = document.getElementById("job");
    var jobOptions = ["Developer", "Designer", "Manager"];
    jobOptions.forEach(function (job) {
        var option = document.createElement("option");
        option.value = job;
        option.text = job;
        jobDropdown.appendChild(option);
    });

    // Enable the registration button when both dropdowns are filled
    document.getElementById("employeeEmail").addEventListener("change", enableRegisterEmployeeButton);
    document.getElementById("job").addEventListener("change", enableRegisterEmployeeButton);

    function enableRegisterEmployeeButton() {
        var emailValue = document.getElementById("employeeEmail").value;
        var jobValue = document.getElementById("job").value;
        var registerButton = document.getElementById("registerEmployeeButton");
        registerButton.disabled = !(emailValue && jobValue);
    }
});

function registerEmployee() {
    // Get values from the employee registration form
    var employeeName = document.getElementById('employeeName').value;
    var employeeEmail = document.getElementById('employeeEmail').value;
    var job = document.getElementById('job').value;

    // Perform validation (you may need more complex validation logic)
    if (localStorage.getItem(employeeName)) {
        var registeredJob = localStorage.getItem(employeeName);
        if (registeredJob !== job) {
            alert('Please use the correct registered job.');
        } else {
            alert('Employee already registered with the same job.');
        }
    } else {
        // Store the registration information in localStorage
        localStorage.setItem(employeeName, job);
        alert('Employee registration successful!');
    }
}

function startEmployeeRegistration() {
    // Hide the other registration forms
    document.getElementById("companyRegistrationForm").style.display = "none";
    document.getElementById("customerRegistrationForm").style.display = "none";

    // Show the employee registration form
    document.getElementById("employeeRegistrationForm").style.display = "block";

    // Disable the other registration buttons
    document.getElementById("registerCompanyButton").disabled = false;
    document.getElementById("registerCustomerButton").disabled = false;
    document.getElementById("registerEmployeeButton").disabled = true;
}

function startCompanyRegistration() {
    // Hide the other registration forms
    document.getElementById("employeeRegistrationForm").style.display = "none";
    document.getElementById("customerRegistrationForm").style.display = "none";

    // Show the company registration form
    document.getElementById("companyRegistrationForm").style.display = "block";

    // Disable the other registration buttons
    document.getElementById("registerEmployeeButton").disabled = false;
    document.getElementById("registerCustomerButton").disabled = false;
    document.getElementById("registerCompanyButton").disabled = true;
}

function startCustomerRegistration() {
    // Hide the other registration forms
    document.getElementById("employeeRegistrationForm").style.display = "none";
    document.getElementById("companyRegistrationForm").style.display = "none";

    // Show the customer registration form
    document.getElementById("customerRegistrationForm").style.display = "block";

    // Disable the other registration buttons
    document.getElementById("registerEmployeeButton").disabled = false;
    document.getElementById("registerCompanyButton").disabled = false;
    document.getElementById("registerCustomerButton").disabled = true;
}

function registerCompany() {
    // Get values from the company registration form
    var companyName = document.getElementById('companyName').value;
    var companyCode = document.getElementById('companyCode').value;
    var companyPhone = document.getElementById('companyPhone').value;

    // Perform validation (you may need more complex validation logic)
    if (!/^S|M|L/.test(companyCode)) {
        alert('Company code must start with "S", "M", or "L".');
    } else {
        // Perform company registration logic (you can customize this part)
        alert('Company registration successful!');
    }
}

function registerCustomer() {
    // Get values from the customer registration form
    var customerName = document.getElementById('customerName').value;
    var customerPhone = document.getElementById('customerPhone').value;
}  
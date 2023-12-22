/ customerRegistration.test.js

document.body.innerHTML = `
  <div>
    <!-- your HTML structure here -->
  </div>
`;

const { registerCustomer, startCustomerRegistration } = require('./script');

test('registerCustomer function works', () => {
  // Mock DOM elements
  document.getElementById = jest.fn(() => ({ value: 'mockValue' }));
  alert = jest.fn();

  // Call the function
  registerCustomer();

  // Assert on the results
  // Add your assertions based on the expected behavior of registerCustomer
});

test('startCustomerRegistration function works', () => {
  // Mock DOM elements
  document.getElementById = jest.fn(() => ({ style: { display: 'none' } }));
  alert = jest.fn();

  // Call the function
  startCustomerRegistration();

  // Assert on the results
  // Add your assertions based on the expected behavior of startCustomerRegistration
});
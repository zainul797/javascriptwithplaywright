import { Given,When,Then } from "@cucumber/cucumber";

Given('the user is on the login page', function () {
  console.log("User is on login page");
});

When('the user enters valid credentials', function () {
  console.log("User enters valid credentials");
});

When('clicks the login button', function () {
  console.log("User clicks login button");
});

Then('the user should be redirected to the saucedemo inventory page', function () {
  console.log("User is redirected to the saucedemo inventory page");
});

When('the user enters invalid credentials', function () {
  console.log("User enters invalid credentials");
});

Then('an error message should be displayed', function () {
  console.log("Error message is displayed");
});
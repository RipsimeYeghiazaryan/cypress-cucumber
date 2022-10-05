const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const logInPage = require("../../pages/LoginPage");

Given('Open the page', () => {
    cy.visit('/');
    (logInPage.elements.userEmail()).should('be.visible');
});

Then(/^Fill the email field with "(.*)" email$/, (userEmail) => {
    logInPage.typeUserEmail(userEmail);
    (logInPage.elements.userEmail()).should('have.value', userEmail);
});

Then('Click on Forgot password link', () => {
    logInPage.clickForgotPassword();
    (logInPage.elements.resetPopup()).should('be.visible');
});

Then(/^Check reset password popup opened$/, () => {
    (logInPage.elements.resetPopup()).should('be.visible');
});

Then(/^Fill the reset email field with "(.*)" email$/, (userEmail) => {
    logInPage.typeResetEmail(userEmail);
    (logInPage.elements.resetEmailInput()).should('have.value', userEmail);
});

Then(/^Click Reset password button$/, () => {
    logInPage.clickResetPassword();
    (logInPage.elements.resetPopup()).should('be.visible');
});

Then(/^Check the message$/, () => {
    (logInPage.elements.popupMessage()).should('have.text', 'Please check your email inbox and click url to reset your password');
});

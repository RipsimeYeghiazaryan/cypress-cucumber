class homePage {
    elements = {
        userEmail: () => cy.get("#email_sign_in"),
        forgotPasswordLink: () => cy.get(".forgot-pass__link"),
        resetPopup: () => cy.get('.reset-password'),
        resetEmailInput: () => cy.get('#reset-password-email'),
        resetPasswordBtn: () => cy.get('.button'),
        popupMessage: () => cy.get('p'),
    };

    typeUserEmail(username) {
        this.elements.userEmail().type(username);
    };

    clickForgotPassword() {
        this.elements.forgotPasswordLink().click();
    };

    clickResetPassword() {
        this.elements.resetPasswordBtn().click();
    };

    typeResetEmail(username) {
        this.elements.resetEmailInput().type(username)
    };

}

module.exports = new homePage();

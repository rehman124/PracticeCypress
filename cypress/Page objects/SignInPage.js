class SignInPage{
 
    get email() { return cy.get("[name='username']"); }
    get password() { return cy.get("[name='password']"); }
    get continueButton() { return cy.get('#continue'); }
    get signInButton() { return cy.get("[type='submit']"); }
    // get errorMessage() { return cy.get('#auth-error-message-box').children().children(); }
 
    credentialsInput(email,password) {
        this.email
            .clear()
            .type(email);
        this.password
            .clear()
            .type(password);
    }

    clickSignInButton() {
        this.signInButton.click();
    }
}

module.exports = new SignInPage();
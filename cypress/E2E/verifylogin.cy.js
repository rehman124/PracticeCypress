import SignInPage from '../page-objects/SignInPage';

describe('Verify Login page', () => {
 
    beforeEach(() => {
        cy.visit('https://events.staging.festivalist.com/');
    });

    after(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
      });

    it('Verify login with invalid password', () => {
        SignInPage.credentialsInput('umair@gmail.com', '123456');
        SignInPage.clickSignInButton(); 
        cy.contains('Password must contain 1 spacial letter,1 number,1 capital and 1 lowercase letter').should('be.visible')
    })

    it('Verify login with invalid email', () => {
        SignInPage.credentialsInput('umair@gmailacom', '123456A@');
        SignInPage.clickSignInButton();
        cy.contains('Please enter valid email address').should('be.visible')
    })
    it('Verify login with valid email & Password', () => {
        SignInPage.credentialsInput('Itsumairiftikhar@gmail.in', 'C@rnivalist123');
        SignInPage.clickSignInButton();
        cy.contains('Live Events').should('be.visible')
    })

});
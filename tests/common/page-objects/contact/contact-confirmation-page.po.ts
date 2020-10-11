class ContactConfirmationPage {
    
    public get confirmationMsg(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.content');
    }

}

export default new ContactConfirmationPage();
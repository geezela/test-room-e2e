class LeftLinkMenu {

    private get adoptionLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#adoption_link');
    }

    private get contactLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#contact_link');
    }

    public clickAdoptionLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.adoptionLink.click();
    }

    public clickContactLink(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.contactLink.click();
    }

}

export default new LeftLinkMenu();
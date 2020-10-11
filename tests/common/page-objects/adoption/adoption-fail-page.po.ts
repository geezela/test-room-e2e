class AdoptionFail {
    
    public get result(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#result');
    }
    
}

export default new AdoptionFail();
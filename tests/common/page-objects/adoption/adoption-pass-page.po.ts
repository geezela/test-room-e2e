class AdoptionPass {
   
    private get enterNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[name="name_field"]');
    }

    private get enterAddressField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[name="address_field"]');
    }

    private get enterPostcodeField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[name="postcode_field"]');
    }

    private get enterEmailField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[name="email_field"]');
    }
  
    private get submitAdoptionBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#submit_adoption');
    }

    public get result(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#result');
    }

    public get confirmationMsg(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.content');
    }

    public typeName(name:string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.enterNameField.type(name);
    }

    public typeAddress(address:string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.enterAddressField.type(address);
    }

    public typePostcode(postcode:string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.enterPostcodeField.type(postcode);
    }

    public typeEmail(email:string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.enterEmailField.type(email);
    }

    public clickSubmitAdoptionBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.submitAdoptionBtn.click();
    }
    
 }

export default new AdoptionPass();
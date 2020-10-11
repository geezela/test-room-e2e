class ContactPage {
    private get enterNameField(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[name="name_field"]');
    }

    private get informationRadioBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#rinfo');
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
  
    private get sendBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#submit_message');
    }

    public typeName(name:string): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.enterNameField.type(name);
    }

    public clickInformationRadioBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.informationRadioBtn.click();
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

    public clickSendBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.sendBtn.click();
    }
}

export default new ContactPage();
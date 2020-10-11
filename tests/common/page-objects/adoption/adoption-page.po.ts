class AdoptionPage {
    
    private get startDateAdoptionDropdown(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#start_select');
    }

    private get checkBtn1(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#check_btn_01');
    }

    private get checkBtn2(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#check_btn_02');
    }

    public selectFirstDayOfTheNextWeekStartDateAdoption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.startDateAdoptionDropdown.select('First day of the next week');
    }

    public selectTodayStartDateAdoption(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.startDateAdoptionDropdown.select('Today');
    }

    public clickCheckBtn1(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.checkBtn1.click();
    }

    public clickCheckBtn2(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.checkBtn2.click();
    }
    
}

export default new AdoptionPage();
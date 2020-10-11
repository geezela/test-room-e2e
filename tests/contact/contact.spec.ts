import contactConfirmationPage from '../common/page-objects/contact/contact-confirmation-page.po';
import contactPage from '../common/page-objects/contact/contact-page.po';
import leftLinkMenu from '../common/page-objects/left-link.po';

describe('Contact tests suite', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  const dateNow: number = Date.now();
  const name = `E2E Name ${dateNow}`;
  const address = 'E2E address';
  const postcode = 'E2E 0011';
  const email = `E2E ${dateNow}@test.com`;


    beforeEach(() => {
        cy.visit('/');
      })
    it('Contact form sent', () => {
    leftLinkMenu.clickContactLink();
    contactPage.typeName(name);
    contactPage.clickInformationRadioBtn();
    contactPage.typeAddress(address);
    contactPage.typePostcode(postcode);
    contactPage.typeEmail(email);
    contactPage.clickSendBtn();
    contactConfirmationPage.confirmationMsg.should('contain.text','We have your message');

    })   
    
})
import adoptionFail from '../common/page-objects/adoption/adoption-fail-page.po';
import adoptionPage from '../common/page-objects/adoption/adoption-page.po';
import adoptionPassPage from '../common/page-objects/adoption/adoption-pass-page.po';
import leftLinkMenu from '../common/page-objects/left-link.po';

describe('Adoption tests suite', () => {
  const dateNow: number = Date.now();
  const name = `E2E Name ${dateNow}`;
  const address = 'E2E address';
  const postcode = 'E2E 0011';
  const email = `E2E ${dateNow}@test.com`;

    beforeEach(() => {
        cy.visit('/');
      })
    it('Test if adoption failed', () => {
    leftLinkMenu.clickAdoptionLink();
    adoptionPage.selectTodayStartDateAdoption();
    adoptionPage.clickCheckBtn1();
    adoptionFail.result.should('contain.text','SORRY, ANIMAL NOT AVAILABLE');
    })   

    it('Test if adoption passed', () => {
      leftLinkMenu.clickAdoptionLink();
      adoptionPage.selectFirstDayOfTheNextWeekStartDateAdoption();
      adoptionPage.clickCheckBtn2();
      adoptionPassPage.result.should('contain.text','CONGRATULATIONS, ANIMAL AVAILABLE');
      adoptionPassPage.typeName(name);
      adoptionPassPage.typeAddress(address);
      adoptionPassPage.typePostcode(postcode);
      adoptionPassPage.typeEmail(email);
      adoptionPassPage.clickSubmitAdoptionBtn();
      adoptionPassPage.confirmationMsg.should('contain.text','YOUR ADOPTION HAS BEEN SET UP');
      
    })  
    
})
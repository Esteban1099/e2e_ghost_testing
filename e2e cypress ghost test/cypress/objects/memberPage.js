import { Utility } from '../objects/utility';
const utility = new Utility();

export class MemberPage {

    constructor() {
    }

    activateSectionMembers(){
        utility.clickInOptionAction('.gh-setting-action');
    }

    activateOptionMembers(){
        utility.activateCheckBox();
    }

    save(){
        utility.clickButtonSave('button.gh-btn')
    }

    fillForm(selector, value){
        utility.enterInputInForm(selector, value);
    }

    findInList(selectorSection, selectorFind, dataFakerFind) {
        utility.findInListSection(selectorSection, selectorFind, dataFakerFind);
    }

    findInList(selectorSection, selectorFind, dataFakerFind) {
        utility.findInListSection(selectorSection, selectorFind, dataFakerFind);
    }
    
    validateErrorMessage(selector) {
        cy.get(selector).then((section) => {
            if (section.length > 0) {
                var errorMessageEmail = section.get(1);
                if (!Cypress.dom.isHidden(errorMessageEmail)) {
                    cy.wrap(true);
                } else {
                    return false;
                }
            }
        });
    }
    
}
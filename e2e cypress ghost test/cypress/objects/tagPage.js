import { Utility } from '../objects/utility';
const utility = new Utility();
import { HomePage } from '../objects/homePage';
const homePage = new HomePage();

export class TagPage {

    constructor() {
    }

    createTag(tagName, tagDescription) {
        this.optionTypeTag('div.gh-contentfilter', true)
        cy.wait(1000);
        homePage.navigateModule('tags/new')
        cy.wait(1000);
        utility.enterInputInForm('input[id="tag-name"]', `${tagName}`)
        cy.wait(500);
        utility.enterInputInForm('textarea[id="tag-description"]', tagDescription)
        cy.wait(1000);
        utility.clickButtonSave('button.gh-btn')
    }

    optionTypeTag(selector, flag) {

        cy.get(selector).then(($inputs) => {
            var button = $inputs.get(0).querySelectorAll('button');
            if (flag) {
                cy.wrap(button[0]).click({ force: true });
            } else {
                cy.wrap(button[1]).click({ force: true });
            }
        });
    }

    fillForm(selector, value){
        utility.enterInputInForm(selector, value);
    }

    save(){
        utility.clickButtonSave('button.gh-btn')
    }

    findInList(selectorSection, selectorFind, dataFakerFind) {
        utility.findInListSection(selectorSection, selectorFind, dataFakerFind);
    }

    findNotInList(selectorSection, selectorFind, dataFakerFind){
        utility.findInListSectionDeleted(selectorSection, selectorFind, dataFakerFind);
    }

    deleteTag(){
        utility.clickButtonDelete('button.gh-btn-red', false)
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-red', true)
    }

}
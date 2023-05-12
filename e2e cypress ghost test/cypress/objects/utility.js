export class Utility {

    constructor() {
    }

    takeScreenShot( folderName, screenShotName){
        cy.screenshot('../' +  folderName + '/' + screenShotName, { overwrite: true });
    }

    enterInputInForm(selector, value) {
        cy.get(selector).then(($inputs) => {
            cy.get(selector).invoke('val', '');
            cy.wrap($inputs.get(0)).type(value, { force: true });
            this.outfocus();
        });
    }

    outfocus() {
        cy.get('body.ember-application').then($links => {
            cy.wrap($links.get(0)).click({ force: true });
        });
    }

    clickInOptionAction(option) {
        cy.get(option).then($links => {
            cy.wrap($links.get(0)).click({ force: true });
        });
    }

    clickButtonSave(selector) {
        cy.get(selector).then(($buttons) => {
            cy.wrap($buttons.get(0)).click({ force: true });
        });
    }

    clickButtonDelete(selector, modal) {
        cy.get(selector).then(($buttons) => {
            if (modal) {
                var randomButton = $buttons.get(1);
                cy.get('section.modal-content').should('be.visible')
                cy.get(randomButton).eq(0).click({ force: true })
            } else {
                var randomButton = $buttons.get(0);
                cy.wrap(randomButton).click({ force: true });
            }
        });
    }

    activateCheckBox() {
        cy.get('input[type="checkbox"]').check({ force: true })
    }

    findInListSection(selectorSection, selectorFind, dataFakerFind) {
        let aux = "";
        let auxTag = "";
        cy.document().then((doc) => {
            let section = doc.querySelectorAll(selectorSection);
            if (section.length > 0) {
                var ol = section[0];
                var li = ol.querySelectorAll('li');
                if (li.length > 0) {
                    cy.document().then((doc) => {
                        let element = doc.querySelectorAll(selectorFind);
                        if (element.length > 0) {
                            for (let index = 0; index < element.length; index++) {
                                aux = element[index].textContent.trim();
                                auxTag = element[index];
                                if (aux == dataFakerFind) {
                                    break;
                                }
                            }
                            expect(aux).to.eql(dataFakerFind);
                            cy.wrap(auxTag).click({ force: true });
                        }
                    });
                }
            }
        });
    }

    findInListSectionDeleted(selectorSection, selectorFind, dataFakerFind) {
        let aux = "";
        let auxTag = "";
        cy.document().then((doc) => {
            let section = doc.querySelectorAll(selectorSection);
            if (section.length > 0) {
                var ol = section[0];
                var li = ol.querySelectorAll('li');
                if (li.length > 0) {
                    cy.document().then((doc) => {
                        let element = doc.querySelectorAll(selectorFind);
                        if (element.length > 0) {
                            for (let index = 0; index < element.length; index++) {
                                aux = element[index].textContent.trim();
                                auxTag = element[index];
                                if (aux == dataFakerFind)
                                    break;
                                else
                                    aux = "";
                            }
                            expect(aux).to.eql("");
                        }
                    });
                }
            }
        });
    }
    
}
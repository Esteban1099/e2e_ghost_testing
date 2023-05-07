cy.faker = require('faker');

function loginGhost(username, password) {
    cy.document().then((doc) => {
        let $inputs = doc.querySelectorAll('[ name = identification]');
        if ($inputs.length > 0) {
            var randomInput = $inputs[0];
            if (!Cypress.dom.isHidden(randomInput) && !randomInput.disabled) {
                cy.wrap(randomInput).type(username, { force: true });
                cy.document().then((doc) => {
                    let $inputs = doc.querySelectorAll('[ name = password ]');
                    if ($inputs.length > 0) {
                        var randomInput = $inputs[0];
                        if (!Cypress.dom.isHidden(randomInput) && !randomInput.disabled) {
                            cy.wrap(randomInput).type(password, { force: true });
                            cy.document().then((doc) => {
                                let $buttons = doc.querySelectorAll('button.login');
                                if ($buttons.length > 0) {
                                    var randomButton = $buttons[0];
                                    if (!Cypress.dom.isHidden(randomButton) && !randomButton.disabled) {
                                        cy.wrap(randomButton).click({ force: true });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

function navigateModule(module) {
    cy.document().then((doc) => {
        let $modules = doc.querySelectorAll('a[href="#/' + module + '/"]');
        if ($modules.length > 0) {
            console.log($modules)
            var firtsModule = $modules[0];
            cy.wrap(firtsModule).click({ force: true });
        }
    });
}

function enterInputInForm(selector, value) {
    cy.document().then((doc) => {
        let $inputs = doc.querySelectorAll(selector);
        if ($inputs.length > 0) {
            var firstInput = $inputs[0];
            cy.get(selector).invoke('val', '');
            cy.wrap(firstInput).type(value, { force: true });
            outfocus();
        }
    });
}

function outfocus() {
    cy.get('body.ember-application').then($links => {
        var randomLink = $links.get(0);
        cy.wrap(randomLink).click({ force: true });
    });
}

function clickInOptionAction(option) {
    cy.get(option).then($links => {
        var randomLink = $links.get(0);
        cy.wrap(randomLink).click({ force: true });
    });
}

function activateCheckBox() {
    cy.get('input[type="checkbox"]').check({ force: true })
}

function clickButtonSave(selector) {
    cy.document().then((doc) => {
        let $buttons = doc.querySelectorAll(selector);
        if ($buttons.length > 0) {
            var randomButton = $buttons[0];
            if (!Cypress.dom.isHidden(randomButton) && !randomButton.disabled) {
                cy.wrap(randomButton).click({ force: true });
            }
        }
    });
}

function clickButtonDelete(selector, modal) {
    cy.document().then((doc) => {
        let $buttons = doc.querySelectorAll(selector);
        if ($buttons.length > 0) {
            if (modal) {
                var randomButton = $buttons[1];
                cy.get('section.modal-content').should('be.visible')
                cy.get(randomButton).eq(0).click({ force: true })
            } else {
                var randomButton = $buttons[0];
                cy.wrap(randomButton).click({ force: true });
            }
        }
    });
}

function findInListSection(selectorSection, selectorFind, dataFakerFind) {
    cy.document().then((doc) => {
        let section = doc.querySelectorAll(selectorSection);
        if (section.length > 0) {
            var ol = section[0];
            var li = ol.querySelectorAll('li');
            if (li.length > 0) {
                cy.document().then((doc) => {
                    let element = doc.querySelectorAll(selectorFind);
                    if (element > 0) {
                        let list = element.querySelectorAll()
                    }
                });
                cy.get(selectorFind).contains(`${dataFakerFind}`).click({ force: true });
            }
        }
    });
}

function validateErrorMessage(selector) {
    cy.document().then((doc) => {
        let section = doc.querySelectorAll(selector);
        if (section.length > 0) {
            var errorMessageEmail = section[1];
            if (!Cypress.dom.isHidden(errorMessageEmail)) {
                cy.wrap(true);
            } else {
                return false;
            }
        }
    });

}

function optionTypeTag(selector, flag) {
    cy.document().then((doc) => {
        let $inputs = doc.querySelectorAll(selector);
        if ($inputs.length > 0) {
            var firstInput = $inputs[0];
            console.log(firstInput)
            var button = firstInput.querySelectorAll('button');
            console.log(button)
            if (flag) {
                cy.wrap(button[0]).click({ force: true });
            } else {
                cy.wrap(button[1]).click({ force: true });
            }
        }
    });
}

describe('E2E Test in ghost', () => {
    const name = cy.faker.name.firstName();
    const email = cy.faker.internet.email();

    const tagName = cy.faker.lorem.word();
    const tagNameEdit = cy.faker.lorem.word();
    const tagDescription = cy.faker.lorem.lines();
    // it('Feature: Create post - Scenario: Create draft post', () => {
    //   // Given I visit ghost
    //   cy.visit('http://localhost:2368/ghost/#/signin');
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // And I login in ghost
    //   loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // And I navigate to members
    //   navigateModule('staff')
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // When I navigate to post
    //   navigateModule('posts')
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // And I navigate to create post
    //   navigateModule('editor/post')
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // And I fill post title input 
    //   enterInputInForm('textarea.gh-editor-title', 'Miso')
    //   // And I wait 1 seconds
    //   cy.wait(1000);
    //   // And I navigate to post
    //   navigateModule('posts') 
    //   // Then I expect to see the post at first on post list
    // });

    // it('Feature: Create member | Scenario: Activate option and register member', () => {
    //     // Given I visit ghost
    //     cy.visit('http://localhost:2368/ghost/#/signin');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to labs
    //     navigateModule('settings/labs')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When i activate section members
    //     clickInOptionAction('.gh-setting-action')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I activate option members
    //     activateCheckBox()
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save configuration
    //     clickButtonSave('button.gh-btn')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('members')
    //     // And I wait 1 seconds
    //     cy.wait(1500);
    //     // And I navigate to new member
    //     navigateModule('members/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     enterInputInForm('input[id="member-name"]', name)
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email
    //     enterInputInForm('input[id="member-email"]', email)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('members')
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'p.gh-members-list-email', email)
    // });

    // it('Feature: Create member | Scenario: Register member', () => {
    //     // Given I visit ghost
    //     cy.visit('http://localhost:2368/ghost/#/signin');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('members')
    //     // And I wait 1 seconds
    //     cy.wait(1500);
    //     // And I navigate to new member
    //     navigateModule('members/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     enterInputInForm('input[id="member-name"]', name)
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email
    //     enterInputInForm('input[id="member-email"]', name)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     cy.wait(1000);
    //     validateErrorMessage('p.response')
    //     // And I wait 1 seconds
    //     cy.wait(1500);
    //     enterInputInForm('input[id="member-email"]', email)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('members')
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'p.gh-members-list-email', email)
    // });

    // it('Feature: Create Tag | Scenario: create public tag', () => {
    //     // Given I visit ghost
    //     cy.visit('http://localhost:2368/ghost/#/signin');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     optionTypeTag('div.gh-contentfilter', true)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new member
    //     navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     enterInputInForm('input[id="tag-name"]', tagName)
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email
    //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
    // });

    // it('Feature: Create Tag | Scenario: create internal tag', () => {
    //     // Given I visit ghost
    //     cy.visit('http://localhost:2368/ghost/#/signin');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     optionTypeTag('div.gh-contentfilter', false)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new member
    //     navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     enterInputInForm('input[id="tag-name"]', `#${tagName}`)
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email
    //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     optionTypeTag('div.gh-contentfilter', false)
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
    // });

    // it('Feature: Create Tag | Scenario: Edit tag after creating', () => {
    //     // Given I visit ghost
    //     cy.visit('http://localhost:2368/ghost/#/signin');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     optionTypeTag('div.gh-contentfilter', true)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new member
    //     navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     enterInputInForm('input[id="tag-name"]', tagName)
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email
    //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     enterInputInForm('input[id="tag-name"]', tagNameEdit)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     clickButtonSave('button.gh-btn')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     navigateModule('tags')
    //And I wait 1 seconds
    // cy.wait(1000);
    //     // And I verify member created in the list
    //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagNameEdit)
    // });

    it('Feature: Create Tag | Scenario: Delete tag after creating', () => {
        // Given I visit ghost
        cy.visit('http://localhost:2368/ghost/#/signin');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I login in ghost
        loginGhost('m.garzonr2@uniandes.edu.co', 'Bogota10***');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to members
        navigateModule('tags')
        // And I wait 1 seconds
        cy.wait(1000);
        optionTypeTag('div.gh-contentfilter', true)
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to new member
        navigateModule('tags/new')
        // And I wait 1 seconds
        cy.wait(1000);
        // And I fill the form input name
        enterInputInForm('input[id="tag-name"]', tagName)
        // And I wait 0.5 seconds
        cy.wait(500);
        // And I fill the form input email
        enterInputInForm('textarea[id="tag-description"]', tagDescription)
        // And I wait 1 seconds
        cy.wait(1000);
        // When I save member
        clickButtonSave('button.gh-btn')
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to members
        navigateModule('tags')
        // And I verify member created in the list
        findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
        //And I wait 1 seconds
        cy.wait(1000);
        clickButtonDelete('button.gh-btn-red', false)
        //And I wait 1 seconds
        cy.wait(1000);
        clickButtonDelete('button.gh-btn-red', true)
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to members
        navigateModule('tags')
    });

});
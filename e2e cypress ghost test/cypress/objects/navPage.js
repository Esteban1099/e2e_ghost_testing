import { Utility } from '../objects/utility';
const utility = new Utility();

export class NavPage {

    constructor() {
    }

    modifiedNavigation(title) {
        cy.get('form.gh-blognav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll('input.ember-text-field');
            var inputLabel = inputs[inputs.length - 2];
            var inputUrl = inputs[inputs.length - 1];
    
            cy.wrap(inputLabel).type(title, { force: true });
            cy.wrap(inputUrl).type(inputUrl.textContent + title, { force: true });
        });
    }
    
    verifyPageInSite(pageTitle) {
        cy.visit('http://localhost:2368/');
        cy.get('ul.nav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll(`li.nav-${pageTitle}`);
            let a = inputs[0].querySelectorAll('a');
            cy.wrap(a[0]).click({ force: true });
        });
    }

    deleteNavigationCreated(page) {
        cy.get('button.gh-blognav-delete').then($container => {
            var objectList = $container.get($container.length - 1);
            cy.wrap(objectList).click({ force: true });
        });
    }
    

    save(){
        utility.clickButtonSave('button.gh-btn-blue')
    }
    
}

export class NavPageV2 {

    constructor() {
    }

    modifiedNavigation(title) {
        cy.get('form.gh-blognav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll('input.ember-text-field');
            var inputLabel = inputs[inputs.length - 2];
            var inputUrl = inputs[inputs.length - 1];
    
            cy.wrap(inputLabel).type(title, { force: true });
            cy.wrap(inputUrl).type(inputUrl.textContent + title, { force: true });
        });
    }

    verifyPageInSite(pageTitle) {
        cy.visit('http://localhost:3002/');
        cy.get('ul.nav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll(`li.nav-${pageTitle}`);
            let a = inputs[0].querySelectorAll('a');
            cy.wrap(a[0]).click({ force: true });
        });
    }

    deleteNavigationCreated(page) {
        cy.get('button.gh-blognav-delete').then($container => {
            var objectList = $container.get($container.length - 1);
            cy.wrap(objectList).click({ force: true });
        });
    }
    

    save(){
        utility.clickButtonSave('button.gh-btn-blue')
    }
    
}

export class NavPageV3 {

    constructor() {
    }

    modifiedNavigation(title) {
        cy.get('form.gh-blognav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll('input.ember-text-field');
            var inputLabel = inputs[inputs.length - 2];
            var inputUrl = inputs[inputs.length - 1];
    
            cy.wrap(inputLabel).type(title, { force: true });
            cy.wrap(inputUrl).type(inputUrl.textContent + title, { force: true });
        });
    }
    
    verifyPageInSite(pageTitle) {
        cy.visit('http://localhost:2368/');
        cy.get('ul.nav').then($container => {
            var objectList = $container.get(0);
            let inputs = objectList.querySelectorAll(`li.nav-${pageTitle}`);
            let a = inputs[0].querySelectorAll('a');
            cy.wrap(a[0]).click({ force: true });
        });
    }

    deleteNavigationCreated(page) {
        cy.get('button.gh-blognav-delete').then($container => {
            var objectList = $container.get($container.length - 1);
            cy.wrap(objectList).click({ force: true });
        });
    }
    

    save(){
        utility.clickButtonSave('button.gh-btn-blue')
    }
    
}



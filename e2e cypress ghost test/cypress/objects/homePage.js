export class HomePage {

    constructor() {
    }

    navigateModule(module) {
        cy.get('a[href="#/' + module + '/"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

    navigateModuleDetail(module) {
        cy.get('a[href="#/' + module + '"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

}

export class HomePageV2 {

    constructor() {
    }

    navigateModule(module) {
        cy.get('a[href="#/' + module + '/"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

    navigateModuleDetail(module) {
        cy.get('a[href="#/' + module + '"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

}

export class HomePageV3 {

    constructor() {
    }

    navigateModule(module) {
        cy.get('a[href="#/' + module + '/"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

    navigateModuleDetail(module) {
        cy.get('a[href="#/' + module + '"]').then($modules => {
            cy.wrap($modules.get(0)).click({ force: true });
        });
    }

}
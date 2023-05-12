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
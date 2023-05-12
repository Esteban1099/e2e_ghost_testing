export class LoginPage {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    visitGhost(){
        cy.visit('http://localhost:2368/ghost/#/signin');
    }

    loginGhost() {
        cy.get('[ name = identification]').then($inputs => {
            cy.wrap($inputs.get(0)).type(this.username, { force: true });
            cy.get('[ name = password ]').then($inputs => {
                cy.wrap($inputs.get(0)).type(this.password, { force: true });
                cy.get('button.login').then($buttons => {
                    cy.wrap($buttons.get(0)).click({ force: true });
                });
            });
        });
    }
}


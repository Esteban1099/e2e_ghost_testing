export class LoginPage {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    visitGhost(){
        cy.visit('http://localhost:2368/ghost/#/signin');
    }

    visitGhostV2(){
        cy.visit('http://localhost:3002/ghost/#/signin');
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

export class LoginPageV2 {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    visitGhost(){
        cy.visit('http://localhost:3002/ghost/#/signin');
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

export class LoginPageV3 {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    visitGhost(){
        cy.visit('http://localhost:2368/ghost/#/signin');
    }

    visitGhostV2(){
        cy.visit('http://localhost:3002/ghost/#/signin');
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



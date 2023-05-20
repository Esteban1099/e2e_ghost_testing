cy.faker = require('faker');
const setting = require('../fixtures/settings.json');
import { Utility } from '../objects/utility';
const utility = new Utility();
import { LoginPageV3 } from '../objects/loginPage';
const loginPage = new LoginPageV3(setting.username, setting.password);
import { HomePage, HomePageV3 } from '../objects/homePage';
const homePage = new HomePageV3();
import { PostPage, PostPageV3 } from '../objects/postPage';
const postPage = new PostPageV3();
import { TagPage, TagPageV3 } from '../objects/tagPage';
const tagPage = new TagPageV3();
import { PagePage, PagePageV3 } from '../objects/pagePage';
const pagePage = new PagePageV3();
import { MemberPage, MemberPageV3 } from '../objects/memberPage';
const memberPage = new MemberPageV3();
import { NavPage, NavPageV3 } from '../objects/navPage';
const navPage = new NavPageV3();
import { DataPool } from '../objects/dataPool';
const dataPool = new DataPool();

describe('Data test in ghost', () => {

  it('Feature: Create member | Scenario: Activate option and register member without email', () => {
    const name = cy.faker.name.firstName();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('staff')
    // And I wait 1 seconds
    cy.wait(1000);
    utility.clickButtonSave('button.gh-btn-green')
    // And I fill the form input email
    // memberPage.fillForm('input[id="member-name"]', name);
    // // And I wait 1 seconds
    // cy.wait(1000);
    // // Then I save member
    // memberPage.save();
    // // And I wait 1 seconds
    // cy.wait(1000);
    // // And I navigate to members
    // homePage.navigateModule('members')
    // // And I wait 1 seconds
    // cy.wait(1000);
    // // And I verify member created in the list
    // memberPage.findInList('section.content-list', 'p.gh-members-list-email', name);
  });
  
  /*
  it('Feature: Create member | Scenario: Activate option and register member without email', () => {
    const name = cy.faker.name.firstName();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', name);
  });

  it('Feature: Create member | Scenario: Activate option and register member with email repeat', () => {
    const name = cy.faker.name.firstName();
    const name2 = cy.faker.name.firstName();
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name2);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with name characters specials', () => {
    const name = dataPool.specialCharactersText[2];
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with name numeric', () => {
    const name = cy.faker.datatype.number({ min: 1000000 })
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member without name', () => {
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with 10 characters in field note', () => {
    const name = cy.faker.name.firstName();
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
     // And I wait 0.5 seconds
     cy.wait(500);
     // And I fill the form text area note
     memberPage.fillForm('textarea[id="member-note"]', utility.getRandomString(10));
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with 500 characters in field note', () => {
    const name = cy.faker.name.firstName();
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form text area note
    memberPage.fillForm('textarea[id="member-note"]', utility.getRandomString(500));
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with 501 characters in field note', () => {
    const name = cy.faker.name.firstName();
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form text area note
    memberPage.fillForm('textarea[id="member-note"]', utility.getRandomString(501));
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with 191 characters in field name', () => {
    const name = utility.getRandomString(191);
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });

  it('Feature: Create member | Scenario: Activate option and register member with 192 characters in field name', () => {
    const name = utility.getRandomString(192);
    const email = cy.faker.internet.email();

    // Given I visit ghost
    loginPage.visitGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginPage.loginGhost();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to labs
    homePage.navigateModule('settings/labs')
    // And I wait 1 seconds
    cy.wait(1000);
    // When i activate section members
    memberPage.activateSectionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I activate option members
    memberPage.activateOptionMembers();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I save configuration
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1500);
    // And I navigate to new member
    homePage.navigateModule('members/new')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I fill the form input name
    memberPage.fillForm('input[id="member-name"]', name);
    
    // And I wait 0.5 seconds
    cy.wait(500);
    // And I fill the form input email
    memberPage.fillForm('input[id="member-email"]', email);
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I save member
    memberPage.save();
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    homePage.navigateModule('members')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I verify member created in the list
    memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
  });  
*/
})
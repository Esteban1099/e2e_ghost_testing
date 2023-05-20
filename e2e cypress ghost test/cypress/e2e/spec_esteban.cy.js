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

  it('Create tag without name', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.optionTypeTag('div.gh-contentfilter', true);
    cy.wait(1000);
    homePage.navigateModule('tags/new');
    cy.wait(1000);
    tagPage.fillForm('textarea[id="tag-description"]', 'Empty tag name');
    cy.wait(1000);
    tagPage.save();
    cy.wait(1000);
    utility.checkTextBySelector('span.error > :first-child', 'You must specify a name for the tag.');
  });

  it('Create tag with numbers as name', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.optionTypeTag('div.gh-contentfilter', true);
    cy.wait(1000);
    homePage.navigateModule('tags/new');
    cy.wait(1000);
    var tagName = cy.faker.random.number();
    tagPage.fillForm('input[id="tag-name"]', tagName);
    cy.wait(1000);
    tagPage.fillForm('textarea[id="tag-description"]', cy.faker.lorem.word());
    cy.wait(1000);
    tagPage.save();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', '' + tagName);
  });

  it('Create tag with special characters as name', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.optionTypeTag('div.gh-contentfilter', true);
    cy.wait(1000);
    homePage.navigateModule('tags/new');
    cy.wait(1000);
    tagPage.fillForm('input[id="tag-name"]', dataPool.specialCharactersText[2]);
    cy.wait(1000);
    tagPage.fillForm('textarea[id="tag-description"]', cy.faker.lorem.word());
    cy.wait(1000);
    tagPage.save();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', dataPool.specialCharactersText[2]);
  });

  it('Create a post then scheduled to publish with wrong date format', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('posts');
    cy.wait(1000);
    homePage.navigateModule('editor/post');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[0]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-date > :first-child', dataPool.dates[0]);
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Invalid date format, must be YYYY-MM-DD');
  });

  it('Create a post then scheduled to publish with wrong date hour format', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('posts');
    cy.wait(1000);
    homePage.navigateModule('editor/post');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[1]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-time > :first-child', dataPool.hours[0]);
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be in format: "15:00"');
  });

  it('Create a post then scheduled to publish with past date from today', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('posts');
    cy.wait(1000);
    homePage.navigateModule('editor/post');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', utility.getRandomString(8));
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-date > :first-child', utility.getPastDateFromToday());
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be at least 2 mins in the future');
  });

  it('Create a page then scheduled to publish with wrong date format', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('pages');
    cy.wait(1000);
    homePage.navigateModule('editor/page');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[0]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-date > :first-child', dataPool.dates[0]);
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Invalid date format, must be YYYY-MM-DD');
  });

  it('Create a page then scheduled to publish with wrong date hour format', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('pages');
    cy.wait(1000);
    homePage.navigateModule('editor/page');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[1]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-time > :first-child', dataPool.hours[0]);
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be in format: "15:00"');
  });

  it('Create a page then scheduled to publish with past date from today', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('pages');
    cy.wait(1000);
    homePage.navigateModule('editor/page');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', utility.getRandomString(8));
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('div.gh-date-time-picker-date > :first-child', utility.getPastDateFromToday());
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be at least 2 mins in the future');
  });

  it('Login in ghost with user in not valid email format', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    cy.get('[ name = identification]').then($inputs => {
      cy.wrap($inputs.get(0)).type(utility.getRandomString(10), { force: true });
      cy.get('[ name = password ]').then($inputs => {
        cy.wrap($inputs.get(0)).type(setting.password, { force: true });
        cy.get('button.login').then($buttons => {
          cy.wrap($buttons.get(0)).click({ force: true });
          cy.wait(1000);
          utility.checkTextBySelector('p.main-error', 'Please fill out the form to sign in.');
        });
      });
    });
  });

  it('Login in ghost with user in a valid email format but no registered', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    cy.get('[ name = identification]').then($inputs => {
      cy.wrap($inputs.get(0)).type(dataPool.noRegisterInGhostMails[0], { force: true });
      cy.get('[ name = password ]').then($inputs => {
        cy.wrap($inputs.get(0)).type(setting.password, { force: true });
        cy.get('button.login').then($buttons => {
          cy.wrap($buttons.get(0)).click({ force: true });
          cy.wait(1000);
          utility.checkTextBySelector('p.main-error', 'There is no user with that email address.');
        });
      });
    });
  });

  it('Login in ghost with wrong password', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    cy.get('[ name = identification]').then($inputs => {
      cy.wrap($inputs.get(0)).type(setting.username, { force: true });
      cy.get('[ name = password ]').then($inputs => {
        cy.wrap($inputs.get(0)).type(utility.getRandomString(3), { force: true });
        cy.get('button.login').then($buttons => {
          cy.wrap($buttons.get(0)).click({ force: true });
          cy.wait(1000);
          utility.checkTextBySelector('p.main-error', 'Your password is incorrect.');
        });
      });
    });
  });

  it('Login in ghost with empty form', () => {
    loginPage.visitGhost();
    cy.wait(1000);

    cy.get('button.login').then($buttons => {
      cy.wrap($buttons.get(0)).click({ force: true });
      cy.wait(1000);
      utility.checkTextBySelector('p.main-error', 'Please fill out the form to sign in.');
    });
  });

  it('Login in ghost with enter 500 characters in password field', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    cy.get('[ name = identification]').then($inputs => {
      cy.wrap($inputs.get(0)).type(setting.username, { force: true });
      cy.get('[ name = password ]').then($inputs => {
        cy.wrap($inputs.get(0)).type(dataPool.character500, { force: true });
        cy.get('button.login').then($buttons => {
          cy.wrap($buttons.get(0)).click({ force: true });
          cy.wait(1000);
          utility.checkTextBySelector('p.main-error', 'Your password is incorrect.');
        });
      });
    });
  });

  it('Login in ghost with enter 500 characters in user field', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    cy.get('[ name = identification]').then($inputs => {
      cy.wrap($inputs.get(0)).type(dataPool.character500, { force: true });
      cy.get('[ name = password ]').then($inputs => {
        cy.wrap($inputs.get(0)).type(setting.password, { force: true });
        cy.get('button.login').then($buttons => {
          cy.wrap($buttons.get(0)).click({ force: true });
          cy.wait(1000);
          utility.checkTextBySelector('p.main-error', 'Please fill out the form to sign in.');
        });
      });
    });
  });

  it('Create a post and set in excerpt 301 characters', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('posts');
    cy.wait(1000);
    homePage.navigateModule('editor/post');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', utility.getRandomString(10));
    cy.wait(1000);
    utility.clickInOptionAction('button.post-settings');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('#custom-excerpt', utility.getRandomString(301));
    cy.get('label[for="author-list"').then($labels => {
      cy.wrap($labels.get(0)).click({ force: true });
    });
    cy.wait(1000);
    utility.checkTextBySelector('p.response', 'Excerpt cannot be longer than 300 characters.');
  });

  it('Create a page and set in excerpt 301 characters', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('pages');
    cy.wait(1000);
    homePage.navigateModule('editor/page');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', utility.getRandomString(10));
    cy.wait(1000);
    utility.clickInOptionAction('button.post-settings');
    cy.wait(1000);
    utility.enterInputInFormWithoutOutfocus('#custom-excerpt', utility.getRandomString(301));
    cy.get('label[for="author-list"').then($labels => {
      cy.wrap($labels.get(0)).click({ force: true });
    });
    cy.wait(1000);
    utility.checkTextBySelector('p.response', 'Excerpt cannot be longer than 300 characters.');
  });

  it('Create tag with 192 characters in name', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('tags');
    cy.wait(1000);
    tagPage.optionTypeTag('div.gh-contentfilter', true);
    cy.wait(1000);
    homePage.navigateModule('tags/new');
    cy.wait(1000);
    tagPage.fillForm('input[id="tag-name"]', dataPool.character192);
    cy.wait(1000);
    tagPage.fillForm('textarea[id="tag-description"]', '192 characters tag name');
    cy.wait(1000);
    tagPage.save();
    cy.wait(1000);
    utility.checkTextBySelector('span.error > :first-child', 'Tag names cannot be longer than 191 characters.');
  });

  it('Create a post then scheduled to publish with empty date hour', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('posts');
    cy.wait(1000);
    homePage.navigateModule('editor/post');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[0]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.clearInput('div.gh-date-time-picker-time > :first-child');
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be in format: "15:00"');
  });

  it('Create a page then scheduled to publish with empty date hour', () => {
    loginPage.visitGhost();
    cy.wait(1000);
    loginPage.loginGhost();
    cy.wait(1000);
    homePage.navigateModule('pages');
    cy.wait(1000);
    homePage.navigateModule('editor/page');
    cy.wait(1000);
    utility.enterInputInForm('textarea.gh-editor-title', dataPool.titles[0]);
    cy.wait(1000);
    utility.clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    utility.clearInput('div.gh-date-time-picker-time > :first-child');
    cy.wait(1000);
    utility.clickButtonSave('button.gh-publishmenu-button');
    cy.wait(1000);
    utility.checkTextBySelector('div.gh-date-time-picker-error', 'Must be in format: "15:00"');
  });

})
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

})
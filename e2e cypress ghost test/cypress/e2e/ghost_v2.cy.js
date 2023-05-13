cy.faker = require('faker');
const setting = require('../fixtures/settings.json');
import { Utility } from '../objects/utility';
const utility = new Utility();
import { LoginPage, LoginPageV2 } from '../objects/loginPage';
const loginPage = new LoginPageV2(setting.username, setting.password);
import { HomePage, HomePageV2 } from '../objects/homePage';
const homePage = new HomePageV2();
import { PostPage, PostPageV2 } from '../objects/postPage';
const postPage = new PostPageV2();
import { TagPage, TagPageV2 } from '../objects/tagPage';
const tagPage = new TagPageV2();
import { PagePage, PagePageV2 } from '../objects/pagePage';
const pagePage = new PagePageV2();
import { MemberPage, MemberPageV2 } from '../objects/memberPage';
const memberPage = new MemberPageV2();
import { NavPage, NavPageV2 } from '../objects/navPage';
const navPage = new NavPageV2();


describe('E2E Test in ghost', () => {
  const screenShotBaseName = 'v2/';

  it('Feature: Create post - Scenario: Create post and pusblish', () => {
      let scenario = 'Create post and pusblish';
      let postName = cy.faker.lorem.word();
      let tagName = cy.faker.lorem.word();
      let postText = cy.faker.lorem.lines();

      // Given I visit ghost
      loginPage.visitGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'visit_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I login in ghost
      loginPage.loginGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'login_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // When I navigate to post
      homePage.navigateModule('posts');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to create post
      homePage.navigateModule('editor/post');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_post');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I desing post title, text and publish
      postPage.desingPost('basic-text-publish', postName, tagName, postText);
      utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-text-publish');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to post
      homePage.navigateModule('posts');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_2');
      // And I wait 1 seconds
      cy.wait(1000);
      // Then I expect that first post published on post list must has the title of the one I created
      postPage.checkPublishedPostTitle(0, postName);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_posts_publish');
  });


  it('Feature: Edit post - Scenario: Edit a recent created post and let it as draft', () => {
      let scenario = 'Edit a recent created post and let it as draft';
      let postName = cy.faker.lorem.word();
      let editPostName = cy.faker.lorem.word();
      let postText = cy.faker.lorem.lines();
      let tagName = cy.faker.lorem.word();

      // Given I visit ghost
      loginPage.visitGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'visit_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I login in ghost
      loginPage.loginGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'login_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // When I navigate to post
      homePage.navigateModule('posts');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to create post
      homePage.navigateModule('editor/post');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_post');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I desing post title 
      postPage.desingPost('basic', postName);
      utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to post
      homePage.navigateModule('posts');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_2');
      // And I navigate to edit post
      postPage.navigateEditPostByTitle(postName);
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_edit_post');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I edit desing post title, text and publish
      postPage.desingPost('basic-text', editPostName, tagName, postText);
      utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-text');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to post
      homePage.navigateModule('posts');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_3');
      // And I wait 1 seconds
      cy.wait(1000);
      // Then I expect that first post on post list must has the title of the one I created
      postPage.checkPostTitle(0, editPostName);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_posts_title');
      //   // And I expect that first post on post list must be draft 
      postPage.checkPostIsDraft(0);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_posts_draft');
  });

  it('Feature: Create page - Scenario: Create page and publish', () => {
      let scenario = 'Create page and publish';
      let pageName = cy.faker.lorem.word();
      let pageText = cy.faker.lorem.lines();

      // Given I visit ghost
      loginPage.visitGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'visit_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I login in ghost
      loginPage.loginGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'login_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // When I navigate to pages
      homePage.navigateModule('pages')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to create page
      homePage.navigateModule('editor/page')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_page');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I desing page title, text and publish 
      pagePage.desingPageEr('basic-text-publish', pageName, pageText)
      utility.takeScreenShot(scenario, screenShotBaseName + 'desing_page_basic-text-publish');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to pages
      homePage.navigateModule('pages')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_2');
      // And I wait 1 seconds
      cy.wait(1000);
      // Then I expect that first page published on page list must has the title of the one I created
      pagePage.checkPublishedPageTitleEr(0, pageName);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_publish');
  });

  it('Feature: Create member | Scenario: Register member', () => {
      let scenario = 'Register member';
      const name = cy.faker.name.firstName();
      const email = cy.faker.internet.email();

      // Given I visit ghost
      loginPage.visitGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'visit_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I login in ghost
      loginPage.loginGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'login_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to members
      homePage.navigateModule('members')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_members_1');
      // And I wait 1 seconds
      cy.wait(1500);
      // And I navigate to new member
      homePage.navigateModule('members/new')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_member');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I fill the form input name
      memberPage.fillForm('input[id="member-name"]', name);
      utility.takeScreenShot(scenario, screenShotBaseName + 'fill_member_name');
      // And I wait 0.5 seconds
      cy.wait(500);
      // And I fill the form input email wrong
      memberPage.fillForm('input[id="member-email"]', name);
      utility.takeScreenShot(scenario, screenShotBaseName + 'fill_member_mail_wrong');
      // And I wait 1 seconds
      cy.wait(1000);
      // When I save member
      memberPage.save();
      utility.takeScreenShot(scenario, screenShotBaseName + 'save_member_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I validate error on mail field
      memberPage.validateErrorMessage('p.response');
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_error_menssage');
      // And I wait 1 seconds
      cy.wait(1500);
      // And I fill the form input email well
      memberPage.fillForm('input[id="member-email"]', email);
      utility.takeScreenShot(scenario, screenShotBaseName + 'fill_member_mail_well');
      // And I wait 1 seconds
      cy.wait(1000);
      // Then I save member
      memberPage.save();
      utility.takeScreenShot(scenario, screenShotBaseName + 'save_member_1');
      //And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to members
      homePage.navigateModule('members')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_members_2');
      // And I verify member created in the list
      memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_member_was_created');
  });

  it('Feature: Create Tag | Scenario: create internal tag', () => {
      let scenario = 'create internal tag';
      const tagName = cy.faker.lorem.word();
      const tagNameEdit = cy.faker.lorem.word();
      const tagDescription = cy.faker.lorem.lines();

      // Given I visit ghost
      loginPage.visitGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'visit_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I login in ghost
      loginPage.loginGhost();
      utility.takeScreenShot(scenario, screenShotBaseName + 'login_ghost');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to tags
      homePage.navigateModule('tags')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I select internal tags
      tagPage.optionTypeTag('div.gh-contentfilter', false)
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_internal_1');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I navigate to new tags
      homePage.navigateModule('tags/new')
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_tag');
      // And I wait 1 seconds
      cy.wait(1000);
      // And I fill the form input tag name
      tagPage.fillForm('input[id="tag-name"]', `#${tagName}`);
      utility.takeScreenShot(scenario, screenShotBaseName + 'fill_tag_name');
      // And I wait 0.5 seconds
      cy.wait(500);
      // And I fill the form tag description
      tagPage.fillForm('textarea[id="tag-description"]', tagDescription);
      utility.takeScreenShot(scenario, screenShotBaseName + 'fill_tag_description');
      // And I wait 1 seconds
      cy.wait(1000);
      // When I save tag
      tagPage.save();
      utility.takeScreenShot(scenario, screenShotBaseName + 'save_tag');
      //Then I wait 1 seconds
      cy.wait(1000);
      // And I navigate to tags
      homePage.navigateModuleDetail('tags/?type=internal');
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_2');
      //And I wait 1 seconds
      cy.wait(1000);
      // And I select internal tags
      tagPage.optionTypeTag('div.gh-contentfilter', false);
      utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_internal_2');
      // And I verify tag created in the list
      tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', `#${tagName}`);
      utility.takeScreenShot(scenario, screenShotBaseName + 'check_tag_was_created');
  });

});
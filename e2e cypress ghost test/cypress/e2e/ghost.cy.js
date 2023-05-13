cy.faker = require('faker');
const setting = require('../fixtures/settings.json');
import { Utility } from '../objects/utility';
const utility = new Utility();
import { LoginPage } from '../objects/loginPage';
const loginPage = new LoginPage(setting.username, setting.password);
import { HomePage } from '../objects/homePage';
const homePage = new HomePage();
import { PostPage } from '../objects/postPage';
const postPage = new PostPage();
import { TagPage } from '../objects/tagPage';
const tagPage = new TagPage();
import { PagePage } from '../objects/pagePage';
const pagePage = new PagePage();
import { MemberPage } from '../objects/memberPage';
const memberPage = new MemberPage();
import { NavPage } from '../objects/navPage';
const navPage = new NavPage();

describe('E2E Test in ghost', () => {
    const screenShotBaseName = 'v1/';

    it('Feature: Create post - Scenario: Create draft post', () => {
        let scenario = 'Create draft post';
        let postName = cy.faker.lorem.word();

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
        // And I navigate to staff
        homePage.navigateModule('staff');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_staff');
        // And I wait 1 seconds
        cy.wait(1000);
        // When I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_1');
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
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect to see the post at first on post list
        postPage.checkPostTitle(0, postName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_title');
        // And I expect that first post on post list must be draft 
        postPage.checkPostIsDraft(0);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_draft');
    });

    it('Feature: Create post - Scenario: Create draft post with tag', () => {
        let scenario = 'Create draft post with tag';
        let postName = cy.faker.lorem.word();
        let tagName = cy.faker.lorem.word();
        let tagDescription = cy.faker.lorem.lines();

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
        homePage.navigateModule('tags');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I create a new tag
        tagPage.createTag(tagName, tagDescription);
        utility.takeScreenShot(scenario, screenShotBaseName + 'create_tag');
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to tags
        homePage.navigateModule('tags')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_2');
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to pages
        homePage.navigateModule('pages')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_1');
        // When I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to create post
        homePage.navigateModule('editor/post');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_create_post');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I desing post title and set post tag
        postPage.desingPost('basic-tag', postName, tagName, '', scenario, screenShotBaseName + 'desing_post_basic-tag_1');
        cy.wait(500);
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-tag_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect that first post on post list must has the title of the one I created
        postPage.checkPostTitle(0, postName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_title');
        // And I expect that first post on post list must be draft 
        postPage.checkPostIsDraft(0);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_draft');
        // And I expect that first post on post list must have the tag 
        postPage.checkPostTag(0, tagName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_tag');
    });

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

    it('Feature: Edit post - Scenario: Edit a recent created post and publish', () => {
        let scenario = 'Edit a recent created post and publish';
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
        postPage.desingPost('basic', postName)
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
        postPage.desingPost('basic-text-publish', editPostName, tagName, postText);
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-text-publish');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_posts_3');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect that first post published on post list must has the edit title of the one I edit
        postPage.checkPublishedPostTitle(0, editPostName);
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

    it('Feature: Edit post - Scenario: Edit a recent created post and change tag', () => {
        let scenario = 'Edit a recent created post and change tag';
        let postName = cy.faker.lorem.word();
        let postText = cy.faker.lorem.lines();
        let tagNameA = cy.faker.lorem.word();
        let tagDescriptionA = cy.faker.lorem.lines();
        let tagNameB = cy.faker.lorem.word();
        let tagDescriptionB = cy.faker.lorem.lines();

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
        homePage.navigateModule('tags');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I create a new tag
        tagPage.createTag(tagNameA, tagDescriptionA);
        utility.takeScreenShot(scenario, screenShotBaseName + 'create_tag_a');
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to tags
        homePage.navigateModule('tags')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I create a new tag
        tagPage.createTag(tagNameB, tagDescriptionB);
        utility.takeScreenShot(scenario, screenShotBaseName + 'create_tag_b');
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to tags
        homePage.navigateModule('tags')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_3');
        //And I wait 1 seconds
        cy.wait(1000);
        // When I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to create post
        homePage.navigateModule('editor/post');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_edit_post_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I desing post title with a tag A
        postPage.desingPost('basic-tag', postName, tagNameA, '', scenario, screenShotBaseName + 'desing_post_basic-tag_a_1');
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-tag_a_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_2');
        // And I navigate to edit post
        postPage.navigateEditPostByTitle(postName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_edit_post_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I delete tag A from the post
        postPage.deleteTagFromPost(tagNameA, scenario, screenShotBaseName + 'desing_post_delete-tag_1')
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_delete-tag_2');
        // And I edit desing post title and set post tag B
        postPage.desingPost('basic-tag-edit', postName, tagNameB, postText, scenario, screenShotBaseName + 'desing_post_basic-tag_b_1');
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_post_basic-tag_b_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to post
        homePage.navigateModule('posts');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post_3');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect that first post on post list must has the title of the one I created
        postPage.checkPostTitle(0, postName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_title');
        // And I expect that first post on post list must be draft 
        postPage.checkPostIsDraft(0);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_draft');
        // And I expect that first post on post list must have the edit tag 
        postPage.checkPostTag(0, tagNameB)
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_post_tag');
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

    it('Feature: Create page - Scenario: Create page and schedule publish in 5 minutes ', () => {
        let scenario = 'Create page and schedule publish in 5 minutes';
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
        // And I desing page title, text and schedule publish in 5 minutes 
        pagePage.desingPageEr('basic-text-program-publish', pageName, pageText)
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_page_basic-text-program-publish');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to pages
        homePage.navigateModule('pages')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect that first page scheduled on page list must has the title of the one I created
        pagePage.checkScheduledPageTitleEr(0, pageName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_scheduled');
        // And I wait 5 minutes for page be published
        cy.wait(300000)
        // And I re navigate to post
        homePage.navigateModule('posts')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_post');
        // And I re navigate to pages
        homePage.navigateModule('pages')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_3');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I expect that first post published on post list must has the title of the one I created
        pagePage.checkPublishedPageTitleEr(0, pageName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_publish');

    });

    it('Feature: Create page - Scenario: Create page, schedule publish in 5 minutes and delete before pusblish', () => {
        let scenario = 'Create page, schedule publish in 5 minutes and delete before pusblish';
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
        // And I desing page title, text and schedule publish in 5 minutes 
        pagePage.desingPageEr('basic-text-program-publish', pageName, pageText)
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_page_basic-text-program-publish');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to pages
        homePage.navigateModule('pages')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I expect that first page scheduled on page list must has the title of the one I created
        pagePage.checkScheduledPageTitleEr(0, pageName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_scheduled');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to edit page
        pagePage.navigateEditPageByTitle(pageName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_3');
        // And I delete page
        pagePage.deletePage()
        utility.takeScreenShot(scenario, screenShotBaseName + 'delete_page');
        // And I wait 2 seconds
        cy.wait(2000);
        // And I expect the page is not on page list
        pagePage.checkScheduledPageTitleNotAtPosition(0, pageName);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_no_exists');

    });

    it('Feature: Create page - Scenario: Create page set tag and publish it', () => {
        let scenario = 'Create page set tag and publish it';
        let pageName = cy.faker.lorem.word();
        let pageText = cy.faker.lorem.lines();
        let tagName = cy.faker.lorem.word();
        let tagDescription = cy.faker.lorem.lines();

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
        homePage.navigateModule('tags');
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I create a new tag
        tagPage.createTag(tagName, tagDescription);
        utility.takeScreenShot(scenario, screenShotBaseName + 'create_tag');
        //And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to tags
        homePage.navigateModule('tags')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_tags_2');
        //And I wait 1 seconds
        cy.wait(1000);
        // When I navigate to pages
        homePage.navigateModule('pages')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_pages_1');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to create page
        homePage.navigateModule('editor/page')
        utility.takeScreenShot(scenario, screenShotBaseName + 'create_page');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I desing page title, text and publish 
        pagePage.desingPageEr('basic-text-tag', pageName, pageText, tagName, scenario, screenShotBaseName + 'desing_page_basic-text-tag_1')
        utility.takeScreenShot(scenario, screenShotBaseName + 'desing_page_basic-text-tag_2');
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
        // And I expect that first post on post list must have the tag 
        pagePage.checkPublishPageTag(0, tagName)
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_page_tag');
    });

    it('Feature: Create member | Scenario: Activate option and register member', () => {
        let scenario = 'Activate option and register member';
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
        // And I navigate to labs
        homePage.navigateModule('settings/labs')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_settings_labs');
        // And I wait 1 seconds
        cy.wait(1000);
        // When i activate section members
        memberPage.activateSectionMembers();
        utility.takeScreenShot(scenario, screenShotBaseName + 'activate_section_members');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I activate option members
        memberPage.activateOptionMembers();
        utility.takeScreenShot(scenario, screenShotBaseName + 'activate_option_members');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I save configuration
        memberPage.save();
        utility.takeScreenShot(scenario, screenShotBaseName + 'save_settings');
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
        // And I fill the form input email
        memberPage.fillForm('input[id="member-email"]', email);
        utility.takeScreenShot(scenario, screenShotBaseName + 'fill_member_mail');
        // And I wait 1 seconds
        cy.wait(1000);
        // Then I save member
        memberPage.save();
        utility.takeScreenShot(scenario, screenShotBaseName + 'save_member');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I navigate to members
        homePage.navigateModule('members')
        utility.takeScreenShot(scenario, screenShotBaseName + 'navigate_members_2');
        // And I wait 1 seconds
        cy.wait(1000);
        // And I verify member created in the list
        memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
        utility.takeScreenShot(scenario, screenShotBaseName + 'check_member_was_created');
    });

    // it('Feature: Create member | Scenario: Register member', () => {
    //     const name = cy.faker.name.firstName();
    //     const email = cy.faker.internet.email();
    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     homePage.navigateModule('members')
    //     // And I wait 1 seconds
    //     cy.wait(1500);
    //     // And I navigate to new member
    //     homePage.navigateModule('members/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input name
    //     memberPage.fillForm('input[id="member-name"]', name);
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input email wrong
    //     memberPage.fillForm('input[id="member-email"]', name);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save member
    //     memberPage.save();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I validate error on mail field
    //     memberPage.validateErrorMessage('p.response');
    //     // And I wait 1 seconds
    //     cy.wait(1500);
    //     // And I fill the form input email well
    //     memberPage.fillForm('input[id="member-email"]', email);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I save member
    //     memberPage.save();
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     homePage.navigateModule('members')
    //     // And I verify member created in the list
    //     memberPage.findInList('section.content-list', 'p.gh-members-list-email', email);
    // });

    // it('Feature: Create Tag | Scenario: create public tag', () => {
    //     const tagName = cy.faker.lorem.word();
    //     const tagNameEdit = cy.faker.lorem.word();
    //     const tagDescription = cy.faker.lorem.lines();
    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000); 
    //     // And I select public tags
    //     tagPage.optionTypeTag('div.gh-contentfilter', true)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new tag
    //     homePage.navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input tag name
    //     tagPage.fillForm('input[id="tag-name"]', tagName);
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input tag description
    //     tagPage.fillForm('textarea[id="tag-description"]', tagDescription);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save tag
    //     tagPage.save();
    //     //Then I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    // });

    // it('Feature: Create Tag | Scenario: create internal tag', () => {
    //     const tagName = cy.faker.lorem.word();
    //     const tagNameEdit = cy.faker.lorem.word();
    //     const tagDescription = cy.faker.lorem.lines();
    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I select internal tags
    //     tagPage.optionTypeTag('div.gh-contentfilter', false)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new tags
    //     homePage.navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input tag name
    //     tagPage.fillForm('input[id="tag-name"]', `#${tagName}`);
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form tag description
    //     tagPage.fillForm('textarea[id="tag-description"]', tagDescription);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save tag
    //     tagPage.save();
    //     //Then I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModuleDetail('tags/?type=internal');
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I select internal tags
    //     tagPage.optionTypeTag('div.gh-contentfilter', false);
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', `#${tagName}`);
    // });

    // it('Feature: Create Tag | Scenario: Delete tag after creating', () => {
    //     const tagName = cy.faker.lorem.word() + '_' +  cy.faker.random.alphaNumeric(3);
    //     const tagNameEdit = cy.faker.lorem.word();
    //     const tagDescription = cy.faker.lorem.lines();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I select public tags
    //     tagPage.optionTypeTag('div.gh-contentfilter', true)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to new tag
    //     homePage.navigateModule('tags/new')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I fill the form input tag name
    //     tagPage.fillForm('input[id="tag-name"]', tagName);
    //     // And I wait 0.5 seconds
    //     cy.wait(500);
    //     // And I fill the form input tag description
    //     tagPage.fillForm('textarea[id="tag-description"]', tagDescription);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I save tag
    //     tagPage.save();
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I navigate to tags
    //     homePage.navigateModule('tags')
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     //And I delete the tag created
    //     tagPage.deleteTag();
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //      // And I verify tag just deleted in not in the list
    //      tagPage.findNotInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    // });

    // it('Feature: Create tag | Scenario: Create tag, Assign tag to Post and delete tag', () => {
    //     let postName = cy.faker.lorem.word();
    //     let tagName = cy.faker.lorem.word() + '_' +   cy.faker.random.alphaNumeric(3);
    //     let tagDescription = cy.faker.lorem.lines();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I navigate to tags
    //     homePage.navigateModule('tags');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I create a new tag
    //     tagPage.createTag(tagName, tagDescription);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I navigate to post
    //     homePage.navigateModule('posts');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to create post
    //     homePage.navigateModule('editor/post');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I desing post title and set post tag
    //     postPage.desingPost('basic-tag', postName, tagName);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I publish post
    //     postPage.publishPost();
    //     // Then I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to post
    //     homePage.navigateModule('posts');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     homePage.navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     //And I delete the tag created
    //     tagPage.deleteTag();
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to members
    //     homePage.navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //      // And I verify tag just deleted in not in the list
    //      tagPage.findNotInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    // });

    // it('Feature: Create Tag | Scenario: Create tag, Assign tag to a draft Post and delete tag', () => {
    //     let postName = cy.faker.lorem.word();
    //     let tagName = cy.faker.lorem.word() + '_' +   cy.faker.random.alphaNumeric(3);
    //     let tagDescription = cy.faker.lorem.lines();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I create a new tag
    //     tagPage.createTag(tagName, tagDescription);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I navigate to post
    //     homePage.navigateModule('posts');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to create post
    //     homePage.navigateModule('editor/post');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I desing post title and set post tag
    //     postPage.desingPost('basic-tag', postName, tagName);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I navigate to post
    //     homePage.navigateModule('posts');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I navigate to post
    //     homePage.navigateModule('tags')
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I verify tag created in the list
    //     tagPage.findInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //    //And I delete the tag created
    //    tagPage.deleteTag();
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to tags
    //     homePage.navigateModule('tags')
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I verify tag just deleted in not in the list
    //     tagPage.findNotInList('section.content-list', 'h3.gh-tag-list-name', tagName);
    // });

    // it('Feature: Modify nav | Scenario: Create page, assign nav', () => {
    //     let pageTitle = cy.faker.lorem.word();
    //     let pageText = cy.faker.lorem.lines();
    //     let tagName = cy.faker.lorem.word();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I create a new page
    //     pagePage.createPage(pageTitle, pageText);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // When I wait 1 seconds
    //     cy.wait(1000);
    //     // And I check the page is published
    //     pagePage.checkPublishedPage(0, pageTitle);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to settings
    //     homePage.navigateModule('settings/design');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I modify navegation of the page
    //     navPage.modifiedNavigation(pageTitle)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I save navegation of the page
    //     navPage.save();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I navigate to the site
    //     homePage.navigateModule('site');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I expect the page is on the site
    //     navPage.verifyPageInSite(pageTitle)
    // });

    // it('Feature: Modify nav | Scenario: Create page, assign nav and delete page', () => {
    //     let pageTitle = cy.faker.lorem.word();
    //     let pageText = cy.faker.lorem.lines();
    //     let tagName = cy.faker.lorem.word();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I create a new page
    //     pagePage.createPage(pageTitle, pageText);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I check the page is published
    //     pagePage.checkPublishedPage(0, pageTitle);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I navigate to settings
    //     homePage.navigateModule('settings/design');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I modify navegation of the page
    //     navPage.modifiedNavigation(pageTitle)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I save navegation of the page
    //     navPage.save();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I navigate to site
    //     homePage.navigateModule('site');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I expect the page is on the site
    //     navPage.verifyPageInSite(pageTitle)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     //And I visit ghost
    //     loginPage.visitGhost();
    //     // And I navigate to settings
    //     homePage.navigateModule('settings/design');
    //     // And I delete navegation of the page
    //     navPage.deleteNavigationCreated(pageTitle);
    // });

    // it('Feature: Create page - Scenario: create page, publish, review, unpublish, review, publish', () => {
    //     let pageTitle = cy.faker.lorem.word();
    //     let pageText = cy.faker.lorem.lines();

    //     // Given I visit ghost
    //     loginPage.visitGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I login in ghost
    //     loginPage.loginGhost();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I create a new page and publish it
    //     pagePage.createPage(pageTitle, pageText);
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // When I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to edit the page created
    //     pagePage.navigateEditPageByTitle(pageTitle)
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I unpublish the page
    //     pagePage.unpublishPage();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // Then I check the page is now a draft
    //     pagePage.checkDraftPageTitleEr(0, pageTitle)
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to edit the page created
    //     pagePage.navigateEditPageByTitle(pageTitle)
    //     //And I wait 1 seconds
    //     cy.wait(1000);
    //     //And I publish the page
    //     pagePage.publishPage();
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I navigate to pages
    //     homePage.navigateModule('pages');
    //     // And I wait 1 seconds
    //     cy.wait(1000);
    //     // And I expect the page is published
    //     pagePage.checkPublishedPageTitleEr(pageTitle)
    // });
});

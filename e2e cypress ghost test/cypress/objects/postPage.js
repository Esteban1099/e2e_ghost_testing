import { Utility } from '../objects/utility';
const utility = new Utility();

export class PostPage {

    constructor() {
    }

    desingPost(type, postName, tagName, postText) {
        if (type == 'basic') {
            utility.enterInputInForm('textarea.gh-editor-title', postName);
        }
        else if (type == 'basic-tag') {
            utility.clickInOptionAction('button.post-settings');
            cy.wait(1000)
            utility.clickInOptionAction('span.ember-power-select-status-icon');
            cy.get('li.ember-power-select-option').then(($tags) => {
                for (let index = 0; index < $tags.length; index++) {
                    var tag = $tags.get(index);
                    if (tag.textContent.trim() == tagName) {
                        cy.wrap(tag).click({ force: true });
                        utility.enterInputInForm('textarea.gh-editor-title', postName);
                        break;
                    }
                }
            });
        }
        else if (type == 'basic-text-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', postName);
            utility.enterInputInForm('div.koenig-editor__editor', postText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            utility.clickButtonSave('button.gh-publishmenu-button');
        } else if (type == 'basic-text') {
            utility.enterInputInForm('textarea.gh-editor-title', postName);
            utility.enterInputInForm('div.koenig-editor__editor', postText);
        } else if (type == 'basic-tag-edit') {
            utility.clickInOptionAction('button.post-settings');
            cy.wait(1000)
            utility.clickInOptionAction('span.ember-power-select-status-icon');
            cy.get('li.ember-power-select-option').then(($tags) => {
                for (let index = 0; index < $tags.length; index++) {
                    var tag = $tags.get(index);
                    if (tag.textContent.trim() == tagName) {
                        cy.wrap(tag).click({ force: true });
                        utility.enterInputInForm('textarea.gh-editor-title', postName);
                        utility.enterInputInForm('div.koenig-editor__editor', postText);
                        break;
                    }
                }
            });
        }
    }

    checkPostTitle(position, title) {
        cy.get('ol.posts-list').then($ol => {
            var objectList = $ol.get(0);
            var li = objectList.querySelectorAll('li.gh-posts-list-item')[position]
            var link = li.querySelectorAll('a')[1];
            var header = link.querySelectorAll('h3')[0];
            expect(header.textContent.trim()).to.eql(title)
        });
    }

    checkPostIsDraft(position) {
        cy.get('ol.posts-list').then($ol => {
            var objectList = $ol.get(0);
            var li = objectList.querySelectorAll('li.gh-posts-list-item')[position]
            var link = li.querySelectorAll('a')[4];
            var span = link.querySelectorAll('span')[0];
            expect(span.textContent.trim()).to.eql('Draft')
        });
    }

    checkPostTag(position, tag) {
        cy.get('ol.posts-list').then($ol => {
            var objectList = $ol.get(0);
            var li = objectList.querySelectorAll('li.gh-posts-list-item')[position]
            var link = li.querySelectorAll('a')[1];
            var paraghap = link.querySelectorAll('p')[0];
            var spanParent = paraghap.querySelectorAll('span')[0];
            var span = spanParent.querySelectorAll('span')[1];
            expect(span.textContent.trim()).to.eql(tag)
        });
    }

    checkPublishedPostTitle(position, title) {
        var contador = 0;
        cy.get('ol.posts-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[4];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Published') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var header = link.querySelectorAll('h3')[0];
                        expect(header.textContent.trim()).to.eql(title)
                    }
                    contador++;
                }
            }
        });
    }

    navigateEditPostByTitle(title) {
        cy.wait(2000);
        cy.get('ol.posts-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[1];
                var header = link.querySelectorAll('h3')[0];
                if (header.textContent.trim() == title) {
                    cy.wrap(header).click({ force: true });
                }
            }
        });
    }

    deleteTagFromPost(tagName) {
        utility.clickInOptionAction('button.post-settings');
        cy.wait(1000)
        cy.document().then((doc) => {
            let $tags = doc.querySelectorAll('li.ember-power-select-multiple-option');
            if ($tags.length > 0) {
                for (let index = 0; index < $tags.length; index++) {
                    var tag = $tags[index];
                    if (tag.textContent.trim() == tagName) {
                        var span = tag.querySelectorAll('span')[0];
                        cy.wrap(span).click({ force: true });
                        utility.clickInOptionAction('button.settings-menu-header-action');
                    }
                }
    
            }
        });
    }

    publishPost(){
        utility.clickButtonSave('div.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickButtonSave('button.gh-publishmenu-button')
    }

}
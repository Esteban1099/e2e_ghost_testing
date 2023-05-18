import { Utility } from '../objects/utility';
const utility = new Utility();
import { HomePage } from '../objects/homePage';
const homePage = new HomePage();

export class PagePage {

    constructor() {
    }

    createPage(pageTitle, pageText) {
        homePage.navigateModule('editor/page');
        utility.enterInputInForm('textarea.gh-editor-title', pageTitle);
        utility.enterInputInForm('div.koenig-editor__editor', pageText);
        cy.wait(1000);
        utility.clickButtonSave('div.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickButtonSave('button.gh-publishmenu-button')
    }

    desingPageEr(type, pageName, pageText, tagName, screenFolder, screenName) {
        if (type == 'basic-text-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            utility.clickButtonSave('button.gh-publishmenu-button');
        } else if (type == 'basic-text-program-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            cy.document().then((doc) => {
                let buttonSchedule = doc.querySelectorAll('div.gh-publishmenu-radio-button')[1];
                cy.wrap(buttonSchedule).click({ force: true });
                utility.clickButtonSave('button.gh-publishmenu-button');
            });
        } else if (type == 'basic-text-tag') {
            utility.clickInOptionAction('button.post-settings');
            cy.wait(1000)
            utility.clickInOptionAction('span.ember-power-select-status-icon');
            cy.document().then((doc) => {
                let $tags = doc.querySelectorAll('li.ember-power-select-option');
                if ($tags.length > 0) {
                    for (let index = 0; index < $tags.length; index++) {
                        var tag = $tags[index];
                        if (tag.textContent.trim() == tagName) {
                            cy.wrap(tag).click({ force: true });
                            cy.wait(2000);
                            utility.takeScreenShot(screenFolder, screenName);
                            cy.wait(2000);
                            utility.enterInputInForm('textarea.gh-editor-title', pageName);
                            utility.enterInputInForm('div.koenig-editor__editor', pageText);
                            cy.wait(1000);
                            utility.clickButtonSave('div.gh-publishmenu-trigger');
                            cy.wait(1000);
                            utility.clickButtonSave('button.gh-publishmenu-button');
                            break;
                        }
                    }
                }
            });
        }
    }

    checkPublishedPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
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

    checkScheduledPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
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

    navigateEditPageByTitle(title) {

        let aux = "";
        let auxTag = "";

        cy.document().then((doc) => {
            let section = doc.querySelectorAll('ol.gh-list');
            if (section.length > 0) {
                var ol = section[0];
                var li = ol.querySelectorAll('li.gh-posts-list-item');
                if (li.length > 0) {
                    cy.document().then((doc) => {
                        let element = doc.querySelectorAll('h3.gh-content-entry-title');
                        if (element.length > 0) {
                            for (let index = 0; index < element.length; index++) {
                                aux = element[index].textContent.trim();
                                auxTag = element[index];
                                if (aux == title) {
                                    break;
                                }
                            }
                            expect(aux).to.eql(title);
                            cy.wrap(auxTag).click({ force: true });
                        }
                    });
                }
            }
        });
    }

    deletePage() {
        utility.clickInOptionAction('button.post-settings');
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-hover-red', false);
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-red', false);
    }

    checkScheduledPageTitleNotAtPosition(position, title) {
        var contador = 0;
        var headerText = "";
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var header = link.querySelectorAll('h3')[0];
                        headerText = header.textContent.trim();
                    }
                    contador++;
                }
            }
        });
        expect(headerText).to.not.to.eql(title)
    }

    checkPublishPageTag(position, tag) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Published') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var paraghap = link.querySelectorAll('p')[0];
                        var spanParent = paraghap.querySelectorAll('span')[0];
                        var span = spanParent.querySelectorAll('span')[1];
                        expect(span.textContent.trim()).to.eql(tag)
                    }
                    contador++;
                }
            }
        });
    }

    checkDraftPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Draft') {
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

    checkPublishedPage(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
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


    unpublishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-publishmenu-radio-button')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

    publishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

}

export class PagePageV2 {

    constructor() {
    }

    createPage(pageTitle, pageText) {
        homePage.navigateModule('editor/page');
        utility.enterInputInForm('textarea.gh-editor-title', pageTitle);
        utility.enterInputInForm('div.koenig-editor__editor', pageText);
        cy.wait(1000);
        utility.clickButtonSave('div.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickButtonSave('button.gh-publishmenu-button')
    }

    desingPageEr(type, pageName, pageText, tagName, screenFolder, screenName) {
        if (type == 'basic-text-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            utility.clickButtonSave('button.gh-publishmenu-button');
        } else if (type == 'basic-text-program-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            cy.document().then((doc) => {
                let buttonSchedule = doc.querySelectorAll('div.gh-publishmenu-radio-button')[1];
                cy.wrap(buttonSchedule).click({ force: true });
                utility.clickButtonSave('button.gh-publishmenu-button');
            });
        } else if (type == 'basic-text-tag') {
            utility.clickInOptionAction('button.post-settings');
            cy.wait(1000)
            utility.clickInOptionAction('span.ember-power-select-status-icon');
            cy.document().then((doc) => {
                let $tags = doc.querySelectorAll('li.ember-power-select-option');
                if ($tags.length > 0) {
                    for (let index = 0; index < $tags.length; index++) {
                        var tag = $tags[index];
                        if (tag.textContent.trim() == tagName) {
                            cy.wrap(tag).click({ force: true });
                            cy.wait(2000);
                            utility.takeScreenShot(screenFolder, screenName);
                            cy.wait(2000);
                            utility.enterInputInForm('textarea.gh-editor-title', pageName);
                            utility.enterInputInForm('div.koenig-editor__editor', pageText);
                            cy.wait(1000);
                            utility.clickButtonSave('div.gh-publishmenu-trigger');
                            cy.wait(1000);
                            utility.clickButtonSave('button.gh-publishmenu-button');
                            break;
                        }
                    }
                }
            });
        }
    }

    checkPublishedPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[1];
                var div = link.querySelectorAll('div')[0];
                var span = div.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Published') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[0];
                        var header = link.querySelectorAll('h3')[0];
                        expect(header.textContent.trim()).to.eql(title)
                    }
                    contador++;
                }
            }
        });
    }

    checkScheduledPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
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

    navigateEditPageByTitle(title) {

        let aux = "";
        let auxTag = "";

        cy.document().then((doc) => {
            let section = doc.querySelectorAll('ol.gh-list');
            if (section.length > 0) {
                var ol = section[0];
                var li = ol.querySelectorAll('li.gh-posts-list-item');
                if (li.length > 0) {
                    cy.document().then((doc) => {
                        let element = doc.querySelectorAll('h3.gh-content-entry-title');
                        if (element.length > 0) {
                            for (let index = 0; index < element.length; index++) {
                                aux = element[index].textContent.trim();
                                auxTag = element[index];
                                if (aux == title) {
                                    break;
                                }
                            }
                            expect(aux).to.eql(title);
                            cy.wrap(auxTag).click({ force: true });
                        }
                    });
                }
            }
        });
    }

    deletePage() {
        utility.clickInOptionAction('button.post-settings');
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-hover-red', false);
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-red', false);
    }

    checkScheduledPageTitleNotAtPosition(position, title) {
        var contador = 0;
        var headerText = "";
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var header = link.querySelectorAll('h3')[0];
                        headerText = header.textContent.trim();
                    }
                    contador++;
                }
            }
        });
        expect(headerText).to.not.to.eql(title)
    }

    checkPublishPageTag(position, tag) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Published') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var paraghap = link.querySelectorAll('p')[0];
                        var spanParent = paraghap.querySelectorAll('span')[0];
                        var span = spanParent.querySelectorAll('span')[1];
                        expect(span.textContent.trim()).to.eql(tag)
                    }
                    contador++;
                }
            }
        });
    }

    checkDraftPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Draft') {
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

    checkPublishedPage(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
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


    unpublishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-publishmenu-radio-button')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

    publishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

}

export class PagePageV3 {

    constructor() {
    }

    createPage(pageTitle, pageText) {
        homePage.navigateModule('editor/page');
        utility.enterInputInForm('textarea.gh-editor-title', pageTitle);
        utility.enterInputInForm('div.koenig-editor__editor', pageText);
        cy.wait(1000);
        utility.clickButtonSave('div.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickButtonSave('button.gh-publishmenu-button')
    }

    desingPageEr(type, pageName, pageText, tagName, screenFolder, screenName) {
        if (type == 'basic-text-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            utility.clickButtonSave('button.gh-publishmenu-button');
        } else if (type == 'basic-text-program-publish') {
            utility.enterInputInForm('textarea.gh-editor-title', pageName);
            utility.enterInputInForm('div.koenig-editor__editor', pageText);
            cy.wait(1000);
            utility.clickButtonSave('div.gh-publishmenu-trigger');
            cy.wait(1000);
            cy.document().then((doc) => {
                let buttonSchedule = doc.querySelectorAll('div.gh-publishmenu-radio-button')[1];
                cy.wrap(buttonSchedule).click({ force: true });
                utility.clickButtonSave('button.gh-publishmenu-button');
            });
        } else if (type == 'basic-text-tag') {
            utility.clickInOptionAction('button.post-settings');
            cy.wait(1000)
            utility.clickInOptionAction('span.ember-power-select-status-icon');
            cy.document().then((doc) => {
                let $tags = doc.querySelectorAll('li.ember-power-select-option');
                if ($tags.length > 0) {
                    for (let index = 0; index < $tags.length; index++) {
                        var tag = $tags[index];
                        if (tag.textContent.trim() == tagName) {
                            cy.wrap(tag).click({ force: true });
                            cy.wait(2000);
                            utility.takeScreenShot(screenFolder, screenName);
                            cy.wait(2000);
                            utility.enterInputInForm('textarea.gh-editor-title', pageName);
                            utility.enterInputInForm('div.koenig-editor__editor', pageText);
                            cy.wait(1000);
                            utility.clickButtonSave('div.gh-publishmenu-trigger');
                            cy.wait(1000);
                            utility.clickButtonSave('button.gh-publishmenu-button');
                            break;
                        }
                    }
                }
            });
        }
    }

    checkPublishedPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
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

    checkScheduledPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
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

    navigateEditPageByTitle(title) {

        let aux = "";
        let auxTag = "";

        cy.document().then((doc) => {
            let section = doc.querySelectorAll('ol.gh-list');
            if (section.length > 0) {
                var ol = section[0];
                var li = ol.querySelectorAll('li.gh-posts-list-item');
                if (li.length > 0) {
                    cy.document().then((doc) => {
                        let element = doc.querySelectorAll('h3.gh-content-entry-title');
                        if (element.length > 0) {
                            for (let index = 0; index < element.length; index++) {
                                aux = element[index].textContent.trim();
                                auxTag = element[index];
                                if (aux == title) {
                                    break;
                                }
                            }
                            expect(aux).to.eql(title);
                            cy.wrap(auxTag).click({ force: true });
                        }
                    });
                }
            }
        });
    }

    deletePage() {
        utility.clickInOptionAction('button.post-settings');
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-hover-red', false);
        cy.wait(1000);
        utility.clickButtonDelete('button.gh-btn-red', false);
    }

    checkScheduledPageTitleNotAtPosition(position, title) {
        var contador = 0;
        var headerText = "";
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Scheduled') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var header = link.querySelectorAll('h3')[0];
                        headerText = header.textContent.trim();
                    }
                    contador++;
                }
            }
        });
        expect(headerText).to.not.to.eql(title)
    }

    checkPublishPageTag(position, tag) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Published') {
                    if (contador == position) {
                        var link = li.querySelectorAll('a')[1];
                        var paraghap = link.querySelectorAll('p')[0];
                        var spanParent = paraghap.querySelectorAll('span')[0];
                        var span = spanParent.querySelectorAll('span')[1];
                        expect(span.textContent.trim()).to.eql(tag)
                    }
                    contador++;
                }
            }
        });
    }

    checkDraftPageTitleEr(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
                var span = link.querySelectorAll('span')[0];
                if (span.textContent.trim() == 'Draft') {
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

    checkPublishedPage(position, title) {
        var contador = 0;
        cy.get('ol.gh-list').then($ol => {
            var objectList = $ol.get(0);
            var items = objectList.querySelectorAll('li.gh-posts-list-item')
            for (let index = 0; index < items.length; index++) {
                var li = items[index];
                var link = li.querySelectorAll('a')[2];
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


    unpublishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-publishmenu-radio-button')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

    publishPage() {
        utility.clickInOptionAction('.gh-publishmenu-trigger')
        cy.wait(1000);
        utility.clickInOptionAction('.gh-btn-blue')
    }

}
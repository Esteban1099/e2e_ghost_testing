cy.faker = require('faker');

function loginGhost(username, password) {
  cy.document().then((doc) => {
    let $inputs = doc.querySelectorAll('[ name = identification]');
    if ($inputs.length > 0) {
      var randomInput = $inputs[0];
      if (!Cypress.dom.isHidden(randomInput) && !randomInput.disabled) {
        cy.wrap(randomInput).type(username, { force: true });
        cy.document().then((doc) => {
          let $inputs = doc.querySelectorAll('[ name = password ]');
          if ($inputs.length > 0) {
            var randomInput = $inputs[0];
            if (!Cypress.dom.isHidden(randomInput) && !randomInput.disabled) {
              cy.wrap(randomInput).type(password, { force: true });
              cy.document().then((doc) => {
                let $buttons = doc.querySelectorAll('button.login');
                if ($buttons.length > 0) {
                  var randomButton = $buttons[0];
                  if (!Cypress.dom.isHidden(randomButton) && !randomButton.disabled) {
                    cy.wrap(randomButton).click({ force: true });
                  }
                }
              });
            }
          }
        });
      }
    }
  });
}

function navigateModule(module) {
  cy.document().then((doc) => {
    let $modules = doc.querySelectorAll('a[href="#/' + module + '/"]');
    if ($modules.length > 0) {
      console.log($modules)
      var firtsModule = $modules[0];
      cy.wrap(firtsModule).click({ force: true });
    }
  });
}

function enterInputInForm(selector, value) {
  cy.document().then((doc) => {
    let $inputs = doc.querySelectorAll(selector);
    if ($inputs.length > 0) {
      var firstInput = $inputs[0];
      cy.get(selector).invoke('val', '');
      cy.wrap(firstInput).type(value, { force: true });
      outfocus();
    }
  });
}

function outfocus() {
  cy.get('body.ember-application').then($links => {
    var randomLink = $links.get(0);
    cy.wrap(randomLink).click({ force: true });
  });
}

function desingPost(type, postName, tagName, postText) {
  if (type == 'basic') {
    enterInputInForm('textarea.gh-editor-title', postName);
  }
  else if (type == 'basic-tag') {
    clickInOptionAction('button.post-settings');
    cy.wait(1000)
    clickInOptionAction('span.ember-power-select-status-icon');
    cy.document().then((doc) => {
      let $tags = doc.querySelectorAll('li.ember-power-select-option');
      if ($tags.length > 0) {
        for (let index = 0; index < $tags.length; index++) {
          var tag = $tags[index];
          if (tag.textContent.trim() == tagName) {
            cy.wrap(tag).click({ force: true });
            enterInputInForm('textarea.gh-editor-title', postName);
            break;
          }
        }

      }
    });
  }
  else if (type == 'basic-text-publish') {
    enterInputInForm('textarea.gh-editor-title', postName);
    enterInputInForm('div.koenig-editor__editor', postText);
    cy.wait(1000);
    clickButtonSave('div.gh-publishmenu-trigger');
    cy.wait(1000);
    clickButtonSave('button.gh-publishmenu-button');
  }
}

function checkPostTitle(position, title) {
  cy.get('ol.posts-list').then($ol => {
    var objectList = $ol.get(0);
    var li = objectList.querySelectorAll('li.gh-posts-list-item')[position]
    var link = li.querySelectorAll('a')[1];
    var header = link.querySelectorAll('h3')[0];
    expect(header.textContent.trim()).to.eql(title)
  });
}

function checkPublishedPostTitle(position, title) {
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

function checkPostTag(position, tag) {
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

function checkPostIsDraft(position) {
  cy.get('ol.posts-list').then($ol => {
    var objectList = $ol.get(0);
    var li = objectList.querySelectorAll('li.gh-posts-list-item')[position]
    var link = li.querySelectorAll('a')[4];
    var span = link.querySelectorAll('span')[0];
    expect(span.textContent.trim()).to.eql('Draft')
  });
}


function clickInOptionAction(option) {
  cy.get(option).then($links => {
    var randomLink = $links.get(0);
    cy.wrap(randomLink).click({ force: true });
  });
}

function activateCheckBox() {
  cy.get('input[type="checkbox"]').check({ force: true })
}

function clickButtonSave(selector) {
  cy.document().then((doc) => {
    let $buttons = doc.querySelectorAll(selector);
    if ($buttons.length > 0) {
      var randomButton = $buttons[0];
      if (!Cypress.dom.isHidden(randomButton) && !randomButton.disabled) {
        cy.wrap(randomButton).click({ force: true });
      }
    }
  });
}

function clickButtonDelete(selector, modal) {
  cy.document().then((doc) => {
    let $buttons = doc.querySelectorAll(selector);
    if ($buttons.length > 0) {
      if (modal) {
        var randomButton = $buttons[1];
        cy.get('section.modal-content').should('be.visible')
        cy.get(randomButton).eq(0).click({ force: true })
      } else {
        var randomButton = $buttons[0];
        cy.wrap(randomButton).click({ force: true });
      }
    }
  });
}

function findInListSection(selectorSection, selectorFind, dataFakerFind) {
  let aux = "";
  cy.document().then((doc) => {
    let section = doc.querySelectorAll(selectorSection);
    if (section.length > 0) {
      var ol = section[0];
      var li = ol.querySelectorAll('li');
      console.log('li', li)
      if (li.length > 0) {
        cy.document().then((doc) => {
          let element = doc.querySelectorAll(selectorFind);
          console.log('element', element)
          if (element.length > 0) {
            for (let index = 0; index < element.length; index++) {
              aux = element[index].textContent.trim();
              if (aux == dataFakerFind) {
                break;
              }
            }
            expect(aux).to.eql(dataFakerFind)
          }
        });
      }
    }
  });
}

function validateErrorMessage(selector) {
  cy.document().then((doc) => {
    let section = doc.querySelectorAll(selector);
    if (section.length > 0) {
      var errorMessageEmail = section[1];
      if (!Cypress.dom.isHidden(errorMessageEmail)) {
        cy.wrap(true);
      } else {
        return false;
      }
    }
  });

}

function optionTypeTag(selector, flag) {
  cy.document().then((doc) => {
    let $inputs = doc.querySelectorAll(selector);
    if ($inputs.length > 0) {
      var firstInput = $inputs[0];
      console.log(firstInput)
      var button = firstInput.querySelectorAll('button');
      console.log(button)
      if (flag) {
        cy.wrap(button[0]).click({ force: true });
      } else {
        cy.wrap(button[1]).click({ force: true });
      }
    }
  });
}

function createTag(tagName, tagDescription) {
  optionTypeTag('div.gh-contentfilter', false)
  cy.wait(1000);
  navigateModule('tags/new')
  cy.wait(1000);
  enterInputInForm('input[id="tag-name"]', `${tagName}`)
  cy.wait(500);
  enterInputInForm('textarea[id="tag-description"]', tagDescription)
  cy.wait(1000);
  clickButtonSave('button.gh-btn')
}


describe('E2E Test in ghost', () => {
  const emailLogin = 'reyes1099@outlook.com'
  const passLogin = 'Miso123456'
  const name = cy.faker.name.firstName();
  const email = cy.faker.internet.email();
  const tagName = cy.faker.lorem.word();
  const tagNameEdit = cy.faker.lorem.word();
  const tagDescription = cy.faker.lorem.lines();

  it('Feature: Create post - Scenario: Create draft post', () => {
    let postName = cy.faker.lorem.word();
    // Given I visit ghost
    cy.visit('http://localhost:2368/ghost/#/signin');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginGhost(emailLogin, passLogin);
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to members
    navigateModule('staff')
    // And I wait 1 seconds
    cy.wait(1000);
    // When I navigate to post
    navigateModule('posts')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to create post
    navigateModule('editor/post')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I desing post title 
    desingPost('basic', postName)
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to post
    navigateModule('posts')
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I expect to see the post at first on post list
    checkPostTitle(0, postName)
    // And I expect that first post on post list must be draft 
    checkPostIsDraft(0);
  });

  it('Feature: Create post - Scenario: Create draft post with tag', () => {
    let postName = cy.faker.lorem.word();
    let tagName = cy.faker.lorem.word();
    let tagDescription = cy.faker.lorem.lines();
    // Given I visit ghost
    cy.visit('http://localhost:2368/ghost/#/signin');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginGhost(emailLogin, passLogin);
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to tags
    navigateModule('tags');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I create a new tag
    createTag(tagName, tagDescription);
    //And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to tags
    navigateModule('tags')
    //And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to pages
    navigateModule('pages')
    // When I navigate to post
    navigateModule('posts');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to create post
    navigateModule('editor/post');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I desing post title and set post tag
    desingPost('basic-tag', postName, tagName);
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to post
    navigateModule('posts');
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I expect that first post on post list must has the title of the one I created
    checkPostTitle(0, postName);
    // And I expect that first post on post list must be draft 
    checkPostIsDraft(0);
    // And I expect that first post on post list must have the tag 
    checkPostTag(0, tagName)
  });

  it('Feature: Create post - Scenario: Create post and pusblish', () => {
    let postName = cy.faker.lorem.word();
    let tagName = cy.faker.lorem.word();
    let postText = cy.faker.lorem.lines();
    // Given I visit ghost
    cy.visit('http://localhost:2368/ghost/#/signin');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginGhost(emailLogin, passLogin);
    // And I wait 1 seconds
    cy.wait(1000);
    // When I navigate to post
    navigateModule('posts');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to create post
    navigateModule('editor/post');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I desing post title and set post tag
    desingPost('basic-text-publish', postName, tagName, postText);
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to post
    navigateModule('posts');
    // And I wait 1 seconds
    cy.wait(1000);
    // Then I expect that first post published on post list must has the title of the one I created
    checkPublishedPostTitle(0, postName);
  });

  // it('Feature: Create member | Scenario: Activate option and register member', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to labs
  //     navigateModule('settings/labs')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When i activate section members
  //     clickInOptionAction('.gh-setting-action')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I activate option members
  //     activateCheckBox()
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save configuration
  //     clickButtonSave('button.gh-btn')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('members')
  //     // And I wait 1 seconds
  //     cy.wait(1500);
  //     // And I navigate to new member
  //     navigateModule('members/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="member-name"]', name)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('input[id="member-email"]', email)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('members')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'p.gh-members-list-email', email)
  // });

  // it('Feature: Create member | Scenario: Register member', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('members')
  //     // And I wait 1 seconds
  //     cy.wait(1500);
  //     // And I navigate to new member
  //     navigateModule('members/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="member-name"]', name)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('input[id="member-email"]', name)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     cy.wait(1000);
  //     validateErrorMessage('p.response')
  //     // And I wait 1 seconds
  //     cy.wait(1500);
  //     enterInputInForm('input[id="member-email"]', email)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('members')
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'p.gh-members-list-email', email)
  // });

  // it('Feature: Create Tag | Scenario: create public tag', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     optionTypeTag('div.gh-contentfilter', true)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to new member
  //     navigateModule('tags/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="tag-name"]', tagName)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
  // });

  // it('Feature: Create Tag | Scenario: create internal tag', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     optionTypeTag('div.gh-contentfilter', false)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to new member
  //     navigateModule('tags/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="tag-name"]', `#${tagName}`)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     optionTypeTag('div.gh-contentfilter', false)
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
  // });

  // it('Feature: Create Tag | Scenario: Edit tag after creating', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     optionTypeTag('div.gh-contentfilter', true)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to new member
  //     navigateModule('tags/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="tag-name"]', tagName)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     enterInputInForm('input[id="tag-name"]', tagNameEdit)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //And I wait 1 seconds
  // cy.wait(1000);
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagNameEdit)
  // });

  // it('Feature: Create Tag | Scenario: Delete tag after creating', () => {
  //     // Given I visit ghost
  //     cy.visit('http://localhost:2368/ghost/#/signin');
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I login in ghost
  //     loginGhost(emailLogin, passLogin);
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     optionTypeTag('div.gh-contentfilter', true)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to new member
  //     navigateModule('tags/new')
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I fill the form input name
  //     enterInputInForm('input[id="tag-name"]', tagName)
  //     // And I wait 0.5 seconds
  //     cy.wait(500);
  //     // And I fill the form input email
  //     enterInputInForm('textarea[id="tag-description"]', tagDescription)
  //     // And I wait 1 seconds
  //     cy.wait(1000);
  //     // When I save member
  //     clickButtonSave('button.gh-btn')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     // And I verify member created in the list
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     clickButtonDelete('button.gh-btn-red', false)
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     clickButtonDelete('button.gh-btn-red', true)
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     // And I navigate to members
  //     navigateModule('tags')
  //     //And I wait 1 seconds
  //     cy.wait(1000);
  //     findInListSection('section.content-list', 'h3.gh-tag-list-name', tagName)
  // });

});

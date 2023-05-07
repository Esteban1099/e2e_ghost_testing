function loginGhost(username, password) {
  cy.document().then((doc) => {
    let $inputs = doc.querySelectorAll('[ name = identification]');
    if ($inputs.length > 0) {
      var input = $inputs[0];
      cy.wrap(input).type(username, { force: true });
      cy.document().then((doc) => {
        let $inputs = doc.querySelectorAll('[ name = password ]');
        if ($inputs.length > 0) {
          var input = $inputs[0];
          cy.wrap(input).type(password, { force: true });
          cy.document().then((doc) => {
            let $buttons = doc.querySelectorAll('button.login');
            if ($buttons.length > 0) {
              var button = $buttons[0];
              cy.wrap(button).click({ force: true });
            }
          });

        }
      });
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
      var firtsInput = $inputs[0];
      cy.wrap(firtsInput).type(value, { force: true });
      outfocus();
    }
  });
}

function outfocus() {
  cy.get('body.ember-application').then($app => {
    var body = $app.get(0);
    cy.wrap(body).click({ force: true });
  });
}

function desingPost(type){
  if(type == 'basic'){
    enterInputInForm('textarea.gh-editor-title', 'Miso');
  }
}

function getPost(position){
  cy.get('ol.posts-list gh-list').then($ol => {
    var li = $ol.get(position);
    return li;
  });
}

function getPostProperty(post, property){
  if(property == 'title'){
    post.get('a').then($links => {
      var link = $app.get(1);
      link.get('h3').then($headers => {
          var header = $headers.get(0);
      });
    });
  }
}


describe('E2E Test in ghost', () => {

  it('Feature: Create post - Scenario: Create draft post', () => {
    // Given I visit ghost
    cy.visit('http://localhost:2368/ghost/#/signin');
    // And I wait 1 seconds
    cy.wait(1000);
    // And I login in ghost
    loginGhost('reyes1099@outlook.com', 'Miso123456');
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
    desingPost('basic')
    // And I wait 1 seconds
    cy.wait(1000);
    // And I navigate to post
    navigateModule('posts')
    // Then I expect to see the post at first on post list
    expect(getPost(1)).to.eql({ name: 'Jane' })
    



  });


});
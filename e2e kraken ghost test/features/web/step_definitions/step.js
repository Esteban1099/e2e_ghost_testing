const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('.email');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('.password');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('.login');
    return await element.click();
});

When('I click member', async function() {
    let element = await this.driver.$("a[href='#/staff/']");
    return await element.click();
});

When('I click post', async function() {
    let element = await this.driver.$("a[href='#/posts/']");
    return await element.click();
});

When('I click new', async function() {
    let element = await this.driver.$('.gh-btn-green');
    return await element.click();
});

When('I click tags', async function() {
    let element = await this.driver.$("a[href='#/tags/']");
    return await element.click();
});

When('I click Pages', async function() {
    let element = await this.driver.$("a[href='#/pages/']");
    return await element.click();
});

When('I click Labs', async function() {
    let element = await this.driver.$('.gh-nav-settings > li:nth-child(6) > a');
    return await element.click();
});

When('I click members', async function() {
    let element = await this.driver.$("a[href='#/members/']");
    return await element.click();
});

When('I click Published', async function() {
    let element = await this.driver.$("a[href='#/posts/?type=published']");
    return await element.click();
});

When('I click on members option', async function() {
    let element = await this.driver.$("a[href='#/members/']");
    if(element.error != null){
	console.log("No existe");
	element = await this.driver.$('.gh-setting-desc');}
    return await element.click();
});

When('I active members', async function() {
    let element = await this.driver.$("a[href='#/members/']");
    console.log(element);
    if(element.error != null){
	console.log("No existe");
 	element = await this.driver.$('span.input-toggle-component');}
    return await element.click();
});


When('I leave', async function() {
    let element = await this.driver.$(".gh-btn-red");
    return await element.click();
});

Then('I click Design', async function() {
    let element = await this.driver.$("a[href='#/settings/design/']");
    return await element.click();
});

Then('I click ViewSite', async function() {
    let element = await this.driver.$("a[href='#/site/']");
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('.gh-editor-title');
    return await element.click();
  });

Then('I click on the post for back', async function () {
    let element = await this.driver.$("svg.w3");
    return await element.click();
  });

Then('I click on the redact name inputbox', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.click();
  });

Then('I click on the redact name member inputbox', async function () {
    let element = await this.driver.$('#member-name');
    return await element.click();
  });


Then('I click on the redact email inputbox', async function () {
    let element = await this.driver.$('#member-email');
    return await element.click();
  });

Then('I click on the redact description inputbox', async function () {
    let element = await this.driver.$('#tag-description');
    return await element.click();
  });

Then('I click save', async function () {
    let element = await this.driver.$('.gh-btn-blue');
    return await element.click();
  });

Then('I click save habilitar', async function () {
    let element = await this.driver.$('.gh-btn-blue');
    console.log(element);
    if(element.error != null){
	console.log("No existe");
     	element = await this.driver.$("a[href='#/members/']");}
    return await element.click();
  });

Then('I click pages', async function() {
    let element = await this.driver.$("a[href='#/pages/']");
    return await element.click();
});

Then('I click on the redact post inputbox', async function () {
    let element = await this.driver.$('.koenig-editor');
    return await element.click();
  });

Then('I click on settings', async function () {
    let element = await this.driver.$('.post-settings');
    return await element.click();
  });

Then('I click on list tags', async function () {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.click();
  });

Then('I click on link publish', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
  });

Then('I select first option', async function () {
    let element = await this.driver.$('div.settings-menu-content > form > div:nth-child(3) > div > div:nth-child(2) > div > ul.ember-power-select-options > li:nth-child(2)');
    return await element.click();
  });

Then('I delete text', async function () {
    let element = await this.driver.$('#member-email');
    await element.setValue("");
    return await element.click();
  });

Then('I clear message inputbox', async function () {
    let element = await this.driver.$('.gh-editor-title');
    await element.setValue("");
    return await element.click();
  });

Then('I add label', async function () {
    let element = await this.driver.$('div.gh-blognav-container > form > div:nth-child(2) > div > span.gh-blognav-label');
    return await element.click();
  });

Then('I add url', async function () {
    let element = await this.driver.$('div.gh-blognav-container > form > div:nth-child(2) > div > span.gh-blognav-url');
    return await element.click();
  });

Then('I click new site', async function () {
    let element = await this.driver.$('div.site-wrapper > header > div > div > nav > div.site-nav-left-wrapper > div > div > ul > li:last-child > a');
    return await element.click();
  });

Then('I click on the last post', async function () {
    let element = await this.driver.$('.content-list > ol > li:nth-child(2)');
    return await element.click();
  });

Then('I delete last Url', async function () {
    let element = await this.driver.$('div.gh-blognav-container > form > div:nth-child(1) > div:last-child > div > button');
    return await element.click();
  });

Then('I add secondary label', async function () {
    let element = await this.driver.$('.view-container > div:nth-child(4) > form > div:nth-child(2) > div > span.gh-blognav-label');
    return await element.click();
  });

Then('I add secondary url', async function () {
    let element = await this.driver.$('.view-container > div:nth-child(4) > form > div:nth-child(2) > div > span.gh-blognav-url');
    return await element.click();
  });

Then('I click new secondary site', async function () {
    let element = await this.driver.$('div.site-wrapper > header > div > div > nav > div.site-nav-right > ul > li:last-child > a');
    return await element.click();
  });

Then('I delete first tag', async function () {
    let element = await this.driver.$('div.settings-menu-content > form > div:nth-child(3) > div > div > ul.ember-power-select-multiple-options > li:first-child > span');
    return await element.click();
  });

  When('I click login', async function () {
    let element = await this.driver.$('.login');
    return await element.click();
});

When('I click create new tag', async function () {
    let element = await this.driver.$('.view-actions > a');
    return await element.click();
});

Then('I enter tag name {kraken-string}', async function (string) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(string);
});

Then('I enter internal tag name {kraken-string}', async function (string) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue("#" + string);
});


Then('I save tag', async function () {
    let element = await this.driver.$('.view-actions > button');
    return await element.click();
});

When('I click internal tags',  async function () {
    let element = await this.driver.$('section.view-actions > div > button:nth-child(2)')
    return await element.click();
});

When('I check tag {kraken-string}',  async function (string) {
    let tag = string.toLowerCase()
    let element = await this.driver.$("span[title='"+tag+"']");
    return await element.click();
});


When('I check internal tag {kraken-string}',  async function (string) {
    let tag = string.toLowerCase()
    let element = await this.driver.$("span[title='hash-"+tag+"']");
    return await element.click();
});

Then('I delete tag', async function () {
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

Then('I confirm delete', async function () {
    let element = await this.driver.$('.modal-footer > .gh-btn-red');
    return await element.click();
});


Then('I click new', async function() {
    let element = await this.driver.$('.gh-btn-green');
    return await element.click();
});

Then('I enter title {kraken-string}', async function (string) {
    let element = await this.driver.$('.gh-editor-title');
    return await element.setValue(string);
  });


  Then('I click on settings', async function () {
    let element = await this.driver.$('.post-settings');
    return await element.click();
  });

  Then('I close settings', async function () {
    let element = await this.driver.$('.close');
    return await element.click();
  });

  Then('I click on list tags', async function () {
    let element = await this.driver.$('.ember-power-select-trigger-multiple-input');
    return await element.click();
  });

Then('I click on link publish', async function () {
    let element = await this.driver.$('.gh-publishmenu-trigger');
    return await element.click();
  });

Then('I select first tag option', async function () {
    let element = await this.driver.$('div.settings-menu-content > form > div:nth-child(3) > div > div:nth-child(2) > div > ul.ember-power-select-options > li:nth-child(2)');
    return await element.click();
  });

  Then('I click save', async function () {
    let element = await this.driver.$('.gh-btn-blue');
    return await element.click();
  });

  Then('I click on the redact post inputbox', async function () {
    let element = await this.driver.$('.koenig-editor');
    return await element.click();
  });

  Then('I go back to pages', async function () {
    let element = await this.driver.$("a[href='#/pages/']")
    return await element.click();
  });

  Then('I go to last created page', async function () {
    let element = await this.driver.$("section.content-list > ol > li.gh-list-row:nth-child(2) > a:nth-child(2)");
    return await element.click();
  });

  Then('I check page {kraken-string}', async function (string) {
    let page = string.toLowerCase()
    let element = await this.driver.$("a[href$='"+page+"/']");
    if(element.error != null){
        return false;
    }
  });

  Then('I click on schedule', async function () {
    let element = await this.driver.$(".gh-publishmenu-section > div:nth-child(2) > .gh-publishmenu-radio-button");
    return await element.click();
  });

  Then('I change publication state', async function () {
    let element = await this.driver.$(".gh-publishmenu-section > div:nth-child(1) > .gh-publishmenu-radio-button");
    return await element.click();
  });

  Then('I click on delete', async function () {
    let element = await this.driver.$(".settings-menu-delete-button");
    return await element.click();
  });

  
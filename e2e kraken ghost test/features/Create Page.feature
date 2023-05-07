Feature: Crear Página

@user1 @web
Scenario: Escenario 1 Crear página y publicar
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    And I enter email "<GHOST_EMAIL>"
    And I wait for 1 seconds
    And I enter password "<GHOST_PASSWORD>"
    And I wait for 2 seconds
    And I click login
  When I navigate to page "http://localhost:2368/ghost/#/pages"
    And I click new
  Then I enter title "$name_1"
    And I click on the redact post inputbox
    And I click on link publish
    And I wait for 2 seconds
    And I click save
    And I wait for 1 seconds
    And I go back to pages
    And I wait for 10 seconds
    And I go to last created page
    And I click on settings
    And I check page "$$name_1"

@user2 @web
Scenario: Escenario 2 Programar creación de página
   Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 2 seconds
    And I enter email "<GHOST_EMAIL>"
    And I wait for 1 seconds
    And I enter password "<GHOST_PASSWORD>"
    And I wait for 2 seconds
    And I click login
  When I navigate to page "http://localhost:2368/ghost/#/pages"
    And I click new
  Then I enter title "$name_1"
    And I click on the redact post inputbox
    And I click on link publish
    And I wait for 1 seconds
    And I click on schedule
    And I wait for 2 seconds
    And I click save
    And I wait for 1 seconds
    And I go back to pages
    And I wait for 10 seconds
    And I go to last created page
    And I wait for 10 seconds
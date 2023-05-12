Feature: Member

@user1 @web
Scenario: Crear miembro
	Given I navigate to page "http://localhost:2368/ghost"
	And I wait for 5 seconds
	When I enter email "<USERNAME1>"
	And I save device snapshot in file with path "Members/Escenario_1/IngresarCorreo"
	And I wait for 5 seconds
	And I enter password "<PASSWORD1>"
	And I wait for 5 seconds
  	And I click next
	And I wait for 5 seconds
	And I click Labs
	And I wait for 5 seconds
	And I click on members option
	And I wait for 5 seconds
	And I active members
	And I wait for 2 seconds
	And I click save habilitar
	And I wait for 2 seconds
	And I click members
	And I wait for 5 seconds
	And I click new
	And I wait for 5 seconds
	Then I click on the redact name member inputbox
  	And I wait for 2 seconds
	And I enter text "Johanna 2"
  	And I wait for 2 seconds
	And I click on the redact email inputbox
  	And I wait for 2 seconds
	And I enter text "johana@hotmail.com"
  	And I wait for 2 seconds
	And I click save
	And I wait for 4 seconds
	And I click members
	And I wait for 5 seconds

@user2 @web
Scenario: Crear miembro con datos incorrectos
	Given I navigate to page "http://localhost:2368/ghost"
	And I wait for 5 seconds
	When I enter email "<USERNAME1>"
	And I save device snapshot in file with path "Members/Escenario_2/IngresarCorreo"
	And I wait for 5 seconds
	And I enter password "<PASSWORD1>"
	And I wait for 5 seconds
  	And I click next
	And I wait for 5 seconds
	And I click Labs
	And I wait for 5 seconds
	And I click on members option
	And I wait for 5 seconds
	And I active members
	And I wait for 2 seconds
	And I click save habilitar
	And I wait for 2 seconds
	And I click members
	And I wait for 5 seconds
	And I click new
	And I wait for 5 seconds
	Then I click on the redact name member inputbox
  	And I wait for 2 seconds
	And I enter text "Johanna correo mal"
  	And I wait for 4 seconds
	And I click on the redact email inputbox
  	And I wait for 2 seconds
	And I enter text "johana"
  	And I wait for 2 seconds
	And I click save
	And I wait for 4 seconds
	And I click on the redact email inputbox
  	And I wait for 2 seconds
	Then I delete text
	And I enter text "johanna@hotmail.com"
  	And I wait for 2 seconds
	And I click save
	And I wait for 4 seconds
	And I click members
	And I wait for 5 seconds
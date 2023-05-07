Feature: Edit Post

@user1 @web
Scenario: Crear y editar publicación
	Given I navigate to page "http://localhost:2368/ghost"
	And I wait for 5 seconds
	When I enter email "<USERNAME1>"
	And I wait for 5 seconds
	And I enter password "<PASSWORD1>"
	And I wait for 5 seconds
  	And I click next
	And I wait for 5 seconds
	And I click post
	And I wait for 5 seconds
	And I click new
	And I wait for 5 seconds
	And I click on the redact message inputbox
  	And I wait for 2 seconds
	And I enter text "Publicacion borrador edito para publicar"
  	And I wait for 4 seconds
	And I click on the redact post inputbox
  	And I wait for 2 seconds
	And I enter text "descripcion"
  	And I wait for 4 seconds
	And I click on the post for back
	And I wait for 4 seconds
	Then I click on the last post
	And I wait for 4 seconds
	And I click on link publish
	And I wait for 2 seconds
	And I click save
	And I wait for 4 seconds
	And I click on the post for back
	And I wait for 4 seconds

@user2 @web 
Scenario: Crear y editar borrador de publicación
	Given I navigate to page "http://localhost:2368/ghost"
	And I wait for 5 seconds
	When I enter email "<USERNAME1>"
	And I wait for 5 seconds
	And I enter password "<PASSWORD1>"
	And I wait for 5 seconds
  	And I click next
	And I wait for 5 seconds
	And I click post
	And I wait for 5 seconds
	And I click new
	And I wait for 10 seconds
	And I click on the redact message inputbox
  	And I wait for 10 seconds
	And I enter text "Publicacion borrador edito nombre"
  	And I wait for 10 seconds
	And I click on the redact post inputbox
  	And I wait for 5 seconds
	And I enter text "Se mantiene en borrador"
  	And I wait for 5 seconds
	And I click on the post for back
	And I wait for 4 seconds
	Then I click on the last post
	And I wait for 4 seconds
	And I click on the redact message inputbox
	And I clear message inputbox
	And I wait for 2 seconds
	And I enter text "Publicacion borrador edito nombre observa"
	And I wait for 2 seconds
	And I click on the redact post inputbox
	And I wait for 2 seconds
	And I click on the post for back
	And I wait for 4 seconds

@user3 @web
Scenario: Crear y editar borrador de publicación agregar etiqueta y editar etiqueta
	Given I navigate to page "http://localhost:2368/ghost"
	And I wait for 5 seconds
	When I enter email "<USERNAME1>"
	And I wait for 5 seconds
	And I enter password "<PASSWORD1>"
	And I wait for 5 seconds
  	And I click next
	And I wait for 5 seconds
	And I click tags
	And I wait for 5 seconds
	And I click new
	And I wait for 5 seconds
	And I click on the redact name inputbox
  	And I wait for 2 seconds
	And I enter text "tag kraken1"
  	And I wait for 4 seconds
	And I click on the redact description inputbox
  	And I wait for 2 seconds
	And I enter text "descripcion1"
  	And I wait for 4 seconds
	And I click save
	And I wait for 4 seconds
	And I click tags
	And I wait for 5 seconds
	And I click new
	And I wait for 5 seconds
	And I click on the redact name inputbox
  	And I wait for 2 seconds
	And I enter text "tag kraken2"
  	And I wait for 4 seconds
	And I click on the redact description inputbox
  	And I wait for 2 seconds
	And I enter text "descripcion2"
  	And I wait for 4 seconds
	And I click save
	And I wait for 4 seconds
	And I click pages
	And I wait for 5 seconds
	And I click post
	And I wait for 5 seconds
	And I click new
	And I wait for 10 seconds
	And I click on the redact message inputbox
  	And I wait for 5 seconds
	And I enter text "Edicion tag"
  	And I wait for 5 seconds
	And I click on the redact post inputbox
  	And I wait for 5 seconds
	And I enter text "Se ajustará tag"
  	And I wait for 5 seconds
	And I click on settings
  	And I wait for 2 seconds
	And I click on list tags
  	And I wait for 2 seconds
	And I enter text "tag kraken1"
  	And I wait for 4 seconds
	And I select first option
	And I wait for 4 seconds
	And I click on the redact message inputbox
  	And I wait for 2 seconds
	And I click on the post for back
	And I wait for 4 seconds
	And I leave
	And I wait for 4 seconds
	Then I click on the last post
	And I wait for 4 seconds
	And I click on settings
  	And I wait for 2 seconds
	And I click on list tags
  	And I wait for 2 seconds
	And I enter text "tag kraken2"
  	And I wait for 4 seconds
	And I select first option
	And I wait for 4 seconds
	And I click on the redact message inputbox
  	And I wait for 2 seconds
	And I click on settings
  	And I wait for 2 seconds
	And I click on the redact message inputbox
  	And I wait for 2 seconds
	And I click on the post for back
	And I wait for 4 seconds
	And I leave
	And I wait for 4 seconds
	
	
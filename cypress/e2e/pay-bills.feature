Feature: Pay Bills tests

    Feature Description where we inform about what kind of scenarios we want here.

    Scenario: Pay to saved Payee
    Given I log in to application
    And I navigate to 'Pay Bills' Tab
    When I populate all fields
    And Click 'Pay' button 
    Then Message: "The payment was successfully submitted." is displayed
    
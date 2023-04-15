Feature: Pay Bills tests

    Feature Description where we inform about what kind of scenarios we want here.

Background: 

    Given I log in to application
    And I navigate to 'Pay Bills' Tab

    Scenario Outline: Pay to saved Payee

    When I select "<Payee>" with "<Account>"
    And I populate all fields
    And Click 'Pay' button 
    Then Message: "The payment was successfully submitted." is displayed

    Examples:
        | Payee | Account |
        | Apple | Checking |
        |Bank of America|Loan|
    
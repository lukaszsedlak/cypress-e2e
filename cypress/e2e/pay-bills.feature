Feature: Pay bills

    In Pay Bills tab we have ability to ......

    Background:
    Given I'm logged in to application
    And I navigate to 'Pay Bills' tab

    Scenario Outline: Pay Saved Payee

    Given I select "<Payee>" with "<Account>" 
    And Start to type your And step here I populate all fields in form
    When I click 'Pay' button
    Then I see confirmation message: "The payment was successfully submitted."

    Examples:
        | Payee | Account |
        | Apple | Checking |
        |Bank of America|Loan|
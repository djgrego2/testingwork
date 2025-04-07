Feature: Eligibility Search Members

Scenario: Search a member by uniqueId
    Given a member with 'required-fields' is created
    And user logs in rxsense
    When user searches member by unique id
    Then the member should be displayed in the results number 0
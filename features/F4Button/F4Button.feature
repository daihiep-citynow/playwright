Feature: F4 Button Testing
  Scenario: visit homepage and press F4 Button
    When I visit homepage F4
    Then I should see a F4 Button
    Then I press F4 button first
    Then I can see 140 room
    Then I press F4 button second
    Then I can't see checkout room
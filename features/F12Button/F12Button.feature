Feature: F12 Button Testing
  Scenario: visit homepage and press F12 Button
    When I visit homepage F12
    Then I should see a F12 Button
    Then I press F12 button first
    Then I can see EN in F12 button
    Then I press F12 button second
    Then I can see VN in F12 button
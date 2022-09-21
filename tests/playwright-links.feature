Feature: Playwright website test
  Scenario: Playwright website links check
    Given User opens Playwright tool url:'https://playwright.dev/'
    When Website contains menu link 'API'
    Then Website link API has been opened
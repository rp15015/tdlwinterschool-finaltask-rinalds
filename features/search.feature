Feature: Search for a product

    @test2
    Scenario Outline: User should see only results that he searched
        Given I am on the home page
        When I input <keyword> in search
        And I click on search button
        # REVIEW: This should be a Then step
        And I see confirmation about search <keyword> element
        Then I see only <keyword> products on search page

    Examples: 
        | keyword |
        | "Blouse"|
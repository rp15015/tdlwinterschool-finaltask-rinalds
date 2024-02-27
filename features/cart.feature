Feature: Correct number count in the cart

    @test3
    Scenario: User should see the correct number of items in the cart
        Given I am on the home page
        When I select Women menu item
        And I select random product
        And I select quantity, size and color
        And I click Add to cart button
        Then I see correct number of items in the cart
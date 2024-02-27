Feature: Remove from the cart

    @test4
    Scenario: User removes an item from the cart, and it should be empty
        Given I am on the home page
        When I select Women menu item
        And I select random product
        And I select quantity, size and color
        And I click Add to cart button
        And I close the confirmation window
        And I click on the cart image
        And I click on item remove button
        Then I see (empty) message 
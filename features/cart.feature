Feature: Correct number count in the cart

    @test3
    Scenario: User should see the correct number of items in the cart
        Given I am on the home page
        When I select Women menu item
        # REVIEW: How do you know that a random product is in stock?
        And I select random product
        And I select quantity, size and color
        And I click Add to cart button
        # REVIEW: For me it didn't work without closing the popup window
        And I click Proceed to checkout button
        Then I see correct number of items in the cart
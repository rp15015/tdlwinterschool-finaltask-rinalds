Feature: Register before order

    @test1
    Scenario: User needs to create an account before ordering
        Given I am on the home page
        When I select Women menu item
        And I select random product
        And I select quantity, size and color
        And I click Add to cart button
        And I click Proceed to checkout button
        Then I see "Create an account" message
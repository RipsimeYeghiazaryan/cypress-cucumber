Feature: Forgot password

    Scenario: Check message of reset password popup
        Given Open the page
        Then Fill the email field with "testtesting123@gmail.com" email
            And Click on Forgot password link
        Then Check reset password popup opened
        When Fill the reset email field with "testtesting123@gmail.com" email
            And Click Reset password button
        Then Check the message

@Billing
Feature: To verify Response createGAM API

  Background: User generates token for Authorisation
    Given I am an authorized user

  Scenario Outline: The Authorised User Creating GAM by Hitting API
    Given I Set Billing Document API URL BASEPATH
    When  I pass the Query Parameters to the BasePath
    Then I should have the status code "201"
    Then content type should be in "JSON" format

    Examples:
      | disputeType | GAMType | EndPoint                                    |
      | DND         | AB      | phonograph-cdt/api/phonograph/billing-items |
      | FREIGHT     | AB24    | phonograph-cdt/api/phonograph/billing-items |


  Scenario Outline: the Authorized user can Add and Remove a book.
    Given I request Payload  "<invalid_GAMType>" Type Of Gam and "<invalid_disputeType>"
    When  I POST request for  "<invalid_GAMType>"
    And  The API call is success with status code 400
    Then I validate response content

    Examples:
      | invalid_disputeType | invalid_GAMType |
      | DND                 | AB241           |
      | FREIGHT             | AB242           |

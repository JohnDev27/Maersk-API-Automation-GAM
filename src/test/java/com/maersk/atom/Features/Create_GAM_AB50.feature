@CreateGAM
Feature: To verify Response createGAM API

  Background: User generates token for Authorisation
    Given I am an authorized user

  Scenario Outline: The Authorised User Creating GAM by Hitting API
    Given I request Payload  "<GAMType>" Type Of Gam and "<disputeType>"
    When  I Make a call to CreateGam "<EndPoint>"
    And  The API call is success with status code 200
    Then I validate response content

    Examples:
      | disputeType | GAMType | EndPoint                |
      | DND         | AB24    | /gam-v2-dev/api/v2/gam/ |
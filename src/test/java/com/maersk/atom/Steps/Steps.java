package com.maersk.atom.Steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.cucumber.java.en.Given;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class Steps extends TestBase {
    public static Response response;

    @Given("I am an authorized user")
    public void iAmAnAuthorizedUser() {
        GetAccessToken();
    }


    @Given("I request Payload  {string} Type Of Gam and {string}")
    public void iRequestPayloadTypeOfGamAnd(String disputeType, String GAMType) {
        RequestBody = RequestPayloads.CreateGAM(disputeType, GAMType);
        System.out.println(RequestBody);
    }

    @When("I Make a call to CreateGam {string}")
    public void iMakeACallToCreateGam(String CREATE_GAM_ENDPOINT) {
        response = given().spec(requestSpecification).log().all()
                .body(RequestBody).when().post(CREATE_GAM_ENDPOINT);


    }

    @And("The API call is success with status code {int}")
    public void theAPICallIsSuccessWithStatusCode(int StatusCode) {
        response.then().spec(responseSpecification).extract().response();
        System.out.println(response.getStatusCode());


    }

    @Then("I validate response content")
    public void iValidateResponseContent() {
        String responseString = response.asString();
        System.out.println(responseString);
    }

    @Given("I Set Billing Document API URL BASEPATH")
    public void iSetBillingDocumentAPIURLBASEPATH() {
        RestAssured.baseURI = BILLING_BASE_URL;
        //RestAssured.basePath = ;

    }

    @When("I pass the Query Parameters to the BasePath")
    public void iPassTheQueryParametersToTheBasePath() {
        boolean childRequired = true;
        long gpageSize = 15;
        int pageOffset = 0;

        RequestSpecification request = RestAssured.given();

        String response = request.queryParam("childRequired", childRequired)
                .queryParam("gpageSize",gpageSize)
                .queryParam("pageOffset",pageOffset)
                .post(BILLING_BASE_PATH).asString();

    }

    @Then("I should have the status code {string}")
    public void iShouldHaveTheStatusCode(String Status) {
        response.then().statusCode(Integer.parseInt(Status));
    }

    @Then("content type should be in {string} format")
    public void contentTypeShouldBeInFormat(String expected) {

//        if(expected.equals("JSON")){
//            response.then().assertThat().contentType(ContentType.JSON).and()
//                    .body(matchesJsonSchemaInClasspath("schema-json.json"));
//        }
    }


//
//    @When("I POST Request to {string} for {string} and {string}")
//    public void iPOSTRequestToForAnd(String EndPoint, String GAMType, String disputeType) {
//        {
//            Map<String, Object> headerMap = new HashMap<String, Object>();
//            headerMap.put("Authorization", "Authorization");
//
//            RestAssured.baseURI = "ht";
//            String response = given().log().all()
//                    .contentType(ContentType.JSON)
//                    .header("Authorization", AccessTaken)
//                    .header("Ocp-Apim-Subscription-Key", "9c5bd11dfb6b41f18c2f7d9c136bb59f")
//                    .body(RequestBody)
//                    .post(CREATEGAMPATH)
//                    .then().log().all().assertThat().statusCode(200).body("bodu", equalTo("JOH"))
//                    .extract().response().asString();
//            JsonPath jsonPath = Utils.toJson(response);
//            String responseValue = jsonPath.getString("key");
//
//
//        }
//
//        @And("The API call is success with status code {int}")
//        public void theAPICallIsSuccessWithStatusCode ( int status){
//
//        }
//
//        @Then("I validate response content")
//        public void iValidateResponseContent () {
//        }


}

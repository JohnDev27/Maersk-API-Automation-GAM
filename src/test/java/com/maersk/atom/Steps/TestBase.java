package com.maersk.atom.Steps;

import io.cucumber.java.en.Given;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import javafx.application.Application;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class TestBase {
    public static final String clientId = "93b27d5a-d38b-4822-b38b-6058190a46a2";
    public static final String clientSecret = "f1/F7Hx4Lc9bhL=Dbz.FI.8Uh0H-s9UY";
    //public static final String CREATE_GAM_ENDPOINT = "/gam-v2-dev/api/v2/gam/";
    public static final String OCP_APIM_Subscription_Key = "1c2dd5c55ad741f8bab6784eed0f37df";
    public static final String BASE_URL = "https://atom-dev-apis.azure-api.net";
    public static final String BILLING_BASE_URL = " https://atom-cdt-apis.azure-api.net";
    protected static final String Auth_BASE_URL = "https://account-api-services.dev.maersk-digital.net";
    protected static final String SOA_API = "/soa-dev/api/sap/statements";
    protected static final String BILLING_BASE_PATH = "/soa-dev/api/sap/statements";
    public static String AccessTaken;
    protected static Response response;
    public static String RequestBody;
    //public static RequestSpecification requestSpecification;


    public String GetAccessToken() {

        RestAssured.baseURI = Auth_BASE_URL;
        String response = given().log().all()
                .header("Accept", ContentType.JSON.getAcceptHeader())
                .contentType(ContentType.JSON)
                .body("{ \"clientId\":\"" + clientId + "\", \"clientSecret\":\"" + clientSecret + "\"}")
                .post("/api/login")
                .then().assertThat().statusCode(200)
                .extract().response().asPrettyString();

        JsonPath jsonPath = new JsonPath(response);
        AccessTaken = jsonPath.get("access_token");

        return AccessTaken;
    }


    RequestSpecification requestSpecification = new RequestSpecBuilder()

            .setBaseUri(BASE_URL)
            .addHeader("Authorization", GetAccessToken())
            .addHeader("Ocp-Apim-Subscription-Key", OCP_APIM_Subscription_Key)
            .addHeader("apiAuthorization", "apiAuthorization")
            .addHeader("Accept", "*/*")
            .setContentType(ContentType.JSON).build();


    ResponseSpecification responseSpecification = new ResponseSpecBuilder()
            .expectStatusCode(200)
            // .expectContentType(ContentType.ANY)
            .build();


}

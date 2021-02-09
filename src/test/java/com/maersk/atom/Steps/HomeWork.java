package com.maersk.atom.Steps;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Test;
import org.testng.Assert;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.requestSpecification;
import static org.hamcrest.Matchers.equalTo;

public class HomeWork {
    private static final String clientId = "93b27d5a-d38b-4822-b38b-6058190a46a2";
    private static final String clientSecret = "f1/F7Hx4Lc9bhL=Dbz.FI.8Uh0H-s9UY";
    private static final String CREATEGAMPATH = "/gam-v2-dev/api/v2/gam/";
    private static final String Auth_BASE_URL = "https://account-api-services.dev.maersk-digital.net";
    private static final String BASE_URL = "";
    private static String AccessTaken;
    private static Response response;

    public static void main(String args[]) {

        ;
        RestAssured.baseURI = Auth_BASE_URL;
        String response = given().spec(requestSpecification)
                .body("{ \"clientId\":\"" + clientId + "\", \"clientSecret\":\"" + clientSecret + "\"}")
                .post("/api/login")
                .then().assertThat().statusCode(200)
                .extract().response().asString();
        System.out.println(response);

        JsonPath jsonPath = new JsonPath(response);
        AccessTaken = jsonPath.get("access_token");
        System.out.println("Accesstoken is " + AccessTaken);
    }
}
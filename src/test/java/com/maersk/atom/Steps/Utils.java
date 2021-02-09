package com.maersk.atom.Steps;

import io.restassured.path.json.JsonPath;

import java.util.Random;

public class Utils {

    public static long GenerateGAMID() {
        Random r = new Random();
        return 1000000000 + (int) (r.nextDouble() * 999999999);
    }

    public static int generateCurrency() {
        Random r = new Random();
        return 1000 + (int) (r.nextDouble() * 9999);
    }

    public static JsonPath toJson(String response) {
        return new JsonPath(response);
    }

}

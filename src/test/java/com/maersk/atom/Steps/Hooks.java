package com.maersk.atom.Steps;
import io.cucumber.java.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {


    @Before
    public void setUp() {

    }

    @After
    public void tearDown(Scenario scenario) {

        try {

            if (scenario.isFailed()) {
                scenario.log(scenario.getName() + "this is my failure message");
            }
        } catch (Exception e) {

            e.printStackTrace();
        }

    }

}

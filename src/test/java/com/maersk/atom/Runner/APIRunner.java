package com.maersk.atom.Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/maersk/atom/Features",
        glue = {"com/maersk/atom/Steps"},
        tags = "@CreateGAM",
        plugin = {"pretty", "html:maersk-api-reports", "json:target/cucumber.json",
                "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
        dryRun = false,
        monochrome = true
)
public class APIRunner {

}

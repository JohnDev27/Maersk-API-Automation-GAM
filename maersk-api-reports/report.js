$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/maersk/atom/Features/Create_GAM_AB24.feature");
formatter.feature({
  "name": "To verify Response createGAM API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I request Payload  \"\u003cGAMType\u003e\" Type Of Gam and \"\u003cdisputeType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I Make a call to CreateGam \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "disputeType",
        "GAMType",
        "EndPoint"
      ]
    },
    {
      "cells": [
        "DND",
        "AB24",
        "/gam-v2-dev/api/v2/gam/"
      ]
    },
    {
      "cells": [
        "FREIGHT",
        "AB24",
        "/gam-v2-dev/api/v2/gam/"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB24\" Type Of Gam and \"DND\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Make a call to CreateGam \"/gam-v2-dev/api/v2/gam/\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iMakeACallToCreateGam(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:92)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$spec(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy:76)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy)\r\n\tat com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(Steps.java:37)\r\n\tat ✽.The API call is success with status code 200(file:///C:/Users/JDK028/Desktop/Maersk-API/src/test/java/com/maersk/atom/Features/Create_GAM_AB24.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("The Authorised User Creating GAM by Hitting APIthis is my failure message");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB24\" Type Of Gam and \"FREIGHT\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Make a call to CreateGam \"/gam-v2-dev/api/v2/gam/\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iMakeACallToCreateGam(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:92)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$spec(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy:76)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy)\r\n\tat com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(Steps.java:37)\r\n\tat ✽.The API call is success with status code 200(file:///C:/Users/JDK028/Desktop/Maersk-API/src/test/java/com/maersk/atom/Features/Create_GAM_AB24.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("The Authorised User Creating GAM by Hitting APIthis is my failure message");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "the Authorized user can Add and Remove a book.",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I request Payload  \"\u003cinvalid_GAMType\u003e\" Type Of Gam and \"\u003cinvalid_disputeType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I POST request for  \"\u003cinvalid_GAMType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The API call is success with status code 400",
  "keyword": "And "
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "invalid_disputeType",
        "invalid_GAMType"
      ]
    },
    {
      "cells": [
        "DND",
        "AB241"
      ]
    },
    {
      "cells": [
        "FREIGHT",
        "AB242"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the Authorized user can Add and Remove a book.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB241\" Type Of Gam and \"DND\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I POST request for  \"AB241\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The API call is success with status code 400",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the Authorized user can Add and Remove a book.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB242\" Type Of Gam and \"FREIGHT\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I POST request for  \"AB242\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "The API call is success with status code 400",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/maersk/atom/Features/Create_GAM_AB36.feature");
formatter.feature({
  "name": "To verify Response createGAM API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I request Payload  \"\u003cGAMType\u003e\" Type Of Gam and \"\u003cdisputeType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I Make a call to CreateGam \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "disputeType",
        "GAMType",
        "EndPoint"
      ]
    },
    {
      "cells": [
        "DND",
        "AB36",
        "/gam-v2-dev/api/v2/gam/"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB36\" Type Of Gam and \"DND\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Make a call to CreateGam \"/gam-v2-dev/api/v2/gam/\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iMakeACallToCreateGam(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:92)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$spec(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy:76)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy)\r\n\tat com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(Steps.java:37)\r\n\tat ✽.The API call is success with status code 200(file:///C:/Users/JDK028/Desktop/Maersk-API/src/test/java/com/maersk/atom/Features/Create_GAM_AB36.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("The Authorised User Creating GAM by Hitting APIthis is my failure message");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/com/maersk/atom/Features/Create_GAM_AB50.feature");
formatter.feature({
  "name": "To verify Response createGAM API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.scenarioOutline({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I request Payload  \"\u003cGAMType\u003e\" Type Of Gam and \"\u003cdisputeType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I Make a call to CreateGam \"\u003cEndPoint\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "disputeType",
        "GAMType",
        "EndPoint"
      ]
    },
    {
      "cells": [
        "DND",
        "AB24",
        "/gam-v2-dev/api/v2/gam/"
      ]
    }
  ]
});
formatter.background({
  "name": "User generates token for Authorisation",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am an authorized user",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iAmAnAuthorizedUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The Authorised User Creating GAM by Hitting API",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateGAM"
    }
  ]
});
formatter.step({
  "name": "I request Payload  \"AB24\" Type Of Gam and \"DND\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iRequestPayloadTypeOfGamAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Make a call to CreateGam \"/gam-v2-dev/api/v2/gam/\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iMakeACallToCreateGam(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The API call is success with status code 200",
  "keyword": "And "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validate(ResponseSpecificationImpl.groovy:92)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.spec(ValidatableResponseOptionsImpl.java:288)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$spec(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy:76)\r\n\tat io.restassured.internal.ValidatableResponseImpl.spec(ValidatableResponseImpl.groovy)\r\n\tat com.maersk.atom.Steps.Steps.theAPICallIsSuccessWithStatusCode(Steps.java:37)\r\n\tat ✽.The API call is success with status code 200(file:///C:/Users/JDK028/Desktop/Maersk-API/src/test/java/com/maersk/atom/Features/Create_GAM_AB50.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate response content",
  "keyword": "Then "
});
formatter.match({
  "location": "com.maersk.atom.Steps.Steps.iValidateResponseContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("The Authorised User Creating GAM by Hitting APIthis is my failure message");
formatter.after({
  "status": "passed"
});
});
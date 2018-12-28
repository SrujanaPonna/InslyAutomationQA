$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "Signup",
  "description": "",
  "id": "signup",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the signup page",
  "description": "",
  "id": "signup;validate-the-signup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigated to signup page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Sign up and Start Using title should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Browser_is_opened()"
});
formatter.result({
  "duration": 13026429596,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.User_navigated_to_signup_page()"
});
formatter.result({
  "duration": 9257020814,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.Sign_up_and_Start_Using_title_should_be_shown()"
});
formatter.result({
  "duration": 909896307,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Complete the Company Details in Signup page",
  "description": "",
  "id": "signup;complete-the-company-details-in-signup-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Company Details secion is available",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User fills in the details in company section",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "insly address should get filled in automatically and other details should get filled properly as per input",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Company_Details_section_is_available()"
});
formatter.result({
  "duration": 1093521501,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.User_fills_in_the_details_in_company_section()"
});
formatter.result({
  "duration": 1418082200,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.insly_address_should_get_filled_in_automatically_and_other_details_should_get_filled_properly_as_per_input()"
});
formatter.result({
  "duration": 2484858346,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Administrator Account Details",
  "description": "",
  "id": "signup;administrator-account-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Administrator Account Details Section is available",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User fills in all the data in administrator section",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "All the data should be filled in properly",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Administrator_Account_Details_Section_is_available()"
});
formatter.result({
  "duration": 568968650,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.User_fills_in_all_the_data_in_administrator_section()"
});
formatter.result({
  "duration": 7946364995,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.All_the_data_should_be_filled_in_properly()"
});
formatter.result({
  "duration": 116224171,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Terms and Conditions",
  "description": "",
  "id": "signup;terms-and-conditions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Terms and Conditions Section is available",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "we click on terms \u0026 conditions and privacy policy as per expectation after scrolling down",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Signup Button should get enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupSteps.Terms_and_Conditions_Section_is_available()"
});
formatter.result({
  "duration": 574721145,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.we_click_on_terms_conditions_and_privacy_policy_as_per_expectation_after_scrolling_down()"
});
formatter.result({
  "duration": 12225245649,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.Signup_Button_should_get_enabled()"
});
formatter.result({
  "duration": 419700844,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Signing up",
  "description": "",
  "id": "signup;signing-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "you click on sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Instance creation should be created and it should start to work as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "SignupSteps.you_click_on_sign_up_button()"
});
formatter.result({
  "duration": 4459843931,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.Instance_creation_should_be_created_and_it_should_start_to_work_as_expected()"
});
formatter.result({
  "duration": 32916588230,
  "status": "passed"
});
formatter.match({
  "location": "SignupSteps.close_the_Browser()"
});
formatter.result({
  "duration": 1241512384,
  "status": "passed"
});
});
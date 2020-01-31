<div class="new-page"/>
### Requirements-driven Testing (RT2)

The goal of this practice level is to perform implementation review to discover application-specific risks against the security requirements.

#### Activities

##### [Stream A] Define and run security test cases from requirements
<b>Benefit</b>: <i>Integration of security requirements into test scenarios</i>

From the security requirements, identify and implement a set of security test cases to check the software for correct functionality. To have a successful testing program, you must know the testing objectives, specified by the security requirements.

Derive security test cases for the applications in scope from the security requirements created as part of the "Security Requirements" SAMM security practice. To validate security requirements with security tests, security requirements are function-driven and highlight the expected functionality (the what) and, implicitly, the implementation (the how). These requirements are also referred to as "positive requirements", since they state the expected functionality that can be validated through security tests. Examples of positive requirements include “the application will lockout the user after six failed login attempts” or “passwords need to be a minimum of six alphanumeric characters”. The validation of positive requirements consists of asserting the expected functionality. You can do it re-creating the testing conditions and running the test according to predefined inputs. Show the results as as a fail or pass condition.

Often, it is most effective to use the project team’s time to build application-specific test cases, and publicly available resources or purchased knowledge bases to select applicable general test cases for security. Relevant development, security, and quality assurance staff review candidate test cases for applicability, efficacy, and feasibility. Derive the test cases during the requirements and/or design phase of the functionality. Testing the security requirements is part of the functional testing of the software.


###### Assessment Question(s)
Do you consistently write and execute test scripts to verify the functionality of security requirements?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- You tailor tests to each application and assert expected security functionality
- You capture test results as a pass or fail condition
- Tests use a standardized framework or DSL


##### [Stream B] Define and run security abuse cases from requirements
<b>Benefit</b>: <i>Detection of application business logic flaws</i>

Misuse and abuse cases describe unintended and malicious use scenarios of the application, describing how an attacker could do this. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application. Use abuse-case models for an application to serve as fuel for identification of concrete security tests that directly or indirectly exploit the abuse scenarios.

Abuse of functionality, sometimes referred to as a “business logic attack”, depends on the design and implementation of application functions and features. An example is using a password reset flow to enumerate accounts. As part of business logic testing, identify the business rules that are important for the application and turn them into experiments to verify whether the application properly enforces the business rule. For example, on a stock trading application, is the attacker allowed to start a trade at the beginning of the day and lock in a price, hold the transaction open until the end of the day, then complete the sale if the stock price has risen or cancel if the price dropped?


###### Assessment Question(s)
Do you create abuse cases from functional requirements and use them to drive security tests?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- Important business functionality has corresponding abuse cases
- You build abuse stories around relevant personas with well-defined motivations and characteristics
- You capture identified weaknesses as security requirements


---
business_functions : Verification
title : Requirements Testing
assignedto       : Nessim Kisserli
complete          : 50%
weight: 1
type: security_practice
---
# Short Description

Create and integrate both positive (control verification) and negative (misuse/abuse testing) security tests based on requirements (user stories).

# Long Description

Conduct positive and negative security tests to verify that the software operates as expected. At a minimum, this means both testing the correct functioning of the standard software security controls, and fuzzing for vulnerabilities against the main input parameters of the application.

From the known security requirements, identify and implement a set of security test cases to check the software for correct functionality. Use abuse-case models for an application to identify concrete security tests that directly or indirectly exploit the abuse scenarios. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application.

Write and automate regression tests for all identified and fixed bugs so these become a test harness preventing the introduction of in later releases. Security unit tests verify at run time that the components function as expected and validate that code changes are properly implemented.

A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework. Consider the passing of security tests as part of merge requirements before allowing new code to enter the main code base. Perform denial of service and security stress testing against the applications. Perform these tests under controlled circumstances and possibly on application acceptance environments.


# Overview

| | A: Control Verification | B: Misuse/Abuse Testing |
|:---|:---|:---|
| Maturity 1 - Opportunistically find basic vulnerabilities and other security issues. | Test for software security controls | Perform security fuzzing testing |
| Maturity 2 - Perform implementation review to discover application-specific risks against the security requirements. | Derive test cases from known security requirements | Create and test abuse cases and business logic flaw test |
| Maturity 3 - Maintain the application security level after bug fixes, changes or during maintenance. | Perform regression testing (with security unit tests) | Denial of service and security stress testing |


# A: Control Verification

## Maturity 1

### Benefit

Verifies that the standard software security controls operate as expected.

### Activity

Conduct security tests to verify that the standard software security controls operate as expected. At a high level, this means testing the correct functioning of the confidentiality, integrity, and availability controls of the data as well as the service. Security test cases at least include testing for authentication, access control, input validation, encoding, and escaping data and encryption controls. The test objective is to validate that the security controls are implemented with few or no vulnerabilities.

The security testing tests for software security controls that are relevant for the software under test. Perform control verification security tests manually or with tools each time the application changes its use of the controls. Software control verification is mandatory for all software that is part of the SAMM program. Review the tests regularly to include changes in the software technology and vulnerability trends.


#### Maturity Questions

{{< questions "Requirements Testing" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

Assures that security requirements are met by creating and performing tests derived from the requirements.

### Activity

From the security requirements, identify and implement a set of security test cases to check the software for correct functionality. To have a successful testing program, you must know the testing objectives, specified by the security requirements.

Derive security test cases for the applications in scope from the security requirements created as part of the "Security Requirements" SAMM security practice. To validate security requirements with security tests, security requirements are function-driven and highlight the expected functionality (the what) and, implicitly, the implementation (the how). These requirements are also referred to as "positive requirements", since they state the expected functionality that can be validated through security tests. Examples of positive requirements include “the application will lockout the user after six failed login attempts” or “passwords need to be a minimum of six alphanumeric characters”. The validation of positive requirements consists of asserting the expected functionality. You can do it re-creating the testing conditions and running the test according to predefined inputs. Show the results as as a fail or pass condition.

Often, it is most effective to use the project team’s time to build application-specific test cases, and publicly available resources or purchased knowledge bases to select applicable general test cases for security. Relevant development, security, and quality assurance staff review candidate test cases for applicability, efficacy, and feasibility. Derive the test cases during the requirements and/or design phase of the functionality. Testing the security requirements is part of the functional testing of the software.


### Maturity Questions

{{< questions "Requirements Testing" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Prevents identified (and fixed) bugs to be introduced as part of later releases through regression testing.

### Activity

Write and automate regression tests for all identified (and fixed) bugs to ensures that these become a test harness preventing similar issues to be introduced as part of later releases. Security unit tests should verify dynamically (i.e., at run time) that the components function as expected and should validate that code changes are properly implemented.

A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework. A generic security test suite might include security test cases to validate both positive and negative requirements for security controls such as Identity, Authentication & Access Control, Input Validation & Encoding, User and Session Management, Error and Exception Handling, Encryption, and Auditing and Logging. Consider the passing of security tests as part of merge requirements before allowing new code to enter the main code base.

Adapt unit test frameworks such as Junit, Nunit, and CUnit to verify security test requirements. For security functional tests, use unit level tests for the functionality of security controls at the software component level, such as functions, methods, or classes. For example, a test case could check input and output validation (e.g., variable sanitation) and boundary checks for variables by asserting the expected functionality of the component.


### Maturity Questions

{{< questions "Requirements Testing" "A" 3 >}}

#### Notes



# B: Misuse/Abuse Testing

## Maturity 1

### Benefit

Detect security bugs that would have often been missed by human eyes.

### Activity

During security tests, cover at least a minimum fuzzing for vulnerabilities against the main input parameters of the application.

Perform fuzzing, sending massive amounts of random data, to the test subject in an attempt to make it crash. Fuzz testing or Fuzzing is a Black Box software testing technique, which consists of finding implementation bugs using automated malformed or semi-malformed data injection.

The great advantage of fuzz testing is that the test design is extremely simple, and free of preconceptions about system behavior. The random approach allows this method to find bugs that human eyes would often miss. Plus, when the tested system is totally closed (say, a SIP phone), fuzzing is one of the only means of reviewing its quality.

Consider the use of automated fuzzing tools and build an application specific dictionary of fuzzing payloads like fault injection patterns, predictable resource locations, and regexes for matching server responses (you can start with open source dictionaries like FuzzDB*)


### Maturity Questions

{{< questions "Requirements Testing" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Detect business logic flaws or vulnerabilities thay allow functionality in the software to be abused.

### Activity

Misuse and abuse cases describe unintended and malicious use scenarios of the application, describing how an attacker could do this. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application. Use abuse-case models for an application to serve as fuel for identification of concrete security tests that directly or indirectly exploit the abuse scenarios.

Abuse of functionality, sometimes referred to as a “business logic attack”, depends on the design and implementation for application functions and features. As you add functionality to applications, think about how it can be manipulated to circumvent the business process, or abused to perform a function not intended by the developer. An example is using a password reset flow to enumerate accounts. As part of business logic testing, identify the business rules that are important for the application and turn them into experiments to verify whether the application properly enforces the business rule. For example, on a stock trading application, is the attacker allowed to start a trade at the beginning of the day and lock in a price, hold the transaction open until the end of the day, then complete the sale if the stock price has risen or cancel out if the price dropped?

While there are tools for testing and verifying that business processes are functioning correctly in valid situations, these tools are incapable of detecting logical vulnerabilities. For example, tools have no means of detecting if a user is able to circumvent the business process flow through editing parameters, predicting resource names, or escalating privileges to access restricted resources. There’s also no mechanism to help human testers suspect this.


### Maturity Questions

{{< questions "Requirements Testing" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Identifies functionality or resources in the sofware that can be abused to perform denial of service attacks.

### Activity

Applications are particularly susceptible to denial of service attacks. Perform denial of service and security stress testing against them. Perform these tests under controlled circumstances and on application acceptance environments, if possible.

Load testing tools, such as JMeter can generate web traffic so you can test certain aspects of how your site performs under heavy load. One important test is how many requests per second your application can field. Testing from a single IP address is useful as it will give you an idea of how many requests an attacker will have to generate in order to damage your site. To determine if any resources can be used to create a denial of service, analyze each one to see if there is a way to exhaust it. Focus on what an unauthenticated user can do but, unless you trust all of your users, examine what an authenticated user can do as well.

Denial of service tests can include tests that check
  * whether it is possible to cause a denial of service condition by overflowing one or more data structures of the target application. 
  * that the application properly releases resources (files and/or memory) after their use. 
  * whether an attacker can lock valid user accounts by repeatedly attempting to log in with a wrong password. 
  * whether it is possible to exhaust server resources by making it allocate a very large number of objects. 
  * whether it is possible to allocate big amounts of data into a user session object to make the server exhaust its memory resources. 
  * whether it is possible to force the application to loop through a code segment that needs high computing resources, to decrease its overall performance

Stress testing exposes software systems to simulated cyber attacks, revealing potential weaknesses and vulnerabilities in their implementation. Use them to discover these internal weaknesses and vulnerabilities early in the software development life cycle. Correct them prior to deployment for improved software quality. Complement overall denial of service tests with security stress tests to perform actions or create conditions which cause delays, disruptions, or failures of the application under test.


### Maturity Questions

{{< questions "Requirements Testing" "B" 3 >}}

#### Notes


---
business_functions : Verification
title : Requirements Driven Testing
assignedto       : Seba (seba@owasp.org)
complete          : 50%
status           : draft        #new, draft, for_review, release_candidate, done
business_functions_weight: 2
type: security_practice
---

# Overview

| | A: Control Verification | B: Misuse/Abuse Testing |
|:---|:---|:---|
| Maturity 1 - Opportunistically find basic vulnerabilities and other security issues. |  Test for standard security controls | Perform security fuzzing testing |
| Maturity 2 - Perform implementation review to discover application-specific risks against the security requirements. |  Derive test cases from known security requirements | Create and test abuse cases and business logic flaw test |
| Maturity 3 - Maintain the application security level after bug fixes, changes or during maintenance | Perform regression testing (with security unit tests) | Denial of service and security stress testing  |

# Overview

# A: Control Verification

## Maturity 1 - Test for standard security controls
### Activity
Conduct security tests to verify that the standard security controls operate as expected. At a high level, this means testing the correct functioning of the confidentiality, integrity, and availability controls of the data as well as the service.

Typically these will be security tests for controls that prevent the OWASP Top 10 (*) vulnerabilities. Test cases can be derived from the OWASP Testing Guide (*), OWASP ASVS (*) or the OWASP Top 10 Proactive Controls (*). Security test cases should at least include testing for authentication, access control, input validation, encoding and escaping data and encryption controls. The test objective is to validate that security controls are implemented with few or no vulnerabilities.

The security testing should test for standard security controls that are relevant for the application under test. The control verification security tests can be performed manually or with tools and should be performed each time the applications use of the controls is changed.

Security control verification should be considered mandatory for all applications that are part of the SAMM program. The tests should be regularly reviewed, to include changes in the application technology, and vulnerability trends. A


#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


#### References
https://www.owasp.org/index.php/OWASP_Proactive_Controls
https://www.owasp.org/index.php/Testing_Guide_Introduction
https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project




## Maturity 2 - Derive test cases from known security requirements
### Activity
From the known security requirements, identify and implement a set of test cases to check the software for correct functionality. To have a successful testing program, one must know what the testing objectives are. These objectives are specified by the security requirements.

Security test cases should be derived for the applications in scope from the security requirements that were created as part of the SAMM security practice "Security Requirements". In order to validate security requirements with security tests, security requirements need to be function driven and they need to highlight the expected functionality (the what) and implicitly the implementation (the how). These requirements are also referred to as “positive requirements”, since they state the expected functionality that can be validated through security tests. Examples of positive requirements are: “the application will lockout the user after six failed log on attempts” or “passwords need to be a minimum of six alphanumeric characters”. The validation of positive requirements consists of asserting the expected functionality and can be tested by re-creating the testing conditions and running the test according to predefined inputs. The results are then shown as as a fail or pass condition.

From the functionality perspective, the validation of security requirements is the main objective of security testing. From the risk management perspective, the validation of security requirements is the objective of information security assessments. At a high level, the main goal of information security assessments is the identification of gaps in security controls, such as lack of basic authentication, authorisation, or encryption controls. More in depth, the security assessment objective is risk analysis, such as the identification of potential weaknesses in security controls that ensure the confidentiality, integrity, and availability of the data.

From SAMM1.0:
From the known security requirements for a project, identify a set of test cases to check the software for correct functionality. Typically, these test cases are derived from security concerns surrounding the functional requirements and business logic of the system, but should also include generic tests for common vulnerabilities based on the implementation language or technology stack.

Often, it is most effective to use the project team’s time to build application-specific test cases and utilize publicly available resources or purchased knowledge bases to select applicable general test cases for security. Although not required, automated security testing tools can also be utilized to cover the general security test cases.

This test case planning should occur during the requirements and/or design phases, but must occur before final testing prior to release. Candidate test cases should be reviewed for applicability, efficacy, and feasibility by relevant development, security, and quality assurance staff.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
This activity depends on the security practice "Security Requirements".


## Maturity 3 - Perform regression testing (with security unit tests)
### Activity
Write and automate regression tests for all identified (and fixed) bugs to ensures that these specific bugs will not occur again. Security unit tests should verify dynamically (i.e., at run time) that the components function as expected and should validate that code changes are properly implemented.

A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework.vA generic security test suite might include security test cases to validate both positive and negative requirements for security controls such as: Identity, Authentication & Access Control, Input Validation & Encoding, User and Session Management, Error and Exception Handling, Encryption and Auditing and Logging.

Unit test frameworks such as Junit, Nunit, and CUnit can be adapted to verify security test requirements. In the case of security functional tests, unit level tests can test the functionality of security controls at the software component level, such as functions, methods, or classes. For example, a test case could validate input and output validation (e.g., variable sanitation) and boundary checks for variables by asserting the expected functionality of the component.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
include https://github.com/continuumsecurity/bdd-security ?
http://gauntlt.org/ reference?

# B: Misuse/Abuse Testing

## Maturity 1 - Perform security fuzzing testing
### Activity
Fuzzing can be part of a manual of automated security test, but this activity should cover at a minimum fuzzing for known vulnerabilities against the main input parameters of the application.

Perform fuzzing, sending massive amounts of random data, to the test subject in an attempt to make it crash. Fuzz testing or Fuzzing is a Black Box software testing technique, which basically consists in finding implementation bugs using malformed/semi-malformed data injection in an automated fashion.

The great advantage of fuzz testing is that the test design is extremely simple, and free of preconceptions about system behavior. The systematical/random approach allows this method to find bugs that would have often been missed by human eyes. Plus, when the tested system is totally closed (say, a SIP phone), fuzzing is one of the only means of reviewing it's quality.

Consider the use of automated fuzing tools and build an application specific dictionary of fuzzing payloads like fault injection patterns, predictable resource locations, and regexes for matching server responses (you can start with open source dictionaries like FuzzDB*)


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

#### References
https://www.owasp.org/index.php/Fuzzing
https://github.com/zaproxy/zap-core-help/wiki/HelpAddonsFuzzConcepts
https://github.com/fuzzdb-project/fuzzdb
https://www.owasp.org/index.php/OWASP_Testing_Guide_Appendix_C:_Fuzz_Vectors
https://en.wikipedia.org/wiki/Fuzzing

## Maturity 2 - Create and test abuse cases and business logic flaw test
### Activity
Similar to use cases, misuse and abuse cases [19] describe unintended and malicious use scenarios of the application. These misuse cases provide a way to describe scenarios of how an attacker could misuse and abuse the application. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application. Include at least one abuse case for every positive test case that is part of the unit tests. Use abuse-case models for an application to serve as fuel for identification of concrete security tests that directly or indirectly exploit the abuse scenarios.

Abuse of functionality, sometimes referred to as a "business logic attack", depends on the design and implementation for application functions and features. As functionality is added to applications, thought must be given to how the function or feature can be manipulated to circumvent the business process, or abused to perform a function not intended by the developer. An example may be: Using a password reset flow to enumerate accounts. As part of business logic testing, identify the business rules that are important for the application and turn them into experiments designed to verify whether the application properly enforces the business rule. For example, on a stock trading application is the attacker allowed to start a trade at the beginning of the day and lock in a price, hold the transaction open until the end of the day, then complete the sale if the stock price has risen or cancel out if the price dropped.

While there are tools for testing and verifying that business processes are functioning correctly in valid situations these tools are incapable of detecting logical vulnerabilities. For example, tools have no means of detecting if a user is able to circumvent the business process flow through editing parameters, predicting resource names or escalating privileges to access restricted resources nor do they have any mechanism to help the human testers to suspect this state of affairs.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

#### References
https://www.owasp.org/index.php/Testing_for_business_logic


## Maturity 3 - Denial of service and security stress testing
### Activity
Applications are particularly susceptible to denial of service attacks. Perform denial of service and security stress testing against the applications. These tests are performed under controlled circumstances and possibly on application acceptance environments.

Load testing tools, such as JMeter can generate web traffic so that you can test certain aspects of how your site performs under heavy load. Certainly one important test is how many requests per second your application can field. Testing from a single IP address is useful as it will give you an idea of how many requests an attacker will have to generate in order to damage your site.To determine if any resources can be used to create a denial of service, you should analyze each one to see if there is a way to exhaust it. You should particularly focus on what an unauthenticated user can do, but unless you trust all of your users, you should examine what an authenticated user can do as well.

Denial of service tests can include tests that check:
* whether it is possible to cause a denial of service condition by overflowing one or more data structures of the target application.
* that the application properly releases resources (files and/or memory) after they have been used.
* whether an attacker can lock valid user accounts by repeatedly attempting to log in with a wrong password.
* whether it is possible to exhaust server resources by making it allocate a very large number of objects.
* whether it is possible to allocate big amounts of data into a user session object in order to make the server exhaust its memory resources.
* whether it is possible to force the application to loop through a code segment that needs high computing resources, in order to decrease its overall performance

Stress testing exposes software systems to simulated cyber attacks, revealing potential weaknesses and vulnerabilities in their implementation. By using such testing, these internal weaknesses and vulnerabilities can be discovered earlier in the software development life cycle, corrected prior to deployment, and lead to improved software quality. Overall denial of service tests should be complemented with security stress tests to perform actions or create conditions which cause delays, disruptions, or failures of the application under test.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

#### References
https://www.owasp.org/index.php/Application_Denial_of_Service
https://www.owasp.org/index.php/Denial_of_Service_Cheat_Sheet
https://www.owasp.org/index.php/Testing_for_Denial_of_Service

---
title: Control Verification
type: stream
url: model/verification/requirements-driven-testing/stream-a/
business_function: Verification
business_function_url: verification
practice: Requirements-driven Testing
stream: A
description: Verification / Requirements-driven Testing
keywords: ["Business function", "Practice", "Verification", "Requirements-driven Testing"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Verifies that the standard software security controls operate as expected.
        activity: |
            Conduct security tests to verify that the standard software security controls operate as expected. At a high level, this means testing the correct functioning of the confidentiality, integrity, and availability controls of the data as well as the service. Security test cases at least include testing for authentication, access control, input validation, encoding, and escaping data and encryption controls. The test objective is to validate that the security controls are implemented with few or no vulnerabilities.

            The security testing validates the relevant software security controls. Perform control-verification security tests manually or with tools, each time the application changes its use of the controls. Techniques such as feature toggles and A/B testing can be used to progressively expose features to broader audiences as they are sufficiently validated. Software control verification is mandatory for all software that is part of the SAMM program. Review the tests regularly to include changes in the software technology and vulnerability trends.

        question: Do you test applications for the correct functioning of standard security controls?
        quality_criteria:
            - Security testing at least verifies the implementation of authentication, access control, input validation, encoding and escaping data, and encryption controls
            - Security testing executes whenever the application changes its use of the controls

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Assures that security requirements are met by creating and performing tests derived from the requirements.
        activity: |
            From the security requirements, identify and implement a set of security test cases to check the software for correct functionality. To have a successful testing program, you must know the testing objectives, specified by the security requirements.

            Derive security test cases for the applications in scope from the security requirements created as part of the "Security Requirements" SAMM security practice. To validate security requirements with security tests, security requirements are function-driven and highlight the expected functionality (the what) and, implicitly, the implementation (the how). These requirements are also referred to as "positive requirements", since they state the expected functionality that can be validated through security tests. Examples of positive requirements include “the application will lockout the user after six failed login attempts” or “passwords need to be a minimum of six alphanumeric characters”. The validation of positive requirements consists of asserting the expected functionality. You can do it re-creating the testing conditions and running the test according to predefined inputs. Show the results as as a fail or pass condition.

            Often, it is most effective to use the project team’s time to build application-specific test cases, and publicly available resources or purchased knowledge bases to select applicable general test cases for security. Relevant development, security, and quality assurance staff review candidate test cases for applicability, efficacy, and feasibility. Derive the test cases during the requirements and/or design phase of the functionality. Testing the security requirements is part of the functional testing of the software.

        question: Are the artifacts of the security requirements gathering process well defined and structured, with prioritization?
        quality_criteria:
            - You tailor tests to each application and assert expected security functionality
            - You capture test results as a pass or fail condition
            - Tests use a standardized framework or DSL

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level3:
        level: 3
        benefit: |
            Prevents identified (and fixed) bugs being introduced as part of later releases through regression testing.
        activity: |
            Write and automate regression tests for all identified (and fixed) bugs to ensure that these become a test harness preventing similar issues being introduced during later releases. Security unit tests should verify dynamically (i.e., at run time) that the components function as expected and should validate that code changes are properly implemented.

            A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework. A generic security test suite might include security test cases to validate both positive and negative requirements for security controls such as Identity, Authentication & Access Control, Input Validation & Encoding, User and Session Management, Error and Exception Handling, Encryption, and Auditing and Logging. Verify the correct execution of the security tests as early as possible. If feasible for example, consider the passing of security tests as part of merge requirements before allowing new code to enter the main code base. Alternatively, consider their passing a requirement for validating a build.

            For security functional tests, use unit level tests for the functionality of security controls at the software component level, such as functions, methods, or classes. For example, a test case could check input and output validation (e.g., variable sanitation) and boundary checks for variables by asserting the expected functionality of the component.

        question: Do you automatically test applications for security regressions?
        quality_criteria:
            - You consistently write tests for all identified bugs (possibly exceeding a pre-defined severity threshhold)
            - You collect security tests in a test suite that is part of the existing unit testing framework

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

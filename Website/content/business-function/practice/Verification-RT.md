---
title: Requirements-driven Testing
url: /model/verification/requirements-driven-testing/
business_function: "Verification"
business_function_url: "verification"
keywords: ["Business function", "Practice", "Requirements-driven Testing"]
type: practice

practice_maturity_1_description: Opportunistically find basic vulnerabilities and other security issues.
practice_maturity_2_description: Perform implementation review to discover application-specific risks against the security requirements.
practice_maturity_3_description: Maintain the application security level after bug fixes, changes or during maintenance.

stream_a: Control Verification

stream_a_maturity_1_activity: Test for software security controls
stream_a_maturity_2_activity: Derive test cases from known security requirements
stream_a_maturity_3_activity: Perform regression testing (with security unit tests)

stream_b: Misuse/Abuse Testing

stream_b_maturity_1_activity: Perform security fuzzing testing
stream_b_maturity_2_activity: Create and test abuse cases and business logic flaw test
stream_b_maturity_3_activity: Denial of service and security stress testing
---

Conduct positive and negative security tests to verify that the software operates as expected. At a minimum, this means both testing the correct functioning of the standard software security controls, and fuzzing for vulnerabilities against the main input parameters of the application. Note that the goal of Requirements-driven testing is to verify that an application correctly implements its requirements. These are often more functional in nature. The Security Testing practice on the other hand, aims to uncover technical and business-logic weaknesses, irrespective of requirements.

From the known security requirements, identify and implement a set of security test cases to check the software for correct functionality. Use abuse-case models for an application to identify concrete security tests that directly or indirectly exploit the abuse scenarios. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application.

Write and automate regression tests for all identified and fixed bugs so these become a test harness preventing the reintroduction of bugs in later releases. Security unit tests verify at run time that the components function as per requirements and validate that code changes are properly implemented.

A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework. Consider the passing of security tests as part of merge requirements before allowing new code to enter the main code base. Perform denial of service and security stress testing against the applications. Perform these tests under controlled circumstances and possibly on application acceptance environments.


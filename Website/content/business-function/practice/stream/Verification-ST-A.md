---
title: Scalable Baseline
type: stream
url: model/verification/security-testing/stream-a/
business_function: Verification
business_function_url: verification
practice: Security Testing
stream: A
description: Verification / Security Testing
keywords: ["Business function", "Practice", "Verification", "Security Testing"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Detect software vulnerabilities with automated security testing tools.
        activity: |
            Use automated static and dynamic security test tools for software, resulting in more efficient security testing and higher quality results. Gradually increase the frequency of security tests and extend code coverage.

            Many security vulnerabilities at the code level are complex to understand and require careful inspection for discovery. However, there are many useful source code analysis tools available to automatically analyze code for bugs and vulnerabilities.

            To dynamically test for security issues, you need to check a potentially large number of input cases against each software interface. This can make effective security testing using manual test case implementation and execution unwieldy. Use dynamic security test tools to automatically test software, resulting in more efficient security testing and higher quality results.

            There are both commercial and open-source products available to cover popular programming languages and frameworks. Select an appropriate code analysis solution based on several factors including depth and accuracy of inspection, robustness and accuracy of built-in security test cases, product usability and usage model, expandability and customization features, applicability to the organization’s architecture and technology stacks, quality and usability of findings to the development organization, etc.

            Use input from security-savvy technical staff as well as developers and development managers in the selection process, and review overall results with stakeholders.

        question: Do you scan applications with automated security testing tools?
        quality_criteria:
            - Inputs for security tests are dynamically generated using automated tools.
            - The security testing tools are chosen to fit the organization's architecture and technology stack, and balances depth and accuracy of inspection with usability of findings to the organization.

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Improves the efficiency and effectiveness of security testing automation by custumizing them towards the software.
        activity: |
            Project teams and their security and tool champions review security requirements and build a set of automated checkers to test the security of the implemented business logic. They do this through either customization of static and dynamic security testing tools, enhancements to generic test case execution tools, or buildout of custom test harnesses.

            Customize automated security testing tools to the specific software interfaces in the project under test for improved accuracy and depth of coverage. Codify organization-specific concerns from compliance or technical standards as a reusable, central test battery to make audit data collection and per-project management visibility simpler.

            Project teams focus on buildout of granular security test cases based on the business functionality of their software. A central software security group focuses on specification of automated tests for compliance and internal standards.

        question: Do you verify business logic with automated security tests, created from application security requirements?
        quality_criteria:
            - Tests are specifically customized for software interfaces in the project.
            - Tests and the security requirements they verify are expressed in a structured format, such as a DSL.
            - Tests include organization-specific technical standards and compliance concerns.

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level3:
        level: 3
        benefit: |
            Allows to detect software vulnerabilities at the speed of build and deployment by integrating test tools as part of this process.
        activity: |
            Projects within the organization routinely run automated security tests and review results during development. Configure security testing tools to automatically run as part of the build and deploy process to make this scalable with low overhead. Inspect findings as they occur.

            Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle, usually during design. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, lowering risk of release delays due to security concerns or forced acceptance of risk to meet project deadlines.

            For each project release, present results from automated and manual security tests to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. Review and improve the quality of the security tests as part of each release.

            Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organisation.

        question: Do you integrate automated security testing into the build and deploy process?
        quality_criteria:
            - Test results are tracked and reviewed by management and business stakeholders throughout the development cycle
            - Tests results are merged into a central dashboard and fed into defect management.

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

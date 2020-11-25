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
            Use automated static and dynamic security test tools for software, resulting in more efficient security testing and higher quality results. Progressively increase the frequency of security tests and extend code coverage.

            Application security testing can be performed statically, by inspecting an application's source code without running it, or dynamically by simply observing the application's behaviour in response to various input conditions. The former approach is often referred to as Static Application Security Testing (SAST), the latter as Dynamic Application Security Testing (DAST). A hybrid approach, known as Interactive Application Security Testing (IAST), combines the strengths of both approaches (at the cost of additional overhead) by dynamically testing automatically instrumented applications, allowing accurate monitoring of the application's internal state in response to external input.

            Many security vulnerabilties are very hard to detect without carefully inspecting the source code. While this is ideally performed by expert or peer review, it is a slow and expensive task. Although "noisier" and frequently less accurate than expert-led reviews, automated SAST tools are cheaper, much faster, and more consitent than humans. A number of commercial and free tools are able to efficiently detect sufficiently important bugs and vulnerabilities in large code bases.

            Dynamic testing does not require application source code, making it ideal for cases where source code is not available. It also identifies concrete instances of vulnerabilities. Due to its "black-box" approach , without instrumentation, it is more likely to uncover shallow bugs. Dynamic testing tools need a large source of test data whose manual test generation is prohibitive. Many tools exist which generate suitable test data automatically, leading to more efficient security testing and higher quality results.

            Select appropriate tools based on several factors, including depth and accuracy of inspection, robustness and accuracy of security test cases, available integrations with other tools, usage and cost model, etc. When selecting tools, use input from security-savvy technical staff as well as developers and development managers and review results with stakeholders.

        question: Do you scan applications with automated security testing tools?
        quality_criteria:
            - You dynamically generate inputs for security tests using automated tools
            - You choose the security testing tools to fit the organization's architecture and technology stack, and balance depth and accuracy of inspection with usability of findings to the organization

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Improves the efficiency and effectiveness of security testing automation by customizing them towards the software.
        activity: |
            Project teams and their security and tool champions review security requirements and build a set of automated checkers to test the security of the implemented business logic. They do this through either customization of static and dynamic security testing tools, enhancements to generic test case execution tools, or by extending custom test harnesses.

            Customize automated security testing tools to the specific software interfaces in the project under test for improved accuracy and depth of coverage. Codify organization-specific concerns from compliance or technical standards as a reusable, central test battery to make audit data collection and per-project management visibility simpler.

            Project teams focus on improving the number, granularity, and quality of security test cases based on the business functionality of their software. A central software security group focuses on specification of automated tests for compliance and internal standards.

        question: Do you automatically verify business logic with custom-created security tests?
        quality_criteria:
            - You specifically customize tests for software interfaces in the project
            - You express tests in a structured format, such as a DSL
            - Tests include organization-specific technical standards and compliance concerns

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

            Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, lowering risk of release delays due to security concerns or forced acceptance of risk to meet project deadlines.

            Make the results of automated and manual security tests visible via dashboards, and routinely present them to management and business stakeholders (e.g. before each release) for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. Continuously review and improve the quality of the security tests.

            Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organisation.

        question: Do you integrate automated security testing into the build and deploy process?
        quality_criteria:
            - Management and business stakeholders track and review test results throughout the development cycle
            - You merge test results into a central dashboard and feed them into defect management

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

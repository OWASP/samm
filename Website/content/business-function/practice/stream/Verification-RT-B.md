---
title: Misuse/Abuse Testing
type: stream
url: model/verification/requirements-driven-testing/stream-b/
business_function: Verification
business_function_url: verification
practice: Requirements-driven Testing
stream: B
description: Verification / Requirements-driven Testing
keywords: ["Business function", "Practice", "Verification", "Requirements-driven Testing"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Detect security bugs that would have been missed by human eyes.
        activity: |
            During security tests, cover at least a minimum fuzzing for vulnerabilities against the main input parameters of the application.

            Perform fuzzing, sending random or malformed data to the test subject in an attempt to make it crash. Fuzz testing or Fuzzing is a Black Box software testing technique, which consists of finding implementation bugs using automated malformed or semi-malformed data injection.

            The advantage of fuzz testing is the simplicity of the test design, and its lack of preconceptions about system behavior. The stochastic approach results in bugs that human eyes or structured testing would often miss. It is also one of the few means of assessing the quality of a closed system (such as a SIP phone). The simplicity of fuzzing a target is offset by the difficulty in accurately detecting and triaging crashes. Favour existing fuzzing tools and frameworks to leverage their supporting tooling.

        question: Do you test applications using randomization techniques?
        quality_criteria:
            - Testing covers most or all of the application's main input parameters
            - You record and inspect all application crashes for security impact on a best-effort basis

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level2:
        level: 2
        benefit: |
            Detect business logic flaws or vulnerabilities thay allow functionality in the software to be abused.
        activity: |
            Misuse and abuse cases describe unintended and malicious use scenarios of the application, describing how an attacker could do this. Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application. Use abuse-case models for an application to serve as fuel for identification of concrete security tests that directly or indirectly exploit the abuse scenarios.

            Abuse of functionality, sometimes referred to as a “business logic attack”, depends on the design and implementation of application functions and features. An example is using a password reset flow to enumerate accounts. As part of business logic testing, identify the business rules that are important for the application and turn them into experiments to verify whether the application properly enforces the business rule. For example, on a stock trading application, is the attacker allowed to start a trade at the beginning of the day and lock in a price, hold the transaction open until the end of the day, then complete the sale if the stock price has risen or cancel if the price dropped?

        question: Do you create abuse cases from functional requirements and use them to drive security tests?
        quality_criteria:
            - Important business functionality has corresponding abuse cases
            - You build abuse stories around relevant personas with well-defined motivations and characteristics
            - You capture identified weaknesses as security requirements

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level3:
        level: 3
        benefit: |
            Identifies functionality or resources in the sofware that can be abused to perform denial of service attacks.
        activity: |
            Applications are particularly susceptible to denial of service attacks. Perform denial of service and security stress testing against them in controlled conditiions, preferably on application acceptance environments.

            Load testing tools generate synthetic traffic, allowing you to test the application's performance under heavy load. One important test is how many requests per second an application can handle while remaining within its performance requirements. Testing from a single IP address is still useful as it gives an indication of how many requests an attacker must generate to impact the application.

            Denial of service attacks typically result in application resource starvation or exhaustion. To determine if any resources can be used to create a denial of service, analyze each application resource to see how it can be exhausted. Prioritise actions unauthenticated user can do. Complement overall denial of service tests with security stress tests to perform actions or create conditions which cause delays, disruptions, or failures of the application under test.

        question: Do you perform denial of service and security stress testing?
        quality_criteria:
            - Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)
            - You design tests around relevant personas with well-defined capabilities (knowledge, resources)
            - You feed the results back to the Design practices

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

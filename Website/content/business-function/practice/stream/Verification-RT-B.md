---
title: Misuse/Abuse Testing
type: stream
url: model/verification/requirements-testing/stream-b/
business_function: Verification
business_function_url: verification
practice: Requirements Testing
stream: B
description: Verification / Requirements Testing
keywords: ["Business function", "Practice", "Verification", "Requirements Testing"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Detect security bugs that would have often been missed by human eyes.
        activity: |
            During security tests, cover at least a minimum fuzzing for vulnerabilities against the main input parameters of the application.

            Perform fuzzing, sending massive amounts of random data, to the test subject in an attempt to make it crash. Fuzz testing or Fuzzing is a Black Box software testing technique, which consists of finding implementation bugs using automated malformed or semi-malformed data injection.

            The great advantage of fuzz testing is that the test design is extremely simple, and free of preconceptions about system behavior. The random approach allows this method to find bugs that human eyes would often miss. Plus, when the tested system is totally closed (say, a SIP phone), fuzzing is one of the only means of reviewing its quality.

            Consider the use of automated fuzzing tools and build an application specific dictionary of fuzzing payloads like fault injection patterns, predictable resource locations, and regexes for matching server responses (you can start with open source dictionaries like FuzzDB*)

        question: Do you test applications using randomization techniques?
        quality_criteria:
            - Testing covers most or all of the application's main input parameters
            - All application crashes are recorded and systematically inspected for security impact

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

            Abuse of functionality, sometimes referred to as a “business logic attack”, depends on the design and implementation for application functions and features. As you add functionality to applications, think about how it can be manipulated to circumvent the business process, or abused to perform a function not intended by the developer. An example is using a password reset flow to enumerate accounts. As part of business logic testing, identify the business rules that are important for the application and turn them into experiments to verify whether the application properly enforces the business rule. For example, on a stock trading application, is the attacker allowed to start a trade at the beginning of the day and lock in a price, hold the transaction open until the end of the day, then complete the sale if the stock price has risen or cancel out if the price dropped?

            While there are tools for testing and verifying that business processes are functioning correctly in valid situations, these tools are incapable of detecting logical vulnerabilities. For example, tools have no means of detecting if a user is able to circumvent the business process flow through editing parameters, predicting resource names, or escalating privileges to access restricted resources. There’s also no mechanism to help human testers suspect this.

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

        question: Do you perform denial of service and security stress testing?
        quality_criteria:
            - Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)
            - You design tests around relevant personas with well-defined capabilities (knowledge, resources)

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

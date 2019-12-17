---
title: Deep Understanding
type: stream
url: model/verification/security-testing/stream-b/
business_function: Verification
business_function_url: verification
practice: Security Testing
stream: B
description: Verification / Security Testing
keywords: ["Business function", "Practice", "Verification", "Security Testing"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Detect vulnerabilities that cannot by found with tools.
        activity: |
            Perform selective blackbox manual security testing, usually using a combination of open source automated utilities (static and dynamic) for performing hands-on analysis to attempt to further ‘hack’ the application as an attacker.

            Code-level vulnerabilities in security-critical parts of software can have dramatically increased impact so project teams review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, and input validators and data parsers.

            During development cycles where high-risk code is changed and reviewed, development managers triage the findings and prioritize remediation appropriately with input from other project stakeholders.

        question: Do you manually review the security quality of selected high-risk components?
        quality_criteria:
            - Criteria exist to help the reviewer to focus on high-risk components
            - Reviews are conducted by qualified personel following documented guidelines
            - Findings are addressed in accordance with the organisation's defect management policy

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Tests the robustness of the software by mimicking an attacker that tries to penetrate it.
        activity: |
            Using the set of security test cases identified for each project, conduct manual penetration testing to evaluate the system’s performance against each case. Generally, this happens during the testing phase prior to release and includes both static and dynamic manual penetration testing.

            Penetration testing cases include both application-specific tests to check soundness of business logic and common vulnerability tests to check the design and implementation. Once specified, security-savvy quality assurance or development staff can execute security test cases. The central software security group monitors first-time execution of security test cases for a project team to assist and coach the team security champions.

            Prior to release or deployment, stakeholders review results of security tests and accept the risks indicated by failing security tests at release time. Establish a concrete timeline to address the gaps over time. Spread the knowledge of manual security testing and the results across the development team to improve security knowledge and awareness inside the organisation.

        question: Do you perform penetration testing for your applications at regular intervals?
        quality_criteria:
            - Penetration testing uses application-specific security test cases to evaluate security
            - Penetration testing looks for both technical and logical issues in the application
            - Stakeholders review the test results and handle them in accordance with the organisation's risk management
            - Penetration testing is performed by qualified personel.

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level3:
        level: 3
        benefit: |
            Identify security issues earlier in the development process by testing security early and often.
        activity: |
            Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

            With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the development process, and findings should be inspected as they occur. Feed results from other security test activities into adding or improving the integrated security testing as part of development. For example, if a security penetration test identifies issues with session management, any changes to session management should trigger explicit security tests before pushing the changes to production.

            Security champions and the central secure software group review results from automated and manual security tests during development including these results as part of the security awareness trainings towards the development teams. Integrate lessons learned in overall playbooks to improve security testing as part of the organisation development. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.

        question: Do you use the results of security testing to improve the development lifecycle?
        quality_criteria:
            - You use results from other security activities to improve integrated security testing during development
            - You review test results and incorporate them into security awareness training and security testing playbooks
            - Stakeholders review the test results and handle them in accordance with the organisation's risk management

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

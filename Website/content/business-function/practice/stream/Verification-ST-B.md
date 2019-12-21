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
            Detect vulnerabilities that cannot be found with tools.
        activity: |
            Perform selective manual security testing, possibly using a combination of static and dynamic analysis tools to guide or focus the review, in order to more thoroughly analyze parts of the application, as an attacker. Automated tools are effective at finding various types of vulnerabilities but can never replace expert manual review.

            Code-level vulnerabilities in security-critical parts of software can have dramatically increased impact so project teams review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, and input validators and data parsers. Teams can combine code-level metrics and focused automated scans to determine where best to focus their efforts. In practice, the activity can take many forms including pair programming and peer review, time-boxed security "pushes" involving the entire development team, or spontaneous independent reviews by members of a specialised security group.

            During development cycles where high-risk code is changed and reviewed, development managers triage the findings and prioritize remediation appropriately with input from other project stakeholders.

        question: Do you manually review the security quality of selected high-risk components?
        quality_criteria:
            - Criteria exist to help the reviewer to focus on high-risk components
            - Reviews are conducted by qualified personnel following documented guidelines
            - Findings are addressed in accordance with the organisation's defect management policy

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Tests the robustness of the software by mimicking malicious users attacking it.
        activity: |
            Using the set of security test cases identified for each project, conduct manual penetration testing to evaluate the system’s performance against each case. Generally, this happens during the testing phase prior to release and includes both static and dynamic manual penetration testing. In cases where software cannot be realistically tested outside of production, use of techniques such as blue-green deployments or A/B testing can allow ring-fenced security testing in production.

            Penetration testing cases include both application-specific tests to check soundness of business logic, and common vulnerability tests to check the design and implementation. Once specified, security-savvy quality assurance or development staff can execute security test cases. The central software security group monitors first-time execution of security test cases for a project team to assist and coach the team security champions.

            Many organizations offer "Bug Bunty" programmes which invite security researchers to find vulnerabilties in applications and report them responsibly in exchange for rewards. The approach allows organisations to access a bigger pool of talent, especially those lacking sufficient internal capacity or requiring the additional assurance.

            Prior to release or mass deployment, stakeholders review results of security tests and accept the risks indicated by failing security tests at release time. Establish a concrete timeline to address the gaps over time. Spread the knowledge of manual security testing and the results across the development team to improve security knowledge and awareness inside the organisation.

        question: Do you perform penetration testing for your applications at regular intervals?
        quality_criteria:
            - Penetration testing uses application-specific security test cases to evaluate security
            - Penetration testing looks for both technical and logical issues in the application
            - Stakeholders review the test results and handle them in accordance with the organisation's risk management
            - Penetration testing is performed by qualified personnel.

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

            With the multiplicity of security tools running at every phase of development, remediating security issues at a designated stage (such as pre-release testing) is no longer appropriate or desirable. Security issues must be quickly triaged and fixes planned in a tradeoff between risk and cost of remediation. Continuously striving to detect issues earlier in the development lifecycle, via specific, low-friction automated tests integrated into development tools and build processes, lowers the cost of remediation thereby increasing the likelihood of issues being quickly resolved.

            Proactively improve the security testing effort integrated into the development process by adequately propagating the results of other security test activities. For example, if a security penetration test identifies issues with session management, any changes to session management should trigger explicit security tests before pushing the changes to production.

            Security champions and the central secure software group continuously review results from automated and manual security tests during development, including these results as part of the security awareness trainings for the development teams. Integrate lessons learned in overall playbooks to improve security testing as part of the organisation development. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.

        question: Do you use the results of security testing to improve the development lifecycle?
        quality_criteria:
            - You use results from other security activities to improve integrated security testing during development
            - You review test results and incorporate them into security awareness training and security testing playbooks
            - Stakeholders review the test results and handle them in accordance with the organization's risk management

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

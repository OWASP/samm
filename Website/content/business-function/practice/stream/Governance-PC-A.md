---
title: Policy & Standards
type: stream
url: model/governance/policy-and-compliance/stream-a/
business_function: Governance
business_function_url: governance
practice: Policy & Compliance
stream: A
description: Governance / Policy & Compliance
keywords: ["Business function", "Practice", "Governance", "Policy & Compliance"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Have a common set of policies and standards within your organization.
        activity: |
            Develop a library of policies and standards to govern all aspects of software development in the organization. Policies and standards are based on existing industry standards and appropriate for the organization’s industry. Due to the full range of technology-specific limitations and best practices, review proposed standards with the various product teams. With the overarching objective of increasing security of the applications and computing infrastructure, invite product teams to offer feedback on any aspects of the standards that would not be feasible or cost-effective to implement, as well as opportunities for standards to go further with little effort on the product teams.

            For policies, emphasize high-level definitions and aspects of application security that do not depend on specific technology or hosting environment. Focus on broader objectives of the organization to protect the integrity of its computing environment, safety and privacy of the data, and maturity of the software development life-cycles. For larger organizations, policies may qualify specific requirements based on data classification or application functionality, but should not be detailed enough to offer technology-specific guidance.

            For standards, incorporate requirements set forth by policies, and focus on technology-specific implementation guidance intended to capture and take advantage of the security features of different programming languages and frameworks. Standards require input from senior developers and architects considered experts in various technologies in use by the organization. Create them in a format that allows for periodic updates. Label or tag individual requirements with the policy or a 3rd party requirement, to make maintenance and audits easier and more efficient.

        question: Do you have and apply a common set of policies and standards throughout your organization?
        quality_criteria:
            - You have adapted existing standards appropriate for the organization’s industry to account for domain-specific considerations
            - Your standards are aligned with your policies and incorporate technology-specific implementation guidance

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Have clearly defined evaluation methods to test for adherence to policies and standards.
        activity: |
            To assist with the ongoing implementation and verification of compliance with policies and standards, develop application security and appropriate test scripts related to each applicable requirement. Organize these documents into libraries and make them available to all application teams in formats most conducive for inclusion into each application. Clearly label the documents and link them to the policies and standards they represent, to assist with the ongoing updates and maintenance. Version policies and standards and include detailed change logs with each iterative update to make ongoing inclusion into different products’ SDLC easier.

            Write application security requirements in a format consistent with the existing requirements management processes. You may need more than one version catering to different development methodologies or technologies. The goal is to make it easy for various product teams to incorporate policies and standards into their existing development life-cycles needing minimal interpretation of requirements.

            Test scripts help reinforce application security requirements through clear expectations of application functionality, and guide automated or manual testing efforts that may already be part of the development process. These efforts not only help each team establish the current state of compliance with existing policies and standards, but also ensure compliance as applications continue to change.

        question: Do you publish the organization's policies as test scripts or run-books for easy interpretation by development teams?
        quality_criteria:
            - You create verification checklists and test scripts where applicable, aligned with the policy's requirements and the implementation guidance in the associated standards
            - You create versions adapted to each development methodology and technology the organization uses

        answers:
            - "No"
            - Yes, some content has been updated
            - Yes, at least half of the content
            - Yes, most or all of the content

    level3:
        level: 3
        benefit: |
            Understand your organization’s compliance towards policies and standards.
        activity: |
            Develop a program to measure each application’s compliance with existing policies and standards. Mandatory requirements should be motivated and reported consistently across all teams. Whenever possible, tie compliance status into automated testing and report with each version. Compliance reporting includes the version of policies and standards and appropriate code coverage factors.

            Encourage non-compliant teams to review available resources such as security requirements and test scripts, to ensure non-compliance is not a result of inadequate guidance. Forward issues resulting from insufficient guidance to the teams responsible for publishing application requirements and test scripts, to include them in the future releases. Escalate issues resulting from the inability to meet policies and standards the teams that handle application security risks.

        question: Do you regularly report on policy and standard compliance, and use that information to guide compliance improvement efforts?
        quality_criteria:
            - You have procedures (automated, if possible) to regularly generate compliance reports
            - You deliver compliance reports to all relevant stakeholders
            - Stakeholders use the reported compliance status information to identify areas for improvement

        answers:
            - "No"
            - Yes, but review is ad-hoc
            - Yes, we review it every two years or so
            - Yes, we review it at least annually

---

---
title: Compliance Management
type: stream
url: model/governance/policy-and-compliance/stream-b/
business_function: Governance
business_function_url: governance
practice: Policy & Compliance
stream: B
description: Governance / Policy & Compliance
keywords: ["Business function", "Practice", "Governance", "Policy & Compliance"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Have a common understanding of external compliance requirements.
        activity: |
            Create a comprehensive list of all compliance requirements, including any triggers that could help determine which applications are in scope. Compliance requirements may be considered in scope based on factors such as geographic location, types of data, or contractual obligations with clients or business partners. Review each identified compliance requirement with the appropriate experts and legal, to ensure the obligation is understood. Since many compliance obligations vary in applicability based on how the data is processed, stored, or transmitted across the computing environment, compliance drivers should always indicate opportunities for lowering the overall compliance burden by changing how the data is handled.

            Evaluate publishing a compliance matrix to help identify which factors could put an application in scope for a specific regulatory requirement. Have the matrix indicate which compliance requirements are applicable at the organization level and do not depend on individual applications. The matrix provides at least a basic understanding of useful compliance requirements to review obligations around different applications.

            Since many compliance standards are focused around security best-practices, many compliance requirements may already be a part of the Policy and Standards library published by the organization. Therefore, once you review compliance requirements, map them to any applicable existing policies and standards. Whenever there are discrepancies, update the policies and standards to include organization-wide compliance requirements. Then, begin creating compliance-specific standards only applicable to individual compliance requirements. The goal is to have a compliance matrix that indicates which policies and standards have more detailed information about compliance requirements, as well as ensure individual policies and standards reference applicable compliance requirements.

        question: Do you have a complete picture of your external compliance obligations?
        quality_criteria:
            - You have identified all sources of external compliance obligations
            - You have captured and reconciled compliance obligations from all sources

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Have a standard set of requirements for 3rd party compliance.
        activity: |
            Develop a library of application requirements and test scripts to establish and verify regulatory compliance of applications. Some of these are tied to individual compliance requirements like PCI or GDPR, while others are more general in nature and address global compliance requirements such as ISO. The library is available to all application development teams. It includes guidance for determining all applicable requirements including considerations for reducing the compliance burden and scope. Implement a process to periodically re-assess each application’s compliance requirements. Re-assessment includes reviewing all application functionality and opportunities to reduce scope to lower the overall cost of compliance.

            Requirements include enough information for developers to understand functional and non-functional requirements of the different compliance obligations. They include references to policies and standards, and provide explicit references to regulations. If there are questions about the implementation of a particular requirement, the original text of the regulation can help interpret the intent more accurately. Each requirement includes a set of test scripts for verifying compliance. In addition to assisting QA with compliance verification, these can help clarify compliance requirements for developers and make the compliance process transparent. Requirements have a format that allows importing them into individual requirements repositories. further clarify compliance requirements for developers and ensure the process of achieving compliance is fully transparent.

        question: Do you have a standard set of security requirements and verification procedures addressing the organization's external compliance obligations?
        quality_criteria:
            - You map each external compliance obligation to a well-defined set of application requirements
            - You define verification procedures, including automated tests, to verify compliance with compliance-related requirements

        answers:
            - "No"
            - Yes, some content has been updated
            - Yes, at least half of the content
            - Yes, most or all of the content

    level3:
        level: 3
        benefit: |
            Have an understanding of your organization’s adherence to 3rd party compliance requirements.
        activity: |
            Develop a program for measuring and reporting on the status of compliance between different applications. Application requirements and test scripts help determine the status of compliance. Leverage testing automation to promptly detect compliance regressions in frequently updated applications and ensure compliance is maintained through the different application versions. Whenever fully automated testing is not possible, QA, Internal Audit, or Information Security teams assess compliance periodically through a combination of manual testing and interview.

            While full compliance is always the ultimate goal, include tracking remediation actions and periodic updates in the program. Review compliance remediation activities periodically to check teams are making appropriate progress, and that remediation strategies will be effective in achieving compliance. To further improve the process, develop a series of standard reports and compliance scorecards. These help individual teams understand the current state of compliance, and the organization manage assistance for remediating compliance gaps more effectively.

            Review compliance gaps requiring significant expenses or development with the subject-matter experts and compare them against the cost of reducing the application’s functionality, minimizing scope or eliminating the compliance requirement. longterm compliance gaps require management approval and a formal compliance risk acceptance, so they receive appropriate attention and scrutiny from the organization’s leadership.

        question: Do you regularly report on adherence to external compliance obligations and use that information to guide efforts to close compliance gaps?
        quality_criteria:
            - You have established, well-defined compliance metrics
            - You measure and report on applications' compliance metrics regularly
            - Stakeholders use the reported compliance status information to identify compliance gaps and prioritize gap remediation efforts

        answers:
            - "No"
            - Yes, but review is ad-hoc
            - Yes, we review it every two years or so
            - Yes, we review it at least annually

---

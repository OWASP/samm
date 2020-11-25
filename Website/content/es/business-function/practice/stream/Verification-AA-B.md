---
title: Architecture Compliance
type: stream
url: model/verification/architecture-assessment/stream-b/
business_function: Verification
business_function_url: verification
practice: Architecture Assessment
stream: B
description: Verification / Architecture Assessment
keywords: ["Business function", "Practice", "Verification", "Architecture Assessment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Assures that the compliance requirements of the architecture are met.
        activity: |
            Review the architecture against compliance requirements ad hoc. Identify and collect either formally identified or informally known compliance requirements. Consider both internal policy requirements, and external regulatory ones.

            Review each item on the list of known compliance requirements against the architecture. Elaborate the analysis to show the design-level features that address each compliance requirement. The overall goal is to verify that each known compliance requirement has been addressed by the system design. Note any compliance requirements that are not clearly provided at the design level as assessment findings.

            Security-savvy technical conduct this analysis staff with input from architects, developers, managers, and business owners as needed. Update it during the design phase when there are changes in compliance requirements or high-level system design.

        question: Do you evaluate the technical architecture of your applications for potential threats?
        quality_criteria:
            - You review application trust boundaries
            - Threat identification covers different types of threats

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            This activity assures that the architecture is aligned with the security requirements and best practices.
        activity: |
            Following a standardized assessment methodology, analyze the architecture against known security requirements and best practices. Identify and collect either formally identified or informally known security requirements. Additionally, identify and include any security assumptions on which safe operation of the system relies.

            Review each item on the list of known security requirements against the architecture. Elaborate the analysis to show the design-level features that address each security requirement. Perform separate, detailed analysis iterations on parts of the architecture to simplify capturing this information if the system is large or complex. The overall goal is to verify that each known security requirement has been addressed by the system design. Note any security requirements not clearly provided at the design level as assessment findings.

        question: Do you use a standard methodology to evaluate the threats to your applications?
        quality_criteria:
            - Trained or experienced people lead threat modeling activities
            - The methodology stipulates the different inputs required to perform an in-depth assessment
            - Threat model deliverables are standardized and accessible across the organization

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level3:
        level: 3
        benefit: |
            Formalized security architecture review processes ensure alignment with enterprise reference architectures.
        activity: |
            Feed the architecture review results back into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

            Map security features to the security and compliance requirements in a traceability matrix. Identify the cause of gaps in the security assessment and deal with them. Consider recurring architecture findings as input for the security architecture practice to update the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

        question: Do you regularly review and update the threat models for your applications?
        quality_criteria:
            - The threat model methodology takes into account historical feedback to improve the evaluation method
            - Changes in the application or business context trigger a review of the relevant threat models
            - You evaluate the quality of threat models independently

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

---

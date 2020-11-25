---
title: Architecture Validation
type: stream
url: model/verification/architecture-assessment/stream-a/
business_function: Verification
business_function_url: verification
practice: Architecture Assessment
stream: A
description: Verification / Architecture Assessment
keywords: ["Business function", "Practice", "Verification", "Architecture Assessment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Developers understand the architecture, interfaces, and how to secure them.
        activity: |
            Identify application and infrastructure architecture components. Create a simplified view of the overall architecture and list identified threats and key security objectives. Do this based on project artifacts such as high-level requirements and design documents, interviews with technical staff, or module-level review of the code base. Identify the infrastructure components. These are all the systems, components and libraries (including SDKs) that are not specific to the application, but provide direct support to use or manage the application(s) in the organisation. From the architecture view, analyze each component in terms of its accessibility of the interfaces from authorized users, anonymous users, operators, application-specific roles, etc. For each interface, note any security-related functionality and check the model for design-level consistency for how interfaces with similar access are secured. From the architecture view, verify that existing mechanisms cover the identified threats and key security objectives.

        question: Do you review the application architecture for key security objectives and threats on an ad-hoc basis?
        quality_criteria:
            - You have an agreed upon model of the overall software architecture
            - You include components, interfaces, and integrations in the architecture model
            - You verify the security mechanisms in the software architecture cover the key security objectives and threats
            - You log missing security controls as defects

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            This activity validates the security mechanisms on the attack surface of the software and infrastructure architecture using formalized method and structured validation.
        activity: |
            To ensure consistency of evaluation, all architectural verifications must be similarly structured and leverage a shared, formalized methodology. The security and architecture group can build upon common architectural focus areas and review guidelines from a number of industry standard bodies, such as NIST or CIS, to codify and publish a standardized internal review methodology. Where possible, automatic verification and enforcement of established architectural governance rules should be integrated into the development pipeline to detect deviations or regressions as early as possible.

            For each interface in the application and infrastructure architecture, formally iterate through the list of security mechanisms and analyze the system for their provision. Perform this type of analysis on both internal interfaces, e.g. between tiers, as well as external ones, e.g. those comprising the attack surface and do so in a structured manner.

            The six main security mechanisms to consider are authentication, user access management, input validation, output encoding, error handling, and logging. Where relevant, also consider the mechanisms of cryptography or privacy. For each interface, determine where in the system design each mechanism is provided. Review the documented threats and key security objectives, and note any missing or unclear features as findings. Identify and validate the high-risk design decisions made as part of the architecture. Conduct analysis to update the findings based on changes made during the development cycle.

        question: Do you review your software architecture regularly using an agreed upon methodology?
        quality_criteria:
            - Your process and template for reviewing software architectures is aligned with your organization’s risk tolerance
            - You verify the architecture meets all the defined security requirements
            - You document the context of all design decisions which impact security
            - You verify every component is protected by the expected security mechanisms (e.g., authentication, authorization, logging)
            - You log missing security mechanisms as defects

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Assurance on the effectiveness of the architecture security mechanisms in terms of strategy alignment, appropriate support, and scalability.
        activity: |
            Review the effectiveness of the architecture components. Are the architecture security mechanisms well implemented? For each of the application and infrastructure components, review their effectiveness to secure the application.

            Evaluate the effectiveness of the security mechanisms provided by the components in terms of identification, protection, detection, response, and recovery of security or privacy issues. Review their effectiveness in terms of strategy alignment, appropriate support, and scalability. Feed any findings back into the Security Architecture practice.

        question: Do you regularly review the effectiveness of the security controls?
        quality_criteria:
            - You evaluate the preventive, detective, and response capabilities of security controls
            - You evaluate the strategy alignment, appropriate support, and scalability of security controls
            - You evaluate the effectiveness at least yearly
            - You log identified shortcomings as defects

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

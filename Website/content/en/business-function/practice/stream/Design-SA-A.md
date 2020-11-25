---
title: Architecture Design
type: stream
url: model/design/security-architecture/stream-a/
business_function: Design
business_function_url: design
practice: Security Architecture
stream: A
description: Design / Security Architecture
keywords: ["Business function", "Practice", "Design", "Security Architecture"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You get basic security practices right in your software design.
        activity: |
            During design, technical staff on the product team use a short checklist of security principles. Typically, security principles include defense in depth, securing the weakest link, use of secure defaults, simplicity in design of security functionality, secure failure, balance of security and usability, running with least privilege, avoidance of security by obscurity, etc.

            For perimeter interfaces, the team considers each principle in the context of the overall system and identify features that can be added to bolster security at each such interface. Limit these such that they only take a small amount of extra effort beyond the normal implementation cost of functional requirements. Note anything larger, and schedule it for future releases.

            Train each product team with security awareness before this process, and incorporate more security-savvy staff to aid in making design decisions.

        question: Do teams use security principles during design?
        quality_criteria:
            - You have an agreed upon checklist of security principles
            - You store your checklist in an accessible location
            - Relevant stakeholders understand security principles

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level2:
        level: 2
        benefit: |
            The organisation leverages common security solutions.
        activity: |
            Identify shared infrastructure or services with security functionality. These typically include single-sign-on services, access control or entitlements services, logging and monitoring services or application-level firewalling. Collect and evaluat reusable systems to assemble a list of such resources and categorize them by the security mechanism they fulfill. Consider each resource in terms of why a product team would want to integrate with it, i.e. the benefits of using the shared resource.

            If multiple resources exist in each category, select and standardize on one or more shared service per category. Because future software development will rely on these services, review each thoroughly to ensure understanding of the baseline security posture. For each selected service, create design guidance for product teams to understand how to integrate with the system. Make the guidance available through training, mentorship, guidelines, and standards.

            Establish a set of best practices representing sound methods of implementing security functionality. You can research them or purchase them, and it is often more effective if you customize them so they are more specific to your organization. Example patterns include a single-sign-on subsystem, a cross-tier delegation model, a separation-of-duties authorization model, a centralized logging pattern, etc.

            These patterns can originate from specific projects or applications, but make sure you share them between different teams across the organisation for efficient and consistent application of appropriate security solutions.

            To increase adoption of these patterns, link them to the shared security services, or implement them into actual component solutions that can be easily integrated into an application during development. Support the key technologies within the organisation, for instance in case of different development stacks. Treat these solutions as actual applications with proper support in case of questions or issues.

        question: Do you use security services during design?
        quality_criteria:
            - You have a documented list of reusable security services, available to relevant stakeholders
            - You have reviewed the baseline security posture for each selected service
            - Your designers are trained to integrate each selected service following available guidance

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Software architectures are standardized to minimize security risks.
        activity: |
            Build a set of reference architectures that select and combine a verified set of security components to ensure a proper design of security. Reference platforms have advantages in terms of shortening audit and security-related reviews, increasing efficiency in development, and lowering maintenance overhead. Continuously maintain and improve the reference architecture based on new insights in the organisation and within the community. Have architects, senior developers and other technical stakeholders participate in design and creation of reference platforms. After creation, teams maintain ongoing support and updates.

            Reference architectures may materialize into a set of software libraries and tools upon which project teams build their software. They serve as a starting point that standardizes the configuration-driven, security-by-default security approach. You can bootstrap the framework by selecting a particular project early in the life-cycle and having security-savvy staff work with them to build the security functionality in a generic way so that it can be extracted from the project and used elsewhere in the organization.

            Monitor weaknesses or gaps in the set of security solutions available in your organisation continuously in the context of discussions on architecture, development, or operations. This serves as an input to improve the appropriateness and effectiveness of the reference architectures that you have in place.

        question: Do you base your design on available reference architectures?
        quality_criteria:
            - You have one or more approved reference architectures documented and available to stakeholders
            - You improve the reference architectures continuously based on insights and best practices
            - You provide a set of components, libraries, and tools to implement each reference architecture

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

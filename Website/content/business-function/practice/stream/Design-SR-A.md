---
title: Software Requirements
type: stream
url: model/design/security-requirements/stream-a/
business_function: Design
business_function_url: design
practice: Security Requirements
practice_url: security-requirements
stream: A
description: Design / Security Requirements
keywords: ["Business function", "Practice", "Design", "Security Requirements"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You have an understanding of key security requirements.
        activity: |
            Perform a review of the functional requirements of the software project. Identify relevant security requirements (i.e. expectations) for this functionality by reasoning on the desired confidentiality, integrity or availability of the service or data offered by the software project. Requirements state the objective (e.g., “personal data for the registration process should be transferred and stored securely”), but not the actual measure to achieve the objective (e.g., “use TLSv1.2 for secure transfer”).

            At the same time, review the functionality from an attacker perspective to understand how it could be misused. This way you can identify extra protective requirements for the software project at hand.

            Security objectives can relate to specific security functionality you need to add to the application (e.g., “Identify the user of the application at all times”) or to the overall behaviour and quality of the application (e.g., “Ensure personal data is properly protected in transit”), which will not lead to new functionality. Follow good practices for writing security requirements. Make them specific, measurable, actionable, relevant and time-bound (SMART). Beware of adding requirements too general-purpose to not relate to the application at hand (e.g., The application should protect against the OWASP Top 10). While they can be true, they don’t add value to the discussion.

        question: Do project teams specify security requirements during development?
        quality_criteria:
            - Teams derive security requirements from functional requirements and customer or organization concerns
            - Security requirements are specific, measurable, and reasonable
            - Security requirements are in line with the organizational baseline

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level2:
        level: 2
        benefit: |
            Relevant security requirements gathered in a structured format provide a prioritized, detailed understanding of attack scenarios against business logic.
        activity: |
            Security requirements can originate from other sources including policies and legislation, known problems within the application, and intelligence from metrics and feedback. At this level, a more systematic elicitation of security requirements must be achieved by analysing different sources of such requirements. Ensure that appropriate input is received from these sources to help the elicitation of requirements. For example, organize interviews or brainstorm sessions (e.g., in the case of policy and legislation), analyse historical logs or vulnerability systems.

            Use a structured notation of security requirements across applications and an appropriate formalism that integrates well with how you specify other (functional) requirements for the project. This could mean, for example, extending analysis documents, writing user stories, etc.

            When requirements are specified, it is important to ensure that these requirements are taken into account during product development. Setup a mechanism to stimulate or force project teams to meet these requirements in the product. For example, annotate requirements with priorities, or influence the handling of requirements to enforce sufficient security appetite (while balancing against other non-functional requirements).

        question: Do you define, structure, and include prioritization in the artifacts of the security requirements gathering process?
        quality_criteria:
            - Security requirements take into consideration domain specific knowledge when applying policies and guidance to product development
            - Domain experts are involved in the requirements definition process
            - You have an agreed upon structured notation for security requirements
            - Development teams have a security champion dedicated to reviewing security requirements and outcomes

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level3:
        level: 3
        benefit: |
            You have a set of reusable security requirements to improve the overall quality.
        activity: |
            Setup a security requirements framework to help projects elicit an appropriate and complete requirements set for their project. This framework considers the different types of requirements and sources of requirements. It should be adapted to the organisational habits and culture, and provide effective methodology and guidance in the elicitation and formation of requirements.

            The framework helps project teams increase the efficiency and effectiveness of requirements engineering. It can provide a categorisation of common requirements and a number of reusable requirements. Do remember that, while thoughtless copying is ineffective, the fact of having potential relevant requirements to reason about is often productive.

            The framework also gives clear guidance on the quality of requirements and formalizes how to describe them. For user stories, for instance, concrete guidance can explain what to describe in the definition of done, definition of ready, story description, and acceptance criteria.

        question: Do you use a standard requirements framework to streamline the elicitation of security requirements?
        quality_criteria:
            - A security requirements framework is available for project teams
            - The framework is categorized by common requirements and standards-based requirements
            - The framework gives clear guidance on the quality of requirements and how to describe them
            - The framework is adaptable to specific business requirements

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

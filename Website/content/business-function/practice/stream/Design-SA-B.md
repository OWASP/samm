---
title: Technology Management
type: stream
url: model/design/security-architecture/stream-b/
business_function: Design
business_function_url: design
practice: Security Architecture
stream: B
description: Design / Security Architecture
keywords: ["Business function", "Practice", "Design", "Security Architecture"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Security risk and technical debt in use are identified and replaced.
        activity: |
            People often take the path of least resistance in developing, deploying or operating a software solution. New technologies are often included when they can facilitate or speed up the effort or enable the solution to scale better. These new technologies might, however, introduce new risks to the organisation that you need to manage.

            Identify the most important technologies, frameworks, tools and integrations being used for each application. Use the knowledge of the architect to study the development and operating environment as well as artefacts. Then evaluate them for their security quality and raise important findings to be managed.

        question: Do you evaluate the security quality of important technologies used for development?
        quality_criteria:
            - You have a list of the most important technologies used in or in support of each application
            - You identify and track technological risks
            - You ensure the risks to these technologies are in line with the organizational baseline

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            There is a common agreement on the key technologies to use
        activity: |
            Identify commonly used technologies, frameworks and tools in use across software projects in the organisation, whereby you focus on capturing the high-level technologies.

            Create a list and share it across the development organization as recommended technologies. When selecting them, consider incident history, track record for responding to vulnerabilities, appropriateness of functionality for the organization, excessive complexity in usage of the third-party component, and sufficient knowledge within the organisation.

            Senior developers and architects create this list, including input from managers and security auditors. Share this list of recommended components with the development organization. Ultimately, the goal is to provide well-known defaults for project teams. Perform a periodic review of these technologies for security and appropriateness.

        question: Do you have a list of recommended technologies for the organization?
        quality_criteria:
            - The list is based on technologies used in the software portfolio
            - Lead architects and developers review and approve the list
            - You share the list across the organization
            - You review and update the list at least yearly

        answers:
            - "No"
            - Yes, for some of the technology domains
            - Yes, for at least half of the technology domains
            - Yes, for most or all of the technology domains

    level3:
        level: 3
        benefit: |
            Compliance with the list of known software is proactively monitored and violations are managed.
        activity: |
            For all proprietary development (in-house or acquired), impose and monitor the use of standardized technology. Depending on your organisation, either implement these restrictions into build or deployment tools, by means of after-the-fact automated analysis of application artefacts (e.g., source code, configuration files or deployment artefacts), or periodically review focusing on the correct use of these frameworks.

            Verify several factors with project teams. Identify use of non-recommended technologies to determine if there are gaps in recommendations versus the organization’s needs. Examine unused or incorrectly used design patterns and reference platform modules to determine if updates are needed. Additionally, implement functionality in the reference platforms as the organization evolves and project teams request it.

        question: Do you enforce the use of recommended technologies within the organization?
        quality_criteria:
            - You monitor applications regularly for the correct use of the recommended technologies
            - You solve violations against the list accoranding to organizational policies
            - You take action if the number of violations falls outside the yearly objectives

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

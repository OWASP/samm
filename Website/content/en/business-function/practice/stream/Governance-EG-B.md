---
title: Organization and Culture
type: stream
url: model/governance/education-and-guidance/stream-b/
business_function: Governance
business_function_url: governance
practice: Education & Guidance
stream: B
description: Governance / Education & Guidance
keywords: ["Business function", "Practice", "Governance", "Education & Guidance"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Have a lightweight embedding of software security throughout your organization through security champions.
        activity: |
            Implement a program where each software development team has a member considered a “Security Champion” who is the liaison between Information Security and developers. Depending on the size and structure of the team the “Security Champion” may be a software developer, tester, or a product manager. The “Security Champion” has a set number of hours per week for Information Security related activities. They participate in periodic briefings to increase awareness and expertise in different security disciplines. “Security Champions” have additional training to help develop these roles as Software Security subject-matter experts. You may need to customize the way you create and support “Security Champions” for cultural reasons.

            The goals of the position are to increase effectiveness and efficiency of application security and compliance and to strengthen the relationship between various teams and Information Security. To achieve these objectives, “Security Champions” assist with researching, verifying, and prioritizing security and compliance related software defects. They are involved in all Risk Assessments, Threat Assessments, and Architectural Reviews to help identify opportunities to remediate security defects by making the architecture of the application more resilient and reducing the attack threat surface.

            In addition to assisting Information Security, “Security Champions” provide periodic reviews of all security-related issues for the project team so everyone is aware of the problems and any current and future remediation efforts. These reviews are leveraged to help brainstorm solutions to more complex problems by engaging the entire development team.

        question: Have you identified a Security Champion for each development team?
        quality_criteria:
            - Each development team has an assigned Security Champion
            - Security Champions receive appropriate training
            - Application Security and Development teams receive periodic briefings from Security Champions on the overall status of security initiatives and fixes
            - The Security Champion reviews the results of external testing before adding to the application backlog

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Have a central team of software security experts to drive and support your software assurance program.
        activity: |
            The organization implements a formal secure coding center of excellence, with architects and senior developers representing the different business units and technology stacks. The team has an official charter and defines standards and best practices to improve software development practices. The goal is to mitigate the way velocity of change in technology, programming languages, and development frameworks and libraries makes it difficult for Information Security professionals to be fully informed of all the technical nuances that impact security. Even developers often struggle keeping up with all the changes and new tools intended to make software development faster, better, and safer.

            This ensures all current programming efforts follow industry’s best practices and organization’s development and implementation standards include all critical configuration settings. It helps identify, train, and support “Product Champions”, responsible for assisting different teams with implementing tools that automate, streamline, or improve various aspects of the SDLC. It identifies development teams with higher maturity levels within their SDLC and the practices and tools that enable these achievements, with the goal of replicating them to other teams.

            The group provides subject matter expertise, helping information security teams evaluate tools and solutions to improve application security, ensuring these tools are not only useful but also compatible with the way different teams develop applications. Teams looking to make significant architectural changes to their software consult with this group to avoid adversely impacting the SDLC life-cycle or established security controls.

        question: Does the organization have a Secure Software Center of Excellence (SSCE)?
        quality_criteria:
            - The SSCE has a charter defining its role in the organization
            - Development teams review all significant architectural changes with the SSCE
            - The SSCE publishes SDLC standards and guidelines related to Application Security
            - Product Champions are responsible for promoting the use of specific security tools

        answers:
            - "No"
            - Yes, started to implement
            - Yes, effective for some of the organization
            - Yes, effective for most or all of the organization

    level3:
        level: 3
        benefit: |
            Software security is a shared and active responsibility among all employees.
        activity: |
            Security is the responsibility of all employees, not just the Information Security team. Deploy communication and knowledge sharing platforms to help developers build communities around different technologies, tools, and programming languages. In these communities employees share information, discuss challenges with other developers, and search the knowledge base for answers to previously discussed issues.

            Form communities around roles and responsibilities and enable developers and engineers from different teams and business units to communicate freely and benefit from each other's expertise. Encourage participation, set up a program to promote those who help the most people as thought leaders, and have management recognize them. In addition to improving application security, this platform may help identify future members of the Secure Software Center of Excellence, or 'Security Champions' based on their expertise and willingness to help others.

            The Secure Software Center of Excellence and Application Security teams review the information portal regularly for insights into the new and upcoming technologies, as well as opportunities to assist the development community with new initiatives, tools, programs, and training resources. Use the portal to disseminate information about new standards, tools, and resources to all developers for the continued improvement of SDLC maturity and application security.

        question: Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?
        quality_criteria:
            - Organization promotes use of a single portal across different teams and business units
            - The portal is used for timely information such as notification of security incidents, tool updates, architectural standard changes, and other related announcements
            - The portal is widely recognized by developers and architects as a centralized repository of the organization-specific application security information
            - All content should be considered persistent and searchable
            - The portal provides access to application-specific security metrics.

        answers:
            - "No"
            - Yes, started to implement
            - Yes, effective for some of the organization
            - Yes, effective for most or all of the organization

---

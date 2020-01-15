---
title: Training and Awareness
type: stream
url: model/governance/education-and-guidance/stream-a/
business_function: Governance
business_function_url: governance
practice: Education & Guidance
stream: A
description: Governance / Education & Guidance
keywords: ["Business function", "Practice", "Governance", "Education & Guidance"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Stakeholders involved in producing software have an appreciation for the difficulty of creating secure software and the value of a secure SDLC.
        activity: |
            Conduct security awareness training for all roles currently involved in the management, development, testing, or auditing of the software. The goal is to increase the awareness of application security threats and risks, security best practices, and secure software design principles. Develop training internally or procure it externally. Ideally, deliver training in person so participants can have discussions as a team, but Computer-Based Training (CBT) is also an option.

            Course content should include a range of topics relevant to application security and privacy, while remaining accessible to a non-technical audience. Suitable concepts are secure design principles including Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability. Additionally, the training should include references to any organization-wide standards, policies, and procedures defined to improve application security. The OWASP Top 10 vulnerabilities should be covered at a high level.

            Training is mandatory for all employees and contractors involved with software development and includes an auditable sign-off to demonstrate compliance. Consider incorporating innovative ways of delivery (such as gamification) to maximize its effectiveness and combat desensitization.

        question: Do you require employees involved with application development to take SDLC training?
        quality_criteria:
            - Training is repeatable, consistent, and available to anyone involved with software development lifecycle
            - Training includes the latest OWASP Top 10 if appropriate and includes concepts such as Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability
            - Training requires a sign-off or an acknowledgement from attendees
            - You have updated the training in the last 12 months
            - Training is required during employees' onboarding process

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Stakeholders involved in producing software receive role-specific security training.
        activity: |
            Conduct instructor-led or CBT security training specific to the organization’s roles and technologies, starting with the core development team. The organization customizes training for product managers, software developers, testers, and security auditors, based on each group’s technical needs.

            - Product managers train on topics related to SAMM business functions and security practices, with emphasis on security requirements, threat modeling, and defect tracking.
            - Developers train on coding standards and best practices for the technologies they work with to ensure the training directly benefits application security. They have a solid technical understanding of the OWASP Top 10 vulnerabilities, or similar weaknesses relevant to the technologies and frameworks used (e.g. mobile), and the most common remediation strategies for each issue.
            - Testers train on the different testing tools and best practices for technologies used in the organization, and in tools that identify security defects.
            - Security auditors train on the SDLC life-cycle, application security mechanisms used in the organization, and the process for submitting security defects for remediation.
            - Security Champions train on security topics from various phases of the SDLC. They receive the same training as developers and testers, but also understand threat modeling and secure design, as well as security tools and technologies that can be integrated into the build environment.

            Include all training content from the Maturity Level 1 activities of this stream and additional role-specific and technology-specific content. Eliminate unnecessary aspects of the training.

            Ideally, identify a subject-matter expert in each technology to assist with procuring or developing the training content and updating it regularly. The training consists of demonstrations of vulnerability exploitation using intentionally weakened applications, such as WebGoat or Juice Shop. Include results of the previous penetration as examples of vulnerabilities and implemented remediation strategies. Ask a penetration tester to assist with developing examples of vulnerability exploitation demonstrations.

            Training is mandatory for all employees and contractors involved with software development, and includes an auditable sign-off to demonstrate compliance.  Whenever possible, training should also include a test to ensure understanding, not just compliance.  Update and deliver training annually to include changes in the organization, technology, and trends. Poll training participants to evaluate the quality and relevance of the training. Gather suggestions of other information relevant to their work or environments.

        question: Is training customized for individual roles such as developers, testers, or security champions?
        quality_criteria:
            - Training includes all topics from maturity level 1, and adds more specific tools, techniques, and demonstrations
            - Training is mandatory for all employees and contractors
            - Training includes input from in-house SMEs and trainees
            - Training includes demonstrations of tools and techniques developed in-house
            - You use feedback to enhance and make future training more relevant

        answers:
            - "No"
            - Yes, some content has been updated
            - Yes, at least half of the content
            - Yes, most or all of the content

    level3:
        level: 3
        benefit: |
            Security is an aspect of product quality, addressed throughout development.
        activity: |
            Implement a formal training program requiring anyone involved with the software development life-cycle to complete appropriate role and technology-specific training as part of the on-boarding process. Based on the criticality of the application and user’s role, consider restricting access until the on-boarding training has been completed. While the organization may source some modules externally, the program is facilitated and managed in-house and includes content specific to the organization going beyond general security best-practices. The program has a defined curriculum, checks participation, and tests understanding and competence. The training consists of a combination of industry best practices and organization’s internal standards, including training on specific systems used by the organization.

            In addition to issues directly related to security, the organization includes other standards to the program, such as code complexity, code documentation, naming convention, and other process-related disciplines. This training minimizes issues resulting from employees following practices incorporated outside the organization and ensures continuity in the style and competency of the code.

            To facilitate progress monitoring and successful completion of each training module the organization has a learning management platform or another centralized portal with similar functionality. Employees can monitor their progress and have access to all training resources even after they complete initial training.

            Review issues resulting from employees not following established standards, policies, procedures, or security best practices at least annually to gauge the effectiveness of the training and ensure it covers all issues relevant to the organization. Update the training periodically and train employees on any changes and most prevalent security deficiencies.

        question: Have you implemented a Learning Management System or equivalent to track employee training and certification processes?
        quality_criteria:
            - A Learning Management System (LMS) is used to track trainings and certifications
            - Training is based on internal standards, policies, and procedures
            - You use certification programs or attendance records to determine access to development systems and resources

        answers:
            - "No"
            - Yes, for some of the training
            - Yes, at least half of the training
            - Yes, most or all of training

---

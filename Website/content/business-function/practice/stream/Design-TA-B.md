---
title: Threat Modeling
type: stream
url: model/design/threat-assessment/stream-b/
business_function: Design
business_function_url: design
practice: Threat Assessment
stream: B
description: Design / Threat Assessment
keywords: ["Business function", "Practice", "Design", "Threat Assessment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Identification of architectural design flaws in the solution.
        activity: |
            Threat modeling is a structured activity for identifying, evaluating, and managing system threats, architectural design flaws, and recommended security mitigations. It is typically done as part of the design phase or as part of a security assessment.

            Threat modeling is a team exercise, including product owners, architects, security champions, and security testers. At this maturity level, expose teams and stakeholders to threat modeling to increase security awareness and to create a shared vision on the security of the system.

            At maturity level 1, you perform threat modeling ad-hoc for high-risk applications and use simple threat checklists, such as STRIDE. Avoid lengthy workshops and overly detailed lists of low-relevant threats. Perform threat modeling iteratively to align to more iterative development paradigms. If you add new functionality to an existing application, look only into the newly added functions instead of trying to cover the entire scope. A good starting point is the existing diagrams that you annotate during discussion workshops. Always make sure to persist the outcome of a threat modeling discussion for later use.

            Your most important tool to start threat modeling is a whiteboard, smartboard, or a piece of paper. Aim for security awareness, a simple process, and actionable outcomes that you agree upon with your team.

        question: Do you identify and manage architectural design flaws with threat modeling?
        quality_criteria:
            - You perform threat modeling for high-risk applications
            - You use simple threat checklists, such as STRIDE
            - You persist the outcome of a threat model for later use

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Scaleble threat modeling aligned to your organization risks.
        activity: |
            Use a standardized threat modeling methodology for your organization and align this on your application risk levels. Think about ways to support the scaling of threat modeling throughout the organization.

            Train your architects, security champions, and other stakeholders on how to do practical threat modeling.  Threat modeling requires understanding, clear playbooks and templates, organization-specific examples, and experience, which is hard to automate.

            Your threat modeling methodology includes at least diagramming, threat identification, design flaw mitigations, and how to validate your threat model artifacts. Your threat model diagram allows a detailed understanding of the environment and the mechanics of the application. You discover threats to your application with checklists, such as STRIDE or more organization-specific threats. For identified design flaws (ranked according to risk for your organization), you add mitigating controls to support stakeholders in dealing with particular threats. Define what triggers updating a threat model, for example, a technology change or deployment of an application in a new environment.

            Feed the output of threat modeling to the defect management process for adequate follow-up. Capture the threat modeling artifacts with tools that are used by your application teams.

        question: Do you use a standard methodology, aligned on your application risk levels?
        quality_criteria:
            - You train your architects, security champions, and other stakeholders on how to do practical threat modeling
            - Your threat modeling methodology includes at least diagramming, threat identification, design flaw mitigations, and how to validate your threat model artifacts
            - Changes in the application or business context trigger a review of the relevant threat models
            - You capture the threat modeling artifacts with tools that are used by your application teams

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            The timely update and qualitative management of application risks is optimized.
        activity: |
            Threat modeling is integrated into your SDLC and has become part of the developer security culture.  Reusable risk patterns, comprising of related threat libraries, design flaws, and security mitigations, are created and improved, based on the organization's threat models. You regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications.

            You optimize your threat modeling methodology. You capture lessons learned from threat models and use these to improve your threat modeling methodology.  You review the threat categories relevant to your organization and update your methodology appropriately. From time to time, you evaluate the quality of your threat models independently.

            You automate parts of your threat modeling process with threat modeling tools. You integrate your threat modeling tools with other security tools, such as security verification tools and risk tracking tools. You consider "threat modeling as code" practices to integrate threat modeling artifacts with application code.

        question: Do you regularly review and update the threat modeling methodology for your applications?
        quality_criteria:
            - The threat model methodology considers historical feedback for improvement
            - You regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications
            - You automate parts of your threat modeling process with threat modeling tools

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

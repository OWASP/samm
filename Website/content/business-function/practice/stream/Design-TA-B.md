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
            Basic understanding of potential threats to the solution.
        activity: |
            The purpose of Threat Modeling is to pro-actively identify potential issues in the technical design of the application. A careless setup might lead to important attack vectors in an application that can be exploited to target your organization. Experience shows that architectural design can be an important source of security issues, and the consequences can be significant.

            The practice of threat modeling includes both eliciting and managing threats. Use known good security practices (or the lack thereof) or a more structured approach such as STRIDE to elicit threats. Threat modeling is often most effective when performed by a group of people, allowing for brainstorming. One of the key challenges in threat modeling is working towards a list of relevant and important threats in an efficient exercise, and avoiding lengthy processes and overly detailed lists of low-relevant threats. Experience helps find a proper balance.

            Perform threat modeling iteratively to align to more iterative development paradigms. If you add new functionality to an existing application, look only into the newly added functions instead of trying to cover the entire scope.

            Execute threat modeling on important projects in a best effort mode to identify the most important threats to the application. Existing network diagrams you can annotate during discussion workshops are a good starting point.

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
            Improved elicitation and management of threats to the solution.
        activity: |
            Establish a standard approach to perform structured threat modeling to increase the quality and efficiency of threat modeling within your organization, and ensure that the invested effort is useful and well spent. Structured threat modeling takes into account the different actors, assets and flows to identify an extensive list of potential threats to the application. It defines the inputs required to start the activity (e.g., a technical architecture overview and a data flow diagram), the different steps to identify threats, and the formalisms to describe or annotate the threats. You can add mitigating controls to threat models to guide designers in dealing with particular threats.

            As an organization, define what triggers the execution of threat modeling. For example a change in architecture, or a deployment of an application in a new environment. At the same time, think about ways to support scaling of threat modeling throughout the organization.

            Feed the output of threat modeling to the defect management process for adequate follow-up. Adopt a weighting system to measure and compare the importance of the different threats.

            Consider using a tool to manage the treat models of the different applications. Train people to focus on important threats, as one of the challenges in threat modeling is a potential overload of trivial threats. Tools help in identifying potential threats but, in the end, threat modeling requires human intelligence that cannot be easily automated.

        question: Do you use a standard methodology to evaluate the threats to your applications?
        quality_criteria:
            - People with training or experience in threat modeling lead threat modeling activities
            - The methodology states the different inputs required to perform an in-depth assessment
            - Threat model deliverables are standardized and accessible across the organization

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            The timely update and qualitative management of application threats is optimized.
        activity: |
            In a mature setup of threat modeling, regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications.

            Use automated analysis to evaluate the quality and discover gaps and/or patterns in the threat models. These can improve the threat models.

            Review the threat categories relevant to your organization. When you identify new threat categories, feed this information to the organization to ensure appropriate handling.

        question: Do you regularly review and update the threat models for your applications?
        quality_criteria:
            - The threat model methodology considers historical feedback to improve the evaluation method
            - Changes in the application or business context trigger a review of the relevant threat models
            - You evaluate the quality of threat models independently

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

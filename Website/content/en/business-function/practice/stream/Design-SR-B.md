---
title: Supplier Security
type: stream
url: model/design/security-requirements/stream-b/
business_function: Design
business_function_url: design
practice: Security Requirements
stream: B
description: Design / Security Requirements
keywords: ["Business function", "Practice", "Design", "Security Requirements"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You understand the security practices of your software suppliers.
        activity: |
            The security competences and habits of the expernal suppliers involved in the development of your software can have a significant impact on the security posture of the final product. Consequently, it is important to know and evaluate your suppliers on this front.

            Carry out a vendor assessment to understand the strengths and weaknesses of your suppliers. Conduct interviews and review their typical practices and deliveries. This gives you an idea of how they organize themselves and elements to evaluate whether you need to take additional measures to mitigate potential risks. Ideally, speak to different roles in the organisation, or even organise a small maturity evaluation to this end. Strong suppliers will run their own software assurance program and will be able to answer most of your questions. If suppliers have weak competences in software security, discuss with them how and to what extent they plan to work on this and evaluate whether this is enough for your organisation. A software supplier might be working on a low-risk project, but this could change.

            It is important that your suppliers understand and align to the risk appetite and are able to meet your requirements in that area. Make what you expect from them explicit and discuss this clearly.

        question: Do stakeholders review vendor collaborations for security requirements and methodology?
        quality_criteria:
            - You consider including specific security requirements, activities, and processes when creating third-party agreements
            - A vendor questionnaire is available and used to assess the strengths and weaknesses of your suppliers

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level2:
        level: 2
        benefit: |
            You structurally assign responsibilities for software security activities.
        activity: |
            Increase your confidence in the capability of your suppliers for software security. Discuss concrete responsibilities and expectations from your suppliers and your own organisation and establish a contract with the supplier. The responsibilities can be specific quality requirements or particular tasks, and minimal service can be detailed in a Service Level Agreement (SLA). A quality requirement example is that they will deliver software that is protected against the OWASP Top 10, and in case issues are detected, these will be fixed. A task example is that they have to perform continuous static code analysis, or perform an independent penetration test before a major release. The agreement stipulates liabilities and caps in case an important issue arises.

            Once you have implemented this for a few suppliers, work towards a standard agreement for suppliers that forms the basis of your negotiations. You can deviate from this standard agreement on a case by case basis, but it will help you to ensure you do not overlook important topics.

        question: Do vendors meet the security responsibilities and quality measures of service level agreements defined by the organization?
        quality_criteria:
            - You discuss security requirements with the vendor when creating vendor agreements
            - Vendor agreements provide specific guidance on security defect remediation within an agreed upon timeframe
            - The organization has a templated agreement of responsibilities and service levels for key vendor security processes
            - You measure key performance indicators

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level3:
        level: 3
        benefit: |
            You align software development practices to limit security risks.
        activity: |
            The best way to minimize the risk of issues in software is to align maximally and integrate closely between the different parties. From a process perspective, this means using similar development paradigms and introducing regular milestones to ensure proper alignment and qualitative progress. From a tools perspective, this might mean using similar build, verification and deployment environments, and sharing other supporting tools (e.g. requirements, architecture tools, or code repositories).

            In case suppliers cannot meet the objectives that you have set, implement compensating controls so that, overall, you meet your objectives. Execute extra activities (e.g., threat modelling before starting the actual implementation cycle) or implement extra tooling (e.g., 3rd party library analysis at solution intake). The more suppliers deviate from your requirements, the more work will be required to compensate.

        question: Are vendors aligned with standard security controls and software development tools and processes that the organization utilizes?
        quality_criteria:
            - The vendor has a secure SDLC that includes secure build, secure deployment, defect management, and incident management that align with those used in your organization
            - You verify the solution meets quality and security objectives before every major release
            - When standard verification processes are not available, you use compensating controls such as software composition analysis and independent penetration testing

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

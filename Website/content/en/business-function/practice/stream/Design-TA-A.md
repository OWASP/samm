---
title: Application Risk Profile
type: stream
url: model/design/threat-assessment/stream-a/
business_function: Design
business_function_url: design
practice: Threat Assessment
stream: A
description: Design / Threat Assessment
keywords: ["Business function", "Practice", "Design", "Threat Assessment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Ability to classify applications according to risk.
        activity: |
            Use a simple method to evaluate the application risk per application, estimating the potential business impact that it poses for the organization in case of an attack. To achieve this, evaluate the impact of a breach in the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to understand important application characteristics, such as whether the application processes financial data, whether it is internet facing, or whether privacy-related data is involved. The application risk profile tells you whether these factors are applicable and if they could significatly impact the organization.

            Next, use a scheme to classify applications according to this risk. A simple, qualitative scheme (e.g. high/medium/low) that translates these characteristics into a value is often effective. It is important to use these values to represent and compare the risk of different applications against each other. Mature highly risk-driven organizations might make use of more quantitative risk schemes. Don’t invent a new risk scheme if your organization already has one that works well.

        question: Do you classify applications according to business risk based on a simple and predefined set of questions?
        quality_criteria:
            - An aggreed-upon risk classification exists
            - The application team understands the risk classification
            - The risk classification covers critical aspects of business risks the organization is facing
            - The organization has an inventory for the applications in scope

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level2:
        level: 2
        benefit: |
            Solid understanding of the risk level of the organizational application portfolio.
        activity: |
            The goal of this activity is to thoroughly understand the risk level of all applications within the organization, to focus the effort of your software assurance activities where it really matters.

            From a risk evaluation perspective, the basic set of questions is not enough to thoroughly evaluate the risk of all applications. Create an extensive and standardized way to evaluate the risk of the application, among others via their impact on information security (confidentiality, integrity and availability of data). Next to security, you also want to evaluate the privacy risk of the application. Understand the data that the application processes and what potential privacy violations are relevant. Finally, study the impact that this application has on other applications within the organization (e.g., the application might be modifying data that was considered read-only in another context). Evaluate all applications within the organization, including all existing and legacy ones.

            Leverage business impact analysis to quantify and classify application risk. A simple qualitative scheme (such as high/medium/low) is not enough to effectively manage and compare applications on an enterprise-wide level.

            Based on this input, Security Officers leverage the classification to define the risk profile to build a centralized inventory of risk profiles and manage accountability. This inventory gives Product Owners, Managers, and other organizational stakeholders an aligned view of the risk level of an application in order to assign appropriate priority to security-related activities.

        question: Do you use centralized and quantified application risk profiles to evaluate business risk?
        quality_criteria:
            - The application risk profile is in line with the organizational risk standard
            - The application risk profile covers impact to security and privacy
            - You validate the quality of the risk profile manually and/or automatically
            - The application risk profiles are stored in a central inventory

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Timely update of the application classification in case of changes.
        activity: |
            The application portfolio of an organization changes, as well as the conditions and constraints in which an application lives (e.g., driven by the company strategy). Periodically review the risk inventory to ensure correctness of the risk evaluations of the different applications.

            Have a periodic review at an enterprise-wide level. Also, as your enterprise matures in software assurance, stimulate teams to continuously question which changes in conditions might impact the risk profile. For instance, an internal application might become exposed to the internet by a business decision. This should trigger the teams to rerun the risk evaluation and update the application risk profile accordingly.

            In a mature implementation of this practice, train and continuously update teams on lessons learned and best practices from these risk evaluations. This leads to a better execution and a more accurate representation of the application risk profile.

        question: Do you regularly review and update the risk profiles for your applications?
        quality_criteria:
            - The organizational risk standard considers historical feedback to improve the evaluation method
            - Significant changes in the application or business context trigger a review of the relevant risk profiles

        answers:
            - "No"
            - Yes, sporadically
            - Yes, upon change of the application
            - Yes, at least annually

---

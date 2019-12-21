---
title: Defect Tracking
type: stream
url: model/implementation/defect-management/stream-a/
business_function: Implementation
business_function_url: implementation
practice: Defect Management
stream: A
description: Implementation / Defect Management
keywords: ["Business function", "Practice", "Implementation", "Defect Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You have a view on all known security defects impacting particular applications.
        activity: |
            Introduce a common definition / understanding of a security defect and define the most common ways of identifying these. These typically include, but are not limited to:

            * Threat assessments
            * Penetration tests
            * Output from static and dynamic analysis scanning tools
            * Responsible disclosure processes or bug bounties

            Foster a culture of transparency and avoid blaming any teams for introducing or identifying security defects. Record and track all security defects in a defined location. This location doesn't necessarily have to centralized for the whole organization, however ensure that you're able to get an overview of all defects affecting a particular application at any single point in time. Define and apply access rules for the tracked security defects to mitigate the risk of leakage and abuse of this information.

            Introduce at least rudimentary qualitative classificiation of security defects so that you are able to prioritize fixing efforts accordingly. Strive for limiting duplication of information and presence of false positives to increase the trustworthiness of the process.

        question: Do you track all known security defects in accessible locations?
        quality_criteria:
            - You can easily get an overview of all security defects impacting one application
            - You have at least a rudimentary classification scheme in place
            - The process includes a strategy for handling false positives and duplicate entries
            - The defect management system covers defects from various sources and activities

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            You have overview of security defects with severity rating affecting applications throughout the entire organization.
        activity: |
            Introduce and apply a well defined rating methodology for your security defects consistently across the whole organization, based on the probability and expected impact of the defect being exploited. This will allow you to identify applications which need higher attention and investments. In case you don't store the information about security defects centrally, ensure that you're still able to easily pull the information from all sources and get an overview about "hot spots" needing your attention.

            Introduce SLAs for timely fixing of security defects according to their criticality rating and centrally monitor and regularly report on SLA breaches. Define a process for cases where it's not feasible or economical to fix a defect within the time defined by the SLAs. This should at least ensure that all relevant stakeholders have a solid understanding of the imposed risk. If suitable, employ compensating controls for these cases.

            Even if you don't have any formal SLAs for fixing low severity defects, ensure that responsible teams still get a regular overview about issues affecting their applications and understand how particular issues affect or amplify each other.

        question: Do you keep an overview of the state of security defects across the organization?
        quality_criteria:
            - A single severity scheme is applied to all defects across the organization
            - The scheme includes SLAs for fixing particular severity classes
            - You regularly report compliance to SLAs

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Security defects are resolved or mitigated (possibly with compensating controls) within a predefined time.
        activity: |
            Implement an automated alerting on security defects if the fix time breaches the defined SLAs. Ensure that these defects are automatically transfered into the risk management process and rated by a consistent quantitative methodology. Evaluate how particular defects influence / amplify each other not only on the level of separate teams, but on the level of the whole organization. Use the knowledge of the full kill chain to prioritize, introduce and track compensating controls mitigating the respective business risks.

            Integrate your defect management system with the automated tooling introduced by other practices, e.g.:

            * Build and Deployment: Fail the build / deployment process if security defects above certain severity affect the final artifact, unless someone explicitely signs off the exception.
            * Monitoring: If possible, ensure that abuse of the security defect in production environment is recognized and alerted.

        question: Do you enforce SLAs for fixing security defects?
        quality_criteria:
            - You automatically alert of SLA breaches and transfer respective defects to the risk management process
            - You integrate relevant tooling (e.g. monitoring, build, deployment) with the defect management system

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

---
title: Patching and Updating
type: stream
url: model/operations/environment-management/stream-b/
business_function: Operations
business_function_url: operations
practice: Environment Management
stream: B
description: Operations / Environment Management
keywords: ["Business function", "Practice", "Operations", "Environment Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Mitigation of well-known issues in third-party components
        activity: |
            Identify applications and third-party components which need to be updated or patched, including underlying operating systems, application servers, and third-party code libraries.

            At this level of maturity, your identification and patching activities are best-effort and _ad hoc_, without a managed process for tracking component versions, available updates, and patch status. However, high-level requirements for patching activities (e.g., testing patches before pushing to production) may exist, and product teams are achieving best-effort compliance with those requirements.

            Except for critical security updates (e.g., an exploit for a third-party component has been publicly released), teams leverage maintenance windows established for other purposes to apply component patches. For software developed by the organization, component patches are delivered to customers and organization-managed solutions only as part of feature releases.

            Teams share their awareness of available updates, and their experiences with patching, on an _ad hoc_ basis. Ensure teams can determine the versions of all components in use, to evaluate whether their products are affected by a security vulnerability when notified. However, the process for generating and maintaining component lists may require significant analyst effort.

        question: Do you identify and patch vulnerable components?
        quality_criteria:
            - You have an up-to-date list of components, including version information
            - You regularly review public sources for vulnerabilities related to your components

        answers:
            - "No"
            - Yes, for some components
            - Yes, for at least half of the components
            - Yes, for most or all of the components

    level2:
        level: 2
        benefit: |
            - Consistent application of component patches
            - Risk-based prioritization of patching efforts

        activity: |
            Develop, and follow, a well-defined process for managing patches to application components, across the full technology stacks in use. Ensure processes include regular schedules for applying vendor updates, aligned with vendor update calendars (e.g., Microsoft Patch Tuesday). For software developed by the organization, new releases are delivered to customers and organization-managed solutions on a regular basis (e.g., monthly), whether new features are being delivered or not.

            Create guidance for prioritizing component patching, reflecting your risk tolerance and management objectives. Consider operational factors (e.g., criticality of the application, severity of the vulnerabilities addressed) in determining priorities for testing and applying patches.

            In the event receive a notification for a critical vulnerability in a component, while no patch is yet available, triage and handle the situation as a risk management issue (e.g., implement compensating controls, obtain customer risk acceptance, or disable affected applications/features).

        question: Do you follow an established process for updating components of your technology stacks?
        quality_criteria:
            - The process includes vendor information for third-party patches
            - The process considers external sources to gather information about zero day attacks, and includes appropriate risk mitigation steps
            - The process includes guidance for prioritizing component updates

        answers:
            - "No"
            - Yes, for some components
            - Yes, for at least half of the components
            - Yes, for most or all of the components

    level3:
        level: 3
        benefit: |
            - Full visibility into current patch states across the organization
            - Reduced dwell time for vulnerable component versions

        activity: |
            Develop and use management dashboards/reports to track compliance with patching processes and SLAs, across the portfolio. Ensure dependency management and application packaging processes can support applying component-level patches at any time, to meet required SLAs.

            Treat missed updates as security-related product defects, and manage their triage and correction in accordance with your established Defect Management practice.

            Don't rely on routine notifications from component vendors to learn about vulnerabilities and associated patches. Monitor a variety of external threat intelligence sources, to learn about zero day vulnerabilities; handle those affecting your applications as risk management issues.

        question: Do you regularly evaluate components and review patch level status?
        quality_criteria:
            - You update the list with components and versions
            - You identify and update missing updates according to existing SLA
            - You review and update the process based on feedback from the people who perform patching

        answers:
            - "No"
            - Yes, for some components
            - Yes, for at least half of the components
            - Yes, for most or all of the components

---

---
title: Configuration Hardening
type: stream
url: model/operations/environment-management/stream-a/
business_function: Operations
business_function_url: operations
practice: Environment Management
stream: A
description: Operations / Environment Management
keywords: ["Business function", "Practice", "Operations", "Environment Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Reduced attack surface, for key elements of technology stacks
        activity: |
            Understanding the importance of securing the technology stacks you're using, apply secure configuration to stack elements, based on readily available guidance (e.g., open source projects, vendor documentation, blog articles). When your teams develop configuration guidance for their applications, based on trial-and-error and information gathered by team members, encourage them to share their learnings across the organization.

            Identify key elements of common technology stacks, and establish configuration standards for those, based on teams' experiences of "what works."

            At this level of maturity, you don't yet have a formal process for managing configuration baselines. Configurations may not be applied consistently across applications and deployments, and monitoring of conformance is likely absent.

        question: Do you harden configurations for key components of your technology stacks?
        quality_criteria:
            - You have identified the key components in each technology stack used
            - You have an established configuration standard for each key component

        answers:
            - "No"
            - Yes, for some key components
            - Yes, for at least half of the key components
            - Yes, for most or all of the key components

    level2:
        level: 2
        benefit: |
            - Reduced attack surface, across all technology stacks
            - Increased efficiency in deployment and configuration of components

        activity: |
            Establish configuration hardening baselines for all components in each technology stack used. To assist with consistent application of the hardening baselines, develop configuration guides for the components. Require product teams to apply configuration baselines to all new systems, and to existing systems when practicable.

            Place hardening baselines and configuration guides under change management, and assign an owner to each. Owners have ongoing responsibility to keep them up-to-date, based on evolving best practices or changes to the relevant components (e.g., version updates, new features).

            In larger environments, derive configurations of instances from a locally maintained master, with relevant configuration baselines applied. Employ automated tools for hardening configurations.

        question: Do you have hardening baselines for your components?
        quality_criteria:
            - You have assigned an owner for each baseline
            - The owner keeps their assigned baselines up to date
            - You store baselines in an accessible location
            - You train employees responsible for configurations in these baselines

        answers:
            - "No"
            - Yes, for some components
            - Yes, for at least half of the components
            - Yes, for most or all of the components

    level3:
        level: 3
        benefit: |
            - Full visibility of component configurations
            - Ability to detect and correct out-of-conformance conditions

        activity: |
            Actively monitor the security configurations of deployed technology stacks, performing regular checks against established baselines. Ensure results of configuration checks are readily available, through published reports and dashboards.

            When you detect non-conforming configurations, treat each occurrence as a security finding, and manage corrective actions within your established Defect Management practice.

            Further gains may be realized using automated measures, such as "self-healing" configurations and security information and event management (SIEM) alerts.

            As part of the process for updating components (e.g., new releases, vendor patches), review corresponding baselines and configuration guides, updating them as needed to maintain their relevance and accuracy. Review other baselines and configuration guides at least annually.

            Periodically review your baseline management process, incorporating feedback and lessons learned from teams applying and maintaining configuration baselines and configuration guides.

        question: Do you monitor conformity with hardening baselines?
        quality_criteria:
            - You perform conformity checks regularly, preferably using automation
            - You store conformity check results in an accessible location
            - You follow an established process to address reported non-conformities
            - You review each baseline at least annually, and update it when required

        answers:
            - "No"
            - Yes, for some components
            - Yes, for at least half of the components
            - Yes, for most or all of the components

---

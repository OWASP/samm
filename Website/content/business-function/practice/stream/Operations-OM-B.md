---
title: System Decomissioning / Legacy Management
type: stream
url: model/operations/operational-management/stream-b/
business_function: Operations
business_function_url: operations
practice: Operational Management
stream: B
description: Operations / Operational Management
keywords: ["Business function", "Practice", "Operations", "Operational Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            - Reduced operating costs for unused applications, when discovered
            - Limited reductions in support costs for legacy product versions

        activity: |
            Identify unused applications on an _ad hoc_ basis, either by chance observation, or by occasionally performing a review. When you identify unused applications, process those findings for further action. If you have established a formal process for decommissioning unused applications, ensure teams are aware of and use it.

            Manage customer/user migration from older versions of your products for each product and customer/user group. When a product version is no longer in use by any customer/user group, discontinue support for that version. However, at this level of maturity you may have a large number of product versions in active use across the customer/user base, requiring significant developer effort to back-port product fixes.

        question: Do you identify and remove systems, applications, application dependencies, or services that are no longer used, have reached end of life, or are no longer actively developed or supported?
        quality_criteria:
            - You do not use unsupported applications or dependencies
            - You manage customer/user migration from older versions for each product and customer/user group

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            - Reduced attack surface, through elimination of unused configuration in operating environments
            - Elimination of risks associated with end-of-life software

        activity: |
            As part of decommissioning a system, application, or service, follow an established process for removing all relevant accounts, firewall rules, data, etc. from the operational environment. By removing these unused elements from configuration files, you improve the maintainability of infrastructure-as-code resources.

            Follow a consistent process for timely replacement or upgrade of third-party applications, or application dependencies (e.g., operating system, utility applications, libraries), that have reached end of life.

            Engage with customers and user groups for your products at or approaching end of life, to migrate them to supported versions in a timely manner.

        question: Do you follow an established process for removing all associated resources, as part of decommissioning of unused systems, applications, application dependencies, or services?
        quality_criteria:
            - You document the status of support for all released versions of your products, in an accessible location
            - The process includes replacement or upgrade of third-party applications, or application dependencies, that have reached end of life
            - Operating environments do not contain orphaned accounts, firewall rules, or other configuration artifacts

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

    level3:
        level: 3
        benefit: |
            - Reduced risks, through eliminating unsupported applications and libraries from operating environments
            - Minimized product support burden

        activity: |
            Regularly evaluate the lifecycle state and support status of every software asset and underlying infrastructure component, and estimate their end-of-life. Follow a well-defined process for actively mitigating security risks arising as assets/components approach their end-of-life. Regularly review and update your process, to reflect lessons learned.

            Establish a product support plan, providing clear timelines for ending support on older product versions. Limit product versions in active use to only a small number (e.g., N.x.x and N-1.x.x only). Establish and publicize timelines for discontinuing support on prior versions, and proactively engage with customers and user groups to prevent disruption of service or support.

        question: Do you regularly evaluate the lifecycle state and support status of every software asset and underlying infrastructure component, and estimate their end of life?
        quality_criteria:
            - Your end of life management process is agreed upon
            - You inform customers and user groups of product timelines to prevent disruption of service or support
            - You review the process at least annually

        answers:
            - "No"
            - Yes, for some of the assets
            - Yes, for at least half of the assets
            - Yes, for most or all of the assets

---

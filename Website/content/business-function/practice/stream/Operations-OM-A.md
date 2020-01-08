---
title: Data Protection
type: stream
url: model/operations/operational-management/stream-a/
business_function: Operations
business_function_url: operations
practice: Operational Management
stream: A
description: Operations / Operational Management
keywords: ["Business function", "Practice", "Operations", "Operational Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Sensitive data are protected from accidental disclosure
        activity: |
            Understand the types and sensitivity of data stored and processed by your applications, and maintain awareness of the fate of processed data (e.g., backups, sharing with external partners). At this level of maturity, the information gathered may be captured in varying forms and different places; no organization-wide data catalog is assumed to exist. Protect and handle all data associated with a given application according to protection requirements applying to the most sensitive data stored and processed.

            Implement basic controls, to prevent propagation of unsanitized sensitive data from production environments to lower environments. By ensuring unsanitized production data are never propagated to lower (non-production) environments, you can focus data protection policies and activities on production.

        question: Do you protect and handle information according to protection requirements for data stored and processed on each application?
        quality_criteria:
            - You know the data elements processed and stored by each application
            - You know the type and sensitivity level of each identified data element
            - You have controls to prevent propagation of unsanitized sensitive data from production to lower environments

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            - Increased understanding of the organization's data landscape
            - Improved confidentiality, integrity, and availability of data backups

        activity: |
            At this maturity level, Data Protection activities focus on actively managing your stewardship of data. Establish technical and administrative controls to protect the confidentiality of sensitive data, and the integrity and availability of all data in your care, from its initial creation/receipt through the destruction of backups at the end of their retention period.

            Identify the data stored, processed, and transmitted by applications, and capture information regarding their types, sensitivity (classification) levels, and storage location(s) in your data catalog. Clearly identify records or data elements subject to specific regulation. Establishing a single source of truth regarding the data you work with supports finer-grained selection of controls for their protection. Collecting this information enhances the accuracy, timeliness, and efficiency of your responses to data-related queries (e.g., from auditors, incident response teams, or customers), and supports threat modeling and compliance activities.

            Based on your Data Protection Policy, establish processes and procedures for protecting and preserving data throughout their lifetime, whether at rest, while being processed, or in transit. Pay particular attention to the handling and protection of sensitive data outside the active processing system, including, but not limited to: storage, retention, and destruction of backups; and the labeling, encryption, and physical protection of offline storage media. Your processes and procedures cover the implementation of all controls adopted to comply with regulatory, contractual, or other restrictions on storage locations, personnel access, and other factors.

        question: Do you maintain a data catalog, including types, sensitivity levels, and processing and storage locations?
        quality_criteria:
            - The data catalog is stored in an accessible location
            - You know which data elements are subject to specific regulation
            - You have controls for protecting and preserving data throughout its lifetime
            - You have retention requirements for data, and you destroy backups in a timely manner after the relevant retention period ends

        answers:
            - "No"
            - Yes, for some of our data
            - Yes, for at least half of our data
            - Yes, for most or all of our data

    level3:
        level: 3
        benefit: |
            Cost savings realized through automation of monitoring and alerts
        activity: |
            Activities at this maturity level are focused on automating data protection, reducing your reliance on human effort to assess and manage compliance with policies. There is a focus on feedback mechanisms and proactive reviews, to identify and act on opportunities for process improvement.

            Implement technical controls to enforce compliance with your Data Protection Policy, and put monitoring in place to detect attempted or actual violations. You may use a variety of available tools for data loss prevention, access control and tracking, or anomalous behavior detection.

            Regularly audit compliance with established administrative controls, and closely monitor performance and operation of automated mechanisms, including backups and record deletions. Monitoring tools quickly detect and report failures in automation, permitting you to take timely corrective action.

            Reviews and update the data catalog regularly, to maintain its accurate reflection of your data landscape. Regular reviews and updates of processes and procedures maintain their alignment with your policies and priorities.

        question: Do you regularly review and update the data catalog and your data protection policies and procedures?
        quality_criteria:
            - You have automated monitoring to detect attempted or actual violations of the Data Protection Policy
            - You have tools for data loss prevention, access control and tracking, or anomalous behavior detection
            - You periodically audit the operation of automated mechanisms, including backups and record deletions

        answers:
            - "No"
            - Yes, we do it when requested
            - Yes, we do it every few years
            - Yes, we do it at least annually

---

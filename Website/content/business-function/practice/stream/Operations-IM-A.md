---
title: Incident Detection
type: stream
url: model/operations/incident-management/stream-a/
business_function: Operations
business_function_url: operations
practice: Incident Management
stream: A
description: Operations / Incident Management
keywords: ["Business function", "Practice", "Operations", "Incident Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Ability to detect the most obvious security incidents within a reasonable timeframe
        activity: |
            Analyze available log data (e.g., access logs, application logs, infrastructure logs), to detect possible security incidents in accordance with known log data retention periods.

            In small setups, you can do this manually with the help of common command-line tools. With larger log volumes, employ automation techniques. Even a `cron` job, running a simple script to look for suspicious events, is a step forward!

            If you send logs from different sources to a dedicated log aggregation system, analyze the logs there and employ basic log correlation principles.

            Even if you don't have a 24/7 incident detection process, ensure that unavailability of the responsible person (e.g., due to vacation or illness) doesn't significantly impact detection speed or quality.

            Establish and share points of contact for formal creation of security incidents.

        question: Do you analyze log data for security incidents periodically?
        quality_criteria:
            - You have a contact point for the creation of security incidents
            - You analyze data in accordance with the log data retention periods
            - The frequency of this analysis is aligned with the criticality of your applications

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Timely and consistent detection of expected security incidents
        activity: |
            Establish a dedicated owner for the incident detection process, make clear documentation accessible to all process stakeholders, and ensure it is regularly reviewed and updated as necessary. Ensure employees responsible for incident detection follow this process (e.g., using training).

            The process typically relies on a high degree of automation, collecting and correlating log data from different sources, including application logs. You may aggregate logs in a central place, if suitable. Periodically verify the integrity of analyzed data. If you add a new application, ensure the process covers it within a reasonable period of time.

            Detect possible security incidents using an available checklist. The checklist should cover expected attack vectors and known or expected kill chains. Evaluate and update it regularly.

            When you determine an event is a security incident (with sufficiently high confidence), notify responsible staff immediately, even outside business hours. Perform further analysis, as appropriate, and start the escalation process.

        question: Do you follow a documented process for incident detection?
        quality_criteria:
            - The process has a dedicated owner
            - You store process documentation in an accessible location
            - The process considers an escalation path for further analysis
            - You train employees responsible for incident detection in this process
            - You have a checklist of potential attacks to simplify incident detection

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Ability to timely detect unexpected security incidents
        activity: |
            Ensure process documentation includes measures for continuous process improvement. Check the continuity of process improvement (e.g., via tracking of changes).

            Ensure the checklist for suspicious event detection is correlated at least from:
            - Sources and knowledge bases external to the company (e.g., new vulnerability announcements affecting the used technologies)
            - Past security incidents
            - Threat model outcomes

            Use correlation of logs for incident detection for all reasonable incident scenarios. If the log data for incident detection is not available, document its absence as a defect, triage and handle it according to your established Defect Management process.

            The quality of the incident detection does not depend on the time or day of the event. If security events are not acknowledged and resolved within a specified time (e.g., 20 minutes), ensure further notifications are generated according to an established escalation path.

            Monitor the efficiency of the incident response process, using exercises with defined improvement action points.

        question: Do you review and update the incident detection process regularly?
        quality_criteria:
            - You perform reviews at least annually
            - You update the checklist of potential attacks with external and internal data

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

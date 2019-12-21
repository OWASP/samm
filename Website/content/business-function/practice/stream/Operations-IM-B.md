---
title: Incident Response
type: stream
url: model/operations/incident-management/stream-b/
business_function: Operations
business_function_url: operations
practice: Incident Management
stream: B
description: Operations / Incident Management
keywords: ["Business function", "Practice", "Operations", "Incident Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Ability to efficiently solve most common security incidents
        activity: |
            The first step is to recognize the incident response competence as such, and define a responsible owner. Provide them the time and resources they need to keep up with current state of incident handling best practices and forensic tooling.

            At this level of maturity, you may not have established a dedicated incident response team, but you have defined the participants of the process (usually different roles). Assign a single point of contact for the process, known to all relevant stakeholders. Ensure that point of contact knows how to reach each participant, and define on-call responsibilities for those who have them.

            When security incidents happen, document all actions taken. Protect this information from unauthorized access.

        question: Do you respond to detected incidents?
        quality_criteria:
            - You have a defined person or role for incident handling
            - You document security incidents

        answers:
            - "No"
            - Yes, for some of the incidents
            - Yes, for at least half of the incidents
            - Yes, for most or all of the incidents

    level2:
        level: 2
        benefit: |
            Understanding and efficient handling of most security incidents
        activity: |
            Establish and document the formal security incident response process. Ensure documentation includes information like&#58;

            * most probable/common scenarios of security incidents and high-level instructions for handling them; for such scenarios, also use public knowledge about possibly relevant third-party incidents
            * rules for triaging each incident
            * rules for involvement of different stakeholders including senior management, Public Relations, Legal, privacy, Human Resources, external (law enforcement) authorities, and customers; specify mandatory timeframe to do so, if needed
            * the process for performing root-cause analysis and documentation of its results

            Ensure a knowledgeable and properly trained incident response team is available both during and outside of business hours. Define timelines for action and a war room. Keep hardware and software tools up to date and ready for use anytime.

        question: Do you have a repeatable process for incident handling?
        quality_criteria:
            - You have an agreed upon incident classification
            - The process considers Root Case Analysis for high severity incidents
            - Employees responsible for incident response are trained in this process
            - Forensic analysis tooling is available

        answers:
            - "No"
            - Yes, for some incident types
            - Yes, for at least half of the incident types
            - Yes, for most or all of the incident types

    level3:
        level: 3
        benefit: |
            Efficient incident response independent of time, location, or art of the incident
        activity: |
            Establish a dedicated incident response team, continuously available and responsible for continuous process improvement with the help of regular RCAs. For distributed organizations, define and document logistics rules for all relevant locations if sensible.

            Document detailed incident response procedures and keep them up to date. Automate procedures where appropriate. Keep all resources necessary for these procedures (e.g., separate communicating infrastructure or reliable external location) ready to use. Detect and correct unavailability of these resources in a timely manner.

            Carry out incident and emergency exercises are regularly. Use the results for process improvement.

            Define, gather, evaluate, and act upon metrics on the incident response process, including its continuous improvement.

        question: Do you have a dedicated incident response team?
        quality_criteria:
            - The team performs Root Cause Analysis for all security incidents unless there is a specific reason not to do so
            - You review and update the response process at least annually

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

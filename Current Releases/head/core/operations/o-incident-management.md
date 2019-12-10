---
business_functions : Operations
title : Incident Management
assignedto       : John DiLeo
complete          : 80%
weight: 1
type: security_practice
---
# Short Description

The Incident Management practice addresses activities carried out improve the organization's detection of, and response to, security incidents.

# Long Description

Once your organization has applications in operation, you're likely to face security incidents. In this model, we define a security incident as a breach, or the threat of an imminent breach, of at least one asset's security goals, whether due to malicious or negligent behavior. Examples of security incidents might include:
- a successful Denial of Service (DoS) attack against a cloud application; 
- an application user accessing private data of another, by abusing a security vulnerability; or 
- an attacker modifying application source code.

Historically, many security incidents have been detected months, or even years, after the initial breach. During the "dwell time" before an incident is detected, significant damage can occur, increasing the difficulty of recovery. Our first Activity Stream, Incident Detection, focuses on decreasing that dwell time.

Once you have identified that you're suffering from a security incident, it's essential to respond in a disciplined, thorough manner to limit the damage, and return to normal operations as efficiently as possible. 


# Overview

| | A: Incident Detection | B: Incident Response |
|:---|:---|:---|
| Maturity 1 - Best-effort incident detection and handling | Use available log data to perform best-effort detection of possible security incidents. | Identify roles and responsibilities for incident response. |
| Maturity 2 - Formal incident management process in place | Follow an established, well-documented process for automated log evaluation. | Establish a formal incident response process, and ensure staff are properly trained in performing their roles. |
| Maturity 3 - Mature incident management | Use a proactively managed process for detection of incidents. | Employ a dedicated, well-trained incident response team. |


# A: Incident Detection

## Maturity 1

### Benefit

Ability to detect the most obvious security incidents within a reasonable timeframe

### Activity

Available log data (e.g., access logs, application logs, infrastructure logs) are analyzed to detect possible security incidents in accordance with known log data retention periods.

In small setups, you can do this manually with the help of common command-line tools. With larger log volumes, employ automation techniques--even a cron job running simple script, looking for suspicious events, is a step forward! 

If logs from different sources are sent to a dedicated log aggregation system, it might be a good idea to analyze the logs there and employ basic log correlation principles.

Even if you don't have a 24/7 incident detection process, unavailability of the responsible person (e.g., due to vacation or illness) shouldn't impact the detection speed and quality significantly.

You have a defined and generally known contact point for formal creation of security incidents.


#### Maturity Questions

{{< questions "Incident Management" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

Ability to timely detect expected security incidents

### Activity

The incident detection process has a dedicated owner and clear documentation accessible to all process stakeholders, and is periodically checked to make sure it is up to date. You ensure employees responsible for incident detection follow this process (e.g., using training).
The process typically relies on a high degree of automation, collecting and correlating log data from different sources including application logs. You may collect the logs to a central place, if suitable. Explicit attention is periodically paid to integrity of the analyzed data. If you add a new application, you ensure that the process covers it within reasonable period of time.
You detect possible security incidents according to an available checklist. The checklist covers expected attack vectors, and known or expected kill chains. You evaluate it and update it regularly.
If you evaluate an event as a security incident with high level of confidence, the responsible staff is notified immediately, even outside business hours. You perform further analysis and start the escalation process.

### Maturity Questions

{{< questions "Incident Management" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Ability to timely detect unexpected security incidents

### Activity

The process documentation includes measures for continuous process improvement. You check the continuity of process improvement (e.g., via tracking of changes).

The checklist for suspicious event detection is correlated at least from:
- Sources and knowledge bases external to the company (e.g., new vulnerability announcements affecting the used technologies)
- Past security incidents
- Threat model outcomes

You use correlation of logs for incident detection for all reasonable incident scenarios. If the log data for incident detection is not available, you document it as a defect, triage and handle it according to the resulting priority / SLA.

The quality of the incident detection does not depend on the time or day of the event. If you do not act upon the security event within a defined time, it triggers further notifications according to a defined escalation path. The efficiency is of the incident is also checked by exercises with defined improvement action points.


### Maturity Questions

{{< questions "Incident Management" "A" 3 >}}

#### Notes



# B: Incident Response

## Maturity 1

### Benefit

Ability to efficiently solve most common security incidents

### Activity

The first step is to recognize the incident response competence as such and define a responsible owner. They keep up with current state of incident handling best practices and forensic tooling.

You don't mandate dedicated incident response personnel on this maturity level, but you have defined the participants of the process (usually different roles). There is a known single point of contact for the process and a conscious decision regarding reachability of the participants.

When security incidents happen, you document the steps taken. Protect this information from unauthorized access, as necessary.


### Maturity Questions

{{< questions "Incident Management" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Understanding and efficient handling of most security incidents

### Activity

Formally establish and document the security incident response process. The documentation includes information like:
- Most probable/common scenarios of security incidents and high-level instructions for handling them. For such scenarios, also use public knowledge about possibly relevant third-party incidents
- Rules for triaging each incident
- Rules for involvement of different stakeholders (including mandatory timeframe to do so, if needed), including senior management, Public Relations, Legal, privacy, Human Resources, external (law enforcement) authorities, and customers.

Knowledgeable and properly trained staff is available in and outside of business hours with defined time to act. Keep both hardware and software tools up to date and ready for use anytime. Define a war room.

The process includes a policy for carrying out root cause analysis and its expected outcomes.


### Maturity Questions

{{< questions "Incident Management" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Efficient incident response independent of time, location, or art of the incident

### Activity

Establish a dedicated incident response team, continuously available and also in charge of the continuous process improvement with the help of regular RCAs. For distributed organizations, define and document logistics rules for all relevant locations if sensible.

Document detailed incident response procedures and keep them up to date. Where sensible, automate procedures. Keep all resources necessary for these procedures (e.g., separate communicating infrastructure or reliable external location) ready to use. Detect and correct unavailability of these resources in a timely manner.

Carry out incident and emergency exercises are regularly. Use the results for process improvement.

Define, gather, evaluate, and act upon metrics on the incident response process, including its continuous improvement.


### Maturity Questions

{{< questions "Incident Management" "B" 3 >}}

#### Notes


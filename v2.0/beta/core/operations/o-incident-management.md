---
business_functions : Operations
title : Incident Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 90%
business_functions_weight: 1
type: security_practice
---
# Short Description

Incident Management security practice describes activities carried to detect and respond to security incidents.

# Long Description

Once your applications become operational, you’re likely to face security incidents. For this document, we consider a security incident a breach or threat of an  imminent breach of at least one asset’s security goals due to malicious or negligent behaviour. Examples of a security incidents might include:

- successful DoS (Denial of Service) attack against a cloud application
- application user accessing private data of another one by abusing a security vulnerability
- attacker modifying the application source code 

Sometimes, a security incident is detected only after months or even years when all damage has already been done. That's why the first stream called "Incident Detection" tackles the ability to reliably and timely detect security incidents. 

Once you have identified that you're suffering from a security incident, it's essential to act in a well organized way in order to limit the damage as much as possible. Actitivies leading to this goal are described by the second stream called "Incident Response".


# Overview

| | A: Incident Detection | B: Incident Response |
|:---|:---|:---|
| Maturity 1 - Best-effort incident detection and handling | Best-effort incident detection with available log data | Defined high-level incident response strategy |
| Maturity 2 - Formal incident management process in place | Automated log evaluation driven by process | Root Cause Analysis with feedback loop |
| Maturity 3 - Mature incident management | Reliable timely incident detection | Proactive incident + emergency exercises |



# A: Incident Detection

This stream covers the time frame between a security-relevant event taking place and creation of a formal security incident, e.g. by creating a respective ticket and handing over to incident response process. With the increasing maturity, you want to shorten this time span and detect security incidents more reliably and efficiently.

## Maturity 1

### Benefit

Ability to detect the most obvious security incidents within a reasonable timeframe.

### Activity

The available log data (e.g. access logs, application logs, infrastructure logs) are analyzed to detect possible security incidents in accordance with known log data retention periods. 

In small setups, you can do this manually with the help of common command line tools. With larger amounts of logs, employ automation techniques - even a simple script looking for suspicious events run periodically as a cron job is a step forward!

In case the logs from different sources are sent to a dedicated log system, it might be a good idea to analyze the logs here and also employ basic log correlation principles. 

Even if you don’t have a 24⁄7 incident detection process, unavailability of the person in charge (vacation, illness) shouldn’t impact the detection speed and quality significantly. 

You have a defined and generally known contact point for formal creation of security incidents.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

Typically, on this maturity level you have:

- defined and published the most probable incident scenarios
- assigned a person or role responsible for incident detection
- identified and evaluated some suspicious events
- documented the escalation process
- put reasonable effort into achieving log integrity

<!--
### Notes
- Should whether or not you do 24/7 detection be specified by maturity level? Maybe maturity should relate to risk rather than timing -> **Fourth paragraph reformulated**
- Log retention - risk-based decision on how long logs should be kept to aid -> **First paragraph edited**
- Log trustworthiness / integrity - have they been tampered with??? -> **Indicator added**
-->

## Maturity 2

### Benefit

Ability to timely detect expected security incidents.

### Activity

The incident detection process has a dedicated owner and clear documentation accessible to all process stakeholders, and is periodically checked to make sure it is up to date. You ensure employees responsible for incident detection follow this process (e.g. using training).

The process typically relies on a high degree of automation, collecting and correlating log data from different sources including application logs. You may collect the logs to a central place, if suitable. Explicit attention is periodically paid to integrity of the analyzed data. If you add a new application, you ensure that the process covers it within reasonable period of time.

You detect possible security incidents according to an available checklist. The checklist covers expected attack vectors, and known or expected kill chains. You evaluate it and update it regularly.

If you evaluate an event as a security incident with high level of confidence, the responsible staff is notified immediately, even outside business hours. You  perform further analysis and start the escalation process.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators

Typically, on this maturity level, you:

- employ some automated measures for incident detection
- have up-to-date documentation for the incident detection process
- have documentation for the most probable incident scenarios
- integrate every new system taken to production into the process

<!--
### Notes
- Software-driven application-specific logs (whereas level 1 might be general logs) -> **Second paragraph**
- Look at known kill-chains / attacks and work backwards to select relevant logs - proactively checking that you are collecting the right data -> **third paragraph**
- Added value of the process -> **In the benefit now?**
- Centralized logging -> **2nd paragraph**
-->

## Maturity 3

### Benefit

Ability to timely detect unexpected security incidents.

### Activity

The process documentation includes measures for continuous process improvement. You check the continuity of process improvement, e.g. via tracking of changes. 

The checklist for suspicious event detection is correlated at least from:

- Sources and knowledge bases external to the company (e.g. new vulnerability announcements affecting the used technologies)
- Past security incidents
- Threat model outcomes


You use correlation of logs for incident detection for all reasonable incident scenarios. If the log data for incident detection is not available, you document it  as a defect, triage and handle it according to the resulting priority / SLA.

The quality of the incident detection does not depend on the time or day of the event. If you do not act upon the security event within a defined time, it triggers further notifications according to a defined escalation path. The efficiency is of the incident is also checked by exercises with defined improvement action points.


### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators

Typically, on this maturity level:

- there is evidence that you have improved the process within the last year
- you evaluate suspicious events in less than one hour from their  occurrence and  document the result
- the detection process has its own KPIs
- there are tickets in dev queues with requests for log data improvement

<!--
### Notes
- Tabletop exercises / simulation exercises -> **Last paragraph edited**
- Centralized logging -> **Covered in level 2**
-->

# B: Incident Response

Incident Response starts in the moment when you have acknowledged and verified the existence of the particular security incident. Your goal is now to act in a coordinated and efficient way so that further damage is limited as much as possible. If suitable, you want also to identify the root cause and limit the probability of similar incidents from hapenning in the future. 

## Maturity 1

### Benefit

Ability to efficiently solve most common security incidents.

### Activity

The first step is to recognize the incident response competence as such and define an owner being responsible for its continuous development and keeping up with current state of incident handling best practices and forensic tooling. 

You usually don't go for dedicated incident response personnel on this maturity level, however the participants of the process are defined (could be for instance regular admins or developers helping in case of need) and it's generally known how the team can be contacted using a single point of contact. Conscious decision regarding reachibility of the personnel is made. 

When security incidents happen, the steps taken are documented, however this information can be protected from unauthorized access in case of need. 

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators

Typically, on this maturity level:

- the person responsible for the process is documented and generally known
- all security incidents are documented in a consistent way
- first KPIs for security incidents are collected

### Notes

- Define 'incident' -> **Defined in Practise Long Description**


## Maturity 2

### Benefit

Understanding and efficient handling of most security incidents.

### Activity
Security incident response process is formally established and documented. The documentation should include information like: 

- Most probable/common scenarios of security incidents and high-level instruction how to handle them. For such scenarious, also public knowledge about possibly relevant 3rd-party incidents should be used
- Rules for triaging the incident
- Rules for involvement of different stakeholders (including mandatory timeframe to do so, if needed), e.g. senior management, Public Relations, Legal, privacy, Human Resources, External (law enforcement) Authorities, Customers. 

Knowledgeable and properly trained staff should be available also outside of business hours with defined time to action. Both hardware and software tools should be kept up to date and ready to be used anytime. War room should be defined for cases when needed. 

The process should also include a policy for carrying out root cause analysis and its expected outcomes.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators

Typically, on this maturity level:

- Root Case Analysis is performed for the most severe security incidents 
- Security playbooks are available for the most common incidents
- there are dedicated trainings for incident response staff
- forensic analysis tooling is available

### Notes

- Root cause analysis - should be about the incident in question (becomes more advanced at L3) -> **last paragraph reformulated**
- You have to communicate the incident (within a certain timeframe). Involve authorities if necessary. -> **Third bullet point adapted**


## Maturity 3

### Benefit

Efficient incident response, independent on time, location or art of the incident.

### Activity

Dedicated incident response team is established, continuously available and also in charge of the continuous process improvement with the help of regular RCAs. For distributed organizations, logistics rules are defined and documented for all relevant locations if sensible.  

Also detailed incident response procedures are documented and kept up-to-date on this level. Where sensible, procedures are automated. All resources assumed by these procedures (e.g. separate communicating infrastructure or reliable external location) are kept ready-to-use. Unavailability of these resources is detected in a timely manner.  

Incident and emergency exercises are carried out regularly; the results of these are used for the process improvement.

Metrics on the incident response process including its continuous improvement, are defined, gathered, evaluated and acted upon. 

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators

Typically, on this maturity level:

- Root Case Analysis is performed for all security incidents unless there is a specific reason not to do so
- Improvements are identified and documented in the RCAs. THey are provably implemented.
- Some exerices have been carried out in the last year. 
- There is a roadmap for process improvement.
- Process metrics are available (e.g. resolution speed, affected customers, ...)
- In most incidents, playbooks are used to a high degree.

### Notes

- Root cause analysis - feedback loop - learning and improving beyond the incident at hand -> **first paragraph updated**
- Automated incident response (e.g. rasp [Runtime Application Self-Protection Security], phantom, demisto) -> **automation mentioned in the first paragraph**
- Not concrete - what are you going to do to concretely improve on L2 -> **Mentioned RCAs, Exercices, Metric evaluation...**

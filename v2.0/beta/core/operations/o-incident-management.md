---
business_functions : Operations
title : Incident Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 80%
business_functions_weight: 1
type: security_practice
---


# Overview

| | A: Incident Detection | B: Incident Response |
|:---|:---|:---|
| Maturity 1 - Best-effort incident detection and handling | Best-effort incident detection with available log data | Defined high-level incident response strategy |
| Maturity 2 - Formal incident management process in place | Automated log evaluation driven by process | Root Cause Analysis with feedback loop |
| Maturity 3 - Mature incident management | Reliable timely incident detection | Proactive incident + emergency exercises |


# Short Description

Incident Management security practice describes activities carried to detect and respond to security incidents.

# Long Description

Once your applications become operational, you’re likely to face security incidents. For this document, we consider a security incident a breach or threat of an  imminent breach of at least one asset’s security goals due to malicious or negligent behaviour. Examples of a security incidents might include:

- successful DoS (Denial of Service) attack against a cloud application
- application user accessing private data of another one by abusing a security vulnerability
- attacker modifying the application source code 

Sometimes, a security incident is detected only after months or even years when all damage has already been done. That's why the first stream called "Incident Detection" tackles the ability to reliably and timely detect security incidents. 

Once you have identified that you're suffering from a security incident, it's essential to act in a well organized way in order to limit the damage as much as possible. Actitivies leading to this goal are described by the second stream called "Incident Response".

# A: Incident Detection

This stream covers the time frame between a security-relevant event taking place and creation of a formal security incident, e.g. by creating a respective ticket and handing over to incident response process. With the increasing maturity, you want to shorten this time span and detect security incidents more reliably and efficiently.

## Maturity 1

### Benefit

Ability to detect most obvious security incidents within a reasonable timeframe from occurrence.

### Activity

On the first level, available log data (e.g. access logs, application logs, infrastructure logs) are consciously analyzed in order to detect possible security incidents. This effort is carried in accordance with known log data retention periods. 

While in small setups, this analysis can be done manually with the help of common command line tools, once the amount of system generating logs grows, automation techniques are employed - even a simple script looking for suspicious events run periodically as a cron job is a step forward! 

In case the logs from different sources are sent to a dedicated log system, it might be a good idea to analyze the logs here and also employ basic log correlation principles. 

On this maturity level, you might not go for 24/7 incident detection process, especially if you don't have this process established for generall incidents as well. However, it should be ensured that unavailability of person in charge(vacation, illness) won't significantly impact the detection speed and quality. 

If an event is evaluated to be a security incident, the contact point for formal creation of security incident is defined and generally known. 

### Indicators

Typically, on this maturity level:

- the most probable incident scenarios are defined and available for employees
- there is a person or role having the responsibility of incident detection
- suspicious events are sometimes identified and evaluated
- the escalation process is documented
- reasonable effort in order to achieve log integrity has provably been carried out

### Notes

- Should whether or not you do 24/7 detection be specified by maturity level? Maybe maturity should relate to risk rather than timing -> **Fourth paragraph reformulated**
- Log retention - risk-based decision on how long logs should be kept to aid -> **First paragraph edited**
- Log trustworthiness / integrity - have they been tampered with??? -> **Indicator added**

## Maturity 2

### Benefit

Solid degree of confidence of timely detection of expectable security incidents.

### Activity

On this level of maturity, the incident detection process has a dedicated owner who is also responsible for clear documentation accessible to all process stakeholders. It is ensured that employees responsible for carrying out the incident detection follow this process (e.g. using dedicated training). The incident detection process is also periodically checked for being up-to-date. 

The process typically relies on a high degree of automation, collecting and correlating log data from different sources including application logs (you might also want to collect the logs to a central place if suitable). Explicit attention is periodically paid to integrity of the analyzed data. If a new application is added, it is ensured that the process covers this application within reasonable period of time.

Possible security incidents are being detected according to available checklist covering expected attack vectors and known / expected kill chains. The checklist is regularly evaluated for validity and updated.

If an event is evaluated as a security incident with high level of confidence, the responsible staff is notified immediately (also outside business hours) in order perform further analysis and start escalation process. 


### Indicators

Typically, on this maturity level:

- some automated measures for incident detection are employed
- the incident detection process is documented and the documentation is up to date
- most probable incident scenarios are documented
- when a new system is taken into production, it is integrated into the process

### Notes

- Software-driven application-specific logs (whereas level 1 might be general logs) -> **Second paragraph**
- Look at known kill-chains / attacks and work backwards to select relevant logs - proactively checking that you are collecting the right data -> **third paragraph**
- Added value of the process -> **In the benefit now?**
- Centralized logging -> **2nd paragraph**

## Maturity 3

### Benefit

Solid degree of confidence of timely detection of also unexpected incident scenarios.

### Activity

The process documentation also includes measures for continuous process improvement. The continuity of process improvement is also checked, e.g. via tracking of changes. If the process has not been reviewed within reasonable amount of time, such state is detected and acted upon. 

The checklist for suspicious event detection is correlated at least from the following sources:

- Sources and knowledge bases external to the company (e.g. new vulnerability announcements affecting the used technologies)
- Past security incidents
- Threat model outcomes

Correlation of logs is used for incident detection for all reasonable incident scenarios. In case the log data for incident detection is not available, such state is documented as a defect, triaged and handled upon according to the resulting priority / SLA. 

The quality of the incident detection is not dependant on the time or day of the event. In case the security event is not acted upon within a defined time, further contact according to a defined escalation path are notified. The efficiency is of the incident is also checked by exercises with defined improvement action points.

### Indicators:

Typically, on this maturity level:

- there is an evidence that the process has been improved within last year
- suspicious events are evaluated in less than one hour since the occurrence and the result is documented
- the detection process has its own KPIs
- there are tickets in dev queues with requests for log data improvement

### Notes

- Tabletop exercises / simulation exercises -> **Last paragraph edited**
- Centralized logging -> **Covered in level 2**

# B: Incident Response

Description TBD

## Maturity 1

### Benefit

TBD

### Activity

The first step is to recognize the incident response competence as such and define an owner being responsible for its continuous development and keeping up with current state of incident handling best practices and forensic tooling. 

You usually don't go for dedicated incident response personnel on this maturity level, however the participants of the process are defined (could be for instance regular admins or developers helping in case of need) and it's generally known how the team can be contacted using a single point of contact. Conscious decision regarding reachibility of the personnel is made. 

When security incidents happen, the steps taken are documented, however this information can be protected from unauthorized access in case of need. 

### Indicators

Typically, on this maturity level:

- the person responsible for the process is documented and generally known
- all security incidents are documented in a consistent way

### Notes

- Define 'incident' -> **Defined in Practise Long Description**


## Maturity 2

### Benefit

TBD

### Activity
Security incident response process is formally established and documented. The documentation should include information like: 

* Most probable/common scenarios of security incidents and high-level instruction how to handle them. For such scenarious, also public knowledge about possibly relevant 3rd-party incidents should be used
* Rules for triaging the incident
* Rules for involvement of different stakeholders, e.g. senior management, Public Relations, Legal, privacy, Human Resources, External (law enforcement) Authorities, Customers

Knowledgeable and properly trained staff should be available also outside of business hours with defined time to action. Both hardware and software tools should be kept up to date and ready to be used anytime. War room should be defined for cases when needed. 

The process should also include a policy for carrying out root cause analysis with the goal of improving both detection and response process.

### Indicators

Typically, on this maturity level:

### Maturity Questions
#### Q 1
Is the incident response process including most probable scenarios documented and known?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 2
Is knowledgeable personnel available also outside of business hours?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 3
Are RCAs carried out according to the defined process?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

### Notes

- Root cause analysis - should be about the incident in question (becomes more advanced at L3)
- You have to communicate the incident (within a certain timeframe). Involve authorities if necessary.


## Maturity 3
### Activity

Dedicated incident response team is established, continuously available and also in charge of the continuous process improvement. For distributed organizations, logistics rules are defined and documented for all relevant locations if sensible.  

Also detailed incident response procedures are documented and kept up-to-date on this level. All resources assumed by these procedures (e.g. separate communicating infrastructure or reliable external location) are kept ready-to-use. Unavailability of these resources is detected in a timely manner. 

Incident and emergency exercises are carried out regularly; the results of these are used for the process improvement.

Metrics on the incident response process inlcuding its continuous improvement, are defined, gathered, evaluated and acted upon. 

### Maturity Questions
#### Q 1
Are security incidents handled with a similar quality over all relevant locations?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 2
Are all resources needed for handling all relevant incident scenarios reliably held ready-to use?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 3
Are metrics for both indident response process and its improvement gathered and acted upon?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

### Notes

- Root cause analysis - feedback loop - learning and improving beyond the incident at hand
- Automated incident response (e.g. rasp [Runtime Application Self-Protection Security], phantom, demisto)
- Not concrete - what are you going to do to concretely improve on L2

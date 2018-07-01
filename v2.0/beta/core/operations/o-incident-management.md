---
business_functions : Operations
title : Incident Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 0%
business_functions_weight: 1
type: security_practice
---


# Overview

| | A: Incident Detection | B: Incident Response |
|:---|:---|:---|
| Maturity 1 - Best-effort incident detection and handling | Best-effort incident detection with available log data | Defined high-level incident response strategy |
| Maturity 2 - Formal incident management process in place | Automated log evaluation driven by process | Root Cause Analysis with feedback loop |
| Maturity 3 - Mature incident management | Reliable timely incident detection | Proactive incident + emergency exercises |


# A: Incident Detection

## Maturity 1
### Activity

On the first level, log data (e.g. access logs, application logs, infrastructure logs) are consciously analyzed in order to detect possible security incidents. 

While in small setups, this analysis can be done manually with the help of common command line tools, once the amount of system generating logs grows, automation techniques are employed - even a simple script looking for suspicious events run periodically as a cron job is a step forward! 

In case the logs from different sources are sent to a dedicated log system, it might be a good idea to analyze the logs here and also employ basic log correlation principles. 

On this maturity level, you usually don't go for 24/7 incident detection; analyzing suspicious events during the business hours is enough. However, it should be ensured that unavailability of person in charge(vacation, illness) won't significantly impact the detection speed and quality. 

If an event is evaluated to be a security incident, the contact point for formal creation of security incident is defined and generally known. 

#### Maturity Questions
##### Q 1
Is log data regularly analyzed with the purpose of identification of possible security incidents?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

##### Q 2
If a security incident is identified with a solid level of confidence, is the next escalation point clearly defined?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes


## Maturity 2
### Activity

On this level of maturity, the incident detection process has a dedicated owner who is also responsible for clear documentation accessible to all process stakeholders. It is ensured that employees responsible for carrying out the incident detection follow this process (e.g. using dedicated training). The incident detection process is also periodically checked for being up-to-date. 

If a new application is added, it is ensured that the process covers this application within reasonable period of time, correlating relevant log data.  

Possible security incidents are being detected according to available checklist covering expected attack vectors. The checklist is regularly evaluated for validity and updated.

If an event is evaluated as a security incident with high level of confidence, the responsible staff is notified immediately (also outside business hours) in order perform further analysis and start escalation process. 


### Maturity Questions
#### Q 1
Is the incident detection process documented and regulary updated, including a checklist of expected threat scenarios?

**Answer Options**
SAMMQA-G:
- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Q 2
Will an automatically detected security incident with solid level of confidence be escalated also outside of business hours?

**Answer Options**
SAMMQA-G:
- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required
#### Notes



## Maturity 3
### Activity

The process documentation also includes measures for continuous process improvement. The continuity of process improvement is also checked, e.g. via tracking of changes. If the process has not been reviewed within reasonable amount of time, such state is detected and acted upon. 

The checklist for suspicious event detection is correlated at least from the following sources: 
* Sources and knowledge bases external to the company (e.g. new vulnerability announcements affecting the used technologies)
* Past security incidents
* Threat model outcomes

Correlation of logs is used for incident detection for all reasonable incident scenarios. In case the log data for incident detection is not available, such state is documented as a defect, triaged and handled upon according to the resulting priority / SLA. 

The quality of the incident detection is not dependant on the time or day of the event. In case the alert is not acted upon within a defined time, further contact according to a defined escalation paths are notified. 

### Maturity Questions
#### Q 1
Is it ensured that both the process and the scope of incident detection is continuously improved?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 2
Is it ensured that the quality of incident detection is not dependant on the time or day of the event occurence?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes


# B: Incident Response

## Maturity 1
### Activity
Points of contact for a case of an incident and escalation procedures are known. Incidents are documented.

### Maturity Questions
#### Q 1
Does your organization have an assigned security response team?

**Answer Options**
SAMMQA-A:
- No
- Yes, it's less than a year old
- Yes, it's a number of years old
- Yes, it's a pretty mature program

#### Q 2
Are project teams aware of their security point(s) of contact and response team(s)?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes


## Maturity 2
### Activity
Process for incident response is established. The process includes a policy for carrying out RCAs with the goal of improving both detection and response process.

### Maturity Questions
#### Q 1
Are project stakeholders aware of relevant security disclosures related to their software projects?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes


## Maturity 3
### Activity
There are regular incident and emergency exercises. The results of the exercises are used for the process improvement.

### Maturity Questions
#### Q 1
Do projects consistently collect and report data and metrics related to incidents?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

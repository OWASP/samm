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

### Notes

- Should whether or not you do 24/7 detection be specified by maturity level? Maybe maturity should relate to risk rather than timing.
- Log retention - risk-based decision on how long logs should be kept to aid
- Log trustworthiness / integrity - have they been tampered with???

#### Guidance


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
### Notes

- Software-driven application-specific logs (whereas level 1 might be general logs)
- Look at known kill-chains / attacks and work backwards to select relevant logs - proactively checking that you are collecting the right data
- Added value of the process
- Centralized logging

## Maturity 3
### Activity

The process documentation also includes measures for continuous process improvement. The continuity of process improvement is also checked, e.g. via tracking of changes. If the process has not been reviewed within reasonable amount of time, such state is detected and acted upon. 

The checklist for suspicious event detection is correlated at least from the following sources:

* Sources and knowledge bases external to the company (e.g. new vulnerability announcements affecting the used technologies)
* Past security incidents
* Threat model outcomes

Correlation of logs is used for incident detection for all reasonable incident scenarios. In case the log data for incident detection is not available, such state is documented as a defect, triaged and handled upon according to the resulting priority / SLA. 

The quality of the incident detection is not dependant on the time or day of the event. In case the alert is not acted upon within a defined time, further contact according to a defined escalation path are notified. 

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

### Notes

- Tabletop exercises / simulation exercises
- Centralized logging

# B: Incident Response

## Maturity 1
### Activity

The first step is to recognize the incident response competence as such and define an owner being responsible for its continuous development and keeping up with current state of incident handling best practices and forensic tooling. 

You usually don't go for dedicated incident response personnel on this maturity level, however the participants of the process are defined (could be for instance regular admins or developers helping in case of need) and it's generally known how the team can be contacted using a single point of contact. Conscious decision regarding reachibility of the personnel is made. 

When security incidents happen, the steps taken are documented, however this information can be protected from unauthorized access in case of need. 


### Maturity Questions
#### Q 1
Is it clear who's responsible for the incident response process?

**Answer Options**
SAMMQA-A:

- No
- Yes, it's less than a year old
- Yes, it's a number of years old
- Yes, it's a pretty mature program

#### Q 2
Are all security incidents documented?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

### Notes

- Define 'incident'


## Maturity 2
### Activity
Security incident response process is formally established and documented. The documentation should include information like: 

* Most probable/common scenarios of security incidents and high-level instruction how to handle them. For such scenarious, also public knowledge about possibly relevant 3rd-party incidents should be used
* Rules for triaging the incident
* Rules for involvement of different stakeholders, e.g. senior management, Public Relations, Legal, privacy, Human Resources, External (law enforcement) Authorities, Customers

Knowledgeable and properly trained staff should be available also outside of business hours with defined time to action. Both hardware and software tools should be kept up to date and ready to be used anytime. War room should be defined for cases when needed. 

The process should also include a policy for carrying out root cause analysis with the goal of improving both detection and response process.

### Maturity Questions
#### Q 1
Is the incident respone process including most probable scenarios documented and known?

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
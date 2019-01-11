---
business_functions : Implementation
title : Defect Management
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 30%
business_functions_weight: 3
type: security_practice
---

# Short Description

# Long Description

# Overview

|                                                              | A: Defect Tracking (Flaws/Bugs/Process)           | B: Metrics and Feedback/Learning                             |
| :----------------------------------------------------------- | :------------------------------------------------ | :----------------------------------------------------------- |
| Maturity 1 - All defects are tracked within each project     | Track all defects                                 | Calculate and share basic metrics, such as total counts      |
| Maturity 2 - Defect tracking used to influence the deployment process | Assign SLA based on security rating of the defect | Calculate more advanced metrics that include new issue velocity, remediation speed metrics, and trends. |
| Maturity 3 - Defect tracking across multiple components is used to help reduce the number of new defects | Measure and enforce compliance with the SLA       | Use trend analysis to influence changes in the Design and Implementation phase across multiple projects. |


# A: Defect Tracking (Flaws/Bugs/Process)

## Maturity 1
### Benefits
### Activity
Any and all security defects should be recorded and tracked in a central location. This location can be per team, project, or organisation-wide. Defects should be assigned meaningful categories, and should be prioritised based on the risk they pose.

Sources of defects should include, but not be limited to, those discovered via:

- Threat assessments
- Developers during self or peer code review
- Static analysis
- Dynamic analysis
- Vulnerability scans
- Penetration testing
- Malware scans
- Public/private vulnerability disclosures (e.g. for 3rd party libraries)
- Bug bounties

All defects should be qualified to ensure that the records only contain valid and significant issues.

Manageability should be considered. Within reason, it should possible to avoid duplicate defects being recorded (i.e. it should be easy to browse/search for similar issues). Defects that are duplicates should be merged. Issues that are very similar, particularly if they are remediated in the same way, could be grouped together.

The organisation should use these records to make decisions and resolve vulnerabilities. They should be updated when issues are resolved, tracking vulnerabilities over time. Security testing should be employed to ensure fixes are effective. Refer to [Verification > Security Testing](../../verification/v-security-testing).

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

<!--
#### Notes
"Any and all security defects should be recorded and tracked in a central location." - does this matter on level 1? Aggregate this per team/product? Not as an organisation. to be rephrased.  [Done by CC]
Should only be "validated or qualified" defects. [Added by CC]
vulnerability reports and scans should be input for this . [already there. CC]
security defect management includes vulnerability management [Added by CC]
fixing is implicitly implied in this stream [Added explicitly by CC]


#### Guidance
-->

## Maturity 2
### Benefits
### Activity
There is a well defined threshold for defects that require resolution and/or mitigation. Where this threshold is exceeded, the intention should be that the software is not deployed into production until the relevant defects are fixed, or fall below the threshold.

This quality gate may not only exist at deployment to production. It can come into force at whatever point the issue is detected. For instance, if an issue is detected by static analysis prior to build, the build system might prevent the software from building. However, deloyment to production is always the final and mandatory quality gate.

Organisations should set a threshold that is right for them. It might take into consideration: 

- the threat model
- the nature of applicable threats (i.e. skill level, motive, level of access, etc)
- how difficult it would be to find and exploit the issue
- potential impact to confidentiality, integrity, availability
- potential impact to the business

Organisations should look to use a well established risk rating methodology consistently across their defect management solution.

Agreement of an appropriate threshold should be reached between persons responsible for application security and key stakeholders. 

Relevant persons should be notified if a defect is raised that exceeds the defined threshold, and action should be taken to resolve or mitigate the issue before the software is deployed into a production environment. A satisfactory mitigation is one that reduces the risk to fall below the threshold.

Processes should be defined for dealing with defects that are deemed as false positives, or have existing compensating controls. In other words, some defects might be identified which - at face value - exceed the threshold, but should not prevent the software from being deployed. This might be because they are false positives and have therefore been misreported, or because there are existing mitigations that had not been taken into consideration. Such defects should still be recorded somewhere for accountability purposes. 

Defects below the threshold might be deployed into production environments, but these should still be considered for resolution or mitigation at a later time.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

<!--
#### Notes
is the quality gate only deployment? [Added by CC] 
definition and agreement of the "threshold" and related timelines is part of this maturity level activity  [Added by CC] 

#### Guidance
-->


## Maturity 3
### Benefits
### Activity
An individual or team outside of those responsible for developing and deploying the software (e.g. an information security officer) should be responsible for managing known defects and enforcing the threshold defined at maturity 2. 

Defects that exceed the threshold should block or prevent deployment into production, until they are resolved, or fall below the threshold. This could be achieved automatically in the build and deployment processes, if they are integrated with the defect management system. Alternatively, the deployment process could include a step that requires approval from an information security officer.

More emphasis is placed on maintaining the list of known defects, and ensuring that their risk rating and categorisations remain accurate over time (e.g. in-line with new research and changing opinions within the industry, as well as other factors like the improving capabilities of some adversaries). 

This includes managing lists of defects that have been accepted, mitigated, or marked as a false positives. Accepted and mitigated risks should be reconsidered periodically to ensure that they are suitable to keep their statuses (e.g. to identify a defect that now poses a greater risk because a mitigating control has been changed or removed).

### Maturity Questions

#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators


# B: Metrics and Feedback/Learning

## Maturity 1
### Benefits
### Activity
Basic information about defects is calculated, shared, and used to make decisions about remediation. Basic information might include: 

- The total number of defects. Tracking this over time shows the effectiveness of resolution efforts.
- The software components the defect resides in, which is indicative of where attention is most required, and where security flaws are most likely to appear in the future.
- The type / category of the defect, which suggests areas where the development team might need further training.
- The severity of the defect, which helps the organisation understand the software's risk exposure in a simple way.

Outcomes are fed back to the teams involved. This data is used to inform decision-making in terms of remediation priority, and training requirements (i.e. secure development).

Defects are considered within the wider metrics throughout the oragnisation. See [Governance > Strategy & Metrics](../g-strategy-metrics) > B.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

<!--
#### Notes
first align on objectives of these metrics and flesh out overlap with BG Governance.  [CC - still to do]
add mean time to fix here? 

levels? 
1: provide feedback to the team [done by CC]
2: learn from it accross teams and provide feedback to the organisations, looking for trends 
3: optimized practices and share statictics
-->


## Maturity 2
### Benefits
### Activity
More advanced metrics are calculated and shared. These can include:

- Formal risk ratings that consider likelihood and impact.
- Number of open vulnerabilities above a defined threshold in terms of severity or risk.
- Risk per software component / product / project / business unit.
- Amount of accepted risk.
- Time to detect vulnerabilities.
- Time to resolve vulnerabilities.
- Window of exposure where vulnerabilities are detected on live systems.
- Coverage of software components by verification tests.
- Number of regressions / reopened vulnerabilities.

This data is available in an accessible way to management, information security persons, developers and engineers who may use it to inform their decision-making. For example, a central dashboard might be provided.

A reliable baseline is established over time for the metrics being collected. Once this baseline is in place, reasonable goals can be set to measure the effectiveness of the overall programme. 

### Maturity Questions

#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

<!--
#### Notes
learn from the metrics 
identify patterns  
getting more granular 
enhance trainings, libraries, ...
describe the type of lessons learned and put more emphasis on this 

-->

## Maturity 3
### Benefits
### Activity
Defects are complimented with a range of fields, such as:

- Category
- CVE / CWE
- Software component
- Business unit
- Exploitability
- Impact
- Risk
- CVSS

Different metrics and fields are combined to look for trends. Trends across various timespans are identified through graphs. Analyse these trends continually and use the findings to influence the design and implementation of software, as well as the overall security stategy.

### Maturity Questions

#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

<!--
#### Notes
accross multiple projects/teams 
put more focus on the feedback part
change the SDLC   

-->

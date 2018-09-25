---
business_functions : Implementation
title : Defect Management
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 0%
business_functions_weight: 3
type: security_practice
---

# Overview

| | A: Defect Tracking (Flaws/Bugs/Process) | B: Metrics and Feedback/Learning |
|:---|:---|:---|
| Maturity 1 - All defects are tracked within each project | Track all defects | Calculate and share basic metrics, such as total counts |
| Maturity 2 - Defect tracking used to influence the deployment process | Assign SLA based on security rating of the defect | Calculate more advanced metrics that include new issue velocity, remediation speed metrics, and trends. |
| Maturity 3 - Defect tracking across multiple components is used to help reduce the number of new defects | Measure and enforce compliance with the SLA | Use trend analysis to influence changes in the Design and Implementation phase across multiple projects. |


# A: Defect Tracking (Flaws/Bugs/Process)

## Maturity 1
### Activity
Any and all security defects should be recorded and tracked in a central location. Defects should be assigned meaningful categories, and should be prioritised based on the risk they pose.

Sources of defects should include, but not be limited to, those discovered via:

- Developers during self or peer code review
- Static analysis
- Dynamic analysis
- Vulnerability scans
- Penetration testing
- Malware scans
- Public/private vulnerability disclosures (e.g. for 3rd party libraries)
- Bug bounties

Manageability should be considered. Within reason, it should possible to avoid duplicate defects being recorded (i.e. it should be easy to browse/search for similar issues). Defects that are duplicates should be merged. Issues that are very similar, particularly if they are remediated in the same way, could be grouped together.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 2
### Activity
There is a well defined threshold for defects that require resolution and/or mitigation. Where this threshold is exceeded, the intention should be that the software is not deployed into production until the relevant defects are fixed, or fall below the threshold.

Organisations should set a threshold that is right for them. It might take into consideration: 

- the nature of applicable threats (i.e. skill level, motive, level of access, etc)
- how difficult it would be to find and exploit the issue
- potential impact to confidentiality, integrity, availability
- potential impact to the business

Organisations should look to use a well established risk rating methodology consistently across their defect management solution.

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

#### Notes


## Maturity 3
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

#### Notes


# B: Metrics and Feedback/Learning

## Maturity 1
### Activity
Establish a general baseline for different software defects

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



## Maturity 2
### Activity
Focus on identifyng triggers that may indicate successful or failing trends

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



## Maturity 3
### Activity
Look for patterns that may benefit different development teams

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

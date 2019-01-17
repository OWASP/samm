---
business_functions : Implementation
title : Defect Management
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 30%
weight: 3
type: security_practice
---

# Short Description
This practice focuses on managing security defects in software and their associated metrics.

# Long Description
The Defect Management practice focuses on collecting, recording, and analysing software security defects and enriching them with information to drive metrics-based decisions.

The practice’s first stream deals with the process of handling and managing defects to ensure released software has a given assurance level. The second stream focuses on enriching the information about the defects and deriving metrics to guide decisions about the security of individual projects and of the security assurance program as a whole.

In a sophisticated form, the practice requires formalised, independent defect management and real-time, correlated information to detect trends and influence security strategy.

# Overview

|                                                              | A: Defect Tracking (Flaws/Bugs/Process)           | B: Metrics and Feedback/Learning                             |
| :----------------------------------------------------------- | :------------------------------------------------ | :----------------------------------------------------------- |
| Maturity 1 - All defects are tracked within each project     | Track all defects                                 | Calculate and share basic metrics, such as total counts      |
| Maturity 2 - Defect tracking used to influence the deployment process | Assign SLA based on security rating of the defect | Calculate more advanced metrics that include new issue velocity, remediation speed metrics, and trends. |
| Maturity 3 - Defect tracking across multiple components is used to help reduce the number of new defects | Measure and enforce compliance with the SLA       | Use trend analysis to influence changes in the Design and Implementation phase across multiple projects. |


# A: Defect Tracking (Flaws/Bugs/Process)

## Maturity 1
### Benefits
All software security defects are recorded centrally.

### Activity
Track and record all security defects in a central location. This location can be team, project, or organisation-wide. Give defects meaningful categories, and prioritise them based on the risk they pose.

Sources of defects include, but are not limited to, those discovered via:

- Threat assessments
- Developers during self or peer code review
- Static analysis
- Dynamic analysis
- Vulnerability scans
- Penetration testing
- Malware scans
- Public/private vulnerability disclosures (e.g. for 3rd party libraries)
- Bug bounties

Qualify all defects so the records only contain valid and significant issues. Consider manageability. void recording duplicate defects, for example, searching  for similar issues. Merge duplicates and group similar issues,, particularly if you will handle them in the same way.
The organisation uses these records to make decisions and resolve vulnerabilities. Update the records when issues are resolved, tracking vulnerabilities over time. Employ security testing to ensure fixes are effective. Refer to [Verification > Security Testing](../../verification/v-security-testing).


## Maturity 2
### Benefits
Minimal defect quality gates are enforced throughout the SDLC.

### Activity
Define a threshold for defects that require resolution or mitigation. You do not deploy software into production when this threshold is exceeded, until the relevant defects are fixed, or fall below the threshold.

This quality gate may also exist at whatever point the issue is detected. For instance, if you detect an issue by static analysis prior to build, the build system might prevent the software from building. However, deployment to production is always the final and mandatory quality gate.

To set a threshold that is right your organisation, take into consideration:

- the threat model
- the nature of applicable threats (i.e. skill level, motive, level of access, etc)
- how difficult it would be to find and exploit the issue
- potential impact to confidentiality, integrity, availability
- potential impact to the business

Use a well established risk rating methodology consistently across your defect management solution.

The people responsible for application security and key stakeholders reach an agreement regarding an appropriate threshold.

You notify relevant people if a defect exceeds the defined threshold, and take action to resolve or mitigate the issue before deploying the software into a production environment. A satisfactory mitigation is one that reduces the risk below the threshold.

Define processes for dealing with false positive defects, or ones with existing compensating controls. In other words, some defects identified as exceeding the threshold should not prevent the software from being deployed. This might be because they have been misreported, or because you have not considered existing mitigations. Record such defects for accountability purposes.

Consider defects below the threshold deployed into production environments for resolution or mitigation at a later time.


## Maturity 3
### Benefits
Quality gates are enforced by a security officer following formal processes.

### Activity
An individual or team outside of those responsible for developing and deploying the software (e.g. an information security officer) is responsible for managing known defects and enforcing the defined threshold.

Defects that exceed the threshold block or prevent deployment into production, until they are resolved, or fall below the threshold. You can do this automatically in the build and deployment processes, if they are integrated with the defect management system. Alternatively, the deployment process could include a step that requires approval from an information security officer.

Keep a list of known defects, with accurate risk rating and categorisations over time (e.g. in-line with new research and changing opinions within the industry, and improving capabilities of some adversaries).

This includes managing lists of defects that have been accepted, mitigated, or marked as a false positives. Review the status of accepted and mitigated risks periodically (e.g. to identify a defect that now poses a greater risk because a mitigating control has been changed or removed).


# B: Metrics and Feedback/Learning

## Maturity 1
### Benefits
Basic information about defects is shared and used for remediation and training decisions.

### Activity
Basic information about defects is calculated, shared, and used to make decisions about remediation. Basic information might include:

- The total number of defects. Tracking this over time shows the effectiveness of resolution efforts.
- The software components the defect resides in, which is indicative of where attention is most required, and where security flaws are most likely to appear in the future.
- The type or category of the defect, which suggests areas where the development team need further training.
- The severity of the defect, which can help the organisation understand the software's risk exposure.

Outcomes are fed back to the teams involved. This data is used to make decisions about remediation priority and training requirements.

Defects are considered within the wider metrics throughout the oragnisation. See [Governance > Strategy & Metrics](../g-strategy-metrics) > B.


## Maturity 2
### Benefits
Advanced defect metrics are calculated and shared and used to taylor the assurance program.

### Activity
Calculate and share more advanced metrics. These can include:

- Formal risk ratings that consider likelihood and impact.
- Number of open vulnerabilities above a defined threshold in terms of severity or risk.
- Risk per software component / product / project / business unit.
- Amount of accepted risk.
- Time to detect vulnerabilities.
- Time to resolve vulnerabilities.
- Window of exposure where vulnerabilities are detected on live systems.
- Coverage of software components by verification tests.
- Number of regressions / reopened vulnerabilities.

The risk metric takes into account the criticality of the asset and the resulting business impact. Defects are mapped to threats to better understand their risk to the organization. See Design > Threat Assessment > B.

Tools such as spreadsheets or dedicated vulnerability tracking software are used to calculate metrics automatically. This makes collecting and acting on metrics a managable exercise.

Make this data accessible to management, information security people, developers, and engineers to inform their decision-making. For example, provide a central dashboard. Metrics should guide remediation efforts and resource allocation.

Security teams are able to report an accurate picture of the organisation's defect and risk metrics to executive management.

A reliable baseline is established over time for the metrics being collected. Once this baseline is in place, reasonable goals can be set to measure the effectiveness of the overall programme.



## Maturity 3
### Benefits
Defect metrics are enriched with real time information and correlated to detect trends and influence the overall security strategy.

### Activity
Add information to defects, such as:

- Category
- CVE / CWE
- Software component
- Business unit
- Exploitability
- Impact
- Risk
- CVSS

For each defect, up-to-date or real-time data on the availability of exploits and hacker activity in the wild is used to contribute to risk scores.

Different metrics and fields are combined to look for trends. Trends across various timespans are identified through graphs and dashboarding. Trends are analysed and the results are used to influence the design and implementation of software and the overall security stategy.

Metrics are used to empower the whole organisation. People and teams all receive the correct information that is relevant to their role(s). Tasks are assigned appropriately and sometimes automatically.

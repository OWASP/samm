---
business_functions : Governance
title : Strategy & Metrics
assignedto       : Yan Kravchenko (@yanfosec)
complete         : 20%
status           : draft        #new, draft, for_review, release_candidate, done
business_functions_weight: 1
type: security_practice
---


# Proposed Overview

| | A: Create and Promote | B: Measure and Improve |
|:---|:---|:---|
| Maturity 1 - Identify objectives and means of measuring effectiveness of the security program | Identify organisation drivers as they relate to the organization's risk tolerance | Define metrics with insight into the effectiveness and efficiency of the Application Security Program |
| Maturity 2 - Establish a unified strategic roadmap for software security within the organization. | Publish a unified strategy for application security  | Set targets and KPI's for measuring the program effectiveness |
| Maturity 3 - Align security efforts with the relevant organizational indicators and asset values. | Align security remediation efforts with organizational indicators, asset value | Influence the strategy based on the metrics and organizational needs |

# A: Create and Promote

## Maturity 1
### Activity
Understand, based on application risk exposure, what threats exist or may exist, as well as how tolerant executive leadership is of these risks.  This understanding is a key component of determining software security assurance priorities.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
should also include organisational perspective + link to business priorities and regulatory compliance
The goal here is to promote the metrics as well as the application security program.

## Maturity 2
### Activity
Based on the magnitude of assets, threats, and risk tolerance, develop a security strategic plan and budget to address business priorities around application security.  Brief stakeholders and obtain buy-in.

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
Develop a centralized dashboard accessible by all stakeholders to show progress on a program-by-program basis.  It can be useful to call out security spend effectiveness here.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


# B: Measure and Improve

## Maturity 1
### Activity
Define and document metrics to help measure the effectiveness and efficiency of the application security program and help ensure improvements are measurable and can be used to secure future support and funding for the program.  Considering the dynamic nature of most  development environments, metrics should be comprised of measurements in the following categories:

* `Effort` metrics measure the amount of effort expended on security.  For example training hours, time spent performing code reviews, or a number of applications scanned for vulnerabilities.
* `Result` metrics attempt to measure the results of security efforts.  Examples of result metrics include a number of unpatched security defects or a number of security incidents involving application vulnerabilities.
* `Environment` metrics measure the environment in which security efforts take place.  Examples include a number of applications or lines of code as a measure of difficulty or complexity.  

Each measure by itself may be useful for a specific purpose, but a combination of two or three metrics together will help intuitively explain spikes in metrics trends.  For example, a spike in a total number of vulnerabilities may be caused by the organization onboarding several new applications that have not been previously exposed to the implemented application security mechanisms.  Alternatively, an increase in the environment metrics without a corresponding increase in the effort or result could be an indicator of a mature and efficient security program.

While identifying metrics, it's always recommended to stick to the metrics that meet several criteria:

* Consistently Measured
* Inexpensive to gather
* Expressed as a cardinal number or a percentage
* Expressed as a unit of measure

Metrics should be documented and include descriptions of best and most efficient methods for gathering data, as well as recommended methods for combining individual measures into meaningful metrics.  For example, a number of applications and a total number of defects across all applications may not be useful by themselves, but when combined as a number of outstanding high-severity defects per application could provide a more valuable and actionable metric.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Assets is to be interpreted broader than the software only.

We should make sure that we address metrics from the stand point of:
- Metrics to measure the maturity of each BF and SP
- Non-Defect related metrics that measure activities such as training, threat assessments, etc
- Defect-related such as bugs / issues / etc

We should make sure to reference all other Security Practices and activities within the model, such as Implementation Defect Tracking metrics


## Maturity 2
### Activity
Once the organization has defined its application security metrics, it's important to collect enough information to establish a  baseline for setting realistic goals.  Additionally, identified metrics should be tested to ensure data can be gathered consistently and efficiently over a short period.  Once the initial testing period is complete, the organization should have enough information to commit to goals and objectives expressed through Key Performance Indicators (KPIs).  

While several different measurements could be useful for monitoring the information security program and its effectiveness, KPIs should only be comprised of the most meaningful and effective metrics.  Organizations should also aim to remove commonplace volatility common in application development environments from KPIs to reduce chances of unfavorable numbers resulting from temporary or misleading individual measurements.  Instead, KPIs should be based on metrics considered valuable not only to Information Security professionals but also to individual responsible for the overall success of the application and organization's leadership.  KPIs should be viewed as definitive indicators of the success of the whole program and considered actionable, if necessary.

KPIs should be fully documented and distributed to the teams contributing to the success of the program as well as organization's leadership.  Ideally, documentation should include a brief explanation of the information sources for each KPI and the meaning if the numbers are high or low.  KPIs should consist of short and long-term goals, as well as ranges for unacceptable measurements requiring immediate intervention or action.  Action plans should be shared with application security and application development teams to ensure full transparency in understanding of the organization's objectives and goals.

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
Define guidelines for influencing the Application Security program based on the KPIs and other application security metrics.  These guidelines should take in the account maturity of the application development processes and procedures, and combine them with different metrics to ensure the program becomes more efficient over time.  The following examples show a relationship between measurements and ways of evolving and improving application security:

* Focus on maturity of the development lifecycle will ensure the relative cost per defect is lower by applying security proactively.
* Monitoring the balance between effort, result, and environment metrics will help ensure the program is efficient and justify additional automation and other efficient methods for improving the overall application security baselines.
* Individual Security Practices could provide indicators of success or failure of individual application security initiatives.
* Effort metrics can help ensure application security work is directed at the more relevant and important technologies and disciplines

In defining the overall metrics strategy it's important to keep the end-goal in mind and define decisions that can be made as a result of changes in KPIs and metrics as soon as possible, to help guide development of metrics.  


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

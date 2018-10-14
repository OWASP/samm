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
| Maturity 3 - Align security efforts with the relevant organizational indicators and asset values. | Align the application security program to support the organization's growth | Influence the strategy based on the metrics and organizational needs |

# A: Create and Promote

## Maturity 1
### Activity
Understand, based on application risk exposure, what threats exist or may exist, as well as how tolerant executive leadership is of these risks.  This understanding is a key component of determining software security assurance priorities.  In order to ascertain these threats, it's important to interview business owners and stakeholders to document drivers specific to one or more industries in which the organization operates as well as drivers specific to the organization.  Gathered information should include worst-case scenarios that could adversely impact the organization, as well as any opportunities where a more optimized software development lifecycle and more secure applications could provide a market-differentiator or create additional opportunities.

Gathered information should provide a baseline against which the organization should develop and promote its application security program, prioritized to ensure it addresses threats and opportunities most important to the organization.  The baseline should be split into several risk factors and drivers that could be linked directly to the organization's priorities and used to help build a risk profile of each custom-developed application by documenting how they can impact the organization if they are compromised.

The baseline and individual risk factors should be published and made available to application development teams in an effort to ensure a more transparent process of creating application risk profiles and beginning to incorporate organization's priorities into the program.  Additionally, these goals should provide a set of objectives which should be used to ensure all application security program enhancements provide direct support of the organization's current and future needs.

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

**Summit MN**:
* identify objectives, not drivers
* some of the writing is linked to rather to business than to applications -> talk about organization/business risk rather than application risk
* link betwwen application risk profile (design -> threat assessnent) and this level should be made
* baseline = minimal set of requirements which all aplications within the organization have to meet
* It might be better to work with risk drivers rather than threats (is it sensibvle to start rather positively?) - maybe add sth like "depending on your culture" or put it in the implementation guidance

#### Guidance

## Maturity 2
### Activity
Based on the magnitude of assets, threats, and risk tolerance, develop a security strategic plan and budget to address business priorities around application security.  The plan should provide a 3-5 year strategy and include milestones consistent with the organization's business drivers and risks.  The plan should provide tactical and strategic initiatives and follow a roadmap that can be used to show the program is aligned with business priorities and needs.

In developing the roadmap it's essential to reach a balance between changes requiring financial expenditures, changes of processes and procedures, and changes impacting the organization's culture.  This balance will help ensure multiple milestones can be accomplished concurrently and without overloading or exhausting available resources or development teams.  Additionally, the milestones should be frequent enough to help monitor whether the program is successful and provide timely triggers for making roadmap adjustments.  

In order to ensure the program is successful, the application security team should obtain buy-in from organization's stakeholders as well as application development teams essential to the success of the overall plan.  A published plan should be available to anyone who is required to support or participate in its implementation.  

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

**Summit MN:**
* short description: establish roadmaps AND KPIs
* 3-5 year strategy is too long, maybe 1-3 years?

## Maturity 3
### Activity
The application security plan should be periodically reviewed for ongoing applicability and support of the organization's evolving needs and future growth.  To do this, steps outlined in the first two maturity levels of this Security Practice should be periodically repeated, at least annually.  The goal should be to ensure the plan is always supporting the current and future needs of the organization, which will help ensure the program is better aligned with the business.

In addition to reviewing the business drivers, the organization should also closely monitor the success of the implementation of each of the roadmap milestones.  The success of the milestones should be evaluated based on a wide range of criterion, including completeness and efficiency of the implementation, budget considerations, and any cultural impacts or changes resulting from the initiative.  Missed or unsatisfactory milestones should be reviewed and evaluated for possible changes and adjustments to the overall program.

Organizations should also work to develop a series of dashboards and measurements using which management and teams responsible for software development could monitor the implementation of the roadmap.  These dashboards should be detailed enough to identify individual projects and initiatives as well as provide a clear understanding of whether the program is successful and is aligned with the organization's needs.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

**Summit MN:**
* maybe consider only focus on metrics
* develop a set of dashboards -> make sure that metrics support it 
* rephrase level 3, last paragraph focus on challenging the efficiency of the metrics


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

**Summit MN:**
* decrease of number of vulnerabilites is 2nd order metrics, focus on 1st level metrics
* number of base metrics and deduced metrics -> might be sensible to mention it
* we can call the metrics from defect tracking as an example
* "result" is a better word rather than "impact" (just stressing the fact)
* "most efficient matter for gathering data" -> mention that you can gather data in a manual or automated (preferred) way 
* "Expressed as a unit of measure" -> units should be the ones people care about ("covered lines of code" not a good example)
* CMMI levels not very recognizeable in the description of all levels (Best effort / Process and alignment / Improving and measuring)
* we don't mention that one of the metrics is budget spent 
* what are the drivers for definition of a particular metric? Which metrics are useful? Should we measure anything we can or not? Some ground should be laid in the practice description
* measuring SAMM Maturity as an example as well?
* discussion on inexpensive vs expensive metrics - cost/benefit? or just cost e.g. in term of hours?
* Maybe some of the metrics to be put on level 2? bar too high?
* discussion about coverage? where to start? (probably rather easy)
* measurement and risk mgmt? Should there be more of it? - no decision

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

**Summit MN:**

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

#### Notes

**Summit MN:**

* level 3 should be about driving and correcting your program - not very visible in the description

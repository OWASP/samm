---
business_functions : Governance
title : Strategy & Metrics
assignedto       : Yan Kravchenko
complete          : 90%
weight: 1
type: security_practice
---
# Short Description

This practice forms the basis of your secure software activities by building an overall plan.

# Long Description

Software assurance entails many different activities and concerns. Without an overall plan, you might be spending a lot of effort to build in security, while in fact your efforts may be unaligned, disproportional or even counter-productive. The goal of this security practice is to build an efficient and effective plan for realizing your software security objectives within your organization.

A software security program, that selects and prioritizes activities of the rest of the model, serves as the foundation for your efforts. The practice works on building the plan, maintaining and disseminating it.

At the same time, you want to keep track of your security posture and program improvements. A metrics-driven approach is included to ensure an accurate view on your activities. To measure is to know.


# Overview

| | A: Create and Promote | B: Measure and Improve |
|:---|:---|:---|
| Maturity 1 - Identify objectives and means of measuring effectiveness of the security program. | Identify organization drivers as they relate to the organization’s risk tolerance. | Define metrics with insight into the effectiveness and efficiency of the Application Security Program. |
| Maturity 2 - Establish a unified strategic roadmap for software security within the organization. | Publish a unified strategy for application security. | Set targets and KPI’s for measuring the program effectiveness. |
| Maturity 3 - Align security efforts with the relevant organizational indicators and asset values. | Align the application security program to support the organization’s growth. | Influence the strategy based on the metrics and organizational needs. |


# A: Create and Promote

## Maturity 1

### Benefit

Have a common understanding of an application security baseline.

### Activity

Understand, based on application risk exposure, what threats exist or may exist, as well as how tolerant executive leadership is of these risks. This understanding is a key component of determining software security assurance priorities. To ascertain these threats, interview business owners and stakeholders and document drivers specific to industries where the organization operates as well as drivers specific to the organization. Gathered information includes worst-case scenarios that could impact the organization, as well as opportunities where an optimized software development life-cycle and more secure applications could provide a market-differentiator or create additional opportunities.

Gathered information provides a baseline for the organization to develop and promote its application security program. Items in the program are prioritized to address threats and opportunities most important to the organization. The baseline is split into several risk factors and drivers linked directly to the organization’s priorities and used to help build a risk profile of each custom-developed application by documenting how they can impact the organization if they are compromised.

The baseline and individual risk factors should be published and made available to application development teams to ensure a more transparent process of creating application risk profiles and incorporating the organization’s priorities into the program. Additionally, these goals should provide a set of objectives which should be used to ensure all application security program enhancements provide direct support of the organization’s current and future needs.


#### Maturity Questions

{{< questions "Strategy & Metrics" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

Have an aligned plan and roadmap within the organization.

### Activity

Based on the magnitude of assets, threats, and risk tolerance, develop a security strategic plan and budget to address business priorities around application security. The plan covers 1 to 3 years and includes milestones consistent with the organization’s business drivers and risks. It provides tactical and strategic initiatives and follows a roadmap that makes its alignment with business priorities and needs visible.

In the roadmap reach a balance between changes requiring financial expenditures, changes of processes and procedures, and changes impacting the organization’s culture. This balance helps accomplish multiple milestones concurrently and without overloading or exhausting available resources or development teams. The milestones are frequent enough to help monitor program success and trigger timely roadmap adjustments.

For the program to be successful, the application security team obtains buy-in from the organization’s stakeholders and application development teams. A published plan is available to anyone who is required to support or participate in its implementation.


### Maturity Questions

{{< questions "Strategy & Metrics" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Continuous improvement of your application security efforts.

### Activity

You review the application security plan periodically for ongoing applicability and support of the organization’s evolving needs and future growth. To do this, you repeat the steps from the first two maturity levels of this Security Practice at least annually. The goal is for the plan to always support the current and future needs of the organization, which ensures the program is aligned with the business.

In addition to reviewing the business drivers, the organization closely monitors the success of the implementation of each of the roadmap milestones. You evaluate the success of the milestones based on a wide range of criteria, including completeness and efficiency of the implementation, budget considerations, and any cultural impacts or changes resulting from the initiative. You review missed or unsatisfactory milestones and evaluate possible changes to the overall program.

The organization develops dashboards and measurements for management and teams responsible for software development to monitor the implementation of the roadmap. These dashboards are detailed enough to identify individual projects and initiatives and provide a clear understanding of whether the program is successful and aligned with the organization’s needs.


### Maturity Questions

{{< questions "Strategy & Metrics" "A" 3 >}}

#### Notes



# B: Measure and Improve

## Maturity 1

### Benefit

Have a set of base metrics to provide insight into software security.

### Activity

Define and document metrics to evaluate the effectiveness and efficiency of the application security program. This way improvements are measurable and you can use them to secure future support and funding for the program. Considering the dynamic nature of most development environments, metrics should be comprised of measurements in the following categories

* `Effort` metrics measure the effort spent on security. For example training hours, time spent performing code reviews, and number of applications scanned for vulnerabilities.
* `Result` metrics measure the results of security efforts. Examples include number of unpatched security defects and number of security incidents involving application vulnerabilities.
* `Environment` metrics measure the environment where security efforts take place. Examples include number of applications or lines of code as a measure of difficulty or complexity.  

Each measure by itself is useful for a specific purpose, but a combination of two or three metrics together helps explain spikes in metrics trends. For example, a spike in a total number of vulnerabilities may be caused by the organization on-boarding several new applications that have not been previously exposed to the implemented application security mechanisms. Alternatively, an increase in the environment metrics without a corresponding increase in the effort or result could be an indicator of a mature and efficient security program.

While identifying metrics, it’s always recommended to stick to the metrics that meet several criteria

* Consistently Measured
* Inexpensive to gather
* Expressed as a cardinal number or a percentage
* Expressed as a unit of measure

Document metrics and include descriptions of best and most efficient methods for gathering data, as well as recommended methods for combining individual measures into meaningful metrics. For example, a number of applications and a total number of defects across all applications may not be useful by themselves but, when combined as a number of outstanding high-severity defects per application, they provide a more actionable metric.


### Maturity Questions

{{< questions "Strategy & Metrics" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

A set of concrete objectives has been established to guide your improvement efforts.

### Activity

Once the organization has defined its application security metrics, collect enough information to establish realistic goals. Test identified metrics to ensure you can gather data consistently and efficiently over a short period. After the initial testing period, the organization should have enough information to commit to goals and objectives expressed through Key Performance Indicators (KPIs).

While several measurements are useful for monitoring the information security program and its effectiveness, KPIs are comprised of the most meaningful and effective metrics. Aim to remove volatility common in application development environments from KPIs to reduce chances of unfavorable numbers resulting from temporary or misleading individual measurements. Base KPIs on metrics considered valuable not only to Information Security professionals but also to individuals responsible for the overall success of the application, and organization’s leadership. View KPIs as definitive indicators of the success of the whole program and consider them actionable.

Fully document KPIs and distribute them to the teams contributing to the success of the program as well as organization’s leadership. Ideally, include a brief explanation of the information sources for each KPI and the meaning if the numbers are high or low. Include short and long-term goals, and ranges for unacceptable measurements requiring immediate intervention. Share action plans with application security and application development teams to ensure full transparency in understanding of the organization’s objectives and goals.


### Maturity Questions

{{< questions "Strategy & Metrics" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Your application security program is fundamentally driven by objective measures and concrete goals.

### Activity

Define guidelines for influencing the Application Security program based on the KPIs and other application security metrics. These guidelines  combine the maturity of the application development process and procedures  with different metrics to make the program more efficient. The following examples show a relationship between measurements and ways of evolving and improving application security

* Focus on maturity of the development life-cycle makes the relative cost per defect lower by applying security proactively.
* Monitoring the balance between effort, result, and environment metrics improves the program’s efficiency and justifies additional automation and other methods for improving the overall application security baselines.
* Individual Security Practices could provide indicators of success or failure of individual application security initiatives.
* Effort metrics helps ensure application security work is directed at the more relevant and important technologies and disciplines.

When defining the overall metrics strategy, keep the end-goal in mind and define what decisions can be made as a result of changes in KPIs and metrics as soon as possible, to help guide development of metrics.


### Maturity Questions

{{< questions "Strategy & Metrics" "B" 3 >}}

#### Notes


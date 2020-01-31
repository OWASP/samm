<div class="new-page"/>
### Strategy & Metrics (SM1)

The goal of this practice level is to identify objectives and means of measuring effectiveness of the security program.

#### Activities

##### [Stream A] Identify the organization's risk appetite
<b>Benefit</b>: <i>Common understanding of your organization's security posture</i>

Understand, based on application risk exposure, what threats exist or may exist, as well as how tolerant executive leadership is of these risks. This understanding is a key component of determining software security assurance priorities. To ascertain these threats, interview business owners and stakeholders and document drivers specific to industries where the organization operates as well as drivers specific to the organization. Gathered information includes worst-case scenarios that could impact the organization, as well as opportunities where an optimized software development lifecycle and more secure applications could provide a market-differentiator or create additional opportunities.

Gathered information provides a baseline for the organization to develop and promote its application security program. Items in the program are prioritized to address threats and opportunities most important to the organization. The baseline is split into several risk factors and drivers linked directly to the organization’s priorities and used to help build a risk profile of each custom-developed application by documenting how they can impact the organization if they are compromised.

The baseline and individual risk factors should be published and made available to application development teams to ensure a more transparent process of creating application risk profiles and incorporating the organization’s priorities into the program. Additionally, these goals should provide a set of objectives which should be used to ensure all application security program enhancements provide direct support of the organization’s current and future needs.


###### Assessment Question(s)
Do you understand the enterprise-wide risk appetite for your applications ?

- No
- Yes, it covers general risks
- Yes, it covers organization-specific risks
- Yes, it covers risks and opportunities


Quality Criteria:

- You capture the risk appetite of your organization's executive leadership
- The organization's leadership vet and approve the set of risks
- You identify the main business and technical threats to your assets and data
- You document risks and store them in an accessible location


##### [Stream B] Define basic security metrics
<b>Benefit</b>: <i>Basic insights into your AppSec program's effectiveness and efficiency</i>

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


###### Assessment Question(s)
Do you use a set of metrics to measure the effectiveness and efficiency of the application security program across applications?

- No
- Yes, for one metrics category
- Yes, for two metrics categories
- Yes, for all three metrics categories


Quality Criteria:

- You document each metric, including a description of the sources, measurement coverage, and guidance on how to use it to explain application security trends
- Metrics include measures of efforts, results, and the environment measurement categories
- Most of the metrics are frequently measured, easy or inexpensive to gather, and expressed as a cardinal number or a percentage
- Application security and development teams publish metrics


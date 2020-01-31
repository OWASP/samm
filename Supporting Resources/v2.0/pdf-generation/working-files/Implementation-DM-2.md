<div class="new-page"/>
### Defect Management (DM2)

The goal of this practice level is to defect tracking used to influence the deployment process.

#### Activities

##### [Stream A] Rate and track security defects
<b>Benefit</b>: <i>Consistent classification of security defects with clear expecations of their handling</i>

Introduce and apply a well defined rating methodology for your security defects consistently across the whole organization, based on the probability and expected impact of the defect being exploited. This will allow you to identify applications which need higher attention and investments. In case you don't store the information about security defects centrally, ensure that you're still able to easily pull the information from all sources and get an overview about "hot spots" needing your attention.

Introduce SLAs for timely fixing of security defects according to their criticality rating and centrally monitor and regularly report on SLA breaches. Define a process for cases where it's not feasible or economical to fix a defect within the time defined by the SLAs. This should at least ensure that all relevant stakeholders have a solid understanding of the imposed risk. If suitable, employ compensating controls for these cases.

Even if you don't have any formal SLAs for fixing low severity defects, ensure that responsible teams still get a regular overview about issues affecting their applications and understand how particular issues affect or amplify each other.


###### Assessment Question(s)
Do you keep an overview of the state of security defects across the organization?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- A single severity scheme is applied to all defects across the organization
- The scheme includes SLAs for fixing particular severity classes
- You regularly report compliance to SLAs


##### [Stream B] Define advanced defect metrics
<b>Benefit</b>: <i>Improved learning from security defects in your organization</i>

Define, collect and calculate unified metrics across the whole organization. These might include:

* Total amount of verification activites and identified defects.
* Types and severities of identified defects.
* Time to detect and time to resolve defects.
* Windows of exposure of defects being present on live systems.
* Number of regressions / reopened vulnerabilities.
* Coverage of verification activities for particular software components.
* Amount of accepted risk.
* Ratio of security incidents caused due to unknown or undocumented security defects.

Generate a regular (e.g. monthly) report for a suitable audience. This would typically reach audience like managers and security officer and engineers. Use the information in the report as an input for your security strategy, e.g. improving trainings or security verification activities.

Share the most prominent or interesting technical details about security defects including the fixing strategy to other teams once these defects are fixed, e.g. in a regular knowledge sharing meeting. This will help scale the learning effect from defects to the whole organization and limit their occurence in the future.


###### Assessment Question(s)
Do you improve your security assurance program upon standardized metrics?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You document metrics for defect classification and categorization and keep them up to date
- Executive management regularly receives information about defects and has acted upon it in the last year
- You regularly share technical details about security defects among teams


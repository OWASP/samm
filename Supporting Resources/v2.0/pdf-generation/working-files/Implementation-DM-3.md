<div class="new-page"/>
### Defect Management (DM3)

The goal of this practice level is to defect tracking across multiple components is used to help reduce the number of new defects.

#### Activities

##### [Stream A] Enforce an SLA for defect management
<b>Benefit</b>: <i>Assurance that security defects are handled within predefined SLAs</i>

Implement an automated alerting on security defects if the fix time breaches the defined SLAs. Ensure that these defects are automatically transfered into the risk management process and rated by a consistent quantitative methodology. Evaluate how particular defects influence / amplify each other not only on the level of separate teams, but on the level of the whole organization. Use the knowledge of the full kill chain to prioritize, introduce and track compensating controls mitigating the respective business risks.

Integrate your defect management system with the automated tooling introduced by other practices, e.g.:

* Build and Deployment: Fail the build / deployment process if security defects above certain severity affect the final artifact, unless someone explicitely signs off the exception.
* Monitoring: If possible, ensure that abuse of the security defect in production environment is recognized and alerted.


###### Assessment Question(s)
Do you enforce SLAs for fixing security defects?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You automatically alert of SLA breaches and transfer respective defects to the risk management process
- You integrate relevant tooling (e.g. monitoring, build, deployment) with the defect management system


##### [Stream B] Use metrics to improve the security strategy
<b>Benefit</b>: <i>Optimized security strategy based on defect information</i>

Regularly (at least once per year) revisit the defect management metrics you're collecting and compare the effort needed to collect and track these to the expected outcomes. Make knowledgeable decision about removing metrics which don't deliver the overall expected value. Wherever possible, include and automate verification activities for the quality of the collected data and ensure sustainable improvement if any differences are detected.

Aggregate the data with your threat intelligence and incident management metrics and use the results as input for other initiatives over the whole organization, such as:

* Planning security trainings for various personnel
* Improvement of security verification activities for both internally and externally develeoped collected
* Supply chain management, e.g. carrying out security audits of partner organizations
* Monitoring of attacks against your infrastructure and applications
* Investing in security infrastructure or compensating controls
* Staffing your security team and setting up the security budget


###### Assessment Question(s)
Do you regularly evaluate the effectiveness of your security metrics so that its input helps drive your security strategy?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have analyzed the effectivenss of the security metrics at least once in the last year
- Where possible, you verify the correctness of the data automatically
- The metrics is aggregated with other sources like threat intelligence or incident management
- You derived at least one strategic activity from the metrics in the last year


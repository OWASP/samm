---
business_functions : Implementation
title : Defect Management
assignedto       : Daniel Kefer
complete          : 50%
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

| | A: Defect Tracking (Flaws/Bugs/Process) | B: Metrics and Feedback/Learning |
|:---|:---|:---|
| Maturity 1 - All defects are tracked within each project. | Introduce a structured tracking of security defects and make knowledgeable decisions based on this information. | Regularly go over previously recorded security defects and derive quick wins from basic metrics. |
| Maturity 2 - Defect tracking used to influence the deployment process. | Rate all security defects over the whole organization consistently and define SLAs for particular severity classes. | Collect standardized defect management metrics and use these also for prioritization of centrally driven initiatives. |
| Maturity 3 - Defect tracking across multiple components is used to help reduce the number of new defects. | Enforce the predefined SLAs and integrate your defect management system with other relevant tooling. | Contiously improve your security defect management metrics and correlate it with other sources. |


# A: Defect Tracking (Flaws/Bugs/Process)

## Maturity 1

### Benefit

You have an overview of all known security defects impacting particular applications.

### Activity

Introduce a common definition / understanding of a security defect and define the most common ways of identifying these. These typically include, but are not limited to: 

* Threat assessments
* Penetration tests
* Output from static and dynamic analysis scanning tools
* Responsible disclosure processes or bug bounties

Foster a culture of transparency and avoid blaming any teams for introducing security defects. Record and track all security defects in a defined location. This location doesn't necessarily have to centralized for the whole organization, however ensure that you're able to get an overview of all defects affecting a particular application at any single point in time. Define and apply access rules for the tracked security defects to mitigate the risk of leakage and abuse of this information. 

Introduce at least rudimentary qualitative classificiation of security defects so that you are able to prioritize fixing efforts accordingly. Strive for limiting duplication of information and presence of false positives to increase the trustworthiness of the process.


#### Maturity Questions

{{< questions "Defect Management" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

You have overview about security defects affecting applications throughout the whole organization.

### Activity

Introduce and apply a well defined rating methodology for your security defects consistently across the whole organization, based on the probability and expected impact of the security defect being exploited. This will allow you to identify applications which need higher attention and investments for fixing defects. In case you don't store the information about security defects centrally, ensure that you're still able to easily pull the information from all sources and get a solid overview about "hot spots" needing your attention.

Introduce SLAs for timely fixing of security defects according to their criticality rating and centraly monitor and regularly report SLA breaches. Define a process for cases where it's not feasible or economical to fix a defect within the time defined by the SLAs. This should at least ensure that all relevant stakeholders have a solid understanding of the imposed risk. If suitable, employ compensating controls for these cases.

Even if you don't have any formal SLAs for fixing low severity defects, ensure that responsible teams still get a regular overview about issues affecting their applications and understand how particular issues affect or amplify each other. 


### Maturity Questions

{{< questions "Defect Management" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Security defects are either resolved within a predefined time or compensating controls are introduced.

### Activity

Implement an automated alerting on security defects if the fix time breaches the defined SLAs. Ensure that these defects are automatically transfered in the risk management process and rated by a consistent quantitative methodology. Evaluate how particular defect influence / amplify each other not only on the level of separate teams, but on the level of the whole organization. Use the knowledge of the full kill chain to prioritize, introduce and track compensating controls mitigating the respective business risks. 

Integrate your defect management system with the automated tooling introduced by other practices, e.g.:

* Build and Deployment: Fail the build / deployment process if security defects above certain severity affect the final artifact, unless someone explicitely signs off the exception. 
* Monitoring: If possible, ensure that abuse of the security defect in production environment is recognized and alerted. 


### Maturity Questions

{{< questions "Defect Management" "A" 3 >}}

#### Notes



# B: Metrics and Feedback/Learning

## Maturity 1

### Benefit

You take advantage of basic metrics from your defect management process to identify quick win activities.

### Activity

Once per defined period of time (typically at least once per year), go over your both resolved and still open recorded security defects in every team and extract basic metrics from the available data. These might include:

* The total number of defects versus total number of verification activities. This could give you an idea whether you're looking for defects with an adequate intensity and quality.
* The software components the defects reside in. This is indicative of where attention might be most required, and where security flaws might be more likely to appear in the future again.
* The type or category of the defect, which suggests areas where the development team need further training.
* The severity of the defect, which can help the team understand the software’s risk exposure.

Identify and carry out sensible quick win activities which you can derive from the newly acquired knowledge. These might inlcude things like a knowledge sharing session about one particular vulnerability type or carrying out / automating a security scan. 


### Maturity Questions

{{< questions "Defect Management" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

You scale the learning effect throughout the whole organization based on unified defect management metrics.

### Activity

Define, collect and calculate unified metrics across the whole organization. These might include:

* Total amount of verification activites and identified defects. 
* Types and severities of identified defects.
* Time to detect and time to resolve defects.
* Windows of exposure of defects being present on live systems. 
* Number of regressions / reopened vulnerabilities. 
* Coverage of verification activities for particular software components. 
* Amount of accepted risk.
* Ratio of security incidents caused due to unknown or undocumented security defects.

Automate a regular (e.g. monthly) report for suitable audience. This would typically reach audience like managers and security officer and engineers. Use the information in the report as an input for your security strategy, e.g. improving trainings or security verification activities. 

Share the most prominent or interesting technical details about security defects including the fixing strategy to other teams once these defects are fixed, e.g. in a regular knowledge sharing meeting. This will help scale the learning effect from defects to the whole organization and limit their occurence in the future. 


### Maturity Questions

{{< questions "Defect Management" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Collection and evaluation of security metrics is effective and helps drive your security strategy.

### Activity

Regularly (at least once per year) revisit the defect management metrics you're collecting and compare the effort needed to collect and track these to the expected outcomes. Make knowledgeable decision about removing metrics which consistently don't bring the expected value. Wherever possible, include and automate verification activities for the quality of the collected data and ensure sustainable improvement if any differences are detected.

Aggregate the data with your threat intelligence and incident management metrics and use the results as input for other initiatives over the whole organization, such as: 
- Planning security trainings for various personnel
- Improvement of security verification activities for both internally and externally develeoped collected
- Supply chain management, e.g. carrying out security audits of partner organizations
- Monitoring of attacks against your infrastructure and applications
- Investing in security infrastructure or compensating controls
- Staffing your security team and setting up the security budget


### Maturity Questions

{{< questions "Defect Management" "B" 3 >}}

#### Notes


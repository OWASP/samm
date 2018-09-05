---
business_functions : Design
title : Threat Assessment
assignedto       : bart.dewin@owasp.org
complete          : 15%
business_functions_weight: 1
type: security_practice
---


# Overview
The Threat Assessment (TA) practise is focused on accurately identifying and understanding potential attacks upon an organisation's software in order to better understand the risks and facilitate risk management. Indeed, software assurance is all about identifying risks in applications and treating them accordingly.

Risks to an application can be relative to the business of the application (think about business logic attacks) or to the technical setup of the application. The Risk Profile stream deals with the former, while the Threat Modeling focuses on the latter.

| | A: Risk Profile | B: Threat Modeling |
|:---|:---|:---|
| Maturity 1 - Best-effort identification of high-level threats to the organization and individual projects. | Basic assessment of the application risk | Best effort ad-hoc threat modeling |
| Maturity 2 - Standardization and enterprise-wide analysis of software-related threats within the organisation | Understand the risk for all applications in the organisation | Standardized threat modeling |
| Maturity 3 - Pro-active improvement of threat coverage throughout the organisation | Periodicly review application risk profiles | Improve quality by automated analysis |


# A: Risk Profile

## Maturity 1
### Activity
As an organisation, you want to spend your security budget where it matters. The best way to guide this is based on application risk. Indeed, a risk classification helps in identifying which applications can pose a serious threat to the organisation in case they would be misused or breached.

In this level, you will use a simple way to evaluate the application risk based on the potential business impact that it poses towards the organisation in case of attack. This typically focuses on evaluating the impact of a breach on the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to identify the impact, such as whether the application processes financial data, or whether privacy-related data is involved. 

Next, you will need a scheme to classify applications according to their risk. The use of a simple, qualitative scheme (e.g. high/medium/low) often proves to be effective. Advanced organisations or organisations that are highly risk driven might make use of more quantitative risk schemes. Don't invent a new risk scheme if your organisation already has one that works well. 

For applications at hand, evaluate the risk based on the set of questions and assign a risk level to it. 

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes
Elements required for risk:
- set of questions to evaluate
- risk levels to represent application risk
- risk portfolio


## Maturity 2
### Activity
The goal of this activity is to thoroughly understand the risk level of all applications within the organisations. This will enable you to focus the effort of your software assurance activities to where it really matters. 

From a risk evaluation perspective, the basic set of questions will not suffice to thoroughly evaluate the risk of all applications. Create a more extensive and standardized way to evaluate the risk of the application, among others via their impact on information security (confidentiality, integrity and availability of data). Next to security, you also want to evaluate the privacy risk of the application. Make sure to understand the data that the application processes and what potential privacy violations could be relevant. Finally, also study the impact that this application has on other applications within the organisation (e.g., the application might be modifying data that was considered read-only in another context). The evaluation must be performed for all applications within the organisation, including all existing and legacy ones. 

Based on this input, build a centralized inventory of risk profiles that use the outcome of the risk evaluations to define the profile. This inventory will give all stakeholders an aligned view on the risk level of an application and will enable them to assign appropriate priority to security-related activities.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes


## Maturity 3
### Activity
The application portfolio of an organisation changes, as well as the conditions and constraints in which an application lives (e.g., driven by the company strategy). You want to periodically review the risk inventory that you've built in order to ensure correctness of the risk evaluations of the different applications. to this end, perform periodic reviews (at least yearly) of the risk profiles by rerunning the risk evaluation. Question yourself which conditions have changed that might impact the risk profile.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes



# B: Threat Modeling

## Maturity 1
### Activity
The purpose of Threat Modeling is to identify potential issues in the technical setup of the application. Uncarefull design might lead to issues that can be exploited to target your organisation.

The elicitation of threats in Threat Modeling can be inspired by good security practices (or the lack thereof) or can be driven by a more structured approach such as STRIDE. It can be performed by a single person or by a group of people (in a more brainstorming mode). Fact is that experience is definitely helpful in eliciting useful threats.

Threat modeling can be performed incrementally. If new functionality is added to an application, the threat model should be updated to cover the new functionality, but no need to fully redo the existing threat model.

At this level, you want to execute threat modeling on important projects in a best effort mode to identify the most important threats to the application.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes
Terminology: do we want to use application, software or solution as the main term ?


## Maturity 2
### Activity
In order to increase the quality and efficiency of threat modeling within your organisation, establish a standard approach to perform structured threat modeling. This will ensure that the invested effort is useful and well spent.

Structured threat modeling takes into account the different actors, assets and flows in order to identify an extensive list of potential threats to the application. It will define the inputs required to start the activity (e.g., a technical architecture overview and a data flow diagram), the different steps to be performed to identify threats, and the formalisms used to describe or annotate the threats. Threat models can be augmented with mitigating controls to guide designers in dealing with particular threats.

At this level, you want to adopt a weighting system to measure and compare the importance of the different threats.

Consider using a tool to manage the treat models of the different applications to facilitate your life. Ideally, the tools also helps in identifying potential threats (to some extent). But, in the end, threat modeling requires human intelligence that cannot be easily automated.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes
Personally I'm not convinced about specifying mitigating controls in threat models, since it is very difficult to maintain this.

## Maturity 3
### Activity
In a mature setup of threat modeling, an organisation would regularly (e.g., yearly) review the existing threat models to verify that no new threats would become relevant for your applications at hand. 

In order to ensure high quality of threat models, automated analysis can be used to evaluate the quality and to potentially discover gaps and/or patterns in the threat models. These can then be used to improve the threat models.

At this level, an organisation would also review the threat categories that are relevant to your organisation. When new threat categories are identified, the organisation is fed with this information to ensure appropriate handling. 

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes
I cannot think of good examples of threat categories. Anybody ?
IMO we should go further than just yearly review of threat models. Any ideas ? What about automated analysis to verify the quality of threat models, or to discover new threats ?

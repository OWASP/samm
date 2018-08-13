---
business_functions : Design
title : Threat Assessment
assignedto       : bart.dewin@owasp.org
complete          : 15%
business_functions_weight: 1
type: security_practice
---


# Overview
The Threat Assessment (TA) practise is focused on identifying and understanding the risks that your software may pose towards the organisation. Indeed, software assurance is all about identifying risks in applications and treating them accordingly.

Risks to an application can be relative to the business of the application (think about business logic attacks) or to the technical setup of the application. The Risk Profile stream deals with the former, while the Threat Modeling focuses on the latter.

| | A: Risk Profile | B: Threat Modeling |
|:---|:---|:---|
| Maturity 1 - Identify and understand high-level threats to the organization and individual projects. | Basic Application Risk Questionnaire/Classification (BIA) | Best effort ad-hoc threat modeling |
| Maturity 2 -  | Create an inventory of risk profiles. | Standardized threat modeling |
| Maturity 3 -  | Periodic review of risk profiles. | Improve organisation with output of threat modelling |


# A: Risk Profile

## Maturity 1
### Activity
As an organisation, you want to spend your security effort where it matters. The best way to guide this is based on application risk. Indeed, a risk classification helps in identifying which applications can pose a serious threat to the organisation in case they would be misused or breached.

In this level, you will use a standard, yet simple way to evaluate the application risk based on the potential business impact that it poses towards the organisation in case of attack. This typically focuses on evaluating the impact of a breach on the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to identify the impact, such as whether the application processes financial data, or whether privacy-related data is involved. 

Build a set of questions and distribute these to the persons performing these risk evaluations. 

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Notes


## Maturity 2
### Activity
The goal of this activity is to build a centralized inventory of risk profiles for the applications in your portfolio.

To this end, first define a set of risk levels based on the previous question list. The use of a simple, qualitative scheme (e.g. high/medium/low) often proves to be effective. Next, make sure to evaluate the risk profile for (most of) the applications in your application portfolio. 

Based on this input, build a centralized inventory of risk profiles that uses the outcome of the risk evaluations to define the profile. This inventory will give all stakeholders an aligned view on the risk level of an application.

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
The application portfolio of an organisation changes, as well as the conditions and constraints in which an application lives. You want to periodically review the risk inventory that you've build in order to ensure correctness of the risk evaluations of the different applications. to this end, perform periodic reviews of the risk profiles by rerunning the risk evaluation. Question yourself which conditions have changed that might impact the risk profile.


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

Structured threat modeling takes into account the different actors, assets and flows in order to identify an extensive list of potential threats to the application. It will define the inputs required to start the activity, the different steps to be performed to identify threats, and the formalisms used to describe or annotate the threats. Threat models can be augmented with mitigating controls to guide designers in dealing with particular threats.

Consider using a tool to manage the treat models of the different applications. Ideally, the tools also helps in identifying potential threats (to some extent). But do note that threat modeling requires human intelligence that cannot be easily automated.

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

What about discovering threat patterns over different applications ? Maybe for this level, or maybe for level 3 ?

## Maturity 3
### Activity
In a mature setup of threat modeling, an organisation would regularly (e.g., yearly) review the existing threat models to verify that no new threats would become relevant for your applications at hand. 

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

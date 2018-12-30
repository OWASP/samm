---
business_functions : Design
title : Threat Assessment
assignedto       : bart.dewin@owasp.org
complete          : 15%
business_functions_weight: 1
type: security_practice
---
# Short Description
Threat Assessment focuses on identifying threats in applications.

# Long Description
The Threat Assessment (TA) practice focuses on accurately identifying and understanding potential attacks upon an organisation's software in order to better understand the risks and facilitate risk management. Indeed, software assurance is all about identifying risks in applications and treating them accordingly.

Risks to an application can be relative to the business of the application (think about business logic attacks) or to the technical setup of the application. The Application Risk Profile stream deals with the former, while the Threat Modeling focuses on the latter.

# Overview
| | A: Application Risk Profile | B: Threat Modeling |
|:---|:---|:---|
| Maturity 1 - Best-effort identification of high-level threats to the organization and individual projects. | Basic assessment of the application risk | Best effort ad-hoc threat modeling |
| Maturity 2 - Standardization and enterprise-wide analysis of software-related threats within the organisation | Understand the risk for all applications in the organisation | Standardized threat modeling |
| Maturity 3 - Pro-active improvement of threat coverage throughout the organisation | Periodicly review application risk profiles | Improve quality by automated analysis |


# A: Application Risk Profile

## Maturity 1
### Benefit 
Ability to classify applications according to risk

### Activity
As an organisation, you want to spend your security budget where it matters. Application risk is a good tool to guide your security spending. Indeed, a risk classification helps in identifying which applications can pose a serious threat to the organisation in case they would be attacked or breached.

In this level, you will use a simple method to evaluate, per application, the application risk by estimating the potential business impact that it poses towards the organisation in case of attack. You can achieve this by evaluating the impact of a breach on the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to understand important application characteristics, such as whether the application processes financial data, whether it is internet facing, or whether privacy-related data is involved, etc. The application risk profile represents whether these factors are applicable and, hence, could significatly impact the organisation.

Next, you will use a scheme to classify applications according to this risk. The use of a simple, qualitative scheme (e.g. high/medium/low) that translates these characteristics into a value often proves to be effective. Important is that these values can be used to represent and compare the risk of different applications among each other. Mature organisations or organisations that are highly risk driven might make use of more quantitative risk schemes. Don't invent a new risk scheme if your organisation already has one that works well. 

For applications at hand, evaluate the risk based on the set of questions and assign a risk level to it. 

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

#### Quality Indicators

### Notes
Elements required for risk:
- set of questions to evaluate
- risk levels to represent application risk
- risk portfolio


## Maturity 2
### Benefit
Solid understanding of the risk level of an application

### Activity
The goal of this activity is to thoroughly understand the risk level of all applications within the organisations. This will enable you to focus the effort of your software assurance activities to where it really matters. 

From a risk evaluation perspective, the basic set of questions will not suffice to thoroughly evaluate the risk of all applications. Create a more extensive and standardized way to evaluate the risk of the application, among others via their impact on information security (confidentiality, integrity and availability of data). Next to security, you also want to evaluate the privacy risk of the application. Make sure to understand the data that the application processes and what potential privacy violations could be relevant. Finally, also study the impact that this application has on other applications within the organisation (e.g., the application might be modifying data that was considered read-only in another context). The evaluation must be performed for all applications within the organisation, including all existing and legacy ones.

In terms of classifying application risk, the use of a simple qualitative scheme (such as high/medium/low) might no longer suffice to effectively manage and compare applications on an enterprise-wide level. It is advised to consider the use of quantitative schemes to this end.

Based on this input, build a centralized inventory of risk profiles that use the outcome of the risk evaluations to define the profile. This inventory will give all stakeholders an aligned view on the risk level of an application and will enable them to assign appropriate priority to security-related activities.

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

### Notes


## Maturity 3
### Benefit
Timely update of the application classification in case of changes

### Activity
The application portfolio of an organisation changes, as well as the conditions and constraints in which an application lives (e.g., driven by the company strategy). Therefor, a periodic review of the risk inventory is important to ensure correctness of the risk evaluations of the different applications. 

A periodic review might be organised on an enterprise-wide level. However, as your enterprise further matures in software assurance, teams should be stimulated to continuously question which conditions have changed that might impact the risk profile. For instance, an internal application might become exposed to the internet by a business decision. This should trigger the teams to rerun the risk evaluation and update the application risk profile accordingly.

In a mature implementation of this practice, teams should also be trained and continuously updated on lessons learned and best practices from these risk evaluations. This will ensure a better execution and a more accurate representation of the application risk profile.

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

### Notes


# B: Threat Modeling

## Maturity 1
### Benefit
Basic understanding of potential threats to the solution

### Activity
The purpose of Threat Modeling is to identify, pro-actively, potential issues in the technical design of the application. Uncarefull setup might lead to important attack vectors in an application that can be exploited to target your organisation. Experience shows that architectural design can be an important source of security issues, and the consequences can be significant. 

The practice of threat modelling includes both the elicitation and the management of threats. Threat elicitation can be inspired by known good security practices (or the lack thereof) or can be driven by a more structured approach such as STRIDE. While it can be performed by a single person, threat modelling is often more effective when performed by a group of people (in a more brainstorming mode). One of the key challenges in threat modelling is working towards a list of relevant and important threats in an efficient exercise, and avoiding lenghtly processes and overly detailed lists of low-relevant threats. Experience is a important helper in finding a proper balance.

Threat modeling can be performed iteratively in order to align it to more iterative development paradigms. If new functionality is added to an existing application, rather than trying to cover the entire scope continuously, it can make sense to only look into the newly added functions in order to spend your threat modeling efforts wisely.

At this level, you want to execute threat modeling on important projects (LINK: Application Risk Profile) in a best effort mode to identify the most important threats to the application. Existing network diagrams are a good starting point at this level, which can be annotated during discussion workshops.

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

### Notes
Terminology: do we want to use application, software or solution as the main term ?


## Maturity 2
### Benefit
Streamlined elicitation and management of threats to the solution

### Activity
In order to increase the quality and efficiency of threat modeling within your organisation, establish a standard approach to perform structured threat modeling. This will ensure that the invested effort is useful and well spent. Structured threat modeling takes into account the different actors, assets and flows in order to identify an extensive list of potential threats to the application. It will define the inputs required to start the activity (e.g., a technical architecture overview and a data flow diagram), the different steps to be performed to identify threats, and the formalisms used to describe or annotate the threats. Threat models can be augmented with mitigating controls to guide designers in dealing with particular threats. 

As an organisation, you will want to ensure threat modeling is executed when necessary. Think about the triggers that will drive the execution of threat modeling, such as a change in architecture, a deployment of an application in a new environment, etc. At the same time, think about ways to support scaling of threat modeling throughout an organisation.

The output of threat modeling should be fed into the defect management process to ensure adequate follow-up. Also, you might want to adopt a weighting system to measure and compare the importance of the different threats.

Consider using a tool to manage the treat models of the different applications to facilitate your life. At the same time, as one of the challenges in threat modeling is a potential overload of trivial threats, people should be trained to focus on important threats.
Ideally, the tools also helps in identifying potential threats (to some extent). But, in the end, threat modeling requires human intelligence that cannot be easily automated.

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

### Notes
Personally I'm not convinced about specifying mitigating controls in threat models, since it is very difficult to maintain this. Even after the Minneapolis discussions, I'm still not convinced about the usefulness of this ;-)

## Maturity 3
### Benefit
Timely update and qualitative management of application threat 

### Activity
In a mature setup of threat modeling, an organisation would regularly (e.g., yearly) review the existing threat models to verify that no new threats would become relevant for your applications at hand. 

In order to ensure high quality of threat models, automated analysis can be used to evaluate the quality and to potentially discover gaps and/or patterns in the threat models. These can then be used to improve the threat models.

At this level, an organisation would also review the threat categories that are relevant to your organisation. When new threat categories are identified, the organisation is fed with this information to ensure appropriate handling. 

### Maturity Questions

#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

### Notes
I cannot think of good examples of threat categories. Anybody ?
IMO we should go further than just yearly review of threat models. Any ideas ? What about automated analysis to verify the quality of threat models, or to discover new threats ?

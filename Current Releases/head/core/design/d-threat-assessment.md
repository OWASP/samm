---
business_functions : Design
title : Threat Assessment
assignedto       : John Ellingsworth
complete          : 50%
weight: 1
type: security_practice
---
# Short Description

Threat Assessment focuses on identifying threats in applications.

# Long Description

The Threat Assessment (TA) practice is centered on identification and understanding the project-level risks based on the functionality of the software being developed and characteristics of the runtime environment. From details about threats and likely attacks against each project, the organization as a whole operates more effectively through better decisions about prioritization of initiatives for security. Additionally, decisions for risk acceptance are more informed, therefore better aligned to the business.

By starting with simple threat models and building application risk profiles, an organization improves over time. Ultimately, a sophisticated organization would maintain this information in a way that is tightly coupled to the compensating factors and pass-through risks from external entities. This provides greater breadth of understanding for potential downstream impacts from security issues while keeping a close watch on the organization’s current performance against known threats.


# Overview

| | A: Application Risk Profile | B: Threat Modeling |
|:---|:---|:---|
| Maturity 1 - Consider security explicitly during the software requirements process. | A basic assessment of the application risk is performed to understand likelihood and impact of an attack. | Perform best-effort, risk-based threat modeling using brainstorming and existing diagrams to efficiently list important threats. |
| Maturity 2 - Increase granularity of security requirements derived from business logic and known risks. | Understand the risk for all applications in the organization by centralizing the risk profile inventory for stakeholders. | Standardize threat modeling activities, tools, and processes in order to scale across the organization. |
| Maturity 3 - Mandate security requirements process for all software projects and third-party dependencies. | Periodically review application risk profiles at regular intervals to ensure accuracy and reflect current state. | Continuously improve quality through regular reviews and automated analysis of threat models. |


# A: Application Risk Profile

## Maturity 1

### Benefit

Ability to classify applications according to risk.

### Activity

Use a simple method to evaluate the application risk per application, estimating the potential business impact that it poses for the organization in case of an attack. To achieve this, evaluate the impact of a breach in the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to understand important application characteristics, such as whether the application processes financial data, whether it is internet facing, or whether privacy-related data is involved. The application risk profile tells you whether these factors are applicable and if they could significatly impact the organization.

Next, use a scheme to classify applications according to this risk. A simple, qualitative scheme (e.g. high/medium/low) that translates these characteristics into a value is often effective. It is important to use these values to represent and compare the risk of different applications against each other. Mature highly risk-driven organizations might make use of more quantitative risk schemes. Don’t invent a new risk scheme if your organization already has one that works well.


#### Maturity Questions

{{< questions "Threat Assessment" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

Solid understanding of the risk level of the organizational application portfolio.

### Activity

The goal of this activity is to thoroughly understand the risk level of all applications within the organization, to focus the effort of your software assurance activities where it really matters.

From a risk evaluation perspective, the basic set of questions is not enough to thoroughly evaluate the risk of all applications. Create an extensive and standardized way to evaluate the risk of the application, among others via their impact on information security (confidentiality, integrity and availability of data). Next to security, you also want to evaluate the privacy risk of the application. Understand the data that the application processes and what potential privacy violations are relevant. Finally, study the impact that this application has on other applications within the organization (e.g., the application might be modifying data that was considered read-only in another context). Evaluate all applications within the organization, including all existing and legacy ones.

Leverage business impact analysis to quantify and classify application risk. A simple qualitative scheme (such as high/medium/low) is not enough to effectively manage and compare applications on an enterprise-wide level.

Based on this input, Security Officers leverage the classification to define the risk profile to build a centralized inventory of risk profiles and manage accountability. This inventory gives Product Owners, Managers, and other organizational stakeholders an aligned view of the risk level of an application in order to assign appropriate priority to security-related activities.


### Maturity Questions

{{< questions "Threat Assessment" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Timely update of the application classification in case of changes.

### Activity

The application portfolio of an organization changes, as well as the conditions and constraints in which an application lives (e.g., driven by the company strategy). Periodically review the risk inventory to ensure correctness of the risk evaluations of the different applications.

Have a periodic review at an enterprise-wide level. Also, as your enterprise matures in software assurance, stimulate teams to continuously question which changes in conditions might impact the risk profile. For instance, an internal application might become exposed to the internet by a business decision. This should trigger the teams to rerun the risk evaluation and update the application risk profile accordingly.

In a mature implementation of this practice, train and continuously update teams on lessons learned and best practices from these risk evaluations. This leads to a better execution and a more accurate representation of the application risk profile.


### Maturity Questions

{{< questions "Threat Assessment" "A" 3 >}}

#### Notes



# B: Threat Modeling

## Maturity 1

### Benefit

Basic understanding of potential threats to the solution.

### Activity

The purpose of Threat Modeling is to pro-actively identify potential issues in the technical design of the application. A careless setup might lead to important attack vectors in an application that can be exploited to target your organization. Experience shows that architectural design can be an important source of security issues, and the consequences can be significant.

The practice of threat modeling includes both eliciting and managing threats. Use known good security practices (or the lack thereof) or a more structured approach such as STRIDE to elicit threats. Threat modeling is often most effective when performed by a group of people, allowing for brainstorming. One of the key challenges in threat modeling is working towards a list of relevant and important threats in an efficient exercise, and avoiding lengthy processes and overly detailed lists of low-relevant threats. Experience helps find a proper balance.

Perform threat modeling iteratively to align to more iterative development paradigms. If you add new functionality to an existing application, look only into the newly added functions instead of trying to cover the entire scope.

Execute threat modeling on important projects in a best effort mode to identify the most important threats to the application. Existing network diagrams you can annotate during discussion workshops are a good starting point.


### Maturity Questions

{{< questions "Threat Assessment" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Improved elicitation and management of threats to the solution.

### Activity

Establish a standard approach to perform structured threat modeling to increase the quality and efficiency of threat modeling within your organization, and ensure that the invested effort is useful and well spent. Structured threat modeling takes into account the different actors, assets and flows to identify an extensive list of potential threats to the application. It defines the inputs required to start the activity (e.g., a technical architecture overview and a data flow diagram), the different steps to identify threats, and the formalisms to describe or annotate the threats. You can add mitigating controls to threat models to guide designers in dealing with particular threats.

As an organization, define what triggers the execution of threat modeling. For example a change in architecture, or a deployment of an application in a new environment. At the same time, think about ways to support scaling of threat modeling throughout the organization.

Feed the output of threat modeling to the defect management process for adequate follow-up. Adopt a weighting system to measure and compare the importance of the different threats.

Consider using a tool to manage the treat models of the different applications. Train people to focus on important threats, as one of the challenges in threat modeling is a potential overload of trivial threats. Tools help in identifying potential threats but, in the end, threat modeling requires human intelligence that cannot be easily automated.


### Maturity Questions

{{< questions "Threat Assessment" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

The timely update and qualitative management of application threats is optimized.

### Activity

In a mature setup of threat modeling, regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications.

Use automated analysis to evaluate the quality and discover gaps and/or patterns in the threat models. These can improve the threat models.

Review the threat categories relevant to your organization. When you identify new threat categories, feed this information to the organization to ensure appropriate handling.


### Maturity Questions

{{< questions "Threat Assessment" "B" 3 >}}

#### Notes


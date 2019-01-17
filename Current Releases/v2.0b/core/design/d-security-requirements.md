---
business_functions : Design
title : Security Requirements
assignedto       : bart.dewin@owasp.org
complete          : 40%
weight: 2
type: security_practice
---

# Short Description
This practice focuses on defining appropriate security requirements for your software and your software suppliers.

# Long Description
This practice focuses on security requirements that are important in the context of secure software. A first type deals with typical software-related requirements, to specify objectives and expectations to protect the service and data at the core of the application. A second type deals with requirements that are relative to supplier organisations that are part of the development context of the application, in particular for outsourced development. It is important to streamline the expectations in terms of secure development because outsourced development can have significant impact on the security of the application. The security of 3rd party (technical) libraries is part of the software supply chain stream (LINK Secure Build), so it is not included in this practice.

# Overview
| | A: Software Requirements | B: Supplier Security |
|:---|:---|:---|
| Maturity 1 - Consider security explicitly during the software requirements process. | High-level application security objectives | Evaluate the supplier according to security|
| Maturity 2 - Increase granularity of security requirements derived from business logic and known risks. | Structured requirements engineering | Build security into supplier agreements |
| Maturity 3 - Mandate security requirements process for all software projects and third-party dependencies. | Build a standard requirements framework | Ensure proper coverage for external suppliers |


# A: Software Requirements

## Maturity 1
### Benefit
You have an understanding of key security requirements.

### Activity
Perform a review of the functional requirements of the software project. Identify relevant security requirements (i.e. expectations) for this functionality by reasoning on the desired confidentiality, integrity or availability of the service or data offered by the software project. Requirements state the objective (e.g., "personal data for the registration process should be transferred and stored securely"), but not the actual measure to achieve the objective (e.g., "use TLSv1.2 for secure transfer").

At the same time, review the functionality from an attacker perspective to understand how it could be misused. This way you can identify extra protective requirements for the software project at hand.

Security objectives can relate to specific security functionality you need to add to the application (e.g., "Identify the user of the application at all times") or to the overall behaviour and quality of the application (e.g., "Ensure personal data is properly protected in transit"), which will not lead to new functionality. Follow good practices for writing security requirements. Make them specific, measurable, actionable, relevant and time-bound (SMART). Beware of adding requirements too general-purpose to not relate to the application at hand (e.g., The application should protect against the OWASP Top 10). While they can be true, they don't add value to the discussion.



## Maturity 2
### Benefit
You have specified relevant security requirements in a structured format.

### Activity
Security requirements can originate from other sources including policies and legislation, known problems in the application, and intelligence from metrics and feedback (LINK to DM lvl 3). At this level, a more systematic elicitation of security requirements must be achieved by analysing different sources of such requirements. Ensure that appropriate input is received from these sources to help the elicitation of requirements. For example, organize interviews or brainstorm sessions (e.g., in the case of policy and legislation), analyse historical logs or vulnerability systems.

Use a structured notation of security requirements across applications and an appropriate formalism that integrates well with how you specify other (functional) requirements for the project. This could mean, for example, extending analysis documents, writing user stories, etc.

When requirements are specified, it is important to ensure that these requirements are taken into account during product development. Setup a mechanism to stimulate or force project teams to meet these requirements in the product. For example, annotate requirements with priorities, or influence the handling of requirements to enforce sufficient security appetite (while balancing against other non-functional requirements).


## Maturity 3
### Benefit
You have a set of reusable security requirements to improve the overall quality.

### Activity
Setup a security requirements framework to help projects elicit an appropriate and complete requirements set for their project. This framework considers the different types of requirements and sources sources of requirements. It should be adapted to the organisational habits and culture, and provide effective methodology and guidance in the elicitation and formation of requirements.

The framework helps project teams increase the efficiency and effectiveness of requirements engineering. It can provide a categorisation of common requirements and a number of reusable requirements. Do remember that, while thoughtless copying is ineffective, the fact of having potential relevant requirements to reason about is often productive.

The framework also gives clear guidance on the quality of requirements and formalizes how to describe them. For user stories, for instance, concrete guidance can explain what to describe in the DOD, DOR, story description and acceptance criteria.


# B: Supplier Requirements

## Maturity 1
### Benefit
You understand the security practices of your software suppliers.

### Activity
The security competences and habits of the expernal suppliers involved in the development of your software can have a significant impact on the security posture of the final product. Consequently, it is important to know and evaluate your suppliers on this front.

Carry out a vendor assessment to understand the strengths and weaknesses of your suppliers. Conduct interviews and review their typical practices and deliveries. This gives you an idea of how they organize themselves and elements to evaluate whether you need to take additional measures to mitigate potential risks. Ideally, speak to different roles in the organisation, or even organise a small maturity evaluation to this end. Strong suppliers will run their own software assurance program and will be able to answer most of your questions. If suppliers have weak competences in software security, discuss with them how and to what extent they plan to work on this and evaluate whether this is enough for your organisation. A software supplier might be working on a low-risk project, but this could  change.

It is important that your suppliers understand and align to the risk appetite and are able to meet your requirements in that area. Make what you expect from them explicit and discuss this clearly.


## Maturity 2
### Benefit
You structurally assign responsibilities for software security activities.

### Activity
Increase your confidence in the capability of your suppliers for software security. Discuss concrete responsibilities and expectations from your suppliers and your own organisation and establish a contract with the supplier. The responsibilities can be specific quality requirements or particular tasks, and minimal service can be detailed in a Service Level Agreement (SLA). A quality requirement example is that they will deliver software that is protected against the OWASP Top 10 and in case issues are detected, these will be fixed. A task example is that they have to perform continuous static code analysis, or perform an independent penetration test before a major release. The agreement stipulates liabilities and caps in case an important issue arises.

Once you have implemented this for a few suppliers, work towards a standard agreement for suppliers that forms the basis of your negotiations. You can deviate from this standard agreement on a case by case basis, but it will help you to ensure you do not overlook important topics.


## Maturity 3
### Benefit
You align software development practices to limit security risks.

### Activity
The best way to minimize the risk of issues in software is to align maximally and integrate closely between the different parties. From a process perspective, this means using similar development paradigms and introducing regular milestones to ensure proper alignment and qualitative progress. From a tools perspective, this might mean using similar build, verification and deployment environments, and sharing other supporting tools (e.g. requirements or architecture tools, or code repositories).  

In case suppliers cannot meet the objectives that you have set, implement compensating controls so that, overall, you meet your objectives. Execute extra activities (e.g., threat modelling before starting the actual implementation cycle) or implement extra tooling (e.g., 3rd party library analysis at solution intake). The more suppliers deviate from your requirements, the more work will be required to compensate.

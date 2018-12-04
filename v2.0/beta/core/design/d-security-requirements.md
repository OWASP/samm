---
business_functions : Design
title : Security Requirements
assignedto       : bart.dewin@owasp.org
complete          : 40%
business_functions_weight: 2
type: security_practice
---

This security practice focuses on security requirements that are important in the context of secure software. A first type of requirements deals with typical software-related requirements, to specify concrete objectives and expectations to protect the service and data that form part of the application. A second type of requirements deals with requirements that are relative to supplier organisations that are part of the development context of the application, in particular for outsourced development. Since the latter can have significant impact on the security posture of the application, it is important to streamline the expectations in terms of secure development. Note that the security of 3rd party (technical) libraries is not included in this practice ; this forms part of the software supply chain stream (LINK Secure Build).


# Overview

| | A: Software Requirements | B: Supplier Security |
|:---|:---|:---|
| Maturity 1 - Consider security explicitly during the software requirements process. | High-level application security objectives | Evaluate the supplier according to security|
| Maturity 2 - Increase granularity of security requirements derived from business logic and known risks. | Structured requirements engineering | Build security into supplier agreements |
| Maturity 3 - Mandate security requirements process for all software projects and third-party dependencies. | Build a standard requirements framework | Ensure proper coverage for external suppliers |


# A: Software Requirements

## Maturity 1
### Activity
Perform a review of the functional requirements of the software project. Identify relevant security requirements (i.e. expectations) for this functionality by means of interactions between business persons and security-aware people. These requirements will relate to the confidentiality, integrity or availability of the service or data offered by the software project. Requirements should state the objective to be achieved (e.g., "personal data for the registration process should be transferred and stored securely"), but not the actual measure to achieve the objective (e.g., "use TLSv1.2 for secure transfer").

Next to eliciting specific expectations, the functionality should also be reviewed from an attacker perspective in order to understand how the functionality could be misused. This in itself will enable you to identify extra protective requirements for the software project at hand.

Security objectives can relate to specific security functionality that is to be added to the application (e.g., "Identify at all times the user of the application"), but they can also relate to the overall behaviour and quality of the application (e.g., "Ensure that personal data is properly protected in transit"), which will not lead to new functionality to be added to the application.Security requirements It is important to ensure that all security requirements follow good practices for writing requirements in general. Specifically, they should be specific, measurable, actionable, relevant and time-bound (SMART). Beware of adding too general-purpose requirements that do not relate to the application at hand, e.g., by stating that the application should protect against the OWASP Top 10. While this is certainly true, it brings not much interesting to the discussion table.


#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 2
### Activity
Security requirements can originate from other sources including policies and legislation, known problems in the application, intelligence from metrics and feedback (LINK to DM lvl 3), and so forth. At this level, a more systematic elicitation of security requirements must be achieved by analysing different sources of such requirements. Ensure that appropriate input is received from these sources to help the elicitation of requirements. This might mean organizing interviews or brainstorm sessions (e.g., in the case of policy and legislation), analysing historical logs or vulnerability systems, etc.

At this level, using a structured notation of security requirements across applications is expected as well. Use an appropriate formalism that integrates well with how other (functional) requirements are specified for the project at hand. This might mean extending analysis documents, writing user stories, etc.

When requirements are specified, it is important to ensure that these requirements are taken into account during product development. Setup a mechanism to stimulate or force project teams to meet these requirements in the product. This might mean annotating requirements with priorities, or influencing the handling of requirements to enforce sufficient security appetite (while carefully balancing against other non-functional requirements).


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
References: 

## Maturity 3
### Activity
Setup a security requirements framework within the organisation that will help projects to elicit an appropriate and complete requirements set for their project. The requirements framework should take into account the different types of requirements, different sources of requirements, it should be adapted to the organisational habits and culture and it should provide effective methodology and guidance in the elicitation and formation of requirements.

The framework should help project teams in increasing the efficiency and effectiveness of requirements engineering. It can provide a categorisation of common requirements and provide a number of reusable requirements. While thoughtless copying is considered very ineffective, the fact of having potential relevant requirements to reason about is often productive.

The framework should give clear guidance on the quality of requirements and should provide a formalism to describe these requirements. In the case of user stories, for instance, concrete guidance can explain what to describe in the DOD, DOR, story description and acceptance criteria.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
References: Common criteria (although too extensive for the purpose, the idea is similar)

Question: somehow link requirements to solutions ?

# B: Supplier Requirements

## Maturity 1
### Activity
The security competences and habits of the expernal suppliers involved in the development of your software can have a significant impact on the security posture of the final product. Consequently, it is important to know and evaluate your suppliers on this front.

In a first maturity level, you will understand the strengths and weaknesses of your suppliers by means of interviews and review of their typical practices and deliveries, i.e. a vendor assessment. This will give you an idea of how they organize themselves and give you elements to evaluate whether additional measures must be taken in your organisation to mitigate potential risks. Ideally, you will speak to different roles in the organisation, or you could even organise a small maturity evaluation to this end. Strong suppliers will run their own software assurance program and will be able to answer most of your questions/inquiries. If suppliers turn out to have weak competences in software security, discuss with them how and to what extent they plan to work on this and evaluate whether this is sufficient for your organisation. Do realise that a software supplier might, for now, be working on a low-risk project, but this might always change in the future. 

It is important that your suppliers understand and align to the risk appetite and are able to meet your requirements in that area. Make explicit what you expect from them and discuss this clearly.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



## Maturity 2
### Activity
In a next maturity level, you want to increase your confidence in the capability of your suppliers for software security. The most effective way to achieve this is to discuss concrete responsibilities and expectations from your suppliers (and your own organisation) and build these into the agreement (contract) with the supplier. These responsibilities can specify specific quality requirements or particular tasks to be performed, and minimal service can be detailed in a Service Level Agreement (SLA). For quality, this may mean that they will deliver software that is protected against the OWASP Top 10 and in case issues are detected, these will be fixed. For tasks, they might have to perform continuous static code analysis, or perform an independent penetration test before a major release. An agreement should also stipulate liabilities (and caps) in case an important issue arises.

Once you have implemented this for a few suppliers, work towards having a standard agreement for suppliers that forms the basis of your negotiations. You can deviate from this standard agreement on a case by case basis, but a standard agreement will help you to ensure that important topics are not overlooked.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 3
### Activity
The best way to minimize the risk of issues occurring in software is to align maximally and integrate closely between the different parties. From a process perspective, this means that similar development paradigms are used and regular milestones are introduced to ensure proper alignment and qualitative progress. From a tools perspective, this might mean that similar build, verification and deployment environments are used, and other supporting tools (e.g. requirements or architecture tools) are shared to the extent possible. Code repositories should be shared or linked where possible. 

In case suppliers cannot meet the objectives that you have stipulated, implement compensating controls to ensure that, overall, your objectives are met. This might mean executing extra activities (e.g., threat modelling before starting the actual implementation cycle) or implementing extra tooling (e.g., 3rd party library analysis at solution intake). The more suppliers deviate from your requirements, the more work will be required to compensate.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

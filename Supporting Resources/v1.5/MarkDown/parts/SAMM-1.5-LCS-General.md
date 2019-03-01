![Cover](Cover.png)
**For the latest version and additional info, please see the project web site at**

<https://www.owasp.org/index.php/OWASP_SAMM_Project>

### **_Acknowledgements_**

This document was originally created through the OpenSAMM Project led by Pravir Chandra (chandra@owasp.org), an independent software security consultant. Creation of the first draft was made possible through funding from Fortify Software, Inc. Since the initial release of SAMM, this project has become part of the Open Web Application Security Project (OWASP). This document is currently maintained and updated through the OWASP SAMM Project led by Sebastien Deleersnyder, Bart De Win & Brian Glas. Thanks also go to many supporting organizations that are listed on back cover.

### **_Contributors & Reviewers_**

This work would not be possible without the support of many individual reviewers and experts that offered contributions and critical feedback.

• Fabio Arciniegas • Matt Bartoldus • Jonathan Carter • Darren Challey • Brian Chess • Justin Clarke • Dan Cornell • Michael Craigue • Dinis Cruz
• Sebastien Deleersnyder • Justin Derry • Bart De Win • John Dickson • Alexios Fakos • David Fern • Brian Glas • Kuai Hinojosa • Jerry Hoff • Carsten Huth • Bruce Jenkins • Daniel Kefer • Yan Kravchenko • James McGovern • Matteo Meucci • Jeff Payne • Gunnar Peterson • Jeff Piper • Andy Steingruebl • John Steven • Chad Thunberg • Colin Watson • Jeff Williams • Steven Wierckx

This is an OWASP Project 

#![OWASP LOGO HERE](Logo.png)

OWASP is an international organization and the OWASP Foundation supports OWASP efforts around the world. OWASP is an open community dedicated to enabling organizations to conceive, develop, acquire, operate, and maintain applications that can be trusted. All of the OWASP tools, documents, forums, and chapters are free and open to anyone interested in improving application security. We advocate approaching application security as a people, process, and technology problem because the most effective approaches to application security include improvements in all of these areas. We can be found at <https://www.owasp.org>.

### License
This work is licensed under the Creative Commons Attribution-Share Alike 4.0 License. To view a copy of this license, visit <https://creativecommons.org/licenses/bysa/4.0/>, send an email to <info@creativecommons.org>, or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042.
###![CC Logo](CC_Logo.png)

# Executive Summary

The Software Assurance Maturity Model (SAMM) is an open framework to help organizations formulate and implement a strategy for software security that is tailored to the specific risks facing the organization. The resources provided by SAMM will aid in:

✦ Evaluating an organization’s existing software security practices.


✦ Building a balanced software security assurance program in well-defined iterations. 

✦ Demonstrating concrete improvements to a security assurance program.


✦ Defining and measuring security-related activities throughout an organization.

Version 1.1 of SAMM expanded and restructured its predecessor into four complementary resources: this document that describes the core SAMM model, the How-To Guide that explains how to apply the model, the Quick Start Guide to help accelerate learning and adoption, and the toolbox that provides simple automation for data collection, metrics, and graphs. Furthermore, a number of elements have been renamed to better represent their purpose.

Version 1.5 of SAMM incorporates a refinement of the scoring model to provide more granularity to the scoring in an assessment. Now an organization will get credit for all the related work done in a practice rather than having the base number held at the highest completed maturity level. The updated scoring model has been designed to help SAMM assessors and organizations avoid the awkward discussion on whether to mark an answer yes or no when it is honestly something in between, and to show incremental improvements.

SAMM was defined with flexibility in mind such that it can be utilized by small, medium, and large organizations using any style of development. Additionally, this model can be applied organization-wide, for a single line-of-business, or even for an individual project. Beyond these traits, SAMM was built on the following principles:

✦ An organization’s behavior changes slowly over time - A successful software security program should be specified in small iterations that deliver tangible assurance gains while incrementally working toward long-term goals.

✦ There is no single recipe that works for all organizations - A software security framework must be flexible and allow organizations to tailor their choices based on their risk tolerance and the way in which they build and use software.

✦ Guidance related to security activities must be prescriptive - All the steps in building and assessing an assurance program should be simple, well-defined, and measurable. This model also provides roadmap templates for common types of organizations.

The foundation of the model is built upon the core business functions of software development with security practices tied to each (see diagram below). The building blocks of the model are the three maturity levels defined for each of the twelve security practices. These define a wide variety of activities in which an organization could engage to reduce security risks and increase software assurance. Additional details are included to measure successful activity performance, understand the associated assurance benefits, estimate personnel and other costs.

As an open project, SAMM content shall always remain vendor-neutral and freely available for all to use.

#![SAMM Overview Image Here](SAMM-Overview.png )
# Contents

Executive Summary  3
#### Understanding the model 6
Business Functions  8 

Governance 10 

Construction 12 

Verification 14 

Operations 16 

Assessment worksheets 18

#### The Security Practices 22

Strategy & Metrics 24 

Policy & Compliance 28 

Education & Guidance 32 

Threat Assessment 36 

Security Requirements 40 

SecureArchitecture 44 

Design Review 48 

Implementation Review 52 

SecurityTesting 56 

Issue Management 60 

Environment Hardening 64 

Operational Enablement 68


#!['Understanding the Model' Image pages Here](UnderstaingModel.png)
######SAMM is built upon a collection of security practices that are tied back into the core business functions involved in software development. This section introduces those business functions and the corresponding security practices for each. After covering the high-level framework, the maturity levels for each security practice are also discussed briefly in order to paint a picture of how each can be iteratively improved over time.

# Business Functions

**At the highest level, SAMM defines four critical business functions.** Each business function is a category of activities related to the nuts-and-bolts of software development, or stated another way, any organization involved with software development must fulfill each of these business functions to some degree.

**For each business function, SAMM defines three security practices.** Each security practice is an area of security-related activities that build assurance for the related business function. There are twelve security practices that are the independent silos for improvement that map to the four business functions of software development.

**For each security practice, SAMM defines three maturity levels as objectives.** Each level within a security practice is characterized by a successively more sophisticated objective defined by specific activities, and more stringent success metrics than the previous level. Additionally, each security practice can be improved independently, though related activities can lead to optimizations.

## Governance
Governance is centered on the processes and activities related to how an organization manages overall software development activities. More specifically, this includes concerns that impact cross-functional groups involved in development, as well as business processes that are established at the organization level.

**Strategy & Metrics** involves the overall strategic direction of the software assurance program and instrumentation of processes and activities to collect metrics about an or- ganization’s security posture.

**Policy & Compliance** involves setting up a security, compliance, and audit control framework throughout an organization to achieve increased assurance in software under contruction and in operation.

**Lifecycle Security Culture** add short description here.

…*more on page 10*

## Construction: 
Construction concerns the processes and activities related to how an organization defines goals and creates software within development projects. In general, this will include product management, requirements gathering, high-level architecture specification, detailed design, and implementation.

**Threat Assessment** involves accurately identifying and characterizing potential attacks upon an organization’s software in order to better understand the risks and facilitate risk management.

**Security Requirements** involves promoting the inclusion of security-related requirements during the software development process in order to specify correct functional-ity from inception.

**Secure Architecture** involves bolstering the design process with activities to promote secure-by-default designs and control over technologies and frameworks upon which software is built.

**Lifecycle Security Design** add short description here.

…*more on page 12*

## Verification
Verification is focused on the processes and activities related to how an organization checks, and tests artifacts produced throughout software development. This typically includes quality assurance work such as testing, but it can also include other review and evaluation activities.

**Design Review** involves inspection of the artifacts created from the design process to ensure provision of adequate security mechanisms, and adherence to an organization’s expectations for security.

**Implementation Review** involves assessment of an organization’s source code to aid vulnerability discovery and related mitigation activities as well as establish a baseline for secure coding expectations.

**Security Testing** involves testing the organization’s software in its runtime environment, in order to both discover vulnerabilities, and establish a minimum standard for software releases.

**Lifecycle Security Testing** add short description here.

…*more on page 14*

## Operations
Operations entails the processes and activities related to how an organization manages software releases that has been created. This can involve shipping products to end users, deploying products to internal or external hosts, and normal operations of software in the runtime environment.

**Issue Management** involves establishing consistent processes for managing internal and external vulnerability reports to limit exposure and gather data to enhance the security assurance program.

**Environment Hardening** involves implementing controls for the operating environment surrounding an organization’s software to bolster the security posture of applications that have been deployed.

**Operational Enablement** involves identifying and capturing security-relevant information needed by an operator to properly configure, deploy, and run an organization’s software.

**Lifecycle Security Monitoring** add short description here.

*…more on page 16*

### Maturity Levels

Each of the twelve security practices has three defined maturity levels and an implicit starting point at zero. The details for each level differs between the practices, but they generally represent:

* 0. Implicit starting point representing the activities in the practice being unfulfilled
* 1. Initial understanding and adhoc provision of security practice
* 2. Increase efficiency and/or effectiveness of the security practice
* 3. Comprehensive mastery of the security practice at scale

Assurance programs might not always consist of activities that neatly fall on a boundary between maturity levels, e.g. an organization that assesses to a Level 1 for a given practice might also have additional activities in place but not such that Level 2 is completed. Prior to v1.5, the organization’s score should be annotated with a “**+**” symbol to indicate there’s additional assurances in place beyond those indicated by the Level obtained. For example, an organization that is performing all Level 1 activities for operational enablement as well as one Level 2 or 3 activity would be assigned a “**1+**” score. Likewise, an organization performing all activities for a security practice, including some beyond the scope of SAMM, would be given a "**3+**" score.

The scoring model has changed in v1.5 to provide more granularity to the scoring in an assessment. Now an organization will get credit for different levels of work they have done within a practice rather than having the base number held at the highest completed maturity level. The scoring is now fractional to two decimal places for each practice and a single decimal for an answer. Questions have also been changed from Yes/No to four options that represent different levels of coverage or maturity. This change will assist practitioners completing SAMM assessments with the inevitable debate whether to mark an answer yes or no when it is honestly something in between.

The primary reason for the scoring change was to ensure organizations would receive full credit for their work in software security and to make it easier to show improvements in scoring when activities and programs grow and mature. The hope is this change will bring us closer to understanding what works in different scenarios for different organizations to benefit all.

The toolbox spreadsheet has been updated to reflect more context aware answers for each of the questions in the assessment. The formulas in the toolbox will also average the answers to calculate the score for each practice, a roll up average for each business function, and an overall score. The toolbox also has updated scorecard graphics that help represent the current score and can help show improvements to the program as the answers to the questions change. The worksheets later in this document are also updated to align with the new scoring model.

* **No = 0**
* **Few/Some = .2**
*  **At Least Half = .5**
*  **Many/Most = 1**

# Governance
## Description of Security Practices

### Strategy & Metrics
The Strategy & Metrics (SM) practice is focused on establishing the framework within an organization for a software security assurance program. This is the most fundamental step in defining security goals in a way that’s both measurable and aligned with the organization’s real business risk.

By starting with lightweight risk profiles, an organization grows into more advanced risk classification schemes for application and data assets over time. With additional insight on relative risk measures, an organization can tune its project-level security goals and develop granular roadmaps to make the security program more efficient. At the more advanced levels within this practice, an organization draws upon many data sources, both internal and external, to collect metrics and qualitative feedback on the security program. This allows fine tuning of cost outlay versus the realized benefit at the program level.

### Policy & Compliance

The Policy & Compliance (PC) practice is focused on understanding and meeting external legal and regulatory requirements while also driving internal security standards to ensure compliance in a way that’s aligned with the business purpose of the organization.

A driving theme for improvement within this practice is focus on project-level audits that gather information about the organization’s behavior in order to check that expectations are being met. By introducing routine audits that start out lightweight and grow in depth over time, organizational change is achieved iteratively.

In a sophisticated form, provision of this practice entails organization-wide understanding of both internal standards and external compliance drivers while also maintaining low-latency checkpoints with project teams to ensure no project is operating outside expectations without visibility.

### Education & Guidance

The Education & Guidance (EG) practice is focused on arming personnel involved in the software lifecycle with knowledge and resources to design, develop, and deploy secure software. With improved access to information, project teams will be better able to proactively identify and mitigate specific security risks that apply to their organization.

One major theme for improvement across the objectives is providing training for employees, either through instructor-led sessions or computer-based modules. As an organization progresses, a broad base of training is built by starting with developers and moving to other roles throughout the organization, culminating with the addition of role-based certification to ensure comprehension of the material.

In addition to training, this practice also requires pulling security-relevant information into guidelines that serve as reference information to staff. This builds a foundation for establishing a baseline expectation for security practices in your organization, and later allows for incremental improvement once usage of the guidelines has been adopted.

### Lifecycle Security Culture

Add long description here.


# Governance
## Activities Overview

### Strategy & Metrics
*…more on page 24* 

| | SM 1  | SM 2  | SM 3 |
:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Establish a unified strategic roadmap for software security within the organization.** | **Measure relative value of data and software assets and choose risk tolerance.** | **Align security expenditure with relevant business indicators and asset value.** |
| **Activities:** | **A.** Estimate overall business risk profile **B.** Build and maintain assurance program roadmap| **A.** Classify data and applications based on business risk **B.** Establish and measure per–classification security goals | **A.** Conduct periodic industry-wide cost comparisons **B.** Collect metrics for historic security spend |

### Policy & Compliance
*…more on page 28*

| | PC 1  | PC 2  | PC 3 |
:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Understand relevant governance and compliance drivers to the organization.** | **Establish security and compliance baseline and understand per-project risks.** | **Require compliance and measure projects against organization-wide policies and standards.** |
| **Activities:** | **A.** Identify and monitor external compliance drivers **B.** Build and maintain compliance guidelines| **A.** Build policies and standards for security and compliance **B.** Establish project audit practice | **A.** Create compliance gates for projects **B.** Adopt solution for audit data collection |

### Education & Guidance
*…more on page 32*

| | EG 1  | EG 2  | EG 3 |
:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Offer development staff access to resources around the topics of secure programming and deployment.** | **Educate all personnel in the software lifecycle with role-specific guidance on secure development.** | **Mandate comprehensive security training and certify personnel for baseline knowledge.** |
| **Activities:** | **A.** Conduct technical security awareness training **B.** Build and maintain technical guidelines| **A.** Conduct role-specific application security training **B.** Utilize security coaches to enhance project teams | **A.** Create formal application security support portal **B.** Establish role-based examination/certification|

### Lifecycle Security Culture
*…more on page XX*

| | SC 1  | SC 2  | SC 3 |
:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Offer development staff access to resources around the topics of secure programming and deployment.** | **Educate all personnel in the software lifecycle with role-specific guidance on secure development.** | **Mandate comprehensive security training and certify personnel for baseline knowledge.** |
| **Activities:** | **A.** Conduct technical security awareness training **B.** Build and maintain technical guidelines| **A.** Conduct role-specific application security training **B.** Utilize security coaches to enhance project teams | **A.** Create formal application security support portal **B.** Establish role-based examination/certification|

# Construction
## Description of Security Practices

### Threat Assessment
The Threat Assessment (TA) practice is centered on identification and understanding the project-level risks based on the functionality of the software being developed and characteristics of the runtime environment. From details about threats and likely attacks against each project, the organization as a whole operates more effectively through better decisions about prioritization of initiatives for security. Additionally, decisions for risk acceptance are more informed, therefore better aligned to the business.

By starting with simple threat models and building to more detailed methods of threat analysis and weighting, an organization improves over time. Ultimately, a sophisticated organization would maintain this information in a way that is tightly coupled to the compensating factors and pass-through risks from external entities. This provides greater breadth of understanding for potential downstream impacts from security issues while keeping a close watch on the organization’s current performance against known threats.

### Security Requirements
The Security Requirements (SR) practice is focused on proactively specifying the expected behavior of software with respect to security. Through addition of analysis activities at the project level, security requirements are initially gathered based on the high-level business purpose of the software. As an orga-nization advances, more advanced techniques are used such as access control specifications to discover new security requirements that may not have been initially obvious to development.

In a sophisticated form, provision of this practice also entails pushing the security requirements of the organization into its relationships with suppliers and then auditing projects to ensure all are adhering to expectations with regard to specification of security requirements.

### Secure Architecture
The Secure Architecture (SA) practice is focused on proactive steps for an organization to design and build secure software by default. By enhancing the software design process with reusable services and components, the overall security risk from software development can be dramatically reduced.

Beginning from simple recommendations about software frameworks and explicit consideration of secure design principles, an organization evolves toward consistently using design patterns for security functionality. Also, activities encourage project teams to increased utilization of centralized security services and infrastructure.

As an organization evolves over time, sophisticated provision of this practice entails organizations building reference platforms to cover the generic types of software they build. These serve as frameworks upon which developers can build custom software with lower risk of vulnerabilities.

### Lifecycle Security Design
Add long description here.


# Construction
## Activities Overview
### Threat Assessment
*…more on page 36*

| | TA 1  | TA 2  | TA 3 |
:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Identify and understand high-level threats to the organization and individual projects.** | **Increase accuracy of threat assessment and improve granularity of per-project understanding.** | **Concretely align compensating controls to each threat against internal and third-party software.** |
| **Activities:** | **A.** Build and maintain application-specific threat models  **B.**  Develop attacker profile from software architecture | **A.** Build and maintain abuse-case models per project **B.** Adopt a weighting system for measurement of threats | **A.** Explicitly evaluate risk from third-party components **B.** Elaborate threat models with compensating controls |

### Security Requirements
*…more on page 40*

| | SR 1  | SR 2  | SR 3 |
|:-------------|:------------- |:---------------| -------------|
| **Objective:** | **Consider security explicitly during the software requirements process.** | **Increase granularity of security requirements derived from business logic and known risks.** | **Mandate security requirements process for all software projects and third-party dependencies.** |
| **Activities:** | **A.** Derive security requirements from business functionality **B.** Evaluate security and compliance guidance for requirements | **A.**  Build an access control matrix for resources and capabilities **B.** Specify security requirements based on known risks | **A.** Build security requirements into supplier agreements **B.** Expand audit program for security requirements |

### Secure Architecture
*…more on page 44*

| | SA 1  | SA 2  | SA 3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Insert consideration of proactive security guidance into the software design process.** | **Direct the software design process toward known- secure services and secure-by-default designs.** | **Formally control the software design process and validate utilization of secure components.** |
| **Activities:** | **A.** Maintain list of recommended software frameworks **B.** Explicitly apply security principles to design | **A.** . Identify and promote security services and infrastructure **B.** Identify security design patterns from architecture | **A.** Establish formal reference architectures and platforms **B.** Validate usage of frameworks, patterns, and platforms |

### Lifecycle Security Design
*…more on page XX*

| | SD 1  | SD 2  | SD 3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:** | **Insert consideration of proactive security guidance into the software design process.** | **Direct the software design process toward known- secure services and secure-by-default designs.** | **Formally control the software design process and validate utilization of secure components.** |
| **Activities:** | **A.** Maintain list of recommended software frameworks **B.** Explicitly apply security principles to design | **A.** . Identify and promote security services and infrastructure **B.** Identify security design patterns from architecture | **A.** Establish formal reference architectures and platforms **B.** Validate usage of frameworks, patterns, and platforms |

# Verification
## Description of Security Practices

### Design Review
The Design Review (DR) practice is focused on assessment of software design and architecture for security-related problems. This allows an organization to detect architecture-level issues early in software development and thereby avoid potentially large costs from refactoring later due to security concerns.

Beginning with lightweight activities to build understanding of the security-relevant details about an architecture, an organization evolves toward more formal inspection methods that verify completeness in provision of security mechanisms. At the organization level, design review services are built and offered to stakeholders.

In a sophisticated form, provision of this practice involves detailed, data-level inspection of designs, and enforcement of baseline expectations for conducting design assessments and reviewing findings before releases are accepted.

### Implementation Review
The Implementation Review (IR) practice is focused on inspection of software at the source code and configuration level in order to find security vulnerabilities. Code-level vulnerabilities are generally simple to understand conceptually, but even informed developers can easily make mistakes that leave software open to potential compromise.

To begin, an organization uses lightweight checklists and for efficiency, only inspects the most critical software modules. However, as an organization evolves it uses automation technology to dramatically improve coverage and efficacy of implementation review activities.

Sophisticated provision of this practice involves deeper integration of implementation review into the development process to enable project teams to find problems earlier. This also enables organizations to better audit and set expectations for implementation review findings before releases can be made.

### Security Testing
The Security Testing (ST) practice is focused on inspection of software in the runtime environment in order to find security problems. These testing activities bolster the assurance case for software by checking it in the same context in which it is expected to run, thus making visible operational misconfigurations or errors in business logic that are difficult to otherwise find.

Starting with penetration testing and high-level test cases based on the functionality of software, an organization evolves toward usage of security testing automation to cover the wide variety of test cases that might demonstrate a vulnerability in the system.

In an advanced form, provision of this practice involves customization of testing automation to build a battery of security tests covering application-specific concerns in detail. With additional visibility at the organization level, security testing enables organizations to set minimum expectations for security testing results before a project release is accepted.

### Lifecycle Security Testing
Add long description here.

# Verification
## Activities Overview

### Design Review 
*...more on page 48*

| | DR1 | DR2 | DR3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:** |**Support ad-hoc reviews of software design to ensure baseline mitigations for known risks.**|**Offer assessment services to review software design against comprehensive best practices for security.**|**Require assessments and validate artifacts to develop detailed understanding of protection mechanisms.**| 
| **Activities:** |**A.** Identify software attack surface **B.** Analyze design against known security requirements | **A.** Inspect for complete provision of security mechanisms **B.** Deploy design review service for project teams|**A.** Develop data-flow diagrams for sensitive resources **B.** Establish release gates for design review|

### Implementation Review 
*...more on page 52*

| | IR 1 | IR 2 | IR 3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:** |**Opportunistically find basic code-level vulnerabilities and other high-risk security issues.**| **Make implementation review during development more accurate and efficient through automation.**|**Mandate comprehensive implementation review process to discover language-level and application-specific risks.**|
|**Activities**|**A.** Create review checklists from known security requirements **B.** Perform point-review of high-risk code|*A.* Utilize automated code analysis tools **B.** Integrate code analysis into development process|**A.** Customize code analysis for application-specific concerns **B.** Establish release gates for code review|

### Security Testing 
*...more on page 56*

| | ST1 |ST2 | ST3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:**| **Establish process to perform basic security tests based on implementation and software requirements.** |**Make security testing during development more complete and efficient through automation.** | **Require application- specific security testing to ensure baseline security before deployment.** |
| **Activities:**|**A.** Derive test cases from known security requirements **B.** Conduct penetration testing on software releases | **A.** Utilize automated security testing tools **B.** Integrate security testing into development process | **A.** Employ application-specific security testing automation **B.** Establish release gates for security testing

### Lifecycle Security Testing 
*...more on page XX*

| | ST1 |ST2 | ST3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:**| **Establish process to perform basic security tests based on implementation and software requirements.** |**Make security testing during development more complete and efficient through automation.** | **Require application- specific security testing to ensure baseline security before deployment.** |
| **Activities:**|**A.** Derive test cases from known security requirements **B.** Conduct penetration testing on software releases | **A.** Utilize automated security testing tools **B.** Integrate security testing into development process | **A.** Employ application-specific security testing automation **B.** Establish release gates for security testing

# Operations
## Description of Security Practices
### Issue Management
The Issue Management (IM) practice is focused on the processes within an organization with respect to handling issue reports and operational incidents. By having these processes in place, an organization’s projects will have consistent expectations and increased efficiency for handling these events, rather than chaotic and uninformed responses.

Starting from lightweight assignment of roles in the event of an incident, an organization grows into a more formal incident response process that ensures visibility and tracking on issues that occur. Communications are also improved to improve overall understanding of the processes.

In an advanced form, issue management involves thorough dissecting of incidents and issue reports to collect detailed metrics and other root-cause information to feedback into the organization’s downstream behavior.

### Environment Hardening 
The Environment Hardening (EH) practice is focused on building assurance for the runtime environment that hosts the organization’s software. Since secure operation of an application can be deteriorated by problems in external components, hardening this underlying infrastructure directly improves the overall security posture of the software.

By starting with simple tracking and distributing of information about the operating environment to keep development teams better informed, an organization evolves to scalable methods for managing deployment of security patches and instrumenting the operating environment with early-warning de- tectors for potential security issues before damage is done.

As an organization advances, the operating environment is further reviewed and hardened by deployment of protection tools to add layers of defenses and safety nets to limit damage in case any vulnerabilities are exploited.
   
### Operational Enablement
The Operational Enablement (OE) practice is focused on gathering security critical information from the project teams building software and communicating it to the users and operators of the software. Without this information, even the most securely designed software carries undue risks since important security characteristics and choices will not be known at a deployment site.

Starting from lightweight documentation to capture the most important details for users and operators, an organization evolves toward building complete operational security guides that are delivered with each release.

In an advanced form, operational enablement also entails organization-level checks against individual project teams to ensure that information is being captured and shared according to expectations.
   
### Lifecycle Security Monitoring
Add long description here.

# Operations
## Activities Overview
### Issue Management
*…more on page 60*

| | IM 1 | IM 2 | IM 3 |
|:-------------|:------------- |:---------------|:-------------|
| **Objective:** |**Understand high-level plan for responding to issue reports or incidents.**|**Elaborate expectations for response process to improve consistency and communications.**|**Improve analysis and data gathering within response process for feedback into proactive planning.**|  
| **Activities:** |**A.** Identify point of contact for security issues **B.** Create informal security response team(s) | **A.** Establish consistent issue reponse process **B.** Adopt a security issue disclosure process |**A.** Conduct root cause analysis for for issues **B.** Collect per-issue metrics|

### Environment Hardening
*…more on page 64*

| | EH1 | EH2 | EH3|
|:-------------|:------------- |:---------------|:-------------|
|**Objective:** | **Understand baseline operational environment for applications and software components.** | **Improve confidence in application operations by hardening the operating environment.** | **Validate application health and status of operational environment against known best practices.** |
|**Activities:** | **A.** Maintain operational environment specification **B.** Identify and install critical security upgrades and patches | **A.** Establish routine patch management process **B.** Monitor baseline environment configuration status | **A.** Identify and deploy relevant operations protection tools **B.** Expand audit program for environment configuration |

### Operational Enablement
*…more on page 68*

| | OE1 | OE2 | OE3 |
|:-------------|:------------- |:---------------|:-------------|
|**Objective:** | **Enable communications between development teams and operators for critical security-relevant data.** | **Improve expectations for continuous secure operations through provision of detailed procedures.** | **Mandate communication of security information and validate artifacts for completeness.** |
| **Activities:** | **A.** Capture critical security information for deployment **B.** Document procedures for typical application alerts | **A.** Create per-release change management procedures **B.** Maintain formal operational security guides | **A.** Expand audit program for operational information **B.** Perform code signing for application components |

### Lifecycle Security Monitoring
*…more on page XX*

| | SM1 | SM2 | SM3 |
|:-------------|:------------- |:---------------|:-------------|
|**Objective:** | **Enable communications between development teams and operators for critical security-relevant data.** | **Improve expectations for continuous secure operations through provision of detailed procedures.** | **Mandate communication of security information and validate artifacts for completeness.** |
| **Activities:** | **A.** Capture critical security information for deployment **B.** Document procedures for typical application alerts | **A.** Create per-release change management procedures **B.** Maintain formal operational security guides | **A.** Expand audit program for operational information **B.** Perform code signing for application components |

# Governance
## Assessment worksheet
### Strategy & Metrics
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SM1** 
| ✦Is there a software security assurance program in place?| NO | <1 YR | >1 YR | MATURE | 
| ✦ Are development staff aware of future plans for the assurance program? | NO | SOME | HALF | MOST |
| ✦Do the business stakeholders understand your organization’s risk profile? | NO |SOME| HALF | MOST|
| **SM2** 
| ✦ Are many of your applications and resources categorized by risk? | NO | SOME | HALF | MOST |
| ✦ Are risk ratings used to tailor the required assurance activities? | NO | SOME | HALF | MOST |
| ✦Does the organization know about what’s required based on risk ratings? | NO | SOME | HALF | MOST |
| **SM3** 
| ✦Is per-project data for the cost of assurance activities collected? | NO | SOME | HALF | MOST |
| ✦Does your organization regularly compare your security spend with that of other organizations? | NO | ONCE | EVERY 2-3 YRS | ANNUALLY |

### Policy & Compliance
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **PC1** 
| ✦Do project stakeholders know their project’s compliance status?| NO | SOME | HALF | MOST | 
| ✦ Are compliance requirements specifically considered by project teams? | NO | NOT APPLY | AD-HOC | YES |
| **PC2** 
| ✦ Does the organization utilize a set of policies and standards to control software development? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦ Are project teams able to request an audit for compliance with policies and standards? | NO | SOME | HALF | MOST |
| **PC3** 
| ✦Are projects periodically audited to ensure a baseline of compliance with policies and standards? | NO | SOME | HALF | MOST |
| ✦Does the organization systematically use audits to collect and control compliance evidence? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |

### Education & Guidance
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **EG1** 
| ✦Have developers been given high-level security awareness training?| NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |
|✦Does each project team understand where to find secure development best-practices and guidance? | NO | SOME | HALF | MOST |
|**EG2** 
|✦Are those involved in the development process given role-specific security training and guidance? | NO | SOME | HALF | MOST |
|✦ Are stakeholders able to pull in security coaches for use on projects? | NO | SOME | HALF | MOST |
| **EG3** 
| ✦Is security-related guidance centrally controlled and consistently distributed throughout the organization? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦ Are developers tested to ensure a baseline skill- set for secure development practices? | NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |

### Lifecycle Security Culture
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SC1** 
| ✦Have developers been given high-level security awareness training?| NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |
|✦Does each project team understand where to find secure development best-practices and guidance? | NO | SOME | HALF | MOST |
|**SC2** 
|✦Are those involved in the development process given role-specific security training and guidance? | NO | SOME | HALF | MOST |
|✦ Are stakeholders able to pull in security coaches for use on projects? | NO | SOME | HALF | MOST |
| **SC3** 
| ✦Is security-related guidance centrally controlled and consistently distributed throughout the organization? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦ Are developers tested to ensure a baseline skill- set for secure development practices? | NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |

# Construction
## Assessment worksheet
### Threat Assessmment
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **TA1** 
| ✦Do projects in your organization consider and document likely threats? | NO | SOME | HALF | MOST |
| ✦Does your organization understand and document the types of attackers it faces? | NO | SOME | HALF | MOST |
|**TA2** 
| ✦Do project teams regularly analyze functional requirements for likely abuses? | NO | SOME | HALF | MOST |
| ✦Do project teams use a method of rating threats for relative comparison? |  NO | SOME | HALF | MOST |
| ✦Are stakeholders aware of relevant threats and ratings? | NO | SOME | HALF | MOST |
| **TA3** 
| ✦Do project teams specifically consider risk from external software? | NO | SOME | HALF | MOST |
| ✦ Are the majority of the protection mechanisms and controls captured and mapped back to threats? | NO | SOME | HALF | MOST |

### Security Requirements
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SR1** 
| ✦Do project teams specify security requirements during development? | NO | SOME | HALF | MOST | 
| ✦Do project teams pull requirements from best practices and compliance guidance? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS | 
| **SR2** 
| ✦Do stakeholders review access control matrices for relevant projects? | 
| NO | SOME | HALF | MOST | 
| ✦Do project teams specify requirements based on feedback from other security activities? | NO | SOME | HALF | MOST | 
| **SR3** 
| ✦Do stakeholders review vendor agreements for security requirements? | NO | SOME | HALF | MOST | 
|✦ Are audits performed against the security requirements specified by project teams? | NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |

### Secure Architecture
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SA1**
|✦ Are project teams provided with a list of recommended third-party components? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦ Are project teams aware of secure design principles and do they apply them consistently? | NO | SOME | HALF | MOST |
| **SA2**
| ✦Do you advertise shared security services with guidance for project teams? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦ Are project teams provided with prescriptive design patterns based on their application architecture? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
|**SA3**
| ✦Do project teams build software from centrally- controlled platforms and frameworks? | NO | SOME | HALF | MOST |
| ✦ Are project teams audited for the use of secure architecture components? | NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |

### Lifecycle Security Design
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SD1**
|✦ Are project teams provided with a list of recommended third-party components? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦ Are project teams aware of secure design principles and do they apply them consistently? | NO | SOME | HALF | MOST |
| **SD2**
| ✦Do you advertise shared security services with guidance for project teams? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦ Are project teams provided with prescriptive design patterns based on their application architecture? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
|**SD3**
| ✦Do project teams build software from centrally- controlled platforms and frameworks? | NO | SOME | HALF | MOST |
| ✦ Are project teams audited for the use of secure architecture components? | NO | ONCE | EVERY 2-3 YEARS | ANNUALLY |

# Verification
## Assessment worksheet
### Design Review
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **DR1**
| ✦Do project teams document the attack perimeter of software designs? | NO | SOME | HALF | MOST |
| ✦ Do project teams check software designs against known security risks? | NO | SOME | HALF | MOST |
| **DR2**
| ✦Do project teams specifically analyze design elements for security mechanisms? | NO | SOME | HALF | MOST |
| ✦ Are project stakeholders aware of how to obtain a formal secure design review? | NO | SOME | HALF | MOST |
| **DR3**
| ✦Does the secure design review process incorporate detailed data-level analysis? | NO | SOME | HALF | MOST |
| ✦Does a minimum security baseline exist for secure design review results? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |

### Implementation Review
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **IR1**
| ✦Do project teams have review checklists based on common security related problems? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦Do project teams review selected high-risk code? | NO | SOME | HALF | MOST |
| **IR2**
| ✦Can project teams access automated code analysis tools to find security problems? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦Do stakeholders consistently review results from code reviews? | NO | SOME | HALF | MOST |
| **IR3**
| ✦Do project teams utilize automation to check code against application-specific coding standards? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦Does a minimum security baseline exist for code review results? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |

### Security Testing
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **ST1**
| ✦Do projects specify security testing based on defined security requirements? | NO | SOME | HALF | MOST |
| ✦Is penetration testing performed on high risk projects prior to release? | NO | SOME | HALF | MOST |
|✦Are stakeholders aware of the security test status prior to release? | NO | SOME | HALF | MOST |
| **ST2**
| ✦Do projects use automation to evaluate security test cases? | NO | SOME | HALF | MOST |
| ✦Do projects follow a consistent process to evaluate and report on security tests to stakeholders? | NO | SOME | HALF | MOST |
| **ST3**
| ✦Are security test cases comprehensively generated for application-specific logic? | NO | SOME | HALF | MOST |
| ✦Does a minimum security baseline exist for security testing? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |

### Lifecycle Security Testing
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **ST1**
| ✦Do projects specify security testing based on defined security requirements? | NO | SOME | HALF | MOST |
| ✦Is penetration testing performed on high risk projects prior to release? | NO | SOME | HALF | MOST |
|✦Are stakeholders aware of the security test status prior to release? | NO | SOME | HALF | MOST |
| **ST2**
| ✦Do projects use automation to evaluate security test cases? | NO | SOME | HALF | MOST |
| ✦Do projects follow a consistent process to evaluate and report on security tests to stakeholders? | NO | SOME | HALF | MOST |
| **ST3**
| ✦Are security test cases comprehensively generated for application-specific logic? | NO | SOME | HALF | MOST |
| ✦Does a minimum security baseline exist for security testing? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |

# Operations
## Assessment worksheet
### Issue Management
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **IM1**
| ✦Do projects have a point of contact for security issues or incidents?| NO | SOME | HALF | MOST |
| ✦Does your organization have an assigned security response team?| NO | <1 YEAR | >1 YEAR | MATURE |
| ✦Are project teams aware of their security point(s) of contact and response team(s)? | NO | SOME | HALF | MOST |
| **IM2**
| ✦Does the organization utilize a consistent process for incident reporting and handling? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦Are project stakeholders aware of relevant security disclosures related to their software projects?| NO | SOME | HALF | MOST |
| **IM3**
| ✦Are incidents inspected for root causes to generate further recommendations? | NO | SOME | HALF | MOST |
| ✦Do projects consistently collect and report data and metrics related to incidents? | NO | SOME | HALF | MOST |

### Environment Hardening
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **EH1**
| ✦Do projects document operational environment security requirements? | NO | SOME | HALF | MOST |
| ✦Do projects check for security updates to third-party software components?| NO | SOME | HALF | MOST |
| **EH2**
| ✦Is a consistent process used to apply upgrades and patches to critical dependencies? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |
| ✦Do projects leverage automation to check application and environment health? | NO | SOME | HALF | MOST |
| **EH3**
| ✦ Are stakeholders aware of options for additional tools to protect software while running in operations? | NO | PER TEAM | ORG WIDE | INTEGRATED PROCESS |
| ✦Does a minimum security baseline exist for environment health (versioning, patching, etc)? | NO | BUS AREA | ORG WIDE | ORG WIDE & REQUIRED |

### Operational Enablement
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **OE1**
| ✦Are security notes delivered with each software release? | NO | SOME | HALF | MOST |
| ✦Are security-related alerts and error conditions documented on a per-project basis? | NO | SOME | HALF | MOST |
| **OE2**
| ✦Do projects utilize a change management process that’s well understood? | NO | SOME | HALF | MOST |
| ✦Do project teams deliver an operational security guide with each product release? | NO | SOME | HALF | MOST |
| **OE3**
| ✦Are project releases audited for appropriate operational security information? | NO | ONCE | EVERY 2-3 YRS | ANNUALLY |
| ✦Is code signing routinely performed on software components using a consistent process? | NO | NOT APPLY | AD-HOC | YES |

### Lifecycle Security Monitoring
| | | | | |
|:-------------|:-------------|:---------------|:-------------|:------------|
| **SCORE** | **0.0** | **0.2** | **0.5** | **1.0** |
| **SM1**
| ✦Are security notes delivered with each software release? | NO | SOME | HALF | MOST |
| ✦Are security-related alerts and error conditions documented on a per-project basis? | NO | SOME | HALF | MOST |
| **SM2**
| ✦Do projects utilize a change management process that’s well understood? | NO | SOME | HALF | MOST |
| ✦Do project teams deliver an operational security guide with each product release? | NO | SOME | HALF | MOST |
| **SM3**
| ✦Are project releases audited for appropriate operational security information? | NO | ONCE | EVERY 2-3 YRS | ANNUALLY |
| ✦Is code signing routinely performed on software components using a consistent process? | NO | NOT APPLY | AD-HOC | YES |

#!['THE SECURITY PRACTICES: An explanation of the details' IMAGES HERE](SecurityPractices.png )
#![PracticesImage](PracticesImage.png )
This section defines the building blocks of SAMM, the maturity levels under each security practice. For each practice, the three levels are covered in a summary table.
<!--stackedit_data:
eyJkaXNjdXNzaW9ucyI6eyIwQ25LSk9iWUZzbGdZVG1tIjp7In
N0YXJ0Ijo1NzY4LCJlbmQiOjU3NjksInRleHQiOiIjIn0sIlNT
OVFvUkd0Vk8xZDFPMG8iOnsic3RhcnQiOjU5OTksImVuZCI6Nj
AwMCwidGV4dCI6IiMifSwiY1dHQmtPMFJvYmhlSGRITyI6eyJz
dGFydCI6NzE3MywiZW5kIjo3MjQzLCJ0ZXh0IjoiKipGb3IgZW
FjaCBidXNpbmVzcyBmdW5jdGlvbiwgU0FNTSBkZWZpbmVzIHRo
cmVlIHNlY3VyaXR5IHByYWN0aWNlcy4qKiJ9LCJDaGVxNldkYW
FjdUlUa3I4Ijp7InN0YXJ0Ijo4NjU2LCJlbmQiOjg3MTQsInRl
eHQiOiIqKkxpZmVjeWNsZSBDdWx0dXJlKiogYWRkIHNob3J0IG
Rlc2NyaXB0aW9uIGhlcmUuIn0sIktOVDFXYURVN0Fnc1U3aVIi
Onsic3RhcnQiOjk2MzEsImVuZCI6OTY4OCwidGV4dCI6IioqTG
lmZWN5Y2xlIFNlY3VyaXR5IERlc2lnbioqIGFkZCBzaG9ydCBk
ZXNjcmlwdGlvbiBoZXJlLiJ9LCJ4RGJHYXVrYjRTUmF4eElDIj
p7InN0YXJ0IjoxMDYxOCwiZW5kIjoxMDY3NiwidGV4dCI6Iioq
TGlmZWN5Y2xlIFRlc3RpbmcqKiBhZGQgc2hvcnQgZGVzY3JpcH
Rpb24gaGVyZS4ifSwiY3BUV0N1bTJET3o5ZExodiI6eyJzdGFy
dCI6MTE1ODMsImVuZCI6MTE2NDQsInRleHQiOiIqKkxpZmVjeW
NsZSBTZWN1cml0eSBNb25pdG9yaW5nKiogYWRkIHNob3J0IGRl
c2NyaXB0aW9uIGhlcmUuIn0sImdERmxFRlRtQ2NNb0FKdUsiOn
sic3RhcnQiOjE3NjcyLCJlbmQiOjE3NzMwLCJ0ZXh0IjoiIyMj
IExpZmVjeWNsZSBTZWN1cml0eSBDdWx0dXJlXG5cbkFkZCBsb2
5nIGRlc2NyaXB0aW9uIGhlcmUuIn0sIktKamY4UHlCWGJES2dl
QXEiOnsic3RhcnQiOjIwMTE4LCJlbmQiOjIwMTM2LCJ0ZXh0Ij
oiKuKApm1vcmUgb24gcGFnZSBYWCoifSwiWml2Q0NZTWhVUTIw
VDVKMyI6eyJzdGFydCI6MjAxMzgsImVuZCI6MjA5MDEsInRleH
QiOiJ8IHwgU0MgMSAgfCBTQyAyICB8IFNDIDMgfFxuOi0tLS0t
LS0tLS0tLS18Oi0tLS0tLS0tLS0tLS0gfDotLS0tLS0tLS0tLS
0tLS18Oi0tLeKApiJ9LCJwanpLc2RVSzJxNmpFM2VRIjp7InN0
YXJ0IjoyMzc3NSwiZW5kIjoyMzgzMSwidGV4dCI6IiMjIyBMaW
ZlY3ljbGUgU2VjdXJpdHkgRGVzaWduXG5BZGQgbG9uZyBkZXNj
cmlwdGlvbiBoZXJlLiJ9LCJ2R2tMbVBZdGJvcFFOZjhLIjp7In
N0YXJ0IjoyNjQxNSwiZW5kIjoyNzIwMiwidGV4dCI6InwgfCBT
RCAxICB8IFNEIDIgIHwgU0QgMyB8XG58Oi0tLS0tLS0tLS0tLS
18Oi0tLS0tLS0tLS0tLS0gfDotLS0tLS0tLS0tLS0tLS18Oi0t
4oCmIn0sIlM4S1d0N3M3VmczSnhpMHgiOnsic3RhcnQiOjI2Mz
k1LCJlbmQiOjI2NDEzLCJ0ZXh0IjoiKuKApm1vcmUgb24gcGFn
ZSBYWCoifSwiVHNscVp5dGV1MWw5OU93TiI6eyJzdGFydCI6Mz
AxMzgsImVuZCI6MzAxOTUsInRleHQiOiIjIyMgTGlmZWN5Y2xl
IFNlY3VyaXR5IFRlc3RpbmdcbkFkZCBsb25nIGRlc2NyaXB0aW
9uIGhlcmUuIn0sIkN0SGtPYW16UHdtTzFTWUgiOnsic3RhcnQi
OjMyNjUyLCJlbmQiOjMzNDY4LCJ0ZXh0IjoiIyMjIExpZmVjeW
NsZSBTZWN1cml0eSBUZXN0aW5nIFxuKi4uLm1vcmUgb24gcGFn
ZSBYWCpcblxufCB8IFNUMSB8U1QyIHwgU1QzIHxcbnw6LS3igK
YifSwidVBYMjQzVXBMNnBsVHFDSCI6eyJzdGFydCI6MzYxNzgs
ImVuZCI6MzYyMzgsInRleHQiOiIjIyMgTGlmZWN5Y2xlIFNlY3
VyaXR5IE1vbml0b3JpbmdcbkFkZCBsb25nIGRlc2NyaXB0aW9u
IGhlcmUuIn0sIkVLTElKYXNqMnE1a0VPZVMiOnsic3RhcnQiOj
M4NjMxLCJlbmQiOjM4NjgzLCJ0ZXh0IjoiIyMjIExpZmVjeWNs
ZSBTZWN1cml0eSBNb25pdG9yaW5nXG4q4oCmbW9yZSBvbiBwYW
dlIFhYKiJ9LCI2eEppNk10NDhDVXZSZUY0Ijp7InN0YXJ0Ijoz
ODY4NSwiZW5kIjozOTQ1MCwidGV4dCI6InwgfCBTTTEgfCBTTT
IgfCBTTTMgfFxufDotLS0tLS0tLS0tLS0tfDotLS0tLS0tLS0t
LS0tIHw6LS0tLS0tLS0tLS0tLS0tfDotLS0tLS0t4oCmIn0sIl
g1RlNVSTFXczlqUGFWT3UiOnsic3RhcnQiOjQyNDM4LCJlbmQi
OjQzNDA4LCJ0ZXh0IjoiIyMjIExpZmVjeWNsZSBTZWN1cml0eS
BDdWx0dXJlXG58IHwgfCB8IHwgfFxufDotLS0tLS0tLS0tLS0t
fDotLS0tLS0tLS0tLS0tfDotLS0t4oCmIn0sImVTSUhieWNtN0
1SUERuVGQiOnsic3RhcnQiOjMyNzA2LCJlbmQiOjMyNzI2LCJ0
ZXh0IjoifCB8IFNUMSB8U1QyIHwgU1QzIHwifSwiYUo4N1VDNE
1CV2ozMDRBOSI6eyJzdGFydCI6NDYyNTIsImVuZCI6NDcyMjcs
InRleHQiOiIjIyMgTGlmZWN5Y2xlIFNlY3VyaXR5IERlc2lnbl
xufCB8IHwgfCB8IHxcbnw6LS0tLS0tLS0tLS0tLXw6LS0tLS0t
LS0tLS0tLXw6LS0tLS3igKYifSwieUdJUXZJWk43SFhOcGNRUy
I6eyJzdGFydCI6NDk5ODksImVuZCI6NTA5NTEsInRleHQiOiIj
IyMgTGlmZWN5Y2xlIFNlY3VyaXR5IFRlc3RpbmdcbnwgfCB8IH
wgfCB8XG58Oi0tLS0tLS0tLS0tLS18Oi0tLS0tLS0tLS0tLS18
Oi0tLS3igKYifSwiemFjS3hoazBUTnMwZU10OSI6eyJzdGFydC
I6NTM4MjAsImVuZCI6NTQ2OTMsInRleHQiOiIjIyMgTGlmZWN5
Y2xlIFNlY3VyaXR5IE1vbml0b3JpbmdcbnwgfCB8IHwgfCB8XG
58Oi0tLS0tLS0tLS0tLS18Oi0tLS0tLS0tLS0tLS18Oi3igKYi
fX0sImNvbW1lbnRzIjp7Ikh5SE1UbmFLUDZ5c1NHNTMiOnsiZG
lzY3Vzc2lvbklkIjoiMENuS0pPYllGc2xnWVRtbSIsInN1YiI6
ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRPRE8gSm9oYW5uZXMgY2
hhbmdlIHBpY3R1cmUiLCJjcmVhdGVkIjoxNTUxNDM4MDQ4NzIw
fSwiOUVIVjBybEZzWko4RnpaVyI6eyJkaXNjdXNzaW9uSWQiOi
JTUzlRb1JHdFZPMWQxTzBvIiwic3ViIjoiZ2g6MTY3MDUwOTUi
LCJ0ZXh0IjoiVE9ETyBKb2hhbm5lcyBhZGQgcHJhY3RpY2VzIi
wiY3JlYXRlZCI6MTU1MTQzODA3MDY3MX0sInViQ3JadGVNWWh6
T0N2cFYiOnsiZGlzY3Vzc2lvbklkIjoiY1dHQmtPMFJvYmhlSG
RITyIsInN1YiI6ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRPRE8g
Sm9oYW5uZXMgXCJmb3VyIHNlY3VyaXR5IHByYWN0aWNlc1wiIi
wiY3JlYXRlZCI6MTU1MTQzODEzNTgyMH0sInNNNG1yaUR3azMy
ZHpqUzIiOnsiZGlzY3Vzc2lvbklkIjoiQ2hlcTZXZGFhY3VJVG
tyOCIsInN1YiI6ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRPRE8g
SsO8cmdlbiIsImNyZWF0ZWQiOjE1NTE0MzgxOTg5ODh9LCJTU0
JrdktDSWdzOU9sWUoxIjp7ImRpc2N1c3Npb25JZCI6IktOVDFX
YURVN0Fnc1U3aVIiLCJzdWIiOiJnaDoxNjcwNTA5NSIsInRleH
QiOiJUT0RPIFRhYmVhIEthdGphIiwiY3JlYXRlZCI6MTU1MTQz
ODI3MjA1NH0sImpLUkV5YkN5c0NEZjRDRksiOnsiZGlzY3Vzc2
lvbklkIjoieERiR2F1a2I0U1JheHhJQyIsInN1YiI6ImdoOjE2
NzA1MDk1IiwidGV4dCI6IlRPRE8gSm9oYW5uZXMiLCJjcmVhdG
VkIjoxNTUxNDM4MzIyOTY4fSwiYTQyVnhKZ1VHR0l4N245VCI6
eyJkaXNjdXNzaW9uSWQiOiJjcFRXQ3VtMkRPejlkTGh2Iiwic3
ViIjoiZ2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9ETyBFZHVhcmQi
LCJjcmVhdGVkIjoxNTUxNDM4MzgwNTA2fSwiTGtDVzBZdVJQT1
dIT2hrSyI6eyJkaXNjdXNzaW9uSWQiOiJnREZsRUZUbUNjTW9B
SnVLIiwic3ViIjoiZ2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9ETy
BKw7xyZ2VuIiwiY3JlYXRlZCI6MTU1MTQzODQ3MzM3OX0sImpx
UjQ5emlRZnR4cmJSWmwiOnsiZGlzY3Vzc2lvbklkIjoiS0pqZj
hQeUJYYkRLZ2VBcSIsInN1YiI6ImdoOjE2NzA1MDk1IiwidGV4
dCI6IlRPRE8gSm9oYW5uZXMiLCJjcmVhdGVkIjoxNTUxNDM4NT
M5NjYxfSwiRFFjS1ppenBTRHI0ak5heiI6eyJkaXNjdXNzaW9u
SWQiOiJaaXZDQ1lNaFVRMjBUNUozIiwic3ViIjoiZ2g6MTY3MD
UwOTUiLCJ0ZXh0IjoiVE9ETyBKw7xyZ2VuIiwiY3JlYXRlZCI6
MTU1MTQzODYwMDEyMH0sInpxVnJHNEVRT1RwYWJzZWMiOnsiZG
lzY3Vzc2lvbklkIjoicGp6S3NkVUsycTZqRTNlUSIsInN1YiI6
ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRPRE8gVGFiZWEgS2F0am
EiLCJjcmVhdGVkIjoxNTUxNDM4NzAwMjE5fSwidG5abmtZZ09J
S3J4bVk1VCI6eyJkaXNjdXNzaW9uSWQiOiJ2R2tMbVBZdGJvcF
FOZjhLIiwic3ViIjoiZ2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9E
TyBUYWJlYSAmIEthdGphIiwiY3JlYXRlZCI6MTU1MTQzODc1OT
UzMn0sIjFhRG94OWNaeGNPdjRseDMiOnsiZGlzY3Vzc2lvbklk
IjoiUzhLV3Q3czdWZzNKeGkweCIsInN1YiI6ImdoOjE2NzA1MD
k1IiwidGV4dCI6IlRPRE8gSm9oYW5lbnMiLCJjcmVhdGVkIjox
NTUxNDM4Nzc2NDIwfSwiOVRhMGhjSlJ6TVc3OEhlUSI6eyJkaX
NjdXNzaW9uSWQiOiJUc2xxWnl0ZXUxbDk5T3dOIiwic3ViIjoi
Z2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9ETyBKb2hhbm5lcyIsIm
NyZWF0ZWQiOjE1NTE0Mzg4MzAzMjV9LCJNQVhySlJNeFVkNmNi
YVVUIjp7ImRpc2N1c3Npb25JZCI6IkN0SGtPYW16UHdtTzFTWU
giLCJzdWIiOiJnaDoxNjcwNTA5NSIsInRleHQiOiJUT0RPIEpv
aGFubmVzIiwiY3JlYXRlZCI6MTU1MTQzODg2ODc3NH0sImdBdX
hjMHJQVktWSU1mVWYiOnsiZGlzY3Vzc2lvbklkIjoidVBYMjQz
VXBMNnBsVHFDSCIsInN1YiI6ImdoOjE2NzA1MDk1IiwidGV4dC
I6IlRPRE8gRWR1YXJkIiwiY3JlYXRlZCI6MTU1MTQzODkxMDE5
N30sImxKaHRRYU14cHMyUjhSYVAiOnsiZGlzY3Vzc2lvbklkIj
oiRUtMSUphc2oycTVrRU9lUyIsInN1YiI6ImdoOjE2NzA1MDk1
IiwidGV4dCI6IlRPRE8gSm9oYW5uZXMiLCJjcmVhdGVkIjoxNT
UxNDM4OTU0NjQ0fSwic3FDYWVuZWFha2w5WmNHNiI6eyJkaXNj
dXNzaW9uSWQiOiI2eEppNk10NDhDVXZSZUY0Iiwic3ViIjoiZ2
g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9ETyBFZHVhcmQiLCJjcmVh
dGVkIjoxNTUxNDM4OTg4OTkxfSwiTUE4bDltS1R0R3lDTk8yeC
I6eyJkaXNjdXNzaW9uSWQiOiJYNUZTVUkxV3M5alBhVk91Iiwi
c3ViIjoiZ2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE9ETyBKw7xyZ2
VuIiwiY3JlYXRlZCI6MTU1MTQzOTA4MzIwOH0sIkx1SFlKVkdT
Z2hqZEY4M3IiOnsiZGlzY3Vzc2lvbklkIjoiZVNJSGJ5Y203TV
JQRG5UZCIsInN1YiI6ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRP
RE8gSm9oYW5uZXMgY2hhbmdlIHNob3J0Y3V0IiwiY3JlYXRlZC
I6MTU1MTQzOTE0NDcyM30sIlBidERvNHp1eEZDdjY5bUwiOnsi
ZGlzY3Vzc2lvbklkIjoiYUo4N1VDNE1CV2ozMDRBOSIsInN1Yi
I6ImdoOjE2NzA1MDk1IiwidGV4dCI6IlRPRE8gVGFiZWEgS2F0
amEiLCJjcmVhdGVkIjoxNTUxNDM5MjE5Njg3fSwiMVZWYWRpWU
JXcnNVSzN6SSI6eyJkaXNjdXNzaW9uSWQiOiJ5R0lRdklaTjdI
WE5wY1FTIiwic3ViIjoiZ2g6MTY3MDUwOTUiLCJ0ZXh0IjoiVE
9ETyBKb2hhbm5lcyIsImNyZWF0ZWQiOjE1NTE0MzkyNTM3NzR9
LCJRZ05jMkJWVnV3d1Y3ekhRIjp7ImRpc2N1c3Npb25JZCI6In
phY0t4aGswVE5zMGVNdDkiLCJzdWIiOiJnaDoxNjcwNTA5NSIs
InRleHQiOiJUT0RPIEVkdWFyZCIsImNyZWF0ZWQiOjE1NTE0Mz
kyOTk0NDd9fSwiaGlzdG9yeSI6Wy0xMDYwMzI2Mzk4XX0=
-->
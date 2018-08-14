---
business_functions : Governance
title : Policy & Compliance
assignedto       : Yan Kravchenko (@yanfosec)
complete          : 40%
business_functions_weight: 2
status           : draft        #new, draft, for_review, release_candidate, done
type: security_practice
---

# Proposed Overview

The Policy & Compliance (PC) Practice is focused on understanding and meeting external legal and regulatory requirements while also driving internal security standards to ensure compliance in a way that’s aligned with the business purpose of the organization.

A driving theme for improvement within this Practice is focused on describing organization's standards and 3rd party obligations as application requirements, enabling efficient and automated audits that may be leveraged within the SDLC and continuously demonstrate that all expectations are being met.

In a sophisticated form, provision of this Practice entails an organization-wide understanding of both internal standards and external compliance drivers while also maintaining low-latency checkpoints with project teams to ensure no project is operating outside expectations without visibility.

| | A: Policy and Standards | B: Compliance Management |
|:---|:---|:---|
| Maturity 1 - Identify and document governance and compliance drivers relevant to the organization. | Determine a security baseline representing organization's policies and standards | Identify 3rd-party compliance drivers and requirements and map to existing policies and standards |
| Maturity 2 - Establish application-specific security and compliance baseline. | Develop security requirements applicable to all applications | Publish compliance-specific application requirements and test guidance |
| Maturity 3 - Measure adherece to policies, standards, and 3rd-party requirements. | Measure and report on the status of individual application's adherence to policies and standards | Measure and report on individual application's compliance with 3rd party requirements |

# A: Policy and Standards

## Maturity 1

### Activity

Develop a library of policies and standards to govern all aspects of software development in the organization.  Policies and standards should be developed based on existing industry standards and be appropriate for the organization's industry.  Due to the full range of technology-specific limitations and best practices, the organization should review proposed standards with the various product teams.  With the overarching objective of increasing security of the applications and computing infrattructure, individual product teams should be invited to offer feedback on any aspects of the standards that would not be feasible or cost-effective to implement, as well as opportunities for standards to go further with little effort on the product teams.

In creating policies, the emphasis should be on high-level definitions and aspects of application security that would not be dependent on a specific technology or a hosting environment.  Policies should emphasize broader objectives of the organization to protect the integrity of its computing environment, safety and privacy of the data, and maturity of the software development lifecycles.  For larger organizations, policies may qualify specific requirements based on data classification or application functionality, but should not be detailed enough to offer technology-specific guidance.  

Standards should incorporate requirements set forth by policies, and focus on technology-specific implementation guidance intended to capture and take advantage of the security features of different programming languages and frameworks.  Creating standards requires input from senior developers and architects considered experts in various technologies in use by the organization, and created in a format allowing for frequent periodic updates.  Individual requirements should be labeled or tagged with the policy or a 3rd party requirement, which would make ongoing maintenance and audits easier and more efficient.

#### Maturity Questions

##### Q 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**

- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

*"Unify patchwork compliance obligations into a single pane-of-glass organizational view."*

*include internal/external drivers/obligations into policies and standards*

*L1: provide organization wide guidance how to implement internal/external drivers/obligations for software
examples:
standards every team has to follow (e.g. where to compile from)
Action: update P&C streams into separate policies / compliance streams (now there is overlap)*

## Maturity 2
### Activity
To assist with the ongoing implementation and verification of compliance with policies and standards, develop application security and appropriate tests scripts related to each applicable requirement.   These documents should be organized into libraries and be available to all application teams in formats most conducive for inclusion into each application.  These documents should be clearly labeled and linked to the policies and standards they represent, to assist with the ongoing updates and maintenance.  Additionally, policies and standards should be versioned and include detailed change logs with each iterative update to make ongoing inclusion into different product's SDLC easier.

Application security requirements should be written in a format most consistent with the existing requirements management processes and may include creating more than one version catering to different development methodologies or technologies.  The goal should be to make it easy for various product teams to incorporate policies and standards into their existing development lifecycles and require minimal interpretation of requirements.  

Test scripts should help reinforce application security requirements through clear expectations of application functionality, as well as a guide any automated or manual testing efforts that may already be a part of the development process.   These efforts will not only help each team establish the current state of compliance with existing policies and standards but also help ensure compliance as applications continue to change in the future.

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
Develop a program for measuring each application's compliance with existing policies and standards.  Reporting should include factors making different requirements mandatory and be reported consistently across all teams.  Whenever possible, compliance status should be tied into automated testing and reported with each version.  Compliance reporting should include the version of policies and standards as well as appropriate code coverage factors.

Non-compliant teams should be encouraged to review available resources such as security requirements and test scripts, to ensure non-compliance is not a result of inadequate guidance.  Issues resulting from insufficient guidance should be forwarded to the teams responsible for publishing application requirements and test scripts, to ensure inclusion in the future releases.  Issues resulting from the inability to meet policies and standards should be escalated to the appropriate teams empowered to accept application security risks.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

# B: Compliance Management

## Maturity 1
### Activity
Create a comprehensive list of all compliance requirements, including any triggers that could help determine which applications are in scope.  Compliance requirements may be considered in scope based on a number of factors, such as geographic location, types of data, or contractual obligations with clients or business partners.  Each identified compliance requirement should be reviewed with the appropriate subject matter experts and legal, to ensure the obligation is correctly understood.  Since many compliance obligations vary in applicability based on how the data is processed, stored, or transmitted across the computing environment, compliance drivers should always indicate opportunities for lowering the overall compliance burden by changing how the data is handled.

In creating the list, it may be helpful to publish a compliance matrix that would help identify at a glance which factors could put an application in scope for a specific regulatory requirement.  Furthermore, the matrix should indicate which compliance requirements are applicable at the organization level and are not dependent on individual applications.  At a minimum, the matrix should provide a basic understanding of compliance requirements that could be used to begin reviewing obligations around different applications.

Since many compliance standards are focused around security best-practices, it's reasonable to expect that many compliance requirements may already be a part of the Policy and Standards library published by the organization.  Therefore, once compliance requirements have been reviewed, they should be mapped to any applicable existing policies and standards.  Whenever there are discrepancies, the policies and standards should be updated to include the baseline appropriate to satisfy compliance any organization-wide requirements.  Once compliance requirements applicable to the entire organization have been mapped to Policies and Standards, the organization should begin creating compliance-specific standards only applicable to individual compliance requirements.  The goal should be to have a compliance matrix that indicates which policies and standards have more detailed information about compliance requirements, as well as ensure individual policies and standards reference applicable compliance requirements.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

overlaps with Policies and Standards - 1 ?? --> Overlap is intentional since they address different sources of requirements and play off one another.


## Maturity 2
### Activity
Develop a library of application requirements and test scripts intended to establish and verify regulatory compliance of applications.  Some of these will be tied to individual compliance requirements like PCI or GDPR, while others will be more general in nature and address global compliance requirements such as ISO.  The library should be available to all application development teams and include guidance for determining all applicable requirements including considerations for reducing the compliance burden and scope.  Additionally, the organization should implement a process to periodically re-assess each applications' compliance requirements.  Re-assessment should include reviewing all application functionality and reviewing opportunities to reduce the overall cost of compliance through a reduction of scope.

Requirements should be developed in a format conducive for importing into individual requirements repositories and include sufficient information to help developers understand functional and non-functional requirements of the different compliance obligations.  Where necessary, requirements should include references to policies and standards, and provide explicit references to regulations where appropriate.  In the event there are any questions about the implementation of a particular requirement, access to the original text of the regulation can help more accurately interpret the intent.  Each requirement should also include a set of test scripts for verifying compliance.  In addition to assisting QA with compliance verification, these can help further clarify compliance requirements for developers and ensure the process of achieving compliance is fully transparent.


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
Develop a program for measuring and reporting on the status of compliance between different applications.  Determining the status of compliance should be driven by application requirements and test scripts, and whenever possible leverage testing automation for frequent updates and ensuring compliance is maintained through the different application versions.  Whenever fully automated testing is not possible, compliance should be periodically assessed by the QA, Internal Audit, or Information Security teams through a combination of manual testing and interview.

While full compliance is always the ultimate goal, it is essential to ensure the program includes tracking remediation actions and periodic updates.  Compliance remediation activities should be periodically reviewed to ensure teams are making appropriate progress, as well as assuring remediation strategies will be effective in achieving compliance.  To further improve the process, the organization should develop a series of standard reports and compliance scorecards.  These will help individual teams better understand the current state of compliance, as well as help the organization more effectively manage assistance for remediating compliance gaps.

Compliance gaps requiring significant expenses or development efforts should be reviewed with the subject-matter experts to ensure the organization compares these against the cost of reducing the application's functionality that would minimize scope or eliminate the specific compliance requirement entirely.  Any long-term compliance gaps should require management approval and a formal compliance risk acceptance, to ensure they receive appropriate attention and scrutiny from the organization's leadership.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

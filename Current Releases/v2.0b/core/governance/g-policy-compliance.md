---
business_functions : Governance
title : Policy & Compliance
assignedto       : Yan Kravchenko (@yanfosec)
complete          : 40%
weight: 2
status           : for_review        #new, draft, for_review, release_candidate, done
type: security_practice
---
# Short Description
This practice drives the adherence to internal and external standards and regulations.

# Long Description
The Policy & Compliance (PC) Practice focuses on understanding and meeting external legal and regulatory requirements while driving internal security standards to ensure compliance in a way that’s aligned with the business purpose of the organization.

A driving theme for improvement within this Practice is describing organization’s standards and 3rd party obligations as application requirements, enabling efficient and automated audits that may be leveraged within the SDLC and continuously demonstrate that all expectations are met.

In a sophisticated form, provision of this Practice entails an organization-wide understanding of both internal standards and external compliance drivers while also maintaining low-latency checkpoints with project teams to ensure no project is operating outside expectations without visibility.


# Overview
| | A: Policy and Standards | B: Compliance Management |
|:---|:---|:---|
| Maturity 1 - Identify and document governance and compliance drivers relevant to the organization. | Determine a security baseline representing organization's policies and standards | Identify 3rd-party compliance drivers and requirements and map to existing policies and standards |
| Maturity 2 - Establish application-specific security and compliance baseline. | Develop security requirements applicable to all applications | Publish compliance-specific application requirements and test guidance |
| Maturity 3 - Measure adherence to policies, standards, and 3rd-party requirements. | Measure and report on the status of individual application's adherence to policies and standards | Measure and report on individual application's compliance with 3rd party requirements |

# A: Policy and Standards

## Maturity 1
### Benefit
Have a common set of policies and standards within your organization.

### Activity
Develop a library of policies and standards to govern all aspects of software development in the organization. Policies and standards are based on existing industry standards and appropriate for the organization’s industry. Due to the full range of technology-specific limitations and best practices, review proposed standards with the various product teams. With the overarching objective of increasing security of the applications and computing infrastructure, invite product teams to offer feedback on any aspects of the standards that would not be feasible or cost-effective to implement, as well as opportunities for standards to go further with little effort on the product teams.

For policies, emphasize high-level definitions and aspects of application security that do not depend on specific technology or hosting environment. Focus on broader objectives of the organization to protect the integrity of its computing environment, safety and privacy of the data, and maturity of the software development life-cycles. For larger organizations, policies may qualify specific requirements based on data classification or application functionality, but should not be detailed enough to offer technology-specific guidance.

For standards, incorporate requirements set forth by policies, and focus on technology-specific implementation guidance intended to capture and take advantage of the security features of different programming languages and frameworks. Standards require input from senior developers and architects considered experts in various technologies in use by the organization. Create them in a format that allows for periodic updates. Label or tag individual requirements with the policy or a 3rd party requirement, to make maintenance and audits easier and more efficient.


#### Maturity Questions

##### Q 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**

- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--

*"Unify patchwork compliance obligations into a single pane-of-glass organizational view."*

*include internal/external drivers/obligations into policies and standards*

*L1: provide organization wide guidance how to implement internal/external drivers/obligations for software
examples:
standards every team has to follow (e.g. where to compile from)
Action: update P&C streams into separate policies / compliance streams (now there is overlap)*

**Summit MN:**
*  library - potentially a lot of effort and not so much impact, maybe start easier? Soften the language
*  Explicitly mention to integrate with the current set of security policy
*  stream titles are maybe confusing? What exactly is "Compliance" (mandatory / deliberately chosen standards)? -> A->"Internal" B->"External"/"3rd party"
*  Q: can we think of case where you care of the compliance of your customers? -> Posing compliance requirements on your customers - GDPR, SWIFT -> maybe put into a guidance
*  Refer to RFC covering "Policy", "Standard" etc.
-->

## Maturity 2
### Benefit
Have clearly defined evaluation methods to test for adherence to policies and standards

### Activity
To assist with the ongoing implementation and verification of compliance with policies and standards, develop application security and appropriate test scripts related to each applicable requirement. Organize these documents into libraries and make them available to all application teams in formats most conducive for inclusion into each application. Clearly label the documents and link them to the policies and standards they represent, to assist with the ongoing updates and maintenance. Version policies and standards and include detailed change logs with each iterative update to make ongoing inclusion into different products’ SDLC easier.

Write application security requirements in a format consistent with the existing requirements management processes. You may need more than one version catering to different development methodologies or technologies. The goal is to make it easy for various product teams to incorporate policies and standards into their existing development life-cycles needing minimal interpretation of requirements.

Test scripts help reinforce application security requirements through clear expectations of application functionality, and guide automated or manual testing efforts that may already be part of the development process. These efforts not only help each team establish the current state of compliance with existing policies and standards, but also ensure compliance as applications continue to change.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--
**Summit MN:**
* there is a whole practice on security requirements - wording?
* last paragraph should be linked to security testing
* "test scripts" -> rather playbooks meant
-->
## Maturity 3
### Benefit
Understand your organization's compliance towards policies and standards

### Activity
Develop a program to measure each application’s compliance with existing policies and standards. Mandatory requirements should be motivated and reported consistently across all teams. Whenever possible, tie compliance status into automated testing and report with each version. Compliance reporting includes the version of policies and standards and appropriate code coverage factors.

Encourage non-compliant teams to review available resources such as security requirements and test scripts, to ensure non-compliance is not a result of inadequate guidance. Forward issues resulting from insufficient guidance to the teams responsible for publishing application requirements and test scripts, to include them in the future releases. Escalate issues resulting from the inability to meet policies and standards the teams that handle application security risks.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--
**Summit MN:**
* DK: Also policies themselves change, policy change should trigger compliance check
* !We're missing secure coding guidelines!
-->
# B: Compliance Management

## Maturity 1
### Benefit
Have a common understanding of external compliance requirements.

### Activity
Create a comprehensive list of all compliance requirements, including any triggers that could help determine which applications are in scope. Compliance requirements may be considered in scope based on factors such as geographic location, types of data, or contractual obligations with clients or business partners. Review each identified compliance requirement with the appropriate experts and legal, to ensure the obligation is understood. Since many compliance obligations vary in applicability based on how the data is processed, stored, or transmitted across the computing environment, compliance drivers should always indicate opportunities for lowering the overall compliance burden by changing how the data is handled.

Evaluate publishing a compliance matrix to help identify which factors could put an application in scope for a specific regulatory requirement. Have the matrix indicate which compliance requirements are applicable at the organization level and do not depend on individual applications. The matrix provides at least a basic understanding of useful compliance requirements to review obligations around different applications.

Since many compliance standards are focused around security best-practices, many compliance requirements may already be a part of the Policy and Standards library published by the organization. Therefore, once you review compliance requirements, map them to any applicable existing policies and standards. Whenever there are discrepancies, update the policies and standards to include organization-wide compliance requirements. Then, begin creating compliance-specific standards only applicable to individual compliance requirements. The goal is to have a compliance matrix that indicates which policies and standards have more detailed information about compliance requirements, as well as ensure individual policies and standards reference applicable compliance requirements.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--
overlaps with Policies and Standards - 1 ?? --> Overlap is intentional since they address different sources of requirements and play off one another.

**Summit MN:**
* use "obligations" instead of "requirements"
* DK: the organization-level activities go beyond maturity level 1 imho - also more voices during the discussion
* DK: I'd start with compliance drivers rather than requirements
* reference UCF?
-->

## Maturity 2
### Benefit
Have a standard set of requirements for 3rd party compliance.

### Activity
Develop a library of application requirements and test scripts to establish and verify regulatory compliance of applications. Some of these are tied to individual compliance requirements like PCI or GDPR, while others are more general in nature and address global compliance requirements such as ISO. The library is available to all application development teams. It includes guidance for determining all applicable requirements including considerations for reducing the compliance burden and scope. Implement a process to periodically re-assess each application’s compliance requirements. Re-assessment includes reviewing all application functionality and opportunities to reduce scope to lower the overall cost of compliance.

Requirements include enough information for developers to understand functional and non-functional requirements of the different compliance obligations. They include references to policies and standards, and provide explicit references to regulations. If there are questions about the implementation of a particular requirement, the original text of the regulation can help interpret the intent more accurately. Each requirement includes a set of test scripts for verifying compliance. In addition to assisting QA with compliance verification, these can help clarify compliance requirements for developers and make the compliance process transparent. Requirements have a format that allows importing them into individual requirements repositories.
further clarify compliance requirements for developers and ensure the process of achieving compliance is fully transparent.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--
**Summit MN:**
* DK: I'd also go for compliance requirements integrated in other requirements for dev. teams
* Mention GRC tools?
-->

## Maturity 3
### Benefit
Have an understanding of your organization's adherence to 3rd party compliance requirements.

### Activity
Develop a program for measuring and reporting on the status of compliance between different applications. Application requirements and test scripts help determine the status of compliance. Leverage testing automation to promptly detect compliance regressions in frequently updated applications and ensure compliance is maintained through the different application versions. Whenever fully automated testing is not possible, QA, Internal Audit, or Information Security teams assess compliance periodically through a combination of manual testing and interview.

While full compliance is always the ultimate goal, include tracking remediation actions and periodic updates in the program. Review compliance remediation activities periodically to check teams are making appropriate progress, and that  remediation strategies will be effective in achieving compliance. To further improve the process, develop a series of standard reports and compliance scorecards. These help individual teams understand the current state of compliance, and the organization manage assistance for remediating compliance gaps more effectively.

Review compliance gaps requiring significant expenses or development with the subject-matter experts and compare them against the cost of reducing the application’s functionality, minimizing scope or eliminating the compliance requirement. longterm compliance gaps require management approval and a formal compliance risk acceptance, so they receive appropriate attention and scrutiny from the organization’s leadership.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes
<!--
**Summit MN:**
* DK: compliance drivers change as well!
-->

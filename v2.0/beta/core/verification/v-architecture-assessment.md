---
business_functions : Verification
title : Architecture Assessment
assignedto       : Seba (seba@owasp.org)
complete          : 0%
business_functions_weight: 1
type: security_practice
---

# Proposed Overview (updated objectives)

| | A: Effective Architecture | B: Architecture Compliance |
|:---|:---|:---|
| Maturity 1 - Review the architecture to ensure baseline mitigations are in place for known risks.| Identify application and infrastructure architecture components | Ad-hoc review of the architecture against compliance requirement |
| Maturity 2 - Review the complete provision of security mechanisms in the architecture | Are the architecture security mechanisms well implemented  | Analyze the architecture against known security requirements and best practices |
| Maturity 3 - Review the architecture effectiveness and feedback results to improve the security architecture | Review of the architecture components effectiveness | Feedback the architecture review results into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures |

# Original Overview

| | A: Application Architecture | B: Supporting Architecture |
|:---|:---|:---|
| Maturity 1 - Support ad-hoc reviews of software design to ensure baseline mitigations for known risks. | Analyze application architecture against known security requirements and security best practices | Analyze supporting architecture against known security requirements and best practices |
| Maturity 2 - Offer assessment services to review software design against comprehensive best practices for security. | Standardized approach for complete provision review of security mechanisms in application architecture | Standardized approach for complete provision review of security mechanisms in the supporing architecture |
| Maturity 3 - Require assessments and validate artifacts to develop detailed understanding of protection mechanisms. | Review of the application architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures | Review of the supporting architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures |

**Notes**
* **Combine both streams into 1 (positive side of review). Create a new one (negative side of review) to focus on verifying that assumptions in the design (e.g. threat assessments) are still meeting the functionality of the application. Can also include activities included in an app’s risk profile.**
  * Thers is a risk that the A stream will contain far more content than the B stream.


# A: Effective Architecture

## Maturity 1
### Activity
Identify application and infrastructure architecture components. Create a simplified view of the overall architecture. Typically, this should be created based on project artifacts such as high-level requirements and design documents, interviews with technical staff, or module-level review of the code base.
Also identify the infrastructure components. These are all the systems, components and libraries (including SDKs) that are not specific to the application, but provide direct support to use or manage the application(s) in the organisation.
From the architecture view, analyze each component in terms of accessibility of the interfaces from authorized users, anonymous users, operators, application-specific roles, etc.
For each interface note any security-related functionality and check the model for design-level consistency for how interfaces with similar access are secured. Any breaks in consistency can be noted as assessment findings.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Use of checklists
Review the design choices in each of the key vulnerability categories defined by the security frame.

Supporting architecture are all the systems, components and libraries (including SDKs) that are not specific to the application, but provide direct support to use or manage the application(s) in the organisation.
Examples:
build / deployment systems
0auth, SSO, LDAP, ADFS, IAM, Firebase Authentication, ...
Web services, application services/framework (e.g. .NET framework), middleware, ESBs, ...
(Cloud) Storage, Backup
Analytics, Monitoring,
(cloud) acceleration, load balancing, WAF, (D)DOS protection
Does this include connectivity, networking, OS (?)

remarks:
by combining application and supporting architecture, we can introduce an extra activity stream
threat modeling as a verification activity versus design?

references:
https://www.owasp.org/index.php/How_to_perform_a_security_architecture_review_at_Level_1
https://www.owasp.org/index.php/ASVS_V1_Architecture
http://www.guidanceshare.com/wiki/Security_Engineering_Explained_-_Chapter_5_-_Security_Architecture_and_Design_Review

## Maturity 2
### Activity
Are the architecture security mechanisms well implemented.
For each interface in the application and infrastructure architecture , formally iterate through the list of security mechanisms and analyze the system for their provision. This type of analysis should be performed on both internal interfaces, e.g. between tiers, as well as external ones, e.g. those comprising the attack surface.

The six main security mechanisms to consider are authentication, authorization, input validation, output encoding, error handling and logging. Where relevant, also consider the mechanisms of cryptography or privacy. For each interface, determine where in the system design each mechanism is provided and note any missing or unclear features as findings.

This analysis should be conducted by security-savvy staff with assistance from the project team for application-specific knowledge. This analysis should be performed once per release, usually toward the end of the design phase. After initial analysis, subsequent releases are required to update the findings based on changes being made during the development cycle.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
* expose the high-risk design decisions that have been made
* Remove “well implemented” from maturity 2. Move it more into 3 to increase the difference between the 2 levels.
* remove/adapt list of 6 in maturity 2. Perhaps add user/access management.
*  Architecture review should be performed once per release is not CICD friendly. Need to establish what a release is. Or reword.

## Maturity 3
### Activity
Review of the architecture components effectiveness. For each of the application and infrastructure components, review their effectiveness to secure the application.
Effectiveness should be evaluated for the security mechanisms provided by the components in terms of identification, protection, detection, response and recovery of security or privacy issues. Review their effectiveness in terms of strategy alignment, appropriate support and scaleability.
Any findings should feedback into the Security Architecture practice.


### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


# B: Architecture Compliance
**Notes**
* **This will be rewritten. See notes section at the top of the practice**

## Maturity 1
### Activity
Ad-hoc review of the architecture against compliance requirement.

Compliance requirements, either formally identified or informally known, should be identified and collected.

Review each item on the list of known compliance requirements against the architecture. Elaborate the analysis to show the design-level features that address each compliance requirement. The overall goal is to verify that each known compliance requirement has been addressed by the system design. Any compliance requirements that are not clearly provided at the design level should be noted as assessment findings.

This analysis should be conducted by security-savvy technical staff with input from architects, developers, managers, and business owners as needed. It should be updated during the design phase when there are changes in compliance requirements or high-level system design.


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
Analyze the architecture against known security requirements and best practices.

Security requirements, either formally identified or informally known, should be identified and collected. Additionally, identify and include any security assumptions upon which safe operation of the system relies.

Review each item on the list of known security requirements against the architecture. Elaborate the analysis to show the design-level features that address each security requirement. Separate, detailed analysis iterations can be performed on parts of the architecture to simplify capturing this information if the system is large and/or complex. The overall goal is to verify that each known security requirement has been addressed by the system design. Any security requirements that are not clearly provided at the design level should be noted as assessment findings.

This analysis should be conducted by security-savvy technical staff with input from architects, developers, managers, and business owners as needed. It should be updated during the design phase when there are changes in security requirements or high-level system design.

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
Feedback the architecture review results into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

Map security features to the security and compliance requirements in a traceability matrix.
Gaps in the security assessment should be reviewed for root cause and remediated. Recurring architecture findings should be considered as input for the security architecture practice to update the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

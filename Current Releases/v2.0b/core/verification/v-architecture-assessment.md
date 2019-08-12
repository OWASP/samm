---
business_functions : Verification
title : Architecture Assessment
assignedto       : Seba (seba@owasp.org)
complete          : 40%
weight: 1
type: security_practice
---
# Short Description
Validate the security and compliance of the software and supporting infrastructure architecture.  

# Long Description
Validate the security of the software and supporting infrastructure architecture. Identify application and infrastructure architecture components. For each interface note any security-related functionality and check the model for design-level consistency for how interfaces with similar access are secured. Iterate through the list of security mechanisms and analyze the system for their provision.

Validate the software and supporting infrastructure architecture against known security requirements, compliance goals and best practices. The overall goal is to verify that the system design has addressed each requirement and best practice. Note any requirements that are not met at the design level as assessment findings.

Review the effectiveness of each application and infrastructure component to secure the application. Feed any findings  back into the Security Architecture practice.

Security-savvy staff conduct this analysis with assistance from the project team for application-specific knowledge. Perform this analysis upon major architecture changes, usually toward the end of a design phase.

# Overview

| | A: Architecture Validation | B: Architecture Compliance |
|:---|:---|:---|
| Maturity 1 - Review the architecture to ensure baseline mitigations are in place for known risks.| Identify application and infrastructure architecture components | Ad-hoc review of the architecture against compliance requirements |
| Maturity 2 - Review the complete provision of security mechanisms in the architecture | Validate the architecture security mechanisms | Analyze the architecture against known security requirements and best practices |
| Maturity 3 - Review the architecture effectiveness and feedback results to improve the security architecture | Review of the architecture components effectiveness | Feedback the architecture review results into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures |

<!--
**Notes**
* Combine both streams into 1 (positive side of review). (DONE)
Create a new one (negative side of review) to focus on verifying that assumptions in the design (e.g. threat assessments) are still meeting the functionality of the application.
Can also include activities included in an app’s risk profile.
* There is a risk that the A stream will contain far more content than the B stream.
-->

# A: Architecture Validation

## Maturity 1 - Identify application and infrastructure architecture components
### Benefit
Developers understand the architecture, interfaces, and how to secure them.

### Activity
Identify application and infrastructure architecture components. Create a simplified view of the overall architecture. Do this based on project artifacts such as high-level requirements and design documents, interviews with technical staff, or module-level review of the code base.
Identify the infrastructure components. These are all the systems, components and libraries (including SDKs) that are not specific to the application, but provide direct support to use or manage the application(s) in the organisation.
From the architecture view, analyze each component in terms of accessibility of the interfaces from authorized users, anonymous users, operators, application-specific roles, etc.
For each interface note any security-related functionality and check the model for design-level consistency for how interfaces with similar access are secured. Note any breaks in consistency as assessment findings.


## Maturity 2 - Validate the architecture security mechanisms
### Benefit
This activity validates the security mechanisms on the attack surface of the software and infrastructure architecture.

### Activity
For each interface in the application and infrastructure architecture, formally iterate through the list of security mechanisms and analyze the system for their provision. Perform this type of analysis  on both internal interfaces, e.g. between tiers, as well as external ones, e.g. those comprising the attack surface.

The six main security mechanisms to consider are authentication, user access management, input validation, output encoding, error handling, and logging. Where relevant, also consider the mechanisms of cryptography or privacy. For each interface, determine where in the system design each mechanism is provided and note any missing or unclear features as findings. Identify and validate the high-risk design decisions made as part of the architecture.
Conduct analysis to update the findings based on changes made during the development cycle.


## Maturity 3 - Review of the architecture components effectiveness
### Benefit
Assurance on the effectiveness of the architecture security mechanisms in terms of strategy alignment, appropriate support, and scalability.

### Activity
Review the effectiveness of the architecture components. Are the architecture security mechanisms well implemented? For each of the application and infrastructure components, review their effectiveness to secure the application.

Evaluate effectiveness for the security mechanisms provided by the components in terms of identification, protection, detection, response, and recovery of security or privacy issues. Review their effectiveness in terms of strategy alignment, appropriate support, and scalability. Feed any findings back into the Security Architecture practice.



# B: Architecture Compliance

## Maturity 1 - Ad-hoc review of the architecture against compliance requirements
### Benefit
Assures that the compliance requirements of the architecture are met.

### Activity
eview the architecture against compliance requirements ad hoc. Identify and collect either formally identified or informally known compliance requirements.

Review each item on the list of known compliance requirements against the architecture. Elaborate the analysis to show the design-level features that address each compliance requirement. The overall goal is to verify that each known compliance requirement has been addressed by the system design. Note any compliance requirements that are not clearly provided at the design level as assessment findings.

Security-savvy technical conduct this analysis staff with input from architects, developers, managers, and business owners as needed. Update it during the design phase when there are changes in compliance requirements or high-level system design.



## Maturity 2 - Analyze the architecture against known security requirements and best practices
### Benefit
This activity assures that the architecture is aligned with the security requirements and best practices.

### Activity
Analyze the architecture against known security requirements and best practices. Identify and collect either formally identified or informally known security requirements. Additionally, identify and include any security assumptions on which safe operation of the system relies.

Review each item on the list of known security requirements against the architecture. Elaborate the analysis to show the design-level features that address each security requirement. Perfor separate, detailed analysis iterations on parts of the architecture to simplify capturing this information if the system is large or complex. The overall goal is to verify that each known security requirement has been addressed by the system design. Note any security requirements not clearly provided at the design level as assessment findings.


## Maturity 3 - Feed the architecture review results back into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.
### Benefit

### Activity
Feed the architecture review results back into the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

Map security features to the security and compliance requirements in a traceability matrix. Identify the cause of gaps in the security assessment  and deal with them. Consider recurring architecture findings as input for the security architecture practice to update the enterprise architecture, organisation design principles & patterns, security solutions and reference architectures.

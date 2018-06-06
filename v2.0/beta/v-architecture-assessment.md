---
business_function : Verification
security_practice : Architecture Assessment
assigned_to       : Seba (seba@owasp.org)
complete          : 0%
---

# Proposed Overview (updated objectives)

| | A: Application Architecture | B: Supporting Architecture |
|:---|:---|:---|
| Maturity 1 - Review the architecture to ensure baseline mitigations are in place for known risks.| Analyze application architecture against known security requirements and security best practices | Analyze supporting architecture against known security requirements and best practices |
| Maturity 2 - Review the complete provision of security mechanisms in the architecture | Standardized approach for complete provision review of security mechanisms in application architecture | Standardized approach for complete provision review of security mechanisms in the supporing architecture |
| Maturity 3 - Require assessments and validate artifacts to develop detailed understanding of protection mechanisms. | Review of the application architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures | Review of the supporting architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures |

# Original Overview

| | A: Application Architecture | B: Supporting Architecture |
|:---|:---|:---|
| Maturity 1 - Support ad-hoc reviews of software design to ensure baseline mitigations for known risks. | Analyze application architecture against known security requirements and security best practices | Analyze supporting architecture against known security requirements and best practices |
| Maturity 2 - Offer assessment services to review software design against comprehensive best practices for security. | Standardized approach for complete provision review of security mechanisms in application architecture | Standardized approach for complete provision review of security mechanisms in the supporing architecture |
| Maturity 3 - Require assessments and validate artifacts to develop detailed understanding of protection mechanisms. | Review of the application architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures | Review of the supporting architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures |


# A: Application Architecture

## Maturity 1
### Activity
Verify that each known security requirement has been addressed by the architecture. Do the same for applicable standard controls.

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
For each interface on a module in the high-level architecture diagram, formally iterate through the list of security mechanisms and analyze the system for their provision.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
expose the high-risk design decisions that have been made

## Maturity 3
### Activity
Verify that the architecture follows the organisation design principles, design patterns, security solutions and reference architectures. Upon deviations review if the organisation guidance needs to be updated.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


# B: Supporting Architecture

## Maturity 1
### Activity
Verify that each known security requirement has been addressed by the architecture. Do the same for applicable standard controls.

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
For each interface on a module in the high-level architecture diagram, formally iterate through the list of security mechanisms and analyze the system for their provision.

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
Verify that the architecture follows the organisation design principles, design patterns, security solutions and reference architectures. Upon deviations review if the organisation guidance needs to be updated.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

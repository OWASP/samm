---
business_functions : Design
title : Security Architecture
assignedto       : bart.dewin@owasp.org
complete          : 0%
business_functions_weight: 3
type: security_practice
---

# Overview

| | A: Secure Architecture Design | B: Technology Management |
|:---|:---|:---|
| Maturity 1 - Insert consideration of proactive security guidance into the software design process. | Use basic security principles | Elicit technologies, frameworks and integrations within the overall solution|
| Maturity 2 - Direct the software design process toward known secure services and secure-by-default designs. | Establish common design patterns and security solutions | Standardize technologies and frameworks to be used throughout the different applications |
| Maturity 3 - Formally control the software design process and validate utilization of secure components. | Create Reference Architectures | Impose the use of standard technologies on all software development. |


# A: Secure Architecture Design

## Maturity 1
### Activity
During design, technical staff on the project team should use a short list of guiding security principles as a checklist against system designs. Typically, security principles include defense in depth, securing the weakest link, use of secure defaults, simplicity in design of security functionality, secure failure, balance of security and usability, running with least privilege, avoidance of security by obscurity, etc.

In particular for perimeter interfaces, the design team should consider each principle in the context of the overall system and identify features that can be added to bolster security at each such interface. Generally, these should be limited such that they only take a small amount of extra effort beyond the normal implementation cost of functional requirements and anything larger should be noted and scheduled for future releases.

While this process should be conducted by each project team after being trained with security awareness, it is helpful to incorporate more security-savvy staff to aid in making design decisions.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Still put focus on perimeter interfaces ? 

I don't like the fact that the Practice is called Secure Architecture and the stream almost has the same name.


## Maturity 2
### Activity
Establish a set of general design patterns representing sound methods of implementing security functionality. These security patterns represent general definitions of generic design elements they can be researched or purchased, and it is often even more effective if these patterns are customized to be made more specific to your organization. Example patterns include a single-sign-on subsystem, a cross-tier delegation model, a separation-of-duties authorization model, a centralized logging pattern, etc.

These patterns can originate from specific projects or applications, but should be shared between different development teams across the organisation to ensure efficient and consistent application of appropriate security solutions. 

In order to increase adoption of these patterns, implement these patterns into actual component solutions that can easily be integrated into an application during development. Support the key technologies within the organisation, for instance in case of different development stacks (LINK TO: Technology Management). Treat these solutions as actual applications with proper support in case of questions or issues.


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
Build one (or a set of) reference architecture(s) that selects and combines a verified set of security components to ensure a proper design of security. Reference platforms have advantages in terms of shortening audit and security-related reviews, increasing efficiency in development, and lowering maintenance overhead. Continuously maintain and improve the reference architecture based on new insights in the organisation and within the communicaty. 

These reference architectures may materialize into a set of software libraries and tools upon which project teams build their software. They will serve as a starting point that standardizes the security approach taken and uses a configuration-driven, security-by-default approach. Such a framework can be bootstrapped by selecting a particular project early in the life-cycle and have security-savvy staff work with them to build the security functionality in a generic way so that it could be extracted from the project and utilized
elsewhere in the organization. 

Architects, senior developers and other technical stakeholders should participate in design and creation of reference platforms. After creation, a team must maintain ongoing support and updates.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



# B: Technology Management

## Maturity 1
### Activity

Identify in the solution the most important technologies and frameworks being used. Evaluate them for their security quality and raise important issues.

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
<OLD TEXT>Propose a core set of technologies to be used within the different applications. Perform a periodic review of these technologies for security and appropriateness.</OLD TEXT>

Across software projects within the organization identify commonly used third-party software libraries and frameworks in use. Generally, this need not be an exhaustive search for dependencies, but rather focus on capturing the high-level components that are most
often used.

From the list of components, group them into functional categories based on the core features provided by the third-party component. Also, note the usage prevalence of each component across project teams to weight the reliance upon the third-party code. Using this weighted list as a guide, create a list of components to be advertised across the development organization as recommended components.

Several factors should contribute to decisions for inclusion on the recommended list. Although a list can be created without conducting research specifically, it is advisable to inspect each for incident history, track record for responding to vulnerabilities, appropriateness of functionality for the organization, excessive complexity in usage of the third-party component, etc.

This list should be created by senior developers and architects, but also include input from managers and security auditors. After creation, this list of recommended components matched against functional categories should be advertised to the development organization. Ultimately, the goal is to provide well-known defaults for project teams.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Note that this used to be level 1 in SAMM 1.5. OK ?

## Maturity 3
### Activity
For all proprietary development (in-house or acquired), impose the use of standardized technology. 

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Align legacy software to these standards. -> realistic ? Also move to legacy Stream (Operations)

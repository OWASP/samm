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
Organizations should identify shared infrastructure or services with security functionality. These will typically include single-sign-on services, corporate directory systems, access control or entitlements services, and authentication systems. By collecting and evaluating
reusable systems, assemble a list of such resources and categorize them by the security mechanism they fulfill. It is also helpful to consider each resource in terms of why a development team would want to integrate with it, i.e. the benefits of using the shared
resource.

If multiple resources exist in each category, an organization should select and standardize on one or more shared service per category. Because future software development will rely on these selected services, each should be thoroughly audited to ensure the baseline security posture is understood. For each selected service, design guidance should be created for development teams to understand how to integrate with the system. After such guidance is assembled, it should be made available to development teams through training, mentorship, guidelines, and standards.

At the same time, establish a set of general design patterns representing sound methods of implementing security functionality. These security patterns represent general definitions of generic design elements they can be researched or purchased, and it is often even more effective if these patterns are customized to be made more specific to your organization. Example patterns include a single-sign-on subsystem, a cross-tier delegation model, a separation-of-duties authorization model, a centralized logging pattern, etc.

These patterns can originate from specific projects or applications, but should be shared between different development teams across the organisation to ensure efficient and consistent application of appropriate security solutions. 

In order to increase adoption of these patterns, link these patterns to the shared security services, or implement them into actual component solutions that can easily be integrated into an application during development. Support the key technologies within the organisation, for instance in case of different development stacks (LINK TO: Technology Management). Treat these solutions as actual applications with proper support in case of questions or issues.


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

Monitor the use of these recommended frameworks, design patterns, shared security services, and reference platforms. Depending on your organisation, these may either be by implementing these restrictions into build or deployment tools, by means of after-the-fact automated analysis of application artefacts (e.g., source code, configuration files or deployment artefacts) or by periodic review where one would also focus on the correct use of these frameworks. 

Overall, it is important to verify several factors with project teams. Identify use of non-recommended frameworks to determine if there may be a gap in recommendations versus the organization’s functionality needs. Examine unused or incorrectly used design patterns and reference platform modules to determine if updates are needed. Additionally, there may be more or different functionality that project teams would like to see implemented in the reference platforms as the organization evolves.

This analysis can be conducted by any security-savvy technical staff. Metrics collected from each project should be collated for analysis by managers and stakeholders.

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

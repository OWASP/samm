---
business_functions : Design
title : Security Architecture
assignedto       : John Ellingsworth
complete          : 50%
weight: 3
type: security_practice
---
# Short Description

The security architecture practice focuses on managing architectural risks for the software solution.

# Long Description

This practice focuses on the security linked to components and technology you deal with during the design of the architecture of your software. Secure Architecture Design looks at the selection and composition of components that form the foundation of your solution, focusing on its security properties. Technology management looks at the security of supporting technologies used during development, deployment and operations, such as development stacks and tooling, deployment tooling, and operating systems and tooling.

# Overview

| | A: Architecture Design | B: Technology Management |
|:---|:---|:---|
| Maturity 1 - Insert consideration of proactive security guidance into the software design process. | Teams are trained on the use of basic security principles during design | Elicit technologies, frameworks and integrations within the overall solution to identify risk. |
| Maturity 2 - Direct the software design process toward known secure services and secure-by-default designs. | Establish common design patterns and security solutions for adoption. | Standardize technologies and frameworks to be used throughout the different applications |
| Maturity 3 - Formally control the software design process and validate utilization of secure components. | Reference architectures are utilized and continuously evaluated for adoption and appropriateness. | Impose the use of standard technologies on all software development. |


# A: Architecture Design

## Maturity 1

### Benefit

You get basic security practices right in your software design.

### Activity

During design, technical staff on the product team use a short checklist of security principles. Typically, security principles include defense in depth, securing the weakest link, use of secure defaults, simplicity in design of security functionality, secure failure, balance of security and usability, running with least privilege, avoidance of security by obscurity, etc.

For perimeter interfaces, the team considers each principle in the context of the overall system and identify features that can be added to bolster security at each such interface. Limit these such that they only take a small amount of extra effort beyond the normal implementation cost of functional requirements. Note anything larger, and schedule it for future releases.

Train each product team with security awareness before this process, and incorporate more security-savvy staff to aid in making design decisions.


#### Maturity Questions

{{< questions "Security Architecture" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

The organisation leverages common security solutions.

### Activity

Identify shared infrastructure or services with security functionality. These typically include single-sign-on services, access control or entitlements services, logging and monitoring services or application-level firewalling. Collect and evaluat reusable systems to assemble a list of such resources and categorize them by the security mechanism they fulfill. Consider each resource in terms of why a product team would want to integrate with it, i.e. the benefits of using the shared resource.

If multiple resources exist in each category, select and standardize on one or more shared service per category. Because future software development will rely on these services, review each thoroughly to ensure understanding of the baseline security posture. For each selected service, create design guidance for product teams to understand how to integrate with the system. Make the guidance available through training, mentorship, guidelines, and standards.

Establish a set of best practices representing sound methods of implementing security functionality. You can research them or purchase them, and it is often more effective if you customize them so they are more specific to your organization. Example patterns include a single-sign-on subsystem, a cross-tier delegation model, a separation-of-duties authorization model, a centralized logging pattern, etc.

These patterns can originate from specific projects or applications, but make sure you share them between different teams across the organisation for efficient and consistent application of appropriate security solutions.

To increase adoption of these patterns, link them to the shared security services, or implement them into actual component solutions that can be easily integrated into an application during development. Support the key technologies within the organisation, for instance in case of different development stacks. Treat these solutions as actual applications with proper support in case of questions or issues.


### Maturity Questions

{{< questions "Security Architecture" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Software architectures are standardized to minimize security risks.

### Activity

Build a set of reference architectures that select and combine a verified set of security components to ensure a proper design of security. Reference platforms have advantages in terms of shortening audit and security-related reviews, increasing efficiency in development, and lowering maintenance overhead. Continuously maintain and improve the reference architecture based on new insights in the organisation and within the community. Have architects, senior developers and other technical stakeholders participate in design and creation of reference platforms. After creation, teams maintain ongoing support and updates.

Reference architectures may materialize into a set of software libraries and tools upon which project teams build their software. They serve as a starting point that standardizes the configuration-driven, security-by-default security approach. You can bootstrap the framework by selecting a particular project early in the life-cycle and having security-savvy staff work with them to build the security functionality in a generic way so that it can be extracted from the project and used elsewhere in the organization.

Monitor weaknesses or gaps in the set of security solutions available in your organisation continuously in the context of discussions on architecture, development, or operations. This serves as an input to improve the appropriateness and effectiveness of the reference architectures that you have in place.


### Maturity Questions

{{< questions "Security Architecture" "A" 3 >}}

#### Notes



# B: Technology Management

## Maturity 1

### Benefit

Security risk and technical debt in use are identified and replaced.

### Activity

People often take the path of least resistance in developing, deploying or operating a software solution. New technologies are often included when they can facilitate or speed up the effort or enable the solution to scale better. These new technologies might, however, introduce new risks to the organisation that you need to manage.

Identify the most important technologies, frameworks, tools and integrations being used for each application. Use the knowledge of the architect to study the development and operating environment as well as artefacts. Then evaluate them for their security quality and raise important findings to be managed.


### Maturity Questions

{{< questions "Security Architecture" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

There is a common agreement on the key technologies to use

### Activity

Identify commonly used technologies, frameworks and tools in use across software projects in the organisation, whereby you focus on capturing the high-level technologies.

Create a list and share it across the development organization as recommended technologies. When selecting them, consider incident history, track record for responding to vulnerabilities, appropriateness of functionality for the organization, excessive complexity in usage of the third-party component, and sufficient knowledge within the organisation.

Senior developers and architects create this list, including input from managers and security auditors. Share this list of recommended components with the development organization. Ultimately, the goal is to provide well-known defaults for project teams. Perform a periodic review of these technologies for security and appropriateness.


### Maturity Questions

{{< questions "Security Architecture" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Compliance with the list of known software is proactively monitored and violations are managed.

### Activity

For all proprietary development (in-house or acquired), impose and monitor the use of standardized technology. Depending on your organisation, either implement these restrictions into build or deployment tools, by means of after-the-fact automated analysis of application artefacts (e.g., source code, configuration files or deployment artefacts), or periodically review focusing on the correct use of these frameworks.

Verify several factors with project teams. Identify use of non-recommended technologies to determine if there are gaps in recommendations versus the organization’s needs. Examine unused or incorrectly used design patterns and reference platform modules to determine if updates are needed. Additionally, implement functionality in the reference platforms as the organization evolves and project teams request it.


### Maturity Questions

{{< questions "Security Architecture" "B" 3 >}}

#### Notes


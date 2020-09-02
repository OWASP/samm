---
title: Roles
weight: 4
type: security_practice
---


Todo's for this document:
- [ ] Mapping to OWASP SAMM categories (eg. CISO in Governance, Developer in Implementation, Pen-tester in Verification -> Security Testing, etc.)


Throughout the core model and supporting documentation, we address the responsibilities associated with various teams and functional roles, such as the Information Security Team. Each organization has a unique structure and is likely to use different naming conventions. Here we provide explanations of how we use terms referring to teams and roles, and some guidance for you to align them with your assessment scenarios.

## The Organization

By organization we mean your entire enterprise, or a portion of it, as determined by the scope you have selected for your SAMM assessment. For example, if your assessment's scope is limited to the "Widgets" line of business, then read all references to "the organization" as "the Widgets line of business."

If the organization in scope for the assessment relies on groups outside the organization for all or part of a SAMM activity (e.g., a corporate Education Team manages all security awareness training), include the contributions from those groups when assessing your organization's maturity. 

## Stakeholder

Stakeholder refers to any party that can affect or be affected by your organization's actions, with regard to the applications within your assessment scope. Stakeholders in application development frequently include business owners, product owners, managers, developers, testers, infrastructure teams, regulatory agencies, standards organizations, certification assessors, and third-party suppliers.

## Teams

### Administration Team

The Administration Team includes all individuals and job functions responsible for managing the collection of systems, networks, and other resources the applications within your assessment scope depend on. In some cases, the Administration Team will be external to the organization defined by your assessment scope and perform these job functions as a service to your organization. In others, the Administration Team may be the same as the Product Team, with members assigned various administration functions as part of their full-stack responsibilities.

### Product Team

The Product Team includes all individuals and job functions responsible for developing and delivering software applications within the assessment scope.

## Individual Roles

### Administrator

As used within the model, 'administrator' refers to the individual or job function assigned responsibility for managing one or more specific systems, networks, or other resources on which at least one application within your assessment scope depends. Administrators include all individuals handling these responsibilities, whether dedicated to such roles full-time or assigned them as part of "full stack" development.

Administrator refers to the individual or job function responsible for managing one or more specific systems, networks, or other resources any application within your assessment scope depends on. Administrators include all individuals handling these responsibilities, whether dedicated to such roles full-time, part-time, or as an additional duty in a full-stack development role.

### Analyst

The Analyst role involves collecting, reviewing, and documenting security and application architectures, evaluating threats and security risks, and consulting with architects, developers, and business partners to gather information, perform analysis, and remediate identified security issues. The Analyst is expected to be fully aware of the organization’s security goals established by its policies, procedures, and guidelines, and to actively work towards upholding these goals.

The Analyst often works with key stakeholders across multiple business units to enhance the security of the business enterprise. They interact with management teams to communicate identified security issues and their impact on the organization. It is also important that the Analyst contributes to the security enhancement of the Software Development Lifecycle (SDLC) and the Vulnerability and Threat Management Program.

### Application Security Professional



### Architect

Understand how applications fit into a multi-tiered architecture

Enhance awareness of risk outside the application

An architect must integrate particular security controls at the right locations within the  application landscape. 

The relevant audience is interested in exploring architectural features of software that should be included to mitigate mobile application operational risks related to application integrity violation.

Often, security architects have to describe how their security solution impacts the CIA model. This is required because each control may have security impacts on maintaining the confidentiality, integrity, and availability of the application’s code and data.


### Developer

Developers in an organisation have a duplicate responsibility.

First, like other employees, they have access to company hardware, email etc. so they should be aware of regular office security hygiene. This includes understanding how and why password policies work and be aware of phishing, physical security and the need to protect company property like hardware, company data and intellectual property.

Second, developers create software for use within the company or on behalf of the company's clients. The software they produce should have the appropriate quality, eg. be free of any bugs, security bugs etc. Of course, most software is not 100% bug-free, so read bug-free as "as bug-free as required".

Depending on the level of experience of a developer, their responsibility and role in delivering secure, bug-free software, becomes more important. 

#### Junior Developer

A junior developer should understand basic security principles, like the CIA triad. Therefore, a junior developer should have followed standard security awareness training. He or she should be able to understand the importance of regular office security hygiene and the importance of developing secure software. The developer should be able to understand the guidance of more experienced developers in achieving these objectives.

#### Medior Developer
In addition to the junior level, a medior developer should have a rough understanding of security principles relevant to software development and operation. These include for example, attack surface, defense in depth, OWASP Vulnerability Top 10's relevant to the software produced (Web applications, Mobile, API) and OWASP Top 10 Proactive controls. This does not mean the developer should be able to reproduce this material, but be able to find and use it in the development process to improve the security of the software. 

Tools and frameworks like OWASP SAMM, OWASP ASVS and OWASP ZAP, as well as quality and testing tools like SonarQube, SAST and DAST tools, as well as CI/CD and cloud concepts should be part of the developer's knowledge based on relevance in his or her's project or workplace. The developer should be able to use these tools, under guidance of more senior developers and security champions.  

Furthermore, a medior developer should understand the value of Security controls like cryptography, identity and access management, secrets management and configuration, ssl and certificates.


#### Senior Developer
In addition to the medior level, a senior developer should have firm knowledge of security principles and be able to map these principles on the architecture and software code produced. The senior developer should be able to discuss, cooperate and challenge in security requirements and threat modelling, as well as helping security champions and pentesters to design and implement security controls that mitigate existing or potential vulnerabilities.

A senior developer, similar to an architect, should be able to explain to pen-testers and Security officers, what the architecture of the application landscape looks like, as well as the software development environment and platform.

Senior developers should also have a firm knowledge of security controls like cryptography, identity and access management, secrets management and configuration, ssl and certificates. A senior developer should be able to explain how to implement these controls to medior developers and explain to pen-testers how these controls are implemented, which choices were made and why. Relevant to the project, a senior developer should be able to produce reusable components that implement security-related functionality and verify the quality of these components.

For this quality verification, Senior developers should be able to implement and use quality assurance tools, as well as SAST and DAST tools, CI/CD tools and automation. The senior developer should be able to explain and help medior and junior developers to use these tools. Senior developers should also act as the first point of contact between the development team and pen-testing team. They should be able to translate pen-test results (vulnerabilities) to mitigations using security controls.

### Manager



### Product Owner
A product owner should understand basic security principles, like the CIA triad. Therefore, a product owner should have followed standard security awareness training. He or she should have a firm understanding of the importance of developing secure software. A product owner should be able to translate non-functional requirements like quality in general, and more specific, performance, availability and security, to business value and / or risks. A product owner should be able to correctly prioritize the implementation of security controls, supported by senior developers, architects, security champions, pen-testers and security officers and be able to explain why these priorities are chosen to stakeholders.

### Security Champion
A security champion is similar to a senior developer, in that he or she has a firm knowledge of security principles and is able to explain and help medior and junior developers in implementing security controls and use security frameworks and tools. 

A Security Champion should be familiar with security additions to, and support the process of secure software development, including the use of OWASP resources like the OWASP Top 10's, OWASP Cheat-sheets, OWASP Tools like OWASP Dependency check, OWASP ZAP etc, and supporting documents and processes like OWASP SAMM and OWASP ASVS.

Security champions should specialize in several tools and security domains and be able to support senior developers in implementing these tools. Examples could be specific SAST or DAST tools, how to implement or extend an SSDLC or CI/CD pipeline with security tools and activities, IAM protocols and implementations like SAML, OpenID, OAuth etc.

A security champion should also be part of a network of champions that coordinate security activities as well as specialized security knowledge and experience for an organisation, both internal (within their company) and external (within the client's company, within a community , like OWASP, Twitter etc). 

### Security Officer
The Security Officer should have expert knowledge of criticality of business processes and direct overviews of risks to the business process, in-place mitigations and uncovered risks. The security officer should have effective mandate to allocate resources to any activities that improve the security posture of the organisation and decrease the risk and/or impact to the business.

Security officers should be able to make risk analysis, compare these to the organisation's risk appetite and translate those risks to security requirements.

### Tester

The software-tester should know the importance of testing both happy scenario's and evil scenario's and be able to contrive these evil scenarios as well as implement these scenario's into automated tests using the testing-tools used in the project.

A software-tester should have a decent understanding of security principles and be able to participate in threat-modelling with senior developers, architects and pen-testers. The tester should be able to translate attacks from a threat-modelling exercise into automated tests that can be included in integration test-suites.

A software-tester should be able to support pen-testers in translating pen-test results into automated tests using the testing-tools used in the project. 

### Pen-tester
A pen-tester should have expert knowledge of security principles, potential vulnerabilities and security testing. Pen-testers should be able to thoroughly review source-code, test software and infrastructure for potential vulnerabilities and document any findings with details applicable to the intended audience. 

Pen-testers should be familiar with the programming language, frameworks and libraries used to implement the software being tested and tools used in the CI/CD process. They should also be familiar with the infrastructure and systems used to run both the developed software as well as the tools and platforms used in development. These include IDE's, Code and Artifact repositories, cloud-platforms, SDLC pipeline software, Infrastructure as Code platforms etc. Pentesters should be able do discuss with architects and senior developers about this infrastructure and take the lead in threat-modelling these systems. Pen-testers should also be able to suggest mitigations to both software-code as well as infrastructure vulnerabilities.

Pen-testers should also have a rough understanding of automated testing-tools used in software development and be able to cooperate with testers to translate vulnerability findings to automated tests. 


---
business_functions : Verification
title : Security Testing
assignedto       : Nessim Kisserli
complete          : 50%
weight: 2
type: security_practice
---
# Short Description

The development team detects and fixes basic security issues through automation, allowing manual testing to focus on more complex attack vectors.

# Long Description

With manual and automated security tests, projects within the organization routinely run security tests and review results during development and deployment. They detect and fix basic security issues through scalable automation, where manual security testing focuses on more complex attack vectors with deeper understanding of the software.

Project teams focus on buildout of granular (manual and automated) security test cases based on the business functionality of their software. A central software security group focuses on specification of automated tests for compliance and internal standards.

For each project release, present results from automated and manual security tests to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. As part of each release, review and improve the quality of the security tests.

Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organisation.


# Overview

| | A: Scalable Baseline | B: Deep Understanding |
|:---|:---|:---|
| Maturity 1 - Perform security testing (both manual and tool based) to discover security defects. | Utilize automated security testing tools | Perform manual security testing of high-risk components |
| Maturity 2 - Make security testing during development more complete and efficient through automation complemented with regular manual security penetration tests. | Employ application-specific security testing automation | Conduct manual penetration testing |
| Maturity 3 - Embed security testing as part of the development and deployment processes. | Integrate automated security testing into the build and deploy process | Integrate security testing into development process |


# A: Scalable Baseline

## Maturity 1

### Benefit

Detect software vulnerabilities with automated security testing tools.

### Activity

Use automated static and dynamic security test tools for software, resulting in more efficient security testing and higher quality results. Gradually increase the frequency of security tests and extend code coverage.

Many security vulnerabilities at the code level are complex to understand and require careful inspection for discovery. However, there are many useful source code analysis tools available to automatically analyze code for bugs and vulnerabilities.

To dynamically test for security issues, you need to check a potentially large number of input cases against each software interface. This can make effective security testing using manual test case implementation and execution unwieldy. Use dynamic security test tools to automatically test software, resulting in more efficient security testing and higher quality results.

There are both commercial and open-source products available to cover popular programming languages and frameworks. Select an appropriate code analysis solution based on several factors including depth and accuracy of inspection, robustness and accuracy of built-in security test cases, product usability and usage model, expandability and customization features, applicability to the organization’s architecture and technology stacks, quality and usability of findings to the development organization, etc.

Use input from security-savvy technical staff as well as developers and development managers in the selection process, and review overall results with stakeholders.


#### Maturity Questions

{{< questions "Security Testing" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

Improves the efficiency and effectiveness of security testing automation by custumizing them towards the software.

### Activity

Project teams and their security and tool champions review security requirements and build a set of automated checkers to test the security of the implemented business logic. They do this through either customization of static and dynamic security testing tools, enhancements to generic test case execution tools, or buildout of custom test harnesses.

Customize automated security testing tools to the specific software interfaces in the project under test for improved accuracy and depth of coverage. Codify organization-specific concerns from compliance or technical standards as a reusable, central test battery to make audit data collection and per-project management visibility simpler.

Project teams focus on buildout of granular security test cases based on the business functionality of their software. A central software security group focuses on specification of automated tests for compliance and internal standards.


### Maturity Questions

{{< questions "Security Testing" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Allows to detect software vulnerabilities at the speed of build and deployment by integrating test tools as part of this process.

### Activity

Projects within the organization routinely run automated security tests and review results during development. Configure security testing tools to automatically run as part of the build and deploy process to make this scalable with low overhead. Inspect findings as they occur.

Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle, usually during design. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, lowering risk of release delays due to security concerns or forced acceptance of risk to meet project deadlines.

For each project release, present results from automated and manual security tests to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. Review and improve the quality of the security tests as part of each release.

Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organisation.


### Maturity Questions

{{< questions "Security Testing" "A" 3 >}}

#### Notes



# B: Deep Understanding

## Maturity 1

### Benefit

Detect vulnerabilities that cannot by found with tools.

### Activity

Perform selective blackbox manual security testing, usually using a combination of open source automated utilities (static and dynamic) for performing hands-on analysis to attempt to further ‘hack’ the application as an attacker.

Code-level vulnerabilities in security-critical parts of software can have dramatically increased impact so project teams review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, and input validators and data parsers.

During development cycles where high-risk code is changed and reviewed, development managers triage the findings and prioritize remediation appropriately with input from other project stakeholders.


### Maturity Questions

{{< questions "Security Testing" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Tests the robustness of the software by mimicking an attacker that tries to penetrate it.

### Activity

Using the set of security test cases identified for each project, conduct manual penetration testing to evaluate the system’s performance against each case. Generally, this happens during the testing phase prior to release and includes both static and dynamic manual penetration testing.

Penetration testing cases include both application-specific tests to check soundness of business logic and common vulnerability tests to check the design and implementation. Once specified, security-savvy quality assurance or development staff can execute security test cases. The central software security group monitors first-time execution of security test cases for a project team to assist and coach the team security champions.

Prior to release or deployment, stakeholders review results of security tests and accept the risks indicated by failing security tests at release time. Establish a concrete timeline to address the gaps over time. Spread the knowledge of manual security testing and the results across the development team to improve security knowledge and awareness inside the organisation.


### Maturity Questions

{{< questions "Security Testing" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Identify security issues earlier in the development process by testing security early and often.

### Activity

Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the development process, and findings should be inspected as they occur. Feed results from other security test activities into adding or improving the integrated security testing as part of development. For example, if a security penetration test identifies issues with session management, any changes to session management should trigger explicit security tests before pushing the changes to production.

Security champions and the central secure software group review results from automated and manual security tests during development including these results as part of the security awareness trainings towards the development teams. Integrate lessons learned in overall playbooks to improve security testing as part of the organisation development. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.


### Maturity Questions

{{< questions "Security Testing" "B" 3 >}}

#### Notes


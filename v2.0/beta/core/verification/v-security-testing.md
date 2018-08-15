---
business_functions : Verification
title : Security Testing
assignedto       : Seba (seba@owasp.org)
complete         : 40%
status           : draft        #new, draft, for_review, release_candidate, done
business_functions_weight: 3
type: security_practice
---

# Overview

| | A: Scalable Baseline | B: Deep Understanding |
|:---|:---|:---|
| Maturity 1 - Perform security testing (both manual and tool based) to discover security defects.  | Utilize automated security testing tools | Perform manual security testing of high-risk components |
| Maturity 2 - Make security testing during development more complete and efficient through automation complemented with regular manual security penetration tests | Employ application-specific security testing automation | Conduct manual penetration testing |
| Maturity 3 - Embed security testing as part of the development and deployment processes. | Integrate automated security testing into the build and deploy process | Integrate security testing into development process |


# A: Scalable Baseline

## Maturity 1 - Utilize automated security testing tools
### Activity
Use automated security test tools to automatically test software, resulting in more efficient security testing and higher quality results.

SAMMv1.5 - CR2:

Many security vulnerabilities at the code level are complex to understand and require careful inspection for discovery. However, there are many useful automation solutions available to automatically analyze code for bugs and vulnerabilities.

There are both commercial and open-source products available to cover popular programming languages and frameworks. Selection of an appropriate code analysis solution is based on several factors including depth and accuracy of inspection, product usability and usage model, expandability and customization features, applicability to the organization’s architecture and technology stack(s), etc.

Utilize input from security-savvy technical staff as well as developers and development managers in the selection process, and review overall results with stakeholders.

SAMMv1.5 - ST2:

In order to test for security issues, a potentially large number of input cases must be checked against each software interface, which can make effective security testing using manual test case implementation and execution unwieldy. Thus, automated security test tools should be used to automatically test software, resulting in more efficient security testing and higher quality results.

Both commercial and open-source products are available and should be reviewed for appropriateness for the organization. Selecting a a suitable tool is based on several factors including robustness and accuracy of built-in security test cases, efficacy at testing architecture types important to organization, customization to change or add test cases, quality and usability of findings to the development organization, etc..

Utilize input from security-savvy technical staff as well as development and quality assurance staff in the selection process, and review overall results with stakeholders.

#### Maturity Questions
##### Q 1
##### Do project teams use automated testing tools to find security problems?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes

*Increase the frequency of tests and extend their coverage.*

*Basic security issues are detected and fixed by the development team through automation, allowing manual testing to focus on more complex attack vectors.*

*this is a copy of SAMMv1.5 CR2 and ST2*


#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2


## Maturity 2 - Employ application-specific security testing automation
### Activity

Through either customization of security testing tools, enhancements to generic test case execution tools, or buildout of custom test harnesses, project teams should formally iterate through security requirements and build a set of automated checkers to test the security of the implemented business logic.

Additionally, many automated security testing tools can be greatly improved in accuracy and depth of coverage if they are customized to understand more detail about the specific software interfaces in the project under test. Further, organization-specific concerns from compliance or technical standards can be codified as a reusable, central test battery to make audit data collection and per-project management visibility simpler.

Project teams should focus on buildout of granular security test cases based on the business functionality of their software, and an organization-level team led by a security auditor should focus on specification of automated tests for compliance and internal standards.

### Maturity Questions
#### Q 1
#### Are security test cases comprehensively generated for application-specific logic?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes
*this is a copy of SAMMv1.5*

*replace "a security auditor" by a central software security group?*

*add the role of a security champion?*

*review/update the questions*

#### OWASP References
* https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project
* Link 2

#### External References
* Link 1
* Link 2

## Maturity 3 - Integrate automated security testing into the build and deploy process
### Activity

SAMM1.5 (adapt towards build-deploy)
With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the build and deploy process, and findings should be inspected as they occur.

Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally, used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle, usually during design. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, thus lowering risk of release delays due to security concerns or forced acceptance of risk in order to meet project deadlines.

For each project release, results from automated and manual security tests should be presented to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.

### Maturity Questions
#### Q 1
#### Do projects use automation to evaluate security test cases?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes

*Knowledge is spread across the development team to improve security knowledge inside the organisation*

*this is a copy of SAMMv1.5 (to be extended with deployment)*



#### OWASP References
* https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project
* Link 2

#### External References
* Link 1
* Link 2

# B: Deep Understanding

## Maturity 1 - Perform manual security testing of high-risk components
### Activity
Perform manual security testing by an experienced analyst, usually using a combination of open source automated utilities (either self created or through security community) for performing task-specific functions and hands-on analysis to attempt to further ‘hack’ the application as an attacker.

SAMMv1.5:

Since code-level vulnerabilities can have dramatically increased impacts if they occur in security-critical parts of software, project teams should review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, input validators and data parsers, etc.

Utilizing the code review checklists, the analysis can be performed as a normal part of the development process where members of the project team are assigned modules to review when changes are made. Security auditors and automated review tools can also be utilized for the review.

During development cycles where high-risk code is being changed and reviewed, development managers should triage the findings and prioritize remediation appropriately with input from other project stakeholders.


### Maturity Questions
#### Q 1
#### Do project teams manually review selected high-risk components?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes

*this is a copy of SAMMv1.5*


#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2


## Maturity 2 - Conduct manual penetration testing
### Activity
SAMMv1.5:

Using the set of security test cases identified for each project, penetration testing should be conducted to evaluate the system’s performance against each case. It is common for this to occur during the testing phase prior to release.

Penetration testing cases should include both application-specific tests to check soundness of business logic as well as common vulnerability tests to check the design and implementation. Once specified, security test cases can be executed by security-savvy quality assurance or development staff, but first-time execution of security test cases for a project team should be monitored by a security auditor to assist and coach team members.

Prior to release or deployment, stakeholders must review results of security tests and accept the risks indicated by failing security tests at release time. In the latter case, a concrete timeline should be established to address the gaps over time.

### Maturity Questions
#### Q 1
#### Is penetration testing performed on high risk projects prior to release?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes

*this is a copy of SAMMv1.5*


#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

## Maturity 3 - Integrate security testing into development process
### Activity
Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

SAMM1.5 (adapt towards development)

With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the build and deploy process, and findings should be inspected as they occur.

Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally, used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle, usually during design. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, thus lowering risk of release delays due to security concerns or forced acceptance of risk in order to meet project deadlines.

For each project release, results from automated and manual security tests should be presented to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.

### Maturity Questions
#### Q 1
#### Do projects use security testing to evaluate security during development?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes

*this is a copy of SAMMv1.5*

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

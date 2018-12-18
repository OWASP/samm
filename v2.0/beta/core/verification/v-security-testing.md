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


# Short Description

Basic security issues are detected and fixed by the development team through automation, allowing manual testing to focus on more complex attack vectors.

# Long Description

With manual and automated security tests, projects within the organization should routinely run security tests and review results during development and deployment. Basic security issues are detected and fixed through scalable automation, where manual security testing should focus on more complex attack vectors with deeper understanding of the software.

Project teams should focus on buildout of granular (manual and automated) security test cases based on the business functionality of their software, and a central software security group should focus on specification of automated tests for compliance and internal standards.

For each project release, results from automated and manual security tests should be presented to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them. As part of each release the quality of the security tests should be reviewed and improved if necessary.

Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. The knowledge of the created security tests and the results are spread across the development team to improve security knowledge and awareness inside the organisation.

<!--
**Notes**
* Make code review more explicit (in both streams)
status: implemented
-->

# A: Scalable Baseline

## Maturity 1 - Utilize automated security testing tools

### Benefit

### Activity
Use automated static and dynamic security test tools to automatically test software, resulting in more efficient security testing and higher quality results. Gradually increase the frequency of security tests and extend their coverage of the code.

Many security vulnerabilities at the code level are complex to understand and require careful inspection for discovery. However, there are many useful  source code analysis tools available to automatically analyze code for bugs and vulnerabilities.

In order to dynamically test for security issues, a potentially large number of input cases must be checked against each software interface, which can make effective security testing using manual test case implementation and execution unwieldy. Thus, dynamic security test tools should be used to automatically test software, resulting in more efficient security testing and higher quality results.

There are both commercial and open-source products available to cover popular programming languages and frameworks. Selection of an appropriate code analysis solution is based on several factors including depth and accuracy of inspection, robustness and accuracy of built-in security test cases, product usability and usage model, expandability and customization features, applicability to the organization’s architecture and technology stack(s), quality and usability of findings to the development organization, etc.

Utilize input from security-savvy technical staff as well as developers and development managers in the selection process, and review overall results with stakeholders.

### Indicators

#### Maturity Questions
##### Q 1
##### Do project teams use automated testing tools to find security problems (static and dynamic)?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

<!--
#### Notes

*Increase the frequency of tests and extend their coverage.*
status: included in the activity.

*Basic security issues are detected and fixed by the development team through automation, allowing manual testing to focus on more complex attack vectors.*
status: took this as short Description

*this is a merged copy of SAMMv1.5 CR2 and ST2*
-->

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2


## Maturity 2 - Employ application-specific security testing automation

### Benefit

### Activity

Through either customization of static and dynamic security testing tools, enhancements to generic test case execution tools, or buildout of custom test harnesses, project teams and their security and tool champions should review security requirements and build a set of automated checkers to test the security of the implemented business logic.

Additionally, many automated security testing tools can be greatly improved in accuracy and depth of coverage if they are customized to understand more detail about the specific software interfaces in the project under test. Further, organization-specific concerns from compliance or technical standards can be codified as a reusable, central test battery to make audit data collection and per-project management visibility simpler.

Project teams should focus on buildout of granular security test cases based on the business functionality of their software, and a central software security group should focus on specification of automated tests for compliance and internal standards.

### Indicators

### Maturity Questions
#### Q 1
#### Are security test cases comprehensively generated for application-specific logic?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do


<!--
#### Notes
*this is an adapted copy of SAMMv1.5*

*replace "a security auditor" by a central software security group?*
status: updated activity

*add the role of a security champion?*
status: updated activity

*review/update the questions*
status: not clear why?

* Remove iterating through requirements.
status: updated activity

* Write rules for the standards (org-wide) and app-specific.
** Zap for example could be app-specific, secure coding rules not as they'll be harder to do.
status: this is already part of the text?

-->

#### OWASP References
* https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project
* Link 2

#### External References
* Link 1
* Link 2

## Maturity 3 - Integrate automated security testing into the build and deploy process

### Benefit

### Activity

With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the build and deploy process, and findings should be inspected as they occur.

Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally, used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle, usually during design. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, thus lowering risk of release delays due to security concerns or forced acceptance of risk in order to meet project deadlines.

For each project release, results from automated and manual security tests should be presented to management and business stakeholders for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them. As part of each release the quality of the security tests should be reviewed and improved if necessary.

Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. The knowledge of the created security tests and the results are spread across the development team to improve security knowledge and awareness inside the organisation.

### Indicators

### Maturity Questions
#### Q 1
#### Do projects use integrated automation to evaluate security test cases?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do


<!--
#### Notes

*Knowledge is spread across the development team to improve security knowledge inside the organisation*
status: updated activity

*this is a copy of SAMMv1.5 (to be extended with deployment)*

* should include improving the quality part of testing, not just adding it to the process.
status: updated activity

* Incorporate a ThreatFix/Splunk like concept here.
* Link to defect management
status: updated activity
-->

#### Guidance
* Select tests which can run before deploy, after, etc.


#### OWASP References
* https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project
* Link 2

#### External References
* Link 1
* Link 2

# B: Deep Understanding

## Maturity 1 - Perform manual security testing of high-risk components

### Benefit

### Activity
Perform selective blackbox manual security testing, usually using a combination of open source automated utilities (static and dynamic) for performing hands-on analysis to attempt to further ‘hack’ the application as an attacker.

Since code-level vulnerabilities can have dramatically increased impacts if they occur in security-critical parts of software, project teams should review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, input validators and data parsers, etc.

During development cycles where high-risk code is being changed and reviewed, development managers should triage the findings and prioritize remediation appropriately with input from other project stakeholders.

### Indicators

### Maturity Questions
#### Q 1
#### Do project teams manually review selected high-risk components?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do


<!--
#### Notes

*this is a copy of SAMMv1.5*

* late and ad-hoc, more blackbox like approach + lower quality of methodology (any owasp-like)
status: updated activity
-->

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2


## Maturity 2 - Conduct manual penetration testing

### Benefit

### Activity

Using the set of security test cases identified for each project, manual penetration testing should be conducted to evaluate the system’s performance against each case. It is common for this to occur during the testing phase prior to release and this should include both static and dynamic manual penetration testing.

Penetration testing cases should include both application-specific tests to check soundness of business logic as well as common vulnerability tests to check the design and implementation. Once specified, security test cases can be executed by security-savvy quality assurance or development staff, but first-time execution of security test cases for a project team should be monitored by the central software security group to assist and coach the team security champions.

Prior to release or deployment, stakeholders must review results of security tests and accept the risks indicated by failing security tests at release time. In the latter case, a concrete timeline should be established to address the gaps over time. The knowledge of manual security testing and the results are spread across the development team to improve security knowledge and awareness inside the organisation.

### Indicators

### Maturity Questions
#### Q 1
#### Is manual penetration testing performed on high risk projects prior to release (both statis and dynamic)?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

<!--

#### Notes

*this is a copy of SAMMv1.5*

* scheduled tests, more whitebox like approach (e.g. with interaction with devs). Improve quality of methodology used.
status: updated activity
-->

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

## Maturity 3 - Integrate security testing into development process

### Benefit

### Activity
Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

With tools to run automated security tests, projects within the organization should routinely run security tests and review results during development. In order to make this scalable with low overhead, security testing tools should be configured to automatically run as part of the development process, and findings should be inspected as they occur. Results from other security test activities should feed into adding or improving the integrated security testing as part of development (e.g. if a security penetration test identifies issues with session management, any changes to session management should trigger  explicit security tests before pushing the changes to production).

Results from automated and manual security tests during development should be reviewed by the security champions and the central secure software group and considered to be included as part of the security awareness trainings towards the development teams. Lessons learned should be integrated in overall playbooks to improve security testing as part of the organisation development. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.

### Indicators

### Maturity Questions
#### Q 1
#### Do projects use security testing to evaluate security during development?

**Answer Options**

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

<!--
#### Notes

*this is a copy of SAMMv1.5*

* continuous (involve pentesters in remediation with devs), improve methodology
status: updated activity

* Triggers for out-schedule repeat assessments based on results of pentests (e.g. if pentest identifies issues with session management, any changes to session management will trigger an explicit pentest before pushing to production)
status: updated activity

* Feedback from pentests used to drive requirements is handled within the education activity.
status: updated activity
-->

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

---
business_functions : Verification
title : Security Testing
assignedto       : Seba (seba@owasp.org)
complete          : 0%
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

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Increase the frequency of tests and extend their coverage.
Basic security issues are detected and fixed by the development team through automation, allowing manual testing to focus on more complex attack vectors.


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
####Are security test cases comprehensively generated for application-specific logic?

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

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2


## Maturity 2 - Conduct manual penetration testing
### Activity
Using the set of security test cases identified for each project, penetration testing should be conducted to evaluate the system’s performance against each case. It is common for this to occur during the testing phase prior to release.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

## Maturity 3 - Integrate security testing into development process
### Activity
Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### OWASP References
* Link 1
* Link 2

#### External References
* Link 1
* Link 2

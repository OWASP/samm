---
business_functions : Verification
security_practice : Requirements Driven Testing
assigned_to       : Seba (seba@owasp.org)
complete          : 0%
business_functions_weight: 2
---

# updated Overview

| | A: Control Verification | B: Misuse/Abuse Testing |
|:---|:---|:---|
| Maturity 1 - Opportunistically find basic vulnerabilities and other security issues. |  Test for standard security controls | Perform security fuzzing testing |
| Maturity 2 - Perform implementation review to discover application-specific risks against the security requirements. |  Derive test cases from known security requirements | Create and test abuse cases for the application based on the requirements |
| Maturity 3 - Maintain the application security level after bug fixes, changes or during maintenance | Perform regression testing (with security unit tests) | Perform security testing on application logic abuse flaws |

# Overview

| | A: Control Verification | B: Misuse/Abuse Testing |
|:---|:---|:---|
| Maturity 1 - Opportunistically find basic code-level vulnerabilities and other high-risk security issues. |  Test for standard security controls | Perform security fuzzing testing |
| Maturity 2 - Make implementation review during development more accurate and efficient through automation. |  Derive test cases from known security requirements | Create and test abuse cases for the application based on the requirements |
| Maturity 3 - Mandate comprehensive implementation review process to discover language-level and application-specific risks. | Perform regression testing (with security unit tests) | Perform security testing on application logic abuse flaws |


# A: Control Verification

## Maturity 1
### Activity
Verify that the standard security controls operate as expected.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Testing security controls and security components to make sure that security controls behave as expected.

References
https://www.owasp.org/index.php/Testing_Guide_Introduction
https://www.owasp.org/index.php/Category:OWASP_Application_Security_Verification_Standard_Project
https://github.com/OWASP/owasp-masvs



## Maturity 2
### Activity
From the known security requirements, identify and implement a set of test cases to check the software for correct functionality. 

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
Write and automate regression tests for all identified (and fixed) bugs to ensures that these specific bugs will not occur again. 

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


# B: Misuse/Abuse Testing

## Maturity 1
### Activity
Perform fuzzing, sending massive amounts of random data, to the test subject in an attempt to make it crash.

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
Create misuse and abuse cases to misuse or exploit the weaknesses of controls in software features to attack an application.

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
Test on business logic vulnerabilities by using the legitimate processing flow of an application in a way that results in a negative consequence to the organization.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes

References
https://www.owasp.org/index.php/ASVS_V15_Business_Logic_Flaws

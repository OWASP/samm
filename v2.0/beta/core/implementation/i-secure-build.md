---
business_functions : Implementation
title : Secure Build
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 0%
business_functions_weight: 1
type: security_practice
---

# Meta

| Business Function | Security Practice | Assigned To | % Complete |
|:---|:---|:---|:---|
| *Implementation* | *Secure Build* | Name (email) | 0% |

# Overview

| | A: Build Process | B: Software Supply Chain |
|:---|:---|:---|
| Maturity 1 - Build process is repeatable and consistent | The build process is defined and consistent.   | All application dependencies are identified and documented |
| Maturity 2 - Build process is optimized and fully integrated into the workflow | The build process is fully automated and does not require intervention by the developer. | All components and libraries are periodically reviewed for known security vulnerabilities and licensing issues |
| Maturity 3 - Build process helps prevent known defects from entering the production environment. | Security defects may trigger the build to stop executing | Components and libraries are independently scanned for vulnerabilities |


# A: Build Process

## Maturity 1
### Activity
Consistent and repeatable builds help developers focus on application-specific issues, and makes it possible to automate builds in the future.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Make sure activities address Docker and other system-level dependencies that are part of infrastructure as code.

## Maturity 2
### Activity
Automation facilitates different forms of automated testing, which can be included in each build.

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
Integrated security tests are a part of the automated build process, and can stop the build from moving forward.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



# B: Software Supply Chain

## Maturity 1
### Activity
Identify modules, versions, and their effective license

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
Establish a complete library lifecycle including periodic reviews and approvals

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
Verify code in libraries the same way it's handled with internally-developed source code

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

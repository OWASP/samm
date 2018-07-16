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
Consistent and repeatable builds help developers focus on application-specific issues, and make it possible to automate builds in the future.

The complete build process must be fully documented, broken down into clear stages that can be reproduced consistently. Following the build process should ideally not require any additional knowledge about the software - meaning that the documentation is complete and not open to interpretation.

The documentation should not include any secrets (specifically considering those that would be needed during the build process). Access to build tools, environments and code repositories should be via individual credentials that authenticate, authorize and account where possible. Shared secrets, only where they cannot be avoided, should be managed with care, perhaps via an encrypted password vault.

A master copy of the build documentation should be kept in one central location that is accessible by all who require access. Avoid having multiple copies, some of which may not benefit from updated processes. 

All of the tools required for the build to succeed should be included in the documentation. These tools should be routinely reviewed to ensure that they are actively maintained (supported) and up-to-date with all security patches. Furthermore, each tool's configuration should be be hardened in-line with vendor or trusted third-party guidelines.

Where it is reasonable to do so, implement static application security testing (SAST) as part of the build procedure. The results from these tests should be logged centrally and actioned as necessary.

The build process should include steps for signing the generated binaries / code with an appropriate certificate.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 2
### Activity
Implement the build process as an automated system, so that builds can be executed repeatedly and consistently. The process should be reliable and not require developer intervention, reducing the likelihood of human error.

Automation makes it easier to include security checks during the build process. Where it is reasonable to do so, implement static application security testing (SAST) to run as part of the build process. The results from these tests should be logged centrally and actioned as necessary.

The use of an automated system increases the reliance placed on the build tools for security, and therefore makes hardening and maintaining the toolset even more critical. Particular attention should be paid to the interfaces that such tools might expose, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets, such as the code signing certificate or access to repositories; secrets that are specifically required in order to build the software. These should be handled with care - e.g. encrypted at rest with keys held in a trusted platform module (TPM) or hardware security module (HSM).

Ideally, handle code signing on a separate centralized server which does not expose the certificate to the system executing the build. 

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

The build process includes automated security checks which break the build if they fail. Static Application Security Testing (SAST), with an appropriate and custom ruleset, should be triggered each time the build process executes.

Tests should not be generic, but based on the application's risk profile. For instance, they should include risks identified in the threat model, and during previous verification tests. This should include testing for regression where relevant checks are available - i.e. for previously identified vulnerabilities that have been written up as SAST rules.

The organization should set an appropriate threshold for build failure based on the application's risk appetite. For instance, this might be vulnerabilities rated as "High" and "Critical", or those with a CVSS score above 7.0. The types of vulnerabilities that the organization would consider to be unacceptable in a build and their typical scores/ratings should be considered when setting this threshold. An application with more sensitive functions might have a lower threshold, for instance. Vulnerabilities below the threshold should still trigger warnings and be logged into a centralized system to be tracked and actioned.

Bear in mind that a mechanism to bypass this behaviour when a vulnerability has been accepted or mitigated will be necessary (to stop it from breaking the build), but should be carefully controlled and approved. All exceptions should be logged with a rationale.

If any of the SAST or any other security tests could not be carried out successfully, the build should fail.

SAST results generated during this stage of the development lifecycle should feedback into further development and verification activities. They should be recorded alongside the results of other security verification tests, and the gathered data and metrics used to improve the security of subsequent builds.

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

Keep a record of all software dependencies utilized throughout the target application. In building these records, consider the various locations where dependencies might be specified:
- configuration files
- the project's directory on disk
- package management tool
- code (e.g. via an IDE that supports listing dependencies)

Consider that the different components and aspects of the application which may consume entirely different dependencies. For example, if the software package is a web app, the server-side application code and client-side scripts both need to be covered.

The records should ideally include the following information about each dependency:

* Where is it used / referenced?
* Why is it required?
* Version being used
* License
* Source information (link to repository, author's name, etc)
* Open source or proprietary
* Is the component supported / being actively maintained?

The records should be checked, whenever it is practical to do so, to discover any dependencies with known vulnerabilities and update or replace them accordingly.

The organization should endeavor to ensure that comonents are being actively maintained, and that security vulnerabilities are likely to be dealt with appropriately. Assurance should be gained, either through agreements with a commercial vendor, or other means when dealing with open source components. In the latter case, it may be evident whether the project is being actively maintained by looking at repository activity, and the developers' reponses to security issues being raised by the community.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
- Make sure activities address Docker and other system-level dependencies that are part of infrastructure as code.

## Maturity 2
### Activity

Components should be regularly reviewed to ensure that:

* they remain correctly licensed
* no known and significant vulnerabilities are present
* the component is still supported and being actively maintained
* there is still a good business reason for the component to be included

It may be desirable to utilize tools to automate some or all of this process, such as analyzing where the component is being used, or checking for updates via a package manager. Where available, consider using an automated tool to specifically scan for vulnerable dependencies.

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

Leverage Static Application Security Testing (SAST) against dependencies in the same way that it is performed against the target application itself. Depending on the build process maturity level, the discovery of significant issues might cause the build to fail.

Results should be logged centrally and actioned appropriately. Additionally, valid findings should be fed back to the vendor or open source project as appropriate, following a set of ethical disclosure guidelines.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

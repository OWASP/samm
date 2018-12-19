---
business_functions : Implementation
title : Secure Build
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 40%
business_functions_weight: 1
type: security_practice
---

# Short Description

# Long Description

# Overview

| | A: Build Process | B: Software Supply Chain |
|:---|:---|:---|
| Maturity 1 - Build process is repeatable and consistent | The build process is defined and consistent.   | All application dependencies are identified and documented |
| Maturity 2 - Build process is optimized and fully integrated into the workflow | The build process is fully automated and does not require intervention by the developer. | All components and libraries are periodically reviewed for known security vulnerabilities and licensing issues |
| Maturity 3 - Build process helps prevent known defects from entering the production environment. | Security defects may trigger the build to stop executing | Components and libraries are independently scanned for vulnerabilities |


# A: Build Process

## Maturity 1
### Benefit
Consistent and repeatable builds help developers focus on application-specific issues, and make it possible to automate builds in the future. This reduces the likelihood of human error during builds which can lead to security vulnerabilities.

### Activity
The complete build process must be fully documented, broken down into clear stages that can be reproduced consistently. Following the build process should ideally not require any additional knowledge about the software - meaning that the documentation is complete and not open to interpretation.

The documentation should not include any secrets (specifically considering those that would be needed during the build process). Access to build tools, environments and code repositories should be via individual credentials that authenticate, authorize and account where possible. Shared secrets, only where they cannot be avoided, should be managed with care, preferably via an encrypted password vault.

A master copy of the build documentation should be kept in one central location that is accessible by all who require access. Avoid having multiple copies, some of which may not benefit from updated processes.

All of the tools required for the build to succeed should be included in the documentation. These tools should be routinely reviewed to ensure that they are actively maintained (supported) and up-to-date with all security patches. Furthermore, each tool's configuration should be be hardened in-line with vendor or trusted third-party guidelines.

The build process should include steps for signing the generated binaries / code with an appropriate certificate.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4
- Option 5

### Quality Indicators
 * A new build environment can be manually deployed by anyone following the documentation
 
<!--
#### Notes
Why is this benificial for software security? [Added by CC]

Note for implementation: "Where it is reasonable to do so, implement static application security testing (SAST) to run as part of the build process. The results from these tests should be logged centrally and actioned as necessary." [Removed from activity by CC]

Reproducable build? 
How is integrity of the build software guaranteed with this activity? [Added to M3 by CC]

Does "documented" imply a separate document. How about using "captured" instead. [Not changed - question of language we adopt across the board? CC]

#### Guidance
Provide examples of which security tools might fit here.  
are there any others than SAST(?) - how about obfuscation toolings (e.g. mobile).

-->

## Maturity 2
### Benefit
A fully automated build system allows easy integration of automated security checks at all stages of the build process, and ensures separate but consistent build environments.

### Activity
Implement the build process as an automated system, so that builds can be executed repeatedly and consistently. The process should be reliable and not require developer intervention, further reducing the likelihood of human error.

Automation makes it easier to include security checks during the build process. Where it is reasonable to do so, implement static application security testing (SAST) to run as part of the build process. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A3.

The use of an automated system increases the reliance placed on the build tools for security, and therefore maskes hardening and maintaining the toolset even more critical. Particular attention should be paid to the interfaces that such tools might expose, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets, such as the code signing certificate or access to repositories; secrets that are specifically required in order to build the software. These should be handled with care. Refer to [Implementation > Secure Deployment](i-secure-deployment) > B.

Ideally, handle code signing on a separate centralized server which does not expose the certificate to the system executing the build.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * New build environments can be rapidly and easily deployed without specialist knowledge.
  * The build environment itself is versioned and maintained as code in a repository.
  * New security checks can be easily added to any stage of the build pipeline.
  * The majority of regressions in production should also occur in a pre-production environment.
  * Build and runtime secrets are handled via a standardised solution (e.g. secret vault)
  * Developers cannot access secrets in the production environment
  * Any developer access to the production environment is securely audited.

## Maturity 3
### Benefit
A clear minimal security baseline can be enforced in production; compliant applications can be automtically deployed.

### Activity

The build process includes automated security checks which break the build if they fail. Static Application Security Testing (SAST), with an appropriate and custom ruleset, should be triggered each time the build process executes. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A.

The organization should set an appropriate threshold for build failure based on the application's risk appetite. For instance, this might be vulnerabilities rated as "High" and "Critical", or those with a CVSS score above 7.0. The types of vulnerabilities that the organization would consider to be unacceptable in a build and their typical scores/ratings should be considered when setting this threshold. An application with more sensitive functions might have a lower threshold, for instance. Vulnerabilities below the threshold should still trigger warnings and be logged into a centralized system to be tracked and actioned.

Bear in mind that a mechanism to bypass this behaviour when a vulnerability has been accepted or mitigated will be necessary (to stop it from breaking the build), but should be carefully controlled and approved. All exceptions should be logged with a rationale.

If any of the SAST or any other security tests could not be carried out successfully, the build should fail.

If technical limitations prevent the organisation from breaking the build automatically for any reason, the same effect should be acheived via other means, such as a clear policy for the developer / engineer not to deploy or execute a build with defects meeting certain criteria.

Take steps to verify the integrity of the build system, for example through a deterministic method that outputs byte-for-byte reproducable builds. Compare the binary output with that from other equivilent build systems to ensure it hasn't been tampered with.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * Issues should be automatically created for security failures during the build (and testing) process, and assigned to the development team
  * Regressions in production which did not get detected in pre-production are treated themselves as issues and investigated.
  * //A process exists for managing accepted risks//. The idea here is to stop ignoring a vulnerability whose risk was temporarily accepted after the grace period expires (?)
  * The build environment is maintained as project, complete with with regression tests.
  * The build environment can be rolled back to the exact version used to build and test a particular release of an application.
  * The build environment is regularly pentested similarly to applications.

<!--
#### Notes
lot of overlap/duplication with the security testing stream, to be revised. [Changed to references by CC]
-->

# B: Software Dependencies

## Maturity 1
### Benefit
Production applications which are at risk from a known vulnerable 3rd party component can be enumerated.

### Activity

Keep a record of all software dependencies utilized throughout the target application. This is sometimes referred to as a Bill of Materials (BOM). In building these records, consider the various locations where dependencies might be specified:
- configuration files
- the project's directory on disk
- package management tool
- code (e.g. via an IDE that supports listing dependencies)

Consider that the different components and aspects of the application may consume entirely different dependencies. For example, if the software package is a web app, the server-side application code and client-side scripts both need to be covered.

The records should ideally include the following information about each dependency:

* Where is it used / referenced?
* Why is it required?
* Version being used
* License
* Source information (link to repository, author's name, etc)
* Open source or proprietary
* Is the component supported / being actively maintained?

The records should be checked, whenever it is practical to do so, to discover any dependencies with known vulnerabilities and update or replace them accordingly.

The organization should endeavor to ensure that components are being actively maintained, and that security vulnerabilities are likely to be dealt with appropriately. Assurance should be gained, either through agreements with a commercial vendor, or other means when dealing with open source components. In the latter case, it may be evident whether the project is being actively maintained by looking at repository activity, and the developers' reponses to security issues being raised by the community.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * Each software release is accompanied by an accurate BOM
  * There is a policy for updating dependency information before production releases.
  
<!--
#### Notes
- is "Software Supply Chain" to best title for this stream? [Changed to Software Dependencies by CC]
- Make sure activities address Docker and other system-level dependencies that are part of infrastructure as code. [I contest that this is related to deployment, not code dependencies in the build. CC]
- associate it with "bill of materials", but add more details than Maven BOM files [Referenced. CC]

-->

## Maturity 2
### Benefit
There is an audit trail of all 3rd party libraries used in development and their security status at any given time is known and proactively tracked.

### Activity

Establish a whitelist of acceptable code dependencies that have been approved for use within a project or team, or within the wider organization. These libraries should be subjected to reasonable scrutiny in order to be included in the whitelist.

Alternatively, introduce a central repository of approved dependencies that all software must be built from.

Components should be regularly reviewed to ensure that:

* they remain correctly licensed
* no known and significant vulnerabilities are present
* the component is still supported and being actively maintained
* there is still a good business reason for the component to be included

It may be necessary to utilize tools to automate some or all of this process, such as analyzing where the component is being used, or checking for updates via a package manager. Where available, consider using an automated tool to specifically scan for vulnerable dependencies.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * Each software release is accompanied by an accurate BOM automatically generated.
  * The security status of all 3rd party components can be queried at any given time
  * A well-defined procedure exists for addressing vulnerabilities in 3rd party components.

<!--
#### Notes
Difference with level 1 is not clear enough 
Review being more thorough? 
Tooling is practicaly required to do this, very hard to get to this maturity level manually [Changed toolong from "desirable" to "necessary". CC]
Consider whitelisting/blacklisting [Added. CC]
Consider a curated and controlled central repository for the build. [Added. CC]
-->


## Maturity 3
### Benefit
The application is more inline with its assigned security level which is consistent across internally developed components as well as 3rd party ones.

### Activity

Verification tests are performed against dependencies in the same way that they are against the target application itself. Refer to [Verification > Security Testing](../verification/v-security-testing). Depending on the build process maturity level, the discovery of significant issues might cause the build to fail.

Results should be logged centrally and actioned appropriately. Vulnerable dependencies should be blacklisted and not permitted to be used during builds. Additionally, valid findings should be fed back to the vendor or open source project as appropriate, following a set of ethical disclosure guidelines.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * The security of important 3rd party components is assessed.
  * The organisation actively contributes security improvements to important 3rd party components (testing, reports, features).
  * Security is an important factor during 3rd party component selection
  * Important 3rd party components have an assigned owner/champion [within the organisation].
  * Multiple intelligence feeds are proactively used to track the security of 3rd party components.
  * There is an active policy to minimise the number of different versions of 3rd party components used.
 
<!--
#### Notes
Add other verification activities as well. [Generalised the content in question. CC]
-->

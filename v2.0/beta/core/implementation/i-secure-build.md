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
Fully document the complete build process, breaking it down into clear stages for consistent reproduction. Following the build process does not require any additional knowledge about the software - meaning that the documentation is complete and not open to interpretation.

The documentation does not include any secrets (specifically considering those needed during the build process). Use individual credentials that authenticate, authorize, and account to access build tools, environments, and code repositories . Include shared secrets only where you cannot avoid it, managing them with care, preferably via an encrypted password vault.

Keep a master copy of the build documentation in one central location accessible by all who require access. Avoid having multiple copies, some of which may not benefit from updated processes.

Include all the tools required for the build to succeed in the documentation. Review these tools routinely to ensure that they are actively maintained (supported) and up to date with all security patches. Harden each tool's configuration so they are aligned with vendor or trusted third-party guidelines.

Include steps in the build process for signing the generated binaries with an appropriate certificate.

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
 * Anyone following the documentation can manually deploy a new build environment
 
<!--
#### Notes
Why is this beneficial for software security? [Added by CC]

Note for implementation: "Where it is reasonable to do so, implement static application security testing (SAST) to run as part of the build process. The results from these tests should be logged centrally and actioned as necessary." [Removed from activity by CC]

Reproducible build? 
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
Implement the build process as an automated system, so that builds can be executed repeatedly and consistently. The process is reliable and does not require developer intervention, further reducing the likelihood of human error.

Automation makes it easier to include security checks during the build process. Implement static application security testing (SAST) to run as part of the build process. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A3.

The use of an automated system increases reliance on the build tools for security, and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Refer to [Implementation > Secure Deployment](i-secure-deployment) > B.

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
  * You can rapidly and easily deploy new build environments without specialist knowledge
  * You version and maintain the build environment as code in a repository
  * You can easily add new security checks to any stage of the build pipeline
  * Most of regressions in production also occur in a pre-production environment
  * You handle build and runtime secrets via a standardised solution (e.g. secret vault)
  * Developers cannot access secrets in the production environment
  * You securely audit any developer access to the production environment

## Maturity 3
### Benefit
You can enforce a minimal clear security baseline in production. You can automatically deploy compliant applications.

### Activity

The build process includes automated security checks which break the build if they fail. Static Application Security Testing (SAST), with an appropriate and custom ruleset, is triggered each time the build process executes. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A.

The organization sets an appropriate threshold for build failure based on the application's risk appetite. For instance, "High" and "Critical" vulnerabilities, or those with a CVSS score above 7.0. The types of vulnerabilities that the organization consider unacceptable in a build and their typical scores/ratings are considered when setting this threshold. An application with more sensitive functions might have a lower threshold, for instance. Trigger warnings for vulnerabilities below the threshold, and log them to a centralized system to track them and take actions.

Put in place  a mechanism to bypass this behaviour when a vulnerability has been accepted or mitigated to stop it from breaking the build. Carefully control and approve it, and log all exceptions with a rationale.

If any of the SAST or any other security tests are not carried out successfully, the build fails.

If technical limitations prevent the organisation from breaking the build automatically, achieve the same effect via other means, such as a clear policy for the developer not to deploy or execute a build with defects meeting certain criteria.

Take steps to verify the integrity of the build system, for example through a deterministic method that outputs byte-for-byte reproducible builds. Compare the binary output with that from other equivalent build systems to ensure it hasn't been tampered with.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * You create issues for security failures during the build (and testing) process automatically, and assign them to the development team
  * You treat regressions in production which did not get detected in pre-production as issues and you investigate them
  * A process exists for managing risks. Temporarily accepted vulnerabilities are no longer ignored after their assigned grace period expires.
  * The build environment is a project, complete with with regression tests.
  * You can roll back the build environment to the exact version used to build and test a particular release of an application.
  * You test the security of the build environment regularly.

<!--
#### Notes
lot of overlap/duplication with the security testing stream, to be revised. [Changed to references by CC]
-->

# B: Software Dependencies

## Maturity 1
### Benefit
You know which production applications are at risk from a known vulnerable 3rd party component.

### Activity

Keep a record of all software dependencies used throughout the target application. This is sometimes referred to as a Bill of Materials (BOM). In building these records, consider the various locations where dependencies might be specified:
- configuration files
- the project's directory on disk
- package management tool
- code (e.g. via an IDE that supports listing dependencies)

Consider that the different components and aspects of the application may consume entirely different dependencies. For example, if the software package is a web app, cover both the server-side application code and client-side scripts.

The records include the following information about each dependency:

* Where it is used or referenced
* Why it is required
* Version used
* License
* Source information (link to repository, author's name, etc.)
* Open source or proprietary
* Support and maintenance status of the component

Check the records, whenever practical, to discover any dependencies with known vulnerabilities and update or replace them accordingly.

Ensure that providers actively maintain components, and that they deal with security vulnerabilities appropriately. Gain assurance when dealing with open source components, either through agreements with a commercial vendor, or other means, for example, by looking at repository activity, and the developers' responses to security issues raised by the community.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * There is an accurate BOM for each software release
  * There is a policy for updating dependency information before production releases
  
<!--
#### Notes
- is "Software Supply Chain" the best title for this stream? [Changed to Software Dependencies by CC]
- Make sure activities address Docker and other system-level dependencies that are part of infrastructure as code. [I contest that this is related to deployment, not code dependencies in the build. CC]
- associate it with "bill of materials", but add more details than Maven BOM files [Referenced. CC]

-->

## Maturity 2
### Benefit
There is an audit trail of all 3rd party libraries used in development and you know and track their security status at any given time.

### Activity

Evaluate libraries to establish a whitelist of acceptable code dependencies approved for use within a project, team, or the wider organization.

Alternatively, introduce a central repository of approved dependencies that all software must be built from.

Review components regularly to ensure that:

* they remain correctly licensed
* no known and significant vulnerabilities are present
* there is support and active maintenance for the component
* there is a good business reason to include the component

You may need tools to automate some or all of this process, such as analyzing where the component is used, or checking for updates via a package manager. Consider using an automated tool to scan for vulnerable dependencies.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * There is an automatically generated BOM for each software release
  * You can query the security status of all 3rd party components anytime
  * There is a well-defined procedure for addressing vulnerabilities in 3rd party components

<!--
#### Notes
Difference with level 1 is not clear enough 
Review being more thorough? 
Tooling is practically required to do this, very hard to get to this maturity level manually [Changed tooling from "desirable" to "necessary". CC]
Consider whitelisting/blacklisting [Added. CC]
Consider a curated and controlled central repository for the build. [Added. CC]
-->


## Maturity 3
### Benefit
The application is more inline with its assigned security level which is consistent across internally developed components as well as 3rd party ones.

### Activity

Perform verification tests against dependencies in the same way you do against the target application. Refer to [Verification > Security Testing](../verification/v-security-testing). Depending on the build process maturity level, the discovery of significant issues might cause the build to fail.

Log results centrally and take appropriate action. Vulnerable dependencies should be blacklisted and not permitted to be used during builds. Feed findings back to the vendor or open source project, following a set of ethical disclosure guidelines.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators
  * You assess the security of important 3rd party components. The components are either flagged during a risk analysis or threat modelling, or are of high value to business
  * The organisation actively contributes security improvements to important 3rd party components (testing, reports, features)
  * Security is an important factor during 3rd party component selection
  * Important 3rd party components have an assigned owner within the organisation. For sufficiently important components, the owner may also be the component’s champion
  * You use multiple intelligence feeds to track the security of 3rd party components
  * There is an active policy to minimise the number of different versions of 3rd party components
 
<!--
#### Notes
Add other verification activities as well. [Generalised the content in question. CC]
-->

---
business_functions : Implementation
title : Secure Build
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 40%
weight: 1
type: security_practice
---
# Short Description
This practice focuses on creating a consistently repeatable build process and accounting for the security of application dependencies.
# Long Description
The Secure Build practice emphasises the importance of building software in a standardised, repeatable manner, and of doing so using secure components, including 3rd party software dependencies.

The first stream focuses on removing any subjectivity from the build process by striving for full automation. An automated build pipeline can include additional automated security checks such as SAST and DAST to gain further assurance and flag security regressions early by failing the build for example.

The second stream acknowledges the prevalence of software dependencies in modern applications. It aims to identify them and track their security status in order to contain the impact of their insecurity on an otherwise secure application. In an advanced form, it applies similar security checks to software dependencies as to the application itself.

# Overview

| | A: Build Process | B: Software Dependencies |
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

Keep a master copy of the build documentation in one central location accessible by all who require access. Avoid having multiple copies, some of which may become accidentally outdated.

Include all the tools required for the build to succeed in the documentation. Review these tools routinely to ensure that they are actively maintained (supported) and up to date with all security patches. Harden each tool's configuration so they are aligned with vendor or trusted third-party guidelines.

Include steps in the build process for signing the generated binaries with an appropriate certificate.


## Maturity 2
### Benefit
A fully automated build system allows easy integration of automated security checks at all stages of the build process, and ensures separate but consistent build environments.

### Activity
Implement the build process as an automated system, so that builds can be executed repeatedly and consistently. The process is reliable and does not require developer intervention, further reducing the likelihood of human error.

Automation makes it easier to include security checks during the build process. Implement static application security testing (SAST) to run as part of the build process. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A3.

The use of an automated system increases reliance on the build tools for security, and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Refer to [Implementation > Secure Deployment](i-secure-deployment) > B.

Ideally, handle code signing on a separate centralized server which does not expose the certificate to the system executing the build.


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
* Source information (link to repository, author's name, etc.)
* Open source or proprietary
* Support and maintenance status of the component

Check the records, whenever practical, to discover any dependencies with known vulnerabilities and update or replace them accordingly.

Ensure that providers actively maintain components, and that they deal with security vulnerabilities appropriately. Gain assurance when dealing with open source components, either through agreements with a commercial vendor, or other means, for example, by looking at repository activity, and the developers' responses to security issues raised by the community.



## Maturity 2
### Benefit
There is an audit trail of all 3rd party libraries used in development and you know and track their security status at any given time.

### Activity

Evaluate libraries to establish a whitelist of acceptable code dependencies approved for use within a project, team, or the wider organization.

Add licenses of dependency to the records.

Alternatively, introduce a central repository of approved dependencies that all software must be built from.

Review components regularly to ensure that:

* they remain correctly licensed
* no known and significant vulnerabilities are present
* there is support and active maintenance for the component
* there is a good business reason to include the component

You may need tools to automate some or all of this process, such as analyzing where the component is used, or checking for updates via a package manager. Consider using an automated tool to scan for vulnerable dependencies.




## Maturity 3
### Benefit
The application’s security level is more indicative of its real security, by consistently assessing its 3rd party components.

### Activity

Perform verification tests against dependencies in the same way you do against the target application. Refer to [Verification > Security Testing](../verification/v-security-testing). Depending on the build process maturity level, the discovery of significant issues might cause the build to fail.

Log results centrally, triage and validate findings appropriately as described in [Implementation > Defect Management](../implementation/i-defect-management). Vulnerable dependencies should be blacklisted and not permitted to be used during builds. Feed findings back to the vendor or open source project, following a set of ethical disclosure guidelines.

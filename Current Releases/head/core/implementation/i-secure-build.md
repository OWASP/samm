---
business_functions : Implementation
title : Secure Build
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 40%
weight: 1
type: security_practice
---
# Short Description
This practice focuses on creating a consistently repeatable build process and accounting for the security of dependencies.
# Long Description
The Secure Build practice emphasises the importance of building software in a standardised, repeatable manner, and of doing so using secure components, including 3rd party software dependencies.

The first stream focuses on removing any subjectivity from the build process by striving for full automation. An automated build pipeline can include additional automated security checks such as SAST and DAST to gain further assurance and flag security regressions early by failing the build for example.

The second stream acknowledges the prevalence of software dependencies in modern applications. It aims to identify them and track their security status in order to contain the impact of their insecurity on an otherwise secure application. In an advanced form, it applies similar security checks to software dependencies as to the application itself.

# Overview

| | A: Build Process | B: Software Dependencies |
|:---|:---|:---|
| Maturity 1 - Build process is repeatable and consistent | The build process is defined and consistent.   | All application dependencies are identified and documented |
| Maturity 2 - Build process is optimized and fully integrated into the workflow | The build process is fully automated and does not require intervention by the developer. | All components and dependencies are periodically reviewed for known security vulnerabilities and licensing issues |
| Maturity 3 - Build process helps prevent known defects from entering the production environment. | Security defects may trigger the build to stop executing | Components and dependencies are independently scanned for vulnerabilities |


# A: Build Process

## Maturity 1
### Benefit
Consistent and repeatable builds help developers focus on application-specific issues, and make it possible to automate builds in the future. This reduces the likelihood of human error during builds which can lead to security vulnerabilities.

### Activity
Define the build process, breaking it down into a set of clear instuctions to either be followed by a person or an automated tool. The process is complete so that the person or tool can follow it consistently each time and produce the same result.

The process definition does not include any secrets (specifically considering those needed during the build process). Use individual credentials that authenticate, authorize, and account to access build tools, and code repositories. Include shared secrets only where you cannot avoid it, managing them with care, preferably via an encrypted password vault.

The build process is stored centrally and accessible to any tools or people who might need access. Do not store or distribute multiple copies, some of which may become outdated.

Review any build tools routinely, ensuring that they are actively maintained by vendors and up-to-date with security patches. Harden each tool's configuration so that it is aligned with vendor guidelines and industry best practices.

Determine a value for each generated artifact that can be later used to verify its integrity, such as a signature or a hash. Protect this value and, if the artifact is signed, the private signing certificate.

### Questions

{{< questions "Secure Build" "A" 1 >}}

## Maturity 2

### Benefit
A fully automated build system allows easy integration of automated security checks at all stages of the build process, and ensures separate but consistent build environments.

### Activity
Implement the build process as an automated system, so that builds can be executed repeatedly and consistently. The build process is reliable and does not require developer intervention, further reducing the likelihood of human error.

Automation makes it easier to include security checks during the build process. Implement static application security testing (SAST) to run as part of the build process. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A3.

The use of an automated system to setup the build pipeline increases reliance on the build tools for security, and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Refer to [Implementation > Secure Deployment](i-secure-deployment) > B.

Sign generated artifacts using a certificate that identifies the organization or business unit that built it, such that its integrity and can be verified later.

### Questions

{{< questions "Secure Build" "A" 2 >}}

## Maturity 3
### Benefit
You can enforce a minimal clear security baseline in production. You can automatically deploy compliant applications.

### Activity

The build process includes automated security checks which break the build if they fail. Static Application Security Testing (SAST), with an appropriate and custom ruleset, is triggered each time the build process executes. Refer to guidance in [Verification > Security Testing](../v-security-testing) > A.

The organization sets an appropriate threshold for build failure based on the application's risk appetite. For instance, "High" and "Critical" vulnerabilities, or those with a CVSS score above 7.0. The types of vulnerabilities that the organization consider unacceptable in a build and their typical scores/ratings are considered when setting this threshold. An application with more sensitive functions might have a lower threshold, for instance. Trigger warnings for vulnerabilities below the threshold, and log them to a centralized system to track them and take actions.

Put in place  a mechanism to bypass this behaviour when a vulnerability has been accepted or mitigated to stop it from breaking the build. Carefully control and approve it, and log all exceptions with a rationale.

If any of the security tests like SAST are not carried out successfully, the build fails.

If technical limitations prevent the organisation from breaking the build automatically, achieve the same effect via other means, such as a clear policy for the developer not to deploy or execute a build with defects meeting certain criteria.

Handle code signing on a separate centralized server which does not expose the certificate to the system executing the build.

Where possible,  use a deterministic method that outputs byte-for-byte reproducible artifacts. Compare the binary output with that from other equivalent build systems to ensure it hasn't been tampered with.

### Questions

{{< questions "Secure Build" "A" 3 >}}

# B: Software Dependencies

## Maturity 1
### Benefit
You know which production components are at risk from a known vulnerable 3rd party dependencies. Dependencies include 3rd party software dependencies and operating system dependencies. 3rd party dependencies often inculde more dependencies (called _transitive dependencies_).

### Activity

Keep a record of all dependencies used throughout the target production environment. This is sometimes referred to as a Bill of Materials (BOM). In building these records, consider the various locations where dependencies might be specified:
- configuration files
- the project's directory on disk
- package management tool
- code (e.g. via an IDE that supports listing dependencies)

Consider that the different dependencies and aspects of the application may consume entirely different dependencies. For example, if the software package is a web app, cover both the server-side application code and client-side scripts.

The records include the following information about each dependency:

* Where it is used or referenced
* Why it is required
* Version used
* License
* Source information (link to repository, author's name, etc.)
* Open source or proprietary
* Support and maintenance status of the dependency

Check the records, whenever practical, to discover any dependencies with known vulnerabilities and update or replace them accordingly.

Ensure that providers actively maintain dependencies, and that they deal with security vulnerabilities appropriately. Gain assurance when dealing with open source dependencies, either through agreements with a commercial vendor, or other means, for example, by looking at repository activity, and the developers' responses to security issues raised by the community.

### Questions

{{< questions "Secure Build" "B" 1 >}}

## Maturity 2
### Benefit
There is an audit trail of all 3rd party dependencies used in development and you know and track their security status at any given time.

### Activity

Evaluate dependencies to establish a whitelist of acceptable code dependencies approved for use within a project, team, or the wider organization.

Alternatively, introduce a central repository of approved dependencies that all software must be built from.

Review dependencies regularly to ensure that:

* they remain correctly licensed
* no known and significant vulnerabilities are present
* there is support and active maintenance for the dependency
* there is a good business reason to include the dependency

You may need tools to automate some or all of this process, such as analyzing where the dependency is used, or checking for updates via a package manager. Consider using an automated tool to scan for vulnerable dependencies.

### Questions

{{< questions "Secure Build" "B" 2 >}}

### Quality Indicators
  * There is an automatically generated BOM for each software release
  * You can query the security status of all 3rd party dependencies anytime
  * There is a well-defined procedure for addressing vulnerabilities in 3rd party dependencies

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
The application’s security level is more indicative of its real security, by consistently assessing its 3rd party dependencies.

### Activity

Perform verification tests against dependencies in the same way you do against the target application. Refer to [Verification > Security Testing](../verification/v-security-testing). Depending on the build process maturity level, the discovery of significant issues might cause the build to fail.

Log results centrally, triage and validate findings appropriately as described in [Implementation > Defect Management](../implementation/i-defect-management). Vulnerable dependencies should be blacklisted and not permitted to be used during builds. Feed findings back to the vendor or open source project, following a set of ethical disclosure guidelines.

### Questions

{{< questions "Secure Build" "B" 3 >}}

### Quality Indicators
  * You assess the security of important 3rd party dependencies. The dependencies are either flagged during a risk analysis or threat modelling, or are of high value to business
  * The organisation actively contributes security improvements to important 3rd party dependencies (testing, reports, features)
  * Security is an important factor during 3rd party dependency selection
  * Important 3rd party dependencies have an assigned owner within the organisation. For sufficiently important dependencies, the owner may also be the dependency’s champion
  * You use multiple intelligence feeds to track the security of 3rd party dependencies
  * There is an active policy to minimise the number of different versions of 3rd party dependencies

<!--
#### Notes
Add other verification activities as well. [Generalised the content in question. CC]
-->

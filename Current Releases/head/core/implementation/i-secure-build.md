---
business_functions : Implementation
title : Secure Build
assignedto       : Daniel Kefer
complete          : 50%
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
| Maturity 1 - Build process is repeatable and consistent. | Create a formal definition of the build process so that it becomes consistent and repeatable. | Create recoreds with Bill of Materials of your applications and opportunistically analyze these. |
| Maturity 2 - Build process is optimized and fully integrated into the workflow. | Automate your build pipeline, secure the used tooling. Add security checks in the build pipeline. | Evaluate used dependencies and ensure timely reaction to situations posing risk to your applications. |
| Maturity 3 - Build process helps prevent known defects from entering the production environment. | Define mandatory security checks in the build process and ensure that building non-compliant artifacts fails. | Analyze used dependencies for security issues in a comparable way to your own code. |


# A: Build Process

## Maturity 1

### Benefit

Builds become consistent and repeatable, decreasing the risk of human errors leading to security issues.

### Activity

Define the build process, breaking it down into a set of clear instructions to either be followed by a person or an automated tool. The build process definition desribes the whole process end-to-end so that the person or tool can follow it consistently each time and produce the same result. The definition is stored centrally and accessible to any tools or people. Do not store or distribute multiple copies, some of which may become outdated.
The process definition does not include any secrets (specifically considering those needed during the build process). Use individual credentials that authenticate, authorize, and account to access build tools, and code repositories. Include shared secrets only where you cannot avoid it, managing them with care, preferably via an encrypted password vault. Determine a value for each generated artifact that can be later used to verify its integrity, such as a signature or a hash. Protect this value and, if the artifact is signed, the private signing certificate.
Review any build tools routinely, ensuring that they are actively maintained by vendors and up-to-date with security patches. Harden each tool’s configuration so that it is aligned with vendor guidelines and industry best practices.

#### Maturity Questions

{{< questions "Secure Build" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

An automated build process significantly mitigates the risk of human errors and decreases operational costs.

### Activity

Automate the build process so that builds can be executed consistently anytime. The build process shouldn't typically require any intervention, further reducing the likelihood of human error.
The use of an automated system increases reliance on security of the build tooling and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.
The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Sign generated artifacts using a certificate that identifies the organization or business unit that built it, such that its integrity and can be verified later.
Automation also simplifies including security checks to the build process. Implement static application security testing (SAST) to run as part of the build.

### Maturity Questions

{{< questions "Secure Build" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

It is ensured that only software complying to a defined security baseline gets built.

### Activity

Define static application security testing (SAST) checks suitable to be carried out during the build process, as well as minimum criteria for passing the build - these might differ according to the risk profiles of various applications. Include the respective security checks in the build and enforce breaking the build process in case the predefined criteria is not met. Trigger warnings for issues below the threshold and log these to a centralized system to track them and take actions. If sensible, implement a mechanism to bypass this behaviour if a vulnerability has been accepted or mitigated. However, ensure these cases are explicitely approved first and log their occurence together with a rationale.
If technical limitations prevent the organisation from breaking the build automatically, ensure the same effect via other measures, such as a clear policy and regular audit.
Handle code signing on a separate centralized server which does not expose the certificate to the system executing the build. Where possible, use a deterministic method that outputs byte-for-byte reproducible artifacts. Compare the binary output with that from other equivalent build systems to ensure it hasn’t been tampered with.

### Maturity Questions

{{< questions "Secure Build" "A" 3 >}}

#### Notes



# B: Software Dependencies

## Maturity 1

### Benefit

You can react to publicly disclosed vulnerabilities using knowledge about dependencies you are relying on.

### Activity

Keep a record of all dependencies used throughout the target production environment. This is sometimes referred to as a Bill of Materials (BOM). Consider that the different dependencies and aspects of the application may consume entirely different dependencies. For example, if the software package is a web application, cover both the server-side application code and client-side scripts. In building these records, consider the various locations where dependencies might be specified:

* configuration files 
* the project's directory on disk
* package management tool
* code (e.g. via an IDE that supports listing dependencies)

Gather the following information about each dependency:

* Where it is used or referenced
* Version used
* License
* Source information (link to repository, author's name, etc.)
* Support and maintenance status of the dependency

Check the records, whenever practical, to discover any dependencies with known vulnerabilities and update or replace them accordingly. Evaluate whether providers actively maintain dependencies, and if they deal with security vulnerabilities appropriately. Gain assurance when dealing with open source dependencies, either through agreements with a commercial vendor, or other means, for example, by looking at repository activity, and the developers' responses to security issues raised by the community.


### Maturity Questions

{{< questions "Secure Build" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

You have an overview about the state of publicly known issues of your applications' dependencies.

### Activity

Evaluate used dependencies and establish a whitelist of acceptable ones approved for use within a project, team, or the wider organization according to a defined set of criteria. If possible, introduce a central repository of approved dependencies that all software must be built from. 

Review used dependencies regularly to ensure at least that: 

* they remain correctly licensed
* no known and significant vulnerabilities impacting your applications are present
* the dependency is still actively supported and maintained
* you are using a current version
* there is a valid reason to include the dependency

React timely and appropriately to non-conformities by handling these as defects if sensible. You will most probably need tools to automate some or all of this process, such as analyzing where the dependency is used, or checking whether a newer version is available via a package manager. Consider also using an automated tool to scan for vulnerable dependencies and assign identified issues to the respective development teams. 


### Maturity Questions

{{< questions "Secure Build" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Security issues in used dependencies are handled comparably to those in your own code.

### Activity

Maintain a whitelist of approved dependencies and versions, and ensure that the build process fails upon a presence of dependency not being on the list. Include a sign-off process for handling exceptions to this rule if sensible. 

Perform security verification activites against dependencies on the whitelist in a comparable way to the target applications themselves (esp. using SAST and analyzing transitive dependencies). Ensure that these checks also aim to identify possible backdoors or easter eggs in the dependencies. Establish vulnerability disclosure processes with the dependency authors including SLAs for fixing issues. In case enforcing SLAs is not realistic (e.g. with open source vulnerabilities), ensure that the most probable cases are expected and you are able to implement compensating measures in a timely manner. Implement regression tests for the fixes to identified issues.

Track all identified issues and their state using your defect tracking system. Integrate your build pipeline with this system to enable failing the build whenever the included dependencies contain issues above a defined criticality level. 


### Maturity Questions

{{< questions "Secure Build" "B" 3 >}}

#### Notes


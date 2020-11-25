---
title: Build Process
type: stream
url: model/implementation/secure-build/stream-a/
business_function: Implementation
business_function_url: implementation
practice: Secure Build
stream: A
description: Implementation / Secure Build
keywords: ["Business function", "Practice", "Implementation", "Secure Build"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Builds become consistent and repeatable, decreasing the risk of human errors leading to security issues.
        activity: |
            Define the build process, breaking it down into a set of clear instructions to either be followed by a person or an automated tool. The build process definition describes the whole process end-to-end so that the person or tool can follow it consistently each time and produce the same result. The definition is stored centrally and accessible to any tools or people. Avoid storing multiple copies as they may become unaligned and outdated.

            The process definition does not include any secrets (specifically considering those needed during the build process).

            Review any build tools, ensuring that they are actively maintained by vendors and up-to-date with security patches. Harden each tool’s configuration so that it is aligned with vendor guidelines and industry best practices.

            Determine a value for each generated artifact that can be later used to verify its integrity, such as a signature or a hash. Protect this value and, if the artifact is signed, the private signing certificate.

            Ensure that build tools are routinely patched and properly hardened.

        question: Is your full build process formally described?
        quality_criteria:
            - You have enough information to recreate the build processes
            - Your build documentation up to date
            - Your build documentation is stored in an accessible location
            - Produced artifact checksums are created during build to support later verification
            - You harden the tools that are used within the build process

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            An automated build process significantly mitigates the risk of human errors and decreases operational costs.
        activity: |
            Automate the build process so that builds can be executed consistently anytime. The build process shouldn't typically require any intervention, further reducing the likelihood of human error.

            The use of an automated system increases reliance on security of the build tooling and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

            The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Sign generated artifacts using a certificate that identifies the organization or business unit that built it, such that its integrity and can be verified later.

            Finally, add appropriate automated security checks (e.g. using SAST tools) in the pipeline to leverage the automation for security benefit.

        question: Is the build process fully automated?
        quality_criteria:
            - The build process itself doesn't require any human interaction
            - Your build tools are hardened as per best practice and vendor guidance
            - You encrypt the secrets required by the build tools and control access based on the principle of least privilege

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            It is ensured that only software complying to a defined security baseline gets built.
        activity: |
            Define security checks suitable to be carried out during the build process, as well as minimum criteria for passing the build - these might differ according to the risk profiles of various applications. Include the respective security checks in the build and enforce breaking the build process in case the predefined criteria are not met. Trigger warnings for issues below the threshold and log these to a centralized system to track them and take actions. If sensible, implement an exception mechanism to bypass this behaviour if the risk of a particular vulnerability has been accepted or mitigated. However, ensure these cases are explicitely approved first and log their occurence together with a rationale.

            If technical limitations prevent the organisation from breaking the build automatically, ensure the same effect via other measures, such as a clear policy and regular audit.

            Handle code signing on a separate centralized server which does not expose the certificate to the system executing the build. Where possible, use a deterministic method that outputs byte-for-byte reproducible artifacts.

        question: Do you enforce automated security checks in your build processes?
        quality_criteria:
            - Builds fail if the application doesn't meet a predefined security baseline
            - You have a maximum accepted severity for vulnerabilties
            - You log warnings and failures in a centralized system
            - You select and configure tools to evaluate each application against its security requirements at least once a year

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

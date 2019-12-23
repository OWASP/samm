---
title: Software Dependencies
type: stream
url: model/implementation/secure-build/stream-b/
business_function: Implementation
business_function_url: implementation
practice: Secure Build
stream: B
description: Implementation / Secure Build
keywords: ["Business function", "Practice", "Implementation", "Secure Build"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You can react to publicly disclosed vulnerabilities using knowledge about dependencies you are relying on.
        activity: |
            Keep a record of all dependencies used throughout the target production environment. This is sometimes referred to as a Bill of Materials (BOM). Consider that different components of the application may consume entirely different dependencies. For example, if the software package is a web application, cover both the server-side application code and client-side scripts. In building these records, consider the various locations where dependencies might be specified such as configuration files, the project's directory on disk, a package management tool or the actual code (e.g. via an IDE that supports listing dependencies).

            Gather the following information about each dependency&#58;

            * Where it is used or referenced
            * Version used
            * License
            * Source information (link to repository, author's name, etc.)
            * Support and maintenance status of the dependency

            Check the records to discover any dependencies with known vulnerabilities and update or replace them accordingly.

        question: Do you have solid knowledge about dependencies you're relying on?
        quality_criteria:
            - You have a current bill of materials (BOM) for every application
            - You can quickly find out which applications are affected by a particular CVE
            - You have analyzed, addressed, and documented findings from dependencies at least once in the last three months

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            You have an overview about the state of publicly known issues of your applications' dependencies.
        activity: |
            Evaluate used dependencies and establish a list of acceptable ones approved for use within a project, team, or the wider organization according to a defined set of criteria.
            Introduce a central repository of dependencies that all software can be built from.

            Review used dependencies regularly to ensure that&#58;

            * they remain correctly licensed
            * no known and significant vulnerabilities impacting your applications are present
            * the dependency is still actively supported and maintained
            * you are using a current version
            * there is a valid reason to include the dependency

            React timely and appropriately to non-conformities by handling these as defects. Consider using an automated tool to scan for vulnerable dependencies and assign the identified issues to the respective development teams.

        question: Do you handle 3rd party dependency risk by a formal process?
        quality_criteria:
            - You keep a list of approved dependencies that meet predefined criteria
            - You automatically evaluate dependencies for new CVEs and alert responsible staff
            - You automatically detect and alert to license changes with possible impact on legal application usage
            - You track and alert to usage of unmaintained dependencies
            - You reliably detect and remove unnecessary dependencies from the software

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Security issues in used dependencies are handled comparably to those in your own code.
        activity: |
            Maintain a whitelist of approved dependencies and versions, and ensure that the build process fails upon a presence of dependency not being on the list. Include a sign-off process for handling exceptions to this rule if sensible.

            Perform security verification activites against dependencies on the whitelist in a comparable way to the target applications themselves (esp. using SAST and analyzing transitive dependencies). Ensure that these checks also aim to identify possible backdoors or easter eggs in the dependencies. Establish vulnerability disclosure processes with the dependency authors including SLAs for fixing issues. In case enforcing SLAs is not realistic (e.g. with open source vulnerabilities), ensure that the most probable cases are expected and you are able to implement compensating measures in a timely manner. Implement regression tests for the fixes to identified issues.

            Track all identified issues and their state using your defect tracking system. Integrate your build pipeline with this system to enable failing the build whenever the included dependencies contain issues above a defined criticality level.

        question: Do you prevent build of software if it's affected by vulnerabilities in dependencies?
        quality_criteria:
            - Your build system is connected to a system for tracking 3rd party dependency risk, causing build to fail unless the vulnerability is evaluated to be a false positive or the risk is explicitly accepted
            - You scan your dependencies using a static analysis tool
            - You report findings back to dependency authors using an established responsible disclosure process
            - Using a new dependency not evaluated for security risks causes the build to fail

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

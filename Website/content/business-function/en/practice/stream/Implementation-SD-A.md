---
title: Deployment Process
type: stream
url: model/implementation/secure-deployment/stream-a/
business_function: Implementation
business_function_url: implementation
practice: Secure Deployment
stream: A
description: Implementation / Secure Deployment
keywords: ["Business function", "Practice", "Implementation", "Secure Deployment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            The risk of human errors during deployment leading to security issues is significantly reduced.
        activity: |
            Define the deployment process over all stages, breaking it down into a set of clear instructions to either be followed by a person or an automated tooling. The deployment process definition should describe the whole process end-to-end so that it can be consistently followed each time to produce the same result. The definition is stored centrally and accessible to all relevant personnel. Do not store or distribute multiple copies, some of which may become outdated.

            Deploy applications to production either using an automated process, or manually by personnel other than the developers. Ensure that developers do not need direct access to the production environment for application deployment.

            Review any deployment tools, ensuring that they are actively maintained by vendors and up to date with security patches. Harden each tool’s configuration so that it is aligned with vendor guidelines and industry best practices. Given that most of these tools require access to the production environment, their security is extremely critical. Ensure the integrity of the tools themselves and the workflows they follow, and configure access rules to these tools according to the least privilege principle.

            Have personnel with access to the production environment go through at least a minimum level of training or certification to ensure their competency in this matter.

        question: Do you use repeatable deployment processes?
        quality_criteria:
            - You have enough information to run the deployment processes
            - Your deployment documentation up to date
            - Your deployment documentation is accessible to relevant stakeholders
            - You ensure that only defined qualified personnel can trigger a deployment
            - You harden the tools that are used within the deployment process

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            The deployment process is fully repeatable, software with obvious security issues doesn't get deployed to production.
        activity: |
            Automate the deployment process to cover various stages, so that no manual configuration steps are needed and the risk of isolated human errors is eliminated. Ensure and verify that the deployment is consistent over all stages.

            Integrate automated security checks in your deployment process, e.g. using Dynamic Analysis Security Testing (DAST) and vulnerability scanning tools. Also, verify the integrity of the deployed artefacts where this makes sense. Log the results from these tests centrally and take any necessary actions. Ensure that in case any defects are detected, relevant personnel is notified automaticaly. In case any issues exceeding predefined criticality are identified, stop or reverse the deployment  either automatically, or introduce a separate manual approval workflow so that this decision is recorded, containing an explanation for the exception.

            Account for and audit all deployments to all stages. Have a system in place to record each deployment, including information about who conducted it, the software version that was deployed, and any relevant variables specific to the deploy.

        question: Are deployment processes automated and employing security checks?
        quality_criteria:
            - Deployment processes are automated on all stages
            - Deployment includes automated security testing procedures
            - You alert responsible staff to identified vulnerabilities
            - You have logs available for your past deployments for a defined period of time

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            The deployment process automatically validates the integrity of all software artifacts.
        activity: |
            Take advantage of binaries being signed at the build time and include automatic verification of the integrity of software being deployed by checking their signatures against trusted certificates. This may include binaries developed and built in-house, as well as third-party artifacts. Do not deploy artifacts if their signatures cannot be verified, including those with invalid or expired certificates.

            If the list of trusted certificates includes third-party developers, check them periodically, and keep them in line with the organisation’s wider governance surrounding trusted third-party suppliers.

            Manually approve the deployment at least once during an automated deployment. Whenever a human check is significantly more accurate than an automated one during the deployment process, go for this option.

        question: Do you consistently validate the integrity of deployed artifacts?
        quality_criteria:
            - You prevent or roll back deployment if you detect an integrity breach
            - The verification is done against signatures created during the build time
            - If checking of signatures is not possible (e.g. externally build software), you introduce compensating measures

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

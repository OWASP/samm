---
title: Secret Management
type: stream
url: model/implementation/secure-deployment/stream-b/
business_function: Implementation
business_function_url: implementation
practice: Secure Deployment
stream: B
description: Implementation / Secure Deployment
keywords: ["Business function", "Practice", "Implementation", "Secure Deployment"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Risk of leaking production secrets is reduced by introduction of basic access control measures.
        activity: |
            Version and protect configuration files just like source code. Developers do not have access to secrets or credentials for production environments. Someone responsible for the production environment adds production secrets to configuration files during the deployment process.
            Do not keep production secrets in configuration files for development or testing environments, as such environments may have a significantly lower security posture. Do not keep secrets in configuration files stored in code repositories.
            Before deployment, store sensitive credentials and secrets for production systems with encryption-at-rest and appropriate key management. Consider using a purpose-built tool/vault for this data. Handle key management carefully so only personnel with responsibility for production deployments are able to access this data (the principle of least privilege).
            Encrypt secrets at rest in configuration files during deployment. Manage keys so the application can access the secrets while running, but an attacker who obtains the configuration files alone cannot decipher them.

        question: Do you limit access to application secrets according to the least privilege principle?
        quality_criteria:
            - You store production secrets protected in a secured location
            - Developers do not have access to production secrets
            - Production secrets are not available in non-prodcution environments

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Risk of leaking production secrets is mitigated by removing any manual interactions during deployment.
        activity: |
            Have an automated process to add credentials and secrets appropriate for the target environment to configuration files during the deployment process. This way, developers and deployers do not see or handle those sensitive values.
            Make the system used to store and process the secrets and credentials robust from a security perspective. Encrypt secrets at rest and during transport. Users who configure this system and the secrets it contains are subject to the principle of least privilege. For example, a developer might need to manage the secrets for a development environment, but not a user acceptence test or production environment.
            Ensure that all access to secrets (both reading and writing) is audited and logged in a central infracture.

        question: Do you inject production secrets into configuration files dynamically?
        quality_criteria:
            - Under normal circumstances, no humans access secrets during deployment procedures
            - Any abnormal access to secrets is logged and alerted

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Risk of leaking production secrets is mitigated by removing all manual interactions and regular regeneration.
        activity: |
            Where secrets are not predefined or dependant on another system, generate them during the deployment process. Follow appropriate best practices such as using a cryptographically secure pseudorandom number generator if you generate this value randomly. Alert any manual access to secrets in the production environment.
            Implement checks that detect the presence of secrets in code repositories and files, and run them periodically. Configure tools to look for known strings and unknown high entropy strings, for instance. In systems such as code repositories, where there is a history, include the versions in the checks.
            Mark potential secrets you discover as sensitive values, and either remove them or render them non-sensitive. If you cannot remove them from a historic file in a code repository, for example, you may need to refresh the value on the system that consumes the secret. This way, if an attacker discovers the secret, it will not be useful to them.

        question: Do you regenerate application secrets during deployment?
        quality_criteria:
            - Secrets are generated and synchronized using a vetted solution
            - Detection of a secret in a configuration file fails the deployment
            - Any manual access to the generated secrets triggers an alert

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

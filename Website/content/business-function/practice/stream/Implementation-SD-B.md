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
            Risk of leaking production secrets is reduced by introduction of basic protection measures.
        activity: |
            Version and protect configuration files just like source code. Developers should not have access to secrets or credentials for production environments. Have a mechanism in place for the production environment to securely add production secrets to configuration files and adequately protect them. This can for instance be achieved by encrypting the production secrets contained in the configuration files.

            Do not use production secrets in configuration files for development or testing environments, as such environments may have a significantly lower security posture. Similarly, do not keep secrets in configuration files stored in code repositories.

            Store sensitive credentials and secrets for production systems with encryption-at-rest at all times. Consider using a purpose-built tool/vault for this. Handle key management carefully so only personnel with responsibility for production deployments are able to access this data (the principle of least privilege).

#Encrypt secrets at rest in configuration files during deployment. Manage keys so the application can access the secrets while running, but an attacker who obtains the configuration files alone cannot.

        question: Do you limit access to application secrets according to the least privilege principle?
        quality_criteria:
            - You store production secrets protected in a secured location
            - Developers do not have access to production secrets
            - Production secrets are not available in non-production environments

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            Risk of leaking production secrets is reduced by removing them from source code files.
        activity: |
            Have an automated process to add credentials and secrets to configuration files during the deployment process to respective stages. This way, developers and deployers do not see or handle those sensitive values.

            Implement checks that detect the presence of secrets in code repositories and files, and run them periodically. Configure tools to look for known strings and unknown high entropy strings, for instance. In systems such as code repositories, where there is a history, include the versions in the checks.   Mark potential secrets you discover as sensitive values, and either remove them or render them non-sensitive. If you cannot remove them from a historic file in a code repository, for example, you may need to refresh the value on the system that consumes the secret. This way, if an attacker discovers the secret, it will not be useful to them.

            Make the system used to store and process the secrets and credentials robust from a security perspective. Encrypt all secrets at rest and in transit. Users who configure this system and the secrets it contains are subject to the principle of least privilege. For example, a developer might need to manage the secrets for a development environment, but not a user acceptance test or production environment.

        question: Do you inject production secrets into configuration files dynamically?
        quality_criteria:
            - Under normal circumstances, no humans access secrets during deployment procedures
            - You log and alert to any abnormal access to secrets

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Risk of leaking production secrets is reduced by limiting their use to run-time only and by regenerating regularly.
        activity: |
            Whereever possible, rely on on-demand solutions to manage access to the secrets required to execute the application. This is typically achieved by means of a vaulting solution with an query interface that can be used by the application based on a bootstrapping secret.

            Implement lifecycle management for production secrets, and ensure the generation of new secrets as much as possible, and for every application instance.

            Ensure that all access to secrets (both reading and writing) is audited and logged in a central infrastructure.

        question: Do you use run-time techniques to maximally control access to application secrets?
        quality_criteria:
            - You generate and synchronize secrets using a vetted solution
            - Secrets are different between different application instances
            - Detection of a secret in a configuration file makes the deployment fail

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

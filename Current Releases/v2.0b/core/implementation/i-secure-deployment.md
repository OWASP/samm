---
business_functions : Implementation
title : Secure Deployment
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 40%
weight: 2
type: security_practice
---

# Short Description
This practice focuses on automatically securing deployments to the production environment and all required secrets.
# Long Description
One of the final stages in delivering secure software is ensuring the security and integrity of developed applications are not compromised during their deployment. To this end, the practice’s first stream focuses on removing manual error by automating the deployment process as much as possible, and making its success contingent upon the outcomes of integrated security verification checks. It also fosters Separation of Duties by making adequately trained, non-developers responsible for deployment.

The second stream goes beyond the mechanics of deployment, and focuses on protecting the privacy and integrity of sensitive data, such as passwords, tokens, and other secrets, required for applications to operate in production environments. In its simplest form, suitable production secrets are moved from repositories and configuration files into adequately managed digital vaults. In more advanced forms, secrets are dynamically generated at deployment time and routine processes detect and mitigate the presence of any unprotected secrets in the environment.

# Overview

| | A: Deployment Process | B: Secret Management |
|:---|:---|:---|
| Maturity 1 - Deployment processes are fully documented | Deployment is automated or done by someone other than the developer. | Production secrets are encrypted and not handled by developers |
| Maturity 2 - Deployment processes include security verification milestores | Integration of security verification in deployment (e.g. binary static code analysis / AV scan) | Secrets are dynamically included during the deployment process |
| Maturity 3 - Deployment process is fully automated and incorporates automated verification of all critical milestones | Integrity of the code is verified prior to deployment | Files and repositories are checked periodically for secrets that should be protected |


# A: Deployment Process

## Maturity 1
### Benefits
Only qualified personnel, different from developers can deploy to production environments
### Activity
Deploy applications via automated processes, or manually by people other than the developers. Developers do not have access to production environments.

Choose any tools used during deployment carefully and harden them appropriately. If these tools require access to the production environment, their security is extremely critical. Ensure the integrity of the tools themselves and the workflows they follow.

Handle access to the production credentials and secrets for the tools and engineer conducting the deployment with care - e.g. according to the principle of least privilege, and encrypted at rest with keys held in a trusted platform module (TPM) or hardware security module (HSM).

People with access to production have to go through a minimum level of training or certification to ensure competency in this sensitive environment. Refer to [Governance > Education & Guidance](../governance/g-education-guidance/).


## Maturity 2
### Benefits
The deployment process is fully or partially automated and can be halted based on the results of integrated security verification tests.
### Activity

Fully or partially automate deployment to reduce the need for manual changes on production, and to reduce the chances of human error.

Deployments include appropriate automated security checks such as DAST and malware scanning. Notify relevant people of any defects automatically.Stop or reverse the deployment automatically, or as part of a manual approval workflow, if the defect exceeds a certain threshold of severity or risk. Log the results from these tests centrally and take any necessary actions.

Account for and audit all deployments. Have a system in place to record each deployment, including information about who conducted it, the software version that was deployed, and any relevant variables specific to the deploy.


## Maturity 3
### Benefits
The deployment process automatically validates the integrity of its artifacts.

### Activity
The deployment process automatically verifies the integrity of the binaries by checking their signatures against trusted certificates. Sign binaries at build time. This may include binaries developed and built in-house, as well as third-party libraries. Do not deploy binary signatures that cannot be verified, including those with invalid or expired certificates.

If the list of trusted certificates includes third-party developers, check them periodically, and keep them in line with the organisation's wider governance surrounding trusted third-party suppliers.

Manually approve the deployment at least once during an automated deployment. Whenever a human check is significantly more accurate than an automated one during the deployment process, do it manually.


# B: Configurations/Secret Management

## Maturity 1
### Benefits
Production secrets are adequately protected in a digital vault, inaccessible to developers.

### Activity
Version and protect configuration files just like source code. Developers do not have access to secrets or credentials for production environments. Someone responsible for the production environment adds production secrets to configuration files during the deployment process.

Do not keep production secrets in configuration files for development or testing environments, as such environments may have a significantly lower security posture. Do not keep secrets in configuration files stored in code repositories.

Before deployment, store sensitive credentials and secrets for production systems with encryption-at-rest and appropriate key management. Consider using a purpose-built tool/vault for this data. Handle key management carefully so only personnel with responsibility for production deployments are able to access this data (the principle of least privilege).

Encrypt secrets at rest in configuration files during deployment. Manage  keys so the application can access the secrets while running, but an attacker who obtains the configuration files alone cannot decipher them.


## Maturity 2
### Benefits
Secrets are dynamically extracted from the digital vault for use in deployment.

### Activity
Have an automated process to add credentials and secrets appropriate for the target environment to configuration files  during the deployment process. This way, developers and deployers do not  see or handle those sensitive values.


Make the system used to store and process the secrets and credentials robust from a security perspective. Encrypt secrets at rest and during transport. Users who configure this system and the secrets it contains are subject to the principle of least privilege. For example, a developer might need to manage the secrets for a development environment, but not a UAT or production environment.



## Maturity 3
### Benefits
Secrets are dynamically generated during deployment and a process routinely checks for and mitigates unprotected secrets.

### Activity
Where secrets are not predefined or dependant on another system, generate them during the deployment process. Follow appropriate best practices such as using a cryptographically secure pseudorandom number generator if you generate this value randomly.

Implement checks that detect the presence of secrets in code repositories and files, and run them periodically. Configure tools to look for known strings and unknown high entropy strings, for instance. In systems such as code repositories, where there is a history, include the versions in the checks.

Mark potential secrets you discover as sensitive values, and either remove them or render them non-sensitive. If you cannot remove them, from  a historic file in a code repository, for example, you may need to refresh the value on the system that consumes the secret. This way, if an attacker discovers the secret, it will not be useful to them.

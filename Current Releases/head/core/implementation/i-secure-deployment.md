---
business_functions : Implementation
title : Secure Deployment
assignedto       : Daniel Kefer
complete          : 50%
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
| Maturity 1 - Deployment processes are fully documented. | Formalize the deployment process and secure the used tooling and processes. | Introduce basic access control measures to the systems storing your production secrets. |
| Maturity 2 - Deployment processes include security verification milestones. | Automate the deployment process over all stages and introduce sensible security verification tests. | Inject secrets dynamically during deployment process from hardened storages and audit all human access to them. |
| Maturity 3 - Deployment process is fully automated and incorporates automated verification of all critical milestones. | Automatically verify integrity of all deployed software, indenendently on whether it's internally or externally developed. | Regenerate secrets dynamically during every deployment using well-hardened process wherever possible. |


# A: Deployment Process

## Maturity 1

### Benefit

The risk of human errors done during deployment and leading to security issues is significantly mitigated.

### Activity

Define the deployment process over all stages, breaking it down into a set of clear instructions to either be followed by a person or an automated tooling. The deployment process definition should desribe the whole process end-to-end so that it can be consistently followed each time and produce the same result. The definition is stored centrally and accessible to all relevant personnel. Do not store or distribute multiple copies, some of which may become outdated.
Deploy applications to production either using an automated process, or manually by personnel other than the developers. Ensure that developers do not need direct access to production environment for application deployment.
Choose any tools used during deployment carefully and harden them appropriately, including ensuring defined availability requirements (possibly leading e.g. to a redundant setup). Given that most of these tools require access to the production environment, their security is extremely critical. Ensure the integrity of the tools themselves and the workflows they follow, and configure access rules to these tools according to the least privilege principle.
Have personnel with access to production environment go through at least a minimum level of training or certification to ensure their competency in this sensitive environment.

#### Maturity Questions

{{< questions "Secure Deployment" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

The deployment process is fully repeatable, software with obvious security issues doesn't get deployed to production.

### Activity

Automate deployment process to various stages, so that no manual configuration steps are needed and the risk of isolated human errors is eliminated. Ensure and verify (e.g. using hash values) that the development is consistent over all stages. 

Integrate automated security checks in your deployment process, e.g. using Dynamic Analysis Security Testing (DAST) and vulnerability scanning tools. Log the results from these tests centrally and take any necessary actions. Ensure that in case any defects are detected, relevant personnel is notified automaticaly. In case any issues exceeding predefined criticality are identified, stop or reverse the deployment  either automatically, or introduce a separate manual approval workflow so that this decision is recorded, containing an explanation for the exception. 

Account for and audit all deployments to all stages. Have a system in place to record each deployment, including information about who conducted it, the software version that was deployed, and any relevant variables specific to the deploy.


### Maturity Questions

{{< questions "Secure Deployment" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

The deployment process automatically validates the integrity of all software artifacts.

### Activity

Take advantage of binaries being signed at the build time and include automatic verification of the integrity of software being deployed by checking their signatures against trusted certificates. This may include binaries developed and built in-house, as well as third-party artifacts. Do not deploy artifacts if their signatures cannot be verified, including those with invalid or expired certificates.

If the list of trusted certificates includes third-party developers, check them periodically, and keep them in line with the organisation’s wider governance surrounding trusted third-party suppliers.

Manually approve the deployment at least once during an automated deployment. Whenever a human check is significantly more accurate than an automated one during the deployment process, go for this option.


### Maturity Questions

{{< questions "Secure Deployment" "A" 3 >}}

#### Notes



# B: Secret Management

## Maturity 1

### Benefit

Risk of leaking production secrets is reduced by introduction of basic access control measures.

### Activity

Version and protect configuration files just like source code. Developers do not have access to secrets or credentials for production environments. Someone responsible for the production environment adds production secrets to configuration files during the deployment process.
Do not keep production secrets in configuration files for development or testing environments, as such environments may have a significantly lower security posture. Do not keep secrets in configuration files stored in code repositories.
Before deployment, store sensitive credentials and secrets for production systems with encryption-at-rest and appropriate key management. Consider using a purpose-built tool/vault for this data. Handle key management carefully so only personnel with responsibility for production deployments are able to access this data (the principle of least privilege).
Encrypt secrets at rest in configuration files during deployment. Manage keys so the application can access the secrets while running, but an attacker who obtains the configuration files alone cannot decipher them.

### Maturity Questions

{{< questions "Secure Deployment" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Risk of leaking production secrets is mitigated by removing any manual interactions during deployment.

### Activity

Have an automated process to add credentials and secrets appropriate for the target environment to configuration files during the deployment process. This way, developers and deployers do not see or handle those sensitive values.
Make the system used to store and process the secrets and credentials robust from a security perspective. Encrypt secrets at rest and during transport. Users who configure this system and the secrets it contains are subject to the principle of least privilege. For example, a developer might need to manage the secrets for a development environment, but not a user acceptence test or production environment.
Ensure that all access to secrets (both reading and writing) is audited and logged in a central infracture.

### Maturity Questions

{{< questions "Secure Deployment" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Risk of leaking production secrets is mitigated by removing all manual interactions and regular regeneration.

### Activity

Where secrets are not predefined or dependant on another system, generate them during the deployment process. Follow appropriate best practices such as using a cryptographically secure pseudorandom number generator if you generate this value randomly. Alert any manual access to secrets in the production environment.
Implement checks that detect the presence of secrets in code repositories and files, and run them periodically. Configure tools to look for known strings and unknown high entropy strings, for instance. In systems such as code repositories, where there is a history, include the versions in the checks.
Mark potential secrets you discover as sensitive values, and either remove them or render them non-sensitive. If you cannot remove them from a historic file in a code repository, for example, you may need to refresh the value on the system that consumes the secret. This way, if an attacker discovers the secret, it will not be useful to them.

### Maturity Questions

{{< questions "Secure Deployment" "B" 3 >}}

#### Notes


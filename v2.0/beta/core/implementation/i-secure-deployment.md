---
business_functions : Implementation
title : Secure Deployment
assignedto       : Chris Cooper (chris.cooper@owasp.org)
complete          : 0%
business_functions_weight: 2
type: security_practice
---


# Overview

| | A: Deployment Process | B: Configurations/Secret Management |
|:---|:---|:---|
| Maturity 1 - Deployment processes are fully documented | Deployment is automated or done by someone other than the developer. | Configuration files are versioned and protected |
| Maturity 2 - Deployment processes include security verification milestores | Integration of security verification in deployment (e.g. binary static code analysis / AV scan) | Configuration files do not contain unencrypted sensitive configuration information |
| Maturity 3 - Deployment process is fully automated and incorporates automated verification of all critical milestones | Integrity of the code is verified prior to deployment | Deployment process automatically generates / initializes credentials and authentication keys |


# A: Deployment Process

## Maturity 1
### Activity
Applications are deployed via automated processes, or manually by persons other than the developers. Developers should not have access to production environments. 

Any tools utilised during deployment should be carefully chosen and hardened appropriately. These tools may require access to the production environment, which makes the security of the tools themselves extremely critical. This includes ensuring that the integrity of the tools themselves and the workflows that they are programmed to follow.

The tools and/or engineer conducting the deployment will require access to production credentials and secrets. These should be handled with care - e.g. according to the principle of least privilege, and encrypted at rest with keys held in a trusted platform module (TPM) or hardware security module (HSM).

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
- What if deployment has to been done by devs? I.e. small org?
- Are we assuming that the deployment is to production?
- Separation of roles/responsibilities regardless of size/process? How to marry this with DevOps practices? Whenever 3rd party certification is involved - it has to be done by a separate "department" (compliance requirement = segregation of duties)? consider 4-eyes principle? require training before being granted access?

ACTION: review this stream completely

#### Guidance


## Maturity 2
### Activity

Deployment is fully or at least semi-automated for consistency, to reduce the need for manual changes on production, and to ultimately reduce the chances of human error.

Deployments include appropriate automated security checks such as DAST and malware scanning. Relevant persons should be notified automatically of any defects. The deployment should be stopped or reversed automatically, or as part of a manual approval workflow, if the defect exceeds a certain threshold of severity or risk. The results from these tests should be logged centrally and actioned as necessary.

All deployments are accounted for and are auditable. A system is in place to record each deployment, including information about who conducted the deploy, the software version that was deployed, and any relevant variables that were specific to the deploy. 

### Maturity Questions

#### Q 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**

- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


#### Guidance


## Maturity 3
### Activity
The deployment process automatically verifies the integrity of the binaries by checking their signatures against trusted certificates. Binaries should have been signed at build time. This may include binaries that have been developed and built in-house, as well as third-party libraries. Binary signatures that cannot be verified, including if the certificate is invalid or has expired, should not be deployed.

If the list of trusted certificates includes third-party developers, these should be checked periodically, and maintained in-line with the organisation's wider governance surrounding trusted third-party suppliers.

A human should manually approve the deployment on at least one occasion during an automated deployment. Manual interventions should be inserted into the otherwise automated deployment process for checking and approval. These interventions should occur at any points where such human checks could be significantly more accurate than an automated one would be. 

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Does this activity deserve a whole stream instead of only one activity?

Partial deployment to test it in prodution to prevent DOS/quality issues

#### Guidance



# B: Configurations/Secret Management

## Maturity 1
### Activity
Configuration files should be versioned and protected just like source code. However, developers should not have access to secrets or credentials for production environments. Production secrets should be added into configuration files during the deployment process by someone who is responsible for the production environment.

Production secrets should not be kept (even unused) in configuration files used within development or testing environments, as such environments may have a significantly lower security posture. Equally, they should not remain in configuration files that are stored in code repositories.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
- [CC] I've removed: "Configuration files should be treated as code" ... I think sensitive values in configuration files should always be protected, even at level 1.
- What about companies who are too small to have seperate people doing dev and managing prod?
Level 1: you cannot have plaintext credentials in code?  Config file separate?

#### Guidance

## Maturity 2
### Activity
Before deployment, sensitive credentials and secrets for production systems should be stored with encryption-at-rest and appropriate key management. The organisation should consider using a purpose-built tool/vault for this data. Key management should be handled carefully to ensure that only personnel with responsibility for production deployments are able to access this data (the principle of least privilege).

Where possible during deployment, secrets should be encrypted-at-rest in configuration files as well. There should be appropriate key management such that the application can access the secrets whilst it is running, but an attacker who obtains the configuration files alone would not be able to decipher them.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
procedures when this happens? how to resolve this? 
Protection of secrets in config file 

#### Guidance


## Maturity 3
### Activity
Credentials and secrets appropriate for the target environment are added to configuration files dynamically during the deployment process, in such a way that the deployer has no need to see or handle those sensitive values. I.e. this should be an automated process.

The developer should have no need to view or access those credentials or secrets, particularly from production systems, since they will be included automatically during deploy.

The system used to store and process the secrets and credentials must be robust from a security perspective. Secrets should be encrypted at rest and during transport. Users who configure this system and the secrets it contains should be subject to the principle of least privilege. For example, in some cases it might be appropriate for a developer to manage the secrets pertaining to a development environment, but not a UAT or production enviornment.

Where secrets are not pre-defined or dependant on another system, they should be generated afresh during the deployment process. This mechanism should meet appropriate best practices such as using a cryptographically secure pseudorandom number generator if the value is to be randomly generated.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
push parts of this to level 2 and concentrate level 3 on validation and improvement of this process 
detection of secrets in code? e.g. looking for strings with a high level of entropy. 
a mature process when this happens anyway? part of incident process?


#### Guidance
truffleHog reference?
also go into container level when appropriate


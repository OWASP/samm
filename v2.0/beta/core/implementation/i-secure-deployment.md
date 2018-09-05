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
| Maturity 3 - Deployment process if fully automated and incorporates automated verification of all critical milestones | Integrity of the code is verified prior to deployment | Deployment process automatically generates / initializes credentials and authentication keys |


# A: Deployment Process

## Maturity 1
### Activity
Developers should not be directly involved in deploying applications.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 2
### Activity
Implement a wide-range of malware detection

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 3
### Activity
Ensure effectiveness through proper key management and verification procedures

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes



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


## Maturity 2
### Activity
Use encryption or a centralized vault to protect sensitive coniguration information

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 3
### Activity
Credentials and secrets appropriate for the target enviornemnt are added to configuration files dynamically during the deployment process, in such a way that the deployer has no need to see or handle those sensitive values. I.e. this should be an automated process.

The developer should have no need to view or access those credentials or secrets, particulalry from production systems, since they will be included automatically during deploy.

The system used to store and process the secrets and credentials must be robust from a security perspective. Secrets should be encrypted at rest and during transport. Users who configure this system and the secrets it contains should be subject to the principle of least privilege. For example, in some cases it might be appropriate for a developer to manage the secrets pertaining to a development environment, but not a UAT or production enviornment.

Where secrets are not pre-defined or dependant on another system, they should be generated afresh during the deployment process. This mechanism should meet appropriate best practices such as using a cryptographically secure pseudorandom number geenrator if the value is to be randomly generated.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

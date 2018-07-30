---
business_functions : Operations
title : Environment Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 0%
business_functions_weight: 2
type: security_practice
---

# Overview

| | A: Patching (and Updating) | B: Hardening |
|:---|:---|:---|
| Maturity 1 - Best-effort patching and hardening | Prioritized best-effort patching | Prioritized best-effort hardening |
| Maturity 2 - Formal process with baselines in place | Formal process covering the full stack | Hardening baseline and guidelines available |
| Maturity 3 - Conformity with continuously improving process enforced | Consolidated update process with SLA and reporting | Detection and handling of non-conformities |


# A: Patching (and Updating)

## Maturity 1
### Activity
TL; DR: Responsibilities for patching across the full stack are defined and known . Respective roles patch the particular components in a defined way. (to be updated - see notes)

On the first maturity level, you've identified applications and 3rd party application components which needs to be updated/ patched, nevertheless if it's the underlying operating system, application server or 3rd party code library.  You have defined the updating process at least on a high level, so that possible necessary cooperation between multiple teams is guaranteed if necessary and patching can be carried out anytime in case of need (e.g. exploit for a 3rd party component publicly available).

You're able to find out reasonably quickly the used versions of all components in order to evaluate whether you're affected by a particular public security vulnerability or not. 

#### Maturity Questions
##### Q 1
Do projects document operational environment security requirements?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes
activities would be different for container based deployments
implictly assumes you have an overview of what needs to be patched.
coverage can be measured with the Q&As
use maintenance windows to oppurtunistically patch/upgrade software
you know what patches are missing
identify patching dependencies
L1 - identify what matters and what is missing and prioritized best-effort patching
L2 - strategy , process , calendar
L3 - SLA / reporting


## Maturity 2
### Activity

Update process is defined and documented across the full stack. Patches are not only applied when they are available; external sources are also used in order to gather intelligence about zero day vulnerabilities so that appropriate risk mitigation steps can be carried out.

There is a guidance for prioritization of particular updates, let it be the criticality of the application, severity of security issues or whichever other concerns which are important to your organization. 

All newly implemented applications are a part of the defined process. Checking for the update process conformity is also a part of the quality assurance activities. 

### Maturity Questions
#### Q 1
Is a consistent process used to apply upgrades and patches to critical dependencies?

**Answer Options**
SAMMQA-G:
- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Notes
baseline or target levels defined
patch/upgrade calendar followed
manage process information (e.g. gap)

## Maturity 3
### Activity

On the third level, you have a very good insight in the patching strategy over the organization and full stack. Missing updates are triaged and handled according to rules and SLAs stemming from the defect management practice. It is guaranteed that patching can take place anytime so that SLAs can be adhered to. 

If there are applications with worse patch level, the situation is analyzed and corrective actions are performed if reasonable. 

Continuous process improvement is checked for regularly. 

### Maturity Questions
#### Q 1
Are stakeholders aware of options for additional tools to protect software while running in operations?

**Answer Options**
SAMMQA-F:
- No
- Yes, teams write/run their own
- Yes, there is a standard set
- Yes, the standard set is integrated

#### Notes



# B: Hardening

## Maturity 1
### Activity
Responsibilities for hardening software components across the full stack are defined and known. Software components are hardened according to publicly available sources with best practises.

### Maturity Questions
#### Q 1
Do projects check for security updates to third-party software components?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes
description more L2 aligned, versus best-effort
full stack - too "devopsy"?
definition = configuration hardening?
L1 = identify what matters to protect your environment and what is missing and prioritized best-effort hardening

## Maturity 2
### Activity
Hardening process is defined and documented across the full stack. Hardening baselines are available and used consistently.

### Maturity Questions
#### Q 1
Do projects leverage automation to check application and environment health?

**Answer Options**
SAMMQA-C:
- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Notes
standards in place
standard way if deploying the baselines

## Maturity 3
### Activity
Conformity with the hardening baselines is reliably evaluated. Nonconformities are handled as security findings, triaged and handled according to rules and SLAs stemming from the defect management practice.

### Maturity Questions
#### Q 1
Does a minimum security baseline exist for environment health (versioning, patching, etc)?

**Answer Options**
SAMMQA-G:
- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Notes
non-conformities / self-healing (overwriting)

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

On the first maturity level, you've identified applications and 3rd party application components which need to be updated/ patched, nevertheless if it's the underlying operating system, application server or 3rd party code library. 

Patching activities are carried out according to best-effort, however you have defined the update process at least on a high level. At least the process responsible for the particular components is known and cooperation between multiple teams is ensured if necessary and patching can be carried out anytime in case of need (e.g. exploit for a 3rd party component publicly available).

You're able to find out reasonably quickly the used versions of all components in order to evaluate whether you're affected by a particular public security vulnerability or not. 

#### Maturity Questions
##### Q 1
Have all used relevant components been patched in the last year?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

##### Q 2
Are you able to patch a newly released publicly known critical vulnerability in a reasonable time frame?

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

Update process is defined and documented across the full stack. You don't only rely on available patches provided by vendors; external sources are also used systematically in order to gather intelligence about zero day vulnerabilities, so that appropriate risk mitigation steps can be carried out.

There is a guidance for prioritization of particular updates, let it be the criticality of the application, severity of security issues or whichever other concerns which are important to your organization. 

All newly implemented applications are a part of the defined process. Checking for the update process conformity is also a part of the quality assurance activities. 

### Maturity Questions
#### Q 1
Is the patching process including prioritization documented for the whole stack?

**Answer Options**
SAMMQA-G:

- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Q 2
Is external intelligence systematically used in order to find information about new zero-day vulnerabilities?

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

On the third level, you have a very good insight in the patching strategy all over the organization and full stack. Missing updates are triaged and handled according to rules and SLAs stemming from the defect management practice. It is guaranteed that patching can take place anytime so that SLAs can be adhered to. 

If there are applications with worse patch level, the situation is analyzed and corrective actions are performed if reasonable. 

Continuous process improvement is audited regularly. 

### Maturity Questions
#### Q 1
Are you periodically evaluating the patch level across the whole stack and performing corrective actions?

**Answer Options**
SAMMQA-F:

- No
- Yes, teams write/run their own
- Yes, there is a standard set
- Yes, the standard set is integrated

#### Q 2
Is process improvement evaluated regularly?

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

On the first maturity level, you've recognized the importancy of configuration hardening of third party components across the full stack, defined the relevant scope for this activity and have also provably taken the first steps in this activity. The responsibility for hardening of the particular components is known and acknowledged. 

You are actively working with publicly available information sources (open source projects, vendor documentation, blog articles...), increasing your know-how from those and implementing at least "low hanging fruits". 

### Maturity Questions

#### Q 1
Has the scope relevant for this activity been defined and known in general?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 2
Is the configuration of relevant used third party components being actively hardened?

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

Within the scope relevant for this activity, you have defined hardening baselines for particular components used. These baselines have been communicated across the affected teams. 

The baselines have an owner who's responsible for keeping them up-to-date (e.g. if new best practices / features are available with new versions) and adapting them according to trustworthy sources. Newly implemented systems are part of the hardening process.

### Maturity Questions
#### Q 1
Are hardening baselines for the relevant used 3rd party components available?

**Answer Options**
SAMMQA-C:

- No
- Yes, a small percentage are/do
- Yes, at least half of them are/do
- Yes, the majority of them are/do

#### Q 2
Are hardening baselines implemented for all relevant components?

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

On the highest level, conformity with the hardening baselines is reliably tracked and evaluated. Nonconformities are handled as security findings, triaged and handled according to rules and SLAs stemming from the defect management practice.

Component update process includes verification of validity of the current hardening baselines. Relevant changes are incorporated in the baselines as well as in the auditing measures.

The continuous improvement process for the baselines is periodically audited and the resulting findings are acted upon.

### Maturity Questions
#### Q 1
Does the update process include verification and update of the current hardening baselines?

**Answer Options**
SAMMQA-G:

- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Q 2
Is the continuous improvement of the hardening baselines regularly audited?

**Answer Options**
SAMMQA-G:

- No
- Yes, localized to business areas
- Yes, across the organization
- Yes, across the organization and required

#### Notes
non-conformities / self-healing (overwriting)

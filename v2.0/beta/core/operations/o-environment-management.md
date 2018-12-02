---
business_functions : Operations
title : Environment Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 70%
business_functions_weight: 2
type: security_practice
---

# Overview

| | A: Configuration Hardening | B: Patching and Updating |
|:---|:---|----|
| Maturity 1 - Best-effort patching and hardening | Prioritized best-effort hardening | Prioritized best-effort patching |
| Maturity 2 - Formal process with baselines in place | Hardening baseline and guidelines available | Formal process covering the full stack |
| Maturity 3 - Conformity with continuously improving process enforced | Detection and handling of non-conformities | Consolidated update process with SLA and reporting |

# Short Description

Environment Management practice describes proactive activities carried out in order to keep the environment reasonably secure during the application operation.

# Long Description

Proactive work invested in application security is not over once the application becomes operational, on the contrary: New security features and patches are being usually continuously released until the technology stack you're relying on becomes end of life. 

Most technology you're relying on within your application stack is not coming secure by default. Due to issues like backwards compatibility or ease of setup, you often need to explicitely turn security features on. This topic is handled by the Configuration Hardening stream. 

For the most of the technologies you're relying on, vulnerabilities will be discovered throughout the application lifecycle and new versions fixing those will be released. That's why it's important to keep up with this information about new vulnerabilities being discovered and react accordingly. The activities leading to this goal are described by the Patching and Updating stream. 

# A: Configuration Hardening

This stream describes activities leading to carrying out security-relevant configuration of the whole technology stack you're relying on, from software-defined infrastructure up to configuring your software dependencies and libraries. 

## Maturity 1

### Benefit

Most evident security configuration is carried out. 

### Activity

On the first maturity level, you've acknowledged the importancy of configuration hardening of third party components your applications are relying on. You don't have an official process yet, however you have at least defined the relevant scope for this activity and have also provably taken the first steps. The responsibility for hardening of the particular components is known and acknowledged. 

You are actively working with publicly available information sources (open source projects, vendor documentation, blog articles...), increasing your know-how from those and implementing at least "low hanging fruits". 

### Indicators

Typically, on this maturity level:

- external public sources are used during configuration
- carried out configuration is documented


### Notes

description more L2 aligned, versus best-effort **1st paragraph reformulated**
full stack - too "devopsy"? -> **1st paragraph reformulated**
definition = configuration hardening? -> **In the stream definition**
L1 = identify what matters to protect your environment and what is missing and prioritized best-effort hardening -> **1st paragraph reformulated**

#### Guidance

## Maturity 2

### Benefit

Better efficiency due to established baselines.

### Activity

Within the scope relevant for this activity, you have defined hardening baselines for particular components used. These baselines have been communicated and acknowledged across the affected teams. This typically leads to a standard way of deploying the affected components over the organization.

The baselines have an owner who's responsible for keeping them up-to-date (e.g. if new best practices / features are available with new versions) and adapting them according to trustworthy sources. Both new and existing systems are covered part of the hardening process.

In larger environments, it's sensible to derive configuration of all instances from your own master, where the common ground work has been done already. Usage of automated tools for hardening configuration is at least considered.

### Indicators

Typically, on this maturity level:

- security baselines for commonly used componenents are documented
- these baselines have been improved in the last year
- an own configuration master is used in cases where beneficial

### Notes

- standards in place -> **I think it's covered already**
- standard way if deploying the baselines -> **added in 1st paragraph**
- Consider automated tools / solutions for hardening? Not all software can be hardened automatically. -> **3rd paragraph updated**
- Where it makes sense (e.g. software with multiple instances), create a golden image/configuration that can be deployed widely -> **added in 3rd paragraph**

#### Guidance

## Maturity 3

### Benefit

Profound knowledge about state of hardening measures across the organization.

### Activity

On the highest level, conformity with the hardening baselines is reliably tracked and evaluated. Nonconformities are handled as security findings, triaged and handled according to rules and SLAs stemming from the defect management practice. Automated measures ensuring self-healing of critical configuration mistakes and alerting relevant stakeholders are in place if sensible. 

Component update process includes verification of validity of the current hardening baselines. Relevant changes are incorporated in the baselines as well as in the auditing measures. 

The continuous improvement process for the baselines is periodically audited and the resulting findings are acted upon.

### Indicators:

Typically, on this maturity level:

- a dashboard covering the hardening state of particular components exists
- there are security findings documented for non-comformities to the configuration baselines
- tools for configuration hardening are in place (either acquried or internally developed)

### Notes

non-conformities / self-healing (overwriting) -> **1st paragrap updated**

#### Guidance

# B: Patching and Updating

## Maturity 1

### Activity

On the first maturity level, you've identified applications and 3rd party application components which need to be updated/ patched, nevertheless if it's the underlying operating system, application server or 3rd party code library. 

Patching activities are carried out according to best-effort, however you have defined the update process at least on a high level. At least the process responsible for the particular components is known and cooperation between multiple teams is ensured if necessary and patching can be carried out anytime in case of need (e.g. exploit for a 3rd party component publicly available).

You're able to find out reasonably quickly the used versions of all components in order to evaluate whether you're affected by a particular public security vulnerability or not. 

### Maturity Questions

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

### Notes

activities would be different for container based deployments
implictly assumes you have an overview of what needs to be patched.
coverage can be measured with the Q&As
use maintenance windows to oppurtunistically patch/upgrade software
you know what patches are missing
identify patching dependencies
L1 - identify what matters and what is missing and prioritized best-effort patching
L2 - strategy , process , calendar
L3 - SLA / reporting

From SAMM Summit...

Reference to software supply chain

Reference to change management

How do you deal with zero days / vulnerabilities without patches?

Validating the patch in terms of integrity

Checking the patch won't break your application / system

#### Guidance

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

### Notes

baseline or target levels defined
patch/upgrade calendar followed
manage process information (e.g. gap)

- Mention a patch schedule - structured approach. Take into account when the vendor releases patches. Regular patch windows - times to patch unforeseen patches / out-of-band patches.
- Move conformity to level 3?

#### Guidance

## Maturity 3

### Activity

On the third level, you have a very good insight, such as dashboard, in the patching strategy all over the organization and full stack. Missing updates are triaged and handled according to rules and SLAs stemming from the defect management practice. It is guaranteed that patching can take place anytime so that SLAs can be adhered to. 

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

### Notes

- 

#### Guidance

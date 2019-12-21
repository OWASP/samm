---
business_functions : Operations
title : Environment Management
assignedto       : John DiLeo
complete          : 80%
weight: 2
type: security_practice
---
# Short Description

The Environment Management practice describes proactive activities carried out to improve and maintain the security of the environments in which the organization's applications operate.

# Long Description

The organization's work on application security doesn't end once the application becomes operational. New security features and patches are regularly released for the various elements of the technology stack you're using, until they become obsolete or are no longer supported.

Most of the technologies in any application stack are not secure by default. This is frequently intentional, to enhance backwards compatibility or ease of setup. For this reason, ensuring the secure operation of the organization's technology stack requires the consistent application of secure baseline configurations to all components.

Vulnerabilities are discovered throughout the lifecycles of the technologies on which your organazation relies, and new versions addressing them are released on various schedules. This makes it essential to monitor vulnerability reports and perform orderly, timely patching across all affected systems.


# Overview

| | A: Configuration Hardening | B: Patching and Updating |
|:---|:---|:---|
| Maturity 1 - Best-effort patching and hardening | Perform best-effort hardening of configurations, based on readily available information. | Perform best-effort patching of system and application components. |
| Maturity 2 - Formal process with baselines in place | Perform consistent hardening of configurations, following established baselines and guidance. | Perform regularly scheduled patching of system and application components, across the full stack. |
| Maturity 3 - Conformity with continuously improving process enforced | Actively monitor configurations for non-conformance to baselines, and handle detected occurrences as security defects. | Proactively monitor update status and manage missing updates as security defects. |


# A: Configuration Hardening

## Maturity 1

### Benefit

Reduced attack surface, for key elements of technology stacks

### Activity

The organization acknowledges the importance of securing the technology stacks being used, and applies secure configuration to stack elements based on readily available guidance (e.g., open source projects, vendor documentation, blog articles). Teams develop configuration guidance for their applications, based on trial-and-error and information gathered by team members, and share their learnings across the organization. 

The organization identifies key elements of common technology stacks, and establishes configuration standards for those. These are developed on an _ad hoc_ basis, based on teams' experiences of "what works."

At this level of maturity, there is not yet a formal process for managing configuration baselines. Configurations may not be applied consistently across applications and deployments, and monitoring of conformance is likely absent.


#### Maturity Questions

{{< questions "Environment Management" "A" 1 >}}

#### Notes



## Maturity 2

### Benefit

- Reduced attack surface, across all technology stacks
- Increased efficiency in deployment and configuration of components


### Activity

The organization has establshed configuration hardening baselines for all components in each technology stack used. Configuration guides are developed, to assist with consistent application of the hardening baselines. Configuration baselines are applied to all new systems, and to existing systems when practicable.

Changes to hardening baselines and configuration guides are managed, and each is assigned an owner. Owners have ongoing responsibility to keep them up-to-date, based on evolving best practices or changes to the relevant components (e.g., version updates, new features).  

In larger environments, configurations of instances are derived from a locally maintained master, with relevant configuration baselines applied. 

At this maturity level, the organization likely employs automated tools for hardening configurations.


### Maturity Questions

{{< questions "Environment Management" "A" 2 >}}

#### Notes



## Maturity 3

### Benefit

Profound knowledge about state of hardening measures across the organization

### Activity

Track and evaluate conformity with the hardening baselines. Triage and handle nonconformities as security findings according to rules and SLAs stemming from the defect management practice. Automated measures ensuring self-healing of critical configuration mistakes and alerting relevant stakeholders are in place if sensible.

Verify the validity of the current hardening baselines in the component update process. Incorporate relevant changes in the baselines and in the auditing measures.

Periodically audit the continuous improvement process for the baselines and act upon the resulting findings.


### Maturity Questions

{{< questions "Environment Management" "A" 3 >}}

#### Notes



# B: Patching and Updating

## Maturity 1

### Benefit

Mitigated prominent issues in third-party code

### Activity

Identify applications and third-party application components which need to be updated or patched, including the underlying operating system, application server or third-party code library.

Carry out patching activities according to best-effort. However, define the update process at least on a high level (e.g., testing the patches don't break anything). Use opportunities like maintenance windows for best-effort patching.

Share knowledge of the patching process for components. Teams cooperate if necessary. You can carry out patching anytime in case of need (e.g., exploit for a third-party component publicly available).

You can find out the versions of all components in use to evaluate whether you are affected by a particular public security vulnerability.


### Maturity Questions

{{< questions "Environment Management" "B" 1 >}}

#### Notes



## Maturity 2

### Benefit

Reliable handling of third-party code issues

### Activity

Define and document the update process across the full stack. You don't rely on available patches provided by vendors only; you use external sources systematically to gather intelligence about zero day vulnerabilities, and take appropriate risk mitigation steps.

There is a guidance for prioritization of particular updates, including concerns important to your organization like the criticality of the application, or severity of security issues. Schedule updates (without necessary relevancy to known issues), e.g. using a patch/upgrade calendar of vendors.

If there is a known critical issue while the patch is not available yet, triage and handle this issue (e.g., by finding workarounds, monitoring measures, or even switching off the affected applications).


### Maturity Questions

{{< questions "Environment Management" "B" 2 >}}

#### Notes



## Maturity 3

### Benefit

Full visibility into the current patch state over the organization

### Activity

You have very good insight (e.g., through a dashboard) of the patching strategy across the organization and full stack. You triage and handle missing updates according to rules and SLAs stemming from the defect management practice. It is guaranteed that patching can take place anytime so that SLAs can be adhered to.

If there are applications with worse patch level, the situation is analyzed and corrective actions are performed if reasonable.


### Maturity Questions

{{< questions "Environment Management" "B" 3 >}}

#### Notes


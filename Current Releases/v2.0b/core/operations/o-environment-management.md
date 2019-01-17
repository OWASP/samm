---
business_functions : Operations
title : Environment Management
assignedto       : Daniel (dan.kefer@gmail.com)
complete          : 85%
weight: 2
type: security_practice
---

# Short Description

Environment Management practice describes proactive activities carried out to keep the environment reasonably secure during the application operation.

# Long Description

Proactive work on application security is not over once the application becomes operational. New security features and patches are continuously released until the technology stack you're using becomes obsolete.

Most technology in your application stack is not secure by default. Due to issues like backwards compatibility or ease of setup, you often need to explicitly turn security features on. This topic is handled by the Configuration Hardening stream.

For most of the technologies you're relying on, vulnerabilities are discovered throughout the application lifecycle and new versions fixing those will be released. This is why it is important to keep up with information about new vulnerabilities and react accordingly. The activities leading to this goal are described by the Patching and Updating stream.  

# Overview

| | A: Configuration Hardening | B: Patching and Updating |
|:---|:---|----|
| Maturity 1 - Best-effort patching and hardening | Prioritized best-effort hardening | Prioritized best-effort patching |
| Maturity 2 - Formal process with baselines in place | Hardening baseline and guidelines available | Formal process covering the full stack |
| Maturity 3 - Conformity with continuously improving process enforced | Detection and handling of non-conformities | Consolidated update process with SLA and reporting |


# A: Configuration Hardening

This stream describes activities leading to security-relevant configuration of your whole technology stack, from software-defined infrastructure up to configuring your software dependencies and libraries.

## Maturity 1

### Benefit

Most evident security configuration is carried out.

### Activity

You acknowledge the importance of configuration hardening of third party components your applications are using. You don't have an official process yet. However, at least define the relevant scope for this activity take the first steps. You know and acknowledge the responsibility for hardening of the particular components.

Work with publicly available information sources (open source projects, vendor documentation, blog articles), increasing your know-how from those and implementing at least "low hanging fruits".

## Maturity 2

### Benefit

Better efficiency due to established baselines.

### Activity

Within the scope relevant for this activity, define hardening baselines for particular components. The affected teams know and acknowledge them. This typically leads to a standard way of deploying the affected components over the organization.

The baselines have an owner responsible for keeping them up to date (e.g. if new best practices or features are available with new versions) and adapting them according to trustworthy sources. Both new and existing systems are part of the hardening process.

In larger environments, derive configuration of all instances from your own master, where there is already common ground work. Consider using automated tools for hardening configuration.


## Maturity 3

### Benefit

Profound knowledge about state of hardening measures across the organization.

### Activity

Track and evaluate conformity with the hardening baselines. Triage and handle nonconformities as security findings according to rules and SLAs stemming from the defect management practice. Automated measures ensuring self-healing of critical configuration mistakes and alerting relevant stakeholders are in place if sensible.

Verify the validity of the current hardening baselines in the component update process. Incorporate relevant changes in the baselines and in the auditing measures.

Periodically audit the continuous improvement process for the baselines and act upon the resulting findings.


# B: Patching and Updating

This stream describes activities leading to transparency and lowered risk stemming from relying on vulnerable versions components.

## Maturity 1

### Benefit

Mitigated prominent issues in 3rd party code.

### Activity

Identify applications and 3rd party application components which need to be updated or patched, including the underlying operating system, application server or 3rd party code library.

Carry out patching activities according to best-effort. However, define the update process at least on a high level (e.g. testing the patches don't break anything). Use opportunities like maintenance windows for best-effort patching.

Share knowledge of the patching process for components. . Teams cooperate if necessary. You can carry out patching anytime in case of need (e.g. exploit for a 3rd party component publicly available).

You can find out the versions of all components in use  to evaluate whether you are affected by a particular public security vulnerability.


## Maturity 2

### Benefit

Reliable handling of 3rd party code issues

### Activity

Define and document the update process across the full stack. You don't rely on available patches provided by vendors only; you use external sources systematically to gather intelligence about zero day vulnerabilities, and take  appropriate risk mitigation steps.

There is a guidance for prioritization of particular updates, including concerns important to your organization like the criticality of the application, or severity of security issues. Schedule updates (without necessary relevancy to known issues), e.g. using a patch/upgrade calendar of vendors.

If there is a known critical issue while the patch is not available yet, triage and handle this issue (e.g. by finding workarounds, monitoring measures, or even switching off the affected applications).


## Maturity 3

### Benefit

Full visibility into the current patch state over the organization

### Activity

You have very good insight (e.g. through a dashboard) of the patching strategy across the organization and full stack. You triage and handle missing updates according to rules and SLAs stemming from the defect management practice. It is guaranteed that patching can take place anytime so that SLAs can be adhered to.

If there are applications with worse patch level, the situation is analyzed and corrective actions are performed if reasonable.

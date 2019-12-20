---
title: Environment Management
url: /model/operations/environment-management/
business_function: "Operations"
business_function_url: "operations"
keywords: ["Business function", "Practice", "Environment Management"]
type: practice

practice_maturity_1_description: Best-effort patching and hardening
practice_maturity_2_description: Formal process with baselines in place
practice_maturity_3_description: Conformity with continuously improving process enforced

stream_a: Configuration Hardening

stream_a_maturity_1_activity: Perform best-effort hardening of configurations, based on readily available information.
stream_a_maturity_2_activity: Perform consistent hardening of configurations, following established baselines and guidance.
stream_a_maturity_3_activity: Actively monitor configurations for non-conformance to baselines, and handle detected occurrences as security defects.

stream_b: Patching and Updating

stream_b_maturity_1_activity: Perform best-effort patching of system and application components.
stream_b_maturity_2_activity: Perform regular patching of system and application components, across the full stack. Ensure timely delivery of patches to customers.
stream_b_maturity_3_activity: Actively monitor update status and manage missing patches as security defects. Proactively obtain vulnerability and update information for components.
---

The organization's work on application security doesn't end once the application becomes operational. New security features and patches are regularly released for the various elements of the technology stack you're using, until they become obsolete or are no longer supported.

Most of the technologies in any application stack are not secure by default. This is frequently intentional, to enhance backwards compatibility or ease of setup. For this reason, ensuring the secure operation of the organization's technology stack requires the consistent application of secure baseline configurations to all components. The Environment Management (EM) practice focuses on keeping your environment clean and secure.

Vulnerabilities are discovered throughout the lifecycles of the technologies on which your organazation relies, and new versions addressing them are released on various schedules. This makes it essential to monitor vulnerability reports and perform orderly, timely patching across all affected systems.


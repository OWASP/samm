<div class="new-page"/>
### Environment Management (EM1)

The goal of this practice level is to best-effort patching and hardening

#### Activities

##### [Stream A] Use best-effort hardening
<b>Benefit</b>: <i>Hardened basic configuration settings of your components</i>

Understanding the importance of securing the technology stacks you're using, apply secure configuration to stack elements, based on readily available guidance (e.g., open source projects, vendor documentation, blog articles). When your teams develop configuration guidance for their applications, based on trial-and-error and information gathered by team members, encourage them to share their learnings across the organization.

Identify key elements of common technology stacks, and establish configuration standards for those, based on teams' experiences of what works.

At this level of maturity, you don't yet have a formal process for managing configuration baselines. Configurations may not be applied consistently across applications and deployments, and monitoring of conformance is likely absent.


###### Assessment Question(s)
Do you harden configurations for key components of your technology stacks?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- You have identified the key components in each technology stack used
- You have an established configuration standard for each key component


##### [Stream B] Practice best-effort patching
<b>Benefit</b>: <i>Mitigation of well-known issues in third-party components</i>

Identify applications and third-party components which need to be updated or patched, including underlying operating systems, application servers, and third-party code libraries.

At this level of maturity, your identification and patching activities are best-effort and _ad hoc_, without a managed process for tracking component versions, available updates, and patch status. However, high-level requirements for patching activities (e.g., testing patches before pushing to production) may exist, and product teams are achieving best-effort compliance with those requirements.

Except for critical security updates (e.g., an exploit for a third-party component has been publicly released), teams leverage maintenance windows established for other purposes to apply component patches. For software developed by the organization, component patches are delivered to customers and organization-managed solutions only as part of feature releases.

Teams share their awareness of available updates, and their experiences with patching, on an _ad hoc_ basis. Ensure teams can determine the versions of all components in use, to evaluate whether their products are affected by a security vulnerability when notified. However, the process for generating and maintaining component lists may require significant analyst effort.


###### Assessment Question(s)
Do you identify and patch vulnerable components?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- You have an up-to-date list of components, including version information
- You regularly review public sources for vulnerabilities related to your components


<div class="new-page"/>
### Environment Management (EM2)

The goal of this practice level is to formal process with baselines in place

#### Activities

##### [Stream A] Establish hardening baselines
<b>Benefit</b>: <i>Consistent hardening of technology stack components in your organization</i>

Establsh configuration hardening baselines for all components in each technology stack used. To assist with consistent application of the hardening baselines, develop configuration guides for the components. Require product teams to apply configuration baselines to all new systems, and to existing systems when practicable.

Place hardening baselines and configuration guides under change management, and assign an owner to each. Owners have ongoing responsibility to keep them up-to-date, based on evolving best practices or changes to the relevant components (e.g., version updates, new features).

In larger environments, derive configurations of instances from a locally maintained master, with relevant configuration baselines applied. Employ automated tools for hardening configurations.


###### Assessment Question(s)
Do you have hardening baselines for your components?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- You have assigned an owner for each baseline
- The owner keeps their assigned baselines up to date
- You store baselines in an accessible location
- You train employees responsible for configurations in these baselines


##### [Stream B] Formalize patch management
<b>Benefit</b>: <i>Consistent and proactive patching of technology stack components</i>

Develop and follow a well-defined process for managing patches to application components across the technology stacks in use. Ensure processes include regular schedules for applying vendor updates, aligned with vendor update calendars (e.g., Microsoft Patch Tuesday). For software developed by the organization, deliver releases to customers and organization-managed solutions on a regular basis (e.g., monthly), regardless of whether you are including new features.

Create guidance for prioritizing component patching, reflecting your risk tolerance and management objectives. Consider operational factors (e.g., criticality of the application, severity of the vulnerabilities addressed) in determining priorities for testing and applying patches.

In the event receive a notification for a critical vulnerability in a component, while no patch is yet available, triage and handle the situation as a risk management issue (e.g., implement compensating controls, obtain customer risk acceptance, or disable affected applications/features).


###### Assessment Question(s)
Do you follow an established process for updating components of your technology stacks?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- The process includes vendor information for third-party patches
- The process considers external sources to gather information about zero day attacks, and includes appropriate risk mitigation steps
- The process includes guidance for prioritizing component updates


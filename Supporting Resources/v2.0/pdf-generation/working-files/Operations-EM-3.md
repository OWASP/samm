<div class="new-page"/>
### Environment Management (EM3)

The goal of this practice level is to conformity with continuously improving process enforced

#### Activities

##### [Stream A] Perform continuous configuration monitoring
<b>Benefit</b>: <i>Clear view on component configurations to avoid non-conformities</i>

Actively monitor the security configurations of deployed technology stacks, performing regular checks against established baselines. Ensure results of configuration checks are readily available, through published reports and dashboards.

When you detect non-conforming configurations, treat each occurrence as a security finding, and manage corrective actions within your established Defect Management practice.

Further gains may be realized using automated measures, such as "self-healing" configurations and security information and event management (SIEM) alerts.

As part of the process for updating components (e.g., new releases, vendor patches), review corresponding baselines and configuration guides, updating them as needed to maintain their relevance and accuracy. Review other baselines and configuration guides at least annually.

Periodically review your baseline management process, incorporating feedback and lessons learned from teams applying and maintaining configuration baselines and configuration guides.


###### Assessment Question(s)
Do you monitor and enforce conformity with hardening baselines?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- You perform conformity checks regularly, preferably using automation
- You store conformity check results in an accessible location
- You follow an established process to address reported non-conformities
- You review each baseline at least annually, and update it when required


##### [Stream B] Enforce timely patch management
<b>Benefit</b>: <i>Clear view on component patch state to avoid non-conformities</i>

Develop and use management dashboards/reports to track compliance with patching processes and SLAs, across the portfolio. Ensure dependency management and application packaging processes can support applying component-level patches at any time, to meet required SLAs.

Treat missed updates as security-related product defects, and manage their triage and correction in accordance with your established Defect Management practice.

Don't rely on routine notifications from component vendors to learn about vulnerabilities and associated patches. Monitor a variety of external threat intelligence sources, to learn about zero day vulnerabilities; handle those affecting your applications as risk management issues.


###### Assessment Question(s)
Do you regularly evaluate components and review patch level status?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- You update the list with components and versions
- You identify and update missing updates according to existing SLA
- You review and update the process based on feedback from the people who perform patching


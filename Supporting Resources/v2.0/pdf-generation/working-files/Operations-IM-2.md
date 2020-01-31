<div class="new-page"/>
### Incident Management (IM2)

The goal of this practice level is to formal incident management process in place

#### Activities

##### [Stream A] Define an incident detection process
<b>Benefit</b>: <i>Timely and consistent detection of expected security incidents</i>

Establish a dedicated owner for the incident detection process, make clear documentation accessible to all process stakeholders, and ensure it is regularly reviewed and updated as necessary. Ensure employees responsible for incident detection follow this process (e.g., using training).

The process typically relies on a high degree of automation, collecting and correlating log data from different sources, including application logs. You may aggregate logs in a central place, if suitable. Periodically verify the integrity of analyzed data. If you add a new application, ensure the process covers it within a reasonable period of time.

Detect possible security incidents using an available checklist. The checklist should cover expected attack vectors and known or expected kill chains. Evaluate and update it regularly.

When you determine an event is a security incident (with sufficiently high confidence), notify responsible staff immediately, even outside business hours. Perform further analysis, as appropriate, and start the escalation process.


###### Assessment Question(s)
Do you follow a documented process for incident detection?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- The process has a dedicated owner
- You store process documentation in an accessible location
- The process considers an escalation path for further analysis
- You train employees responsible for incident detection in this process
- You have a checklist of potential attacks to simplify incident detection


##### [Stream B] Define and incident response process
<b>Benefit</b>: <i>Understanding and efficient handling of most security incidents</i>

Establish and document the formal security incident response process. Ensure documentation includes information like&#58;

* most probable/common scenarios of security incidents and high-level instructions for handling them; for such scenarios, also use public knowledge about possibly relevant third-party incidents
* rules for triaging each incident
* rules for involvement of different stakeholders including senior management, Public Relations, Legal, privacy, Human Resources, external (law enforcement) authorities, and customers; specify mandatory timeframe to do so, if needed
* the process for performing root-cause analysis and documentation of its results

Ensure a knowledgeable and properly trained incident response team is available both during and outside of business hours. Define timelines for action and a war room. Keep hardware and software tools up to date and ready for use anytime.


###### Assessment Question(s)
Do you use a repeatable process for incident handling?

- No
- Yes, for some incident types
- Yes, for at least half of the incident types
- Yes, for most or all of the incident types


Quality Criteria:

- You have an agreed upon incident classification
- The process considers Root Case Analysis for high severity incidents
- Employees responsible for incident response are trained in this process
- Forensic analysis tooling is available


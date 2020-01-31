<div class="new-page"/>
### Incident Management (IM1)

The goal of this practice level is to best-effort incident detection and handling

#### Activities

##### [Stream A] Use best-effort incident detection
<b>Benefit</b>: <i>Ability to detect the most obvious security incidents</i>

Analyze available log data (e.g., access logs, application logs, infrastructure logs), to detect possible security incidents in accordance with known log data retention periods.

In small setups, you can do this manually with the help of common command-line tools. With larger log volumes, employ automation techniques. Even a `cron` job, running a simple script to look for suspicious events, is a step forward!

If you send logs from different sources to a dedicated log aggregation system, analyze the logs there and employ basic log correlation principles.

Even if you don't have a 24/7 incident detection process, ensure that unavailability of the responsible person (e.g., due to vacation or illness) doesn't significantly impact detection speed or quality.

Establish and share points of contact for formal creation of security incidents.


###### Assessment Question(s)
Do you analyze log data for security incidents periodically?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have a contact point for the creation of security incidents
- You analyze data in accordance with the log data retention periods
- The frequency of this analysis is aligned with the criticality of your applications


##### [Stream B] Create an incident response plan
<b>Benefit</b>: <i>Ability to efficiently solve most common security incidents</i>

The first step is to recognize the incident response competence as such, and define a responsible owner. Provide them the time and resources they need to keep up with current state of incident handling best practices and forensic tooling.

At this level of maturity, you may not have established a dedicated incident response team, but you have defined the participants of the process (usually different roles). Assign a single point of contact for the process, known to all relevant stakeholders. Ensure that the point of contact knows how to reach each participant, and define on-call responsibilities for those who have them.

When security incidents happen, document all actions taken. Protect this information from unauthorized access.


###### Assessment Question(s)
Do you respond to detected incidents?

- No
- Yes, for some incidents
- Yes, for at least half of the incidents
- Yes, for most or all of the incidents


Quality Criteria:

- You have a defined person or role for incident handling
- You document security incidents


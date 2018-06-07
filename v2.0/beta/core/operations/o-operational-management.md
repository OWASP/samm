---
business_functions : Operations
security_practice : Operational Management
assigned_to       : John (john.dileo@owasp.org)
complete          : 0%
business_functions_weight: 3
---

# Overview
The Operational Management practice focuses on activities to ensure security is maintained throughout operational support functions. Although these functions are not performed directly by an application, the overall security of the application and its data is dependent on their proper performance. All of the protections built into an application can be rendered irrelevant by deploying the application on an unpatched system or failing to store backup media securely.

The functions covered by this practice include, but are not limited to: system provisioning, administration, and decommissioning; database provisioning and administration; and data backup, restore, and archival.

| | A: Data Protection | B: System decomissioning / Legacy management |
|:---|:---|:---|
| Maturity 1 - Best-effort activities | Data locations documented | Opportunistic identification of unused applications or services |
| Maturity 2 - Processes in place | Data protection policy established | Decomissioning process in place |
| Maturity 3 - Continuous improvement enforced | Data policy breaches detected and acted upon | Proactive reliable handling of legacy |

## Practice Notes
Possibly move the Third-Party Requirements stream into this practice, as a third stream?


# A: Data Protection

## Maturity 1
### Activity
The data stored, processed, and transmitted by the application are identified, and information regarding their types, sensitivity levels, and storage location(s) are captured. Appropriate controls are in place to ensure sensitive data from Production environments are not propagated to lower environments without having been properly sanitized/anonymized.

### Activity - Alpha Version
It is documented which applications process and store which data. Production sensitive (esp. personal) data is present only in the production environment.

#### Maturity Questions
##### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
coverage handled by questions?
you know what you have/process
sensitive and/or under regulatory compliance


## Maturity 2
### Activity
Process for handling sensitive data "within system operations"(?) is established (=data protection policy). Data is consequently protected according to the need-to-know principle. Access to sensitive data is reliably protocoled. 

### Activity - Alpha Version
Process for handling sensitive data within system operations is documented and established. Data is consequently protected according to the need-to-know principle. Access to sensitive data is reliably protocoled.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
explain "reliably protocoled" ?
what about integrity/availability ?
cover data retention ??
cover data offshoring?
depends on organization compliance obligations (link with P&C)
need for more concrete SW related use cases / examples

## Maturity 3
### Activity
Compliance to the data protection policy is regularly checked/audited. There are measures ensuring timely detection of broken data protection mechanisms (e.g., regular delete jobs).

#### Activity - Alpha Version
Compliance to the data protection policy is regularly checked/audited. There are measures ensuring timely detection of non-functional data protection mechanisms (e.g., regular delete jobs).

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
where does the data protection policy come from?


# B: System decomissioning / Legacy management

## Maturity 1
### Activity
Explicit (manual or automated) actions for identification of unused applications are carried out. Results are processed for further actions.

### Activity - Alpha Version
Explicit (manual or automated) actions for identification of unused applications are carried out. Results are processed for further actions.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
definition of legacy ?
out of date or in need of replacement?
no active development / maintenance?

## Maturity 2
### Activity
If application is decomissioned, also all relevant accounts, firewall rules, data, etc. are deleted according to an established process.

### Activity - Alpha Version
If application is decomissioned, also all relevant accounts, firewall rules, data, etc. are deleted according to an established process.

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 3
### Activity
Life state of every software asset and underlying infrastructure is periodically evaluated and EOL is estimated. Switching the application into a legacy state triggers a defined process which also mitigates resulting security risks. Lessons learned process for handling legacy is established. 

### Activity - Alpha Version
Life state of every software asset and underlying infrastructure is periodically evaluated and EOL is estimated. Switching the application into a legacy state triggers a defined process which also mitigates resulting security risks. Lessons learned process for handling legacy is established. 

### Maturity Questions
#### Q 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?

**Answer Options**
- Option 1
- Option 2
- Option 3
- Option 4

#### Notes
Proactivity in driving infrastructure and application standards, to preemptively wean the enterprise from EOL technologies.

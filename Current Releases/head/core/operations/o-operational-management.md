---
business_functions : Operations
title : Operational Management
assignedto       : John (john.dileo@owasp.org)
complete          : 40%
weight: 3
type: security_practice
---
# Short Description
This practice focuses on operational support activities required to maintain security throughout the product lifecycle.

# Long Description
The Operational Management practice focuses on activities to ensure security is maintained throughout operational support functions. Although these functions are not performed directly by an application, the overall security of the application and its data depends on their proper performance. Deploying an application on an unsupported operating system with unpatched vulnerabilities, or failing to store backup media securely, can make the protections built into that application irrelevant.

The functions covered by this practice include, but are not limited to: system provisioning, administration, and decommissioning; database provisioning and administration; and data backup, restore, and archival.

# Overview

| | A: Data Protection | B: System decomissioning / Legacy management |
|:---|:---|:---|
| Maturity 1 - Foundational Practices | Basic Data Protections in Place | Identification of unused and legacy applications/services |
| Maturity 2 - Managed, Responsive Processes | Data catalogued and data protection policy established | Decomissioning and legacy migration processes in place |
| Maturity 3 - Active Monitoring and Response | Data policy breaches detected and acted upon | Proactive reliable handling of legacy applications/services |

## Practice Notes
* Possibly move the Third-Party Requirements stream into this practice, as a third stream?
* Possibly split the System Decommissioning/Legacy Management Stream into two streams - one for the org. as a software consumer, and one for the org. as a software producer


# A: Data Protection

The activities in this stream focus on ensuring the organization properly protects data in all aspects of their creation, handling, storage, and processing. As an organization's maturity in this practice grows, the data managed are better understood, more precisely classified, and more effectively protected.

## Maturity 1
### Benefit
Sensitive data are protected from accidental disclosure

### Activity
The organization understands the types and sensitivity of data stored and processed by applications, and maintains awareness of the fate of processed data (e.g., backups, sharing with external partners). At this level of maturity, the information gathered may be captured in varying forms and different places; no organization-wide data catalog is assumed to exist. The organization protects and handles all data associated with a given application according to protection requirements applying to the most sensitive data stored and processed.

The organization implements basic controls, to prevent propagation of unsanitized sensitive data from production environments to lower environments. By ensuring unsanitized production data are never propagated to lower (non-production) environments, the organization can focus data protection policies and activities on production.

### Maturity Questions
#### Q 1
Are the types and sensitivity of data stored and processed by applications well understood?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

#### Q 2
Are controls in place to ensure sensitive data are sanitized before propagation to a non-production environment, and is compliance with those controls verified?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators

- The organization has assigned a sensitivity level to each appplication and data store
- Offline media are labeled and handled according to the sensitivity of the data they contain
- Sensitive data do not appear in non-production environments

### Notes

### Guidance

- Establish organization-wide guidelines for the labeling, handling, and protection of physical media, including printed reports.
- Establish organization-wide guidelines on data sanitization requirements
- Provide training on the organization's data handling and sanitization guidelines to all staff, preferably as part of onboarding.
- Conduct periodic reviews of non-production environments, to verify no sensitive data have propagated to them.

## Maturity 2
### Benefit
- Increased understanding of the organization's data landscape
- Improved confidentiality, integrity, and availability of data backups

### Activity
At this maturity level, Data Protection activities focus on actively managing the organization's stewardship of data. Technical and administrative controls established as part of this activity serve to protect the confidentiality of sensitive data, and the integrity and availability of all data in the organization's care, from its initial creation/receipt through the destruction of backups at the end of their retention period.

The organization identifies the data stored, processed, and transmitted by applications, and captures information regarding their types, sensitivity (classification) levels, and storage location(s) in the organization's data catalog. The organization clearly identifies records or data elements subject to specific regulation. Establishing a single source of truth regarding the data the organization works with, supports finer-grained selection of controls for their protection. The collection of this information enhances the accuracy, timeliness, and efficiency of the organization's responses to data-related queries (e.g., from auditors, incident response teams, or customers), and supports threat modeling and compliance activities.

Based on the organization's Data Protection Policy, the organization establishes processes and procedures for protecting and preserving data throughout their lifetime, whether at rest, being processed, or in transit. Particular attention is given to the handling and protection of sensitive data outside the active processing system, including, but not limited to: storage, retention, and destruction of backups; and the labeling, encryption, and physical protection of offline storage media. Organization processes and procedures cover the implementation of all controls adopted to comply with regulatory, contractual, or other restrictions on storage locations, personnel access, and other factors.


### Maturity Questions
#### Q 1
Are data cataloged, including their types, sensitivity levels, and processing/storage locations?

*Answer Options*

- No
- Yes, for a small percentage
- Yes, for approx. half
- Yes, for most or all

#### Q 2
Are retention requirements established for data, and are backups destroyed in a timely manner after the relevant retention period ends?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

#### Q 3
Are handling requirements established and documented for all data elements in the catalog, in accordance with their established sensitivity levels, and are these requirements followed?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

### Quality Indicators
- Data catalog is complete and current
- Offline media are protected from disclosure, corruption, and destruction
- Media at end-of-life are destroyed and disposed of in a secure manner

### Notes
- Data protection capabilities overlaps with policy & compliance governance. Third paragraph. However, the content here is already more specific. So maybe it just needs a reference to the P&C activity stream.
- Make the difference between L1 and L2 more clear. More concrete. Maybe mention the "data catalog".
- Why is a data catalogue useful? Data classification. Threat modelling.

### Guidance
- Inspect off-site data storage facilities, to verify all required security protections (e.g., locks, video surveillance) remain in place and function properly.
- Conduct periodic spot checks of backup media, to verify they are not corrupted, and equipment needed to restore data (e.g., tape drives) are functioning correctly.

## Maturity 3
### Benefit
- Cost savings realized through automation of monitoring and alerts

### Activity
Activities at this maturity level are focused on automating data protection, reducing the organization's reliance on human effort to assess and manage compliance with policies. There is a focus on feedback mechanisms and proactive reviews, to identify and act on opportunities for process improvement.

The organization implements technical controls to enforce compliance with the Data Protection Policy, and active monitoring is in place to detect attempted or actual violations. The organization may use a variety of available tools for data loss prevention, access control and tracking, or anomalous behavior detection.

The organization regularly audits compliance with established administrative controls, and closely monitors performance and operation of automated mechanisms, including backups and record deletions. Monitoring tools quickly detect and report failures in automation, permitting the organization to take timely corrective action.

The organization reviews and updates the data catalog regularly, to maintain its accurate reflection of the data landscape. Regular reviews and updates of processes and procedures maintain their alignment with the organization's policies and priorities.

### Maturity Questions
#### Q 1
Is automated monitoring in place, to detect attempted or actual violations of the Data Protection Policy?

*Answer Options*

- No
- Yes, for some data
- Yes, for approx. half of the data
- Yes, for most or all of the data

#### Q 2
Are administrative data protection controls audited?

*Answer Options*

- No
- Yes, we did it once
- Yes, we do it every few years
- Yes, we do it at least annually

#### Q 3
Are the data catalogue and data protection policies/procedures reviewed and updated?

*Answer Options*

- No
- Yes, we do it when requested
- Yes, we do it every few years
- Yes, we do it at least annually

### Quality Indicators

### Notes

### Guidance

- DLP and data vaults as examples - anomaly detection
- Watermarks on documents? To help you trace leaks


# B: System decomissioning / Legacy management

From the perspective of the organization as a consumer of resources, the activities in this stream focus on the identification, management, and tracking of systems, applications, application dependencies, and services that are no longer used, have reached end of life, or are no longer actively developed or supported. Removal of unused systems and services improves manageability of the environment and reduces the organization's attack surface, while affording direct and indirect cost savings (e.g., reduced license count, reduced logging volume, or reduced analyst effort).

From the perspective of the organization as a supplier of software, activities in this stream focus on managing and reducing the organization's support and maintenance workload, through the coordinated retirement of legacy software versions. Benefits to the organization can be significant over the long term, as a direct consequence of reducing the required back-porting effort for security-related fixes. These activities apply to all software resources developed by the organization, whether for internal use or for distribution to customers or users.

## Maturity 1
### Benefit
- Reduced operating costs for applications
- Reduced support costs for legacy product versions

### Activity
Identification of unused applications occurs on an _ad hoc_ basis, either by chance observation, or by occasionally performing a review. When unused applications are identified, findings are processed for further action; if a formal process for decommissioning unused applications has been established, that process is used.

The organization manages customer/user migration from older versions of its products individually for each product and customer/user group. Multiple versions of each product may be in active use, requiring development teams to invest significant effort in back-porting product fixes.

### Maturity Questions
#### Q 1
When unused systems, applications, or services are identified, are they removed from service?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

#### Q 2
Are end-of-life resources (operating system versions, third-party applications/services/libraries) removed from the environment before their support period ends?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

## Maturity 2
### Benefit
- Reduced attack surface, through elimination of unused configuration in operating environments
- Elimination of risks associated with end-of-life software

### Activity
As part of decommissioning a system, application, or service, the organization follows an established process for removing all relevant accounts, firewall rules, data, etc. from the operational environment. By removing these unused elements from configuration files, the organization improves the maintainability of its infrastructure-as-code resources.

The organization follows a consistent process for timely replacement or upgrade of third-party applications, or application dependencies (e.g., operating system, utility applications, libraries), that have reached end of life.

The organization engages with customers and user groups for its products at or approaching end of life, to migrate them to supported versions in a timely manner.

### Maturity Questions
#### Q 1
Does the organization follow an established process for removing all associated resources, as part of decommissioning unused applications?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

#### Q 2
Does the organization discontinue use of open-source applications/services/libraries that are no longer actively maintained?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

### Quality Indicators
- Operating environments do not contain orphaned accounts, firewall rules, or other configuration artifacts
- Operations are not dependent on end-of-life applications or components
- Customers are not using outdated versions of the organization's products, or migration plans are in place

### Notes

- Maybe define a high level objective for the established process (this text has been revised - objective is timely replacement/upgrade of EOL software)
- Maybe separate software supplier and software consumer activities into separate streams ([issue #53](https://github.com/OWASP/samm/issues/53))
- Explicitly mention manageability and attack surface as benefits. (Done, I think)

### Guidance


## Maturity 3
### Benefit
- Reduced risks, through eliminating unsupported applications and libraries from operating environments
- Minimized product support burden

### Activity
The organization regularly evaluates the lifecycle state and support status of every software asset and underlying infrastructure component, and estimates their end-of-life. The organization follows a well-defined process for actively mitigating security risks arising as assets/components approach their end-of-life. The organization regularly reviews and updates its process, to reflect lessons learned. 

The organization has established a product support plan, providing clear timelines for ending support on older product versions. Product versions in active use are limited to only a small number (e.g., N.x.x and N-1.x.x only). The organization establishes and publicizes timelines for discontinuing support on prior versions, and proactively engages with customers and user groups to prevent disruption of service or support.  

### Maturity Questions
#### Q 1
Are lifecycle state and end-of-life estimates captured for each software asset and infrastructure component?

*Answer Options*

- No
- Yes, for some of them
- Yes, for approx. half of them
- Yes, for most or all of them

#### Q 2
Does the organization actively manage customers/user groups, to ensure they are using only actively supported versions of the organization's products?

*Answer Options*

- No
- Yes, some of the time
- Yes, approx. half of the time
- Yes, most or all of the time

#### Q 3
Are the asset/component inventory, and the associated end-of-life management process, reviewed and updated?

*Answer Options*

- No
- Yes, we do it when requested
- Yes, we do it every few years
- Yes, we do it at least annually

### Quality Indicators
- The organization is not using unsupported applications or dependencies
- No active customers are using product versions that are no longer supported

### Notes

- Track if the application / service / firewall rule is being used or not / how much.
- Product support roadmap - expand on L2 by having support / sales staff proactively reaching to customers

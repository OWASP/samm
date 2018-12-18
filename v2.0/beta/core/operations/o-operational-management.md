---
business_functions : Operations
title : Operational Management
assignedto       : John (john.dileo@owasp.org)
complete          : 40%
business_functions_weight: 3
type: security_practice
---
# Short Description

# Long Description
The Operational Management practice focuses on activities to ensure security is maintained throughout operational support functions. Although these functions are not performed directly by an application, the overall security of the application and its data is dependent on their proper performance. All of the protections built into an application can be rendered irrelevant by deploying the application on an unsupported operating system with unpatched vulnerabilities, or failing to store backup media securely.

The functions covered by this practice include, but are not limited to: system provisioning, administration, and decommissioning; database provisioning and administration; and data backup, restore, and archival.

# Overview

| | A: Data Protection | B: System decomissioning / Legacy management |
|:---|:---|:---|
| Maturity 1 - Foundational Practices | Basic Data Protections in Place | Identification of unused and legacy applications/services |
| Maturity 2 - Managed, Responsive Processes | Data catalogued and data protection policy established | Decomissioning and legacy migration processes in place |
| Maturity 3 - Active Monitoring and Response | Data policy breaches detected and acted upon | Proactive reliable handling of legacy applications/services |

## Practice Notes
Possibly move the Third-Party Requirements stream into this practice, as a third stream?


# A: Data Protection

The activities in this stream focus on ensuring data are properly protected in all aspects of their creation, handling, storage, and processing. As an organization's maturity in this practice grows, the data managed are better understood, more precisely classified, and more effectively protected. 

## Maturity 1
### Benefit

### Activity
The organization understands the types and sensitivity of data stored and processed by applications, and maintains awareness of the fate of processed data (e.g., backups, sharing with external partners). At this level of maturity, the information gathered may be captured in varying forms and different places; no organization-wide data catalog is assumed to exist. All data associated with a given application are protected and handled in accordance with protection requirements applying to the most sensitive data stored and processed. 

Basic controls are in place, to ensure sensitive data from Production environments are not propagated to lower environments without having been properly sanitized/anonymized. By ensuring unsanitized production data are never propagated to lower (non-production) environments, the organization is able to focus data protection policies and activities on production. 

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

### Notes

### Guidance


## Maturity 2
### Benefit 

### Activity
At this maturity level, Data Protection activities are focused on actively managing the organization's stewardship of data. Technical and administrative controls established as part of this Activity serve to protect the confidentiality of sensitive data, as well as the integrity and availability of all data in the organization's care, from its initial creation/receipt through the destruction of backups at the end of their retention period.

The data stored, processed, and transmitted by applications are identified, and information regarding their types, sensitivity (classification) levels, and storage location(s) is captured in the organization's data catalog. Data records/elements subject to specific regulation are clearly identified. Establishing a single source of truth, regarding the data the organization works with, supports finer-grained selection of controls for their protection. The accuracy, timeliness, and efficiency of the organization's responses to data-related queries (e.g., from auditors, incident response teams, or customers) are also enhanced.

In accordance with the organization's Data Protection Policy, processes and procedures are in place for protecting and preserving data throughout their lifetime, whether at rest, being processed, or in transit. Particular attention is given to the handling and protection of sensitive data outside the active processing system, including, but not limited to: storage, retention, and destruction of backups; and the labeling, encryption, and physical protection of offline storage media. Organization processes and procedures cover the implementation of all controls adopted to comply with regulatory, contractual, or other restrictions on storage locations, personnel access, and other factors.


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

### Notes

- Data protection capabilities overlaps with policy & compliance governance. Third paragraph. However, the content here is already more specific. So maybe it just needs a reference to the P&C activity stream.
- Make the difference between L1 and L2 more clear. More concrete. Maybe mention the "data catalog".
- Why is a data catalogue useful? Data classification. Threat modelling.

### Guidance


## Maturity 3
### Benefit

### Activity
Activities at this maturity level are focused on making data protection "automatic," thereby reducing the organization's reliance on human effort to assess and manage compliance with policies. There is a focus on feedback mechanisms and proactive reviews, to identify and act on opportunities for process improvement.

Technical controls are implemented to enforce compliance with the Data Protection Policy, and active monitoring is in place to detect attempted or actual violations. The organization may leverage a variety of available tools for data loss prevention, access control and tracking, or anomalous behavior detection.

The organization's compliance with established administrative controls is regularly checked/audited. Performance and operation of automated mechanisms, including backups and record deletions, is closely monitored; failures are quickly detected and reported, to ensure timely corrective action can be taken.

The organization's data catalog is regularly reviewed, and updated as needed, to ensure it accurately reflects the data landscape. Processes and procedures are reviewed on a regular basis, and adjusted as needed to reflect changes to the organization's policies and priorities.


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

From the perspective of the organization as a consumer of resources, the activities in this stream are related to the identification, management, and tracking of systems, applications, application dependencies, and services that are no longer used, have reached end of life, or are no longer actively developed or supported. Removal of unused systems and services improves manageability of the environment and reduces the organization's attack surface, while affording direct and indirect cost savings (e.g., reduced license count, reduced logging volume, or reduced analyst effort).

From the perspective of the organization as a supplier of software, activities in this stream focus on managing and - to the extent possible - reducing the organization's support and maintenance workload, through the coordinated retirement of "legacy" software versions. Benefits to the organization can be significant over the long term, as a direct consequence of reducing the required back-porting effort for security-related fixes. These activities apply to all software resources developed by the organization, whether for internal use or for distribution to customers/users.

## Maturity 1
### Benefit

### Activity
Identification of unused applications occurs on an _ad hoc_ basis, either by chance observation, or by occasionally performing a review. When unused applications are identified, findings are processed for further action; if a formal process for decommissioning unused applications has been established, that process is used. 

The organization's 

Customer/user migration from older versions of the organization's products is managed individually for each product and customer/user group. Multiple versions of each product may be in active use, requiring development teams to invest significant effort in back-porting product fixes.

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
### Activity
When a system, application, or service is decomissioned, an established process is followed to ensure all relevant accounts, firewall rules, data, etc. are also removed from the operational environment.

The organization follows an established process when third-party applications, or application dependencies (e.g., operating system, utility applications, libraries), reach end of life.

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

### Notes

- Maybe define a high level objective for the established process
- Established good communication mechanisms to let you customers know about product lifecycle. You have a product support plan and are communicating it
- Maybe separate software supplier and software consumer activities into separate streams ([issue #53](https://github.com/OWASP/samm/issues/53))
- Explicitly mention manageability and attack surface as benefits.

### Guidance


## Maturity 3
### Benefit

### Activity
The lifecycle state and support status of every software asset, and underlying infrastructure component, is regularly evaluated and their end-of-life is estimated. The organization follows a well-defined process for actively mitigating security risks arising as assets/components approach their end-of-life. The process itself is also regularly reviewed, and adjusted as neeeded, to reflect lessons learned. 

The organization has established a product support roadmap, ensuring customers/user groups are migrated from older versions of the organization's products. Product versions in active use are limited to only a small number (e.g., N.x.x and N-1.x.x only); timelines for discontinuing support on prior versions are established and documented.  


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

### Notes

- Track if the application / service / firewall rule is being used or not / how much.
- Product support roadmap - expand on L2 by having support / sales staff proactively reaching to customers


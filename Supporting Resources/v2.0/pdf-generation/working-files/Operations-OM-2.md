<div class="new-page"/>
### Operational Management (OM2)

The goal of this practice level is to managed, Responsive Processes

#### Activities

##### [Stream A] Establish a data catalog
<b>Benefit</b>: <i>Standardized handling of different classes of sensitive data</i>

At this maturity level, Data Protection activities focus on actively managing your stewardship of data. Establish technical and administrative controls to protect the confidentiality of sensitive data, and the integrity and availability of all data in your care, from its initial creation/receipt through the destruction of backups at the end of their retention period.

Identify the data stored, processed, and transmitted by applications, and capture information regarding their types, sensitivity (classification) levels, and storage location(s) in your data catalog. Clearly identify records or data elements subject to specific regulation. Establishing a single source of truth regarding the data you work with supports finer-grained selection of controls for their protection. Collecting this information enhances the accuracy, timeliness, and efficiency of your responses to data-related queries (e.g., from auditors, incident response teams, or customers), and supports threat modeling and compliance activities.

Based on your Data Protection Policy, establish processes and procedures for protecting and preserving data throughout their lifetime, whether at rest, while being processed, or in transit. Pay particular attention to the handling and protection of sensitive data outside the active processing system, including, but not limited to: storage, retention, and destruction of backups; and the labeling, encryption, and physical protection of offline storage media. Your processes and procedures cover the implementation of all controls adopted to comply with regulatory, contractual, or other restrictions on storage locations, personnel access, and other factors.


###### Assessment Question(s)
Do you maintain a data catalog, including types, sensitivity levels, and processing and storage locations?

- No
- Yes, for some of our data
- Yes, for at least half of our data
- Yes, for most or all of our data


Quality Criteria:

- The data catalog is stored in an accessible location
- You know which data elements are subject to specific regulation
- You have controls for protecting and preserving data throughout its lifetime
- You have retention requirements for data, and you destroy backups in a timely manner after the relevant retention period ends


##### [Stream B] Formalize decommissioning process
<b>Benefit</b>: <i>Standardized decommisioning process decreasing the risk of forgetting components</i>

As part of decommissioning a system, application, or service, follow an established process for removing all relevant accounts, firewall rules, data, etc. from the operational environment. By removing these unused elements from configuration files, you improve the maintainability of infrastructure-as-code resources.

Follow a consistent process for timely replacement or upgrade of third-party applications, or application dependencies (e.g., operating system, utility applications, libraries), that have reached end of life.

Engage with customers and user groups for your products at or approaching end of life, to migrate them to supported versions in a timely manner.


###### Assessment Question(s)
Do you follow an established process for removing all associated resources, as part of decommissioning of unused systems, applications, application dependencies, or services?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- You document the status of support for all released versions of your products, in an accessible location
- The process includes replacement or upgrade of third-party applications, or application dependencies, that have reached end of life
- Operating environments do not contain orphaned accounts, firewall rules, or other configuration artifacts


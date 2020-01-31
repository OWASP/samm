## Operations
This business function contains the following three security practices.

### Incident Management

Once your organization has applications in operation, you're likely to face security incidents. In this model, we define a security incident as a breach, or the threat of an imminent breach, of at least one asset's security goals, whether due to malicious or negligent behavior. Examples of security incidents might include: a successful Denial of Service (DoS) attack against a cloud application, an application user accessing private data of another by abusing a security vulnerability, or an attacker modifying application source code. The Incident Management (IM) practice focuses on dealing with these in your organization.

Historically, many security incidents have been detected months, or even years, after the initial breach. During the "dwell time" before an incident is detected, significant damage can occur, increasing the difficulty of recovery. Our first activity stream, Incident Detection, focuses on decreasing that dwell time.

Once you have identified that you're suffering from a security incident, it's essential to respond in a disciplined, thorough manner to limit the damage, and return to normal operations as efficiently as possible. This is the focus of our second stream.


#### Streams

  - `Incident Detection`:
    Incident Detection refers to the process of determining an identified security-relevant event is, in fact, a security incident. The activities in this stream focus on the organization's ability to identify security incidents when they occur, and to initiate appropriate incident response activities.

  - `Incident Response`:
    Incident Response starts the moment you acknowledge and verify the existence of a security incident. Your goal is to act in a coordinated and efficient way so that further damage is limited as much as possible. The activities in this stream focus on the organization's ability to respond appropriately and effectively to reported security incidents.


### Environment Management

The organization's work on application security doesn't end once the application becomes operational. New security features and patches are regularly released for the various elements of the technology stack you're using, until they become obsolete or are no longer supported.

Most of the technologies in any application stack are not secure by default. This is frequently intentional, to enhance backwards compatibility or ease of setup. For this reason, ensuring the secure operation of the organization's technology stack requires the consistent application of secure baseline configurations to all components. The Environment Management (EM) practice focuses on keeping your environment clean and secure.

Vulnerabilities are discovered throughout the lifecycles of the technologies on which your organization relies, and new versions addressing them are released on various schedules. This makes it essential to monitor vulnerability reports and perform orderly, timely patching across all affected systems.


#### Streams

  - `Configuration Hardening`:
    The activities in this stream focus on the organization's management of security-related configurations in all elements of the technology stack. The emphasis is on those elements (e.g., operating systems, containers, frameworks, services, appliances, and libraries) obtained from third parties, because their architecture and design are not under the organization's control.

  - `Patching and Updating`:
    The activities in this stream focus on the organization's handling of patches and updates for all elements of the technology stack. For software developed by the organization, these activities are concerned with delivering patches and updates to customers, as well as applying them to organization-managed solutions (e.g., software as a service). For third-party elements, these activities are concerned with the organization's timely application of updates and patches received.


### Operational Management

The Operational Management (OM) practice focuses on activities to ensure security is maintained throughout operational support functions. Although these functions are not performed directly by an application, the overall security of the application and its data depends on their proper performance. Deploying an application on an unsupported operating system with unpatched vulnerabilities, or failing to store backup media securely, can make the protections built into that application irrelevant.

The functions covered by this practice include, but are not limited to: system provisioning, administration, and decommissioning; database provisioning and administration; and data backup, restore, and archival.


#### Streams

  - `Data Protection`:
    The activities in this stream focus on ensuring the organization properly protects data in all aspects of their creation, handling, storage, and processing.

  - `System Decomissioning / Legacy Management`:
    From the perspective of the organization as a consumer of resources, the activities in this stream focus on the identification, management, and tracking of systems, applications, application dependencies, and services that are no longer used, have reached end of life, or are no longer actively developed or supported. Removal of unused systems and services improves manageability of the environment and reduces the organization's attack surface, while affording direct and indirect cost savings (e.g., reduced license count, reduced logging volume, or reduced analyst effort).




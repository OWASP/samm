<div class="new-page"/>
### Architecture Assessment (AA1)

The goal of this practice level is to review the architecture to ensure baseline mitigations are in place for typical risks.

#### Activities

##### [Stream A] Assess application architecture
<b>Benefit</b>: <i>Understanding of high-level architecture and sensible security measures</i>

Create a view of the overall architecture and examine it for the correct provision of general security mechanisms such as authentication, authorization, user and rights management, secure communication, data protection, key management and log management. Also consider the support for privacy. Do this based on project artifacts such as architecture or design documents, or interviews with business owners and technical staff. Also consider the infrastructure components - these are all the systems, components and libraries (including SDKs) that are not specific to the application, but provide direct support to use or manage the application(s) in the organisation.

Note any security-related functionality in the architecture and review its correct provision. Do this in an ad-hoc manner, from the point of view of anonymous users, authorized users, and specific application roles.


###### Assessment Question(s)
Do you review the application architecture for key security objectives on an ad-hoc basis?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have an agreed upon model of the overall software architecture
- You include components, interfaces, and integrations in the architecture model
- You verify the correct provision of general security mechanisms
- You log missing security controls as defects


##### [Stream B] Evaluate architecture for typical threats
<b>Benefit</b>: <i>Assures that the architecture protects against typical security threats.</i>

Review the architecture for typical security threats. Security-savvy technical staff conduct this analysis with input from architects, developers, managers, and business owners as needed, to ensure the architecture addresses all common threats which development teams lacking specialised security expertise may have overlooked.

Typical threats in an architecture can relate to incorrect assumptions in, or overly reliance on, the provisioning of security mechanisms such as authentication, authorization, user and rights management, secure communication, data protection, key management and log management. Threats, on the other hand, can also relate to known limitations of, or issues in, technological components or frameworks that are part of the solution and for which insufficient mitigation has been put in place.


###### Assessment Question(s)
Do you review the application architecture for mitigations of typical threats on an ad-hoc basis?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have an agreed upon model of the overall software architecture
- Security savvy staff conduct the review
- You consider different types of threats, including insider and data-related one


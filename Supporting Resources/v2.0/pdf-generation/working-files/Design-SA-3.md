<div class="new-page"/>
### Security Architecture (SA3)

The goal of this practice level is to formally control the software design process and validate utilization of secure components.

#### Activities

##### [Stream A] Build reference architectures
<b>Benefit</b>: <i>Full transparency of quality and usability of centrally provided security solutions</i>

Build a set of reference architectures that select and combine a verified set of security components to ensure a proper design of security. Reference platforms have advantages in terms of shortening audit and security-related reviews, increasing efficiency in development, and lowering maintenance overhead. Continuously maintain and improve the reference architecture based on new insights in the organization and within the community. Have architects, senior developers and other technical stakeholders participate in design and creation of reference platforms. After creation, teams maintain ongoing support and updates.

Reference architectures may materialize into a set of software libraries and tools upon which project teams build their software. They serve as a starting point that standardizes the configuration-driven, security-by-default security approach. You can bootstrap the framework by selecting a particular project early in the lifecycle and having security-savvy staff work with them to build the security functionality in a generic way so that it can be extracted from the project and used elsewhere in the organization.

Monitor weaknesses or gaps in the set of security solutions available in your organization continuously in the context of discussions on architecture, development, or operations. This serves as an input to improve the appropriateness and effectiveness of the reference architectures that you have in place.


###### Assessment Question(s)
Do you base your design on available reference architectures?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have one or more approved reference architectures documented and available to stakeholders
- You improve the reference architectures continuously based on insights and best practices
- You provide a set of components, libraries, and tools to implement each reference architecture


##### [Stream B] Enforce the use of recommended technologies
<b>Benefit</b>: <i>Limited attack surface due to usage of vetted technologies</i>

For all proprietary development (in-house or acquired), impose and monitor the use of standardized technology. Depending on your organization, either implement these restrictions into build or deployment tools, by means of after-the-fact automated analysis of application artefacts (e.g., source code, configuration files or deployment artefacts), or periodically review focusing on the correct use of these frameworks.

Verify several factors with project teams. Identify use of non-recommended technologies to determine if there are gaps in recommendations versus the organization’s needs. Examine unused or incorrectly used design patterns and reference platform modules to determine if updates are needed. Additionally, implement functionality in the reference platforms as the organization evolves and project teams request it.


###### Assessment Question(s)
Do you enforce the use of recommended technologies within the organization?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You monitor applications regularly for the correct use of the recommended technologies
- You solve violations against the list accoranding to organizational policies
- You take action if the number of violations falls outside the yearly objectives


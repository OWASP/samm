<div class="new-page"/>
### Security Architecture (SA2)

The goal of this practice level is to direct the software design process toward known secure services and secure-by-default designs.

#### Activities

##### [Stream A] Provide preferred security solutions
<b>Benefit</b>: <i>Reusable security services available for product teams</i>

Identify shared infrastructure or services with security functionality. These typically include single-sign-on services, access control or entitlements services, logging and monitoring services or application-level firewalling. Collect and evaluate reusable systems to assemble a list of such resources and categorize them by the security mechanism they fulfill. Consider each resource in terms of why a product team would want to integrate with it, i.e. the benefits of using the shared resource.

If multiple resources exist in each category, select and standardize on one or more shared service per category. Because future software development will rely on these services, review each thoroughly to ensure understanding of the baseline security posture. For each selected service, create design guidance for product teams to understand how to integrate with the system. Make the guidance available through training, mentorship, guidelines, and standards.

Establish a set of best practices representing sound methods of implementing security functionality. You can research them or purchase them, and it is often more effective if you customize them so they are more specific to your organization. Example patterns include a single-sign-on subsystem, a cross-tier delegation model, a separation-of-duties authorization model, a centralized logging pattern, etc.

These patterns can originate from specific projects or applications, but make sure you share them between different teams across the organization for efficient and consistent application of appropriate security solutions.

To increase adoption of these patterns, link them to the shared security services, or implement them into actual component solutions that can be easily integrated into an application during development. Support the key technologies within the organization, for instance in case of different development stacks. Treat these solutions as actual applications with proper support in case of questions or issues.


###### Assessment Question(s)
Do you use shared security services during design?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have a documented list of reusable security services, available to relevant stakeholders
- You have reviewed the baseline security posture for each selected service
- Your designers are trained to integrate each selected service following available guidance


##### [Stream B] Promote preferred tools and technologies
<b>Benefit</b>: <i>Technologies with appropriate security level available to product teams</i>

Identify commonly used technologies, frameworks and tools in use across software projects in the organization, whereby you focus on capturing the high-level technologies.

Create a list and share it across the development organization as recommended technologies. When selecting them, consider incident history, track record for responding to vulnerabilities, appropriateness of functionality for the organization, excessive complexity in usage of the third-party component, and sufficient knowledge within the organization.

Senior developers and architects create this list, including input from managers and security auditors. Share this list of recommended components with the development organization. Ultimately, the goal is to provide well-known defaults for project teams. Perform a periodic review of these technologies for security and appropriateness.


###### Assessment Question(s)
Do you have a list of recommended technologies for the organization?

- No
- Yes, for some of the technology domains
- Yes, for at least half of the technology domains
- Yes, for most or all of the technology domains


Quality Criteria:

- The list is based on technologies used in the software portfolio
- Lead architects and developers review and approve the list
- You share the list across the organization
- You review and update the list at least yearly


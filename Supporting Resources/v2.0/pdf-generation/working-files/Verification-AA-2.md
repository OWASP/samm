<div class="new-page"/>
### Architecture Assessment (AA2)

The goal of this practice level is to review the complete provision of security mechanisms in the architecture.

#### Activities

##### [Stream A] Verify the application architecture for security methodically
<b>Benefit</b>: <i>Consistent architecture review process across your organization</i>

Verify that the solution architecture addresses all identified security and compliance requirements. For each interface in the application, iterate through the list of security and compliance requirements and analyze the architecture for their provision. Also perform an interaction or data flow analysis to ensure that the requirements are adequately addressed over different components. Elaborate the analysis to show the design-level features that address each requirement.

Perform this type of analysis on both internal interfaces, e.g. between tiers, as well as external ones, e.g. those comprising the attack surface. Also identify and validate important design decisions made as part of the architecture, in particular when they deviate from the available shared security solutions in the organization. Finally, update the findings based on changes made during the development cycle, and note any requirements that are not clearly provided at the design level as assessment findings.


###### Assessment Question(s)
Do you regularly review the security mechanisms of your architecture?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You review compliance with internal and external requirements
- You systematically review each interface in the system
- You use a formalized review method and structured validation
- You log missing security mechanisms as defects


##### [Stream B] Structurally verify the architecture for identified threats
<b>Benefit</b>: <i>All identified threats to the application are adequately handled.</i>

Systematically review each threat identified during the Threat Assessment activities and examine how the architecture mitigates them. Use a standardised process for analyzing system architectures and the flow of data within them. This is typically linked to the threat model used (e.g. STRIDE) in order to identify the relevant security objectives which address each type of threat. For each threat, identify the design-level features of the architecture which counter it and assess their effectiveness in doing so.

Where available, review architectural decision records to understand the architectural constraints and tradeoffs made during design. Take their impact into consideration along with any security assumptions on which the safe operation of the system relies and re-evaluate them.

Enrich your previously created threat model such that each threat and its estimated impact are linked to the corresponding counter measure. Produce a mapping document, or dashboard in a specialized tool, to make the information available and visible to the relevant stakeholders.


###### Assessment Question(s)
Do you regularly evaluate the threats to your architecture?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You systematically review each threat identified in the Threat Assessment
- Trained or experienced people lead review exercise
- You identify mitigating design-level features for each identified threat
- You log unhandled threats as defects


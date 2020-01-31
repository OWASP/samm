<div class="new-page"/>
### Security Requirements (SR2)

The goal of this practice level is to increase granularity of security requirements derived from business logic and known risks.

#### Activities

##### [Stream A] Standardize and integrate security requirements
<b>Benefit</b>: <i>Alignment of security requirements with other types of requirements</i>

Security requirements can originate from other sources including policies and legislation, known problems within the application, and intelligence from metrics and feedback. At this level, a more systematic elicitation of security requirements must be achieved by analysing different sources of such requirements. Ensure that appropriate input is received from these sources to help the elicitation of requirements. For example, organize interviews or brainstorm sessions (e.g., in the case of policy and legislation), analyze historical logs or vulnerability systems.

Use a structured notation of security requirements across applications and an appropriate formalism that integrates well with how you specify other (functional) requirements for the project. This could mean, for example, extending analysis documents, writing user stories, etc.

When requirements are specified, it is important to ensure that these requirements are taken into account during product development. Setup a mechanism to stimulate or force project teams to meet these requirements in the product. For example, annotate requirements with priorities, or influence the handling of requirements to enforce sufficient security appetite (while balancing against other non-functional requirements).


###### Assessment Question(s)
Do you define, structure, and include prioritization in the artifacts of the security requirements gathering process?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- Security requirements take into consideration domain specific knowledge when applying policies and guidance to product development
- Domain experts are involved in the requirements definition process
- You have an agreed upon structured notation for security requirements
- Development teams have a security champion dedicated to reviewing security requirements and outcomes


##### [Stream B] Discuss security responsabilities with suppliers
<b>Benefit</b>: <i>Clearly defined security responsibilities of your software suppliers</i>

Increase your confidence in the capability of your suppliers for software security. Discuss concrete responsibilities and expectations from your suppliers and your own organization and establish a contract with the supplier. The responsibilities can be specific quality requirements or particular tasks, and minimal service can be detailed in a Service Level Agreement (SLA). A quality requirement example is that they will deliver software that is protected against the OWASP Top 10, and in case issues are detected, these will be fixed. A task example is that they have to perform continuous static code analysis, or perform an independent penetration test before a major release. The agreement stipulates liabilities and caps in case an important issue arises.

Once you have implemented this for a few suppliers, work towards a standard agreement for suppliers that forms the basis of your negotiations. You can deviate from this standard agreement on a case by case basis, but it will help you to ensure you do not overlook important topics.


###### Assessment Question(s)
Do vendors meet the security responsibilities and quality measures of service level agreements defined by the organization?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- You discuss security requirements with the vendor when creating vendor agreements
- Vendor agreements provide specific guidance on security defect remediation within an agreed upon timeframe
- The organization has a templated agreement of responsibilities and service levels for key vendor security processes
- You measure key performance indicators


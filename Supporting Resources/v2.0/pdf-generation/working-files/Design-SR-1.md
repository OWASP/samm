<div class="new-page"/>
### Security Requirements (SR1)

The goal of this practice level is to consider security explicitly during the software requirements process.

#### Activities

##### [Stream A] Identify security requirements
<b>Benefit</b>: <i>Understanding of key security requirements during development</i>

Perform a review of the functional requirements of the software project. Identify relevant security requirements (i.e. expectations) for this functionality by reasoning on the desired confidentiality, integrity or availability of the service or data offered by the software project. Requirements state the objective (e.g., “personal data for the registration process should be transferred and stored securely”), but not the actual measure to achieve the objective (e.g., “use TLSv1.2 for secure transfer”).

At the same time, review the functionality from an attacker perspective to understand how it could be misused. This way you can identify extra protective requirements for the software project at hand.

Security objectives can relate to specific security functionality you need to add to the application (e.g., “Identify the user of the application at all times”) or to the overall application quality and behavior (e.g., “Ensure personal data is properly protected in transit”), which does not necessarily lead to new functionality. Follow good practices for writing security requirements. Make them specific, measurable, actionable, relevant and time-bound (SMART). Beware of adding requirements too general-purpose to not relate to the application at hand (e.g., The application should protect against the OWASP Top 10). While they can be true, they don’t add value to the discussion.


###### Assessment Question(s)
Do project teams specify security requirements during development?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Teams derive security requirements from functional requirements and customer or organization concerns
- Security requirements are specific, measurable, and reasonable
- Security requirements are in line with the organizational baseline


##### [Stream B] Perform vendor assessments
<b>Benefit</b>: <i>Transparency of security practices of your software suppliers</i>

The security competences and habits of the expernal suppliers involved in the development of your software can have a significant impact on the security posture of the final product. Consequently, it is important to know and evaluate your suppliers on this front.

Carry out a vendor assessment to understand the strengths and weaknesses of your suppliers. Use a basic checklist or conduct interviews to review their typical practices and deliveries. This gives you an idea of how they organize themselves and elements to evaluate whether you need to take additional measures to mitigate potential risks. Ideally, speak to different roles in the organization, or even set up a small maturity evaluation to this end. Strong suppliers will run their own software assurance program and will be able to answer most of your questions. If suppliers have weak competences in software security, discuss with them how and to what extent they plan to work on this and evaluate whether this is enough for your organization. A software supplier might be working on a low-risk project, but this could change.

It is important that your suppliers understand and align to the risk appetite and are able to meet your requirements in that area. Make what you expect from them explicit and discuss this clearly.


###### Assessment Question(s)
Do stakeholders review vendor collaborations for security requirements and methodology?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- You consider including specific security requirements, activities, and processes when creating third-party agreements
- A vendor questionnaire is available and used to assess the strengths and weaknesses of your suppliers


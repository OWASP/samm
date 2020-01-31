<div class="new-page"/>
### Threat Assessment (TA1)

The goal of this practice level is to consider security explicitly during the software requirements process.

#### Activities

##### [Stream A] Perform application risk assessments
<b>Benefit</b>: <i>Ability to classify applications according to risk</i>

Use a simple method to evaluate the application risk per application, estimating the potential business impact that it poses for the organization in case of an attack. To achieve this, evaluate the impact of a breach in the confidentiality, integrity and availability of the data or service. Consider using a set of 5-10 questions to understand important application characteristics, such as whether the application processes financial data, whether it is internet facing, or whether privacy-related data is involved. The application risk profile tells you whether these factors are applicable and if they could significatly impact the organization.

Next, use a scheme to classify applications according to this risk. A simple, qualitative scheme (e.g. high/medium/low) that translates these characteristics into a value is often effective. It is important to use these values to represent and compare the risk of different applications against each other. Mature highly risk-driven organizations might make use of more quantitative risk schemes. Don’t invent a new risk scheme if your organization already has one that works well.


###### Assessment Question(s)
Do you classify applications according to business risk based on a simple and predefined set of questions?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- An agreed-upon risk classification exists
- The application team understands the risk classification
- The risk classification covers critical aspects of business risks the organization is facing
- The organization has an inventory for the applications in scope


##### [Stream B] Perform basic threat modeling
<b>Benefit</b>: <i>Identification of architectural design flaws in your applications</i>

Threat modeling is a structured activity for identifying, evaluating, and managing system threats, architectural design flaws, and recommended security mitigations. It is typically done as part of the design phase or as part of a security assessment.

Threat modeling is a team exercise, including product owners, architects, security champions, and security testers. At this maturity level, expose teams and stakeholders to threat modeling to increase security awareness and to create a shared vision on the security of the system.

At maturity level 1, you perform threat modeling ad-hoc for high-risk applications and use simple threat checklists, such as STRIDE. Avoid lengthy workshops and overly detailed lists of low-relevant threats. Perform threat modeling iteratively to align to more iterative development paradigms. If you add new functionality to an existing application, look only into the newly added functions instead of trying to cover the entire scope. A good starting point is the existing diagrams that you annotate during discussion workshops. Always make sure to persist the outcome of a threat modeling discussion for later use.

Your most important tool to start threat modeling is a whiteboard, smartboard, or a piece of paper. Aim for security awareness, a simple process, and actionable outcomes that you agree upon with your team.


###### Assessment Question(s)
Do you identify and manage architectural design flaws with threat modeling?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- You perform threat modeling for high-risk applications
- You use simple threat checklists, such as STRIDE
- You persist the outcome of a threat model for later use


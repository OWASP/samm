<div class="new-page"/>
### Threat Assessment (TA2)

The goal of this practice level is to increase granularity of security requirements derived from business logic and known risks.

#### Activities

##### [Stream A] Inventorize risk profiles
<b>Benefit</b>: <i>Solid understanding of the risk level of your application portfolio</i>

The goal of this activity is to thoroughly understand the risk level of all applications within the organization, to focus the effort of your software assurance activities where it really matters.

From a risk evaluation perspective, the basic set of questions is not enough to thoroughly evaluate the risk of all applications. Create an extensive and standardized way to evaluate the risk of the application, among others via their impact on information security (confidentiality, integrity and availability of data). Next to security, you also want to evaluate the privacy risk of the application. Understand the data that the application processes and what potential privacy violations are relevant. Finally, study the impact that this application has on other applications within the organization (e.g., the application might be modifying data that was considered read-only in another context). Evaluate all applications within the organization, including all existing and legacy ones.

Leverage business impact analysis to quantify and classify application risk. A simple qualitative scheme (such as high/medium/low) is not enough to effectively manage and compare applications on an enterprise-wide level.

Based on this input, Security Officers leverage the classification to define the risk profile to build a centralized inventory of risk profiles and manage accountability. This inventory gives Product Owners, Managers, and other organizational stakeholders an aligned view of the risk level of an application in order to assign appropriate priority to security-related activities.


###### Assessment Question(s)
Do you use centralized and quantified application risk profiles to evaluate business risk?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- The application risk profile is in line with the organizational risk standard
- The application risk profile covers impact to security and privacy
- You validate the quality of the risk profile manually and/or automatically
- The application risk profiles are stored in a central inventory


##### [Stream B] Standardize and scale threat modeling
<b>Benefit</b>: <i>Clear expectations of the quality of threat modeling activites</i>

Use a standardized threat modeling methodology for your organization and align this on your application risk levels. Think about ways to support the scaling of threat modeling throughout the organization.

Train your architects, security champions, and other stakeholders on how to do practical threat modeling.  Threat modeling requires understanding, clear playbooks and templates, organization-specific examples, and experience, which is hard to automate.

Your threat modeling methodology includes at least diagramming, threat identification, design flaw mitigations, and how to validate your threat model artifacts. Your threat model diagram allows a detailed understanding of the environment and the mechanics of the application. You discover threats to your application with checklists, such as STRIDE or more organization-specific threats. For identified design flaws (ranked according to risk for your organization), you add mitigating controls to support stakeholders in dealing with particular threats. Define what triggers updating a threat model, for example, a technology change or deployment of an application in a new environment.

Feed the output of threat modeling to the defect management process for adequate follow-up. Capture the threat modeling artifacts with tools that are used by your application teams.


###### Assessment Question(s)
Do you use a standard methodology, aligned on your application risk levels?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You train your architects, security champions, and other stakeholders on how to do practical threat modeling
- Your threat modeling methodology includes at least diagramming, threat identification, design flaw mitigations, and how to validate your threat model artifacts
- Changes in the application or business context trigger a review of the relevant threat models
- You capture the threat modeling artifacts with tools that are used by your application teams


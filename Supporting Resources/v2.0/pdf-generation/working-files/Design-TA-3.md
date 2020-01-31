<div class="new-page"/>
### Threat Assessment (TA3)

The goal of this practice level is to mandate security requirements process for all software projects and third-party dependencies.

#### Activities

##### [Stream A] Periodic review of risk profiles
<b>Benefit</b>: <i>Timely update of the application classification in case of changes</i>

The application portfolio of an organization changes, as well as the conditions and constraints in which an application lives (e.g., driven by the company strategy). Periodically review the risk inventory to ensure correctness of the risk evaluations of the different applications.

Have a periodic review at an enterprise-wide level. Also, as your enterprise matures in software assurance, stimulate teams to continuously question which changes in conditions might impact the risk profile. For instance, an internal application might become exposed to the internet by a business decision. This should trigger the teams to rerun the risk evaluation and update the application risk profile accordingly.

In a mature implementation of this practice, train and continuously update teams on lessons learned and best practices from these risk evaluations. This leads to a better execution and a more accurate representation of the application risk profile.


###### Assessment Question(s)
Do you regularly review and update the risk profiles for your applications?

- No
- Yes, sporadically
- Yes, upon change of the application
- Yes, at least annually


Quality Criteria:

- The organizational risk standard considers historical feedback to improve the evaluation method
- Significant changes in the application or business context trigger a review of the relevant risk profiles


##### [Stream B] Optimize threat modeling
<b>Benefit</b>: <i>Assurance of continuous improvement of threat modeling activities</i>

Threat modeling is integrated into your SDLC and has become part of the developer security culture.  Reusable risk patterns, comprising of related threat libraries, design flaws, and security mitigations, are created and improved, based on the organization's threat models. You regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications.

You optimize your threat modeling methodology. You capture lessons learned from threat models and use these to improve your threat modeling methodology.  You review the threat categories relevant to your organization and update your methodology appropriately. From time to time, you evaluate the quality of your threat models independently.

You automate parts of your threat modeling process with threat modeling tools. You integrate your threat modeling tools with other security tools, such as security verification tools and risk tracking tools. You consider "threat modeling as code" practices to integrate threat modeling artifacts with application code.


###### Assessment Question(s)
Do you regularly review and update the threat modeling methodology for your applications?

- No
- Yes, but review is ad-hoc
- Yes, we review it at regular times
- Yes, we review it at least annually


Quality Criteria:

- The threat model methodology considers historical feedback for improvement
- You regularly (e.g., yearly) review the existing threat models to verify that no new threats are relevant for your applications
- You automate parts of your threat modeling process with threat modeling tools


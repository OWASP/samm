---
business_functions : Governance
title : Education & Guidance
assignedto       : Yan Kravchenko (@yanfosec)
complete         : 40%
status           : draft        #new, draft, for_review, release_candidate, done
business_functions_weight: 3
type: security_practice
---
# Short Description

# Long Description
The Education & Guidance (EG) Practice is focused on arming personnel involved in the software lifecycle with knowledge and resources to design, develop, and deploy secure software. With improved access to information, project teams will be better able to proactively identify and mitigate the specific security risks that apply to their organization.

One major theme for improvement across the Objectives is providing training for employees and increasing their security awareness, either through instructor-led sessions or computer-based modules. As an organization progresses, a broad base of training is built by starting with developers and moving to other roles throughout the organization, culminating with the addition of role-based training to ensure applicability and effectiveness.

In addition to training, this Practice also requires the organization to make a significant investment in improving organizational culture to promote application security through collaboration between teams.  This approach should be supported with collaboration tools and increased transparency between technologies and tools leveraged for improving the security of the applications.

# Overview
| | A: Training and Awareness | B: Organization and Culture |
|:---|:---|:---|
| Maturity 1 - Offer staff access to resources around the topics of secure development and deployment. | Provide security awareness training for all personnel involved in software development | Identify a "Security Champion" within each development team |
| Maturity 2 - Educate all personnel in the software lifecycle with technology and role-specific guidance on secure development. | Offer technology and role-specific guidance, including security nuances of each language and platform | Develop a secure software center of excellence promoting thought leadership among developers and architects |
| Maturity 3 - Develop in-house training programs facilitated by developers across different teams | Standardized inhouse guidance around the organization's secure software development standards. | Build a secure software community including all organisation people involved in software security |

# A: Training and Awareness

## Maturity 1
### Benefit
Stakeholders involved in producing software have an appreciation for the difficulty of creating secure software and the value of a secure SDLC.
### Activity
Conduct security awareness training for all roles currently involved in the management, development, testing, or auditing of the software. The goal is to increase the awareness of application security threats and risks, as well as security best practices and secure software design principles. The training may be developed internally or procured externally, and may be delivered in-person or using Computer Based Training (CBT). Ideally, training should be delivered in-person to offer participants the benefit of participating in a discussion as a team, rather than receiving one-on-one through a CBT.

Course content should include a range of topics relevant to application security and privacy, while remaining accessible to a non-technical audience. Suitable concepts are secure design principles including Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability. Additionally, the training should include references to any organization-wide standards, policies, and procedures defined to improve application security. The OWASP Top 10 vulnerabilities should be covered at a high level.

Training should be considered mandatory for all employees and contractors involved with software development and include an auditable sign-off to demonstrate compliance. Training should strive to leverage new and innovative ways of delivery (such as gamifying certain elements) to maximise its effectiveness and combat desensetisation.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators
  * Developers recognize the most important application security flaws.
  * Managers understand the importance of security activities.
  * Testers better understand the attacker mindset.

### External References
- [NIST SP 800-50](https://csrc.nist.gov/publications/detail/sp/800-50/final)
- [OWASP Top 10 Project](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
- [OWASP Training Resources](https://www.owasp.org/index.php/OWASP_Training)
- [OWASP Application Security Curriculum](https://www.owasp.org/index.php/OWASP_Application_Security_Curriculum)

#### Notes

**Summit MN:**
* DK: I wouldn't base anything on Top10 
* DK: Mandatory technical trainings: project manager won't understand much, QA also problematic, I would rather go for conscious decision
* DK: I'm not convinced that an awareness training should be too technical

## Maturity 2
### Benefit
Stakeholders involved in producing software receive role-specific security training.

### Activity
Conduct instructor-led or CBT based security training specific to roles and technologies used within the organization, starting with the core development team. The organization should customize training for product managers, software developers, testers, and security auditors, ensuring to customize the content to each group's technical needs. 

- Product managers should be training on topics related to SAMM business functions and security practices, with the emphasis on security requirements, threat modeling, and defect tracking.
- Developers should be trained on coding standards and best practices related to the technologies they work with to ensure the training directly benefits security of the application. They should also have a solid technical understanding of the OWASP Top 10 vulnerabilities, or similar weaknesses relevant to the technologies and frameworks used (e.g. mobile), and the most common remediation strategies for each issue.  
- Testers should be educated on the different testing tools and best practices related to technologies in use by the organization, as well as in tools designed to identify security defects.
- Security auditors should be trained on the SDLC lifecycle and various application security mechanisms in use by the organization, as well as the process for submitting security defects for remediation.
- Security Champions should be trained on security topics from various phases of the SDLC. Specifically, they receive the same training as developers and testers, but also understand threat modelling and secure design, as well as security tools and technologies which can be integrated into the build environment. 

The goal should be to include all training content described in the Maturity Level 1 activities of this activity stream and include additional role-specific and technology-specific content while eliminating aspects of the training considered unnecessary.

Ideally, each organization should identify a subject-matter expert in each technology to assist with procuring or developing the necessary training content as well as updating it on a regular basis. Whenever possible, the training should consist of demonstrations of vulnerability exploitation using intentionally weakened applications, such as WebGoat or Juice Shop. It may be beneficial to include results of the previous penetration as clear examples of vulnerabilities and implemented remediation strategies as well as asking a penetration tester to assist with developing examples of vulnerability exploitation demonstrations.

Training should be considered mandatory for all employees and contractors involved with software development and include an auditable sign-off to demonstrate compliance.  The training should be updated and delivered annually, to include changes in the organization, technology, and trends.   Additionally, training participants should be polled to evaluate the quality and relevance of the training, as well as solicit suggestions of other information that may be relevant to their work or environments.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time

### Quality Indicators
  * Members of the software security excellence centre regularly attend software security events and conferences.
  * Developers understand how the most relevant application security flaws occur and how to prevent them.
  * Managers require security activities throughout the SDLC
  * Local Subject Matter Experts contribute content to the training
  * The Training material is customized to the technologies and frameworks used

### External References
- [OWASP Top 10 Project](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
- [OWASP WebGoat Project](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
- [OWASP Juice Shop Project](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project)
- [OWASP Training Resources](https://www.owasp.org/index.php/OWASP_Training)

#### Notes

**Summit MN:**
* DK: maybe mention different areas of development- training for an iOS developer vs. REST B/E
* Q: Shall we mention Security Champions and their trainings? 

## Maturity 3
### Benefit
Security is an aspect of product quality, addressed throughout development.

### Activity
Implement a formal training program requiring anyone involved with the software development lifecycle to complete appropriate role and technology-specific training as part of the onboarding process.  based on the criticality of the application and user's role, organization should consider restricting access until the onboarding training has been completed.    While the organization may source some modules externally, the program should be facilitated and managed in-house and include content specific to the organization and go beyond general security best-practices.  The program should have a defined curriculum and include tests aimed at establishing understanding and competence in addition to the attestation of participation.  The training should consist of a combination of industry best practices and organization's internal standards, including training on specific systems in use by the organization.  

In addition to issues directly related to security, the organization should take advantage of this program by including other standards, such as code complexity, code documentation, naming convention, and other process-related disciplines.  The goal of the training should be to minimize issues resulting from employees following practices they became accustomed to outside of the organization and ensuring continuity in the style and competency of the developed code.

To facilitate progress monitoring and successful completion of each training module the organization should leverage a learning management platform or another centralized portal allowing similar functionality.  Employees should be able to monitor their progress and have access to all training resources even after they complete initial training.

Issues resulting from employees not following established standards, policies, procedures, or security best practices should be reviewed at least annually to gauge the effectiveness of the training and ensure it covers all issues relevant to the organization.  While updating the complete training may be unnecessary on an annual basis, the organization should periodically update the training and ensure all employees receive training on any changes and most prevalent security deficiencies.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators
  * Members of the organisation invovled in developing products regularly demonstrate thought leadership on security topics
  * Members of the software security excellence centre regularly speak at software security events and conferences.
  * All new recruits follow a standardised, mandatory training programme on which they are tested.
  * The security curriculum is regularly reviewed and updated to reflect identified process and security weaknesses
  * Developers are routinely tested for minimum security knowledge.
  * All relevant internal standards, policies, and procedures are reflected in the security curriculum.

#### Notes

**Summit MN:**
* DK: Employees should demonstrate gained knowledge on this level IMHO
* Continuous training on level 3?
* Maybe refer to conferences, OWASP Chapter meetings etc. in the guidance
* Q: shall we add conducting trainings, organizing conferences, also in order to improve image? No, we should put it into the Org&Culture
* Maybe we should include gamification

# B: Organization and Culture

## Maturity 1
### Activity
Implement a program where each software development team will have a team member that will be considered a "Security Champion" who will be the liaiseon between Information Security and developers.  Depending on the size and structure of the team the "Security Champion" may be a software developer, tester, or a product manager.  The position should have a set number of hours allocated each week for Information Security related activities and participate in periodic briefings intended to increase awareness and expertise in different security disciplines.  Furthermore, it may be beneficial to provide "Security Champions" with additional training, thus helping to develop these roles as Software Security subject-matter experts.

Different company cultures may necessitate customizing the approach to creating and supporting "Security Champions."  Irrespective of these differences, organizations should always strive to ensure the position can increase effectiveness and efficiency of improving application security and compliance while strengthening the relationship between various teams and Information Security.  To help achieve these objectives, "Security Champions" should be tasked to assist with researching, verifying, and prioritizing security and compliance related software defects.  Additionally, they should be involved in all Risk Assessments, Threat Assessments, and Architectural Reviews to help identify opportunities to remediate several security defects by making the overall architecture of the application more resilient and reducing the attack threat surface.

In addition to assisting Information Security, "Security Champions" should also provide periodic reviews of all security-related issues for the project team to make sure everyone is aware of the problems and any current and future remediation efforts.  These reviews may also be leveraged to help brainstorm solutions to more complex problems by engaging the entire development team.

### Maturity Questions
#### Does the organization have a "Security Champion" assigned to each development team or product?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Do "Security Champions" receive periodic briefings and training to make them more effective in their role?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes

**Summit MN:**
* DK: My high-level idea:
  * Maturity 1: You have someone responsible for pushing AppSec
  * Maturity 2: Security Champions (ensure scalability, clear tasks), possibly guilds
  * Maturity 3: Evaluation of Security Champions, full orga coverage / organization efficiency 
* Wording: Project team vs development team - we should decide and align

## Maturity 2
### Benefit

### Activity
Velocity of change in technology, programming languages, and development frameworks and libraries have made it very difficult for Information Security professionals to be fully informed of all the technical nuances that may impact security.  Even developers often struggle keeping up with all the changes and new tools intended to make software development faster, better, and safer.  Therefore, organizations should implement a formal secure coding center of excellence, comprised of architects and senior developers representing the different business units and technology stacks.  The team should have an official charter and be expected to define standards and best practices intended to help the organization improve their software development practices.

This group should ensure all current programming efforts follow industry's best practices and organization's development and implementation standards include all critical configuration settings.  Furthermore, the group should help identify, train, and support "Product Champions," who will be responsible for assisting different teams with implementing tools intended to help automate, streamline, or improve various aspects of the SDLC.  Similarly, the group should work to identify development teams who follow higher maturity levels within their SDLC and working to identify practices and tools that enable these achievements, with the goal of replicating them to other teams.

Finally, the group should also provide subject matter expertise in helping information security teams evaluate solutions intended to improve application security, ensuring these tools are not only useful but also compatible with the way different teams develop applications.  Similarly, teams looking to make significant architectural changes to their software should be expected to consult with this group to ensure the change does not adversely impact the SDLC lifecycle or established security controls.

### Maturity Questions
#### Does the organization have a Secure Software Center of Excellence including a formal charter defining its objectives?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Does the organization require significant architectural changes and application security tools to be reviewed by the Secure Software Center of Excellence prior to deployment?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Does the Secure Software Center of Excellence publishes software development and SDLC standards?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes

**Summit MN:**

## Maturity 3
### Benefit

### Activity
Security is the responsibility of all employees, not just the Information Security team.  The organizations should deploy communication and knowledge sharing platforms to help developers build communities around different technologies, tools, and programming languages.  These communities may consist of one or multiple tools, and enable employees to share information, discuss challenges with other developers, and search the knowledge-base for answers to previously discussed issues.

Organizations should ensure communities are formed around roles and responsibilities and enable developers and engineers from different teams and business units to communicate freely and benefit from each other's expertise.  Participation should be encouraged, and users of the system included in a recognition program by which those individuals who help the most people are promoted as thought leaders and appropriately recognized by management.  In addition to improving application security, this platform may also help identify future members of the Secure Software Center of Excellence or "Security Champions" based on their expertise and willingness to help others.

The information portal should be reviewed on a regular basis by the Secure Software Center of Excellence and Application Security teams for insights into the new and upcoming technologies, as well as opportunities to assist the development community with new initiatives, tools, programs, and training resources.  The portal should also be used to help disseminate information about new standards, tools, and resources available to all developers for the continued advancement of SDLC maturity and application security.


### Maturity Questions
#### Is there a centralized portal where developers and application security professionals from different teams and business units are able to communicate and share information?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Is there a knowledge repository allowing searches for organization-specific solutions to common problems and security challenges?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

### Quality Indicators

#### Notes

**Summit MN:**
* Q: Information portal - shouldn't be introduced on earlier levels with lower quality? Or should be introduced in Education? A: It should be present in earlier stages.
* Q: Separate stream for sharing knowledge? Maybe
* General guideline: Concepts shouldn't pop up on higher levels suddenly
* Centre of excellence vs creating the concept of champions? The centre of excellence typically comes first
* Education and Guidance doesn't quite fit anymore -> Education and Culture?
* For smaller organizations, the centre of excellence can be one person -> mention that explicitly

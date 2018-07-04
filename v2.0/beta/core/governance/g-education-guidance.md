---
business_functions : Governance
title : Education & Guidance
assignedto       : Yan Kravchenko (@yanfosec)
complete         : 40%
status           : draft        #new, draft, for_review, release_candidate, done
business_functions_weight: 3
type: security_practice
---

# Overview

| | A: Training and Awareness | B: Organization and Culture |
|:---|:---|:---|
| Maturity 1 - Offer development staff access to resources around the topics of secure programming and deployment. | Offer general secure software coding guidance covering OWASP Top 10 | Identify a "Security Champion" within each development team |
| Maturity 2 - Educate all personnel in the software lifecycle with technology and role-specific guidance on secure development. | Offer technology and role-specific guidance, including security nuances of each language and platform | Develop a secure software center of excellence promoting thought leadership among developers and architects |
| Maturity 3 - Develop in-house training programs facilitated by developers across different teams | Standardized inhouse guidance around the organization's secure software development standards. | Build a secure software community including all organisation people involved in software security |

# A: Training and Awareness

## Maturity 1
### Activity
Conduct security awareness training customized for software developers and intended to increase the awareness of application security threats and risks, as well as security best practices and secure software design principles.  The training may be developed internally or procured externally, and may be delivered in-person or using Computer Based Training (CBT).  Ideally, training should be delivered in-person to offer participants the benefit of participating in a discussion as a team, rather than receiving one-on-one through a CBT.

Course content should include a wide range of topics relevant to application security and include conceptual as well as technical information. Theoretical portion of the training should consist of secure design principles including Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability.  Additionally, the training should include references to any organization-wide standards, policies, and procedures defined to improve application security.

The technical content should include at a minimum the OWASP Top 10 vulnerabilities and most common remediation strategies for each issue.  Whenever possible, the training should consist of demonstrations of vulnerability exploitation using intentionally weakened applications, such as WebGoat or Juice Shop.  It may be beneficial to include results of the previous penetration as clear examples of vulnerabilities and implemented remediation strategies as well as asking a penetration tester to assist with developing examples of vulnerability exploitation demonstrations.

Training should be considered mandatory for all employees and contractors involved with software development and include an auditable sign-off to demonstrate compliance.  The training should be updated and delivered annually, to include changes in the organization, technology, and trends.   Additionally, training participants should be polled to evaluate the quality and relevance of the training, as well as solicit suggestions of other information that may be relevant to their work or environments.

#### Maturity Questions
##### Have all developers completed security awareness training customized for software development in the last 12 months?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

##### Has the training been updated in the last 12 months?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

### External References
- [OWASP Top 10 Project](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
- [OWASP WebGoat Project](https://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
- [OWASP Juice Shop Project](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project)
- [OWASP Training Resources](https://www.owasp.org/index.php/OWASP_Training)

#### Notes

## Maturity 2
### Activity
Conduct instructor-lead or CBT based security training specific to roles and technologies used within the organization.  The organization should include cover product managers, software developers, testers, and security auditors, ensuring to customize the content to each group's technical needs. 

- Product managers should be training on topics related to SAMM business functions and security practices, with the emphasis on security requirements, threat modeling, and defect tracking.
- Developers should be trained on coding standards and best practices related to the technologies they work with to ensure the training directly benefits security of the application.  
- Testers should be educated on the different testing tools and best practices related to technologies in use by the organization, as well as in tools designed to identify security defects.
- Security auditors should be trained on the SDLC lifecycle and various application security mechanisms in use by the organization, as well as the process for submitting security defects for remediation.

Whenever possible, training should be customized to the specific technologies in use by the organization and include security features and weaknesses of each programming language and framework.  Ideally, each organization should identify a subject-matter expert in each technology to assist with procuring or developing the necessary training content as well as updating it on an annual basis.  

The goal should be to include all training content described in the Maturity Level 1 activities of this activity stream and include additional role-specific and technology-specific content while eliminating aspects of the training considered unnecessary.  Training should be regarded as mandatory and include and auditable sign-off to demonstrate compliance.

### Maturity Questions
##### Has the training been developed for all roles currently involved in the management, development, testing, or auditing of the software?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Does the training include content specific to security features and weaknesses of all technologies in use by the organization?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Has the training been reviewed and updated in the past 12 months?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


## Maturity 3
### Activity
Implement a formal training program requiring anyone involved with the software development lifecycle to complete appropriate role and technology-specific training, before allowing access to the application.    While the organization may source some modules externally, the program should be facilitated and managed in-house and include content specific to the organization and go beyond general security best-practices.  The program should have a defined curriculum and include tests aimed at establishing understanding and competence in addition to the attestation of participation.  The training should consist of a combination of industry best practices and organization's internal standards, including training on specific systems in use by the organization.  

In addition to issues directly related to security, the organization should take advantage of this program by including other standards, such as code complexity, code documentation, naming convention, and other process-related disciplines.  The goal of the training should be to minimize issues resulting from employees following practices they became accustomed to outside of the organization and ensuring continuity in the style and competency of the developed code.

To facilitate progress monitoring and successful completion of each training module the organization should leverage a learning management platform or another centralized portal allowing similar functionality.  Employees should be able to monitor their progress and have access to all training resources even after they complete initial training.

Issues resulting from employees not following established standards, policies, procedures, or security best practices should be reviewed at least annually to gauge the effectiveness of the training and ensure it covers all issues relevant to the organization.  While the complete training may be unnecessary on an annual basis, the organization should periodically update the training and ensure all employees receive training on any changes and most prevalent security deficiencies.


### Maturity Questions
#### Has the organization included all internal standards, policies, and procedures within the training?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Has the organization updated the program based on identified process and security weaknesses?

*Answer Options*

- Option 1
- Option 2
- Option 3
- Option 4

#### Notes


# B: Organization and Culture

## Maturity 1
### Activity
Implement a program where each software development team will have a team member that will be considered a "Security Champion" who will be the liaise on between Information Security and developers.  Depending on the size and structure of the team the "Security Champion" may be a software developer, tester, or a product manager.  The position should have a set number of hours allocated each week for Information Security related activities and participate in periodic briefings intended to increase awareness and expertise in different security disciplines.  Furthermore, it may be beneficial to provide "Security Champions" with additional training, thus helping to develop these roles as Information Security subject-matter experts.

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

#### Notes

## Maturity 2
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

#### Notes

## Maturity 3
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

#### Notes


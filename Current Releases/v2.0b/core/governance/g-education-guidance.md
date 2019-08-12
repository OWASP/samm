---
business_functions : Governance
title : Education & Guidance
assignedto       : Yan Kravchenko (@yanfosec)
complete         : 40%
status           : draft        #new, draft, for_review, release_candidate, done
weight: 3
type: security_practice
---
# Short Description
This practice focuses on increasing the knowledge in the organization regarding secure software.

# Long Description
The Education & Guidance (EG) Practice focuses on arming personnel involved in the software life-cycle with knowledge and resources to design, develop, and deploy secure software. With improved access to information, project teams can proactively identify and mitigate the specific security risks that apply to their organization.

One major theme for improvement across the Objectives is providing training for employees and increasing their security awareness, either through instructor-led sessions or computer-based modules. As an organization progresses, it builds a broad base of training starting with developers and moving to other roles, culminating with the addition of role-based training to ensure applicability and effectiveness.

In addition to training, this Practice also requires the organization to make a significant investment in improving organizational culture to promote application security through collaboration between teams. Collaboration tools and increased transparency between technologies and tools support this approach to improve the security of the applications.


# Overview
| | A: Training and Awareness | B: Organization and Culture |
|:---|:---|:---|
| Maturity 1 - Offer staff access to resources around the topics of secure development and deployment. | Provide security awareness training for all personnel involved in software development | Identify a "Security Champion" within each development team |
| Maturity 2 - Educate all personnel in the software life-cycle with technology and role-specific guidance on secure development. | Offer technology and role-specific guidance, including security nuances of each language and platform | Develop a secure software center of excellence promoting thought leadership among developers and architects |
| Maturity 3 - Develop in-house training programs facilitated by developers across different teams | Standardized in-house guidance around the organization's secure software development standards. | Build a secure software community including all organization people involved in software security |

# A: Training and Awareness

## Maturity 1
### Benefit
Stakeholders involved in producing software have an appreciation for the difficulty of creating secure software and the value of a secure SDLC.
### Activity
Conduct security awareness training for all roles currently involved in the management, development, testing, or auditing of the software. The goal is to increase the awareness of application security threats and risks, security best practices, and secure software design principles. Develop training internally or procure it externally. Ideally, deliver training in person so participants can have discussions as a team, but Computer Based Training (CBT) is also an option.

Course content should include a range of topics relevant to application security and privacy, while remaining accessible to a non-technical audience. Suitable concepts are secure design principles including Least Privilege, Defense-in-Depth, Fail Secure (Safe), Complete Mediation, Session Management, Open Design, and Psychological Acceptability. Additionally, the training should include references to any organization-wide standards, policies, and procedures defined to improve application security. The OWASP Top 10 vulnerabilities should be covered at a high level.

Training is mandatory for all employees and contractors involved with software development and includes an auditable sign-off to demonstrate compliance. Consider incorporating innovative ways of delivery (such as gamification) to maximize its effectiveness and combat desensitization.

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
  * Testers understand the attacker mindset.

### External References
- [NIST SP 800-50](https://csrc.nist.gov/publications/detail/sp/800-50/final)
- [OWASP Top 10 Project](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project)
- [OWASP Training Resources](https://www.owasp.org/index.php/OWASP_Training)
- [OWASP Application Security Curriculum](https://www.owasp.org/index.php/OWASP_Application_Security_Curriculum)

#### Notes

<!--
**Summit MN:**
* DK: I wouldn’t base anything on Top10
* DK: Mandatory technical trainings: project manager won’t understand much, QA also problematic, I would rather go for conscious decision
* DK: I’m not convinced that an awareness training should be too technical.
NK: Generally addressed. Kept the Top 10 as it is a standard reference for webapp security among developers.
-->


## Maturity 2
### Benefit
Stakeholders involved in producing software receive role-specific security training.

### Activity
Conduct instructor-led or CBT security training specific to the organization’s roles and technologies, starting with the core development team. The organization customizes training for product managers, software developers, testers, and security auditors, based on each group’s technical needs.

- Product managers train on topics related to SAMM business functions and security practices, with emphasis on security requirements, threat modeling, and defect tracking.
- Developers train on coding standards and best practices for the technologies they work with to ensure the training directly benefits application security. They have a solid technical understanding of the OWASP Top 10 vulnerabilities, or similar weaknesses relevant to the technologies and frameworks used (e.g. mobile), and the most common remediation strategies for each issue.
- Testers train on the different testing tools and best practices for technologies used in the organization, and in tools that identify security defects.
- Security auditors train on the SDLC life-cycle, application security mechanisms used in the organization, and the process for submitting security defects for remediation.
- Security Champions train on security topics from various phases of the SDLC. They receive the same training as developers and testers, but also understand threat modeling and secure design, as well as security tools and technologies that can be integrated into the build environment.

Include all training content from the Maturity Level 1 activities of this stream and additional role-specific and technology-specific content. Eliminate unnecessary aspects of the training.

Ideally, identify a subject-matter expert in each technology to assist with procuring or developing the training content and updating it regularly. The training consists of demonstrations of vulnerability exploitation using intentionally weakened applications, such as WebGoat or Juice Shop. Include results of the previous penetration as examples of vulnerabilities and implemented remediation strategies. Ask a penetration tester to assist with developing examples of vulnerability exploitation demonstrations.

Training is mandatory for all employees and contractors involved with software development, and includes an auditable sign-off to demonstrate compliance. Update and deliver training annually to include changes in the organization, technology, and trends. Poll training participants to evaluate the quality and relevance of the training. Gather suggestions of other information relevant to their work or environments.

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

<!--
**Summit MN:** * DK: maybe mention different areas of development- training for an iOS developer vs. REST B/E * Q: Shall we mention Security Champions and their trainings? NK: Addressed.
-->

## Maturity 3
### Benefit
Security is an aspect of product quality, addressed throughout development.

### Activity
Implement a formal training program requiring anyone involved with the software development life-cycle to complete appropriate role and technology-specific training as part of the on-boarding process. Based on the criticality of the application and user’s role, consider restricting access until the on-boarding training has been completed. While the organization may source some modules externally, the program is facilitated and managed in-house and includes content specific to the organization going beyond general security best-practices. The program has a defined curriculum, checks participation, and tests  understanding and competence. The training consists of a combination of industry best practices and organization’s internal standards, including training on specific systems used by the organization.

In addition to issues directly related to security, the organization includes other standards to the program, such as code complexity, code documentation, naming convention, and other process-related disciplines. This training minimizes issues resulting from employees following practices incorporated outside the organization and ensures continuity in the style and competency of the code.

To facilitate progress monitoring and successful completion of each training module the organization has a learning management platform or another centralized portal with similar functionality. Employees can monitor their progress and have access to all training resources even after they complete initial training.

Review issues resulting from employees not following established standards, policies, procedures, or security best practices at least annually to gauge the effectiveness of the training and ensure it covers all issues relevant to the organization. Update the training periodically and train employees on any changes and most prevalent security deficiencies.

### Maturity Questions
#### Q 1
Are ...?

*Answer Options*
- No
- Yes, some of the time
- Yes, approx. half the time
- Yes, most or all of the time


### Quality Indicators
  * Members of the organization involved in developing products regularly demonstrate thought leadership on security topics.
  * Members of the software security excellence centre regularly speak at software security events and conferences.
  * All new recruits follow and are tested on a standardized, mandatory training program.
  * You regularly review the security curriculum and update it to reflect identified process and security weaknesses.
  * You routinely test developers for minimum security knowledge.
  * The curriculum reflects all relevant internal standards, policies, and procedures.


#### Notes
<!--
**Summit MN:** * DK: Employees should demonstrate gained knowledge on this level IMHO * Continuous training on level 3? * Maybe refer to conferences, OWASP Chapter meetings etc. in the guidance * Q: shall we add conducting trainings, organizing conferences, also in order to improve image? No, we should put it into the Org&Culture * Maybe we should include gamification. NK: most comments incorporated. Conducting training was added as an indicator.
-->


# B: Organization and Culture

## Maturity 1
### Benefit
Have a lightweight embedding of software security throughout your organization through security champions.

### Activity
Implement a program where each software development team has a member considered a “Security Champion” who is the liaison between Information Security and developers. Depending on the size and structure of the team the “Security Champion” may be a software developer, tester, or a product manager. The “Security Champion” has a set number of hours per week for Information Security related activities. They participate in periodic briefings to increase awareness and expertise in different security disciplines. “Security Champions” have additional training to help develop these roles as Software Security subject-matter experts. You may need to customize the way you create and support “Security Champions” for cultural reasons.

The goals of the position are to increase effectiveness and efficiency of application security and compliance and to strengthen the relationship between various teams and Information Security. To achieve these objectives, “Security Champions” assist with researching, verifying, and prioritizing security and compliance related software defects. They are involved in all Risk Assessments, Threat Assessments, and Architectural Reviews to help identify opportunities to remediate security defects by making the architecture of the application more resilient and reducing the attack threat surface.

In addition to assisting Information Security, “Security Champions” provide periodic reviews of all security-related issues for the project team so everyone is aware of the problems and any current and future remediation efforts. These reviews are leveraged to help brainstorm solutions to more complex problems by engaging the entire development team.

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
<!--
**Summit MN:**
* DK: My high-level idea:
  * Maturity 1: You have someone responsible for pushing AppSec
  * Maturity 2: Security Champions (ensure scalability, clear tasks), possibly guilds
  * Maturity 3: Evaluation of Security Champions, full orga coverage / organization efficiency
* Wording: Project team vs development team - we should decide and align
-->

## Maturity 2
### Benefit
Have a central team of software security experts to drive and support your software assurance program.

### Activity
The organization implements a formal secure coding center of excellence, with  architects and senior developers representing the different business units and technology stacks. The team has an official charter and defines standards and best practices to improve software development practices. The goal is to mitigate the way velocity of change in technology, programming languages, and development frameworks and libraries makes it difficult for Information Security professionals to be fully informed of all the technical nuances that impact security. Even developers often struggle keeping up with all the changes and new tools intended to make software development faster, better, and safer.

This ensures all current programming efforts follow industry’s best practices and organization’s development and implementation standards include all critical configuration settings. It helps identify, train, and support “Product Champions”,  responsible for assisting different teams with implementing tools that automate, streamline, or improve various aspects of the SDLC. It identifies development teams with higher maturity levels within their SDLC and the practices and tools that enable these achievements, with the goal of replicating them to other teams.

The group provides subject matter expertise, helping information security teams evaluate tools and solutions to improve application security, ensuring these tools are not only useful but also compatible with the way different teams develop applications. Teams looking to make significant architectural changes to their software consult with this group to avoid adversely impacting the SDLC life-cycle or established security controls.

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

<!--
**Summit MN:**
-->

## Maturity 3
### Benefit
Software security is a shared and active responsibility among all employees.

### Activity
Security is the responsibility of all employees, not just the Information Security team. Deploy communication and knowledge sharing platforms to help developers build communities around different technologies, tools, and programming languages. In these communities employees share information, discuss challenges with other developers, and search the knowledge base for answers to previously discussed issues.

Form communities around roles and responsibilities and enable developers and engineers from different teams and business units to communicate freely and benefit from each other’s expertise. Encourage participation, set up a program to promote those who help the most people as thought leaders, and have management recognize them. In addition to improving application security, this platform may help identify future members of the Secure Software Center of Excellence or “Security Champions” based on their expertise and willingness to help others.

The Secure Software Center of Excellence and Application Security teams review the information portal regularly for insights into the new and upcoming technologies, as well as opportunities to assist the development community with new initiatives, tools, programs, and training resources. Use the portal to disseminate information about new standards, tools, and resources to all developers for the continued improvement of SDLC maturity and application security.

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

<!--
**Summit MN:**
* Q: Information portal - shouldn't be introduced on earlier levels with lower quality? Or should be introduced in Education? A: It should be present in earlier stages.
* Q: Separate stream for sharing knowledge? Maybe
* General guideline: Concepts shouldn't pop up on higher levels suddenly
* Centre of excellence vs creating the concept of champions? The centre of excellence typically comes first
* Education and Guidance doesn't quite fit anymore -> Education and Culture?
* For smaller organizations, the centre of excellence can be one person -> mention that explicitly
-->

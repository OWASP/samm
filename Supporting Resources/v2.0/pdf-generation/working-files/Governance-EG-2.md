<div class="new-page"/>
### Education & Guidance (EG2)

The goal of this practice level is to educate all personnel in the software lifecycle with technology and role-specific guidance on secure development.

#### Activities

##### [Stream A] Customize security training
<b>Benefit</b>: <i>Relevant employee roles trained according to their specific role</i>

Conduct instructor-led or CBT security training specific to the organization’s roles and technologies, starting with the core development team. The organization customizes training for product managers, software developers, testers, and security auditors, based on each group’s technical needs.

- Product managers train on topics related to SAMM business functions and security practices, with emphasis on security requirements, threat modeling, and defect tracking.
- Developers train on coding standards and best practices for the technologies they work with to ensure the training directly benefits application security. They have a solid technical understanding of the OWASP Top 10 vulnerabilities, or similar weaknesses relevant to the technologies and frameworks used (e.g. mobile), and the most common remediation strategies for each issue.
- Testers train on the different testing tools and best practices for technologies used in the organization, and in tools that identify security defects.
- Security auditors train on the software development lifecycle, application security mechanisms used in the organization, and the process for submitting security defects for remediation.
- Security Champions train on security topics from various phases of the SDLC. They receive the same training as developers and testers, but also understand threat modeling and secure design, as well as security tools and technologies that can be integrated into the build environment.

Include all training content from the Maturity Level 1 activities of this stream and additional role-specific and technology-specific content. Eliminate unnecessary aspects of the training.

Ideally, identify a subject-matter expert in each technology to assist with procuring or developing the training content and updating it regularly. The training consists of demonstrations of vulnerability exploitation using intentionally weakened applications, such as WebGoat or Juice Shop. Include results of the previous penetration as examples of vulnerabilities and implemented remediation strategies. Ask a penetration tester to assist with developing examples of vulnerability exploitation demonstrations.

Training is mandatory for all employees and contractors involved with software development, and includes an auditable sign-off to demonstrate compliance.  Whenever possible, training should also include a test to ensure understanding, not just compliance.  Update and deliver training annually to include changes in the organization, technology, and trends. Poll training participants to evaluate the quality and relevance of the training. Gather suggestions of other information relevant to their work or environments.


###### Assessment Question(s)
Is training customized for individual roles such as developers, testers, or security champions?

- No
- Yes, for some of the training
- Yes, for at least half of the training
- Yes, for most or all of the training


Quality Criteria:

- Training includes all topics from maturity level 1, and adds more specific tools, techniques, and demonstrations
- Training is mandatory for all employees and contractors
- Training includes input from in-house SMEs and trainees
- Training includes demonstrations of tools and techniques developed in-house
- You use feedback to enhance and make future training more relevant


##### [Stream B] Implement centers of excellence
<b>Benefit</b>: <i>Specific security best practices tailored to the organization</i>

The organization implements a formal secure coding center of excellence, with architects and senior developers representing the different business units and technology stacks. The team has an official charter and defines standards and best practices to improve software development practices. The goal is to mitigate the way velocity of change in technology, programming languages, and development frameworks and libraries makes it difficult for Information Security professionals to be fully informed of all the technical nuances that impact security. Even developers often struggle keeping up with all the changes and new tools intended to make software development faster, better, and safer.

This ensures all current programming efforts follow industry’s best practices and organization’s development and implementation standards include all critical configuration settings. It helps identify, train, and support “Product Champions”, responsible for assisting different teams with implementing tools that automate, streamline, or improve various aspects of the SDLC. It identifies development teams with higher maturity levels within their SDLC and the practices and tools that enable these achievements, with the goal of replicating them to other teams.

The group provides subject matter expertise, helping information security teams evaluate tools and solutions to improve application security, ensuring these tools are not only useful but also compatible with the way different teams develop applications. Teams looking to make significant architectural changes to their software consult with this group to avoid adversely impacting the SDLC lifecycle or established security controls.


###### Assessment Question(s)
Does the organization have a Secure Software Center of Excellence (SSCE)?

- No
- Yes, we started implementing it
- Yes, for part of the organization
- Yes, for the entire organization


Quality Criteria:

- The SSCE has a charter defining its role in the organization
- Development teams review all significant architectural changes with the SSCE
- The SSCE publishes SDLC standards and guidelines related to Application Security
- Product Champions are responsible for promoting the use of specific security tools


<div class="new-page"/>
### Security Architecture (SA1)

The goal of this practice level is to insert consideration of proactive security guidance into the software design process.

#### Activities

##### [Stream A] Adhere to basic security principles
<b>Benefit</b>: <i>Sets of security basic principles available to product teams</i>

During design, technical staff on the product team use a short checklist of security principles. Typically, security principles include defense in depth, securing the weakest link, use of secure defaults, simplicity in design of security functionality, secure failure, balance of security and usability, running with least privilege, avoidance of security by obscurity, etc.

For perimeter interfaces, the team considers each principle in the context of the overall system and identify features that can be added to bolster security at each such interface. Limit these such that they only take a small amount of extra effort beyond the normal implementation cost of functional requirements. Note anything larger, and schedule it for future releases.

Train each product team with security awareness before this process, and incorporate more security-savvy staff to aid in making design decisions.


###### Assessment Question(s)
Do teams use security principles during design?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have an agreed upon checklist of security principles
- You store your checklist in an accessible location
- Relevant stakeholders understand security principles


##### [Stream B] Identify tools and technologies
<b>Benefit</b>: <i>Transparency of technologies that introduce security risk</i>

People often take the path of least resistance in developing, deploying or operating a software solution. New technologies are often included when they can facilitate or speed up the effort or enable the solution to scale better. These new technologies might, however, introduce new risks to the organization that you need to manage.

Identify the most important technologies, frameworks, tools and integrations being used for each application. Use the knowledge of the architect to study the development and operating environment as well as artefacts. Then evaluate them for their security quality and raise important findings to be managed.


###### Assessment Question(s)
Do you evaluate the security quality of important technologies used for development?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have a list of the most important technologies used in or in support of each application
- You identify and track technological risks
- You ensure the risks to these technologies are in line with the organizational baseline


Agile notes explain to the reader how the topic specifically works for agile. They also provide best practices and pitfalls. 

Rob van der Veer and Michael Kuipers agreed with the SAMM group that they would start adding agile notes to SAMM’s core model.  Just to imagine how they would work:  in the 2.0 core PDF, these notes could for example be presented in rectangles marked ‘Agile note’ and then contain the note text. That way they are not part of the method-agnostic core text but at the same time they provide information that can easily be found or skipped.

There are three main reasons for these agile notes:
1. They correct for any misinterpretation by sensitive agile-minded readers who tend to think that the model is ‘too much waterfall’. This is mainly a language thing.
2. They provide specifics on how the activity is (slightly) different for agile, on the same detail level as the core model
3. They can provide more detail on how to implement activities in agile (for example how you make code reviews incremental)

TODO
=====
Link texts to identifiers in the core model using https://github.com/OWASP/samm/blob/master/v2.0/summit-201810-Minneapolis/SAMM1.5-SAMM2.0%20Mapping%20Minneapolis%20v20181014.xlsx  

The notes
=========
No particular order and all quick draft.

General:
==============
“Careful with red tape.
A maturity model seems conflicting with the agile manifesto, because Agile holds people over process and working software over documentation. Therefore, in an agile environment, it is important to take extra care for making the process and tracking maturity as lightweight as possible. Please note that agile does not disqualify process or documentation - it wants to minimise it where possible.”

Strategy & Metrics
==============
“Team autonomy.
In most agile environments, team autonomy is important, which means that it can be a challenge to work on process maturity on an organisation-wide scale. If team-autonomy is important, than a maturity program should embrace that different teams can have different maturities. At the same time it is advisable to let teams learn from each other, so sharing of practices between teams is a best practice for maturity programs.”

Education & Guidance - Organization&culture
==============
Side note: I’m not sure if it’s a good idea to have the security group ensure that developers are applying best practices. This would nurture an us vs them situation where the security group would be the security police. Instead, security should be everybody’s responsibility. My guess is that SAMM agrees to that standpoint, but it is not reflected in the text on the security group.

Design-Threat assessment
==============
TODO: Something on incremental threat modelling based on new features
-Include a reference to Irene Michlin - incremental threat modeling


Security requirements - Software requirements:
==============
“Requirement-tailorisation.
In agile environments, the selection of requirements for a specific task (e.g. a user story) and the verification of these requirements happen frequently, which is why it is important to optimise the selection process. It needs t be quick and it needs to result in the smallest possible set. This requires instrumentation to support selecting appropriate requirements based on the type of task and the context. The simplest form of such an instrument is a list of story-aspects that each link to a set of requirements, for example: story includes retrieving user input. More advanced forms include the use of commercial tools that map types of functionality to threats and to countermeasures. By minimising the set of requirements for each task, developers have less to keep in mind and tests can be performed more quickly.”

Security testing
==============
“Agile testing
In agile, testing happens more frequently and typically covers the same parts of a system over and over again, which is why it is important to automate testing and to base manual testing and reviewing on changes. For code review this means that review needs to focus on changed and added code only and therefore requires a structured approach and administration. For manual pentesting this means that the testing should focus on the behaviour that is likely to be effected by the changes made. This shows that especially for agile it is important to have modular system, in which modules can be tested separately and there is limited propagation of changes. In an agile environment there typically is not a budget for expert manual review and testing after every sprint. This means that in release planning it should be taken into account when such manual work is expected to be necessary, so it can be prepared and planned."

Side-note: I like the separation into scalable and deep understanding, but the choice of words is a bit vague. Why not simply say automated and manual?

Responsibilities
========
Rob
In some organisations, security is organised in such a way that the ‘security department’ verifies the software and then needs to convince the ‘business’ to fix the issues found. In an agile environment there is no time for this approach of ‘we will figure it out once we see what the issues are’ because you would need to do that every sprint. In agile, security needs to be owned by everyone including the product Owner - according to specified requirements. This puts security professionals much more in an advisory and supportive role than in a restricting role.

Requirements
===========
Rob
Iterative requirements
Agile requirements are done iteratively. Typical waterfall development assumes all requirements can be defined upfront and changes are handled as exceptions. Agile, on the other hand, believes requirements are situational and situations change. Also, Agile believes customer requirements should not be trusted to be complete and correct. AGILE PITFALL: The key to agile security is to apply the right requirements at the right time. If this process fails, then Agile is focused too much on delivering functions, ignoring important non-functional requirements.

Requirements
===========
Rob
Classifying requirements assurance
A functional security requirement (e.g. a login feature) has its own user story and a non-functional requirement needs to be ensured in another way. Per non-functional requirement, the following assurance classification can be made at the start of the project:
  -Not applicable in the context 
  -Covered by the technology used (e.g. framework)
  -Needs to be included in general instructions and tested for
  -Needs to be included in instructions per story and tested for
During classification, the type of required test(s) can also be specified: automated static or dynamic test, peer code review, pentest.
Of course this classification can be revisited when necessary (e.g. testing has been extended).

Requirements
===========
Rob
Requirements in stories
Stories need to be equipped with the relevant non-functional requirement, depending on the type of work expected in the story. This should lead to the required tests and the required developer instructions, according to the assurance classification.
Equipping the stories is done during creation of the story and during backlog grooming/refinement. Doing this during sprint planning is not recommended because all the time will be needed to plan.

Security experts can help here, but also the concept of ‘triggers’: types of functionality or architecture that need specific sets of requirements. There are commercial and open source tools to support this process.
Requirements can be put in the acceptance criteria of the story. Not in the conditions of satisfaction because these are typically functional and not in the definition of done because these are user story independent.

The acceptance criteria work as instructions for the developers. An improvement on this is to have separate instructions in which criteria that are expected to be known are left out, and other criteria are phrased from a developer point of view. These instructions can be prepared in the assurance classification process. The goal is to have a small and manageable set of instructions for the developers to take into account.

See Secure Scrum: https://www.softwaresecured.com/secure-scrum-integrating-security-with-agile/




TODO: abuse stories, product owner, sprint review, DOD etc., pitfall:product owner focused too much on demoing features



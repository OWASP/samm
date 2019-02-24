# Introduction to SAMM Agile notes
Agile notes explain to the SAMM reader how a topic specifically works for agile. They also provide best practices and pitfalls.

Rob van der Veer and Michael Kuipers agreed with the SAMM group that they would start adding agile notes to SAMM’s core model.  Just to imagine how they would work:  in the 2.0 core PDF, these notes could for example be presented in rectangles marked ‘Agile note’ and then contain the note text. That way they are not part of the method-agnostic core text but at the same time they provide information that can easily be found or skipped.

There are three main reasons for these agile notes:
1. They correct for any misinterpretation by sensitive agile-minded readers who tend to think that the model is ‘too much waterfall’. This is mainly a language thing and keeping in mind that software engineering is often iterative.
2. They provide specifics on how the activity is (slightly) different for agile, on the same detail level as the core model
3. They can provide more detail on how to implement activities in agile (for example how you make code reviews incremental), and what to watch out for. Many mistakes are made in practice when doing security, especially in agile situations.

# TODO
Link texts to identifiers in the core model using https://github.com/OWASP/samm/blob/master/v2.0/summit-201810-Minneapolis/SAMM1.5-SAMM2.0%20Mapping%20Minneapolis%20v20181014.xlsx  
# The notes
No particular order and all quick draft.
## Topic: General 
###Quality at speed:
How to attain quality at speed? Agile delivers software more frequently, which means that quality assurance is a more frequent issue. Traditionally, quality assurance has been a carefully designed single phase in software development. The challenge is to make it less bureaucratic, take less time and still get quality software. To make this happen, mistakes need to be both prevented (build security in) and fought (find mistakes) with maximum efficiency, so to minimize manual work and the burden on developers:
Prevent:
-using solid technologies/frameworks/components that take care of as much security as possible
-insight and understanding of security principles with all people involved 
-clear requirements
-doable and therefore situational instructions for developers. No stacks of books but clear short lists, selecting requirements based on the specific task at hand
-good changeability of code (maintainability) to minimise errors
-everybody feels security responsibility, including the product owner

Fight:
-by checks that need to be automated as much as possible 
-manual checking will still be required and needs needs to be performed in a smart incremental and risk-based way, focusing only on changes and their impact.

###Does a maturity model conflict with agile?
A maturity model may seem conflicting with the agile manifesto, because Agile holds people over process and working software over documentation. However, agile does not disqualify process or documentation - it wants to minimise it where possible. To make this happen, a maturity model can provide tremendous help and it supports the Agile way of improving the way you work by learning as you go along.

## Topic: Strategy & Metrics
### “Team autonomy”
In most agile environments, team autonomy is important, which means that it can be a challenge to work on process maturity on an organisation-wide scale. If team-autonomy is important, than a maturity program should embrace that different teams can have different maturities and different ways of working, including security. At the same time it is advisable to let teams learn from each other, so sharing of practices between teams is a best practice for maturity programs.”
### Security is a shared responsibility
In an Agile environment security needs to be built in from the start. There is no time every sprint for the approach of building features without worrying too much about security, then do security testing and then fix the weaknesses. First of all, this would require undirected full testing every time and it would require much rework, leading to a situation where the product owner and development team are fighting it out with the security team. Therefore, security needs to be owned by everyone including the product Owner. This puts security professionals much more in an advisory and supportive role than in a role of a quality gate that has different stakes than the team. By including security in the discussions and in the planning, no room is left to ignore it. 

Pitfall: In some organisations, security is organised in such a way that the ‘security department’ verifies the software and then needs to convince the ‘business’ to fix the issues found. This is typically the case when business value is measured in the number of features and security is seen as a cost center, instead of a necessary quality to prevent damage and protect the business value.

## Topic: Education & Guidance - Organisation & culture
### Comment from Rob to to Seba
I’m not sure if it’s a good idea to have the security group ensure that developers are applying best practices. They can help, but it shouldn’t be their responsibility that it happens. This would nurture an us vs them situation where the security group would be the security police. Instead, security should be everybody’s responsibility. My guess is that SAMM agrees to that standpoint, but it is not reflected in the text on the security group. The security group should facilitate a shift left movement enabling the team to apply best practices. 


## Design-Threat assessment
###Inremental threat modelling
Even though the Agile manifesto states “working software is more important than comprehensive documentation”, the concept of a threat model should not be dismissed. First of all, a threat model provides a shared mental model of possible attacks in a development team which decreases the probability of security mistakes. Second of all, a threat model can be helpful in selecting the right requirements: system-generic and story-specific (see “Requirements in stories”).

The entire threat modelling process doesn’t have to be done all over again every time. It can be done incrementally as the software evolves, by assessing for every new story whether it introduces a new component, process, dataflow or trust boundary. If it does, it can be helpful to extend the existing threat model and identify the new threats and their countermeasures (in the form of functional security stories or requirements for the new story). If the threat model is an important method for the team to build security in, then the system threat model should occasionally be reworked, as mistakes tend to build up, incremental change after incremental change.

Pitfall: Threat modelling should not be relied on as the only way to build security in. It’s typically hard for developers and for QA people to think like attackers and come up with all the things that could go wrong and all the necessary countermeasures. This is why it’s so important to have security requirements readily available to be selected when specific types of work are done (See “Selecting and preparing requirements”). This hardening-approach to security (security hygiene, if you will) nicely complements the risk-based approach of threat modelling as another perspective to see how security needs to be built in. The team can let the amount of threat modelling effort depend on how much they trust the other methods of applying security requirements.
## Security requirements - A. Software requirements:
### Iterative threats, design review and requirements
Because software design evolves in Agile, design-driven security task need to be repeated: threat modeling, security architecture review and security requirements selection, which is why these steps need to be efficient. Efficiency can be increased by automation, structuring the process and by making the approach incremental. 

Typical waterfall development assumes all threats and requirements can be defined upfront and changes are handled as exceptions. Agile, on the other hand, believes these things are situational and situations change. Also, Agile believes customer requirements should not be trusted to be complete and correct. 

A basic level/”baseline” of security requirements can and should be defined upfront before writing code. These are the generic requirements. The specific requirements require selection and detailing per user story. See “Selecting and preparing requirements” and “Requirements in stories”.

### Selecting and preparing requirements
The more frequent working software needs to be released, the more often requirements need to be applied, by instructing engineers and by doing tests (verification).  In order to make this more feasible, requirements can be selected and prepared in an early stage.

For functional security requirement (e.g. a login feature) instruction and verification is relatively straightforward: functional specification and testing. Non-functional requirements, however, need to be applied in another way. Per non-functional requirement, the following options exist:
 -Not applicable in the context
 -Covered by the technology used (e.g. framework/library providing for example input validation)
 -Needs system-generic or story-specific instruction and verification, using instruction X and tests A, B, C (e.g. automated static scan, automated dynamic test, manual test, code review, or a combination). For story-specific requirements, the situation needs to be described when it is applicable - the so-called trigger. 

Valuable sprint time can be saved by selecting and preparing from the list of all known requirements before development starts. This preparation can be done per team, but it can also be based on an organisation-wide repository of requirements plus instructions and tests. The process can be revisited when necessary (e.g. testing has been extended, new framework choices).

After selecting and preparing requirements, system-generic requirements become part of the Definition of Done, whereas story-specific requirements need to made available, linked to an overview of triggers, that allow selection of the right requirements depending on the type of work being done in a story. When applicable, the requirements become part of the story Acceptance criteria.

Pitfall: Having too many generic requirements can be too much to ask from developers to constantly be aware of, and can be too much effort to test on the entire system every time. The goal is therefore to cover as many requirements as possible by the standard technology and aim to have as much requirements as possible depend on the type of work in a story.

Pitfall: Frameworks and libraries can cover part of the security requirements and therefore it should not be forgotten to ensure that these frameworks and libraries are being used. Often, developers can easily work their way around existing facilities, whether on purpose or by neglect. In other words: the proper application of frameworks and libraries should be either technically enforced or part of specific or generic test procedures.
### Requirements in stories
See also: “Selecting and preparing requirements”.
Stories need to be equipped with the relevant non-functional requirements, to be put in the acceptance criteria of the story, based on the type of work expected. This informs developers what should be taken into account, it adds to the necessary tests and it provides the information necessary to plan the work.
Equipping the stories is done during creation of the story and during backlog refinement, if necessary with the help of a security expert if developers have difficulty with this. There are different ways to collect the requirements:
-using triggers: in case requirements are prepared with ‘triggers’, these can be used to identify if requirements fit the story (for example when storing passwords: apply specific hashing) 
-using expertise: security expertise can help to efficiently select the proper requirements with a story
-using abuse stories (how the system can be attacked): they can help to identify weaknesses and thus link to the right requirements
-using threat modelling exercises (see “Incremental threat modelling)

Triggers are, in other words, descriptions of functionality or architecture that need specific sets of requirements. For example: “user forms” (for processing and validating user-supplied input), “session” (for verifying session/token information) . 

PITFALL: The key to agile security is to apply the right requirements at the right time. If stories don’t mention security requirements, it is much easier to forget them, also because no time was planned for them.

PITFALL: Filling in the security details should be done during either creation of the story or backlog refinements. Doing this during sprint planning is not recommended because all the time will be needed to plan.

PITFALL: In case the team works with the “conditions of satisfaction” these should not be used for security requirements because these are typically functional. Furthermore, story-specific reqruirements should not be in the definition of done either - because these are user story independent.
### “Abuse Stories”
An Abuse story is a descriptions from the perspective of an attacker (as supposed to a user), how a system is abused through a security weakness: “As an attacker…”. It is normally not added on a sprint backlog because it does not describe development work. The purpose of an abuse story is to help the team think about what could go wrong so they can specify the work/the requirements needed in user stories. The form of the abuse story is helpful because developers are familiar with user stories.
@@Validate: Abuse stories are advantageous mostly in the beginning of development. Not every story needs an abuse story counterpart: that would add much overhead. 
Abuse stories can be helpful as explanation of certain security tests, explaining for example to a pentester against what threats a specific requirement needs to be tested.

PITFALL: Abuse stories should not be the only method to find security requirements (see “Requirements in stories”). Requirements can also be added by applying expertise and by using triggers, allowing for more direct and efficient selection instead of first having to think about what could go wrong.
## Topic: Security testing
### Agile testing
In Agile, testing happens more frequently and typically covers the same parts of a system over and over again, which is why it is important to automate testing and to base time consuming manual testing and reviewing on the effects of the changes made. For code review this means that review needs to focus on changed and added code only and therefore requires a structured approach and administration. For manual pentesting this means that the testing should focus on the behaviour that is likely to be affected by the changes made.  Because the behavioural effect of changes is hard to predict, mistakes may be made in limiting the pentest, which is why it is recommended to do a complete penetration test when the risk of such a mistake is deemed high.

This need for change-based selection of tests shows that especially for agile it is important to have modular system, in which modules can be tested separately and there is limited propagation of changes. In an agile environment there typically is not a budget for in depth expert manual review and testing after every sprint. This means that in release planning it should be taken into account when such manual work is expected to be necessary, so it can be prepared and planned."

Test automation has obvious benefits. Effortless reruns, consistency and repeatability, quick feedback and control over test cases. It does require developer discipline to maintain them along with source code changes. The same holds for security tests. Part of security concerns can be caught early on by unit tests (e.g. invalid ranges of inputs) but are easier to catch in higher level end-to-end tests where input and output are compared with expectations (through a black box). @@TODO: keep paragraph?

Pitfall: Automation alone will typically not do the trick. Both expert code review and manual pentest should be part of any software quality assurance. 

Pitfall: the classic penetration test pitfall is performing it late, just before a public release.  

## Topic: Education & guidance - organisation and culture
### Security Champion (existing already in SAMM - @@TODO: align)
A security champion is a member of the development team who proactively helps to create a good security posture within the development team. They act as a point of contact for security related questions and try to remove any impediments preventing the team to be able to develop software securely.

PITFALL: Seeing the security champion as the person responsible for security, or as the security expert. The champion is a facilitator.
## Misc. Topics 
@@TODO: assign topic
### Code reviews
In agile development, code is being released more rapidly and commits occur often. To cope with this speed, code reviews are done in small iterations focusing mostly on new and high risk functionality. The basis for the code review are the story-specific and the generic requirements. This process can be aided by checklist of known common mistakes and bad coding patterns, that can be added to the verification instructions compiled during requirement preparation (see “Selecting and preparing requirements”).
It is important that the team makes agreements on when code is committed and when reviews occur. 
See also “Agile testing”.
### Retrospectives
Security ought to be a standard topic in both refinements and retrospectives. Over time teams learn which security concerns took much effort/are underestimated. That experience makes planning more precise and predictable. A security specialist (which could be officially the security champion) can be of tremendous help to fill in the details and knowledge gaps. 

Pitfall: care should be taken that security is not delegated to “the one experienced person”, which would relieve the team of the security concern. That way the team becomes more dependent on one person. In the short term it is efficient, and necessary (notably code reviews), but at least 2 people in a team should take on the challenge to increase their security knowledge. 
 

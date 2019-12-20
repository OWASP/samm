---
benefit: You have an understanding of key security requirements.
costs: Difficult to say, but let's give it a try.
dependencies:
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
id: 91086153b98b46928e36dd031b27bdc2
level: 3d035b6df77f4ee69577c9b4c9d64891
metrics:
- metric1
- metric2
notes: 'My first thought goes here.

  My second thought goes here.'
personnel:
- Architect
- Developer
- Tester
results:
- result1
- result2
shortDescription: High-level application security objectives
stream: 7fb68bc660774b9080963c17761529a2
title: Apply context-specific security requirements to the application

---
Perform a review of the functional requirements of the software project. Identify relevant security requirements (i.e. expectations) for this functionality by reasoning on the desired confidentiality, integrity or availability of the service or data offered by the software project. Requirements state the objective (e.g., “personal data for the registration process should be transferred and stored securely”), but not the actual measure to achieve the objective (e.g., “use TLSv1.2 for secure transfer”).
At the same time, review the functionality from an attacker perspective to understand how it could be misused. This way you can identify extra protective requirements for the software project at hand.
Security objectives can relate to specific security functionality you need to add to the application (e.g., “Identify the user of the application at all times”) or to the overall behaviour and quality of the application (e.g., “Ensure personal data is properly protected in transit”), which will not lead to new functionality. Follow good practices for writing security requirements. Make them specific, measurable, actionable, relevant and time-bound (SMART). Beware of adding requirements too general-purpose to not relate to the application at hand (e.g., The application should protect against the OWASP Top 10). While they can be true, they don’t add value to the discussion.
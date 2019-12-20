---
benefit: You get basic security practices right in your software design.
costs: Difficult to say, but let's give it a try.
dependencies:
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
id: 27bb61f3c6344359b021caeaef5ab07e
level: a11b78917dec4cfdad983cf6d1d17b61
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
shortDescription: Use basic security principles
stream: 253b012094cf4e0988e08fd22609227d
title: Use short checklists of security principles

---
During design, technical staff on the project team use a short checklist of security principles. Typically, security principles include defense in depth, securing the weakest link, use of secure defaults, simplicity in design of security functionality, secure failure, balance of security and usability, running with least privilege, avoidance of security by obscurity, etc.
For perimeter interfaces, the design team considers each principle in the context of the overall system and identify features that can be added to bolster security at each such interface. Limit these such that they only take a small amount of extra effort beyond the normal implementation cost of functional requirements. Note anything larger and schedule it for future releases.
Train each project team with security awareness before this process, and incorporate more security-savvy staff to aid in making design decisions.
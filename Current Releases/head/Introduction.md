---
title: Introduction
weight: 1
type: security_practice
---
The mission of OWASP Software Assurance Maturity Model (SAMM) is to be the prime maturity model for software assurance that provides an effective and measurable way for all types of organizations to analyze and improve their software security posture. OWASP SAMM supports the complete software lifecycle, including development and acquisition, and is technology and process agnostic. It is intentionally built to be evolutive and risk-driven in nature.  

The original model (v1.0) was written by Pravir Chandra and dates back from 2009. Over the last 10 years, it has proven a widely distributed and effective model for improving secure software practices in different types of organizations throughout the world. Translations and supporting tools have been contributed by the community to facilitate adoption and alignment. With version 2.0, we further improve the model to deal with some of its current limitations.

After a period of intensive discussions and with input from practitioners and the OWASP community during summits in Europe and the United States on the best way forward, we take a new approach for version 2.0 based on the following improvements.

- The model is development paradigm agnostic, it supports waterfall, iterative, agile and DevOps development, and potentially new future paradigms as well. The model provides a stable base with objectives and activities that should be considered from a generic/holistic point of view, but leaves open how to best fit this in a particular development context or paradigm. Particular activities may even not apply in a particular context.
- We foresee for contributors to OWASP SAMM to provide, on a less formal basis, guidance in separate guidance sections (or documents) to provide extra insights in how to apply this
for particular development paradigms (or technologies).
- A security practice is divided in two "streams", which aligns and links the activities in the practice over the different maturity levels. Each stream has an objective to be reached,
and this objective can be reached in increasing levels of maturity. This way, we ensure that there are no "orphan" activities that seem only relevant on a single maturity level
(like, for instance, code signing in the current model).
- We keep the 3 maturity levels as they are (level 1 = initial implementation ; level 2 = structured realization ; level 3 = optimized operation), but will support for extra activities
(above level 3) if we see good reason to do so.
- We introduce a new, fifth business function "Implementation" in the model to represent a number of core activities in the build and deploy domains of an organization.
- We support maturity measurements both from a coverage and a qualitative perspective. The coverage measurement is the basic measurement that is part of the current model. The optional qualitative measurement will be available to measure how well an activity at a particular maturity level is implemented in your organization.

For the SAMM benchmark initiative, the team is working on providing a community-driven dataset solution that we intend to launch with the release of v2.0 of the model (June 2019). The solution will provide open access to anonymized data where contributors will have more advanced access to the data.

Finally, we are working towards a model where frequent updates of the model are supported through small increments on specific parts of the model. The intent is to keep the model
rather stable (and only change this with major versions of the model), but have a living model by supporting regular updates to explanation, tooling and guidance by the community.

We are working hard towards v2.0 of the model with a small set of core contributors. You can contribute to the project by providing us feedback on what we distribute and tell us what works
for you and what not (and why).

The OWASP SAMM project team.

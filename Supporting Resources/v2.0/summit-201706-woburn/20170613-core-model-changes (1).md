# Changes to the core model
Respect the ground rules discussed during the first summit day, specifically:
  * Try not to break the current SAM model unless absolutely necessary
  * Keep 1 SAMM core model. All development paradigms (agile, waterfall, etc.) should fit into the core model.


## approach
  * The SAMM maintainers experimented with analysing and restructuring 2 SAMM activities, Secure Architecture (SA) and Implementation Review (IR).
  * The result was welcomed by the group and the consensus is to apply the same method to the other SAMM activities.

  * They identified 2 common threads throughout each activity.
    * The proposal is to follow to 2 common threads for the other activities. These will form the Basic SAMM model. If we identify extra threads, we could publish an extended model.

Perform the same excercise for 2 different SAMM activities, Secure Architecture (SA) and Implementation Review (IR).

# Secure Architecture
Secure Architecture consists of 6 activities. They broadly consist of:
  * maturity level 1: provide some guidance
  * maturity level 2: direct design towards known secure by default
  * maturity 3: more formal, enforce approved (secure) component utilisation, and minimize independent decisions.

Common threads throughout the 6 SA activities are:
  1. supporting architectural design activities.
  2. dependency management (identifying libraries, etc.)

Common threads throughout the 6 IR activities are:
  * manual activities
  * automated activities

They also came up with a proposed description for the maturity levels, extrapolated from the SA and IR activities. In the context of SA these are:

  1. **Maturity level 1**: Identify Some basic design considerations which should be adopted and how they can be adapted. Practically for design, this includes:
    * security by default
    * privacy by default
    * fail secure

  2. **Maturity level 2**: standardise the design principles. Come up with standardised design patterns which implement the principles from teh previous level.

  3. **Maturity Level 3**: Create reference architectures combining the standard design patterns. This should become the standard (e.g. building a microservice cluster within a cloud provider). Deviating from it would be an exception.


---

# Implementation Review
could you get to maturity level 3 using purely automated processes, or purely manual.
  * manual gets you depth but not much breadth.
  * automated gets you wide breadth but not much depth.

Common threads:
  * manual activities
  * automated activities

SA1 typically manual processes
  * manual
  * automated

Proposed new version:
  * level 1: there is a process in place for manual code review (e.g. peer review with guidelines)
    * probably only high risk
    * not all code for a high-risk app
    * can be an internal review, anyone in your team, or a security champion. probably assisted with guidelines.

  * level 2 : standardise the rules used for performing the review. Fine tune the rules used for code review in your org.
    * add independence: should not only rely on peer review.
    * you could probably also apply peer-review to more code than in level 1.
  * level 3: feedback: whatever comes out of the code review is used to learn from.
    * e.g. why are we seeing more xss in code recently when we  hadn't previously? what changed?  new, untrained developers?
    * The feedback should be a characteristic of all level 3 maturity.

Throughout the 3 maturity levels, there will be a mix of manual and automated activities.

---

# Issues with the core model
  * currently we only measure whether or not we do something, not how well.
    * In the current model, repeatability is not consistently baked into activities. Some include it, many don't. The new model should remove that and standardize them. After that we can work on how well an activity is carried out in an organisation.
    * there is currently no framework which can tell you whether a design is secure. The goal is to say, if the SAMM activities are followed and done well, you should have a secure design.
    * We're aiming for activities which apply for every methodology.

    * Per activity, we should have a clarification per development methodology explaining how the activity would be done within that methodology.

CMMI took a long time defining what a maturity level means. Are the levels clearly defined in SAMM?
  * sophistication vs maturity.

  * Currently, the model sometimes assumes that maturity level N presupposes that the activities of maturity level N-1 were performed. We should work on removing that assumption.


## Interesting points brought up during the discussion:
  * what happens if a team achieves an objective but without performing any of the SAMM activities? Do we answer yes for the activities knowing they have not been completed?
    * Not resolved in this session but to be discussed later.
  * objective vs activity:
    * today, descriptions in the current model are implicitly rooted in a waterfall methodology. In abstracting the methodology from the model, the activities cannot by necessity be sufficiently concrete so there is more chance that a team will have achieveed the objective using alternate activities.
      * this makes a companion to the core model (methodology specific) even more important --hints on activities per methodology.
  * Enforcement should not be kept for level 3. If a design pattern was developed in level 2, there should be some degree of enforcement at that level already.

**Question**: to what extent should SAMM try to push users towards doing activities which they don't (e.g. secure architecture design)

Software architecture in agile.
  * SAMM should explicitly specify that in order to do secure design, there has to be a design phase to start with.
  * in agile development, central security people perform more of the validation or pre-selection tasks.
    * how to handle dev teams incorrectly combining blocks selected by security?
    * some organisations have architectural teams who must review each functional feature

---

# Conclusion
  * There was general agreement in the room that the newly proposed model was clearer and more consistent.
  * The description of the maturity levels made the model easier to understand and follow.


**TODO:**
  * prototype a number of security activities using the new model
    * refine terminology
    * propose a new prototype with 1 or 2 activities in each of the functions and present them for review.
  * take a security practice, add more detail with links towards waterfall, agile, etc. to get a mor ethorough feeling for whether it works.

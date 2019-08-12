# Changes to the core model


## Approach
Keep in mind to respect the ground rules discussed during the first summit day, specifically:
 * Try not to break the current SAM model unless absolutely necessary
  * Keep 1 SAMM core model. All development paradigms (agile, waterfall, etc.) should fit into the core model.

The SAMM project leaders experimented with analysing and restructuring 2 SAMM activities, Secure Architecture (SA) and Implementation Review (IR).
  * They identified 2 common threads throughout each activity.
  * They then re-defined the 3 maturity levels around the same 2 threads using the following pattern extrapolated from SA and IR:
    * maturity level 1: provide some guidance
    * maturity level 2: direct design towards known secure by default
    * maturity 3: more formal, enforce approved (secure) component utilisation, and minimize independent decisions.
  * The proposal in the session was to review the 2 restructured activities and determine whether it made sense to apply the same approach to the other activities. 

# Secure Architecture
Secure Architecture consists of 6 activities, broadly distributed across 3 maturity levels as follows:
  1. **Maturity level 1**: Identify Some basic design considerations which should be adopted and how they can be adapted. Practically for design, this includes:
    * security by default
    * privacy by default
    * fail secure

  2. **Maturity level 2**: standardise the design principles. Come up with standardised design patterns which implement the principles from teh previous level.

  3. **Maturity Level 3**: Create reference architectures combining the standard design patterns. This should become the standard (e.g. building a microservice cluster within a cloud provider). Deviating from it would be an exception.

The 2 common threads running through the current 6 SA activities are:
  1. supporting architectural design activities.
  2. dependency management (identifying libraries, etc.)


---

# Implementation Review
Question: could you get to maturity level 3 using purely automated processes, or purely manual.
  * the group didn't think so.

Observation:
  * manual processes get you depth but not much breadth.
  * automated processes get you wide breadth but limited depth.

The 2 common threads throughout the 6 IR activities are:
  * manual activities
  * automated activities

Proposed new maturity levels mixing manual and automated processes: 
  * **level 1**: there is a process in place for manual code review (e.g. peer review with guidelines)
    * probably only high risk
    * not all code, even for a high-risk apps
    * can be an internal review, anyone in your team, or a security champion. probably assisted with guidelines.
  * **level 2**: standardise the rules used for performing the review. Fine-tune the rules used for code review in your org.
    * add independence: should not only rely on peer review.
    * you could probably also apply peer-review to more code than in level 1.
  * **level 3**: feedback loop: whatever comes out of the code review is used to learn from.
    * e.g. why are we seeing more xss in code recently compared to previously? what changed? perhaps new, untrained developer(s)?
    * The feedback should be a characteristic of all level 3 maturity.

---

# Interesting points and general issues brought up during the discussion
  * currently we only measure whether or not we do something, not how well.
    * In the current model, repeatability is not consistently baked into activities. Some include it, many don't. The new model should remove that and standardize them. After that we can work on how well an activity is carried out in an organisation.
    * there is currently no framework (we know of) which can tell whether a design is secure. The goal is to say, if the SAMM activities are followed and done well, you should have a secure design.
    * the model should aim for activities which apply for every methodology.
      * Per activity, we should have a clarification per development methodology explaining how the activity would be done within that methodology.

  * **Question**: CMMI took a long time defining what a maturity level means. Are the levels clearly defined in SAMM?
  * sophistication vs maturity.
  * Currently, the model sometimes assumes that maturity level N presupposes that the activities of maturity level N-1 were performed. We should work on removing that assumption.
  * what happens if a team achieves an objective but without performing any of the SAMM activities? Do we answer yes for the activities knowing they have not been completed?
    * Not resolved in this session but to be discussed later.
  * objective vs activity:
    * today, descriptions in the current model are implicitly rooted in a waterfall methodology. In abstracting the methodology from the model, the activities cannot by necessity be sufficiently concrete so there is more chance that a team will have achieveed the objective using alternate activities.
      * this makes a companion to the core model (methodology specific) even more important --hints on activities per methodology.
  * Enforcement should not be kept for level 3. If a design pattern was developed in level 2, there should be some degree of enforcement at that level already.
  * **Question**: to what extent should SAMM try to push users towards doing activities which they don't (e.g. secure architecture design)

Software architecture in agile.
  * SAMM should explicitly specify that in order to do secure design, there has to be a design phase to start with.
  * in agile development, central security people perform more of the validation or pre-selection tasks.
    * how to handle dev teams incorrectly combining blocks selected by security?
    * some organisations have architectural teams who must review each functional feature

---

# Conclusion
  * There was general agreement in the room that the newly proposed model applied to SA and IR was clearer and more consistent. The consensus is to apply the same method to the other SAMM activities.
  * There was general agreement that the description of the goals of each maturity level made the model easier to understand and follow.
  * In the **Core SAMM model**, each activity will include 2 common threads (see the examples of SA and IR). If lots of threads are identified, these could be integrated into an **Extended SAMM model**, beyond the core.


**TODO:**
  * prototype a number of security activities using the new model
    * refine terminology (the term "activity" is overloaded here)
    * propose a new prototype with 1 or 2 activities in each of the functions and present them for review.
  * take a security practice, add more detail with links towards waterfall, agile, etc. to get a more thorough feeling for whether it works.

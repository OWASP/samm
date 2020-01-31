<div class="new-page"/>
### Defect Management (DM1)

The goal of this practice level is to all defects are tracked within each project.

#### Activities

##### [Stream A] Track security defects centrally
<b>Benefit</b>: <i>Transparency of known security defects impacting particular applications</i>

Introduce a common definition / understanding of a security defect and define the most common ways of identifying these. These typically include, but are not limited to:

* Threat assessments
* Penetration tests
* Output from static and dynamic analysis scanning tools
* Responsible disclosure processes or bug bounties

Foster a culture of transparency and avoid blaming any teams for introducing or identifying security defects. Record and track all security defects in a defined location. This location doesn't necessarily have to centralized for the whole organization, however ensure that you're able to get an overview of all defects affecting a particular application at any single point in time. Define and apply access rules for the tracked security defects to mitigate the risk of leakage and abuse of this information.

Introduce at least rudimentary qualitative classificiation of security defects so that you are able to prioritize fixing efforts accordingly. Strive for limiting duplication of information and presence of false positives to increase the trustworthiness of the process.


###### Assessment Question(s)
Do you track all known security defects in accessible locations?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You can easily get an overview of all security defects impacting one application
- You have at least a rudimentary classification scheme in place
- The process includes a strategy for handling false positives and duplicate entries
- The defect management system covers defects from various sources and activities


##### [Stream B] Define basic defect metrics
<b>Benefit</b>: <i>Identification of quick wins derived from available defect information</i>

Once per defined period of time (typically at least once per year), go over your both resolved and still open recorded security defects in every team and extract basic metrics from the available data. These might include:

* The total number of defects versus total number of verification activities. This could give you an idea whether you're looking for defects with an adequate intensity and quality.
* The software components the defects reside in. This is indicative of where attention might be most required, and where security flaws might be more likely to appear in the future again.
* The type or category of the defect, which suggests areas where the development team need further training.
* The severity of the defect, which can help the team understand the software’s risk exposure.

Identify and carry out sensible quick win activities which you can derive from the newly acquired knowledge. These might include things like a knowledge sharing session about one particular vulnerability type or carrying out / automating a security scan.


###### Assessment Question(s)
Do you use basic metrics about recorded security defects to carry out quick win improvement activities?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You analyzed your recorded metrics at least once in the last year
- At least basic information about this initiative is recorded and available
- You have identified and carried out at least one quick win activity based on the data


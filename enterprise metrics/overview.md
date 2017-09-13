# Overview

Open SAMM provides a solid framework for evaluating a few applications at a time, but begins to lose a lot of detail when expanded to hundreds or thousands of applications. In large organizations, Business Functions such as Governance may be as different as all other disciplines when compared across a number of applications. Additionally, different applications, products, and business units may pose completely different risks if compromised, and therefore may require vastly different approaches to security. While reviewing a single application it may be easy to make a judgement call of how much security is really enough, but when comparing security or risks spread across hundreds and thousands of applications, SAMM alone does not provide enough flexibility to allow direct comparisons between different applications.

## Different types of risks

In order to allow this type of analysis, each organizations should consider augmenting the SAMM scores with the prioritization and risk measurements suggested below. Before diving into the details of the methodology, there are some initial concepts that need to provide the background for all further analysis. The first one is that there are different types of risks that govern application: "Static" and "Dynamic".

### Static Risks

Static risks are those that define what an application is, and helps document the impact in the event the application is compromised. These risks should be relatively "fixed" or "constant", and any changes to these risk factors would be triggered by significant changes in the application, its functions, or its role in the organization. Static risks cannot be modified on a daily basis through increasing or decrising application controls and will remain relatively constant throughout the application's life.

### Dynamic Risks

Dynamic risks are those that directly correlate to the maturity of the application development environment. This means that the application that scored 0 across every Security Practice would have the highest Dynamic Risk score, and those scoring 3 across the board would have the lowest. This type of risk is the principle mechanism by which application security can be improved, and where organizations should spend majority of their focus. Ideally, most applications should be on a consistent path of improving dynamic risk scores over time, unless implemented security controls show to be inappropriate or excessive for the Static Risk impact.

### Correlated Risk

In order to allow direct comparisings between different applications, it will be important to calculate a single score that would represent both risks at the same time, or a correlated risk score. To calculate the score, the two risk measurements are calculated by multiplying Static and Dynamic risk scores together. Product of the two scores will provide a single measure by which application security may be ascertained and used for a number of purposes, including:
* Comparing applications to identify those requiring the most attention
* Evaluating whether the security efforts and expendatures are representative of organizational priorities
* Create executive heat-maps and dashboards for better application security and risk analysis
* Measure risk reduction associated with increasing security controls or reduction of application functionality
* Document application security program maturity improvements over time

## Goals and Objectives

Goals and objectives should be focused on the organization and the ways it can make strategic investments to help improve security of its applications, rather than looking for applications perceived to be least secure. In application security, unlike many other security disciplines, the timing of eliminating security vulnerabilities can have very different costs. An application vulnerability eliminated during the development of security requirements will have a different remediation cost than the one identified during coding, and significantly different than the one caught during a post-production penetration test. Therefore, unlike many other security disciplines, application security could present the organization with a real ROI, if implemented correctly. Increased emphasis on security testing post production is very important, but perhaps among the least efficient and most expensive ways of improving security of the different applications. Focusing on better security requirements or better tools to help eliminate vulnerabilities before the code is pushed into production will generally yield more cost-efficient results.

In order to derive the most benefit from the approach, organizations should establish clear goals and objectives, which can then be used to help drive the assessment and ensure data extracted from this analysis meets organization's needs. In order to make the process of defining these goals and objectives easier, it's always best to start by brain-storming questions the assessment should aim to answer. For example, these questions might be:

* Which applications are outside of our risk tolerance?
* Is application spending correlated with risks different applications pose to the organization?
* How secure are the applications that process sensitive data?
* How mature is the development process around the applications that could kill people? (Useful for healthcare applications)
* Which business unit is lagging behind in application security?
* Which business unit should be consulted for techniques or tips on implementing better application security processes?
* How balanced is the security program with regard to proactive vs. reactive security measures?

Once goals and objectives have been documented, they should be used to guide all future application security measures, especially in identifying Static Risks and metrics visualizations.

## Approach Limitations

While this approach will help extend SAMM maturity dashboards and calculations, there are several important limitations that need to be understood in order to avoid making incorrect decisions.

### Qualitative, Not Quantitative

In order to make calculations possible, a lot of information needs to be converted to a number. While it's natural to want to rely on pure numbers for all decision making, it's important to remember that the analysis and subsequent metrics are qualitative, not quantitative. This does not mean that metrics are less reliable or cannot be used for making decisions, but rather that it's important to ensure the information-gathering does not violate any of the basic metrics principles. Additionally, it's important to note that the data has a margine of error inherented by the definition of qualitative measure, which should be closely managed.

### Basic Metrics Principles

Regardless of the types of metrics gathered or collected, it's imporant to observe some basic metrics principles that could potentially geopardise the whole program:

* Must be easy to measure - If it takes a very long time to assess each application, users will not do it or may not spend the necessary attention evaluating and answering each question
* Must be consistent - In order to preserve the integrity of calculating security program changes, measurements must be the same each time controls are measured

These principles should be closely monitored and accomodated when desining the mechanisms by which applications will be assessed.

### Assessment Quality

Quality of the assessment will always depend on answers provided during the assessment. Depending on the specific approach taken by the organization, the quality of the assessment may vary widely. There are many variables that will impact the quality of the assessment, such as:

* Phrasing of the questions
* Specific individuals asked to provide answers
* Time allowed to respond to the questionnaire
* Amount of time required to respond for each application
* Management support behind the effort
* Amount of guidance provided for the questionnaire
* Tools used to collect and qualify information

In many cases it may not be possible to ensure a very high degree of accuracy, especially in the beginning of the effort when collective "buy-in" is more important than increasing assessment accuracy. Additionally, considering that these measures are always qualitative, there are points of diminished returns when efforts to increase accuracy could be excessive or wasted. The most important aspect of this limitation is to make sure the accuracy of the assessment is clearly understood, especially when making decisions based on this informaiton. Afterall, 70% accuracy of 100% of the applications may be preferable to 100% accuracy in 30% of the applications, especially when launching a new application security maturity measurement program.

### Individual Scores Don't Matter

When beginning to collect and calculate information and scores, it's easy for fall for the notion of focusing on individual scores achieved by different applications. Following down this path will likely lead to many disagreements about the merits of different scores, which will inevitably lead to people wanting to endlessly tweak the calculation formula to accomodate specific applications, development languages, or development methodologies. To avoid this dangerous path, it's important to understand that actual scores achieved by each application don't matter. In fact, this is one of the reasons actual scores reached by each application are recommended to be obfuscated to a 10 or 100 point scale.

Once it is established that the information is gathered and measured consistently actross the organization, what matters are not numbers achieved by each application, but rather the relationship between numbers. Majority of the visualizations derived from this methodology focus on ways of highlighting whether some applications are overlooked or pose excessive risk to the organization, and whether the applicaiton security program is well correlated with the organization's risks and priorities. Therefore, it's recommended to encourage discussion to be focused on relationships between applications, not individual application scores. Certainly each team will want to know what score they got, but in this regard it may be more beneficial to present a SAMM scorecard, rather than correlated numerical data.



















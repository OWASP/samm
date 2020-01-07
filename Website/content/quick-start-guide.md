# OWASP SAMM v2.0 - Quick Start Guide


## About OWASP SAMM

**OWASP SAMM (Software Assurance Maturity Model)** is the OWASP framework to help organizations assess, formulate, and implement a strategy for software security, that can be integrated into their existing **Software Development Lifecycle (SDLC)**. OWASP SAMM is fit for most contexts, whether your organization is mainly developing, outsourcing, or acquiring software, or whether you are using a waterfall, an agile or devops method, the same model can be applied. This quick start guide walks you through the core steps to execute your OWASP SAMM-based secure software practice.


## Background

Before diving into actionable steps for a quick start, let's first briefly describe the model itself. OWASP SAMM v2.0 is based around a set of 15 security practices, which are grouped into five business functions. Every security practice contains two streams that represent a set of activities, structured into three maturity levels (1-3). The activities on a lower maturity level are typically easier to execute, and require less formalization than the ones on a higher maturity level. 

The structure and setup of the **OWASP SAMM maturity model** are made to support:

1. the **assessment** of the current software assurance posture,
2. the definition of the **strategy** (i.e. the target) that the organization should take,
3. the formulation of an implementation **roadmap** of how to get there, and
4. prescriptive advice on how to **implement** particular activities.

In that sense, the value of OWASP SAMM lies in providing a means to know where your organization is on its journey towards software assurance, and understanding what is recommended to move to a next level of maturity. Note that OWASP SAMM does not insist that all organizations achieve maturity level 3 in every category. Indeed, you determine the target maturity level for each Security Practice that is the best fit for your organization and its needs. OWASP SAMM provides a number of templates for typical organizations to this end, but it is recommended that these be adapted to the needs of your organization.

## How to apply

The typical approach of using OWASP SAMM in an organization is to start with preparation, going through the assessment, setting the target, planning, and implementation to roll-out. OWASP SAMM is particularly well suited to support continuous improvement, in which case the cycle is executed continuously (typically in periods of 3 to 12 months). Note that it is not necessary to always execute all these steps though. OWASP SAMM could be used to only perform the assessment, or to define the long-term goals, for instance.

So, how do you go about executing the different steps described above? To get started, the following table provides more information for each step in terms of the goal, the different activities to be executed, and the most important supporting resources:

| Step | Purpose | Activities | Resources | Best practices |
|:---|:---|:---|:---|:---|
| Prepare | Ensure a proper start of the project | <em>Define the scope</em>  <br> Set the target of the effort: the entire enterprise, a particular application or project, a particular team. <br> <em>Identify stakeholders</em> <br> Ensure that important stakeholders are identified and well aligned to support the project. <br> <em>Spread the word</em> <br> Inform people about the initiative, and provide them with information to understand what you will be doing. | <b>Consider involving at least:</b> <ul><li> Executive Sponsor </li> <li> Security Team </li> <li> Developers </li> <li> Architects </li> <li> Business Owners </li> <li> QA Testers </li> <li> Managers </li> </ul> <b>SAMM wiki: </b><A HREF="https://www.owasp.org/index.php/OWASP_SAMM_Project"></A> https://www.owasp.org/index.php/OWASP_SAMM_Project <br> <br> <b> SAMM downloads: </b> <A HREF="https://owaspsamm.org/about/">https://owaspsamm.org/about/ </A> | <ul><li>Pre-screen software development maturity to have realistic expectations.</li> <li>The smaller the scope, the easier the exercise.</li></ul> |
|Assess | Identify and understand the maturity of your chosen scope in each of the 15 software security practices | <em>Evaluate current practices</em> Organize interviews with relevant stakeholders to understand the current state of practices within your organization. You could evaluate this yourself if you understand the organization sufficiently enough. SAMM provides lightweight and detailed assessments, where the latter is an evidence-based evaluation, use the detailed one only if you want to have absolute certainty about the scores. <br> <br> <em>Determine maturity level</em> Based on the outcome of the previous activity, determine for each security practice the maturity level according to the SAMM maturity scoring system. Activities are scored by a multiple choice system and are averaged out for the security practice area, then added together to determine the overall score.| <b>SAMM toolbox:</b> <A HREF="https://owaspsamm.org/assessment/"> https://owaspsamm.org/assessment/</A> <br> <br><b>This resource will provide you with:</b> <ul> <li> Assessment questions </li> <li> Maturity level calculation </li> </ul>  <br> <b>OWASP Maturity Models:</b> <A HREF="https://github.com/owasp/Maturity-Models"> https://github.com/owasp/Maturity-Models </A> | <ul> <li>Ensure consistent assessment for different  stakeholders and teams by using the same questions and interviewer.</li> <li> Consider using different formats to gather data e.g., workshops vs. interviews. </li> <li> Ensure interviewees understand the particularities of activities. </li> <li> Understand which activities are not applicable to the organization, and take this into account in the overall scoring. </li> <li> Anticipate/document whether you plan to award partial credit, or just document various judgment calls. </li> <li> Repeat questions to several people to improve the assessment quality. </li> <li> Consider making interviews anonymous to ensure honesty. </li> <li> Don't take questions too literally.</li></ul> |
|Set the Target | Develop a target score that you can use as a measuring stick to guide you to act on the most important activities for your situation | <em>Define the target</em> Set or update the target by identifying which activities your organization should implement ideally. Typically, this will include more lower-level than higher-level activities. Predefined roadmap templates can be used as a source for inspiration. Ensure that the total set of selected activities makes sense, and take into account dependencies between activities. <br> <br> <em>Estimate overall impact</em> Estimate the impact of the chosen target on the organization. Try to express in budgetary arguments. | <b> See the How-To-Guide for predefined templates</b> <br> <br> <b> Software Assurance Maturity Model (SAMM) Roadmap chart Worksheet (part of the SAMM Benchmarking as a comparative source)</b> <br> <br> <b> Leverage the Roadmap worksheet in the SAMM Toolbox to help calculate maturity score improvements based on future answers. <b> | <ul> <li> Take into account the organisation's risk profile.</li> <li> Respect dependencies between activities.</li> <li> As a rough measure, the overall impact of a software assurance effort is estimated at 5 % to 10% of the total development cost.</li> </ul> |
|Define the Plan | Develop or update your plan to take your organization to the next level. | <em>Determine change schedule</em>Choose a realistic change strategy in terms of number and duration of phases. A typical roadmap consists of 4 to 6 phases for 3 to 12 months. <br><br><em>Develop/update the roadmap plan</em> Distribute the implementation of additional activities over the different roadmap phases, taking into account the effort required to implement them. Try to balance the implementation effort over the different periods, and take dependencies between activities into account.| <b>SAMM Resources:</b> <A HREF="https://www.owasp.org/index.php/SAMM-Resources"> https://www.owasp.org/index.php/SAMM-Resources </A>  | <ul> <li> Identify activities that can be completed quickly and successfully early in the project.</li> <li> Start with awareness / training.</li> <li>Adapt to coming release cycles / key projects.</li></ul> |
|Implement | Work the plan | <em>Implement activities</em> Implement all activities that are part of this period. Consider their impact on processes, people, knowledge, and tools. The SAMM model contains prescriptive advice on how to do this. OWASP projects may help to facilitate this. | <b>Useful OWASP resources per activity are described at <A HREF="https://www.owasp.org/index.php/Category:SAMM-Resources">https://www.owasp.org/index.php/Category:SAMM-Resources</A></b>  | <ul> <li> Treat legacy software separately. Do not mandate migration unless    really important.</li> <li> Avoid operational bottlenecks, particularly for the security team.</li></ul> |
|Roll-Out | Ensure that improvements are available and effectively used within the organization. | <em>Evangelize improvements</em>Make the steps and improvements visible for everyone involved by organizing trainings and communicating with management stakeholders. <br><br><em>Measure effectiveness</em>Measure the adoption and effectiveness of implemented improvements by analyzing usage and impact. |  | <ul><li>Categorize applications according to their impact on the organization. Focus on high-impact applications.</li><li>Use team champions to spread new activities throughout the organization.</li></ul> |

As part of a quick start effort, the first four phases (preparation, assessment, setting the target, and defining the plan) can be executed by a single person in a limited amount of time (one to two days). Making sure that this is supported in the organization, as well as the implementation and roll-out phases, typically requires much more time to execute.

## OWASP resources

The following SAMM resources are referenced in the SAMM Quick Start Guide:

<ul>
<li> SAMM wiki: <A HREF="https://www.owasp.org/index.php/OWASP_SAMM_Project"></A> https://www.owasp.org/index.php/OWASP_SAMM_Project </li>
<li> SAMM downloads: <A HREF="https://owaspsamm.org/about/">https://owaspsamm.org/about/ </A> </li>
<li> SAMM toolbox: <A HREF="https://owaspsamm.org/assessment/"> https://owaspsamm.org/assessment/</A> </li>
<li> Browse SAMM online: <A HREF="https://owaspsamm.org/model/>https://owaspsamm.org/model/</A> </li>
<li> OWASP resources: <A HREF="https://www.owasp.org/index.php/Main_Page">https://www.owasp.org/index.php/Main_Page </A> </li>
</ul>

To apply SAMM you will find a lot of great resources at OWASP. We have created a SAMM resources collection on the OWASP wiki.

Go to https://www.owasp.org/index.php/SAMM-Resources to discover all our SAMM Resource online. This wiki category links OWASP and other resources to SAMM Security practices.

## Final notes

The best way to grasp SAMM is to start using it. This document has presented a number of concrete steps and supportive material by which to execute. Now it's your turn. We warmly invite you to spend a day or two on following the first steps, then you can understand and appreciate the added value of the model. Enjoy! Suggestions for improvements are welcome. And if you're interested, consider to join the mailing list, or become part of the SAMM community. 

<b>Discover SAMM online</b> - https://www.owasp.org/index.php/SAMM <br><br>
<b> Subscribe to our SAMM mailing list </b> - https://lists.owasp.org/mailman/listinfo/samm <br><br>
<b> Follow us on Twitter </b> - https://twitter.com/OwaspSAMM <br><br>

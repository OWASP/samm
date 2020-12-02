+++
title = "Comparing BSIMM & SAMM"
date = "2020-10-29T00:00:00+02:00"
tags = ["BSIMM", "SAMM", "maturity", "model"]
categories = ["models"]
banner = "img/banners/undraw_Working_oh83.png"
author = "Brian Glas"
+++

## Building Security In Maturity Model (BSIMM) compared to Software Assurance Maturity Model (SAMM)
<br/>

### A common origin

[BSIMM (Building Security In Maturity Model)](https://www.bsimm.com/) and SAMM (Software Assurance Maturity Model) have similar origins dating back to a common origin back in 2008-2009.  I’m frequently asked about what is similar and what is different between the two models, so I wrote up this comparison to help organizations understand which of these two models may be a better fit for their needs. 
<br/><br/>

### Type of model

#### BSIMM is a descriptive model

The BSIMM is primarily a measuring stick for software security. The best way to use it is to compare and contrast your own initiative with the data about what other organizations are doing. The BSIMM also functions as a roadmap for an SSI. You can identify your own goals and objectives, then refer to the BSIMM to determine which additional activities make sense for you. 

The purpose of the BSIMM is to quantify the activities carried out by various kinds of SSIs across many organizations. Because these initiatives use different methodologies and different terminology, the BSIMM requires a framework that allows us to describe any initiative in a uniform way. Our software security framework (SSF) and activity descriptions provide a common vocabulary for explaining the salient elements of an SSI, thereby allowing us to compare initiatives that use different terms, operate at different scales, exist in different parts of the organizational chart, operate in different vertical markets, or create different work products. [1] 

As a descriptive model, the only goal of the BSIMM is to observe and report. We like to say we visited a neighborhood to see what was happening and observed that “there are robot vacuum cleaners in X of the Y houses we visited.” Note that the BSIMM does not say, “all houses must have robot vacuum cleaners,” “robots are the only acceptable kind of vacuum cleaners,” “vacuum cleaners must be used every day,” or any other value judgements. We offer simple observations simply reported. [2]
<br/><br/>

#### SAMM is a prescriptive model

SAMM is a prescriptive model, an open framework which is simple to use, fully defined, and measurable. The solution details are easy enough to follow even for non-security personnel. It helps organizations analyze their current software security practices, build a security program in defined iterations, show progressive improvements in secure practices, and define and measure security-related activities.

SAMM was defined with flexibility in mind so that small, medium, and large organizations using any style of development can customize and adopt it. It provides a means of knowing where your organization is on its journey towards software assurance and understanding what is recommended to move to the next level of maturity.

SAMM does not insist that all organizations achieve the maximum maturity level in every category. Each organization can determine the target maturity level for each Security Practice that is the best fit and adapt the available templates for their specific needs. [3] 

The value of OWASP SAMM lies in providing a means to know where your organization is on its journey towards software assurance and understand what is recommended to move to a next level of maturity. OWASP SAMM does not insist that all organizations achieve maturity level 3 in every category. Indeed, you determine the target maturity level for each Security Practice that is the best fit for your organization and its needs. OWASP SAMM provides a number of templates for typical organizations to this end, but we recommended that you adapt these to the needs of your organization. [4]
<br/><br/>

### Maturity levels

“The **BSIMM** is not a traditional maturity model where a set of activities are repeated at multiple levels of depth and breadth—do something at level 1, do it more at level 2, do it better at level 3, and so on. Instead, the BSIMM comprises a set of unique activities, with activity levels used only to distinguish the relative frequency with which the activities are observed in organizations. Frequently observed activities are designated as level 1, less frequently observed activities are designated level 2, and infrequently observed activities are designated level 3.” [5]

For **SAMM**, each of the security practices has three defined maturity levels and an implicit starting point at zero. The details for each level differ between the practices, but they generally represent:  
0 – Implicit starting point representing the activities in the practice being unfulfilled  
1 – Initial understanding and ad-hoc provision of security practice  
2 – Increase efficiency and/or effectiveness of the security practice  
3 – Comprehensive mastery of the security practice at scale
<br/><br/>

### Side-by-side comparison

{{< table "table" >}}
| Comparing |   BSIMM  |    SAMM
|:---|:---|:---
|**Primary categories** | 4 high level domains<ul><li>Governance</li><li>Intelligence</li><li>SSDL Touchpoints</li><li>Deployment</li></ul> | 5 business functions<ul><li>Governance</li><li>Design</li><li>Implementation</li><li>Verification</li><li>Operations</li></ul>|
|**Secondary categories**| <p>3 practices per domain</p>Governance<ul><li>Strategy & Metrics</li><li>Compliance & Policy</li><li>Training</li></ul>Intelligence<ul><li>Attack Models</li><li>Security Features & Design</li><li>Standards & Requirements</li></ul>SSDL Touchpoints<br/><ul><li>Architecture Analysis</li><li>Code Review</li><li>Security Testing</li></ul>Deployment<br/><ul><li>Penetration Testing</li><li>Software Environment</li><li>Config Mgmnt / Vuln Mgmnt</li></ul> | <p>3 security practices per business function</p>Governance<ul><li>Strategy & Metrics</li><li>Policy & Compliance</li><li>Education & Guidance</li></ul>Design<ul><li>Threat Assessment</li><li>Security Requirements</li><li>Secure Architecture</li></ul>Implementation<ul><li>Secure Build</li><li>Secure Deployment</li><li>Defect Management</li></ul>Verification<ul><li>Architecture Analysis</li><li>Requirements-driven Testing</li><li>Security Testing</li></ul>Operations<ul><li>Incident Management</li><li>Environment Management</li><li>Operational Management</li></ul>
|**Activities** | 7-12 observed and related activities per practice area | 2 streams of activities per security practice that compliment and build on each other
|**Result comparison**|BSIMM 11 has 130 contributing organizations that were interviewed and contributed to their comparison dataset | working on the SAMM Benchmark project to collect data from implementing and assessing organizations for comparison
|**Frequency of updates**|annual|every 2-3 years
|**Assessment** |BSIMM is proprietary to Synopsys. For an assessment you should reach out to them for cost and logistics.|SAMM is an open model and can be self-assessed or conducted by a number of different consulting organizations and individuals.
{{% /table %}}
<br/>

### Which one should I use?

The comparison should be factual. It’s pulled from the published information for each model. If you ask me which model you should use, I would give you this guidance based on my knowledge and experience:

- If you absolutely must have a comparison to other organizations then your two options are either conduct a BSIMM engagement to receive a report that will show how your organization will compare with the other participating organizations in the BSIMM framework or conduct a SAMM assessment and perform a high level comparison of the scores. It will be relatively comparable at a high level as the security practices are still fairly similar.  Until the SAMM Benchmark project is further along, this is the only real option.

- If you would like to conduct a self-assessment, SAMM would be the obvious choice as the model is open and available for self-assessments. SAMM also provides a number of resources including quick start guides and the toolbox to aid in capturing and measuring assessments.

- If you would like a third-party to conduct an assessment, you could go with Synopsys to conduct a BSIMM assessment or one of a number of different consulting companies that would conduct a SAMM assessment.

<br/>

If you have any questions, please feel free to reach out.

Brian Glas  
Assistant Professor of Computer Science  
Union University  
Contributor to OWASP SAMM  

---

All the information was pulled from published information for BSIMM version 11 and OWASP SAMM version 2.

[1] BUILDING SECURITY IN MATURITY MODEL (BSIMM) – VERSION 11 (Pg 3)  
[2] BUILDING SECURITY IN MATURITY MODEL (BSIMM) – VERSION 11 (Pg 9)  
[3] https://owaspsamm.org/about/  
[4] https://owaspsamm.org/guidance/quick-start-guide/  
[5] BUILDING SECURITY IN MATURITY MODEL (BSIMM) – VERSION 11 (Pg 3)  

+++
title = "Benchmarking"
description = "Benchmarking"
keywords = ["benchmarking","what is","questions"]
+++

## SAMM Benchmarking

### Goals
OWASP SAMM (Software Assurance Maturity Model) Benchmarking is a sub-project within OWASP SAMM to facilitate information and data collaboration between organizations with the goal to help answer the critical questions "How am I doing?" and "What might be working for other similar organizations".

The goal of this project is to collect the most comprehensive dataset related to organizational maturity of application or software security programs. Allowing OWASP SAMM to enable comparative analysis for the SAMM practioners and other future research as well. This data should come from both self-assessing organizations and consultancies that perform third party assessments.

We will accept data from SAMM v1.5 and SAMM v2.x and beyond. There will be support for partial comparisons between SAMM v1.5 and SAMM v2.x, but as the model will undergo breaking changes for v2.0 it will not be a full comparison between the versions. We plan to support multiple submissions from the same organization over time so that progress can be shown on the dashboard.

### Analysis Infrastructure
The plan is to leverage the OWASP Azure Cloud Infrastructure to collect, analyze, and store the data contributed. There will be a minimal number of administrators that have access to manage the raw data. Dashboards and comparative analysis will be performed with data that is aggregated and/or separated from the submitting organization (additional details in the Process section).


### Contributions
We plan to support both known and pseudo-anonymous contributions. The preference is for contributions to be known; this immensely helps with the validation/quality/confidence of the data submitted. If the submitter prefers to have their data stored anonymously and even go as far as submitting the data anonymously, then it will have to be classified as “unverified” vs. “verified”.


### Verified Data Contribution
- Scenario 1: The submitter is known and has agreed to be identified as a contributing party.
- Scenario 2: The submitter is known but would rather not be publicly identified.
- Scenario 3: The submitter is known but does not want it recorded in the dataset.

## Unverified Data Contribution
- Scenario 4: The submitter is anonymous.

*The analysis of the data will be conducted with a careful distinction when the unverified data is part of the dataset that was analyzed.*


### Contribution Process
There are a few ways that data can be contributed:

1.	Email a CSV/Excel/Doc file with the dataset(s) to <brian.glas@owasp.org>
2.	Upload a CSV/Excel/Txt file to a “contribution page” (future update)
3.  Complete the web based form (future update)
4.	Upload the data from the SAMM Toolbox (future update)

You can start contributing today via Process #1. We plan to have the other methods of contribution in place in the coming months. Once we reach a critical mass of contributions, we can start providing comparative analysis. If the submission is verified, then it can be revisited and updated over time. If the submission is unverified then it is marked as such and considered a one time submission and can not be updated or edited.


### Data Structure
The following data elements are required - marked with (required) - or optional:

* Contributor Name (org or anon) - (required)
* Contributor Contact Email
* Date assessment conducted (MM/YYYY) - (required)
* Type of Assessent (Self or 3rd Party) - (required)
* Answers to the SAMM Assessment Questions - (required)
* Geographic Region (Global, North America, EU, Asia, other)
* Primary Industry (Multiple, Financial, Industrial, Software, ??)
* Approximate number of developers (1-100, 101-1000, 1001-10000, 10000+)
* Approximate number of primary appsec (1-5, 6-10, 11-20, 20+)
* Approximate number of secondary appsec (0-20, 21-50, 51-100, 100+)
* Primary SDL Methodology (Waterfall, Agile, DevOps, Other)

*The more information provided, the better the comparative analysis will be.*


### Updates
We will be updating this page and the process as the project progresses.
If you have any questions, please send an email to <brian.glas@owasp.org>.

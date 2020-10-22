+++
title = "Release notes OWASP SAMM version 2"
description = "Release notes OWASP SAMM version 2"
keywords = ["about","what is","questions"]
+++

## Key changes in OWASP SAMM v2

The new SAMM version 2 consists of the following components:

* the [SAMM Model](/model/) overview and introduction, explaining the maturity model in detail
* a [Quick-start Guide](/guidance/quick-start-guide/) with different steps to improve your secure software practice
* an updated [SAMM Toolbox](/assessment/) to perform SAMM assessments and create SAMM roadmaps
* a new [SAMM Benchmark initiative](/benchmarking/) to compare your maturity and progress with other similar organizations and teams


The original model [OpenSAMM 1.0](https://www.opensamm.org/) was written by Pravir Chandra and dates back to 2009. Over the last 10 years, it has proven a widely distributed and effective model for improving secure software practices in different types of organizations. With SAMM v2, further improvements have been made to deal with some of its perceived limitations.

The new SAMM model is development paradigm agnostic. It supports waterfall, iterative, agile, and DevOps development. The model is flexible enough to allow organizations to take a path based on their risk tolerance and the way they build and use software. The model is built upon the core business functions of software development with security assurance practices.

The 3 maturity levels remain as they were. Level 1 is initial implementation; level 2, structured realization; and level 3, optimized operation.

The version 2.0 model now supports frequent updates through small incremental changes on specific parts of the model with regular updates to explanations, tooling, and guidance by the community.

This is the updated SAMM version 2 model:
{{< responsive-image  "../img/v_2_0/Samm_v2.png" "SAMMv2 Overview">}}

List of major changes:

* The team introduced a **fifth business function**, Implementation, to represent a number of core activities in the build and deploy domains of an organization. It also includes a new security practice that deals with **[Defect Management](/model/implementation/defect-management/)**.
* The 5 core business functions from the model are: Governance, Design (which used to be Construction), Implementation, a redesigned Verification function, and Operations.
* Activities are now presented in **logical flows** throughout each of the now 15 security practices, divided into two streams, which aligns and links the activities in the practice over the different maturity levels.
* Each stream has an objective that can be reached in increasing levels of maturity. This way, there are **no “orphan” activities** that seem only relevant on a single maturity level (for instance, code signing in the previous model).
* The model now supports **maturity measurements both from a coverage and a quality perspective**. There are new quality criteria for all the SAMM activities, and an updated scoring model to help SAMM assessors and organizations with their software assurance.
* A **single source using [GitHub](https://github.com/OWASP/samm)** allows us to automatically generate PDF documents, the website, the toolbox and applications.
* All the model content has been converted to **[YAML files](https://github.com/OWASP/samm/tree/master/Supporting%20Resources/v2.0/Datamodel/Datafiles)**, allowing tools or other SAMM consumers to automatically use the model.
* The main publication channel is now the **[OWASP SAMM website](https://owaspsamm.org/)**, not a monolithic document. This allows for iterative improvements, faster publication, and online interactions with the model.
* We created a **[mapping overview from version 1.5 to 2.0](/mapping-versions)** to visualize how the framework has evolved.

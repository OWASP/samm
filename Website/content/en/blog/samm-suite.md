+++
title = "Towards a well-governed SAMM Suite"
date = "2021-03-15T00:00:00+02:00"
tags = ["governance", "samm", "suite", "next", "what's new"]
categories = ["roadmap"]
banner = "img/banners/samm_suite.png"
author = "The SAMM Project Team"
+++

## Improving the velocity of OWASP SAMM

Some years back, SAMM was a typical old school documentation project. Creation of all the documents was a purely manual and error-prone process. We fought a very complicated manual build procedure of the project PDF which only a few people knew how to deal with. Already fixed errors kept reappearing and it was hard to know who actually had the latest version in their mailbox. 

We iteratively started using GitHub more, beginning with version 1.5. However, by then we were still relying on the mentioned legacy document build process. This meant that GitHub was mainly used as a storage of various documents only. 

This finally changed with version 2.0. By then we formalized the data model in a schema and started to manage the core model as a set of YAML files in SAMM’s GitHub repository. This step massively improved efficiency of the core team and helped us deliver the new major version. We also started to build some automation around the model for creating the website and the PDF. 

We knew there was still a lot to improve. We needed to define a better structure for the project. That meant, for instance, creating meaningful groupings for our content, and determining what was the current content and what should be part of our archive. That's why we spent significant time discussing future governance of the project during the summit last November. 

## Separating repositories for various subprojects

We have realized that we need to become more flexible with the particular deliverables of the project. While we want to have tighter processes and access rights around the core model, we also want to enable various degrees of flexibility of the derived projects, such as PDF generation and website generation. Not all of them should even be managed by the core team! 

We have agreed to create a set of separate repositories for different components of the project, all of them with their own governance, degree of automation, contributors, and versioning strategy. The deliverables of the particular build processes will not be stored in the GitHub repository anymore, but attached to the particular releases. We also decided to move unnecessary multimedia files away from the repository to the project’s Google drive. 

For the new set of repositories, we have created a new [GitHub organization](https://github.com/owaspsamm). This will allow us to create and change the particular repositories and their automation procedures according to the current need, while still being able to manage dependencies among them. And for a random visitor, it will be easier to recognize all the building blocks of the project. 

## Branching and versioning

The first discussion point around the core model was the branching strategy we should use in the future. Our preference is to use a well-known strategy rather than a custom one. By this we expect higher transparency for the public, easier onboarding of future core team members, as well as availability of tooling to further reduce the overhead connected with accepting changes. 

Having reviewed quite a few options, the [Git flow](https://github.com/nvie/gitflow) seems to be the best fit for us. It belongs to the most popular and well-known strategies, it matches our requirements for a clear versioning and it enables a solid review process before releasing a new version. 

Next point was to clarify the versioning strategy. We have always followed the [semantic versioning](https://semver.org/) to some degree. We have decided to build upon that and use that versioning strategy for the core model. This means that we also plan to have patch releases we haven’t used so far, also increasing the transparency of what's going on in the model for the public. 

It's important to explicitly note that other projects using the core model will have their own independent versioning. Therefore, it will be possible to build a PDF file for the core model v2.1.0 using a "PDF builder" v3.5.2. We expect that this will allow for a higher speed of improvement of these derived projects. 

As of today, one open point remains: managing translations of the project. We use CrowdIn as a platform to bring volunteers together and iteratively create various language versions of the project. We’re currently exploring various ways to make the whole concept and integrations work. We’ll publish a separate article once we have figured it out.

## The SAMM Suite

While a higher number of loosely coupled projects will hopefully help our velocity of releasing new versions, we still want to have an overarching strategy for the whole SAMM project. We started calling it "the SAMM Suite" during the summit. Every new release of the SAMM Suite will technically be a set of releases of the particular projects, each of them contributing to the mentioned overarching strategy. For example, if we decide to extend the schema of the model with new fields (e.g. mapping to other security standards or projects), this will then be reflected in the PDF or website generator.

## Next Steps

We are going to spend the next months executing this strategy. This means creating the new repositories and defining their structure, creating automated procedures using GitHub actions as well as cleaning up the current repository and archiving it. 

If you think that you have any feedback or input which could help us, please don't hesitate to get in touch! And as always, everyone from the security community is welcome to participate in our future efforts. If that sounds good to you, just drop in to one of our monthly calls where the core team members can help you get productive.


---

SAMM is a community-driven project and we always welcome feedback and suggestions.

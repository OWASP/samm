---
title: Quick start guide for version 2.0
layout: quick-start-guide
steps:
    step1:
        step: 1
        name: Prepare
        purpose: Ensure a proper start of the project
        activities:
            activity1:
                name: Define the scope
                description: |
                    Set the target of the effort&#58; the entire enterprise, a particular application or project, a particular team.
            activity2:
                name: Identify stakeholders
                description: |
                    Ensure that important stakeholders are identified and well aligned to support the project.
            activity3:
                name: Spread the word
                description: |
                    Ensure that important stakeholders are identified and well aligned to support the project.
        resources:
            resource1:
                heading: Consider involving at least
                description: |
                    - Executive Sponsor
                    - Security Team
                    - Developers
                    - Architects
                    - Business Owners
                    - QA Testers
                    - Managers
            resource2:
                heading: SAMM project page - OWASP website
                type: link
                description: https://owasp.org/www-project-samm/
            resource3:
                heading: SAMM downloads
                type: link
                description: https://owaspsamm.org/about/
        best_practices:
            - Pre-screen software development maturity to have realistic expectations
            - The smaller the scope, the easier the exercise
    step2:
        step: 2
        name: Assess
        purpose: Identify and understand the maturity of your chosen scope in each of the 15 software security practices
        activities:
            activity1:
                name: Evaluate current practices
                description: |
                    Organize interviews with relevant stakeholders to understand the current state of practices within your organization. You could evaluate this yourself if you understand the organization sufficiently enough. SAMM provides lightweight and detailed assessments, where the latter is an evidence-based evaluation, use the detailed one only if you want to have absolute certainty about the scores.
            activity2:
                name: Determine maturity level
                description: |
                    Based on the outcome of the previous activity, determine for each security practice the maturity level according to the SAMM maturity scoring system. Activities are scored by a multiple choice system and are averaged out for the security practice area, then added together to determine the overall score.
        resources:
            resource1:
                heading: SAMM toolbox
                description: |
                    https://owaspsamm.org/assessment/  
                    This resource will provide you with  
                    - Assessment questions
                    - Maturity level calculation
            resource2:
                heading: OWASP Maturity Models
                type: link
                description: https://github.com/owasp/Maturity-Models
        best_practices:
            - Ensure consistent assessment for different stakeholders and teams by using the same questions and interviewer
            - Consider using different formats to gather data e.g., workshops vs. interviews
            - Ensure interviewees understand the particularities of activities
            - Understand which activities are not applicable to the organization, and take this into account in the overall scoring
            - Anticipate/document whether you plan to award partial credit, or just document various judgment calls
            - Repeat questions to several people to improve the assessment quality
            - Consider making interviews anonymous to ensure honesty
            - Don’t take questions too literally
    step3:
        step: 3
        name: Set the target
        purpose: Develop a target score that you can use as a measuring stick to guide you to act on the most important activities for your situation
        activities:
            activity1:
                name: Define the target
                description: |
                    Set or update the target by identifying which activities your organization should implement ideally. Typically, this will include more lower-level than higher-level activities. Predefined roadmap templates can be used as a source for inspiration. Ensure that the total set of selected activities makes sense, and take into account dependencies between activities.                    
            activity2:
                name: Estimate overall impact
                description: |
                    Estimate the impact of the chosen target on the organization. Try to express in budgetary arguments.        
        resources:
            resource1:
                heading: Templates
                description: |
                    See the How-to Guide for predefined templates
            resource2:
                heading: SAMM roadmap chart
                description: Worksheet (part of the SAMM Benchmarking as a comparative source)
            resource3:
                heading: 
                description: Leverage the Roadmap worksheet in the SAMM Toolbox to help calculate maturity score improvements based on future answers
        best_practices:
            - Take into account the organization’s risk profile
            - Respect dependencies between activities
            - As a rough measure, the overall impact of a software assurance effort is estimated at 5 % to 10% of the total development cost
    step4:
        step: 4
        name: Define the plan
        purpose: Develop or update your plan to take your organization to the next level
        activities:
            activity1:
                name: Determine change schedule
                description: |
                    Choose a realistic change strategy in terms of number and duration of phases. A typical roadmap consists of 4 to 6 phases for 3 to 12 months.
            activity2:
                name: Develop/update the roadmap plan
                description: |
                    Distribute the implementation of additional activities over the different roadmap phases, taking into account the effort required to implement them. Try to balance the implementation effort over the different periods, and take dependencies between activities into account.
        best_practices:
            - Identify activities that can be completed quickly and successfully early in the project
            - Start with awareness / training
            - Adapt to coming release cycles / key projects
    step5:
        step: 5
        name: Implement
        purpose: Work the plan
        activities:
            activity1:
                name: Implement activities
                description: |
                    Implement all activities that are part of this period. Consider their impact on processes, people, knowledge, and tools. The SAMM model contains prescriptive advice on how to do this. OWASP projects may help to facilitate this.
        best_practices:
            - Treat legacy software separately. Do not mandate migration unless really important.
            - Avoid operational bottlenecks, particularly for the security team
    step6:
        step: 6
        name: Roll out
        purpose: Ensure that improvements are available and effectively used within the organization
        activities:
            activity1:
                name: Evangelize improvements
                description: |
                    Make the steps and improvements visible for everyone involved by organizing trainings and communicating with management stakeholders.
            activity2:
                name: Measure effectiveness
                description: |
                    Measure the adoption and effectiveness of implemented improvements by analyzing usage and impact.
        resources:
        best_practices:
            - Categorize applications according to their impact on the organization. Focus on high-impact applications.
            - Use team champions to spread new activities throughout the organization.
resourcestext: The following SAMM resources are referenced in the SAMM Quick Start Guide
resources:
    resource1: 
        heading: SAMM project page - OWASP website
        description: https://owasp.org/www-project-samm/
    resource2: 
        heading: SAMM downloads
        description: https://owaspsamm.org/about/
    resource3:
        heading: SAMM toolbox
        description: https://owaspsamm.org/assessment/
    resource4:
        heading: SAMM model
        description: https://owaspsamm.org/model/
notes: |
    The best way to grasp SAMM is to start using it. This document has presented a number of concrete steps and supportive material to get you started. Now it’s your turn. We warmly invite you to spend a day or two on following the first steps, then you can understand and appreciate the added value of the model. Enjoy! Suggestions for improvements are welcome. Consider joining the mailing list and becoming part of the SAMM community.


---

## About OWASP SAMM

**OWASP SAMM (Software Assurance Maturity Model)** is the OWASP framework to help organizations assess, formulate, and implement a strategy for software security, that can be integrated into their existing **Software Development Lifecycle (SDLC)**. OWASP SAMM is fit for most contexts, whether your organization is mainly developing, outsourcing, or acquiring software, or whether you are using a waterfall, an agile or devops method, the same model can be applied. This quick start guide walks you through the core steps to execute your OWASP SAMM-based secure software practice.


## Background

Before diving into actionable steps for a quick start, let's briefly describe the model itself. OWASP SAMM v2.0 is based around a set of 15 security practices grouped into five business functions. Every security practice contains two streams that represent a set of activities, structured into three maturity levels (1-3). The activities on a lower maturity level are typically easier to execute, and require less formalization than the ones on a higher maturity level. 

The structure and setup of the **OWASP SAMM maturity model** are made to support:

1. the **assessment** of the current software assurance posture,
2. the definition of the **strategy** (i.e. the target) that the organization should implement,
3. the formulation of an implementation **roadmap** of how to get there, and
4. prescriptive advice on how to **implement** particular activities.

The value of OWASP SAMM lies in providing a means to know where your organization is on its journey towards software assurance and understand what is recommended to move to a next level of maturity. OWASP SAMM does not insist that all organizations achieve maturity level 3 in every category. Indeed, you determine the target maturity level for each Security Practice that is the best fit for your organization and its needs. OWASP SAMM provides a number of templates for typical organizations to this end, but we recommended that you adapt these to the needs of your organization.

## How to apply

The typical approach of using OWASP SAMM in an organization is to start with preparation, going through the assessment, setting the target, planning, and implementation to roll-out. OWASP SAMM is particularly well suited to support continuous improvement, in which case the cycle is executed continuously, typically in periods of 3 to 12 months. Note that it is not necessary to always execute all these steps. You can use OWASP SAMM to only perform the assessment, or to define the long-term goals, for instance.

As part of a quick start effort, a single person can execute the first four phases (preparation, assessment, setting the target, and defining the plan) in a limited amount of time (one to two days). Making sure that this is supported in the organization, as well as the implementation and roll out phases, typically requires much more time.

So, how do you go about executing the different steps? Click each step for more information on the goal, the different activities, and the most important supporting resources.

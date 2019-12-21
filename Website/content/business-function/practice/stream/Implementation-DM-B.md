---
title: Metrics and Feedback
type: stream
url: model/implementation/defect-management/stream-b/
business_function: Implementation
business_function_url: implementation
practice: Defect Management
stream: B
description: Implementation / Defect Management
keywords: ["Business function", "Practice", "Implementation", "Defect Management"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            You take advantage of basic metrics from your defect management process to identify quick win activities.
        activity: |
            Once per defined period of time (typically at least once per year), go over your both resolved and still open recorded security defects in every team and extract basic metrics from the available data. These might include:

            * The total number of defects versus total number of verification activities. This could give you an idea whether you're looking for defects with an adequate intensity and quality.
            * The software components the defects reside in. This is indicative of where attention might be most required, and where security flaws might be more likely to appear in the future again.
            * The type or category of the defect, which suggests areas where the development team need further training.
            * The severity of the defect, which can help the team understand the software’s risk exposure.

            Identify and carry out sensible quick win activities which you can derive from the newly acquired knowledge. These might include things like a knowledge sharing session about one particular vulnerability type or carrying out / automating a security scan.

        question: Do you use basic metrics about recorded security defects to carry out quick win improvement activities?
        quality_criteria:
            - You analyzed your recorded metrics at least once in the last year
            - At least basic information about this initiative is recorded and available
            - You have identified and carried out at least one quick win activity based on the data

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level2:
        level: 2
        benefit: |
            You scale the learning effect throughout the whole organization based on unified defect management metrics.
        activity: |
            Define, collect and calculate unified metrics across the whole organization. These might include:

            * Total amount of verification activites and identified defects.
            * Types and severities of identified defects.
            * Time to detect and time to resolve defects.
            * Windows of exposure of defects being present on live systems.
            * Number of regressions / reopened vulnerabilities.
            * Coverage of verification activities for particular software components.
            * Amount of accepted risk.
            * Ratio of security incidents caused due to unknown or undocumented security defects.

            Generate a regular (e.g. monthly) report for a suitable audience. This would typically reach audience like managers and security officer and engineers. Use the information in the report as an input for your security strategy, e.g. improving trainings or security verification activities.

            Share the most prominent or interesting technical details about security defects including the fixing strategy to other teams once these defects are fixed, e.g. in a regular knowledge sharing meeting. This will help scale the learning effect from defects to the whole organization and limit their occurence in the future.

        question: Do you improve your security assurance program upon standardized metrics?
        quality_criteria:
            - You document metrics for defect classification and categorization and keep them up to date
            - Executive management regularly receives information about defects and has acted upon it in the last year
            - You regularly share technical details about security defects among teams

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

    level3:
        level: 3
        benefit: |
            Collection and evaluation of security metrics is effective and helps drive your security strategy.
        activity: |
            Regularly (at least once per year) revisit the defect management metrics you're collecting and compare the effort needed to collect and track these to the expected outcomes. Make knowledgeable decision about removing metrics which don't deliver the overall expected value. Wherever possible, include and automate verification activities for the quality of the collected data and ensure sustainable improvement if any differences are detected.

            Aggregate the data with your threat intelligence and incident management metrics and use the results as input for other initiatives over the whole organization, such as:

            * Planning security trainings for various personnel
            * Improvement of security verification activities for both internally and externally develeoped collected
            * Supply chain management, e.g. carrying out security audits of partner organizations
            * Monitoring of attacks against your infrastructure and applications
            * Investing in security infrastructure or compensating controls
            * Staffing your security team and setting up the security budget

        question: Do you regularly evaluate the effectiveness of your security metrics so that its input is valuable for your security strategy?
        quality_criteria:
            - You have analyzed the effectivenss of the security metrics at least once in the last year
            - Where possible, you verify the correctness of the data automatically
            - The metrics is aggregated with other sources like threat intelligence or incident management
            - You derived at least one strategic activity from the metrics in the last year

        answers:
            - "No"
            - Yes, for some applications
            - Yes, for at least half of the applications
            - Yes, for most or all of the applications

---

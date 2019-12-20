---
title: Measure and Improve
type: stream
url: model/governance/strategy-and-metrics/stream-b/
business_function: Governance
business_function_url: governance
practice: Strategy & Metrics
stream: B
description: Governance / Strategy & Metrics
keywords: ["Business function", "Practice", "Governance", "Strategy & Metrics"]

maturity_levels:
    level1:
        level: 1
        benefit: |
            Have a set of base metrics to provide insight into software security.
        activity: |
            Define and document metrics to evaluate the effectiveness and efficiency of the application security program. This way improvements are measurable and you can use them to secure future support and funding for the program. Considering the dynamic nature of most development environments, metrics should be comprised of measurements in the following categories

            * `Effort` metrics measure the effort spent on security. For example training hours, time spent performing code reviews, and number of applications scanned for vulnerabilities.
            * `Result` metrics measure the results of security efforts. Examples include number of unpatched security defects and number of security incidents involving application vulnerabilities.
            * `Environment` metrics measure the environment where security efforts take place. Examples include number of applications or lines of code as a measure of difficulty or complexity.

            Each measure by itself is useful for a specific purpose, but a combination of two or three metrics together helps explain spikes in metrics trends. For example, a spike in a total number of vulnerabilities may be caused by the organization on-boarding several new applications that have not been previously exposed to the implemented application security mechanisms. Alternatively, an increase in the environment metrics without a corresponding increase in the effort or result could be an indicator of a mature and efficient security program.

            While identifying metrics, it’s always recommended to stick to the metrics that meet several criteria

            * Consistently Measured
            * Inexpensive to gather
            * Expressed as a cardinal number or a percentage
            * Expressed as a unit of measure

            Document metrics and include descriptions of best and most efficient methods for gathering data, as well as recommended methods for combining individual measures into meaningful metrics. For example, a number of applications and a total number of defects across all applications may not be useful by themselves but, when combined as a number of outstanding high-severity defects per application, they provide a more actionable metric.

        question: Do you use a set of metrics to measure the effectiveness and efficiency of the application security program across applications?
        quality_criteria:
            - You document each metric, including a description of the sources, measurement coverage, and guidance on how to use it to explain application security trends
            - Metrics include measures of efforts, results, and the environment measurement categories
            - Most of the metrics are frequently measured, easy or inexpensive to gather, and expressed as a cardinal number or a percentage
            - Application security and development teams publish metrics

        answers:
            - "No"
            - Yes, for one metrics category
            - Yes, for two metrics categories
            - Yes, for all three metrics categories

    level2:
        level: 2
        benefit: |
            A set of concrete objectives has been established to guide your improvement efforts.
        activity: |
            Once the organization has defined its application security metrics, collect enough information to establish realistic goals. Test identified metrics to ensure you can gather data consistently and efficiently over a short period. After the initial testing period, the organization should have enough information to commit to goals and objectives expressed through Key Performance Indicators (KPIs).

            While several measurements are useful for monitoring the information security program and its effectiveness, KPIs are comprised of the most meaningful and effective metrics. Aim to remove volatility common in application development environments from KPIs to reduce chances of unfavorable numbers resulting from temporary or misleading individual measurements. Base KPIs on metrics considered valuable not only to Information Security professionals but also to individuals responsible for the overall success of the application, and organization’s leadership. View KPIs as definitive indicators of the success of the whole program and consider them actionable.

            Fully document KPIs and distribute them to the teams contributing to the success of the program as well as organization’s leadership. Ideally, include a brief explanation of the information sources for each KPI and the meaning if the numbers are high or low. Include short and long-term goals, and ranges for unacceptable measurements requiring immediate intervention. Share action plans with application security and application development teams to ensure full transparency in understanding of the organization’s objectives and goals.

        question: Did you define Key Perfomance Indicators (KPI) from available application security metrics?
        quality_criteria:
            - You defined KPIs after gathering enough information to establish realistic objectives
            - You developed KPIs with the buy-in from the leadership and teams responsible for application security
            - KPIs are available to the application teams and include acceptability thresholds and guidance in case teams need to take action
            - Success of the application security program is clearly visible based on defined KPIs

        answers:
            - "No"
            - Yes, some of them
            - Yes, at least half of them
            - Yes, most or all of them

    level3:
        level: 3
        benefit: |
            Your application security program is fundamentally driven by objective measures and concrete goals.
        activity: |
            Define guidelines for influencing the Application Security program based on the KPIs and other application security metrics. These guidelines  combine the maturity of the application development process and procedures  with different metrics to make the program more efficient. The following examples show a relationship between measurements and ways of evolving and improving application security

            * Focus on maturity of the development life-cycle makes the relative cost per defect lower by applying security proactively.
            * Monitoring the balance between effort, result, and environment metrics improves the program’s efficiency and justifies additional automation and other methods for improving the overall application security baselines.
            * Individual Security Practices could provide indicators of success or failure of individual application security initiatives.
            * Effort metrics helps ensure application security work is directed at the more relevant and important technologies and disciplines.

            When defining the overall metrics strategy, keep the end-goal in mind and define what decisions can be made as a result of changes in KPIs and metrics as soon as possible, to help guide development of metrics.

        question: Do you update the Application Security strategy and roadmap based on application security metrics and KPIs?
        quality_criteria:
            - You review KPIs at least yearly for their efficiency and effectiveness
            - KPIs and application security metrics trigger most of the changes to the application security strategy

        answers:
            - "No"
            - Yes, some of the time
            - Yes, at least half of the time
            - Yes, most or all of the time

---

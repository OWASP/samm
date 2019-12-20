---
benefit: Have a set of base metrics to provide insight into software security.
costs: Difficult to say, but let's give it a try.
dependencies:
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
- 41069df2385749b190f46e8a776e6339
id: 0082a76b1a3744d9ab0443bd2168e13d
level: 4e54705272fa4f1f9977b1f9011f585d
metrics:
- metric1
- metric2
notes: 'My first thought goes here.

  My second thought goes here.'
personnel:
- Architect
- Developer
- Tester
results:
- result1
- result2
shortDescription: Define metrics with insight into the effectiveness and efficiency
  of the Application Security Program.
stream: 2f1cac3c2e724823b3b48a7e797520b4
title: Define Security Metrics

---
Define and document metrics to evaluate the effectiveness and efficiency of the application security program. This way improvements are measurable and you can use them to secure future support and funding for the program. Considering the dynamic nature of most development environments, metrics should be comprised of measurements in the following categories
* `Effort` metrics measure the effort spent on security. For example training hours, time spent performing code reviews, and number of applications scanned for vulnerabilities. * `Result` metrics measure the results of security efforts. Examples include number of unpatched security defects and number of security incidents involving application vulnerabilities. * `Environment` metrics measure the environment where security efforts take place. Examples include number of applications or lines of code as a measure of difficulty or complexity.
Each measure by itself is useful for a specific purpose, but a combination of two or three metrics together helps explain spikes in metrics trends. For example, a spike in a total number of vulnerabilities may be caused by the organization on-boarding several new applications that have not been previously exposed to the implemented application security mechanisms. Alternatively, an increase in the environment metrics without a corresponding increase in the effort or result could be an indicator of a mature and efficient security program.
While identifying metrics, it’s always recommended to stick to the metrics that meet several criteria
* Consistently Measured * Inexpensive to gather * Expressed as a cardinal number or a percentage * Expressed as a unit of measure
Document metrics and include descriptions of best and most efficient methods for gathering data, as well as recommended methods for combining individual measures into meaningful metrics. For example, a number of applications and a total number of defects across all applications may not be useful by themselves but, when combined as a number of outstanding high-severity defects per application, they provide a more actionable metric.
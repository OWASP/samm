<div class="new-page"/>
### Security Testing (ST1)

The goal of this practice level is to perform security testing (both manual and tool based) to discover security defects.

#### Activities

##### [Stream A] Perform automated security testing
<b>Benefit</b>: <i>Detection of common easy-to-find vulnerabilities</i>

Use automated static and dynamic security test tools for software, resulting in more efficient security testing and higher quality results. Progressively increase the frequency of security tests and extend code coverage.

Application security testing can be performed statically, by inspecting an application's source code without running it, or dynamically by simply observing the application's behavior in response to various input conditions. The former approach is often referred to as Static Application Security Testing (SAST), the latter as Dynamic Application Security Testing (DAST). A hybrid approach, known as Interactive Application Security Testing (IAST), combines the strengths of both approaches (at the cost of additional overhead) by dynamically testing automatically instrumented applications, allowing accurate monitoring of the application's internal state in response to external input.

Many security vulnerabilties are very hard to detect without carefully inspecting the source code. While this is ideally performed by expert or peer review, it is a slow and expensive task. Although "noisier" and frequently less accurate than expert-led reviews, automated SAST tools are cheaper, much faster, and more consitent than humans. A number of commercial and free tools are able to efficiently detect sufficiently important bugs and vulnerabilities in large code bases.

Dynamic testing does not require application source code, making it ideal for cases where source code is not available. It also identifies concrete instances of vulnerabilities. Due to its "black-box" approach , without instrumentation, it is more likely to uncover shallow bugs. Dynamic testing tools need a large source of test data whose manual test generation is prohibitive. Many tools exist which generate suitable test data automatically, leading to more efficient security testing and higher quality results.

Select appropriate tools based on several factors, including depth and accuracy of inspection, robustness and accuracy of security test cases, available integrations with other tools, usage and cost model, etc. When selecting tools, use input from security-savvy technical staff as well as developers and development managers and review results with stakeholders.


###### Assessment Question(s)
Do you scan applications with automated security testing tools?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- You dynamically generate inputs for security tests using automated tools
- You choose the security testing tools to fit the organization's architecture and technology stack, and balance depth and accuracy of inspection with usability of findings to the organization


##### [Stream B] Test high risk application components manually
<b>Benefit</b>: <i>Detection of manually identifable vulnerabilities in critical components</i>

Perform selective manual security testing, possibly using a combination of static and dynamic analysis tools to guide or focus the review, in order to more thoroughly analyze parts of the application, as an attacker. Automated tools are effective at finding various types of vulnerabilities but can never replace expert manual review.

Code-level vulnerabilities in security-critical parts of software can have dramatically increased impact so project teams review high-risk modules for common vulnerabilities. Common examples of high-risk functionality include authentication modules, access control enforcement points, session management schemes, external interfaces, and input validators and data parsers. Teams can combine code-level metrics and focused automated scans to determine where best to focus their efforts. In practice, the activity can take many forms including pair programming and peer review, time-boxed security "pushes" involving the entire development team, or spontaneous independent reviews by members of a specialised security group.

During development cycles where high-risk code is changed and reviewed, development managers triage the findings and prioritize remediation appropriately with input from other project stakeholders.


###### Assessment Question(s)
Do you manually review the security quality of selected high-risk components?

- No
- Yes, for some components
- Yes, for at least half of the components
- Yes, for most or all of the components


Quality Criteria:

- Criteria exist to help the reviewer focus on high-risk components
- Qualified personnel conduct reviews following documented guidelines
- You address findings in accordance with the organization's defect management policy


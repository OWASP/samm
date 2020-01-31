<div class="new-page"/>
### Security Testing (ST3)

The goal of this practice level is to embed security testing as part of the development and deployment processes.

#### Activities

##### [Stream A] Integrate security testing tools in the delivery pipeline
<b>Benefit</b>: <i>Identification of automatically identifiable vulnerabilities in earliest possible stages</i>

Projects within the organization routinely run automated security tests and review results during development. Configure security testing tools to automatically run as part of the build and deploy process to make this scalable with low overhead. Inspect findings as they occur.

Conducting security tests as early as the requirements or design phases can be beneficial. While traditionally used for functional test cases, this type of test-driven development approach involves identifying and running relevant security test cases early in the development cycle. With the automatic execution of security test cases, projects enter the implementation phase with a number of failing tests for the non-existent functionality. Implementation is complete when all the tests pass. This provides a clear, upfront goal for developers early in the development cycle, lowering risk of release delays due to security concerns or forced acceptance of risk to meet project deadlines.

Make the results of automated and manual security tests visible via dashboards, and routinely present them to management and business stakeholders (e.g. before each release) for review. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. Continuously review and improve the quality of the security tests.

Consider and implement security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organization.


###### Assessment Question(s)
Do you integrate automated security testing into the build and deploy process?

- No
- Yes, some of it
- Yes, at least half of it
- Yes, most or all of it


Quality Criteria:

- Management and business stakeholders track and review test results throughout the development cycle
- You merge test results into a central dashboard and feed them into defect management


##### [Stream B] Establish continuous, scalable security verification
<b>Benefit</b>: <i>Identification of manually identifiable security issues in earliest possible stages</i>

Integrate security testing in parallel to all other development activities, including requirement analysis, software design and construction.

With the multiplicity of security tools running at every phase of development, remediating security issues at a designated stage (such as pre-release testing) is no longer appropriate or desirable. Security issues must be quickly triaged and fixes planned in a tradeoff between risk and cost of remediation. Continuously striving to detect issues earlier in the development lifecycle, via specific, low-friction automated tests integrated into development tools and build processes, lowers the cost of remediation thereby increasing the likelihood of issues being quickly resolved.

Proactively improve the security testing effort integrated into the development process by adequately propagating the results of other security test activities. For example, if a security penetration test identifies issues with session management, any changes to session management should trigger explicit security tests before pushing the changes to production.

Security champions and the central secure software group continuously review results from automated and manual security tests during development, including these results as part of the security awareness trainings for the development teams. Integrate lessons learned in overall playbooks to improve security testing as part of the organization development. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers should work together to establish a concrete timeframe for addressing them.


###### Assessment Question(s)
Do you use the results of security testing to improve the development lifecycle?

- No
- Yes, but we improve it ad-hoc
- Yes, we we improve it at regular times
- Yes, we improve it at least annually


Quality Criteria:

- You use results from other security activities to improve integrated security testing during development
- You review test results and incorporate them into security awareness training and security testing playbooks
- Stakeholders review the test results and handle them in accordance with the organization's risk management


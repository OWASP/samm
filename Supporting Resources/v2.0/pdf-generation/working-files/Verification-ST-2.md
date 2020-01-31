<div class="new-page"/>
### Security Testing (ST2)

The goal of this practice level is to make security testing during development more complete and efficient through automation complemented with regular manual security penetration tests.

#### Activities

##### [Stream A] Develop application-specific security test cases
<b>Benefit</b>: <i>Detection of organization-specific easy-to-find vulnerabilites</i>

Increase the effectiveness of automated security testing tools by tuning and customizing them for your particular technology stacks and applications. Automated security testing tools have 2 important characteristics: Their false positive rate, i.e. the non-existent bugs and vulnerabilities they incorrectly report; their false negative rate, i.e. actual bugs and vulnerabilities which they fail to detect. As you mature in your use of automated testing tools, you strive to minimize their false positive and false negative rates. This maximizes the time development teams spend reviewing and addressing real security issues in their applications, and reduces the friction typically associated with using untuned automated security analysis tools.

Start by disabling tool support for technologies and frameworks you do not use and target specific versions where possible. This will increase execution speed and reduce the number spurious results reported. Rely on security tool champions or shared security teams to pilot the tools in coordination with a select group of motivated development teams. This will identify likely false positive findings to ignore or remove from the tools' output. Identify specific security issues and anti-patterns and favor the best tool for detecting them.

Leverage available tool features to take application-specific and organizational coding styles, as well as technical standards into account. Many automated static analysis tools allow users to write their own rules or customize default analysis rules to the specific software interfaces in the project under test for improved accuracy and depth of coverage. For example, potentially dangerous input (aka tainted) can be marked as safe after it flows through a designated custom sanitization method.

Strategically, it is better to reliably detect a limited subset of security issues via automated tooling, and incrementally extend coverage than attempting to detect all known issues immediately. Once the tools have been sufficiently tuned, they can be made available to a more development teams. It is important to continuously monitor their perceived efficacy among development teams. In more advanced forms, machine learning techniques can be adopted to identify and automatically filter out likely false positives at scale.


###### Assessment Question(s)
Do you customize the automated security tools to your applications and technology stacks?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- You tune and select tool features which match your application or technology stack
- You minimize false positives by silencing or automatically filter irrelevant warnings or low probability findings
- You minimize false negatives by leverage tool extensions or DSLs to customize tools for your application or organizational standards


##### [Stream B] Establish a penetration testing process
<b>Benefit</b>: <i>Understanding of application resilience from black-box perspective</i>

Using the set of security test cases identified for each project, conduct manual penetration testing to evaluate the system’s performance against each case. Generally, this happens during the testing phase prior to release and includes both static and dynamic manual penetration testing. In cases where software cannot be realistically tested outside of production, use of techniques such as blue-green deployments or A/B testing can allow ring-fenced security testing in production.

Penetration testing cases include both application-specific tests to check soundness of business logic, and common vulnerability tests to check the design and implementation. Once specified, security-savvy quality assurance or development staff can execute security test cases. The central software security group monitors first-time execution of security test cases for a project team to assist and coach the team security champions.

Many organizations offer "Bug Bunty" programmes which invite security researchers to find vulnerabilties in applications and report them responsibly in exchange for rewards. The approach allows organizations to access a bigger pool of talent, especially those lacking sufficient internal capacity or requiring the additional assurance.

Prior to release or mass deployment, stakeholders review results of security tests and accept the risks indicated by failing security tests at release time. Establish a concrete timeline to address the gaps over time. Spread the knowledge of manual security testing and the results across the development team to improve security knowledge and awareness inside the organization.


###### Assessment Question(s)
Do you perform penetration testing for your applications at regular intervals?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Penetration testing uses application-specific security test cases to evaluate security
- Penetration testing looks for both technical and logical issues in the application
- Stakeholders review the test results and handle them in accordance with the organization's risk management
- Qualified personnnel performs penetration testing


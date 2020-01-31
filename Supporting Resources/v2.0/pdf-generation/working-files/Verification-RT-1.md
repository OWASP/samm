<div class="new-page"/>
### Requirements-driven Testing (RT1)

The goal of this practice level is to opportunistically find basic vulnerabilities and other security issues.

#### Activities

##### [Stream A] Test the effectiveness of security controls
<b>Benefit</b>: <i>Verified effectiveness of your standard security controls</i>

Conduct security tests to verify that the standard software security controls operate as expected. At a high level, this means testing the correct functioning of the confidentiality, integrity, and availability controls of the data as well as the service. Security tests at least include testing for authentication, access control, input validation, encoding, and escaping data and encryption controls. The test objective is to validate that the security controls are correctly implemented.

The security testing validates the relevant software security controls. Perform control-verification security tests manually or with tools, each time the application changes its use of the controls. Techniques such as feature toggles and A/B testing can be used to progressively expose features to broader audiences as they are sufficiently validated. Software control verification is mandatory for all software that is part of the SAMM program.


###### Assessment Question(s)
Do you test applications for the correct functioning of standard security controls?

- No
- Yes, some of them
- Yes, at least half of them
- Yes, most or all of them


Quality Criteria:

- Security testing at least verifies the implementation of authentication, access control, input validation, encoding and escaping data, and encryption controls
- Security testing executes whenever the application changes its use of the controls


##### [Stream B] Perform fuzz testing
<b>Benefit</b>: <i>Insight into behaviour of your applications when dealing with unexpected input</i>

Perform fuzzing, sending random or malformed data to the test subject in an attempt to make it crash. Fuzz testing or Fuzzing is a Black Box software testing technique, which consists of finding implementation bugs using automated malformed or semi-malformed data injection. Cover at least a minimum fuzzing for vulnerabilities against the main input parameters of the application.

The advantage of fuzz testing is the simplicity of the test design, and its lack of preconceptions about system behavior. The stochastic approach results in bugs that human eyes or structured testing would often miss. It is also one of the few means of assessing the quality of a closed system (such as a SIP phone). The simplicity of fuzzing a target is offset by the difficulty in accurately detecting and triaging crashes. Favour existing fuzzing tools and frameworks to leverage their supporting tooling.


###### Assessment Question(s)
Do you test applications using randomization or fuzzing techniques?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Testing covers most or all of the application's main input parameters
- You record and inspect all application crashes for security impact on a best-effort basis


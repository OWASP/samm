<div class="new-page"/>
### Requirements-driven Testing (RT3)

The goal of this practice level is to maintain the application security level after bug fixes, changes or during maintenance.

#### Activities

##### [Stream A] Automate security requirements testing
<b>Benefit</b>: <i>Timely and reliable detection of violations to security requirements</i>

Write and automate regression tests for all identified (and fixed) bugs to ensure that these become a test harness preventing similar issues being introduced during later releases. Security unit tests should verify dynamically (i.e., at run time) that the components function as expected and should validate that code changes are properly implemented.

A good practice for developers is to build security test cases as a generic security test suite that is part of the existing unit testing framework. A generic security test suite might include security test cases to validate both positive and negative requirements for security controls such as Identity, Authentication & Access Control, Input Validation & Encoding, User and Session Management, Error and Exception Handling, Encryption, and Auditing and Logging. Verify the correct execution of the security tests as early as possible. If feasible for example, consider the passing of security tests as part of merge requirements before allowing new code to enter the main code base. Alternatively, consider their passing a requirement for validating a build.

For security functional tests, use unit level tests for the functionality of security controls at the software component level, such as functions, methods, or classes. For example, a test case could check input and output validation (e.g., variable sanitation) and boundary checks for variables by asserting the expected functionality of the component.


###### Assessment Question(s)
Do you automatically test applications for security regressions?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You consistently write tests for all identified bugs (possibly exceeding a pre-defined severity threshhold)
- You collect security tests in a test suite that is part of the existing unit testing framework


##### [Stream B] Perform security stress testing
<b>Benefit</b>: <i>Transparency of resilience against denial of service attacks</i>

Applications are particularly susceptible to denial of service attacks. Perform denial of service and security stress testing against them in controlled conditiions, preferably on application acceptance environments.

Load testing tools generate synthetic traffic, allowing you to test the application's performance under heavy load. One important test is how many requests per second an application can handle while remaining within its performance requirements. Testing from a single IP address is still useful as it gives an indication of how many requests an attacker must generate to impact the application.

Denial of service attacks typically result in application resource starvation or exhaustion. To determine if any resources can be used to create a denial of service, analyze each application resource to see how it can be exhausted. Prioritise actions unauthenticated user can do. Complement overall denial of service tests with security stress tests to perform actions or create conditions which cause delays, disruptions, or failures of the application under test.


###### Assessment Question(s)
Do you perform denial of service and security stress testing?

- No
- Yes, some of the time
- Yes, at least half of the time
- Yes, most or all of the time


Quality Criteria:

- Stress tests target specific application resources (e.g. memory exhaustion by saving large amounts of data to a user session)
- You design tests around relevant personas with well-defined capabilities (knowledge, resources)
- You feed the results back to the Design practices


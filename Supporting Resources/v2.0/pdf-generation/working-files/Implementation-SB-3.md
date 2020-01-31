<div class="new-page"/>
### Secure Build (SB3)

The goal of this practice level is to build process helps prevent known defects from entering the production environment.

#### Activities

##### [Stream A] Enforce a security baseline during build
<b>Benefit</b>: <i>Assurance that you build software complying with a security baseline</i>

Define security checks suitable to be carried out during the build process, as well as minimum criteria for passing the build - these might differ according to the risk profiles of various applications. Include the respective security checks in the build and enforce breaking the build process in case the predefined criteria are not met. Trigger warnings for issues below the threshold and log these to a centralized system to track them and take actions. If sensible, implement an exception mechanism to bypass this behavior if the risk of a particular vulnerability has been accepted or mitigated. However, ensure these cases are explicitely approved first and log their occurence together with a rationale.

If technical limitations prevent the organization from breaking the build automatically, ensure the same effect via other measures, such as a clear policy and regular audit.

Handle code signing on a separate centralized server which does not expose the certificate to the system executing the build. Where possible, use a deterministic method that outputs byte-for-byte reproducible artifacts.


###### Assessment Question(s)
Do you enforce automated security checks in your build processes?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Builds fail if the application doesn't meet a predefined security baseline
- You have a maximum accepted severity for vulnerabilties
- You log warnings and failures in a centralized system
- You select and configure tools to evaluate each application against its security requirements at least once a year


##### [Stream B] Test application dependencies
<b>Benefit</b>: <i>Handling of security issues in dependencies comparable to those in your own code</i>

Maintain a whitelist of approved dependencies and versions, and ensure that the build process fails upon a presence of dependency not being on the list. Include a sign-off process for handling exceptions to this rule if sensible.

Perform security verification activites against dependencies on the whitelist in a comparable way to the target applications themselves (esp. using SAST and analyzing transitive dependencies). Ensure that these checks also aim to identify possible backdoors or easter eggs in the dependencies. Establish vulnerability disclosure processes with the dependency authors including SLAs for fixing issues. In case enforcing SLAs is not realistic (e.g. with open source vulnerabilities), ensure that the most probable cases are expected and you are able to implement compensating measures in a timely manner. Implement regression tests for the fixes to identified issues.

Track all identified issues and their state using your defect tracking system. Integrate your build pipeline with this system to enable failing the build whenever the included dependencies contain issues above a defined criticality level.


###### Assessment Question(s)
Do you prevent build of software if it's affected by vulnerabilities in dependencies?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Your build system is connected to a system for tracking 3rd party dependency risk, causing build to fail unless the vulnerability is evaluated to be a false positive or the risk is explicitly accepted
- You scan your dependencies using a static analysis tool
- You report findings back to dependency authors using an established responsible disclosure process
- Using a new dependency not evaluated for security risks causes the build to fail


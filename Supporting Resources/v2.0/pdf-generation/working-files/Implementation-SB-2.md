<div class="new-page"/>
### Secure Build (SB2)

The goal of this practice level is to build process is optimized and fully integrated into the workflow.

#### Activities

##### [Stream A] Automate the build process
<b>Benefit</b>: <i>Efficient build process with integrated security tools</i>

Automate the build process so that builds can be executed consistently anytime. The build process shouldn't typically require any intervention, further reducing the likelihood of human error.

The use of an automated system increases reliance on security of the build tooling and makes hardening and maintaining the toolset even more critical. Pay particular attention to the interfaces of those tools, such as web-based portals and how they can be locked-down. The exposure of a build tool to the network could allow a malicious actor to tamper with the integrity of the process. This might, for example, allow malicious code to be built into software.

The automated process may require access to credentials and secrets required to build the software, such as the code signing certificate or access to repositories. Handle these with care. Sign generated artifacts using a certificate that identifies the organization or business unit that built it, so you can verify its integrity.

Finally, add appropriate automated security checks (e.g. using SAST tools) in the pipeline to leverage the automation for security benefit.


###### Assessment Question(s)
Is the build process fully automated?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- The build process itself doesn't require any human interaction
- Your build tools are hardened as per best practice and vendor guidance
- You encrypt the secrets required by the build tools and control access based on the principle of least privilege


##### [Stream B] Review application dependencies for security
<b>Benefit</b>: <i>Full transparency of known security issues in dependencies</i>

Evaluate used dependencies and establish a list of acceptable ones approved for use within a project, team, or the wider organization according to a defined set of criteria.

Introduce a central repository of dependencies that all software can be built from.

Review used dependencies regularly to ensure that&#58;

* they remain correctly licensed
* no known and significant vulnerabilities impacting your applications are present
* the dependency is still actively supported and maintained
* you are using a current version
* there is a valid reason to include the dependency

React timely and appropriately to non-conformities by handling these as defects. Consider using an automated tool to scan for vulnerable dependencies and assign the identified issues to the respective development teams.


###### Assessment Question(s)
Do you handle 3rd party dependency risk by a formal process?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You keep a list of approved dependencies that meet predefined criteria
- You automatically evaluate dependencies for new CVEs and alert responsible staff
- You automatically detect and alert to license changes with possible impact on legal application usage
- You track and alert to usage of unmaintained dependencies
- You reliably detect and remove unnecessary dependencies from the software


<div class="new-page"/>
### Secure Deployment (SD3)

The goal of this practice level is to deployment process is fully automated and incorporates automated verification of all critical milestones.

#### Activities

##### [Stream A] Verify the integrity of deployment artifacts
<b>Benefit</b>: <i>Assured integrity of artifacts being deployed to production</i>

Take advantage of binaries being signed at the build time and include automatic verification of the integrity of software being deployed by checking their signatures against trusted certificates. This may include binaries developed and built in-house, as well as third-party artifacts. Do not deploy artifacts if their signatures cannot be verified, including those with invalid or expired certificates.

If the list of trusted certificates includes third-party developers, check them periodically, and keep them in line with the organization’s wider governance surrounding trusted third-party suppliers.

Manually approve the deployment at least once during an automated deployment. Whenever a human check is significantly more accurate than an automated one during the deployment process, go for this option.


###### Assessment Question(s)
Do you consistently validate the integrity of deployed artifacts?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You prevent or roll back deployment if you detect an integrity breach
- The verification is done against signatures created during the build time
- If checking of signatures is not possible (e.g. externally build software), you introduce compensating measures


##### [Stream B] Enforce lifecycle management of application secrets
<b>Benefit</b>: <i>Minimized possibility and timely detection of production secret abuse</i>

Implement lifecycle management for production secrets, and ensure the generation of new secrets as much as possible, and for every application instance. The use of secrets per application instance ensures that unexpected application behavior can be traced back and properly analyzed. Tools can help in automatically and seemlessly updating the secrets in all relevant places upon change.

Ensure that all access to secrets (both reading and writing) is logged in a central infrastructure. Review these logs regularly to identify unexpected behavior and perform proper analysis to understand why this happened. Feed issues and root causes into the defect management practice to make sure that the organization will resolve any unacceptable situations.


###### Assessment Question(s)
Do you practice proper lifecycle management for application secrets?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You generate and synchronize secrets using a vetted solution
- Secrets are different between different application instances
- Secrets are regularly updated


<div class="new-page"/>
### Secure Deployment (SD2)

The goal of this practice level is to deployment processes include security verification milestones.

#### Activities

##### [Stream A] Automate deployment and integrate security checks
<b>Benefit</b>: <i>Efficient deployment process with integrated security tools</i>

Automate the deployment process to cover various stages, so that no manual configuration steps are needed and the risk of isolated human errors is eliminated. Ensure and verify that the deployment is consistent over all stages.

Integrate automated security checks in your deployment process, e.g. using Dynamic Analysis Security Testing (DAST) and vulnerability scanning tools. Also, verify the integrity of the deployed artefacts where this makes sense. Log the results from these tests centrally and take any necessary actions. Ensure that in case any defects are detected, relevant personnel is notified automaticaly. In case any issues exceeding predefined criticality are identified, stop or reverse the deployment  either automatically, or introduce a separate manual approval workflow so that this decision is recorded, containing an explanation for the exception.

Account for and audit all deployments to all stages. Have a system in place to record each deployment, including information about who conducted it, the software version that was deployed, and any relevant variables specific to the deploy.


###### Assessment Question(s)
Are deployment processes automated and employing security checks?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Deployment processes are automated on all stages
- Deployment includes automated security testing procedures
- You alert responsible staff to identified vulnerabilities
- You have logs available for your past deployments for a defined period of time


##### [Stream B] Include application secrets during deployment
<b>Benefit</b>: <i>Detection of potential leakage of production secrets</i>

Have an automated process to add credentials and secrets to configuration files during the deployment process to respective stages. This way, developers and deployers do not see or handle those sensitive values.

Implement checks that detect the presence of secrets in code repositories and files, and run them periodically. Configure tools to look for known strings and unknown high entropy strings. In systems such as code repositories, where there is a history, include the versions in the checks. Mark potential secrets you discover as sensitive values, and remove them where appropriate. If you cannot remove them from a historic file in a code repository, for example, you may need to refresh the value on the system that consumes the secret. This way, if an attacker discovers the secret, it will not be useful to them.

Make the system used to store and process the secrets and credentials robust from a security perspective. Encrypt all secrets at rest and in transit. Users who configure this system and the secrets it contains are subject to the principle of least privilege. For example, a developer might need to manage the secrets for a development environment, but not a user acceptance test or production environment.


###### Assessment Question(s)
Do you inject production secrets into configuration files during deployment?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- Source code files no longer contain active application secrets
- Under normal circumstances, no humans access secrets during deployment procedures
- You log and alert to any abnormal access to secrets


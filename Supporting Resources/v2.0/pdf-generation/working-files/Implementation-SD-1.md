<div class="new-page"/>
### Secure Deployment (SD1)

The goal of this practice level is to deployment processes are fully documented.

#### Activities

##### [Stream A] Use a repeatable deployment process
<b>Benefit</b>: <i>Limited risk of human error during deployment process minimizing security issues</i>

Define the deployment process over all stages, breaking it down into a set of clear instructions to either be followed by a person or an automated tooling. The deployment process definition should describe the whole process end-to-end so that it can be consistently followed each time to produce the same result. The definition is stored centrally and accessible to all relevant personnel. Do not store or distribute multiple copies, some of which may become outdated.

Deploy applications to production either using an automated process, or manually by personnel other than the developers. Ensure that developers do not need direct access to the production environment for application deployment.

Review any deployment tools, ensuring that they are actively maintained by vendors and up to date with security patches. Harden each tool’s configuration so that it is aligned with vendor guidelines and industry best practices. Given that most of these tools require access to the production environment, their security is extremely critical. Ensure the integrity of the tools themselves and the workflows they follow, and configure access rules to these tools according to the least privilege principle.

Have personnel with access to the production environment go through at least a minimum level of training or certification to ensure their competency in this matter.


###### Assessment Question(s)
Do you use repeatable deployment processes?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have enough information to run the deployment processes
- Your deployment documentation up to date
- Your deployment documentation is accessible to relevant stakeholders
- You ensure that only defined qualified personnel can trigger a deployment
- You harden the tools that are used within the deployment process


##### [Stream B] Protect application secrets in configuration and code
<b>Benefit</b>: <i>Defined and limited access to your production secrets</i>

Developers should not have access to secrets or credentials for production environments. Have a mechanism in place to adequately protect production secrets, for instance by (i) having specific persons adding them to relevant configuration files upon deployment (the separation of duty principle) or (ii) by encrypting the production secrets contained in the configuration files upfront.

Do not use production secrets in configuration files for development or testing environments, as such environments may have a significantly lower security posture. Similarly, do not keep secrets unprotected in configuration files stored in code repositories.

Store sensitive credentials and secrets for production systems with encryption-at-rest at all times. Consider using a purpose-built tool for this. Handle key management carefully so only personnel with responsibility for production deployments are able to access this data.


###### Assessment Question(s)
Do you limit access to application secrets according to the least privilege principle?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You store production secrets protected in a secured location
- Developers do not have access to production secrets
- Production secrets are not available in non-production environments


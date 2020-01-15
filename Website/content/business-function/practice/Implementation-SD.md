---
title: Secure Deployment
url: /model/implementation/secure-deployment/
business_function: "Implementation"
business_function_url: "implementation"
keywords: ["Business function", "Practice", "Secure Deployment"]
type: practice

practice_maturity_1_description: Deployment processes are fully documented.
practice_maturity_2_description: Deployment processes include security verification milestones.
practice_maturity_3_description: Deployment process is fully automated and incorporates automated verification of all critical milestones.

stream_a: Deployment Process

stream_a_maturity_1_activity: Formalize the deployment process and secure the used tooling and processes.
stream_a_maturity_2_activity: Automate the deployment process over all stages and introduce sensible security verification tests.
stream_a_maturity_3_activity: Automatically verify integrity of all deployed software, indenendently on whether it's internally or externally developed.

stream_b: Secret Management

stream_b_maturity_1_activity: Introduce basic protection measures to limit access to your production secrets.
stream_b_maturity_2_activity: Inject secrets dynamically during deployment process from hardened storages and audit all human access to them.
stream_b_maturity_3_activity: Use run-time solutions to minimize access to application secrets. Properly manage the secret lifecycle.
---

One of the final stages in delivering secure software is ensuring the security and integrity of developed applications are not compromised during their deployment. The Secure Deployment (SD) practice focuses on this. To this end, the practice’s first stream focuses on removing manual error by automating the deployment process as much as possible, and making its success contingent upon the outcomes of integrated security verification checks. It also fosters Separation of Duties by making adequately trained, non-developers responsible for deployment.

The second stream goes beyond the mechanics of deployment, and focuses on protecting the privacy and integrity of sensitive data, such as passwords, tokens, and other secrets, required for applications to operate in production environments. In its simplest form, suitable production secrets are moved from repositories and configuration files into adequately managed digital vaults. In more advanced forms, secrets are dynamically generated at deployment time and routine processes detect and mitigate the presence of any unprotected secrets in the environment.


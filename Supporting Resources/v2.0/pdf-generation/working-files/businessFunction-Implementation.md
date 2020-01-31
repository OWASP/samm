## Implementation
This business function contains the following three security practices.

### Secure Build

The Secure Build (SB) practice emphasises the importance of building software in a standardised, repeatable manner, and of doing so using secure components, including 3rd party software dependencies.

The first stream focuses on removing any subjectivity from the build process by striving for full automation. An automated build pipeline can include additional automated security checks such as SAST and DAST to gain further assurance and flag security regressions early by failing the build, for example.

The second stream acknowledges the prevalence of software dependencies in modern applications. It aims to identify them and track their security status in order to contain the impact of their insecurity on an otherwise secure application. In an advanced form, it applies similar security checks to software dependencies as to the application itself.


#### Streams

  - `Build Process`:
    A consistent build process ensures the software you are deploying is predictable and directly linked to the source code. Furthermore, you can take advantage of the software build process for various security activities.
  - `Software Dependencies`:
    External libraries are a significant part of modern software. The activities in this stream help create a view of external libraries and ensure their security strength is adequate.

### Secure Deployment

One of the final stages in delivering secure software is ensuring the security and integrity of developed applications are not compromised during deployment. The Secure Deployment (SD) practice focuses on this. To this end, the practice’s first stream focuses on removing manual error by automating the deployment process as much as possible, and making its success contingent upon the outcomes of integrated security verification checks. It also fosters Separation of Duties by making adequately trained, non-developers responsible for deployment.

The second stream goes beyond the mechanics of deployment, and focuses on protecting the privacy and integrity of sensitive data, such as passwords, tokens, and other secrets, required for applications to operate in production environments. In its simplest form, suitable production secrets are moved from repositories and configuration files into adequately managed digital vaults. In more advanced forms, secrets are dynamically generated at deployment time and routine processes detect and mitigate the presence of any unprotected secrets in the environment.


#### Streams

  - `Deployment Process`:
    A repeatable and consistent deployment process ensures you only deploy correct software artifacts to production. It also paves the way for representative test environments prior to production.
  - `Secret Management`:
    As the secure execution of any software system requires credentials, this stream ensures a proper handling of these sensitive data elements within the organization's environment.

### Defect Management

The Defect Management (DM) practice focuses on collecting, recording, and analyzing software security defects and enriching them with information to drive metrics-based decisions.

The practice’s first stream deals with the process of handling and managing defects to ensure released software has a given assurance level. The second stream focuses on enriching the information about the defects and deriving metrics to guide decisions about the security of individual projects and of the security assurance program as a whole.

In a sophisticated form, the practice requires formalised, independent defect management and real-time, correlated information to detect trends and influence security strategy.


#### Streams

  - `Defect Tracking`:
    Defect tracking manages the collection and follow-up of all potential issues in a piece of software, from architectural flaws to coding issues and run-time vulnerabilities.
  - `Metrics and Feedback`:
    Defect tracking can drive the improvement of security activities within the organization through metrics and feedback.



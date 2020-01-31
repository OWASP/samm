## Verification
This business function contains the following three security practices.

### Architecture Assessment

The Architecture Assessment (AA) practice ensures that the application and infrastructure architecture adequately meets all relevant security and compliance requirements, and sufficiently mitigates identified security threats. The first stream focuses on verifying that the security and compliance requirements identified in the Policy & Compliance and Security Requirements practices are met, first in an ad-hoc manner, then more systematically for each interface in the system. The second stream reviews the architecture, first for mitigations against typical threats, then against the specific threats identified in the Threat Assessment practice.

In its more advanced form, the practice formalizes the security architecture review process, continuously evaluates the effectiveness of the architecture's security controls, their scalability and strategic alignment. Identified weaknesses and possible improvements are fed back to the Security Architecture practice to improve reference architectures.


#### Streams

  - `Architecture Validation`:
    Architecture validation confirms the security of the software and supporting architecture by identifying application and infrastructure architecture components and verifying their provision of security objectives and requirements.

  - `Architecture Mitigation`:
    Architecture mitigation focuses on ensuring that all threats identified during Threat Assessment are adequately mitigated, and existing reference architectures updated to address any unhandled threats.


### Requirements-driven Testing


The goal of the Requirements-driven Testing (RT) practice is to ensure that the implemented security controls operate as expected and satisfy the project's stated security requirements. It does so by incrementally building a set of security test and regression cases and executing them regularly.

A key aspect of this practice is its attention to both positive and negative testing. The former verifies that the application's security controls satisfy stated security requirements and validates their correct functioning. These requirements are typically functional in nature. Negative testing addresses the quality of the implementation of the security controls and aims to detect unexpected design flaws and implementation bugs through misuse and abuse testing. In its more advanced forms, the practice promotes security stress testing, such as denial of service, and strives to continuously improve application security by consistently automating security unit tests and creating security regression tests for all bugs identified and fixed.

Although both the Requirements-driven Testing and Security Testing practices are concerned with security testing, the former focuses on verifying the correct implementation of security requirements, while the latter aims to uncover technical implementation weaknesses in an application, irrespective of requirements.


#### Streams

  - `Control Verification`:
    Control Verification validates that security controls and requirements are met through testing derived from requirements, and prevents the introduction of bugs into later releases through regression testing.

  - `Misuse/Abuse Testing`:
    Misuse/Abuse Testing leverages fuzzing, misuse/abuse cases, and the identification of any functionality or resources in the software that can be abused in order to identify weaknesses in features to attack an application.


### Security Testing

The Security Testing (ST) practice leverages the fact that, while automated security testing is fast and scales well to numerous applications, in-depth testing based on good knowledge of an application and its business logic is often only possible via slower, manual expert security testing. Each stream therefore has one approach at its core.

The first stream focuses on establishing a common security baseline to automatically detect so-called "low hanging fruit". Progressively customize the automated tests for each application and increase their frequency of execution to detect more bugs and regressions earlier, as close as possible to their inception. The more bugs the automated processes can detect, the more time experts have to use their knowledge and creativity to focus on more complex attack vectors and ensure in-depth application testing in the second stream. As manual review is slow and hard to scale, reviewers prioritize testing components based on their risk, recent relevant changes, or upcoming major releases. Organizations can also access external expertise by participating in bug bounty programs, for example.

Unlike the Requirements-driven testing practice which focuses on verifying that applications correctly implement their requirements, the goal of this practice is to uncover technical and business-logic weaknesses in application and make them visible to management and business stakeholders, irrespective of requirements.


#### Streams

  - `Scalable Baseline`:
    Scalable baseline focuses on the use of application-specific automated testing tools that integrate security validation into the build and deploy process. The goal of this stream is to favor width (a broad spectrum of applications) over depth of testing.

  - `Deep Understanding`:
    Deep understanding focuses on performing manual security testing of high-risk components, using complex attack vectors with the goal of making advanced security testing an integral part of the development process. The goal of this stream is to favor testing depth (testing rigour) over testing width (the portfolio of applications).




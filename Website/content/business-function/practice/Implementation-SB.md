---
title: Secure Build
url: /model/implementation/secure-build/
business_function: "Implementation"
business_function_url: "implementation"
keywords: ["Business function", "Practice", "Secure Build"]
type: practice

practice_maturity_1_description: Build process is repeatable and consistent.
practice_maturity_2_description: Build process is optimized and fully integrated into the workflow.
practice_maturity_3_description: Build process helps prevent known defects from entering the production environment.

stream_a: Build Process

stream_a_maturity_1_activity: Create a formal definition of the build process so that it becomes consistent and repeatable.
stream_a_maturity_2_activity: Automate your build pipeline and secure the used tooling. Add security checks in the build pipeline.
stream_a_maturity_3_activity: Define mandatory security checks in the build process and ensure that building non-compliant artifacts fails.

stream_b: Software Dependencies

stream_b_maturity_1_activity: Create recoreds with Bill of Materials of your applications and opportunistically analyze these.
stream_b_maturity_2_activity: Evaluate used dependencies and ensure timely reaction to situations posing risk to your applications.
stream_b_maturity_3_activity: Analyze used dependencies for security issues in a comparable way to your own code.
---

The Secure Build (SB) practice emphasises the importance of building software in a standardised, repeatable manner, and of doing so using secure components, including 3rd party software dependencies.

The first stream focuses on removing any subjectivity from the build process by striving for full automation. An automated build pipeline can include additional automated security checks such as SAST and DAST to gain further assurance and flag security regressions early by failing the build for example.

The second stream acknowledges the prevalence of software dependencies in modern applications. It aims to identify them and track their security status in order to contain the impact of their insecurity on an otherwise secure application. In an advanced form, it applies similar security checks to software dependencies as to the application itself.


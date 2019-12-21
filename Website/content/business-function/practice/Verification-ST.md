---
title: Security Testing
url: /model/verification/security-testing/
business_function: "Verification"
business_function_url: "verification"
keywords: ["Business function", "Practice", "Security Testing"]
type: practice

practice_maturity_1_description: Perform security testing (both manual and tool based) to discover security defects.
practice_maturity_2_description: Make security testing during development more complete and efficient through automation complemented with regular manual security penetration tests.
practice_maturity_3_description: Embed security testing as part of the development and deployment processes.

stream_a: Scalable Baseline

stream_a_maturity_1_activity: Utilize automated security testing tools
stream_a_maturity_2_activity: Employ application-specific security testing automation
stream_a_maturity_3_activity: Integrate automated security testing into the build and deploy process

stream_b: Deep Understanding

stream_b_maturity_1_activity: Perform manual security testing of high-risk components
stream_b_maturity_2_activity: Conduct manual penetration testing
stream_b_maturity_3_activity: Integrate security testing into development process
---

With manual and automated security tests, projects within the organization routinely run security tests and review results during development and deployment. They detect and fix basic security issues through scalable automation, where manual security testing focuses on more complex attack vectors with deeper understanding of the software. Note that the goal of Security Testing practice is to uncover technical and business-logic weaknesses in an application, irrespective of its requirements. The Requirements-driven testing practice on the other hand, aims to verify that an application correctly implements its requirements. These are often more functional in nature.

Project teams focus on building granular (manual and automated) security test cases based on the business functionality of their software. A central software security group focuses on specification of automated tests for compliance and internal standards.

For each project release, make the results of automated and manual security tests available to management and business stakeholders for review, preferably in dashboard form. If there are unaddressed findings that remain as accepted risks for the release, stakeholders and development managers work together to establish a concrete timeframe for addressing them. As part of each release, review and improve the quality of the security tests.

Consider implementing security test correlation tools to automate the matching and merging of test results from dynamic, static, and interactive application scanners into one central dashboard, providing direct input towards Defect Management. Spread the knowledge of the created security tests and the results across the development team to improve security knowledge and awareness inside the organisation.


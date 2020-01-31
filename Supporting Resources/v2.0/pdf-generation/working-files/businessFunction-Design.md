## Design
This business function contains the following three security practices.

### Threat Assessment

The Threat Assessment (TA) practice focuses on identifying and understanding of project-level risks based on the functionality of the software being developed and characteristics of the runtime environment. From details about threats and likely attacks against each project, the organization as a whole operates more effectively through better decisions about prioritization of initiatives for security. Additionally, decisions for risk acceptance are more informed, therefore better aligned to the business.

By starting with simple threat models and building application risk profiles, an organization improves over time. Ultimately, a sophisticated organization would maintain this information in a way that is tightly coupled to the compensating factors and pass-through risks from external entities. This provides greater breadth of understanding for potential downstream impacts from security issues while keeping a close watch on the organization’s current performance against known threats.


#### Streams

  - `Application Risk Profile`:
    An application risk profile helps to identify which applications can pose a serious threat to the organization if they were attacked or breached.
  - `Threat Modeling`:
    Threat modeling is intended to help software development teams understand what risks exist in what is being built, what could go wrong, and how we the risks can be mitigated or remediated.

### Security Requirements

The Security Requirements (SR) practice focuses on security requirements that are important
in the context of secure software. A first type deals with typical software-related
requirements, to specify objectives and expectations to protect the service and
data at the core of the application. A second type deals with requirements relative to supplier organizations that are part of the development context of the application, in particular for outsourced development. It is important to
streamline the expectations in terms of secure development because outsourced development
can have significant impact on the security of the application. The security of
3rd party (technical) libraries is part of the software supply chains stream (see
Secure Build), and it is not included in this practice.


#### Streams

  - `Software Requirements`:
    Software requirements specify objectives and expectations to protect the service and data at the core of the application.
  - `Supplier Security`:
    Supplier security deals with requirements that are relative to supplier organizations within the development context of the application, in particular for outsourced development.

### Security Architecture

The Security Architecture (SA) practice focuses on the security linked to components and technology you deal with during the architectural design of your software. Secure Architecture Design looks at the selection and composition of components that form the foundation of your solution, focusing on its security properties. Technology management looks at the security of supporting technologies used during development, deployment and operations, such as development stacks and tooling, deployment tooling, and operating systems and tooling.


#### Streams

  - `Architecture Design`:
    The design of a software architecture can significantly impact the security posture of a software and the use of good security practices will improve the overall design.
  - `Technology Management`:
    Technologies and frameworks are the cornerstones of any software solution. The security properties of these must be looked into to ensure an appropriate security level and to anticipate any potential issues herein.



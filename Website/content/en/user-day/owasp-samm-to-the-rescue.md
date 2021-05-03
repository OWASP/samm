---
url: /user-day/owasp-samm-to-the-rescue/
type: user-day
title: User day
name: OWASP SAMM to the rescue? On the intricate challenges of setting up a secure CICD pipeline
speaker: Asier Rivera Fernandez and Nessim Kisserli
image: /img/people/Asier_Rivera_Fernandez.jpg
affiliation: 
role: 
linkedin: "http://linkedin.com/in/deveeshree"
abstract: |
    The last few years have seen a rise in the adoption of CICD pipelines. Today, they are near ubiquitous in organisations building software and have come to play a central role in the development and, increasingly, the deployment of software artefacts. This growth has led to a corresponding increase in complexity, as pipelines leverage stateless containers to orchestrate an ever larger arsenal of build, test, deployment and configuration tools. As a system grows in complexity, so does the challenge of securing it.

    The first half of the talk presents a practical pipeline poisoning attack on the managed AWS CodeBuild service. We demonstrate how the StartBuild action, frequently granted to developers, can be abused to bypass typical SDLC security controls such as peer code reviews, secret management and segregation of duties in order to tamper with applications, exfiltrate their secrets, or execute privileged commands on deployment servers to gain further control.

    Against this backdrop, the second half of the talk focuses on the SAMM practices most relevant to preventing this type of attack. We discuss the importance of the Secure Build and Secure Deployment practices introduced in the new SAMM 2.0 business function “Implementation”, and highlight the need to treat the CICD pipeline and its supporting components as part of the tools and processes to secure, monitor and test. We aim to engage the audience in reflecting on the role other SAMM practices can play in helping detect and mitigate pipeline poisoning attacks, such as Policy & Compliance, Threat Assessment, Security Architecture, Security Testing, and Environment Management. Along the way, we will also touch on the new challenges and considerations of working in cloud environments. 
bio: | 
    Asier Rivera Fernandez is a Senior Associate in PwC Belgium’s Cyber & Privacy team. He is part of the Expert Track and focuses on building technical skills in the areas of cloud security, with a strong interest for application security and secure development.  
    Asier has a Computer Science degree from Mondragon University in Spain, a master’s in Computer Systems and Networks from Chalmers University in Sweden and the KU Leuven University in Belgium. He holds the ISC² CSSLP and AWS and Azure certificates for security and development.

    Nessim Kisserli is a Technical Expert within the Cyber & Privacy team at PwC Belgium with 20 years of experience in information and application security. He currently focuses on assurance in modern application development at the intersection of Agile, CI/CD, microservices, and Kubernetes. He has worked as a UNIX system administrator, carried out research into software protection and supervised the research and writing of security MSc theses. He has a bachelor’s in computer science from the University of Northern Iowa and a Master’s in Information Security from Royal Holloway University of London. Nessim is a member of the OWASP SAMM project.
---
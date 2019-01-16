
design notes to copy in from the last call


call 18-Dec-2017
participants: Yan, Bruce, Bart, Charlotte, Seba, Daniel

discuss Implementation business function

Build process is fully documented: 

Build process is automated across all dependencies and components:
more security by removing the manual activities
(seperate environments) - language specific?

Build process verifies known defects are not presented and will prevent the build from completing if defects are identified:
remarks:
=> this provides the hooks for any other security activity
"centralized" build process? on team or organisation level? control is important here. 
might be included in the level2 activity?
part of the guidance depending on the type/size of organisation?

?security of the build infrastructure (hardening, patching, access control, ...)


B: Software Integrity
difficult to put in the activities / maturity levels
relies a lot on technologies/language
what is the "scope of the build"
get code from filesystem, leaving the artifact somewhere

Versioning is used for all application code:
version control vs versioning?
are we measuring the maturity of the "general IT practice" vs what is the security contribution?
we should not be building/describing "ITIL"

Peer review process is fully integrated into the development and build process:	
verify peer review before build?
facilitated per commit?
"what" to peer review?
see peer review process
is this "pre-build"?

Build process verifies the SDLC milestones are satisfied before allowing the build process to continue:


parking lot for implementation:
code signing (now part of deployment).
instrument your software that protect your code?
verifying software before it is started?


Integration of security verification in deployment:
example: binary static code analysis, verify hashes , ...

Yan walked us through
Secure Deployment
and 
Defect Management

we will continue the discussion/feedback next Wednesday

call 20-Dec-2017
participants: Bruce, Seba, Yan, Daniel,

discuss input from BDW on the Implementation (see file)

Build process is automated and controlled (and breaks when security is not met):
Is this aligned with the level 1/2/3 logic?

Build process does include security protections (e.g., obfuscatio, secure configs, …):
does not seem a logical level 3 activity based on l 1/2 activities in this stream
also overlaps with functional requirements?

Software includes active integrity protection techniques (e..g., remote attestation):
level 3+ activity?
not part of the build process
what is meant with "active technique" in this context

overall: need to reconsider B: Software Integrity in this business function as stream?
plus compiled versus interpreted build processes? c versus node.js
alternatives?


Defined Change Management Process	:
other option: deployment by somebody else (cfr separation of duties).
or "Change Management Process includes security consideration (not approval)."

Integration of security verification in deployment	:
e.g. binary security verification


All code is digitally signed and signatures are verified at Deployment:
relation with "mobile deployment / app store ..." ?

Configuration files are versioned	

Configuration files do not contain unencrypted sensitive configuration information, such as passwords, connection strings, API keys, encryption keys, or private IP addresses.	
alternative: Configuration secrets are protected in the file	
remarks
software based HSMs?
splitting config files (separate secrets)
injecting secrets in configurations
cfr https://github.com/Netflix/eureka/wiki/Configuring-Eureka

Access to sensitive information requires split-knowledge and / or inaccessible to individuals involved in the development of the application.
replace by BDW proposal - "Deployment process automatically generates/initializes security secrets (keys, tokens, accounts, …)"



Track defects and establish SLA
2 different activities?
SLAs more part of policy
establish versus enforcing SLA (more l2)


actions:
Yan to make a consolidated version on Onedrive
Seba to send out slots for week1/2 in Januari




call 9-Jan-2018
participants: Bruce, Seba, Bart, Daniel,

reviewing verification.
A: Application Architecture
remarks: criteria for performing security architecture review (L2?)
with L3: always have a review?
Would this not be part of the measurement?
20180218 - Seba: this is part of the level structure / frequency (can be integrated in the maturity questions)

L1: requirements+best practices
20180218 - Seba: implemented
L2: standardized approach?
20180218 - Seba: implemented
L3: consider impact on the rest of the enterprise? requires sofistication in terms of storing/reviewing architectures 
include verification against A: Secure Architecture Design ?
20180218 - Seba: updated to: "Review of the application architecture impact on overall enterprise architecture and against the organisation design principles, design patterns, security solutions and reference architectures"

B: Supporting Architecture
need for better understanding/description what this entails
e.g. load balancing, databases, configurations, kubernetes, ...
20180218 - Seba: to be discussed

B: Misuse/Abuse Testing [-]
rewrite this towards abuse of requirements. rethink these
question: What is distinction/overlap with security testing?
scenarios in which the system is being abuse - business logic attacks?
do we need to mention "security unit tests"

add/placeholder for fuzzing?
20180218 - Seba: added as level1 activity

is this the most logical ordering of streams:
A: Control Verification [+]
B: Misuse/Abuse Testing [-]
A: Scalable Baseline
B: Deep Understanding
20180218 - Seba: still seems to fit the business function

rethink:
B: Misuse/Abuse Testing [-]	Perform security testing for standard (vulnerabilities)	Perform security testing on application specific (vulnerabilities)	Perform security testing on application abuse flaws
20180218 - Seba: updated


call 11-Jan-2018
participants: Seba, Daniel, Bart, 

A: Incident Detection
l1 - isolated incident detection (e.g. log/waf) automated/manual eg: multiple login failure threshold.
l2 - log corelation + siem / log consolidation + syslog
l3 - process / soc behind it
level of IOCs? level of rules
what objectives have to be reached in each level


B: Incident Response
l1 - adhoc not enough for this maturity. contacts,structure,steps,communications,... already known, but not trained yet



A: Patching
l2 - e.g. secunia
l3 - track with e.g. jira tickets
full stack: includes libraries


A: Data Management
add dealing with test data 
looks like information security, what is the link with applications
NOT: company, financial data = needs to be encrypted according to classification
focus on data which is processed by the systems. email confidential with customer data - processed by different systems. difference between accessing the headers vs the content. statistical data
relation with operations?
overlap with Policy&Compliance?
l3 example enforce that caching data is according to the foreseen time, other: cassandra - nodes talk to each other and compare deltas meaning assynchronous data deletion/propagation (quorum tells you the data is not there) ??
alternative
l1 measures to protect application data from being accessed, e.g. log access/integrity 
l2 test data access / controls / anonymisation+pseudonymisation masking
l3 example: data vaults with control over the data?

B: Change Management (decommisioning before)
ITIL considered a pre-condition? to be included in samm
but difficult to find 3 levels of decommisioning


call 22-Jan-2018
participants: Bruce, Bart, Seba, Yan
White and grey are combined
Strategy & Metrics
Stream build and promote: too much risk based ?
Change wording of dashboard into less metric centric
We're not dealing with promoting

Policy & Compliance
sign-off procedures (only for exceptions): it should be documented somewhere, must be a record
remove the word gate from the wording
external suppliers: only level 3 ? - we could reach more at level 3
Compliance mngt: Maybe consider activities that apply both on internal and external for all three levels ?

Education & Guidance:
stream A = training ; stream B = talking to people
Maybe restructure into stream A: technical recommendations and stream B: training and communicating
certification still might make sense
Format how to train is probably not important (might depend on organisation size)




next iteration:
what objectives have to be reached in each level






updated activity streams in Operational Management
A: Data Management
B: Change Management







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







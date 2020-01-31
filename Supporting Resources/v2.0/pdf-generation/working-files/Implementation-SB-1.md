<div class="new-page"/>
### Secure Build (SB1)

The goal of this practice level is to build process is repeatable and consistent.

#### Activities

##### [Stream A] Define a consistent build process
<b>Benefit</b>: <i>Limited risk of human error during build process minimizing security issues</i>

Define the build process, breaking it down into a set of clear instructions to either be followed by a person or an automated tool. The build process definition describes the whole process end-to-end so that the person or tool can follow it consistently each time and produce the same result. The definition is stored centrally and accessible to any tools or people. Avoid storing multiple copies as they may become unaligned and outdated.

The process definition does not include any secrets (specifically considering those needed during the build process).

Review any build tools, ensuring that they are actively maintained by vendors and up-to-date with security patches. Harden each tool’s configuration so that it is aligned with vendor guidelines and industry best practices.

Determine a value for each generated artifact that can be later used to verify its integrity, such as a signature or a hash. Protect this value and, if the artifact is signed, the private signing certificate.

Ensure that build tools are routinely patched and properly hardened.


###### Assessment Question(s)
Is your full build process formally described?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have enough information to recreate the build processes
- Your build documentation up to date
- Your build documentation is stored in an accessible location
- Produced artifact checksums are created during build to support later verification
- You harden the tools that are used within the build process


##### [Stream B] Identify application dependencies
<b>Benefit</b>: <i>Available information on known security issues in dependencies</i>

Keep a record of all dependencies used throughout the target production environment. This is sometimes referred to as a Bill of Materials (BOM). Consider that different components of the application may consume entirely different dependencies. For example, if the software package is a web application, cover both the server-side application code and client-side scripts. In building these records, consider the various locations where dependencies might be specified such as configuration files, the project's directory on disk, a package management tool or the actual code (e.g. via an IDE that supports listing dependencies).

Gather the following information about each dependency&#58;

* Where it is used or referenced
* Version used
* License
* Source information (link to repository, author's name, etc.)
* Support and maintenance status of the dependency

Check the records to discover any dependencies with known vulnerabilities and update or replace them accordingly.


###### Assessment Question(s)
Do you have solid knowledge about dependencies you're relying on?

- No
- Yes, for some applications
- Yes, for at least half of the applications
- Yes, for most or all of the applications


Quality Criteria:

- You have a current bill of materials (BOM) for every application
- You can quickly find out which applications are affected by a particular CVE
- You have analyzed, addressed, and documented findings from dependencies at least once in the last three months


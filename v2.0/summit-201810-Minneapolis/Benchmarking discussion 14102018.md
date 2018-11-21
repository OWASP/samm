# Benchmarking brainstorm
Participants: Seba, Bart

## Notes
Currently the benchmarking project has defined a proper datamodel that solves a number of important issues in representing and using data: 
- Data can be submitted named or anonymously, but still is open for correction afterwards (even when submitted anonymously)
- We can represent different levels of trust for data submitters
- The model supports several meta-data about a data element

It is key for SAMM to have a significant and qualitative dataset, so we have to invest more in getting this up and running, and used.
By the time we want to release SAMM v2 (June 2019), the goal should be to have a 100-element dataset.
The main blocking factor at the moment is that we have no driver/trigger for people to submit data. 

The following elements can help to advance this further:
- The TRIGGER for people to submit can be more advanced access to the data set. People/companies that submit data could for instance be able 
to query data on an individual basis, while people that don't submit only have access on a standard set of aggregated data level (cfr. the graphics/tables in the current BSIMM model).
The latter means that we will probably have to continuously do some automatic processing of the data.
- Access to the data will happen via some interface (REST ?), but no direct access to the database will be provided (except for some core people in the project).
While we are an open source project, we think that opening full data access will in the long run have more drawbacks than benefits. 
You might have different versions of datasets lying around with potentially old data ; companies might be less inclined to submit their data, etc.
- In order to BOOTSTRAP the system, we will aim for 30 data capturers that will each have to collect 3 data sets. At the same time we might organise a
survey where we will measure coverage of the different activities (stream level will not be enough), but not quality (too complex / time-consuming).
- The system should support a reputation model where trust in data submitters can be made visible. This will allow us to qualify data.
The reputation system could work with 'belts', where we initially foresee 4 belts: novice, contributor, ambassador, master (or something along that line). The more one
grows in belts, the more trust there is in the correctness of the data and the more access they will have. At the same time, people will be expected to meet criteria to grow.
Everybody should be able to be novice. For contributors, they should have a good understanding of the model. For Ambassadors, they should 
have submitted at least a number of data sets. And so forth (to be further defined). A person can only increase a belt level by being endorsed
by some people of the new belt. People with a particular belt could only get access to the data of their belt or below. That way people 
will be encouraged to grow in belt, and they will have to submit data to grow.
- From a practical perspective, we will host in some cloud provider platform.

Questions/Challenges:
- If we continue this way, we are actually creating the same type of data model as BSIMM. Is there a clear advantage to ours ?

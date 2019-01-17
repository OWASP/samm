## SAMM Assessment Model
In this session, the goal was to discuss possible improvement in current assessment methodology.

### Current Challenges
Currently, we typically measure the coverage of the proposed measure/activity: 

> ### Example 
>
> * **Question:** "Do projects in your organization consider and document likely threats?"
> * **Answers:** No / Some / Half / Most


In the real world, the quality of the activities varies greatly. 
At the same time, quality has a key impact on whether the desired objectives of a particualr maturity model have been achieved or not. 
Typically, it's very difficult to reach a conclusion on binary decision of the desired quality achievement.

Currently, we also pay way too little attention to whether the quality stayed on a particular level or whether it decreased (what is common case if you don't invest any resources in it, aka - *"we built our awareness training already 10 years ago and haven't improved ever since"*).

In most cases, we even don't even talk about only one single particular activity in a certain stream maturity level. This makes the assessment even more complicated. 


### Suggested Improvement Strategy

We assume that from the view of an organization, the only motivation to reach a particular maturity level of a certain security practice is to get a tangible benefit out it. 
Otherwise, it's not sensible to spend any resources on getting more mature. 

That's why we should measure the benefit achievement rather than the activities. 
The expected benefit should be clearly described and measured in two dimensions:

* **Coverage**: On how large part of the assessment scope the benefit has been achieved.
* **Quality:** To which degree the benefit has (on average) been achieved.

The assessment should always consider the current state only. 
No credit should be given for actions which were done in the past but bring no value currently.

### Agreed Next Steps

* [ ] Daniel will present the concept in the next call in order to align with everyone
* [ ] everybody will try to:
  * clearly describe an objective/benefit for every maturity level of every stream (one sentence summary)
  * add mulitple comprehensive "Indicators of quality" formulated in the way *"Typically, on this maturity level, ..."*

> ### Example
> The following example **has not** been validated, its purpose is only to demonstrate the approach.
>
> #### Education & Guidance -> Training and Awareness -> Maturity Level 1:
>
> * **Benefit:** 
>   * Every member of the organization has acknowledged the security topic and understands its impact on his/her work.
>
> * **Indicators of quality:**
>   * The training explains the org. risk profile
>   * Unit manager has overview regarding the attendance of his direct reports
>   * There is a rating system for the training participants
>   * The training has been improved in the last year

### Open Topics

* How exactly to measure the achievement?
  * continuous scala in % 
    * Will be probably difficult to align on exact number
  * discrete levels, possibly with 4 levels like this:
  
  |      | N | F | S | M | F |
  | ---  | --- | --- | --- | --- | --- |
  | Full | 0 | 4 | 6 | 8 | 10 |
  | Many | 0 | 3 | 5 | 0 | 8 |
  | Some | 0 | 2 | 4 | 5 | 6 |
  | Few  | 0 | 1 | 2 | 3 | 4 |
  | None | 0 | 0 | 0 | 0 | 0 |

  * Other options?
* How to sum achievements of particular maturity levels:
  * In a linear way
  * In a weighted way where higher levels get mutliplied with a particular number
  
  

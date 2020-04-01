+++
title = "SAMM is doing CI/CD    "
date = "2020-03-31T00:00:00+02:00"
tags = ["ci/cd", "cicd", "process", "automation", "what's new"]
categories = ["process"]
banner = "img/banners/undraw_process_e90d.png"
author = "The SAMM Project Team"
+++

### What version 2 brought along

A significant change that happened behind the scenes for SAMM 2.0 was the addition of a CI/CD pipeline, the automated version of all the steps we need to deliver SAMM. It has enhanced our productivity, providing standardization and enabling faster iterations. 
At the core of Continuous Integration and Continuous Delivery are speed of delivery, reliability, and visibility. This process  encourages frequent updates, allows quick fixes, and ensures a set of checks before deployment. It increases visibility, since every team member can see what is going on with the code.

### How the team works

{{< responsive-image  "/img/blog/github-process.png" "github process graphical representation">}}


All of SAMM’s content is on GitHub. We use YAML files for the data that makes up the model and  Hugo for the website. Any time we want to make changes to either, we create a branch from our repository and then push it to GitHub. Then, we create a pull request and we ask someone else in the team to review our changes. Once the changes are approved, we merge that branch to the master branch.

### How the automated generation works

It begins when someone pushes to the GitHub repo, triggering the automated process.

{{< responsive-image  "/img/blog/samm-cd.png" "automated generation graphical representation">}}


The first step is the lint process. The raw SAMM model consists of a set of YAML files containing the data. This process analyzes the YAML files to make sure the syntax is correct. In the next step, we generate markdown files from the YAML files and we use those markdown files to display the model on the website. Next, comes building the Hugo website.

The final step is deploying the website. For this, there are two scenarios. If the changes are new, we only deploy to the staging website. This way, reviewers can see the new version before approving the changes. When the process starts with a merge to master, apart from deploying to staging, the production website is also deployed.

Every time the process runs, we get detailed logs for each of the steps. If something goes wrong, the logs make it easy to know where and why which, in turn, helps us fix the problem quickly. Logs are also helpful in increasing visibility and transparency, with all the information about the project available in a known location at all times.

{{< responsive-image  "/img/blog/github-actions.png" "github actions showing successful run of jobs">}}

You can take a look at the full process here: https://github.com/OWASP/samm/blob/master/.github/workflows/yaml-process.yml

### Done is better than perfect

Is there room for improvement? Absolutely! But we are already reaping the benefits of adopting the CI/CD philosophy. Among others, it has made us more efficient and it keeps the team aligned.

---

SAMM is a community-driven project and we always welcome feedback and suggestions.

---
title: Contributing
weight: 3
type: security_practice
---
## Introduction
There are many ways you can contribute to OWASP SAMM.  The quickest and easiest way to do it is to simply provide feedback using one of the methods described in our [Feedback Page]({{< ref "feedback" >}}).  

If you would like to help us by making content contributions please review the following guide, which will help you learn the basics of working with Git and ensure your contributions find the way to the model as quickly as possible. 

**Please, take time to review this guide before making contributions, it will help you avoid a lot of frustrations.**

## Background

### What is Git?

Git is a Version Control System (VCS). On a very basic level, there are two awesome things a VCS allows you to do: You can track changes in your files, and it simplifies working on files and projects with multiple people. There are multiple Version Control Systems, but Git is by far and large the most popular.

**_In order to contribute content you will need to learn a few basic Git commands_**

This guide will walk you through the _minimal_ commands you need to learn to contribute to OWASP SAMM and we encourage you to continue your journey in learning more about this indispensable development tool.

### What is Hugo?

Hugo is an open-source static site generator we have chosen to use for maintaining OWASP SAMM.  It allows us to work directly through Github and enables regenerating the framework after each approved change.  

**_The most important aspect of Hugo for this purpose is to make note of the locations of files that could be updated_**


# Getting Started

## Setting up your environment

Before you can contribute to the project you should create an account on [Github](https://github.com).  

### Step 1 - Fork the repository

To do this, go to our [Repository](https://github.com/OWASP/samm) and click the "Fork" button in the top-right corner.  

{{< figure src="/img/contributing/fork-button.png"  >}}

This will create a copy of the repository in your account.

### Step 2 - Clone the repository

Now clone (download) the repository to your machine. Click on the clone button and then click the copy to clipboard icon. 

{{< figure src="/img/contributing/clone-link.png"  >}}

Once copied, use the following command to clone the repository on your machine:

```bash
git clone https://github.com/OWASP/samm.git
```

This will create a directory called `samm` on your local machine, which is where you will be making the changes.

### Step 3 - Create a branch

The main copy or branch of the git repository is called `master`, which is what will be activated after the repository is cloned.  However, we do not allow making changes directly in this branch as it's used for generating our website and the SAMM model.  Therefore, each contribution should be made within a dedicated branch, allowing us to review and test each change before it's merged into the `master`.  To do this, execute the following command:

```bash
git checkout -b <branch-name>
```

The branch name should follow the following naming convention:

`<type>-<initials>-<title>`

**Change Types**

* `minor` - To be used for simple changes such as grammar or spelling fixes, or other changes that do not impact the competency of the model
* `major` - To be used for all changes that impact the model, but do not impact how the maturity is scored, such as supplemental guidance or enhancements to activity descriptions
* `scoring` - Changes to the model that impact how the model is scored, such as changes that impact the questionnaire, model structure, or other significant components of SAMM

Therefore, a branch name for a spelling fix might look something like: `minor-yk-spelling-governance`

### Step 4 - Make changes

Now you can make changes to the model using your favorite text editor without fearing breaking the website.

**Editable Directories in Hugo**

* `samm/Current Releases/head/core` - This directory hosts markdown files containing descriptions of activities
* `samm/Website/hugo/data` - This directory hosts YAML files containing data-driven elements of SAMM, such as questions and scoring attributes

_Please, do not make changes outside of the directories above without speaking to a member of the core team_

### Step 5 - Commit / Push 

Once changes have been made and saved locally, it's time to push the changes (including the new branch) to the repository, which will allow a member of the core team to review and merge into the `master` branch.  To do this, first you need to identify files you would like to add (stage) to the commit process by executing:

```bash
git add <filename>
```

Alternatively, to add all changed files you can execute:

```bash
git add .
```

Next, we commit changes by executing:

```bash
git commit -m "<Brief comments describing the changes"
```

Finally, we push or save changes back to Github by executing;

```bash
git push origin <branch-name>
```

### Step 6 - Submitting changes for review

Now that your changes have been saved on Github, the last step is to submit these changes for review.  To do this, login to [Github](https://github.com), and in the `samm` repository you should see the `Compare & pull request` button next to your name branch.  

{{< figure src="/img/contributing/pull-request-1.png"  >}}

Once clicked, Github will prompt you for any additional comments following which the request can be submitted using the `Create pull request` button.

{{< figure src="/img/contributing/pull-request-2.png"  >}}

### Step 7 - Cleaning up

Before you make any other contributions, you may want to switch back to the master branch by executing:

```bash
git checkout master
```

Then you can delete your local branch (since it's already been submitted) by executing:

```bash
git branch -d <branch-name>
```

And finally you can always synchronize or update from the master by executing:

```bash
git pull
```

This is meant to be a light introduction to using Git with OWASP SAMM.  Please, consult Google should you run into any issues.  There are also a number of IDEs like VS Code that can help automate many of the steps outlined above.


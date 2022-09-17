---
title: Git - Getting started
date: 2020-04-14 18:39:00
lastedited: 2022-09-17 06:28:00
author: Darshan Sudhakar
tags: ['Git', 'Source control', 'Ungit']
---

Git is not that complicated as it seems to be. It is just like driving a motorcycle for the first time. We would sweat the crap out on day 1. By the time we reach day 10 its like walking in a park. 

Learning Git is easy when Git is our first source control tool. Now, you might be thinking what is this source control tool. Source control tool is a common place where we save all our source code. Tomorrow when a new developer joins the project. He can access all source control tool at one place. Some examples of source control tools are Git, TFS, SVN and Perforce (Dont worry about these names now. But, make sure you memorize these names later to show off in front of your boss :wink:)

If you are somebody who is already aware of other source control tools like SVN, Perforce, or TFS. It sometimes becomes tough to understand Git. Why? Because, you gotta unlearn the old ways and re-learn this new thing. I agree it is a little painful :syringe: ; felt the same when I had to learn Git.

The intension of this blog is to make this journey a little painless :pill:

[XKCD](https://xkcd.com/) cartoon below points out on how difficult the Git product is. But trust me these short terms pain are worth long term gains.

![Difficult and amazing Git](./images/xkcd-git.png)

## So what is Git?

It is a Distributed Version Control System. Or, in simple words you use Git to save code in a common place when all the developers can access. It not only saves the code but also keeps track of changes that were being made to the source code over a period of time. 

However, Git can also be used to store other digital information. I use Git to store eBooks, Notes, PDFs, sketch notes and sometimes even data (For AI & ML). It also supports multiple saves by multiple users at the same. Cool na!

## So Why use only Git? Why not continue to use the others?

Git is famous among Open source software development community. Almost every commercial software firm uses Git. Git saves a lot of time in branching and merging. Long ago when I started my career as a fresher. We used Tortoise SVN as a source control tool. I was given the job of branching and merging at the begining of every sprint. We used to take good two days to branch and merge in Tortoise SVN repository. Where as Git takes a few minutes to branch and merge. This was one of the primary reasons why people and organisations embraced Git.

## How to use Git?

We start with commands while learn Git. Git commands are great. However, by using only command it becomes a little difficulat to understand Git. We need is a visualization tool to understand Git. I chose Git on Visual Studio Code with a Visulization tool. 

## So how do we go about learning Git

We need to understand Git theoritically first. Below is the aproach that had worked for me

Things to do before you start

1. Install Visual Studio Code
2. Watch a Git video on YouTube. I used the one that explains Git using Visual Studio Code. You can find it [here](https://youtu.be/IHaTbJPdB-s?t=527)
3. Just follow the steps that is shown in video to create a repo and to clone the repo (For those who do not have access to YouTube due to some crazy firewall setting can easily watch using their smart phones)
4. Visual Studio Code comes with a Git visualization tool called [Ungit](https://github.com/FredrikNoren/ungit). Using Ungit you could visualize what is actually happening with each Git command. To understand Ungit please watch this [video](https://youtu.be/hkBVAi3oKvo).
5. The next step would be to try creating a new branch and merging it into main branch using Visual Studio Code.
6. Now open git [cheat sheet](https://github.github.com/training-kit/) and try to reading more about each commands and experiment

By following the above steps you would have a decent amount of knowledge on Git. However, to progress further we have know how Git branching and merging works. More importantly we gotta visualize how branching and merging happens in Git. This can be easily done by using [Learn Git Branching](https://learngitbranching.js.org/) tool.

![Learn Git branching](./images/learn-git-branching.png)

All you have to do is to play around with this tool. 

## Final opinion

It took me some time to learn and understand the basic elements of Git. But by using the above method I retained what I learned for a really long time.  

### Other tools worthy of a mention

- <https://git-scm.com/download/gui/win>
- <http://git-school.github.io/visualizing-git/>

## References

- [Google trends](https://trends.google.com/trends/explore?date=all&geo=US&q=git,svn)
- [Stack exchange](https://softwareengineering.stackexchange.com/questions/136079/are-there-any-statistics-that-show-the-popularity-of-git-versus-svn)
- [Stack Overflow Survey 2022 - Version Control](https://survey.stackoverflow.co/2022/#technology-version-control)
- [XKCD](https://xkcd.com/)

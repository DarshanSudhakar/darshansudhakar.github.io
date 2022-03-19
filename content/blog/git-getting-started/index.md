---
title: Git - Getting started
date: 2020-04-14 18:39:00
author: Darshan Sudhakar
tags: ['Git', 'Source control']
---

Here is a simple way to understand Git for first-timers.

Learning Git is easy when Git is your first version control tool. But it becomes a little difficult for somebody who is already aware of other version control tools like SVN, Perforce, or TFS. Why? We feel we need to unlearn and re-learn something. And this is always a pain.

So, in this blog, I will suggest some tricks, tools, and tips through which you can understand Git. By following this blog you need not unlearn anything. You just have to learn a new thing. So half of your problem is now solved.

## So what is Git?

Is a Distributed Version Control System. In simple words you use Git to checkin code. However, you can use Git to store other digital information. Other than code I also use Git to save eBooks, Notes, PDFs, sketch notes and sometimes even data (For AI & ML)

## Why Git? Why not continue to use the others?

Git is famous among Open source software development community and now almost every commercial software entity uses Git.

Why does majority of organisations use Git? Because it save a lot of time in branching and merging. Let me tell you a story of mine. Long ago when I started as a fresher. We used Tortoise SVN as a source control tool. I was given the job of merging and branching at the begining of every sprint. And it used to take good two days to branch and merge three source control repository.

The organisation wanted to be more agile so they had to introduce Git. Git hardly takes few minutes to branch and merge.This was one of the reasons organisations embraced Git.

## How to use Git?

We start with commands while learn Git. Git commands are great. However, it is not the best way to understand Git.

Even [XKCD](https://xkcd.com/) has commented how difficult (yet amazing) the product is.

!.[Difficult and amazing Git](./images/xkcd-git.png)

## So how do we go about learning Git

We need to understand Git theoritically first. More importantly we gotta visualize how branching and merging happens in Git.

Below is the aproach that has worked for me

Things to do before you start

1. Install Visual Studio Code and create a Github repository (You can also use BitBicket, Azure Devops or any other source control site)
Try creating a branch from Visual Studio Code. Refer any Youtube video to do this
2. Here is an important step. We need visualize what is happening with each command. So we use the repo visualization tool [Ungit](https://github.com/FredrikNoren/ungit){:target="_blank"}. There is a nice [video](https://youtu.be/hkBVAi3oKvo){:target="_blank"}  about Ungit.
3. There is an extension for Ungit in Visual studio. Install and it and see the magic. It visualizes Git operations. Now try creating a new branch and merge it in Visual Studio.
4. Open git [cheat sheet](https://github.github.com/training-kit/){:target="_blank"}

!.[Learn Git branching](./images/learn-git-branching.png)

Git packages also come with IDEs like Visual Studio or VS Code. So you can use Git directly inside these IDEs as well.

## Final opinion

Once I learned Git. I did not feel like switching to another source control tool.

### Other tools worthy of a mention

- Branching is the most important concept of Git. Branching can be visualized using the branch [visualization online tool](https://learngitbranching.js.org/){:target="_blank"}. Go ahead and play here for few minutes (You may skip this if you feel you are confident of using Git)
- <https://git-scm.com/download/gui/win>
- <http://git-school.github.io/visualizing-git/>

## References

Google trends - <https://trends.google.com/trends/explore?date=all&geo=US&q=git,svn>
<https://softwareengineering.stackexchange.com/questions/136079/are-there-any-statistics-that-show-the-popularity-of-git-versus-svn>

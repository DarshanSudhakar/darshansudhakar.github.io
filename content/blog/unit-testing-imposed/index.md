---
title: Unit testing imposed with a code coverage target! Omg! (Part 1)
date: 2020-06-1 18:39:00
author: Darshan Sudhakar
tags: ['Unit testing', 'Refactor', 'Software Design']
---

In of the previous company that I work we had a change in top level management all of a sudden. This new management asked us to implement unit tests.

The last time I had implemented unit tests was 2 yrs ago. It was implemented for a ASP.NET MVC project whose service was hosted on Azure Service Fabric.

Basically it was implemented only to test the filteration logic based on the parameter recieved.

However, the current project was on Winforms and most of the code was in UI. We weren't sure how to implement unit test cases. The most interesting this was we had to give a unit test case coverage of 50%. 50% was kept because unit tests were implemented for the first time.

The project that I worked on was based on plugin architecture. What our application (or plugin) did was it called third party services related to property search and we had display the results on the UI. We used to charge the vendor for each transactions.

But our project was built on top of a framework. This framework was used to access data from  parent application (remember this was a plugin).

Now we started implementing the unit tests and found out it was highly impossible to mock some dependency. One reason was that the framework that we used to create the plugin was very old and was not supporting certain behaviours that we needed for unit testing.

An interesting event happened a few month when this unit test coverage target was imposed. We had people leaving the company after 3-4 months. And the ones that were going were so pissed off. One resignation email literally stated

I am not able to spend enough time with my family and husband. Hence I would like to resign.

Was the management wrong in asking to write unit tests? Was imposing 50% of unit test coverage the reason? Nobody was sure. I had an oppertunity to speak to few of my fellow drop out friends. They were very happy that they were leaving. Here are some of the problems that were related to pains that incurred while implementing unit test

### Unit testing hours weren't adequate

Lets say you have to consume a property search service from Google and you quote 9-12 hours. Why? Previously that person had implemented a similar service and he had quoted somethng similar number. And, 4 hours of unit testing.

**Task**|**Estimates**
:-----:|:-----:
Invoking the property search from plugin| 12 hrs
Adding unit tests| 4 hrs

While he started implementing it. He took more hours and to work extra hours. He said writing the code was easy by adding test case and gaining code coverage was very tough.

So next time he quote 12 hrs for implementation and 8 hrs for adding unit test cases. The experienced folks did not agree saying you are quoting two thirds of development effort and it is tough to justify to stakeholders. This happened over and over again and he had to quit.

To be frank even I was facing the same problem and this was my first time with an age old technology Winforms

### Framework had some features that was not easy to mock

Yes the framework was a little old. Because of this some features could not be mocked. Code coverage got reduced. And, no initiative was taken to correct this in the framework.

### Experienced developers were not giving any guidelines or help to younger ones

The folks also cribbed that experienced developers did not extend the helping hand. Either they are too tied up or they do not know how to implement it.

All the the reason to an extent were true. I did feel the pain myself. For me there was an additional overhead to train the others and I was getting requests from other team.

Now why is unit testing tough and how can we make life easier for our fellow developer.

The answer to this lies in the next installment of this blog. Please stay tuned!!!

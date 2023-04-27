---
title: Unit testing imposed with a code coverage target! Do not worry!
date: 2020-06-1 18:39:00
author: Darshan Sudhakar
tags: ['Unit testing', 'Refactor', 'Software Design', 'Winforms']
---

This happened in one of my previous company. We were working on a C# and .NET project. We got a request, all of a sudden, to start unit tests implementation with atleast 50% of code coverage.

In this project, units tests were not implemented previously due to some technical issues. It seems that the product was architected not keeping unit tests in mind.

The UI of the current project was on Winforms and most of the business logic was in the code behind of the UI. Again why? People must have chosen to do so because the UI components were small and were doing a very specific task. Seems like the developer did not expect this to change anytime soon.

The project that I worked on was based on a plugin architecture. Our plugin connected to other third party services, fetched data, and displayed result. It is as simple as that.

So, we started implementing the unit tests. But, we did not know where to implement unit tests.

Here is how we started

By definition unit tests are implemented on the unit of work. Like I said previously, our plugin connected to a third party service. Lets me make this easier for you by taking an example. Assume that our plugin is hitting the Google API to find properties that are for sale in a locality (I dont think Google currently gives any such service).

Now, you have a requirement to filter it by a certain criteria say by price. Applying filter is a unit of work with its own logical operation. So, we have an oppertunity to write unit tests.

Generally, we write this logic in the code behind. By doing this we make our life difficult. Targetting, unit tests for logic written in code behind is not a good practice.

So, lets move this filter logic to seperate class file in a new project. By doing this we can gracefully test the logic.

Now, how do we call this method in UI. Here comes MVP (Model-View-Presenter) pattern to the rescue. Your presenter will make a call the newly created Filter class file and get the filtered list.

Here is the implementation part. All is not good and rosy when you are working on unit tests for the first time. Especially in legacy project that has technology stack like Winforms.

### Clear boundary between unit and integration tests

There is a natural tendency to make the Google API call while writing unit tests. We should not be making any call to the APIs while we are writing Unit test cases. Why?

- we are testing the logic and not API here
- API testing is handled by another set of tests called the Integration tests
- takes a lot of time to complete unit tests

If a situation arises the demands the need to call an API method. Then we need to mock the API call using mocking frameworks.

### Framework had some features that was not easy to mock

Yes the framework was a little old. Because of this some features could not be mocked. Code coverage got reduced. These are few things that are beyond ones control. So, do not worry about this as of now.

### Code coverage

Generally, unit test are measured in terms of code coverage. However, I feel it is not the only metrics. Why? We can cover the entire UI code with unit tests.

So, the thumb rule is to

- segregate logical units to different classes and group them into projects
- then make sure you have a close to 100% coverage on the code for these logically grouped projects
- also, get a peer code review where the reviewer would do a boundary value analysis

### Presenting the unit test case coverage with stakeholder

Generally, the code coverage is measured in the CI pipeline. If the unit test case coverage is taken for all the projects (including the UI), then coverage would dip. So, it makes sense to check coverage only for those projects where the code is performing certain logic. In our case the project that performs filtering is the right candidate for code coverage.

Visual studio gives us way to include only certain projects in the code coverage report and exclude other. This can be configured using the runsettings file. [Here](https://learn.microsoft.com/en-us/visualstudio/test/customizing-code-coverage-analysis?view=vs-2022#include-or-exclude-assemblies-and-members) is a microsoft link that give a quick illustration.

Make sure you discuss will the stakeholder before including or excluding your projects in the code coverage report.

### Estimation the tasks that includes implementation of unit test cases

Lets say you have to consume a similar search service from Google and you quote 9-12 hours in your estimations. This is because previously you had implemented a similar service and had taken 9-12 hours. Now, with unit testing coming in picture. You will have a natural tendency to add 4 - 5 hours extra for unit test case projects.

**Task**|**Estimates**
:-----:|:-----:
Invoking the property search from plugin| 12 hrs
Adding unit tests| 4 hrs

The trouble arises when you start implementing unit test cases. It is easy to write unit test cases but difficult to write code that is unit testable. So, generally when you start writing unit test cases for the first time it is advised at a buffer of 80-100%. So, your estimation now changes to

**Task**|**Estimates**
:-----:|:-----:
Invoking the property search from plugin| 12 hrs
Adding unit tests| 8 hrs

100% buffer is too high. None of the stakeholders would approve this. But, remember, this estimation is only for the first time when the team attempts add unit test cases. This would also apply to any new team member in the project.

However, as an when the team member gets aquainted to the project. The member would take very little time to write unit testable code and would take less than 4 hrs to write unit test case in the third or fourth interation.

### Save time and money

If you have reached reading till here then I am sure that you are really interested in implementing unit test and code coverage in the right way.

So, here are some bonus features that unit tests will provide you
By writing unit tests, we as a developer, will be more confident in making changes. Imagine if there is a small modification in the requirements. You make that change. But, you are not sure if this change breaks any existing functionality. So, you need not retest every feature manually. Just run the unit test cases and check if there are any failed test cases. If not then you are good to go.

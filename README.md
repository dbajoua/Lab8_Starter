# Lab 8 - Starter

Aleksandra Desens, Delvin Bajoua

Question 1
Answer: Within a Github action that runs whenever code is pushed.
Automatically running tests at every push ensures that no faulty code is deployed. If any of the tests fail, application would not be deployed and the last working version would be preserved. The purpose of automated tests is for scripts to automatically test new and existing software.

Question 2
Answer: No. 
Testing a single fuction should be handled by unit testing. End to end would be very slow and inefficient, as it tries to replicated the user's actions from beginning to end. Unit testing helps to check individual functions to make sure proper functionality in the code. For instance, this can be used to check proper return value of a function.

Question 3
Answer: No.
Testing a feature should be tested by feature testing. Unit testing can test only isolated components of that feature, not the overall process. End to end testing tries to repeat the workflow of the user from the start to the very end, which would serve more appropriate in testing a user writing and sending a message to another user. 

Question 4
Answer: Yes.
Checking max message length should be handled by a single function and that can be effectively tested by a unit test. A unit test helps test an individual part of the code, and thus an appropriate tool to ensure max message length quickly and efficently. 
   
   
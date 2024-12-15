# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates an example of an unhandled promise rejection error in a Node.js HTTP server and provides a solution.

## Bug Description

The Node.js application produces an 'Unhandled promise rejection' error. This is a common issue stemming from asynchronous operations where a promise is rejected, but there's no `.catch()` block to handle the rejection.  The provided code shows a basic HTTP server; the error would typically originate from a part of the codebase not shown (often involving file system access or network requests). 

## Solution

The solution involves adding `.catch()` blocks to handle potential rejections appropriately. This prevents the application from crashing and allows for graceful error handling and logging.

## How to Run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (to see the error) and `node bugSolution.js` (to see the solution).
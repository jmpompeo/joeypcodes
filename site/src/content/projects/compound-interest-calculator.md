---
title: Compound Interest Calculator
summary: An Azure Function powered calculator that helps users explore investment growth scenarios with configurable schedules and contribution logic.
role: Creator
tech:
  - C#
  - Azure Functions
  - .NET 8
  - Bicep
  - Playwright
tags:
  - fintech
  - automation
outcomes:
  - Delivered configurable schedules with monthly, quarterly, and annual compounding.
  - Added automated regression tests to validate computation edge cases.
  - Published reusable IaC templates for one-click environment provisioning.
github: https://github.com/joeypcodes/compound-interest-calculator
order: 1
---

## Overview

This calculator began as a learning exercise in applying financial formulas to real-world scenarios. It grew into a polished experience with validation, automated checks, and scripted infrastructure so the tool could be deployed in minutes.

## Approach

- Modeled investment schedules as composable records to support different compounding rules.
- Wrapped calculation logic in Azure Functions for scalable, serverless execution.
- Added Playwright-driven UI tests to ensure the Blazor front end always reflected the correct totals.

## Highlights

- Automated infrastructure with Bicep modules and GitHub Actions deployment.
- Alerting via Azure Monitor to track executions and identify anomalies.
- Structured documentation so teammates can adapt the solution for their own workloads.

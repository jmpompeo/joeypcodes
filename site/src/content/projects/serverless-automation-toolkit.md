---
title: Serverless Automation Toolkit
summary: A reusable toolkit for streamlining DevOps automation using Azure Functions, durable workflows, and GitHub Actions integrations.
role: Lead Engineer
tech:
  - Azure Functions
  - Durable Functions
  - GitHub Actions
  - C#
  - Azure Storage Queues
  - Bicep
tags:
  - automation
  - devops
outcomes:
  - Reduced deployment time by 40% through reusable pipeline templates.
  - Enabled event-driven operations with managed queue workers and alerts.
  - Standardized environment provisioning across staging and production.
github: https://github.com/joeypcodes/serverless-automation-toolkit
order: 2
---

## Overview

This toolkit bundles the patterns Joey uses most often when automating workflows for teams: resilient jobs, consistent environment configuration, and clear observability. It accelerates onboarding to Azure automation.

## Approach

- Designed infrastructure with composable Bicep modules for rapid environment setup.
- Implemented durable functions to coordinate long-running automation with retries.
- Packaged GitHub Actions workflows for CI/CD, secrets rotation, and release automation.

## Highlights

- Centralized logging and dashboards to monitor automation runs in real time.
- Secure secret management using Azure Key Vault and GitHub OpenID Connect.
- Documentation that walks through extending the toolkit for team-specific workflows.

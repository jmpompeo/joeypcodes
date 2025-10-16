---
layout: ../../layouts/ProjectLayout.astro
title: DevOps Observability Dashboard
summary: A real-time dashboard surfacing deployment health, pipeline throughput, and error insights across distributed services.
role: Platform Engineer
tech:
  - Azure Monitor
  - Azure Dashboards
  - Kusto Query Language
  - Power BI
  - .NET 8
  - Azure Functions
tags:
  - observability
  - dashboards
outcomes:
  - Consolidated telemetry from six services into a single view with alerting.
  - Cut incident response time by surfacing deployment regression signals immediately.
  - Enabled leadership reporting with automated exports to Power BI.
github: https://github.com/joeypcodes/devops-observability-dashboard
order: 3
---

## Overview

The DevOps dashboard project solved for scattered observability by consolidating metrics, traces, and deployment events across services into one actionable view for engineers and stakeholders.

## Approach

- Streamed Azure Monitor metrics into consolidated Kusto tables for fast queries.
- Automated dashboard provisioning using .NET CLI tooling and Bicep modules.
- Integrated deployment metadata from GitHub Actions to correlate code changes with incidents.

## Highlights

- Role-based dashboards with custom filters for SRE, QA, and leadership teams.
- Automated weekly status reports delivered straight to Microsoft Teams.
- Alert tuning playbooks that reduced false positives by 60%.

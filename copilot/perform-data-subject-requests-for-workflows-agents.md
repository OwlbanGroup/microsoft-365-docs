---
title: Perform data subject requests (DSRs) for Workflows agents
description: Learn how to perform DSRs for Workflows agents, and admin features like export, delete, and reassign.
author: kisubedi
manager: HeatherOrt
ms.author: kisubedi
ms.date: 04/21/2026
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.reviewer: v-aangie
ms.update-cycle: 180-days
---

# Perform data subject requests (DSRs) for Workflows agents

Before performing a DSR, you must identify where the user's *Workflows* data resides.

## Identify the scope

1. Locate the Environment: Navigate to the [Power Platform admin center](https://admin.powerplatform.microsoft.com/), **Inventory**.

1. Check two locations. Workflows artifacts are typically in one of two places:

    - The default environment of the tenant or user's Personal Development Environment (PDE).
    - [_M365 Copilot Workflows_ environment](workflows-environment-workflows-agents.md) (for new flows created after April 2026).

1. Go to **Inventory**, filter by the user's email, and make a note of the **Environment ID** where their Workflows agents are listed.
   You'll either see an environmentID value in the Environment ID column, which corresponds to ID of PDE/Default environment.
   OR, a URL link containing the environmentID of _M365 Copilot Workflows_ environment in your tenant.

## DSR on _M365 Copilot Workflows_ environment

DSR on _M365 Copilot Workflows_ environment is strictly API-based. Once you have necessary roles mentioned in the following table, you can reference the  [DSR Compliance table](/rest/api/power-platform/workflowsagent/dsr-compliance) to perform DSR operation on _M365 Copilot Workflows_ environment.

### API permissions setup

Learn more about permissions needed for API access in [Role-based access control (RBAC) permissions](/power-platform/admin/security/role-based-access-control).

The following table provides specific permissions for Workflows agent DSR.

| Role name | Role ID | Description | Assignable scope |
| :--- | :--- | :--- | :--- |
| Workflows agent Data Subject Rights Environment Reader | `38a014c1-0485-4e5e-b784-782ea373b34b` | Grants full access to perform read operations for Data Subject Rights requests for Workflows agent flows for a given environment. | `/tenants/{0}/environments/{1}` |
| Workflows Agent Data Subject Rights Administrator | `363ee124-fdb2-406f-9272-ebf239730ed2` | Grants full access to perform read and delete operations for Data Subject Rights requests on Workflows Agent Flows | `/tenants/{0}` |

Find a tutorial for customers in [Assign roles to service principals](/power-platform/admin/programmability-tutorial-rbac-role-assignment?tabs=PowerShell).


## DSR on PDE/Default environment

Each Workflows agent's workflows are backed by specific Dataverse entities. Because these aren't surfaced in the standard Power Automate UI, you must use the following methods to locate them.

## Method A: Web-based management (UI)

For a manual, UI-based approach, navigate to the environment identified in [Identify the scope](#identify-the-scope) and use the **Tables** view in Power Apps or the maker portal.

In the identified environment, refer to the following Dataverse entities on the environment to perform DSR export/delete.

| Target data | Dataverse table |
| :--- | :--- |
| Process | Workflows (Category 5: Modern Flow *and* ModernFlowType: M365CopilotFlow) |
| Process | AI Flows (Category 7: AI Flow) |
| ConnectionReference | Connections |
| AI Model | AI Prompts - AI Model |
| AI Configurations | AI Prompt Prompt Data |
| WorkflowMetadata | WorkflowMetadata |
| FlowRun | Flow Run (If Flow Run Ingestion is enabled) |
| AI FlowRun | Flow Run |
| Approvals | Approvals (Subject to a 28-day automatic deletion retention policy) |

## Method B: API-based management (bulk/automation)

If you're handling multiple requests, use the environment-scoped APIs.

| API | Notes |
| :--- | :--- |
| [Get Conversation Transcripts With Environment](/rest/api/power-platform/workflowsagent/dsr-compliance/get-conversation-transcripts-with-environment) | Get conversation transcripts for DSR export (environment-scoped). |
| [Get Flow Run Actions With Environment](/rest/api/power-platform/workflowsagent/dsr-compliance/get-flow-run-actions-with-environment) | Get flow run actions for DSR export (environment-scoped). |
| [Get Flow Runs (default/PDE)](/rest/api/power-platform/workflowsagent/dsr-compliance/get-flow-runs-non-singleton) | Get flow runs for DSR export (environment-scoped). |
| [Get Run History Data (default/PDE)](/rest/api/power-platform/workflowsagent/dsr-compliance/get-run-history-data-non-singleton) | Get run history customer data for DSR export (environment-scoped). |

### API permissions setup

Learn more about permissions needed for API access in [Role-based access control (RBAC) permissions](/power-platform/admin/security/role-based-access-control).

The following table provides specific permissions for Workflows agent DSR.

| Role name | Role ID | Description | Assignable scope |
| :--- | :--- | :--- | :--- |
| Workflows agent Data Subject Rights Environment Reader | `38a014c1-0485-4e5e-b784-782ea373b34b` | Grants full access to perform read operations for Data Subject Rights requests for Workflows agent flows for a given environment. | `/tenants/{0}/environments/{1}` |

Find a tutorial for customers in [Assign roles to service principals](/power-platform/admin/programmability-tutorial-rbac-role-assignment?tabs=PowerShell).

### Export

Admins can export all data pertaining to a user's usage on Workflows agents. Learn more in the following articles:

- [List flows for a user](/connectors/flowmanagement/#list-flows-as-admin-(v2))
- [Get flow definition](/connectors/flowmanagement/#get-flow-as-admin)

### Delete/Reassign

Admins can delete/reassign Workflows agents created by a user. Learn more in [Reassign and copy the user's flows](/power-automate/privacy-dsr-delete#reassign-and-copy-the-users-flows).

The following list contains resources about DSR requests:

- [Responding to DSR delete requests for Microsoft Dataverse customer data](/power-platform/admin/dataverse-privacy-dsr-guide)
- [Responding to DSR delete requests to delete Power Apps customer data](/power-platform/admin/powerapps-privacy-delete-dsr)

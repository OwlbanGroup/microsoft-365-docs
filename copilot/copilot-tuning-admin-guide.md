---
title: "Microsoft 365 Copilot Tuning admin guide (early access preview)"
f1.keywords:
author: lauragra
ms.author: lauragra
manager: calvind
ms.date: 04/13/2026
ms.reviwer: riyazp
ms.update-cycle: 180-days
audience: Admin
ms.topic: overview
ms.reviewer: riyazp
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection: 
- m365copilot
- magic-ai-copilot
description: "Find admin guidance for enabling Copilot Tuning in your organization."
---
# Microsoft 365 Copilot Tuning admin guide (early access preview)

Microsoft 365 Copilot Tuning (early access preview) is an AI customization capability that enables organizations to create task-specific Copilot agents by tuning large language models (LLMs) with their own organizational data. AI admins manage Copilot Tuning through the Copilot control system in the Microsoft 365 admin center. Copilot Tuning provides multiple layers of control to balance innovation with governance.

This article describes how administrators manage Microsoft 365 Copilot Tuning, including role requirements, availability controls, agent lifecycle management, and data protection considerations.

[!INCLUDE [copilot-tuning-preview](./includes/copilot-tuning-preview.md)]

## Tuning availability settings

Admins can control who can access Copilot Tuning at the tenant level. Three availability options are supported:

- **Enable for all users:** All Microsoft 365 Copilot–licensed users in the tenant can tune agents, including context tuning, tool tuning, and model tuning. This setting is the default setting for eligible tenants.
- **Enable for specific users or groups:** Admins explicitly select individual users or Microsoft Entra security groups that are allowed to tune agents. Users who aren't enabled can request access through an in-product flow, which requires admin approval.
- **Disable tuning:** Admins can disable Copilot Tuning entirely for the tenant. This setting blocks new tuning activity and prevents the use of tuned agents until tuning is reenabled.

## Tuning availability scenarios and transitions

The following table summarizes how Copilot Tuning behaves across common availability settings and transitions.

| Scenario | Untuned agents (from templates) | Tuned agents (already created) | In-flight tuning jobs | Ability to tune further | Ability to use agents (inference) |
|--------|--------------------------------|--------------------------------|-----------------------|-------------------------|-----------------------------------|
| Tuning enabled for all users | Available | Available | Allowed | Yes | Yes |
| Tuning enabled for specific users or groups | Available | Available | Allowed only for authorized users | Only for authorized users | Yes |
| Tuning disabled | Available | Available | Not allowed | No | Yes |
| Transition: enabled → limited | Preserved | Preserved | Blocked for non-authorized users | Blocked for non-authorized users | Yes |
| Transition: enabled or limited → disabled | Preserved | Preserved | Blocked | No | Yes |

:::image type="content" source="media/copilot-tuning-admin-guide/scenarios.png" alt-text="Screenshot that shows tuning availability scenarios." lightbox="media/copilot-tuning-admin-guide/scenarios.png":::

These behaviors ensure that existing agents remain usable while giving admins fine-grained control over who can continue tuning.

## Request access flow

When tuning is enabled for specific users or groups, users without access can submit a request from within the product. Requests include a business justification and appear in the Microsoft 365 admin center for review.

Admins can approve or deny requests and control whether access is granted temporarily or on an ongoing basis.

## Open-source model tuning control

Copilot Tuning includes a dedicated control that allows admins to enable or disable the use of open-source or external base models.

This setting provides more governance for organizations that want to restrict tuning to Microsoft-managed models only. When disabled, users can still tune agents, but only with supported proprietary models.

The following table summarizes the Copilot Tuning admin controls.

| Control | Enable for all users | Enable for specific users or groups | Disable tuning |
|--------|----------------------|-------------------------------------|----------------|
| Who can fine-tune | All users with a Microsoft 365 Copilot license in the tenant. | Only specified users or Microsoft Entra security groups with a Copilot license. | No users. Copilot Tuning is disabled for the tenant. |
| Just-in-time access requests | Not applicable. All eligible users already have access. | Supported. Users who aren't enabled can request tuning access from within the product. Admin approval is required in the Microsoft 365 admin center. | Not applicable. Access requests are not available when tuning is disabled. |
| Open-source model option | The toggle is available. Admins can allow or block the use of open-source base models for all users. | The toggle is available. If disabled, open-source base models are blocked even for authorized users. | Not applicable. |
| Example scenario | Organization enables tuning broadly to support innovation across teams. | Organization runs a pilot or controlled rollout, such as enabling tuning only for research or legal teams, with access granted through approvals. | Organization pauses tuning to mitigate risk or respond to a security or compliance concern. |

:::image type="content" source="media/copilot-tuning-admin-guide/open-source-tuning-control.png" alt-text="Screenshot that shows Copilot Tuning admin controls." lightbox="media/copilot-tuning-admin-guide/open-source-tuning-control.png":::

## Agent visibility and lifecycle management

Fine-tuned agents appear as **tuned agents** in the Agent 365 portal. This portal provides a centralized inventory of all tuned agents in the tenant.

From the Agent 365 portal, admins can:

- View all tuned agents.
- Block or disable an agent to immediately restrict usage.
- Delete a tuned agent if it becomes obsolete or problematic.

Deleting a tuned agent also deletes the associated fine-tuned model and snapshot data.

Admins can change tuning availability settings at any time without service downtime. User interfaces update dynamically to reflect current access.

## Eligibility requirements

Copilot Tuning is an advanced capability. During public preview, only tenants with at least **5,000 Microsoft 365 Copilot licenses** are eligible.

- If a tenant meets the eligibility threshold, Copilot Tuning appears in the admin center and is enabled by default.
- If a tenant doesn't meet the threshold, Copilot Tuning settings aren't available.

## How tuning access changes affect existing agents

Changes to Copilot Tuning availability are **forward-looking**. Adjusting who can tune agents—or disabling tuning entirely—does not remove or break agents that already exist.

The following behaviors apply when tuning access is changed:

- **Existing agents are preserved.**  
  Agents created from templates (whether tuned or not) remain available for use.

- **Inference is unaffected.**  
  Users can continue to use existing agents for inference, subject to the agent’s sharing and permission settings.

- **Further tuning depends on access.**  
  Users who no longer have tuning permission can’t modify, retrain, or further tune agents unless access is restored.

- **No rollback occurs.**  
  Copilot Tuning does not revert agents to a previous state when access is restricted or disabled. Transitions are intentionally non-destructive.

:::image type="content" source="media/copilot-tuning-admin-guide/tuning-changes.png" alt-text="Screenshot that shows behaviors that apply when tuning access changes." lightbox="media/copilot-tuning-admin-guide/tuning-changes.png":::

This model allows admins to confidently adjust tuning availability without disrupting existing business workflows.

## Data commitments, privacy, and compliance

Copilot Tuning adheres to Microsoft 365 data protection, privacy, and compliance commitments.

### Data handling during tuning

When a user performs Copilot Tuning, only the SharePoint content explicitly selected by the user is used as training data. For tuning purposes, the system creates a snapshot copy of that data.

- Snapshot data is stored in a tenant-isolated Microsoft 365 environment.
- Snapshot data is used solely for tuning and isn't shared across tenants.
- Snapshot data enables efficient tuning without repeatedly accessing live content.

:::image type="content" source="media/copilot-tuning-admin-guide/snapshot-data.png" alt-text="Screenshot that shows how snapshot data is handled." lightbox="media/copilot-tuning-admin-guide/snapshot-data.png":::

During public preview, snapshot data is retained for as long as the tuned agent remains active. When a tuned agent is deleted, its associated snapshot data is also deleted. Data used for tuning is subject to a maximum retention period of two years.

### Snapshot behavior and retraining considerations

When an agent is tuned, the system creates a snapshot of the selected SharePoint content. That snapshot has the following characteristics:

- **Access is captured at tuning time.**  
  Snapshot permissions reflect the access control lists (ACLs) at the time tuning occurs.

- **Snapshots aren’t automatically updated.**  
  If the underlying SharePoint content changes, the snapshot doesn’t change. To incorporate updates, the agent must be retrained.

- **Source policies don’t automatically apply.**  
  Data loss prevention (DLP) and retention policies applied to the original SharePoint content don’t apply to snapshot data.

- **Agent sharing is explicit.**  
  Tuned agents are available only to users and groups configured during tuning. The agent owner can update sharing settings at any time.

### Data residency

Copilot Tuning isn't enabled by default for tenants with Advanced Data Residency (ADR) commitments during public preview.

- ADR tenants that want to use Copilot Tuning must formally waive ADR requirements through their Microsoft account team.
- When ADR is waived, snapshot data is stored in the nearest macro region within a tenant-isolated Microsoft 365 environment.

For EU-based tenants, Copilot Tuning respects EU Data Boundary commitments. During public preview, EU tenant data and traffic remain within the EU.


### Data residency scope and limitations

Copilot Tuning follows Microsoft 365 data residency commitments at the **macro region** level. During public preview, the following considerations apply:

- **Macro region storage**  
  Training, inference, and snapshot data are stored in the macro region associated with the tenant. For tenants in local regions, data is stored in the nearest macro region.

- **EU Data Boundary**  
  For EU-based tenants, Copilot Tuning respects EU Data Boundary commitments. Tenant data and traffic remain within the EU during tuning and inference.

- **Advanced Data Residency (ADR)**  
  Copilot Tuning isn’t covered by Advanced Data Residency (ADR) or ADR for Education during public preview. Tenants with ADR that want to use Copilot Tuning must request access through their Microsoft account team.

- **Multi-Geo**  
  Multi-Geo data residency commitments don’t apply to Copilot Tuning during public preview.

Admins should evaluate these considerations carefully.

### GDPR and data subject rights

Microsoft acts as a data processor for content used in Copilot Tuning. The customer remains the data controller and is responsible for determining which data is used for tuning.

Copilot Tuning supports common data subject rights, including:

- **Discovery**: Admins can view all tuned agents in the Agent 365 portal.
- **Deletion**: Deleting a tuned agent removes the associated model and snapshot data.
- **Access and export**: Customers can request metadata about snapshot data through Microsoft Customer Support.


### GDPR, data subject rights, and DPIA considerations

Microsoft acts as a data processor for content used in Copilot Tuning. The customer remains the data controller and is responsible for determining which data is appropriate for tuning.

Copilot Tuning supports common data subject rights:

- **Discovery**  
  Admins can view all tuned agents in the Agent 365 portal.

- **Deletion**  
  Deleting a tuned agent removes the associated fine-tuned model and snapshot data.

- **Access and export**  
  Customers can request metadata related to snapshot data through Microsoft Customer Support.

Copilot Tuning doesn’t inherently require a data protection impact assessment (DPIA).

### Data protection impact assessments

Copilot Tuning doesn't inherently require a data protection impact assessment (DPIA). Whether a DPIA is required depends on factors such as:

- The type of data used for tuning
- The scale of processing
- Regulatory or industry-specific requirements
- Whether tuned agents are used for automated decision-making

Customers are responsible for determining whether a DPIA is required.

### Microsoft access to customer data

Microsoft doesn't have default access to customer data used for tuning or stored at rest. Any access requires explicit customer approval through Customer Lockbox and is limited to approved support scenarios.

## Related content

- [Copilot Tuning overview](copilot-tuning-overview.md)



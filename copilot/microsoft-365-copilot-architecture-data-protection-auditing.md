---
title: Microsoft 365 Copilot data protection architecture
f1.keywords:
- NOCSH
ms.author: deniseb
author: denisebmsft
manager: dansimp
ms.date: 04/07/2026
ms.update-cycle: 180-days
audience: Admin
customer-intent: As an IT professional, I want to understand how Microsoft 365 Copilot works with data protection, oversharing controls, and auditing features in Microsoft 365.
ms.reviewer: mandia, bcarter, ruihu, cabailey
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: security
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- trust-pod
- MCAT
description: Get descriptions and see diagrams that describe how Microsoft Purview data protection, SharePoint oversharing controls, and auditing work with Microsoft 365 Copilot. This article also shows how Microsoft Purview sensitivity labels, SharePoint oversharing controls, and Purview tools like eDiscovery and retention policies affect Microsoft 365 Copilot.
ms.custom: [copilot-learning-hub]
appliesto:
- ✅ Microsoft 365 Copilot
---

# How data is protected and audited in Microsoft 365 and Microsoft 365 Copilot

Microsoft 365 Copilot operates within the Microsoft 365 service boundary and honors the same data protection, access control, and compliance capabilities that apply across Microsoft 365.

This article describes the data protection architecture for Microsoft 365 Copilot. It explains how Copilot works with Microsoft Purview sensitivity labels and encryption, how SharePoint and OneDrive access controls affect Copilot, and where Copilot interaction data is stored for auditing and compliance scenarios.

This article is intended for IT administrators who want to understand how data flows through Copilot and how existing Microsoft 365 protections are enforced. It doesn't provide deployment steps or remediation guidance.

> [!TIP]
> To learn more how Microsoft 365 Copilot uses your data, see:
>
> - [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md)
> - [Security for Microsoft 365 Copilot](security-microsoft-365-copilot.md)

## How Microsoft 365 Copilot works with sensitivity labels and encryption

Copilot works with Microsoft Purview sensitivity labels and encryption to enforce access controls and protection settings during grounding and content generation.

:::image type="content" source="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-sensitivity-labels.png" alt-text="Diagram that shows how Copilot works with documents protected by Microsoft Purview sensitivity labels." lightbox="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-sensitivity-labels.png":::

In this flow:

- Copilot can only summarize or reference content that the user is authorized to access.
- When encryption is applied, the user must have EXTRACT and VIEW usage rights for Copilot to interact with the content.
- Items encrypted by Azure Rights Management without a sensitivity label still require EXTRACT or VIEW usage rights for the user for Copilot to summarize the content.
- In Copilot Chat interactions, sensitivity labels can be displayed for returned data. The response reflects the highest‑priority label.
- When Copilot generates new content based on labeled sources, the highest‑priority sensitivity label is inherited when supported.
- Protection settings remain enforced even when labeled files are stored outside the Microsoft 365 tenant.

> [!NOTE]
> User-defined sensitivity label permissions can block Copilot from extracting and interacting with the file content. For example, Copilot agents can't read files that have user-defined sensitivity label permissions.

To learn more, see the following articles:

- [Get started with sensitivity labels](/purview/get-started-with-sensitivity-labels)
- [Microsoft Purview strengthens information protection for Copilot](/purview/ai-microsoft-purview#microsoft-purview-strengthens-information-protection-for-copilot)

## How SharePoint and OneDrive access controls affect Copilot

SharePoint and OneDrive access controls influence what Copilot can discover and reference, without changing user permissions.

:::image type="content" source="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-oversharing-controls.png" alt-text="Diagram that shows how SharePoint and OneDrive access controls affect Microsoft 365 Copilot." lightbox="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-oversharing-controls.png":::

These controls include:

- Search and discovery settings that limit which sites appear in Copilot and organization‑wide search.
- Sharing and membership controls that affect how broadly content can be accessed.
- Governance and lifecycle policies that reduce long‑term oversharing risk.
- Information protection policies that restrict Copilot access based on sensitivity labels and DLP conditions.

For prescriptive remediation guidance, see [Secure & governed data foundation for Microsoft 365 Copilot: A deployment blueprint](secure-govern-copilot-foundational-deployment-guidance.md).

## Where Copilot usage data is stored and how it's audited

Copilot interaction data is stored within Microsoft 365 services and can be discovered, audited, and retained using Microsoft Purview capabilities.

:::image type="content" source="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-auditing-tools.png" alt-text="Diagram that shows how Microsoft Purview auditing, eDiscovery, and retention features apply to Microsoft 365 Copilot." lightbox="media/microsoft-365-copilot-architecture-data-protection-auditing/copilot-auditing-tools.png":::

Microsoft 365 can capture:

- Audit records for Copilot prompts, responses, and referenced content.
- Copilot interaction data for eDiscovery and compliance investigations.
- Retained versions of referenced files through cloud attachments and Preservation Hold Libraries.
- User‑uploaded files stored in OneDrive Copilot Chat folders.
- Content created with Copilot Pages stored in user‑owned SharePoint Embedded containers.

Retention and deletion behavior follows configured Microsoft Purview retention policies. To learn more, see [Learn about retention for Copilot](/purview/retention-policies-copilot).

## Related content

- [Microsoft 365 Copilot architecture and how it works](/microsoft-365/copilot/microsoft-365-copilot-architecture)
- [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md)
- [Secure & governed data foundation for Microsoft 365 Copilot: A deployment blueprint](secure-govern-copilot-foundational-deployment-guidance.md)

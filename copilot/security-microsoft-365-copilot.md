---
title: Security for Microsoft 365 Copilot
description: Learn how Microsoft secures Microsoft 365 Copilot and how Copilot inherits Microsoft 365 security, compliance, and privacy protections.
ms.topic: conceptual
ms.date: 04/08/2026
f1.keywords:
- NOCSH
ms.author: deniseb
author: denisebmsft
manager: dansimp
ms.update-cycle: 180-days
ms.reviewer: sophieke
audience: Admin
ms.service: microsoft-365-copilot
ms.subservice: security
ms.localizationpriority: medium
customer-intent: As an admin, I want to use a blueprint to help prevent oversharing when using Microsoft 365 Copilot.
appliesto:
- ✅ Microsoft 365 Copilot
---

# Security for Microsoft 365 Copilot

Security is foundational to Microsoft's approach to Microsoft 365 Copilot. This article explains how Microsoft secures Copilot and how it inherits Microsoft 365 security, compliance, and privacy protections.

:::image type="content" source="media/security-microsoft-365-copilot/microsoft-secures-copilot.png" alt-text="Diagram depicting ways Microsoft secures Microsoft 365 Copilot." lightbox="media/security-microsoft-365-copilot/microsoft-secures-copilot.png":::

> [!NOTE]
> This article describes Microsoft's security approach for Microsoft 365 Copilot. It doesn't include deployment or data‑readiness steps.
>
> For rollout planning and readiness guidance, see [Configure a secure and governed data foundation for Microsoft 365 Copilot](configure-secure-governed-data-foundation-microsoft-365-copilot.md).
>
> For deep technical details about data flow, protections, and auditing, see:
> - [Microsoft 365 Copilot data protection architecture](/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing)
> - [How does Microsoft 365 Copilot work?](/microsoft-365/copilot/microsoft-365-copilot-architecture)

## Microsoft's defense‑in‑depth approach

Microsoft applies a multi‑layered, defense‑in‑depth strategy to secure Microsoft 365 Copilot at every level, grounded in enterprise security, privacy, and compliance standards. This layered approach helps ensure that if one control is compromised, other protections remain in place. 

For more information, see [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md).

## Identity and access protection

Microsoft 365 Copilot is built on Microsoft 365 identity and access controls and aligns with Zero Trust principles such as strong identity verification, least‑privilege access, and continuous evaluation.

For more information, see [Apply principles of Zero Trust to Microsoft 365 Copilot](/security/zero-trust/copilots/zero-trust-microsoft-365-copilot).

## Data protection and compliance

Microsoft 365 Copilot honors your organization's existing security and data protection controls. Copilot only accesses data that users are authorized to access, and it respects Microsoft 365 compliance, privacy, and data residency commitments.

For more information, see [How data is protected and audited in Microsoft 365 and Microsoft 365 Copilot](microsoft-365-copilot-architecture-data-protection-auditing.md). 

### Enterprise data protection

Enterprise data protection (EDP) describes the contractual and technical commitments that apply to customer data for Microsoft 365 Copilot and Microsoft 365 Copilot Chat under Microsoft Product Terms and the Data Protection Addendum.

For details, see the following articles:

- [Enterprise data protection in Microsoft 365 Copilot and Microsoft 365 Copilot Chat](/microsoft-365/copilot/enterprise-data-protection)
- [Data, Privacy, and Security for Microsoft 365 Copilot](/microsoft-365/copilot/microsoft-365-copilot-privacy)

## Preventing oversharing

Microsoft 365 Copilot operates within existing permissions and access controls. Overshared or poorly governed content can affect Copilot results and increase risk.

For prescriptive remediation guidance, see [Secure & governed data foundation for Microsoft 365 Copilot: A deployment blueprint](/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance).

## Related guidance

Use these articles for deeper coverage of related articles:

- **Deployment and readiness**
  - [Configure a secure and governed data foundation for Microsoft 365 Copilot](configure-secure-governed-data-foundation-microsoft-365-copilot.md)
  - [Minimum requirements to deploy Microsoft 365 Copilot](/microsoft-365/copilot/microsoft-365-copilot-minimum-requirements)

- **Architecture and data handling**
  - [How does Microsoft 365 Copilot work?](/microsoft-365/copilot/microsoft-365-copilot-architecture)
  - [Microsoft 365 Copilot data protection architecture](/microsoft-365/copilot/microsoft-365-copilot-architecture-data-protection-auditing)

- **Oversharing remediation**
  - [Secure & governed data foundation for Microsoft 365 Copilot: A deployment blueprint](/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance)
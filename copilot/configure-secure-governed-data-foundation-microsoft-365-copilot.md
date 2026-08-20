---
title: Configure a secure and governed foundation for Microsoft 365 Copilot
description: Prepare your organization for Microsoft 365 Copilot.
f1.keywords:
- NOCSH
manager: dansimp
ms.author: deniseb
author: denisebmsft
ms.date: 04/17/2026
ms.update-cycle: 180-days
ms.reviewer: cabailey, ruihu
audience: Admin
customer-intent: As an IT admin, I want to prepare my organization with for Microsoft 365 Copilot with Microsoft 365 E3 or E5.
ms.topic: get-started
ms.service: microsoft-365-copilot
ms.subservice: security
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- trust-pod
ms.custom: [copilot-learning-hub]
appliesto:
- ✅ Microsoft 365 Copilot
---

# Configure a secure and governed foundation for Microsoft 365 Copilot

> Applies to: Microsoft 365 Copilot, Microsoft Purview, and SharePoint Advanced Management

[Microsoft 365 Copilot](/microsoft-365/copilot/microsoft-365-copilot-overview) uses Work IQ to enhance responses to user prompts using data that the user already has permission to access. When your organization's data is well governed, current, and appropriately shared, Copilot can deliver accurate, relevant, and secure responses. 

This article guides you through preparing, securing, and managing Microsoft 365 Copilot using the process depicted in the following diagram: 

:::image type="content" source="media/configure-secure-governed-data-foundation-microsoft-365-copilot/remediate-guardrails-regulations.png" alt-text="Diagram depicting the three main steps to configuring a secure foundation for Copilot." lightbox="media/configure-secure-governed-data-foundation-microsoft-365-copilot/remediate-guardrails-regulations.png":::

By following these steps, you can help Copilot deliver accurate and relevant results while supporting your organization's security, compliance, and regulatory requirements. 

This guidance is intended for IT administrators and security administrators who are either preparing their organization for Microsoft 365 Copilot or making necessary adjustments to security and governance controls after Copilot is enabled.

## What this article helps you achieve

By completing the steps in this article, you can:

- Establish guardrails to ensure that users have appropriate access to SharePoint, OneDrive, and Exchange, and that Copilot only references accurate, up-to-date information in line with your organization's policies

- Make informed choices about how Copilot can and can't interact with your organization's sensitive data, ensuring control and flexibility in data usage and access

- Monitor changes and Copilot activity to identify and remediate risk.

### Licensing

The capabilities described in this article require:

- [Microsoft 365 E3](https://www.microsoft.com/microsoft-365/enterprise/e3) or [Microsoft 365 E5](https://www.microsoft.com/microsoft-365/enterprise/e5) (or [Office 365 E3](https://www.microsoft.com/microsoft-365/enterprise/office-365-e3) or [Office 365 E5](https://www.microsoft.com/microsoft-365/enterprise/office-365-e5)) for core Microsoft 365 services and features, such as SharePoint, OneDrive, and Microsoft Purview features.

- This article covers both the [Microsoft Purview](/purview/) foundational capabilities that are included in Microsoft 365 E3. This article also mentions optimized features that are included in Microsoft 365 E5.

- [Microsoft 365 Copilot](microsoft-365-copilot-licensing.md)

- [SharePoint Advanced Management](/sharepoint/advanced-management) (included with Copilot licenses)
    
### Admin roles

:::image type="content" source="media/configure-secure-governed-data-foundation-microsoft-365-copilot/required-admin-roles.png" alt-text="Table depicting required admin roles for portals." lightbox="media/configure-secure-governed-data-foundation-microsoft-365-copilot/required-admin-roles.png":::

You must have an appropriate role assigned to perform the tasks described in this article. 

For more information, see the following resources:

- [Overview of the Microsoft 365 admin center](/microsoft-365/admin/admin-overview/admin-center-overview)
- [About administrator roles in the Microsoft 365 admin center](/microsoft-365/admin/add-users/about-admin-roles)
- [About the SharePoint Administrator role in Microsoft 365](/sharepoint/sharepoint-admin-role)
- [Permissions in the Microsoft Purview portal](/purview/purview-permissions)
   
## Step 1: Remediate oversharing

In this step, you identify and prioritize high-risk sites and sensitive content, apply interim protections to reduce Copilot exposure, and then remediate access and permissions.

### Video: Preventing oversharing in Copilot

The following video provides a high-level overview of how to prevent oversharing in Copilot by configuring capabilities in SharePoint Advanced Management and Microsoft Purview:

> [!VIDEO b45581fd-8711-47fa-9946-c5067735f4d1]

### Identify high-risk sites and content

Use [Microsoft Purview](/purview/purview) and [SharePoint Advanced Management](/sharepoint/get-ready-copilot-sharepoint-advanced-management) (SAM) to find sites and files that are overshared, ownerless, inactive, or contain sensitive data that could be surfaced by Copilot.

1. Review [Microsoft Purview Data Security Posture Management (DSPM)](/purview/data-security-posture-management-learn-about) data risk assessments to identify overshared sites with sensitive data, risky sharing links, and content that is frequently accessed

1. Run the [SAM Content Management Assessment](/sharepoint/content-management-assessment) to identify sites with oversized audiences, EEEU usage, broken inheritance, inappropriate sharing, and those that are inactive or ownerless

### Apply interim Copilot protections

Before sites are in remediation, apply temporary controls to reduce exposure and validate that Copilot is no longer surfacing restricted content.

1. Enable [SAM Restricted Content Discovery (RCD)](/sharepoint/restricted-content-discovery) to exclude sensitive sites from Copilot discovery.

1. Configure [Microsoft Purview Data Loss Prevention (DLP) for Copilot](/purview/dlp-microsoft365-copilot-location-learn-about) to exclude sensitive content from Copilot grounding.

Validate through Microsoft Purview Auditing and reports that Copilot no longer surfaces restricted content. (See [Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot and Microsoft 365 Copilot Chat](/purview/ai-m365-copilot).)

### Fix access and permissions

For sites you identify as high risk, use Microsoft Purview and SAM recommendations to remove excessive access, correct broken inheritance, and ensure accountable ownership.

1. Review [Microsoft Purview DSPM Data Risk Assessment](/purview/data-security-posture-management-oversharing?tabs=m365) recommendations for sites flagged as high‑risk and take the following actions:

   - Apply [site sensitivity labels](/purview/sensitivity-labels-teams-groups-sites) to reflect data sensitivity and restrict oversharing
    
   - Remove excessive or anonymous access, and rescope sharing links to approved users or groups. (See [Manage sharing settings for SharePoint and OneDrive](/sharepoint/turn-external-sharing-on-or-off).)
    
1. Initiate [SAM site access reviews](/sharepoint/site-access-review) for high-risk sites so site owners can manage access (down to the file level) and:

   - Remove excess users, groups, and company-wide sharing links (including EEEU), and rescope sharing links to approved users or groups. (See [Monitor sharing activities in SharePoint](/sharepoint/data-access-governance-sharing-links-report).)
    
   - Correct broken permission inheritance on libraries and folders. (See [Permissions inheritance in SharePoint](/SharePoint/what-is-permissions-inheritance) and [Customize permissions for a SharePoint list or library](https://support.microsoft.com/en-us/office/customize-permissions-for-a-sharepoint-list-or-library-02d770f3-59eb-4910-a608-5f84cc297782).)
    
   - Assign or confirm site ownership for all remediated sites using SAM site lifecycle management. (See [Create a SharePoint site ownership policy](/sharepoint/create-sharepoint-site-ownership-policy).)
    
Remove interim Copilot protections once access and permissions are remediated

## Step 2: Set up guardrails

In this step, you establish secure defaults and durable guardrails with Microsoft Purview and SAM so new sites and content are protected at creation—and continuously enforce and optimize these controls over time.

### Establish secure defaults

Use tenant and provisioning defaults to prevent oversharing from being introduced in new sites and sharing links.

1. Enforce [Restricted Access Control (RAC)](/sharepoint/restricted-access-control) by default for business-critical sites at provisioning time.

2. Disable or restrict use of company-wide sharing groups and Anyone links at the tenant level. (See [How shareable links work in SharePoint and OneDrive](/sharepoint/shareable-links-anyone-specific-people-organization).)

1. Use Microsoft Purview Information Protection to require site sensitivity labels at provisioning to enforce correct site privacy and sharing controls by default. (See [Use sensitivity labels to protect content in Microsoft Teams, Microsoft 365 Groups, and SharePoint sites](/purview/sensitivity-labels-teams-groups-sites).)

### Establish secure guardrails

Protect sensitive data by default and decide how it should be used with Copilot using Microsoft Purview.

1. Configure [auto-label](/purview/apply-sensitivity-label-automatically?tabs=apply-label) and [default Microsoft Purview Information Protection sensitivity labels](/purview/default-sensitivity-labels-policies) to ensure sensitive files and emails are protected.

1. Are there files or emails that shouldn't be used by Copilot for grounding? If yes, setup [Microsoft Purview DLP for Copilot policies](/purview/dlp-microsoft365-copilot-location-learn-about) to restrict Copilot processing of files and emails with specific sensitivity label

1. Are there keywords or types of sensitive data that shouldn't be processed by Copilot? If yes, enable a [Purview DLP for Copilot prompts](/purview/dlp-microsoft365-copilot-location-learn-about) policy to restrict Copilot from responding to prompts containing specified sensitive information

   Optionally, allow sensitive data to be used for Work IQ grounding but block from web grounding
  
1. Enable [Microsoft Purview Insider Risk Management (IRM](/purview/insider-risk-management-solution-overview) policies to detect patterns of inappropriate or noncompliant Copilot usage and [automatically add risky users to more restrictive security policies](/purview/insider-risk-management-adaptive-protection)

### Continuously enforce and optimize guardrails

Use Microsoft Purview reporting, risk assessments, and alerts to continuously validate protection and investigate risky AI usage.

1. Use [Microsoft Purview DSPM Activity Explorer](/purview/data-security-posture-management-considerations#activity-explorer-events-in-data-security-posture-management) to review Copilot interactions (prompts and responses), web search keywords, and sensitive data activity.

2. Use [Microsoft Purview DSPM data risk assessments](/purview/data-security-posture-management-oversharing?tabs=m365) to continuously validate that sensitive data remains protected from Copilot access.

3. Review Microsoft Purview Insider Risk Management and DLP alerts to detect and investigate risky AI usage or potential data loss. (See [Data risk graph in Insider Risk Management](/purview/insider-risk-management-data-risk-graph) and [Learn about investigating DLP alerts](/purview/dlp-alert-investigation-learn).)

## Step 3: Meet regulations

In this step, you assess and close AI compliance gaps, define audit and retention requirements for Copilot interactions, and improve ongoing data hygiene with Microsoft Purview to support responsible AI governance at scale.

### Identify and address gaps against AI regulations

1. Use [Microsoft Purview Compliance Manager](/purview/compliance-manager) to assess your tenant against AI-related regulatory requirements and Microsoft recommended actions.

2. Review [Microsoft Purview Compliance Manager improvement actions](/purview/compliance-manager-improvement-actions) related to data protection, auditability, and AI usage controls.

3. Assign and track remediation work to close identified compliance gaps. (See [Update improvement actions and bring compliance data into Compliance Manager](/purview/compliance-manager-update-actions).)

4. Validate improvements using Microsoft Purview DSPM reports. (See [How to use DSPM](/purview/data-security-posture-management-learn-about#how-to-use-data-security-posture-management).)

### Define regulatory requirements

1. Decide how long to keep audit logs in accordance with regulatory and internal requirements. (See [Manage audit log retention policies](/purview/data-security-posture-management-learn-about#how-to-use-data-security-posture-management).)

1. Decide how to keep or when to delete Copilot interactions based on legal risk or regulatory requirements. (See [Microsoft Purview Data Lifecycle Management](/purview/retention-policies-copilot).)

1. Use [Microsoft Purview eDiscovery](/purview/edisc-search-copilot-data) to search, preserve, and produce Copilot-related content for audits or legal requests.

### Improve data hygiene

Reduce ongoing risk and improve Copilot answer quality by continuously cleaning up inactive content and applying retention and deletion policies.

**For sites**:

- Maintain lifecycle hygiene by identifying and addressing inactive or obsolete sites. (See [SAM inactive site policies](/sharepoint/site-lifecycle-management).)

- Use [Microsoft 365 Archive](/microsoft-365/archive/archive-overview?view=o365-worldwide&preserve-view=true) to store inactive but high-value content at a lower cost while preventing Copilot from processing or reasoning over it.

**For files**: 

- Apply [Microsoft Purview retention and deletion policies](/purview/create-retention-policies?tabs=teams-retention) to remove inactive or obsolete files to improve the quality of Copilot responses.

- Use [Microsoft Purview retention labels](/purview/create-retention-labels-data-lifecycle-management) and [Microsoft 365 Archive](/microsoft-365/archive/archive-overview?view=o365-worldwide&preserve-view=true) to exclude files from Copilot use while preserving them for recordkeeping obligations or discovery

## Next steps

After completing the steps in this article:

1. Use the [Microsoft Purview portal](/purview/purview-portal) and the [SharePoint Admin Agent](/sharepoint/content-governance-agent) to view information and run reports on a scheduled basis.

1. Educate site owners and users on labeling, sharing, and responsible Copilot use. (See [Microsoft 365 Copilot data and compliance readiness](/microsoft-365/copilot/microsoft-365-copilot-minimum-requirements-data-compliance).)


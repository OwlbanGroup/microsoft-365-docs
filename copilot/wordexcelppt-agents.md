---
title: Create files with Word, Excel, and PowerPoint Agents in Microsoft 365 Copilot
description: Create files with Word, Excel, and PowerPoint Agents in Microsoft 365 Copilot.
f1.keywords:
- NOCSH
ms.author: smbhardwaj
author: smritib17
manager: scotvidican
ms.date: 03/26/2026
audience: Admin
ms.reviewer: HollyPollock
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection: 
- m365copilot
- trust-pod
ms.custom: [copilot-learning-hub]
appliesto:
  - ✅ Microsoft 365 Copilot
---

# Get started with Word, Excel, and PowerPoint Agents in Microsoft 365 Copilot

Microsoft 365 is expanding its integration with AI models within Copilot, allowing users to create Word, Excel, and PowerPoint files using advanced AI-driven creation agents.

## Admin enablement and controls  

These agents exclusively use Anthropic's AI models. This AI model must be enabled. These requirements are mandatory for [Word, Excel, and PowerPoint Agents](wordexcelppt-agents.md) to function.

Administrators, can disable access to reasoning models at any time. If your organization decides to stop using Anthropic models, you can block the provider via the admin center, which removes the option for users.

[Word, Excel, and PowerPoint Agents](https://support.microsoft.com/topic/76691f5e-bb19-4029-a34d-33a00e0a0c4f) in the Microsoft 365 Copilot App are installed by Microsoft and will appear in the Tools menu and left agent navigation pane in the All Agents section for Microsoft 365 users who are both Copilot chat users (unlicensed Copilot users) and Microsoft 365 Copilot users (licensed Copilot users) assuming Anthropic has been enabled for the tenant. Admins can manage these agents similar to other agents that were installed by [Microsoft](copilot-agent-install.md).

If administrators disable the Anthropic AI models, users are prevented from seeing the agents (in the Tools menu and in the left agent navigation pane of the Microsoft 365 Copilot app) and using the new [Word, Excel, and PowerPoint Agents](https://support.microsoft.com/topic/76691f5e-bb19-4029-a34d-33a00e0a0c4f).

### Connect to AI models in the Microsoft 365 admin center

For steps on how to connect to Anthropic's AI models, see [Anthropic as a subprocessor for Microsoft Online Services](connect-to-ai-subprocessor.md).

### Disable connection to AI models

For steps on how to disable the connection to Anthropic's AI models, see [Disable connection to Anthropic's models](connect-to-ai-subprocessor.md#disable-connection-to-anthropics-models).

## Data Privacy and Security

<!--
> [!IMPORTANT]
> Until January 7, 2026, when your organization elects to use an Anthropic model, your organization is choosing to share data with Anthropic and your use is governed by Anthropic's [Commercial Terms of Service](https://www.anthropic.com/legal/commercial-terms) and Anthropic's [Data Processing Addendum](https://www.anthropic.com/legal/data-processing-addendum). Microsoft's customer agreements, including the [Product Terms](https://www.microsoft.com/licensing/terms?msockid=344e0e6ad66c6b3e19441848d7416abd) and [Data Processing Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA?lang=18&msockid=344e0e6ad66c6b3e19441848d7416abd) don't apply.
> In addition, Microsoft's data-residency commitments, audit and compliance requirements, service level agreements, and Customer Copyright Commitment don't apply to your use of Anthropic services.  
> For more information, see [Connect to Anthropic's AI models](connect-to-ai-subprocessor.md). -->
> [!IMPORTANT]
> Starting on January 7, 2026, Anthropic will operate as a Microsoft subprocessor for these Microsoft 365 Copilot capabilities under Microsoft’s direction and contractual safeguards.
> This includes coverage under the [Microsoft Product Terms](https://www.microsoft.com/licensing/terms?msockid=344e0e6ad66c6b3e19441848d7416abd) and the [Microsoft Data Protection Addendum (DPA)](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA?lang=18&msockid=344e0e6ad66c6b3e19441848d7416abd) with Microsoft remaining accountable for Anthropic’s compliance under our contractual commitments. In addition, use of Anthropic models in Microsoft 365 Copilot will fall under our [Enterprise Data Protection](enterprise-data-protection.md) and will be covered by the Customer Copyright Commitment. Note that Anthropic models are currently excluded from EU Data Boundary and when applicable, in-country processing commitments.
> 
> Anthropic as a subprocessor is being introduced gradually and is not yet available to all organizations. During this phased rollout, some features may be limited for your organization. Full availability is expected by the end of February 2026.
>
> For more information, see [Anthropic as a subprocessor](connect-to-ai-subprocessor.md).

## Enterprise Data

Word, Excel, and PowerPoint Agents can access organizational data for users with a Copilot license. (Copilot Chat users will have access to web grounding and a limited file attachment.) These agents can use Work IQ to retrieve information from files, emails, meetings, and sites that you personally have permission to access, similar to other Copilot experiences.

Microsoft ensures secure handling of data, when integrating with AI models. Microsoft performs all searches, and only relevant context is shared with the reasoning model. So the data provided is limited to what you are authorized to view, with sensitivity labels and compliance policies fully respected.

Generated content is stored securely in OneDrive. All documents created by these agents are saved within your organization's tenant, maintaining governance and compliance standards.

## Limitations and support

Word, Excel, and PowerPoint Agents are available to Microsoft 365 users with or without a Microsoft 365 Copilot license, including Microsoft 365 Personal, Family, and Premium plans, in all officially supported Microsoft 365 Copilot languages. For the complete list of supported languages, see [Supported languages for Microsoft 365 Copilot](https://support.microsoft.com/office/supported-languages-for-microsoft-365-copilot-94518d61-644b-4118-9492-617eea4801d8).

Feedback mechanisms exist for reporting inaccuracies or inappropriate content; support articles provide further guidance.

## Related content

- [Get started with Word, Excel, and PowerPoint Agents in Microsoft 365 Copilot](https://support.microsoft.com/topic/76691f5e-bb19-4029-a34d-33a00e0a0c4f)
- [Support article](https://support.microsoft.com/topic/76691f5e-bb19-4029-a34d-33a00e0a0c4f)
- [Word, Excel, and PowerPoint Agents FAQ](faq-wordexcelppt-agents.yml)

---
title: Considerations for Microsoft 365 Copilot Chat admins
f1.keywords:
- NOCSH
ms.author: efrene 
author: efrene
manager: scotv
ms.date: 02/20/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- operations-pod
description: Microsoft 365 admins can learn important considerations for Microsoft 365 Copilot Chat. 
ms.custom: [copilot-learning-hub]
appliesto:
- ✅ Microsoft 365 Copilot
---

# Considerations for Microsoft 365 Copilot Chat admins

Microsoft 365 Copilot Chat is included with many Microsoft 365 subscriptions and serves as the entry point into Copilot for users who may not yet have a Microsoft 365 Copilot license.

For admins, Copilot Chat isn't just a chat experience—it's an AI surface that introduces enterprise data protection, web‑grounded AI, and extensibility via agents. This article helps admins understand what to plan for, what to control, and what to communicate before enabling Copilot Chat broadly.

| Considerations| 
|---|
| What does it do? |
| Is my data secure? |
| How can I track and incentivize adoption? |
| How do I manage it? |
| Are there resources to train my user? |
| What if I need more than what Copilot Chat provides? |

## Understand what Copilot Chat is (and is not)

[Microsoft 365 Copilot Chat](/copilot/overview) provides:

- Secure AI chat grounded in **web data**
- Enterprise data protection (EDP)
- Access to agents, including pay‑as‑you‑go agents
- Features such as file upload, image generation, and Copilot Pages

Copilot Chat **does not require a Microsoft 365 Copilot add‑on license**, which means:

- Many users can access AI chat before full Copilot rollout
- Copilot Chat often becomes users’ first Copilot experience

## Data security and privacy

Security and privacy of organizational data are top priorities for admins. Uncertainty about how Copilot Chat handles customer data can make some organizations hesitant to adopt it. The following are key security considerations for admins to understand:

- **Enterprise Data Protection (EDP)** - Microsoft 365 Copilot Chat is protected by Enterprise Data Protection (EDP). With EDP, [prompts and responses are protected](/microsoft-365/copilot/enterprise-data-protection#enterprise-data-protection-for-prompts-and-responses) by the same contractual terms and commitments widely trusted by our customers for their emails in Exchange and files in SharePoint.
- **Responses grounded in web data**- Copilot Chat is a generative AI service grounded in data from the public web in the Bing search index only. Unlike Microsoft 365 Copilot, Copilot Chat cannot invoke organizational content like files, emails, or chats when interacting in Copilot Chat.
- **Users can choose to provide organizational data** - Copilot Chat users can provide organizational content as part of their prompt, manually uploading a file directly, or use an agent that is given access to organizational content. Learn more about [organizational data and Copilot Chat](/copilot/privacy-and-protections#organizational-data).
- **European Union Data Boundary (EUDB)** - Microsoft 365 Copilot Chat calls to the LLM are routed to the closest data centers in the region, but can also call into other regions where greater capacity is available when utilization is especially high. For European Union (EU) users, Copilot Chat has additional safeguards to comply with the EU Data Boundary. EU traffic stays within the [EU Data Boundary](/privacy/eudb/eu-data-boundary-learn), while worldwide traffic can be sent to the EU and other countries or regions for LLM processing.

## Track Copilot Chat adoption
The [Microsoft 365 Copilot Chat usage report](/microsoft-365/admin/activity-reports/microsoft-copilot-usage) helps admins understand how users are engaging with Copilot Chat and can be useful in tracking adoption over time and in Microsoft 365 apps (for example, Teams, and Outlook). It shows key metrics such as total active users, average daily active users, total prompts submitted, average prompts per user. You can review usage totals and trends over the past 7, 30, 90, or 180 days. The report also includes per‑user activity details—such as last activity date, number of prompts, and active days—which are anonymized by default.

Admins can also use the [Organizational messages](/microsoft-365/copilot/microsoft-365-copilot-enable-users) feature to act on adoption trends they are seeing. It lets you reach your users in the flow of their daily work with targeted, actionable guidance. 


## Manage Copilot Chat
Microsoft 365 admins can [manage Copilot Chat](/copilot/manage) in the admin center through the [Copilot Control System](/microsoft-365/copilot/copilot-control-system/overview). In it, an admin can configure how user interacts with Copilot Chat such as:

- Choose whether users have Copilot Chat pinned across their experiences.
- Manage whether users can generate images with Copilot Chat.
- Control how users can create and use agents.
- Manage web search capabilities by using the Allow web search in Copilot policy.
- [Remove access to Copilot Chat](/copilot/manage#remove-access-to--chat)

And you can [assign the AI Administrator role](/microsoft-365/admin/add-users/about-admin-roles) to manage all settings related to Copilot and AI features. It provides least‑privilege access, without requiring Global Administrator permissions.

## Train your users

Copilot Chat is available to users in many of the key Microsoft 365 apps in which they do their work. Admins can help them to understand how to use Copilot Chat to assist them with work tasks by pointing them to the following resources:

- [Microsoft 365 Copilot Chat, your AI assistant for work](https://support.microsoft.com/copilot-microsoft365-chat) - Guidance on how to get started, use different prompts, and understand the differences between Copilot Chat and other Copilot offerings.
- [Microsoft Copilot Chat video tutorial](https://support.microsoft.com/topic/microsoft-365-copilot-chat-video-tutorial-e54fb679-9554-435a-8418-d0e0ce2646c6) – Short, easy-to-understand videos on getting started and tasks you can do with Copilot Chat.
- [Copilot Prompt Gallery](https://copilot.cloud.microsoft/prompts?products%2Fname=CWC&createdBy=CreatedByAll) – Example prompts for your user to help them do their work (for example, ”How can I more concisely describe change management?”). 
- [Copilot Chat Success Kit](https://adoption.microsoft.com/copilot-chat/success-kit/) – Use it to prepare your tenant for Copilot Chat and to enable your users to create and use agents. The kit includes information on admin controls, licensing and payment methods, training materials, onboarding email templates, and more.
- [Copilot Chat Trainer Kit](https://aka.ms/CopilotChat/TrainerKit) – Downloadable PowerPoint training presentation to help businesses get started with Copilot Chat.
- [Copilot user tools and templates](https://adoption.microsoft.com/copilot/user-engagement-tools-and-templates/) – A collection of user-facing tools and templates for you to quickly onboard your organization. See the section for Copilot Chat tools and templates.
- [Transform ideas into action with Copilot Chat](/training/paths/explore-microsoft-365-copilot-business-chat) - This course teaches learners how to get started with Microsoft 365 Copilot Chat, craft effective prompts, and use its AI-powered features to enhance productivity, streamline work, and collaborate securely in real-time.


## Need more? Add a Microsoft 365 Copilot license

Microsoft 365 gives you a path to greater productivity for your users by adding a Microsoft 365 Copilot license to your Microsoft 365 subscription. Adding it will provide you with:

- **Deeper integration with Microsoft 365 Apps** – Embedded directly in the apps you use, it enables in-context assistance like summarizing meetings, drafting documents, analyzing spreadsheets, and generating presentations—all grounded in your work content.
- **Enterprise-Grade Data Grounding** - While Copilot Chat is grounded in public web data, Microsoft 365 Copilot adds secure access to your organization’s internal data—emails, chats, files, meetings—via Microsoft Graph. This unlocks more relevant, personalized, and actionable responses.
- **Advanced Agents** - Gives you access to powerful agents like Researcher and Analyst that can automate complex, multi-step workflows. 
- **Advanced controls and analytics** - Microsoft 365 Copilot includes the Copilot Control System and Copilot Analytics, giving IT admins tools to manage access, enforce data governance, and measure usage and ROI—capabilities not available in the Copilot Chat experience.

If you need help with determining if you need to add a Microsoft 365 Copilot license, see [Decide which Copilot is right for you](/microsoft-365/copilot/which-copilot-for-your-organization).

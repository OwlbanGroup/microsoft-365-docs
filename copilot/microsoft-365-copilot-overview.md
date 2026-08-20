---
title: What is Microsoft 365 Copilot?
description: Learn about what Microsoft 365 Copilot is and common Copilot features in Microsoft 365 apps, like Word, Excel, PowerPoint, and Teams. This article answers common questions about Copilot, including what is Copilot, how Copilot works, and the benefits of using Copilot.
f1.keywords:
- NOCSH
ms.author: efrene
author: Efrene
ms.update-cycle: 180-days
manager: scotv
ms.date: 03/24/2026
audience: Admin
ms.reviewer: mandia
ms.topic: overview
ms.service: microsoft-365-copilot
ms.subservice: admin
ms.localizationpriority: medium
ms.collection:
- scotvorg
- m365copilot
- magic-ai-copilot
- essentials-overview
- operations-pod
ms.custom: [copilot-learning-hub]
appliesto:
- ✅ Microsoft 365 Copilot
---

# Microsoft 365 Copilot overview

> [!NOTE]
> Microsoft onboarded Anthropic as a Microsoft subprocessor. As a subprocessor, Anthropic operates with [Microsoft Enterprise data protections](enterprise-data-protection.md). For more information, see [Anthropic as a subprocessor for Microsoft Online Services](connect-to-ai-subprocessor.md).

**Microsoft 365 Copilot is an AI-powered tool that helps with your work tasks**.

Users enter a prompt in Copilot and Copilot responds with AI-generated information. The responses are in real-time and can include internet-based content and work content that users have permission to access.

Users get content relevant to their work tasks, and in the context of the Microsoft 365 app they're using.

The following video provides an overview of Microsoft 365 Copilot. It's 1 minute and 49 seconds long.

> [!VIDEO c9679373-1812-4882-a690-8d4b8e8411ea]

## Using Microsoft 365 Copilot

Say, for example, you're an operations manager and are working with human resources to update job descriptions. By providing Copilot the basic job requirements, you can ask Copilot to create a job description. You can also have Copilot add various job requirements and qualifications that should be included in the description. In the same prompting session, you can expand the generated job description to create different levels, like Level 1, Level 2, and Level 3.

You can also [create and use agents](/microsoft-365-copilot/extensibility) to customize your Copilot experience with your organization's data sources. For example, say you're a warehouse manager and you need to know the status of a shipment. You can ask your Copilot shipping agent "What is the status of shipment 1234?" Copilot uses your data sources to get the information and can respond with the status.

This article is for IT admins. It describes the different components that Microsoft 365 Copilot uses and the Copilot features in the Microsoft 365 apps. Learn more about the [Microsoft 365 Copilot architecture and how it works](microsoft-365-copilot-architecture.md).

## Differences between Microsoft 365 Copilot and Copilot Chat

Microsoft 365 Copilot uses your organizational data and the web. It requires an [add-on license](/microsoft-365/copilot/microsoft-365-copilot-licensing). Microsoft 365 Copilot Chat uses the web and users can provide organizational data. It doesn't require an additional license. [Learn more about Copilot Chat](/copilot/overview). For more information, see [differences between Microsoft 365 Copilot and Copilot Chat](/copilot/overview#differences-between-copilot-chat-and-microsoft-365-).

> [!VIDEO 6ba0f4d6-fffc-479a-9698-a90e6e57e80f]

> [!TIP]
> - Learn more about [Microsoft 365 Copilot Chat](/copilot/overview), which is the version of Copilot for work or education that doesn't require an additional license.
> - Home users might automatically get Microsoft Copilot, which is the free consumer version. To learn more, see [How can Copilot help you?](https://www.microsoft.com/microsoft-copilot/for-individuals) and [Welcome to Copilot on Windows](https://support.microsoft.com/windows/welcome-to-copilot-on-windows-675708af-8c16-4675-afeb-85a5a476ccb0).
> - Get sample prompts at the [Copilot Prompt Gallery](https://m365.cloud.microsoft/copilot-prompts) and training at the [Microsoft 365 Copilot Skilling Center](https://adoption.microsoft.com/copilot/skilling-center/).
> - Learn more about data privacy at [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md).

## The technical details

:::image type="content" source="media/microsoft-365-copilot-architecture/copilot-tenant-architecture.png" alt-text="Diagram that shows the Microsoft 365 tenant architecture with Microsoft 365 Copilot and your user data." lightbox="media/microsoft-365-copilot-architecture/copilot-tenant-architecture.png":::

Microsoft 365 Copilot:

- Pairs with the Microsoft 365 productivity apps that you use every day, like Word, Excel, PowerPoint, Outlook, Teams, and others. For example, you can use Copilot in Word to help create a document, in Excel to get suggestions for formulas, in Outlook to summarize an email thread, and in Teams to summarize meetings.

- Uses content in [Microsoft Graph](/graph/overview) to personalize the responses with a user's work emails, chats, and documents. Copilot only shows the data that users have permission to access.

- Includes [Microsoft 365 Copilot Search](/microsoft-365/copilot/microsoft-365-copilot-search), a universal search experience that allows users to search across all their Microsoft 365 and third-party data sources to find what they need quickly.

- Coordinates large language models (LLMs). LLMs are artificial intelligence (AI) algorithms. These algorithms use deep learning techniques and data sets to understand, summarize, predict, and generate content.

For more information, see:

- [Microsoft 365 Copilot architecture and how it works](microsoft-365-copilot-architecture.md)
- [Microsoft 365 Copilot service description](/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot)
- [Microsoft 365 Copilot Search overview](/microsoft-365/copilot/microsoft-365-copilot-search)
- Video: [Copilot system explained by Microsoft](https://www.youtube.com/watch?v=E5g20qmeKpg)
- Video: [Microsoft 365 Copilot, LLMs, and your apps](https://www.youtube.com/watch?v=B2-8wrF9Okc)
- Video: [How to get ready for Microsoft 365 Copilot](https://aka.ms/M365CopilotAdmin)

## Copilot works with Microsoft 365 apps and Microsoft Graph

:::image type="content" source="media/copilot-features.png" alt-text="Diagram that shows the Microsoft 365 Copilot component features." lightbox="media/copilot-features.png":::

Copilot has intelligent features, functionality, and prompting. These features help users in the context of their work within their Microsoft 365 apps.

Microsoft's LLMs and other components work together. They help users securely access and use your organizational data with AI-powered capabilities. Specifically, Microsoft 365 Copilot uses the following components:

✅ **Microsoft 365 apps**

Apps like Word, Excel, PowerPoint, Outlook, Teams, and Loop work with Copilot to support users in the context of their work. For example, Copilot in Word helps users create, understand, and edit documents.

For more features, see [Copilot features in Microsoft 365 apps](#copilot-features-in-microsoft-365-apps) (in this article).

✅ **Chat capabilities**

By using Microsoft 365 Copilot Chat, you can draft content, review what you missed, and get answers to questions by using open-ended prompts. This information is securely grounded in your work data.

You can use Microsoft 365 Copilot Chat in Microsoft Teams, in the Microsoft 365 Copilot Chat app, at [Microsoft365.com](https://www.microsoft365.com/), and at [m365.cloud.microsoft.com](https://m365.cloud.microsoft.com/).

✅ **Microsoft 365 Copilot Search**

Copilot Search is an AI-powered universal search experience across all your Microsoft 365 applications and connected non-Microsoft data sources. It's integrated with Microsoft 365 Copilot, so users can find the results they need by using search, then seamlessly transition to chat for deeper exploration or follow-up task completion.

Learn more about [Copilot Search](/microsoft-365/copilot/microsoft-365-copilot-search).

✅ **Microsoft Graph**

Microsoft Graph includes information on users, their activities, and the organization data they can access. The Microsoft Graph API brings a personalized context into the prompt, like information from a user's emails, chats, documents, and meetings.

To learn more, see [Overview of Microsoft Graph](/graph/overview) and [Major services and features in Microsoft Graph](/graph/overview-major-services).

✅ **Semantic indexing for Microsoft 365 Copilot**

Microsoft 365 Copilot enhances search relevance and accuracy by using advanced lexical and semantic understanding of Microsoft Graph data, resulting in more contextually precise information retrieval. Copilot preserves security, compliance, and privacy, ensuring organizational boundaries are respected while offering a seamless user experience.

To learn more, see [Semantic indexing for Microsoft 365 Copilot](/microsoftsearch/semantic-index-for-copilot) and [Semantic Index explained by Microsoft](https://www.youtube.com/watch?v=KtsVRCsdvoU) (opens YouTube's website).

## Copilot features in Microsoft 365 apps

Microsoft 365 productivity apps (like Word, Excel, PowerPoint, Outlook, Teams, and Loop) work with Copilot to support users in the context of their work.

Some of these features include:

| Microsoft 365 app | Feature |
|---|---|
| **Word** | **Draft**—Generate text with and without formatting in new or existing documents. Word files can also be used for grounding data. <br/><br/> **Chat**—Create content, summarize, ask questions about your document, and do light commanding. |
| **PowerPoint** | **Draft**—Create a new presentation from a prompt or Word file using enterprise templates. PowerPoint files can also be used for grounding data. <br/><br/> **Chat**—Summary and Q&A <br/><br/> **Light commanding**—Add slides, pictures, or make deck-wide formatting changes. |
| **Excel** | **Draft**—Get suggestions for formulas, chart types, and insights about data in your spreadsheet. |
| **Loop** | **Collaborative content creation**—Create content that can be collaboratively improved through direct editing. |
| **Outlook** | **Coaching tips**—Get coaching tips and suggestions on clarity, sentiment, and tone, and an overall message assessment and suggestions for improvement. <br/><br/> **Summarize**—Summarize an email thread to quickly understand the discussion. <br/><br/> **Draft**—Pull from other emails or content across Microsoft 365 that the user already has access to. |
| **Teams** | **Chat**—Copilot can summarize up to 30 days of the chat content before the last message in a chat. <br/><br/>Copilot uses only the single chat thread as source content for responses. It can't reference other chats or data types, like meeting transcripts, emails, and files. Users can select prewritten prompts or write their own questions. Responses include clickable citations that direct users to the relevant source content that was used. <br/><br/> Conversations with Copilot take place in a side panel and allows users to copy and paste. Copilot conversations close when the side panel closes. <br/><br/> **Meetings**—Users can invoke Copilot in meetings or calls within the same tenant. Copilot uses the transcript in real-time to answer questions from the user. It only uses the transcript and knows the name of the user typing the question. <br/><br/> Users can type any question or use predetermined prompts. Copilot answers questions only related to the meeting conversation from the transcript. The user can copy/paste an answer and access Copilot after the meeting ends. <br/><br/> **Copilot**—Users access data across their Microsoft 365 Graph and use LLM functionality. <br/><br/> **Calls**—Automates important administrative tasks of a call, like capturing key points, task owners, and next steps. It supports voice over Internet Protocol (VoIP) and public switched telephone network (PSTN) calls. |
| **Whiteboard** | **Draft**—Use natural language to generate ideas, organize ideas into themes, create designs based on ideas, and summarize whiteboard content. |
| **OneNote** | **Draft**—Use prompts to draft plans, generate ideas, create lists, and organize information to help you find what you need. |
| **Forms** | **Draft**—Use prompts to draft questions and suggestions that help you create surveys, polls, and other forms. |

> [!NOTE]
>
> Copilot experiences in Word, Excel, PowerPoint, and OneNote may vary depending on your organization's licensing and tenant configuration.
> In-product labels are displayed in Microsoft 365 apps like Word, Excel, PowerPoint, and OneNote, and in the Microsoft 365 Copilot app, to help users identify their Copilot experience. 
>
> **M365 Copilot (Premium)** indicates that a user has a Microsoft 365 Copilot add-on license and the full experience and [priority access](https://support.microsoft.com/topic/standard-versus-priority-access-to-features-in-microsoft-365-copilot-chat-12c8d9f8-db32-4f99-8ebe-d8d85879137f) for Copilot chat in Word, Excel, PowerPoint, and OneNote. 
>
>**M365 Copilot (Basic)** indicates that a user does not have the Microsoft 365 Copilot add-on license but will have [standard access](https://support.microsoft.com/topic/standard-versus-priority-access-to-features-in-microsoft-365-copilot-chat-12c8d9f8-db32-4f99-8ebe-d8d85879137f) to Copilot in those apps to ensure a reliable experience.
>
> **Copilot chat (Basic)** indicates that a user does not have the Microsoft 365 Copilot add-on license and does not have access to Copilot chat in Word, Excel, PowerPoint and OneNote.


## Microsoft 365 services that help support Copilot

:::image type="content" source="media/copilot-services-help.png" alt-text="Diagram that shows services and features that help you get your data and organization ready for Copilot." lightbox="media/copilot-services-help.png":::

Your Microsoft 365 license includes services and features that help you get your data and organization ready for Copilot.

- **SharePoint Advanced Management (SAM)**

  Microsoft SharePoint Premium – SharePoint Advanced Management (SAM) helps you reduce oversharing and cleanup inactive sites. These tasks declutter Copilot's data sources and improve the quality of the responses.

  To learn more, see [Get ready for Microsoft 365 Copilot with SharePoint Advanced Management (SAM)](/sharepoint/get-ready-copilot-sharepoint-advanced-management).

- **Restricted SharePoint Search**

  Restricted SharePoint Search (RSS) gives you time to review and configure the correct permissions on your SharePoint sites. You add the reviewed and corrected sites to an allowed list that Copilot can access.

  For more information, see [Restricted SharePoint Search](/sharepoint/restricted-sharepoint-search).

- **Microsoft Purview**

  Microsoft Purview can classify and label your data based on the sensitivity of the content. It can also help prevent unauthorized sharing or leakage and review Copilot prompts and responses.

  For more information, see [Microsoft Purview data security and compliance protections for generative AI apps](/purview/ai-microsoft-purview).

- **Microsoft Agents**

  Agents are scoped or focused versions of Microsoft 365 Copilot that act as AI assistants and can automate business processes. For example, you can create an agent that creates help desk tickets, or a human resources agent that looks up employee info from your data source.

  For more information, see [Microsoft 365 Copilot extensibility overview](/microsoft-365-copilot/extensibility).

More resources:

- [Compare features in the Microsoft 365 licenses that affect Copilot](microsoft-365-copilot-license-feature-overview.md)
- [Configure a secure and governed data foundation for Microsoft 365 Copilot](configure-secure-governed-data-foundation-microsoft-365-copilot.md)

## Related content

- [Get licensing info](microsoft-365-copilot-licensing.md) and [set up Microsoft 365 Copilot](microsoft-365-copilot-setup.md).
- Learn about [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md).
- Get [sample prompts at the Copilot Prompt Gallery](https://m365.cloud.microsoft/copilot-prompts) and [training at the Microsoft 365 Copilot Skilling Center](https://adoption.microsoft.com/copilot/skilling-center/).
- Stay up to date on the latest Copilot features, changes, and announcements by using the [Message center](/microsoft-365/admin/manage/message-center) in the [Microsoft 365 admin center](https://admin.microsoft.com/Adminportal/Home#/MessageCenter).
- [Understanding foundation model changes in Microsoft 365 Copilot](https://techcommunity.microsoft.com/blog/microsoft_365blog/understanding-foundation-model-changes-in-microsoft-365-copilot/4440322)

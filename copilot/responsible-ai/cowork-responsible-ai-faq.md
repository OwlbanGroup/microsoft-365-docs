---
title: "Responsible AI FAQ for Cowork"
description: "Get answers to frequently asked questions about responsible AI and Microsoft 365 Copilot Cowork."
ms.date: 04/03/2026
ms.topic: faq
ms.custom:
  - transparency-note
author: leeclontz
manager: KumarVivek
ms.author: leeclontz
ms.reviewer: angieandrews
ms.service: microsoft-365-copilot
ms.subservice: cowork
ai-usage: ai-assisted
ms.collection: bap-ai-copilot
appliesto:
- Microsoft 365 Copilot
---

# Responsible AI FAQ for Cowork

[!INCLUDE [preview](../includes/preview.md)]

These frequently asked questions (FAQ) describe the AI impact of Microsoft 365 Copilot Cowork.

## What is Cowork?

Cowork helps you carry out tasks across Microsoft 365 using natural language instructions. For example, it can send emails, schedule meetings, create documents, post in Teams, and manage files. Each action that Cowork takes is visible in the conversation. Sensitive actions require your explicit approval before they're executed.

## What are Cowork's capabilities?

Cowork can:

- Draft and send emails, reply to messages, and forward messages with attachments through Outlook.
- Create and manage calendar events and schedule meetings.
- Post messages in Teams channels and chats.
- Create Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs.
- Search across your organization for files, people, and information.
- Browse and manage files in OneDrive and SharePoint.
- Process data, generate reports, or automate calculations.
- Prepare daily briefings and meeting intelligence summaries.
- Draft stakeholder communications.
- Conduct deep research across multiple sources and compile comprehensive analysis.
- Generate adaptive card responses with structured layouts and data displays.
- Run scheduled prompts for recurring tasks (daily briefings, weekly reports).
- Discover and use custom skills that you or your organization create via OneDrive.

During a conversation, Cowork acquires specialized skills as needed, such as the following: Word, Excel, PowerPoint, PDF, Email, Scheduling, Calendar Management, Meetings, Daily Briefing, Enterprise Search, Communications, Deep Research, and Adaptive Cards.

## What is Cowork's intended use?

Cowork is designed for information workers who use Microsoft 365 and want to delegate multi-step tasks. Typical use cases include:

- Draft and send emails based on written instructions.
- Create structured documents from unstructured input (for example, turn meeting notes into a formatted report).
- Schedule meetings and manage calendar conflicts.
- Post status updates in Teams channels.
- Search for and organize files across OneDrive and SharePoint.

Cowork isn't intended for use cases that require guaranteed accuracy without human review. Examples are legal filings, medical decisions, or financial transactions that bypass approval processes.

## How is Cowork evaluated, and what metrics are used to measure performance?

Microsoft evaluates Cowork across several areas:

- **Task completion**: Whether Cowork successfully carries out the requested action (for example, it sends an email or creates a document).
- **Response quality**: Whether its output meets the user's intent based on the natural language instruction.
- **User feedback**: Thumbs up and thumbs down ratings on individual responses and generated documents, collected directly in the conversation.
- **Safety and compliance**: Ongoing evaluation to ensure Cowork operates within Microsoft's responsible AI principles.

## What are the limitations of Cowork, and how can users minimize the impact of these limitations?

Current limitations include:

- Cowork might misinterpret ambiguous or overly broad instructions, leading to actions that don't match your intent.
- AI-generated documents and messages should be treated as drafts. Always review content before sending or sharing.
- Cowork might produce inaccurate information when searching across your organization, particularly when source data is incomplete or outdated.
- Complex, multi-step tasks with many dependencies might not always complete as expected.
- Cowork is dependent on your existing Microsoft 365 permissions. It can't access data or services that your account isn't authorized to use.
- Custom skills authored by users or your organization are not validated by Microsoft. Review custom skill outputs carefully, as their quality depends on how the skill was written.

To minimize these limitations:

- Provide clear, specific instructions. Include details about recipients, formatting, and expected outcomes.
- Review all generated content such as emails, documents, and messages, before approving actions.
- Use the pause and cancel controls to stop work if Cowork is heading in the wrong direction.
- Provide thumbs up or thumbs down feedback to help improve future responses.

## How does Cowork handle action approval?

Before Cowork performs a sensitive action such as sending an email, posting in Teams, or modifying a file, it presents an approval dialog. You have the following options:

- **Action button** (for example, **Send**, **Post**, or **Create**): Allow the action to proceed this one time.
- **Don't ask again**: Select the dropdown arrow next to the action button to allow the action and skip the approval prompt for similar actions in the current conversation.
- **Cancel**: Block the action.

For certain actions, such as sending an email, Cowork displays a preview of the content so you can review it before approving. Cowork doesn't execute sensitive actions without your explicit consent.

## How does Cowork handle my data?

Cowork operates within the security and compliance boundaries of Microsoft 365.

- **Authentication**: Cowork uses your existing Microsoft 365 credentials. It accesses only services and data that your account is permitted to use.
- **Tenant isolation**: Your data is isolated to your organization's tenant. Cowork can't access data from other tenants.
- **Data subject rights**: Access, deletion, rectification, and portability requests are supported in accordance with Microsoft's privacy standards.
- **File storage**: Files that Cowork creates are stored in your OneDrive and SharePoint workspace.

Cowork doesn't use your data to train AI models. Your organizational data remains within Microsoft 365 and is subject to your organization's existing data governance policies.

## What operational factors and settings allow for effective and responsible use?

- Cowork is available within Microsoft 365 Copilot and is subject to your organization's access policies and licensing.
- Always review AI-generated content before approving actions that send, post, or share information externally.
- Use the conversation controls (pause, resume, cancel) to manage Cowork's work if it goes off track.
- Administrators can manage access to Cowork through the Microsoft 365 admin center, including disabling access for specific users or controlling deployment across the organization.
- Provide regular feedback through the thumbs up/down controls and the general feedback option to help improve Cowork's performance over time.

## How do I provide feedback on Cowork?

You can provide feedback in the following ways:

- **Thumbs up or thumbs down**: On individual AI responses in the conversation.
- **Document feedback**: When previewing files that Cowork created.
- **General feedback**: Through the feedback option in the header menu.

Your feedback is used to evaluate and improve Cowork's quality and safety.

## Related content

- [Responsible AI overview for Cowork](cowork-responsible-ai-overview.md)
- [Cowork overview](../cowork/index.md)
- [Get started with Cowork](../cowork/get-started.md)
- [Use Cowork](../cowork/use-cowork.md)
- [Cowork common questions](../cowork/cowork-faq.md)
- [Microsoft AI principles](https://www.microsoft.com/ai/responsible-ai)


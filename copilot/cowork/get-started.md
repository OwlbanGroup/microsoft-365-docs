---
title: "Get started with Cowork (Frontier)"
description: "Start using Cowork in Microsoft 365 Copilot to send emails, create documents, schedule meetings, and manage your calendar."
ms.date: 04/07/2026
ms.topic: get-started
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

# Get started with Cowork (Frontier)
[!INCLUDE [cowork-top-note](../includes/cowork-top-note.md)]
[!INCLUDE [cowork-preview](../includes/cowork-preview.md)]

Microsoft 365 Copilot Cowork allows you to describe what you need&mdash;draft an email, build a spreadsheet, schedule a meeting&mdash;and Cowork handles it. This article walks you through your first conversation, from sending a request to reviewing the result.

## Prerequisites

Before you begin, make sure you have:

- **Microsoft 365 Copilot access**: An active Microsoft 365 Copilot license assigned to your account and enrollment in the frontier program.
- **A modern browser**: Microsoft Edge or Google Chrome recommended.
- **Cowork available**: Cowork is enabled in your Microsoft 365 Copilot environment.
- **Anthropic enabled in tenant**: Cowork uses Anthropic models as a subprocessor to ensure secure and responsible use of Anthropic models within your organization. Details about the integration can be found at [Anthropic as a subprocessor for Microsoft Online Services](/microsoft-365/copilot/connect-to-ai-subprocessor).

Cowork works in your browser at [m365.cloud.microsoft](https://m365.cloud.microsoft), in Outlook and Teams, and in the Microsoft 365 Copilot desktop app for Windows and Mac.

## Open Cowork

1. Open [Microsoft 365 Copilot](https://m365.cloud.microsoft).
1. Select **Cowork**.

    If you don't see it, select **All agents**.

The Cowork home page opens. A chat input where you can describe what you need appears, along with any recent tasks you can pick up where you left off.

## Start your first conversation

1. Type what you want done in the chat input, or select one of the suggested prompts such as **Catch me up**, **Organize my inbox**, or **Prep for a meeting**. You can enter up to 250,000 characters, so feel free to include plenty of detail.
1. Attach files if needed. Select the **Add attachments** button to choose from **Add work context** (files, people, meetings), **Upload images and files** from your device, or **Attach cloud files** from OneDrive, SharePoint, or Teams. You can also drag and drop files onto the input area.
1. (Optional) Use voice input by selecting the microphone icon to speak your request instead of typing.
1. Send your message by selecting **Send**.

> [!TIP]
> The more specific you are, the better your results. Instead of *send an email*, try *Send an email to the marketing team summarizing last week's campaign results and format the summary as a PDF*.

## Watch Cowork work

After you send your message, Cowork begins processing your request. Here's what appears in the chat as each step happens:

- **A thinking indicator**: Appears while Cowork figures out the best approach.
- **Skill messages**: Show when Cowork loads a skill it needs, such as "Preparing to compose emails" or "Preparing to create Word documents."
- **Tool steps**: Show exactly what Cowork is doing at each stage, such as *Composing your email* or *Creating your presentation*.
- **The response streams in**: In real time, so you can follow along as Cowork builds your result.

## Approve actions

Before Cowork takes an action on your behalf, like sending an email, posting a Teams message, or scheduling a meeting, it asks for your permission. The approval dialog shows a preview of what Cowork plans to do and a button labeled with the specific action.

Approval prompts for medium and high risk actions include a risk level indicator so you can gauge the impact.

- **Action button** (for example, **Send**, **Post**, or **Create**): Allow this specific action to proceed.
- **Don't ask again**: Select the dropdown arrow next to the action button to allow the action and skip future approval prompts for similar actions in the current conversation.
- **Cancel**: Stop this action.

> [!NOTE]
> Cowork doesn't take actions without your approval. You can also pause Cowork at any time (to finish the current step, or immediately), resume when you're ready, or cancel the task entirely.

Sometimes Cowork asks you a question to clarify your request. When this happens, you see a set of choices you can select from, or you can type your own answer. Select **Skip** if you'd rather not answer.

## Review your results

When Cowork finishes, any files it created appear in the side panel on the right. From there you can:

- Download individual files to your device, or select **Download All** to download every file as a single zip archive.
- Preview files directly in the browser. Supported formats include PDF, Microsoft 365 documents (Word, Excel, PowerPoint), Markdown, code files, images, CSV, HTML, and email.
- Open files in OneDrive and directly in the online version of PowerPoint. 

The side panel also shows a progress bar with the percentage of tasks complete and the skills Cowork used. You can select **thumbs down** on responses that missed the mark, or **thumbs up** on ones that were helpful.

## View your created tasks

The task view lets you select any task to open it and resume the conversation. You can filter tasks by those that need input, those that are still in progress, completed tasks, and scheduled tasks.

## Related content

- [Cowork overview](index.md)
- [Use Cowork](use-cowork.md)
- [Cowork common questions](cowork-faq.md)

---
title: "Cowork overview (Frontier)"
description: "Learn about Microsoft 365 Copilot Cowork, which takes action on your behalf."
ms.date: 04/07/2026
ms.topic: overview
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

# Cowork overview (Frontier)
[!INCLUDE [cowork-top-note](../includes/cowork-top-note.md)]
[!INCLUDE [cowork-preview](../includes/cowork-preview.md)]

Microsoft 365 Copilot Cowork can carry out tasks on your behalf. You describe what you need, and Cowork sends emails, schedules meetings, creates documents, posts in Teams, and manages your calendar. You approve each action before it happens.

:::image type="content" source="media/cowork-overview-interface.png" alt-text="Screenshot of the Cowork home page showing the chat input, suggested prompts, and recent tasks."  lightbox="media/cowork-overview-interface.png":::

## What is Cowork?

Cowork carries out tasks across your Microsoft 365 environment. Rather than describing what you could do, it does the work.

- **Sends emails**: Drafts, replies, forwards, and sends messages through Outlook.
- **Schedules meetings**: Creates calendar events, adds attendees, and helps you organize your day.
- **Creates documents**: Builds Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs.
- **Posts in Teams**: Sends messages to channels and chats.
- **Searches your organization**: Finds the information you need across your company's resources.

Cowork shows each step in your conversation, so you can follow along as it works.

## What can Cowork do for you?

The following sections describe what you can ask Cowork to do.

### Communication

- Draft and send emails.
- Post updates in Teams channels or send direct messages in 1:1 or group Teams chats.
- Create and send HTML newsletters via email.
- Manage your inbox by sorting emails into folders, deleting emails, and responding inline
- Prepare polished stakeholder communications such as status updates, announcements, and follow-ups.

### Documents and files

- Create Word documents, Excel spreadsheets, PowerPoint presentations, and PDFs from scratch.
- Edit and refine existing documents you share in the conversation.
- Browse your entire Work IQ to pull in the content you need.
- Create SharePoint and OneDrive folders.
- Reorganize your existing files into new or existing folders.

### Calendar and meetings

- Schedule meetings using natural language, such as "set up a 30-minute check-in with Alex tomorrow at 2 PM."
- Manage your calendar &mdash; add events, move things around, or clean up conflicts by declining meetings. Cowork can include a message to the organizer on the reason you're declining.
- Get meeting intelligence and insights to help you prepare for upcoming conversations.
- Start your day with a daily briefing that highlights what's ahead.

### Research and search

- Search across your organization to find documents, messages, and information.
- Perform deep research that synthesizes information from multiple sources into comprehensive reports.
- Browse your SharePoint and OneDrive folders and select files to work with.

### Automation

- Run prompts on a schedule, so recurring tasks happen automatically.

## Skills

Cowork uses specialized skills as it works. When Cowork loads a new skill during your conversation, the skill shows up in the side panel. Each skill corresponds to a specific type of task.

Cowork has 13 built-in skills, including Word, Excel, PowerPoint, PDF, Email, Scheduling, Calendar Management, Meetings, Daily Briefing, Enterprise Search, Communications, Deep Research, and Adaptive Cards. You can also create your own custom skills.

For a detailed description of each skill, see [Cowork skills](use-cowork.md#cowork-skills).

You can extend Cowork with custom skills stored in your OneDrive. Create a subfolder in `/Documents/Cowork/skills/` and place a `SKILL.md` file inside it (for example, `Documents/Cowork/skills/weekly-report/SKILL.md`). Cowork discovers your custom skills automatically at the start of each conversation. You can create up to 20 custom skills.

As Cowork loads skills during a conversation, the side panel updates to show which skills are active.

## How you work with Cowork

Here's how a typical interaction works:

1. **Describe your task**: Tell Cowork what you need. For example, "Send a meeting recap to my team" or "Create a slide deck summarizing Q3 results." You can also attach files by dragging them into the chat.
1. **Watch Cowork work**: Cowork breaks your request into steps and works through them one by one. You can follow along as each step appears in the conversation.
1. **Interrupt, steer, or pause the conversation**: At any point, you can interrupt Cowork to give it additional context or clarify your request. 
1. **Approve actions when asked**: Before Cowork takes an important action, like sending an email or scheduling a meeting, it pauses and asks for your go-ahead. You decide whether to proceed.
1. **Review the results**: When Cowork finishes, review what it produced. Download documents, check sent messages, or ask Cowork to make changes.

## Stay in control

You control what Cowork does throughout a conversation.

- **Approve actions**: Cowork asks for your permission before taking sensitive actions, with a risk level indicator for medium and high risk actions. The button label matches the action (for example, **Send** or **Post**), and a dropdown option lets you skip future prompts for similar actions. Select **Cancel** to stop an action.
- **Pause, resume, and cancel**: Pause at any time, resume when ready, or cancel the current task.
- **Give feedback**: Rate responses, leave comments on documents, or share general feedback.

For details on each option, see [Approve actions](use-cowork.md#approve-actions) and [Control the conversation](use-cowork.md#control-the-conversation).

## Manage your work

Cowork helps you stay organized with built-in project and task management.

- **Task views**: Display all of your tasks or filtered views based on task status or use the **Scheduled** tab to manage your scheduled prompts. 

## Data protection and privacy

Cowork adheres to the data protection policies detailed in [Privacy, security, and compliance in Microsoft OneDrive](/sharepoint/onedrive-privacy-security-overview).

## Get started

Cowork is available in your browser at [m365.cloud.microsoft](https://m365.cloud.microsoft) and in the Microsoft 365 Copilot desktop app for Windows and Mac.

Learn more in [Get started with Cowork](get-started.md).

## Related content

- [Use Cowork](use-cowork.md)
- [Cowork common questions](cowork-faq.md)

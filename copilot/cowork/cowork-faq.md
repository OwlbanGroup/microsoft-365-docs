---
title: "Cowork common questions (Frontier)"
description: "Frequently asked questions about Cowork in Microsoft 365 Copilot."
ms.date: 04/15/2026
ms.topic: faq
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

# Cowork common questions (Frontier)
[!INCLUDE [cowork-top-note](../includes/cowork-top-note.md)]
[!INCLUDE [cowork-preview](../includes/cowork-preview.md)]

Find answers to common questions about Microsoft 365 Copilot Cowork.

## What is Cowork?

Cowork is available in Microsoft 365 Copilot. It carries out tasks on your behalf. For example, it can send emails, schedule meetings, create documents, post in Teams, and handle multi-step tasks across your Microsoft 365 environment.

## What can Cowork do for me?

Cowork can send emails, schedule meetings, create documents (Word, Excel, PowerPoint, PDF), post in Teams, manage your calendar, prepare daily briefings, search across your organization, conduct deep research, and draft stakeholder communications. You can also schedule prompts to run automatically.

For a full breakdown by category, see [What can Cowork do for you?](index.md#what-can-cowork-do-for-you)

## How is Cowork different from Copilot Chat?

Cowork completes multi‑step work across Microsoft 365 by taking action on your behalf, while Copilot Chat helps you generate content and insights within a single conversation.

|Feature  |Copilot Chat  | Cowork  |
|---------|---------|---------|
|What it is     | Always‑on AI for drafting, summarizing, answering questions         |  Agentic AI that completes multi‑step work across Microsoft 365       |
|Best for     |  Fast, focused, single‑task support     | End‑to‑end work across multiple apps    |
|Speed     | Seconds to minutes    |  Minutes to hours (autonomous execution)   |
|Task complexity   |  Single-step, single-session    | Multi‑step workflows across tasks and sources  |
|Use when…      | You need a quick draft, answer, or insight   |  You need Copilot to take action across apps, files, or systems    |
|Top scenarios  | Quick daily catch-up, project status, Q&A, or drafting content    | Inbox and calendar clean-up, project launches, or meeting preparation.    |

Copilot Chat helps you think through your work, supports fast, single-step inputs, and generates output for you to act on. Cowork helps you get work done by completing complex, coordinated actions across your apps, files, and data.

## What skills does Cowork have?

Cowork has 13 built-in skills: Word, Excel, PowerPoint, PDF, Email, Scheduling, Calendar Management, Meetings, Daily Briefing, Enterprise Search, Communications, Deep Research, and Adaptive Cards. You can also create your own custom skills by placing a `SKILL.md` file in a subfolder of your OneDrive `/Documents/Cowork/skills/` folder (for example, `/Documents/Cowork/skills/weekly-report/SKILL.md`).

For a detailed description of each skill, see [Cowork skills](use-cowork.md#cowork-skills).

## Can I create my own custom skills?

Yes. You can create up to 50 custom skills by placing `SKILL.md` files in your OneDrive `/Documents/Cowork/skills/` folder or by using natural language to ask Cowork to create skills for you. Each file contains a YAML frontmatter block with a name and description, followed by the skill instructions. Cowork discovers your custom skills automatically at the start of each conversation.

For step-by-step instructions, see [Create custom skills](use-cowork.md#create-custom-skills).

## How do I start using Cowork?

Getting started takes just a few steps.

1. Open  [Microsoft 365 Copilot](https://m365.cloud.microsoft).
1. Select **Cowork**.
1. Describe the task you want to accomplish. You can type up to 250,000 characters and attach files by dragging them into the chat or using the file picker.
1. Send your message. Cowork begins processing your request.

## Does Cowork work on mobile devices?

Cowork is currently available in your browser at [m365.cloud.microsoft](https://m365.cloud.microsoft) and in the Microsoft 365 Copilot desktop app for Windows and Mac. Mobile support isn't yet available.

## What file types does Cowork support?

You can attach a wide variety of files to your conversations. Cowork supports the following categories:

- **Word**: `.doc`, `.docx`, `.docm`, `.dot`, `.dotx`, `.odt`, `.rtf`
- **Excel**: `.csv`, `.xls`, `.xlsm`, `.xlsx`, `.ods`
- **PowerPoint**: `.odp`, `.ppt`, `.pptm`, `.pptx`
- **PDF**: `.pdf`
- **Markdown**: `.md`, `.markdown`, `.mdx`
- **Image**: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.bmp`, `.svg`, `.ico`
- **Text**: `.txt`, `.log`
- **Code**: `.js`, `.ts`, `.py`, `.java`, `.c`, `.cpp`, `.go`, `.rb`, `.rs`, and others
- **Config**: `.json`, `.yaml`, `.yml`, `.toml`, `.ini`, `.xml`, `.env`
- **Notebook**: `.ipynb`
- **Audio**: `.mp3`, `.wav`, `.m4a`, `.ogg`, `.aac`, `.flac`
- **Video**: `.mp4`, `.mov`, `.avi`, `.mkv`, `.webm`, `.wmv`
- **Archive**: `.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`

## Can I preview files without downloading them?

Yes. You can preview the following file types directly in the conversation:

- PDF
- Microsoft 365 documents (Word, Excel, PowerPoint)
- CSV
- Markdown
- Code files (with syntax highlighting)
- Images
- HTML
- Email

Select a file to open an inline preview. You can also go full-screen or open the file in its native app.

## How does action approval work?

Before Cowork takes a sensitive action like sending an email or posting in Teams, it displays an approval prompt. Approvals for medium and high risk actions include a risk level indicator so you can gauge the impact. Your choices are:

- **Action button** (for example, **Send**, **Post**, or **Create**): Let Cowork proceed with the action this one time.
- **Don't ask again**: Select the dropdown arrow next to the action button to allow the action now and skip the prompt for similar actions in the current conversation.
- **Cancel**: Stop Cowork from taking the action.

You can also select **Show parameters** to see the technical details of the action before deciding.

> [!NOTE]
> For some actions, such as sending an email, posting a Teams message, or scheduling a meeting, Cowork shows you a preview of the content so you can review it before approving.

## Can I pause or stop Cowork while it's working?

Yes. You have the following controls:

- **Pause**: Cowork waits for the current step to finish, then pauses. You can also do a hard pause that stops it immediately.
- **Resume**: Continue from where Cowork stopped.
- **Cancel**: End the current task entirely.

## What happens if I lose my connection?

Cowork automatically reconnects and picks up where it left off. Progress made while you were disconnected is preserved, so you don't lose any work.

## Can I use my voice to talk to Cowork?

Yes. Select the microphone button in the chat input to speak your message. Cowork transcribes your words and sends them as text.

> [!NOTE]
> Voice input availability depends on your browser. Not all browsers support this feature.

## How do I manage my tasks?

Select **Tasks** from the main navigation to see all your conversations with Cowork. You can switch between three views:

- **List**: Shows tasks in a vertical list.
- **Board**: Organizes tasks into columns by status.
- **Scheduled**: Shows your scheduled prompts with options to edit, pause, resume, or delete them. This view only appears when you have at least one scheduled prompt.

Select any task to jump back into its conversation.

## Can I schedule recurring prompts?

Yes. Describe what you want and when in your message&mdash;for example, "Send me a daily briefing every morning at 9 AM." Cowork sets up the schedule based on your request. You can manage your scheduled prompts from the **Scheduled** tab in the **Tasks** view, or from the **Schedule** section of the side panel.

## Where are my files saved?

Files that Cowork creates are saved to your **OneDrive and SharePoint** workspace. You can browse them in the side panel during a conversation or access them directly in OneDrive at any time.

## Can I download all output files at once?

Yes. When Cowork produces multiple files, select **Download All** at the top of the output file list to download everything as a single zip archive.

## Can an administrator disable Cowork?

Yes. Administrators can manage access to Cowork through the Microsoft 365 admin center:

- **Disable for specific users**: Add users to a security group configured to exclude them from the Copilot experience.
- **Control deployment**: In the Microsoft 365 Apps admin center, administrators can disable automatic installation of the Microsoft 365 Copilot app or manage distribution through Microsoft Intune, Configuration Manager, or Group Policy.
- **Manage availability**: Administrators can manage availability for users in their organization through the Copilot settings in the admin center.

For more information, see [Microsoft 365 Copilot admin settings](/microsoft-365-copilot/copilot-for-microsoft-365-admin).

## Are there known limitations?

Yes. The following limitations are by design:

- Cowork can't access or edit files stored locally on your device. It works with files in OneDrive and SharePoint.
- Cowork can't delete files or folders in OneDrive or SharePoint.
- Custom skills created by users aren't validated by Microsoft. Review custom skill outputs carefully.
- Attached files must be less than 200 MB.
- Cowork can't read encrypted files, even if the user has access.

## Is Cowork secure?

Yes. Every action Cowork takes is authorized through your Microsoft 365 account. Cowork accesses only the services and data you're already permitted to use. Cowork runs in a secure, isolated environment.

## How do I give feedback?

You can share feedback in the following ways:

- **Thumbs up / thumbs down**: Rate any response from Cowork directly in the conversation.
- **Document feedback**: When previewing a file Cowork created, use the feedback controls to rate it.
- **Inline comments**: Leave comments directly on messages in the conversation to provide targeted feedback on specific parts of a response.
- **General feedback**: To share broader thoughts about your experience, open the menu and select the feedback option.

## Does Cowork ask me questions?

Yes. Sometimes Cowork needs more information to complete your request. When this happens, it presents a question with a set of choices for you to pick from. You can select an option, type your own answer, or select **Skip** to let Cowork continue without additional input. The task status shows **Needs user input** when Cowork is waiting for your answer.

## Does Cowork connect to external models for processing?

Yes. Cowork uses Anthropic models as a subprocessor to ensure secure and responsible use of Anthropic models within your organization. Details about the integration can be found at [Anthropic as a subprocessor for Microsoft Online Services](/microsoft-365/copilot/connect-to-ai-subprocessor).

## Are there unsupported countries/regions?

Access to use Anthropic models via Microsoft services is limited to the [countries that Anthropic currently supports](https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions). There are limited exceptions to these regional restrictions for features in worldwide products and services that constrain access and use of Anthropic models. Copilot Cowork is not an exception, and use and access is currently limited to Anthropic supported regions.

## Related content

- [Cowork overview](index.md)
- [Get started with Cowork](get-started.md)
- [Use Cowork](use-cowork.md)

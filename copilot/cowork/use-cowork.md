---
title: "Use Cowork (Frontier)"
description: "Learn how to have conversations, manage files, approve actions, and organize projects with Microsoft 365 Copilot Cowork."
ms.date: 04/07/2026
ms.topic: how-to
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

# Use Cowork (Frontier)
[!INCLUDE [cowork-top-note](../includes/cowork-top-note.md)]
[!INCLUDE [cowork-preview](../includes/cowork-preview.md)]

Microsoft 365 Copilot Cowork carries out tasks on your behalf, such as sending emails, creating documents, scheduling meetings, and searching across your organization. This article explains everything you can do with Cowork.

## Start a conversation

The Cowork home page has a chat input where you can type or speak your request. Below it, a list of your recent tasks appears, so you can resume a previous conversation.

### Type a message

1. Go to the Cowork home page. You see a set of suggested prompts such as **Catch me up**, **Organize my inbox**, **Organize my week**, **Prep for a meeting**, **Plan an event**, **Prepare for my 1:1**, and **Research a company**. Select one to get started quickly, or continue with the steps below.
1. Select the chat input field.
1. Type your message or instruction. You can enter up to 250,000 characters.
1. Submit your message by pressing **Enter** or selecting the **Send** button.

### Attach files

To give Cowork extra context, you can include files with your message.

1. Choose how to add files:
   - **Drag and drop** files directly onto the chat input.
   - Select the **Add attachments** button, then choose one of the following:
     - **Add work context** to reference files, people, or meetings from your organization.
     - **Upload images and files** to browse your device.
     - **Attach cloud files** to pick files from OneDrive, SharePoint, or Teams.
1. Wait for the upload to finish. An animated progress chip for each file displays.
1. Add your message text if needed, then send it.

### Use voice input

You can also use speech-to-text to dictate your message.

1. Select the microphone button in the chat input area.
1. Speak your message clearly.
1. Review the transcribed text in the input field.
1. Edit the text if needed, then send it.

> [!TIP]
> Check the home page for your recent tasks. Select any task to jump back into that conversation without starting over.

## Follow along as Cowork works

After you send a message, Cowork begins processing your request. You can follow along in real time.

### What displays while Cowork is working

As Cowork works on your request, some things happen on screen:

- **Thinking indicator**: An animation lets you know Cowork is processing your message.
- **Step-by-step updates**: Updates show what Cowork is doing at each stage, such as *Composing your email* or *Searching OneDrive*.
- **Streaming response**: Cowork's reply appears word by word as it generates, so you don't have to wait for the entire response.
- **Interactive cards**: Some responses include interactive cards with structured layouts, buttons, and data displays directly in the conversation.

> [!NOTE]
> Some background operations, like script execution, run without displaying individual steps. This keeps the conversation focused on results.

### Stay informed about your connection

A status indicator shows your connection state:

- **Connecting**: Cowork is getting ready.
- **Connected**: The connection is active.
- **Reconnecting**: The connection dropped briefly. Cowork is working to restore it automatically.
- **Failed**: Something went wrong. Select **Retry** to try connecting again.

### Send messages while Cowork is busy

If you think of something else while Cowork is still working, you can send another message. It's queued automatically. Your message appears above the input field. Cowork processes queued messages in order. If your new message changes the direction of the task, Cowork adjusts its approach accordingly.

### Answer questions from Cowork

Sometimes Cowork needs more information to complete your request. When this happens, it presents a set of choices for you to pick from.

1. Review the question and the available options.
1. Use the arrow keys to navigate, then press **Space** to select your choice.
1. Select **Submit** to send your answer.

If you'd rather not answer, select **Skip**. Cowork continues with the information it already has.

### If something goes wrong

If a message fails to send, Cowork shows you an error with an option to retry. To resend the message, select **Retry**.

## Approve actions

Cowork asks for your permission before taking sensitive actions, like sending an email or posting a message in Teams. Approvals for medium and high risk actions include a risk level indicator so you know the impact. The approval button label matches the specific action. The following table explains the options you have when approving:

   | Option | What it does |
   |---|---|
   | Action button (for example, **Send**, **Post**, or **Create**) | Allows Cowork to proceed with the action this one time. |
   | **Don't ask again** (dropdown) | Select the dropdown arrow next to the action button. Allows Cowork to proceed and skips the approval prompt for similar actions in the current conversation. |
   | Approve All | When multiple tool approvals are pending, allows all of them to proceed at once. |
   | Cancel | Stops the action. Cowork skips it and moves on with the rest of your request. |

### Review and respond to an approval request

When you need an approval, a dialog appears with the details of the action Cowork wants to take. For some actions, a rich preview of the content appears (for example, a draft email, a Teams message, or a scheduled meeting). For other actions, a summary of what Cowork plans to do appears. Approvals for medium and high risk actions include a risk level indicator so you can gauge the impact before deciding.

> [!IMPORTANT]
> Always review the details before you approve. Cowork shows you exactly what it plans to do. Check that the recipients, content, and other details are correct.

> [!NOTE]
> For certain actions like Outlook mail rules, Cowork presents a detailed approval card that shows exactly what the rule will do before you approve.

1. From the previous table, select the action button (for example, **Send** or **Post**), expand the dropdown for the **don't ask again** option, or select **Cancel** to stop the action.

1. To see the technical details of the action, select **Show parameters**.

    To collapse the view, select **Hide parameters**.

## Work with files

Cowork can work with a wide variety of files. You can upload files to provide context, and download files that Cowork creates for you.

### Upload files

1. Drag and drop files onto the chat input area, or select the file picker button to browse your device.
1. Watch the animated progress chips as each file uploads.
1. Once the upload finishes, Cowork can use the file in your conversation.

### Download output files

When Cowork creates or updates files during a conversation, you can grab them from the side panel.

1. Open the side panel if it isn't already visible.
1. Under the **Output folder** section, find the file.
1. To save the file to your device, select **Download**.

> [!TIP]
> When Cowork produces multiple output files, select **Download All** at the top of the output file list to download every file as a single zip archive. The archive can include up to 50 files and 500 MB total.

> [!NOTE]
> You can also access files that Cowork creates directly in your OneDrive **Cowork** folder at any time.

### Supported file types

Cowork supports the following file types:

| Category | Supported extensions |
|---|---|
| Word | doc, docx, docm, dot, dotx, odt, rtf |
| Excel | csv, xls, xlsm, xlsx, ods |
| PowerPoint | odp, ppt, pptm, pptx |
| PDF | pdf |
| Markdown | md, markdown, mdx |
| Image | png, jpg, jpeg, gif, webp, bmp, svg, ico |
| Text | txt, log |
| Code | js, ts, py, java, c, cpp, go, rb, rs, and others |
| Config | json, yaml, yml, toml, ini, xml, env |
| Notebook | ipynb |
| Audio | mp3, wav, m4a, ogg, aac, flac |
| Video | mp4, mov, avi, mkv, webm, wmv |
| Archive | zip, rar, 7z, tar, gz, bz2 |

## Preview documents

You can preview many file types directly inside Cowork. You don't need to download them first. The preview opens alongside your conversation in a split view.

### Supported preview formats

The following file types can be previewed directly:

- **PDF**: Renders inline with page navigation. Use **Ctrl+F** to search within the document.
- **Microsoft 365 documents**: Word, Excel, and PowerPoint files open in an online preview.
- **CSV**: Displays as a formatted table.
- **Markdown**: Renders with full formatting.
- **Code files**: Displays with syntax highlighting (JSON, JavaScript, TypeScript, Python, Java, C, C++, Go, Rust, Ruby, and others).
- **Images**: Displays inline (png, jpg, jpeg, gif, webp, bmp, svg, ico).
- **HTML**: Renders in the preview pane.
- **Email**: Opens email references in a side-by-side preview panel.

### Preview a document

1. Select a file from the conversation or from the side panel.

    The preview opens in a split view next to your chat.

1. Use the controls to get the most out of the preview:

   - **Full-screen toggle**: Expand the preview to fill the entire window for a closer look.
   - **Open in native app**: Open the file in its default application on your device.
   - **Feedback buttons**: Rate the document with thumbs up or thumbs down.

## Use the side panel

The side panel is a collapsible sidebar on the right side of your conversation. It gives you a quick overview of what's happening without interrupting your chat.

To open or close it, select the side panel toggle in the conversation view.

### What's in the side panel

| Section | What you find |
|---|---|
| Progress | A progress bar showing the percentage of tasks complete, plus a step-by-step log of what Cowork is doing. |
| Input folder | Files you provided as context for the conversation. |
| Output folder | Files Cowork created. Each file has **Download** and **Preview** buttons. |
| Skills | Skills that Cowork loaded during the conversation, shown as chips. |
| Schedule | Scheduled prompts you created, with options to edit, pause, resume, or delete them. |
| Permissions | Actions you approved with **don't ask again**, so you can review your approval preferences. |

> [!NOTE]
> The side panel updates in real time as Cowork works, so you always have a current view of progress, files, and skills.

## Control the conversation

Cowork provides controls to pause, resume, or stop work at any time.

### Pause

You have two ways to pause:

- **Pause (soft)**: Cowork finishes what it's currently doing, then pauses before starting the next step. Use this when you want to review progress so far.
- **Pause (hard)**: Cowork pauses immediately, including mid-step. Use this when you need to stop now.

### Resume

After pausing, select **Resume** to continue from where Cowork stopped.

### Cancel

To stop Cowork's current work entirely, select **Cancel**. Canceling clears the current task so you can send a new message without needing to resume.

> [!TIP]
> Use **Pause (soft)** when you want to check intermediate results before Cowork continues. Use **Cancel** when you want to change direction entirely.

## Manage your tasks

Select **Tasks** from the main navigation to see all your conversations with Cowork.

### Switch between views

Choose the view that works best for you:

| View | Description |
|---|---|
| List | Shows tasks in a vertical list with key details. |
| Scheduled | Shows your scheduled prompts with options to edit, pause, resume, or delete them. |

### Track task status

Each task shows a status that tells you where things stand:

| Status | Meaning |
|---|---|
| In progress | Cowork is actively working on the task. |
| Needs user input | Cowork is waiting for your response before it can continue. |
| Done | The task is finished. |
| Failed | The task didn't complete. Review the conversation for details. |

Select any task to open its conversation and continue working.

## Browse OneDrive files

To pull in the files you need, you can browse your OneDrive files and folders directly from Cowork.

1. From the file selection interface, open the OneDrive file browser.
1. Browse your files and folders in the tree view.
1. Use the breadcrumb trail at the top to navigate, or select a folder to open it.
1. To include a file in your conversation, select it.

> [!NOTE]
> If your files don't load, Cowork shows a **Retry** button. To try again, select it.

## Cowork skills

Cowork uses specialized skills as it works. When Cowork loads a new skill during your conversation, a message such as "Preparing to compose emails" appears, and the skill shows up in the side panel. The following out-of-the-box skills are available:

| Skill | What it does |
|---|---|
| Word | Create and edit Word documents. |
| Excel | Create and edit Excel spreadsheets. |
| PowerPoint | Create and edit PowerPoint presentations. |
| PDF | Work with PDF documents. |
| Email | Compose, reply, forward, and send emails. Save drafts and manage attachments. |
| Scheduling | Schedule meetings. |
| Calendar Management | Create events using natural language, add Teams meeting links, and manage your calendar. |
| Meetings | Prepare meeting intelligence. |
| Daily Briefing | Prepare your daily briefing. |
| Enterprise Search | Search across your organization. |
| Deep Research | Conducts in-depth research across multiple sources to compile comprehensive answers and analysis on complex topics. |
| Communications | Draft stakeholder communications. |
| Adaptive Cards | Generates interactive card-based responses with structured layouts, buttons, and data displays in the conversation. |

You can display which skills Cowork loaded during a conversation in the **Skills** section of the side panel. They appear as chips.

### Create custom skills

You can extend Cowork by using natural language or by adding custom skills in your OneDrive folder.

To create a skill with natural language, tell Cowork what you want the skill to do or simply tell Cowork that you'd like help creating a skill. Cowork will guide you through the process of creating the skill.

To create skills in OneDrive using Markdown, use the following steps:

1. In your OneDrive, navigate to the `/Documents/Cowork/skills/` folder. Create it if it doesn't exist.
1. Create a subfolder with your skill name (for example, `/Documents/Cowork/skills/weekly-report/`).
1. Inside the subfolder, create a file named `SKILL.md`.
1. Add a YAML frontmatter block with a `name` and `description`, followed by the skill instructions in Markdown:

   ```yaml
   ---
   name: Weekly Report
   description: Generates a weekly status report from my recent emails and calendar.
   ---

   Gather my sent emails and calendar events from the past week, then create
   a summary document organized by project.
   ```

1. Save the file. Cowork discovers your custom skills automatically at the start of each conversation.

> [!NOTE]
> You can create up to 50 custom skills. Each `SKILL.md` file can be up to 1 MB.

## Schedule prompts

You can schedule a prompt to run automatically on a recurring basis. To create a scheduled prompt, describe what you want and when in your message. For example, "Send me a daily briefing every morning at 9 AM" or "Create a weekly status report every Friday."

Cowork sets up the schedule based on your request. You can manage your scheduled prompts from the **Scheduled** tab in the **Tasks** view, or from the **Schedule** section of the side panel. From there, you can edit, pause, resume, or delete any scheduled prompt.

When you activate a draft scheduled prompt, Cowork asks whether to **Activate and run now** (starts immediately so you can watch and approve actions) or **Activate** (the first run happens at the next scheduled time). You can create up to five scheduled prompts.

## Provide feedback

Your feedback helps improve Cowork. You can share it in many ways.

### Rate responses

1. Hover over any response from Cowork in the conversation.
1. Select **thumbs up** if the response was helpful, or **thumbs down** if it wasn't.

### Rate documents

1. Open a document in the preview panel.
1. Use the **thumbs up** or **thumbs down** buttons to rate the quality of the document.

### Leave inline comments

You can leave inline comments directly on messages in the conversation to provide targeted feedback on specific parts of Cowork's response.

### Send general feedback

1. Open the header menu.
1. Select the feedback option.
1. Enter your feedback and submit.

## Keyboard shortcuts

Cowork supports keyboard shortcuts to help you work faster.

1. Select the **Keyboard shortcuts** button in the header, or press **Ctrl+Shift+/**.

    A dialog opens showing all available shortcuts and their key combinations.

> [!TIP]
> Take a moment to explore the keyboard shortcuts. They can save you time once you learn the ones you use most.

## Related content

- [Cowork overview](index.md)
- [Get started with Cowork](get-started.md)
- [Cowork common questions](cowork-faq.md)

---
title: Copilot Tuning Document Summary agent template (early access preview)
description: Learn how to configure and tune the Document Summary agent template in Copilot Tuning to generate summaries that align with your organization’s goals, tone, and audience.
author: david-salas
ms.author: dsalasbarran
manager: calvind
ms.date: 04/10/2026
ms.update-cycle: 180-days
ms.reviewer: riyazp
audience: Admin
ms.topic: overview
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
- m365copilot
- magic-ai-copilot
---

# Copilot Tuning Document Summary agent template (early access preview)

The **Document Summary** agent template helps you generate summaries that reflect your organization’s voice, priorities, and quality standards. By using Copilot Tuning, you can configure the agent to adapt summaries to specific audiences, purposes, tones, and lengths without rewriting prompts every time.

This capability is useful for scenarios such as executive briefings, legal and compliance reviews, education, healthcare documentation, internal communications, and business development. By standardizing how teams produce summaries, they can save time, improve decision-making, and deliver consistent results.

[!INCLUDE [copilot-tuning-preview](./includes/copilot-tuning-preview.md)]

## What the agent can do

By using the Document Summary agent template, you can:

- Generate summaries from supported files based on instructions you provide for tone, audience, purpose, length, and focus areas.
- Create specialized summarization agents by tuning goals and context.
- Optionally fine-tune the agent by using your organization’s own data to improve relevance and consistency (coming soon).

:::image type="content" source="media/copilot-tuning-document-summary-template/what-agent-can-do.png" alt-text="Screenshot that shows the agent can generate summaries, create summarization agents, and fine-tune based on organizational data." lightbox="media/copilot-tuning-document-summary-template/what-agent-can-do.png":::

When you enable fine-tuning, the agent can:

- Learn what information is most important based on high-quality examples.
- Apply your summarization goals and rubrics consistently across documents.

:::image type="content" source="media/copilot-tuning-document-summary-template/what-agent-can-do-2.png" alt-text="Screenshot that shows the agent can learn what's important and apply goals and rubrics." lightbox="media/copilot-tuning-document-summary-template/what-agent-can-do-2.png":::

## Supported inputs and outputs

The agent supports the following inputs and outputs:

- **Supported file types**: Word (.docx) and PDF (.pdf)
- **Input scope**: Single files or folders containing multiple files
- **Outputs**:
  - A summary generated in the Copilot conversation
  - A draft summary document delivered by email

:::image type="content" source="media/copilot-tuning-document-summary-template/inputs-and-outputs.png" alt-text="Screenshot that shows supported file types, input scopes, and outputs." lightbox="media/copilot-tuning-document-summary-template/inputs-and-outputs.png":::

## Use the agent for inference

Before you fine-tune the agent, test it by running inference with sample prompts. Prompts must reference one or more input files.

**Example prompt**:

Summarize the key profit drivers and growth areas based on EarningsStatement2024.docx and EarningsStatement2025.docx.

### Supported prompt patterns

The Document Summary agent template supports single file and multiple file prompt patterns.

- **Single file:** Summarize the key highlights and lowlights for a leadership review based on ProjectStatus.docx.

- **Multiple files:** Summarize project risks based on TeamA_Status.docx, TeamB_Status.docx, and TeamC_Status.docx.

:::image type="content" source="media/copilot-tuning-document-summary-template/supported-prompt-patterns.png" alt-text="Screenshot that shows supported prompt patterns are single file and multiple files." lightbox="media/copilot-tuning-document-summary-template/supported-prompt-patterns.png":::

## Prerequisites

Document Summary uses a goals- and rubric-based training approach. Unlike other tuning recipes, you don't need to provide ideal output examples upfront.

Before you begin context tuning, prepare the following items:

1. **Clear goals** that describe what a high-quality summary should look like.
1. **Context inputs** such as purpose, audience, length, tone, and focus sections.
1. **Sample input files** that represent the documents you want summarized.
1. A process to review and refine clarifying questions and evaluation metrics.

> [!NOTE]  
> This recipe uses reasoning-based fine-tuning. The model learns to reason over input content by using your goals, questions, and metrics as rubrics for quality.

## Context tuning

By using context tuning, you can set the default behavior for the agent, regardless of the runtime prompt.

### Define goals and tasks

Start by defining your summarization goals. These goals describe the agent’s role, priorities, and quality expectations.

The following example shows a goal:

- You're an expert project manager at Contoso. Create purpose-driven, audience-appropriate summaries for busy readers who care about key risks and mitigations.

You can optionally include **guidelines** to act as rubrics, such as:

- Follow all user instructions.
- Honor the stated purpose of the summary.
- Adapt content to the specified audience.
- Match the requested tone (for example, neutral or legal).
- Respect approximate length requirements.
- Include or exclude sections as specified.
- Reflect the full intent of the user’s instructions.

### Select business categories

Specify one or more business categories or industries (for example, Project Management, Legal, or HR). These categories help the system better interpret your goals and context.

### Upload sample input files

Upload one or more files that represent typical inputs for this agent. The system uses these files to simulate evaluations during tuning. You don't need to provide sample summaries at this stage.

### Review clarifying questions

The system generates clarifying questions based on your goals and inputs. Review and edit these questions to ensure they align with the task you want the agent to perform.

### Review metrics

Review the metrics used to evaluate the agent's performance. The system generates a benchmark using your sample inputs and estimates output quality.

Add, remove, or edit metrics to better reflect your real-world success criteria.

### Finalize context tuning

After the evaluations complete, you receive an email notification. If the metrics meet your expectations, you can publish the agent or proceed to model tuning to further improve results.

## Related content

- [Copilot Tuning overview](copilot-tuning-overview.md)


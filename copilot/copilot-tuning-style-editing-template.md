---
title: Copilot Tuning Style Editing agent template (early access preview)
description: Learn how to use and tune the Style Editing agent template in Microsoft 365 Copilot to rewrite content so it aligns with your organization’s brand tone, voice, and writing standards.
author: david-salas
ms.author: dsalasbarran
manager: calvind
ms.date: 04/13/2026
ms.update-cycle: 180-days
audience: Admin
ms.topic: overview
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
ms.collection:
- m365copilot
- magic-ai-copilot
---

# Copilot Tuning Style Editing agent template (early access preview)

The **Style Editing** agent template helps organizations standardize how content is rewritten so it consistently reflects their brand tone, voice, and writing standards. By using Copilot Tuning, you can configure the agent to apply style rules automatically while preserving the original meaning and intent of the content.

This agent is designed for teams that produce large volumes of written content and want consistent, high‑quality results without repeated manual editing.

[!INCLUDE [copilot-tuning-preview](./includes/copilot-tuning-preview.md)]

## What the Style Editing agent template does

The Style Editing agent template can:

- Rewrite drafts to align with a defined tone, voice, and writing style
- Preserve meaning and intent while improving clarity and consistency
- Apply organizational style rules automatically after tuning
- Support additional refinement through context tuning and model tuning

:::image type="content" source="media/copilot-tuning-style-editing-template/what-style-editing-template-does.png" alt-text="Screenshot showing the capabilities of the style editing template." lightbox="media/copilot-tuning-style-editing-template/what-style-editing-template-does.png":::

Use the default agent for ad-hoc rewriting or tune it to create a specialized agent that writes in your organization’s voice by default.

The default agent applies style based on instructions or guidelines you provide directly in the prompt.

The tuned agent persists your organization's style guide and examples in the agent, so you don't need to restate rules for each rewrite.

## Use the agent before tuning

Before tuning, test the default Style Editing agent template.

To get started, provide either a text excerpt, or a document link, along with a rewrite instruction, such as *rewrite*.

The following are example prompts:

- Rewrite IdeaCoachAgentDocumentation.docx using the BrandStyleGuide.docx file for style rules.
- Rewrite "We took a quick look at the document and a few sections feel wordy…" using the tone in BrandVoice.docx.

## Training approach

Tune the Style Editing agent template by using **high-quality positive examples** that represent your organization’s brand voice and tone. A combination of a definitive style guide and strong writing samples is sufficient to begin tuning.

Before tuning, prepare the following items:

1. **Clear goals** - Define what the ideal rewritten output should look like.
1. **Sample files** - Provide at least **20 files** that reflect your brand voice. Supported formats include:
   - .txt  
   - .pdf  
   - .docx  
   - .md  
   - .html or .htm  
   - .csv  
1. **Style guide** - A comprehensive document describing tone, voice, and writing rules.

## Context tuning

Context tuning teaches the agent how to apply your style rules consistently across rewriting tasks.

### Define goals and tasks

In the Context Tuning experience, define how the agent should behave when rewriting content. Update the default goal prompt to reflect your desired outcomes.

The following are goal examples:

- The agent should rewrite content so it aligns with the Microsoft tone and voice.  
- The agent must preserve meaning and intent while improving clarity and consistency.

Rewrites should:

- Align with the Microsoft style guide
- Use tone-appropriate language
- Preserve meaning and intent
- Maintain approximate length

### Optional guidelines

Add optional guidelines to specify extra constraints or quality indicators the agent must follow.

## Business category or industry

Specify one or more categories that represent the agent's usage context, such as:

- Technical Content Writer
- Legal
- Human Resources
- Project Management

These categories help the system interpret goals and generate relevant evaluations.

## File upload for testing

Upload example input files that represent typical content the agent processes at runtime. Use these files to simulate evaluations.

> [!TIP]  
> You don't need to upload ideal output samples during context tuning.

## Review clarifying questions

The system generates clarifying questions that reflect how the agent interprets its task. Review and refine these questions to ensure they align with your intended behavior.

## Review metrics

Metrics define how the system evaluates output quality.

During evaluation, the system generates a benchmark by using sample inputs.

## Finish context tuning

Upload your style guide and generate rules. You can review, add, edit, or delete the rules and subrules extracted from the style guide you provide. After you complete this stage, you don't need to provide a style guide in every agent prompt or conversation. The system starts evaluations and concludes the context tuning after this step.

You can then proceed to tool tuning or model tuning.

## Model tuning data

To tune the model, prepare a folder containing **at least 20 example output files** that represent ideal results.

- The system doesn't support individual file selection.
- You must select a folder.
- Supported file types include: .txt, .pdf, .docx, .md, .html, .htm, and .csv.
- Using larger datasets (hundreds or thousands of files) typically results in higher-quality improvements compared to out-of-box agents.

### Tune model

Model tuning lets you select training data, configure access, and start fine-tuning.

1. **Provide preferred outputs:** Select a folder containing at least 20 ideal output examples.
1. **Review access:** Choose one or more Microsoft Entra security groups or restrict access to yourself.
1. **Start fine-tuning:** Select **Start fine-tuning** in the interface. The system doesn't currently support automatic start.
1. **Deployment:** After tuning completes, you receive an email to review results and publish the model.

:::image type="content" source="media/copilot-tuning-style-editing-template/tune-model.png" alt-text="Screenshot showing the model tuning steps." lightbox="media/copilot-tuning-style-editing-template/tune-model.png":::

## Use your tuned agent 

You can use the agent after completing any stage: context tuning or model tuning.

Inference prompts don't need a style guide to be uploaded every time after either context tuning or model tuning.

> [!NOTE]
> Tuned agents don't currently support follow-up prompts. While this capability is under development, ignore follow-up suggestions.

## Related content

- [Copilot Tuning overview](copilot-tuning-overview.md)

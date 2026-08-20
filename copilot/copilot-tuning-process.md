---
title: Customize Microsoft 365 Copilot with Copilot Tuning (early access preview)
description: Get an overview of the process to create a fine-tuned model with Copilot Tuning to customize Microsoft 365 Copilot for your organization.
author: lauragra
ms.author: lauragra
manager: calvind
ms.reviewer: riyazp
ms.date: 04/13/2026
ms.topic: article
ms.service: microsoft-365-copilot
ms.localizationpriority: medium
---
# Customize Microsoft 365 Copilot with Copilot Tuning (early access preview)

By using Microsoft 365 Copilot Tuning, organizations can tailor AI models to reflect their unique terminology, communication style, and business processes. When you fine-tune large language models (LLMs) with your own data, you can improve the accuracy, tone, and relevance of Copilot responses across your tenant.

Copilot Tuning goes beyond retention and retrieval to train tenant-specific LLMs on your organization's data while maintaining robust enterprise security, compliance, governance, and management controls. The LLMs are tuned for specific tasks like document summarization, document writing, expert answer, style editing, document validation, and optimization.

This article describes the process of tuning task-specific agents in Microsoft 365 Copilot for your organization.

[!INCLUDE [copilot-tuning-preview](./includes/copilot-tuning-preview.md)]

## Fine-tuning process overview

To fine-tune AI models for your organization by using Copilot Tuning – Tune model, follow these training and tuning steps:

- **Task specific adaptation** - Prepare data for training. Each task has its own recipe for preparing the right organization data for the fine tuning.

- **Fine-tuning training** - Each task has its own recipe and fine tuning technique for the best outcome by using organization data. These techniques include, but aren't limited to, Supervised Fine Tuning (SFT), Reinforcement learning (RL), and Reasoning Fine Tuning (RFT). These recipes and techniques also evolve over time.

- **Evaluation** - Each task has its own recipes for how to evaluate the output by using rubrics defined by the organization.

:::image type="content" source="media/copilot-tuning-process/fine-tuning-process.png" alt-text="Screenshot showing fine-tuning process." lightbox="media/copilot-tuning-process/fine-tuning-process.png":::

> [!NOTE]
> The models that you tune are private. Your data isn't used to train general models for other tenants. All processing of your data is done in the tenant that only your authorized users have access to train and use. Specific individuals, typically administrators, have control over the training process.

## Task-specific adaptation

Task-specific adaptation occurs after you ingest your corpora. This adaptation involves processing the organization's content from its original format into a plain text format with one statement per line.

## Supervised fine-tuning

Use supervised fine-tuning to adapt a pretrained model to specific tasks or organizational requirements by training it on labeled input-output pairs. This process helps the model learn to produce responses that align with your organization's preferred formats, tone, and compliance needs. Supervised fine-tuning:

- Teaches structure and tone - Models learn how to respond in ways that reflect your organization's voice.
- Improves task accuracy - By training on high-quality examples, the model becomes more reliable for enterprise use cases.
- Supports compliance - You can train models to recognize and respond to regulatory language and internal classifications.

## Reinforcement learning

Use reinforcement learning as a post-training technique to tailor LLMs to your organization's unique communication style, tone, and tool usage preferences. Unlike supervised fine-tuning, which teaches the model to produce correct outputs from labeled examples, reinforcement learning optimizes for subjective qualities by learning from feedback signals.

Reinforcement learning is helpful when you want your model to:

- Reflect a specific tone of voice (empathetic, formal, concise).
- Prefer certain tools (such as Microsoft Graph APIs over RAG-based retrieval).
- Avoid retrieving content from sensitive sources (like ACL-tagged documents).
- Learn from user feedback to continuously improve.

Reinforcement learning refines the model by scoring output based on organizational preferences, using both human and automated feedback to guide learning. For example, if Copilot receives positive feedback on a response to a vacation policy question, the model reinforces that response and reuses it in similar contexts. Conversely, if a response is flagged for tone or content, the model learns to avoid that pattern.

## Advanced adaptation and maintenance

By combining various fine-tuning techniques, you can create models that reflect your organization's tone, task completion patterns, and Microsoft Purview Data Governance requirements. These underlying models apply your organization's unique voice and operational knowledge to:

- Maintain consistent tone and formatting across tasks.
- Embed domain-specific knowledge for tasks such as document writing, summarization, and providing expert answers to questions.
- Respect access controls and data classification policies during training and inference.
- Generate accurate responses aligned with your internal standards and user expectations.

All evaluations are confidential and governed by Microsoft's Responsible AI principles.

You can continue to evolve your agent as new data becomes available and tune the model by:

- Uploading new data.
- Updating your goals and evaluation metrics to adapt to new task types or regulatory changes.

## Related content

- [Copilot Tuning overview](/microsoft-365/copilot/copilot-tuning-overview)
- [Copilot Tuning admin guide](/microsoft-365/copilot/copilot-tuning-admin-guide)

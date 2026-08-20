---
title: "Application card: Microsoft 365 Copilot"
description: "Provides transparency about Microsoft 365 Copilot, including information about responsible AI, key features, available models, intended uses, limitations, evaluations, safety components and mitigations, and best practices."
ms.author: danbrown
author: DHB-MSFT
manager: dansimp
ms.topic: concept-article
ms.service: microsoft-365-copilot
ms.subservice: m365-privacy
ms.collection: 
- magic-ai-copilot
- m365copilot
- privacy-microsoft365
- privacy-microsoft365-copilot
- must-keep
hideEdit: true
ms.update-cycle: 180-days
ms.date: 03/30/2026
---

# Application card: Microsoft 365 Copilot

## What is an Application or Platform card?

Microsoft’s Application and Platform cards are intended to help you understand how our AI technology works, the choices application owners can make that influence application performance and behavior, and the importance of considering the whole application, including the technology, the people, and the environment. Application cards are created for AI applications and platform cards are created for AI platform services. These resources can support the development or deployment of your own applications and can be shared with users or stakeholders impacted by them.

As part of its commitment to responsible AI, Microsoft adheres to [six core principles](https://www.microsoft.com/ai/principles-and-approach/?msockid=3da790040c776d6f2b5485e40de56c06#ai-principles): fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. These principles are embedded in the [Responsible AI Standard](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Microsoft-Responsible-AI-Standard-General-Requirements.pdf), which guides teams in designing, building, and testing AI applications. Application and Platform cards play a key role in operationalizing these principles by offering transparency around capabilities, intended uses, and limitations. For further insight, readers are encouraged to explore Microsoft’s [Responsible AI Transparency Report](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Responsible-AI-Transparency-Report-2025.pdf) and either the [Microsoft Enterprise AI Services Code of Conduct](/legal/ai-code-of-conduct) (for organizations) or the [Code of Conduct section in the Microsoft Services Agreement](https://www.microsoft.com/servicesagreement#3_codeOfConduct) (for individuals), both of which outline how to engage with AI responsibly.

## Overview

Microsoft 365 Copilot is an AI-powered productivity tool that helps enhance your creativity, productivity, and skills by using large language models (LLMs) and content that you have access to. It provides real-time intelligent assistance by working alongside popular Microsoft 365 apps and services, such Word, Excel, PowerPoint, Outlook, Teams, and more.

For example, at work you can have Microsoft 365 Copilot summarize a Teams meeting that you missed. At home, you can use Microsoft 365 Copilot to generate a slide show using photos from your family vacation.

For more information for organizations, see [Microsoft 365 Copilot overview](microsoft-365-copilot-overview.md) and [Microsoft 365 Copilot hub](/microsoft-365/copilot/). For individuals, see [Microsoft 365 Copilot help and learning](https://support.microsoft.com/microsoft-365-copilot).

## Key terms

The following table provides a glossary of key terms related to Microsoft 365 Copilot.

|Term  |Description  |
|---------|---------|
|Agents|Agents are designed to automate and execute business processes using AI, based on predefined instructions and access to organizational data. They can assist or act independently on behalf of individuals or teams—ranging from simple prompt-and-response interactions to fully autonomous task execution. For more information about the use of AI in Copilot agents, refer to those offerings directly.|
|Content of interactions|The term used to describe the user’s prompt and Microsoft 365 Copilot’s response to that prompt.|
|Enriched prompt|A prompt is enriched when additional instructions are added to the prompt to guide Microsoft 365 Copilot in generating a more specific and relevant response. |
|Grounding |Grounding refers to the process of providing input sources to the LLM related to the prompt. By enabling Microsoft 365 Copilot to access data to use as input sources, such as data from Microsoft Graph or Bing, Microsoft 365 Copilot may deliver more accurate, contextually relevant responses to users. |
|Indexing|Microsoft uses both lexical and semantic indexing of Microsoft Graph data to ground responses for Microsoft 365 Copilot in enterprise data. Indexing interprets prompts to produce contextually relevant responses. |
|Inferencing|Inferencing is the processing step when an AI model executes the prompt to produce an output or response, such as summarizing content or answering a question.|
|Large language model (LLM)|Large language models (LLMs) in this context are AI models that are trained on large amounts of text data to predict words in sequences. LLMs are capable of performing a variety of tasks, such as text generation, summarization, translation, classification, and more.|
|Microsoft Graph |Microsoft Graph is the gateway to data and intelligence in Microsoft 365. It includes information about the relationships between users, activities, and an organization’s data. |
|Post-processing|The processing Microsoft 365 Copilot does after it receives a response from the LLM. This post-processing includes additional grounding calls to Microsoft Graph, responsible AI, security, compliance, and privacy checks.|
|Processing |Processing of a user prompt in Microsoft 365 Copilot involves several steps, including responsible AI checks, to help Microsoft 365 Copilot provide relevant and actionable responses. |
|Prompt |A Prompt is the text sent to Microsoft 365 Copilot to execute a specific task or provide information. For example, a user might input the following prompt: Write an email congratulating my team on the end of the fiscal year. |
|Red team testing|Techniques used by experts to assess the limitations and vulnerabilities of a system and to test the effectiveness of planned mitigations. Red team testing is used to identify potential risks and is distinct from systematic measurement of risks. |
|Response|The content generated by the LLM and returned to Microsoft 365 Copilot as a reply to a prompt.|
|Responsible AI|Microsoft’s policy, research, and engineering practices that are grounded in our AI principles and operationalized through our Responsible AI standard. |

## Key features or capabilities

The key features and capabilities in the following table describe what Microsoft 365 Copilot is designed to do and how it performs across supported tasks.

|Feature  |Description  |
|---------|---------|
|Microsoft 365 Copilot in Word     |Microsoft 365 Copilot in Word transforms writing with efficiency and creativity –so that users can create, summarize, comprehend, refine, and elevate documents. Users can also use enhanced capabilities like visualizing and transforming text into a table. Some other capabilities also include adding onto existing prompts, drafting a document by referencing other documents and discovering information about documents. <br/><br/> For more information, see [Frequently asked questions about Copilot in Word](https://support.microsoft.com/office/7fa03043-130f-40f3-9e8b-4356328ee072).         |
|Microsoft 365 Copilot in PowerPoint     |Microsoft 365 Copilot in PowerPoint lets users create a new presentation from a prompt or Word file, leveraging enterprise templates. The chat feature enables Summary and Q&A and light commanding enables users to add slides, pictures, or make deck-wide formatting changes. PowerPoint files can also be used for grounding data. <br/><br/> For more information, see [Frequently Asked Questions about Copilot in PowerPoint](https://support.microsoft.com/office/3e229188-9086-4f4c-9f9f-824cd25ae84f).          |
|Microsoft 365 Copilot in Excel     |Microsoft 365 Copilot in Excel assists users with suggestions for formulas, chart types, and insights about data in spreadsheets. <br/><br/> For more information, see [Frequently asked questions about Copilot in Excel](https://support.microsoft.com/office/7a13758f-d61e-4a56-8440-f2c9a07802ec).           |
|Microsoft 365 Copilot in Outlook     |Microsoft 365 Copilot in Outlook helps manage the email inbox and create impactful communication more efficiently. Microsoft 365 Copilot in Outlook can summarize an email thread, suggest action items, replies, and follow-up meetings. It can also adjust length and tone when drafting an email.  <br/><br/> For more information, see [Frequently asked questions about Copilot in Outlook](https://support.microsoft.com/office/07420c70-099e-4552-8522-7d426712917b).         |
|Microsoft 365 Copilot in Teams     |Microsoft 365 Copilot in Teams can recap conversations, organize key discussion points, and summarize key actions. Users can get answers to specific questions and catch up on things they’ve missed in meetings or chat <br/><br/> For more information, see [Frequently asked questions about Copilot in Microsoft Teams](https://support.microsoft.com/office/e8737767-4087-4ae6-b1d8-10264152b05a).    |
|Microsoft 365 Copilot in Loop     |Microsoft 365 Copilot in Loop allows users to create content that can be collaboratively improved through direct editing or refinement by Copilot.  <br/><br/> For more information, see [Frequently asked questions about Copilot in Loop](https://support.microsoft.com/office/cdba1c99-3a3f-4f0d-bb1b-8ca62d0bb23d).         |
|Microsoft 365 Copilot in the Microsoft Clipchamp video player|Microsoft 365 Copilot in the Microsoft Clipchamp video player helps get information from any video with a transcript. Microsoft 365 Copilot in the Clipchamp video player can provide a summary of the video, answer specific questions, quickly jump to specific topics or points of discussion, and identify calls to action. <br/><br/> For more information, see [Frequently asked questions about Copilot in the Clipchamp video player](https://support.microsoft.com/topic/20ef6f0e-10f8-47aa-8bb7-697db7445fae).  |
|Microsoft 365 Copilot in Whiteboard|Microsoft 365 Copilot in Whiteboard helps kickstart the ideation process to generate, categorize, and summarize ideas. <br/><br/> For more information, see [Frequently Asked Questions about Copilot in Whiteboard](https://support.microsoft.com/topic/cbe05878-d68d-4d9d-83c1-5b47d6b76792).  |
|Microsoft 365 Copilot in OneNote|Microsoft 365 Copilot in OneNote enables users to draft plans, generate ideas, create lists, and organize information to help them find what they need in the OneNote app.<br/><br/> For more information, see [Frequently asked questions about Copilot in OneNote](https://support.microsoft.com/office/2d9136e0-132a-4d4c-ab0e-39cf3ed914cc).  |
|Microsoft 365 Copilot in Microsoft Forms|Microsoft 365 Copilot in Microsoft Forms provides AI-powered assistance with surveys, quizzes, and polls. Copilot can help users draft, review, send, and analyze results.<br/><br/> For more information, see [Frequently asked questions about Copilot in Forms](https://support.microsoft.com/office/c9941b72-b32e-4c7e-9af9-e603929bb1d2).|
|Microsoft 365 Copilot Chat|Microsoft 365 Copilot Chat (previously named Business Chat) combines the power of Large Language Models with the Internet, work content and context, and other apps, to help users draft content, catch up on what’s missed, and get answers to questions via prompts. <br/><br/> For more information, see [Frequently asked questions about Microsoft 365 Copilot Chat](https://support.microsoft.com/office/500fc65e-9973-4e42-9cf4-bdefb0eb04ce). |
|Microsoft 365 Copilot in SharePoint rich text editor|Microsoft 365 Copilot in Microsoft SharePoint rich text editor simplifies content creation on SharePoint pages and posts. With Copilot, you can rewrite text, adjust the tone, condense information, and elaborate ideas. <br/><br/> For more information, see [Frequently asked questions about Copilot in SharePoint](https://support.microsoft.com/office/eb1b7668-3d98-4a93-98ef-f0c6dfc694f0#faq-copilot-rte).|
|Microsoft 365 Copilot in OneDrive|Microsoft 365 Copilot in OneDrive is an innovative AI-powered assistant designed to help you interact with your documents by extracting information, comparing the key differences, summarizing files and generating insights. <br/><br/> For more information, see [Frequently asked questions about Copilot in OneDrive](https://support.microsoft.com/office/1bd55d10-7c46-417c-ab3d-e9c7be346947). |
|Microsoft 365 Copilot glance cards|Glance cards offer a quick preview of work entities, such as documents, to help assess relevance or recall. They're accessed by hovering over files in the Search tab of the [Microsoft 365 Copilot app](https://m365.cloud.microsoft/).|
|Power Platform Connectors|Power Platform Connectors allow customers to access data from a collection of business and personal productivity applications in the Microsoft 365 Copilot experience.|
|Microsoft 365 Copilot Connectors|Microsoft 365 Copilot Connectors allow you to ingest your unstructured, line-of-business data into Microsoft Graph, so that Microsoft 365 Copilot can reason over the entirety of your enterprise content. <br/><br/> For more information, see [Microsoft 365 Copilot connectors overview](/microsoft-365-copilot/extensibility/overview-copilot-connector). |
|Microsoft Purview|Microsoft Purview is a solution that helps organizations manage and protect their data. It provides a unified platform for data governance, information protection, risk management, and compliance. Customers can extend Microsoft Purview capabilities provided by customers’ Microsoft subscriptions (for example, Microsoft 365 E3 or E5 subscriptions) to Microsoft 365 Copilot data and interactions.|
| Microsoft 365 Copilot Tuning | Microsoft 365 Copilot Tuning allows organizations to fine-tune large language models (LLMs) by using their own tenant data. These models can be used to perform domain-specific tasks based on the organization's unique knowledge.<br/><br/>For more information, see [FAQ for Copilot Tuning](responsible-ai/copilot-tuning-responsible-ai-faq.md). |
|Microsoft Copilot Studio|Microsoft Copilot Studio is a powerful platform for building secure, scalable, and intelligent agents that work across Microsoft 365 and line-of-business systems. <br/><br/> For more information, see [Copilot Studio overview](/microsoft-copilot-studio/fundamentals-what-is-copilot-studio?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext).|
|Agent Builder feature in Microsoft 365 Copilot |The Agent Builder feature in Microsoft 365 Copilot provides a simple interface that you can use to quickly and easily build declarative agents, either by using natural language or manually. <br/><br/> For more information, see [Agent Builder in Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/agent-builder).|
|Microsoft 365 Copilot with computer-using agent|Microsoft 365 Copilot with computer-using agent allows you to automate browser or desktop tasks so that your prompts can make use of more of your content and context. Because the agent can perform tasks on your behalf, there can be an increased risk to system security or privacy. To help mitigate this risk, the agent has multiple safeguards, including model-driven safety checks over content and actions as well as tenant admin controls that enable or disable the computer-using agent and restrict which internet sites and domains the agent can access. We recommend that you apply these controls and that you assess usage of the agent.|

### Extensibility and customization

The Agent Builder feature in Microsoft 365 Copilot and Copilot Studio are tools for building secure, scalable, and intelligent agents that work across Microsoft 365 and line-of-business systems. Both tools allow you to create agents, but they serve different needs. Use the Agent Builder feature if you want to quickly create an agent for yourself or a small team, using natural language and existing content. Choose Copilot Studio if you need an agent for a broader audience or if the agent requires advanced capabilities like multi-step workflows or custom integrations. For more information, see [Choose between Microsoft 365 Copilot and Copilot Studio to build your agent](/microsoft-365-copilot/extensibility/copilot-studio-experience) and [Declarative agents for Microsoft 365 Copilot](/microsoft-365-copilot/extensibility/overview-declarative-agent).

For developers, the [Microsoft 365 Agents SDK](/microsoft-365-copilot/extensibility/create-deploy-agents-sdk) provides the tools to build agents that work closely with Microsoft 365 apps and services.

## Intended uses

Microsoft 365 Copilot can be used in multiple scenarios across a variety of industries. Some examples of use cases include:

- **Chat and conversation interaction and creation:** Users can interact with Microsoft 365 Copilot Chat and generate responses drawn from trusted documents such as internal company documentation or tech support documentation.
- **Search:** Users can search trusted source documents such as internal company documentation.
- **Summarization:** Users can submit content to be summarized for predefined topics built into the application. Examples include summarization of Teams chats, emails, web pages, and Word documents.
- **Writing assistance on specific topics:** Users can create new content or rewrite content submitted by the user as a writing aid for business content or predefined topics. For example, drafting emails in Microsoft Outlook or writing content in Microsoft Word.
- **Captioning or transcription:** Users can transcribe audio files into text for natural language understanding or analytic tasks like summarization. Examples include Teams meeting transcripts and videos in the Microsoft Clipchamp video player.

Microsoft provides detailed guidance focusing on common use cases and scenarios, to help customers accelerate the adoption of Microsoft 365 Copilot capabilities into their organizations. Learn more at [Microsoft Scenario Library – Microsoft Adoption](https://adoption.microsoft.com/scenario-library/).

## Models and training data

Microsoft 365 Copilot leverages a variety of AI models to power the experience that users see. Some examples include OpenAI’s Generative Pre-Trained Transformers (GPT) provided by [Azure OpenAI Service](/azure/ai-foundry/responsible-ai/openai/transparency-note), such as GPT-4 and GPT-5 series models, and Anthropic’s [Claude Opus 4.5](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) and [Claude Sonnet 4.5](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf). To learn more about the data used to train the models behind Microsoft 365 Copilot, refer to the linked model cards to find the relevant data summary cards.

Microsoft 365 Copilot uses a combination of LLMs provided by Azure OpenAI Service and Anthropic to summarize, predict, and generate content. This allows us to match the specific needs of each feature—for example, speed, creativity—to the right model, so that Microsoft 365 Copilot can provide real-time intelligent assistance that enables users to enhance their creativity, productivity, and skills. For additional information about the LLMs provided to Microsoft by OpenAI, refer to their public documentation at [Models - OpenAI API](https://platform.openai.com/docs/models).

## Performance

In many AI systems, performance is often defined in relation to accuracy—that is, how often the AI system offers a correct prediction or output. With Microsoft 365 Copilot, two different users might look at the same output and have different opinions of how useful or relevant it is, which means that performance for these systems must be defined more flexibly. We broadly consider performance to mean that the application performs as users expect.

### How Microsoft 365 Copilot works

- Microsoft 365 Copilot receives an input prompt from a user in an app, such as Word or PowerPoint. For a list of supported languages, see [Supported languages for Microsoft 365 Copilot](https://support.microsoft.com/office/94518d61-644b-4118-9492-617eea4801d8).
- Microsoft 365 Copilot then processes the prompt, which improves the specificity of the prompt, to help the user get answers that are relevant and actionable to their specific task. The prompt can include text from input files or other content discovered by Microsoft 365 Copilot using Microsoft Graph, and Microsoft 365 Copilot sends this prompt to the LLM for processing. Microsoft 365 Copilot only accesses data that an individual user has existing access to, based on, for example, existing Microsoft 365 role-based access controls.
- Microsoft 365 Copilot takes the response from the LLM and post-processes it. This post-processing includes other grounding calls to Microsoft Graph, responsible AI checks such as content classifiers, security, compliance and privacy checks, and command generation.
- Microsoft 365 Copilot returns the response to the app, where the user can review and assess the response.

The data is encrypted while it's stored and isn't used to train Anthropic or Azure OpenAI Service foundation LLMs, including those used by Microsoft 365 Copilot. For more information about this, see [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md).

### How Microsoft 365 Copilot generates responses without web content or organizational data

Microsoft 365 Copilot doesn't require web content or organizational data to provide a response, but that information can help improve the quality, accuracy, and relevance of its response. When responding without web or organizational data, Microsoft 365 Copilot relies only on its LLMs to understand prompts and generate responses. The process involves parsing the input, leveraging the model's internal knowledge base, and refining the response to help make it contextually appropriate.

## Limitations

Understanding Microsoft 365 Copilot’s limitations is crucial to determine it's used within safe and effective boundaries. While we encourage customers to leverage Microsoft 365 Copilot in their innovative solutions or applications, it’s important to note that Microsoft 365 Copilot wasn't designed for every possible scenario. We encourage users to refer to either the [Microsoft Enterprise AI Services Code of Conduct](/legal/ai-code-of-conduct) (for organizations) or the [Code of Conduct section in the Microsoft Services Agreement](https://www.microsoft.com/servicesagreement#3_codeOfConduct) (for individuals) as well as the following considerations when choosing a use case:

- **Compatibility:** While Microsoft 365 Copilot is designed to work seamlessly with Microsoft 365 applications, there can be limitations or issues with compatibility in certain environments, especially with third party (non-Microsoft) apps and customized or nonstandard configurations.

- **Customization and flexibility:** While Microsoft 365 Copilot can be tailored, there are limitations on how much it can be customized to fit specific organizational needs or workflows. Organizations might find certain features or responses to be rigid or not fully aligned with organizational requirements.

- **Dependence on internet connectivity:** Microsoft 365 Copilot relies on internet connectivity to function. Any disruption in connectivity can impact the availability and performance of the service.

- **User training and adoption:** Effective use of Microsoft 365 Copilot requires users to understand its capabilities and limitations. There might be a learning curve, and users need to be trained to effectively interact with and benefit from the service.

- **Resource intensity:** Running advanced AI models requires significant computational resources, which can impact performance, especially in resource-constrained environments. Users might experience latency or performance issues during peak usage times.

- **Bias, stereotyping, and ungrounded content:** Despite intensive training by OpenAI and Anthropic and the implementation of responsible AI controls by Microsoft on both user prompts and LLM outputs, AI services are fallible and probabilistic. This makes it challenging to comprehensively block all inappropriate content, leading to potential biases, stereotypes, or ungroundedness in AI-generated content. For more on the known limitations of AI-generated content, see the [Transparency Note for Azure OpenAI](/azure/ai-foundry/responsible-ai/openai/transparency-note), which includes references to the LLMs behind Microsoft 365 Copilot. For more information on the known limitations of AI-generated content from Anthropic models, refer to [System Card: Claude Sonnet 4.5](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf).

- **Supported languages:** Currently, Microsoft 365 Copilot supports fewer languages than Microsoft 365. If the language you're using or requesting in your prompt isn't currently supported, you get an error message. For more information, see [Supported languages for Microsoft 365 Copilot](https://support.microsoft.com/office/94518d61-644b-4118-9492-617eea4801d8).

- **Potential significant physical or psychological injury to an individual.** Avoid use or misuse of the system that could result in significant physical or psychological injury to an individual. For example, scenarios that diagnose patients or prescribe medications have the potential to cause significant harm.

- **Consequential impact on life opportunities or legal status.** Avoid use or misuse of the system that could have a consequential impact on life opportunities or legal status. Examples include scenarios where the AI system could affect an individual's legal status, legal rights, or their access to credit, education, employment, healthcare, housing, insurance, social welfare benefits, services, opportunities, or the terms on which they're provided.

- **High stakes domains or industries.** Carefully consider use cases in high stakes domains or industries. Examples include but aren't limited to medical or financial.

## Evaluations

Performance and safety evaluations assess whether AI applications are operating reliably and securely by examining factors like groundedness, relevance, and coherence while identifying the risks of generating harmful content. The following evaluations were conducted with safety components already in place, which are also described in [Safety components and mitigations](#safety-components-and-mitigations).

### Performance and quality evaluations

Performance evaluations for AI applications are essential to help improve their reliability in real-world applications. Metrics such as response relevance, accuracy, and groundedness help assess the accuracy and consistency of AI-generated outputs, so that they're factually supported in grounded content scenarios, contextually appropriate, and logically structured. For Microsoft 365 Copilot, we regularly conduct rigorous quality evaluations across multiple metrics such as relevance, accuracy, and groundedness.

### Performance and quality evaluation methods

Microsoft 365 Copilot was evaluated using text and image‑based scenarios that reflect how users work across Microsoft 365 apps. Evaluations for metrics like groundedness, response quality, and citation relevance used established LLM-as-judge methods. Offline test sets included factual queries, multi‑document comprehension, summarization, and representative enterprise scenarios. Evaluators assessed whether responses were factually supported, contextually appropriate, and logically structured. Ideal outcomes reflect accurate grounding, clear reasoning, and consistent performance across variations of the same task. Suboptimal outcomes include unsupported claims, missing or irrelevant citations, or inconsistent outputs under similar prompts.

### Risk and safety evaluations

Evaluating potential risks associated with AI-generated content is essential for safeguarding against content risks with varying degrees of severity. This includes evaluating an AI system's predisposition towards generating harmful content or testing for vulnerabilities to jailbreak attacks. For Microsoft 365 Copilot, the following are some of the risk and safety evaluations that we conducted:

- Hate and unfairness
- Sexual
- Violence
- Self-harm
- Protected material
- Indirect jailbreak
- Direct jailbreak
- Code vulnerability
- Ungrounded attributes

### Risk and safety evaluation methods

Risk and safety evaluations used text‑based adversarial prompts and automated classifiers to assess potential harms, including hate, sexual content, violence, self‑harm, protected‑material leakage, jailbreak attempts, and ungrounded attributes. Tests combined LLM‑judge evaluations with classifier‑based detection and manual testing where needed. Ideal results redirect or decline unsafe requests and maintain consistent boundary‑keeping across prompt variations. Suboptimal results include producing harmful content, responding inconsistently to adversarial inputs, or exhibiting susceptibility to jailbreak techniques.

## Safety components and mitigations

As we identified potential risks and misuse through processes like red team testing and measured them, we developed mitigations to reduce the potential for harm. In the following list, we describe some of those mitigations. We'll continue to evaluate the Microsoft 365 Copilot experiences to improve product performance and mitigations.

- **Phased release, continual evaluation.** We're committed to learning and improving our responsible AI approach continuously as our technologies and user behavior evolve. We're making changes to Microsoft 365 Copilot regularly to improve product performance, improve existing mitigations, and implement new mitigations in response to our learnings.

- **Grounding in business data.** A known risk with large language models is their ability to generate ungrounded content—content that appears correct but isn't present in source materials. An important mitigation in Microsoft 365 Copilot is to ground AI-generated content in relevant business data that the user has access to based on their permissions. For example, based on the prompt, Microsoft 365 Copilot is provided with relevant business documents to ground its response in those documents. However, in summarizing content from various sources, Microsoft 365 Copilot may include information in its response that isn't present in its input sources. In other words, it may produce ungrounded results. Users should always take caution and use their best judgment when using outputs from Microsoft 365 Copilot. We have taken several measures to mitigate the risk that users may over-rely on ungrounded AI-generated content. Where possible, responses in Microsoft 365 Copilot that are based on business documents include references to the sources for users to verify the response and learn more. Users are also provided with explicit notice that they're interacting with an AI system and advised to check the source materials to help them use their best judgment.

- **AI-based classifiers and metaprompting to mitigate potential risks or misuse.** The use of LLMs may produce problematic content that could lead to harm. Examples could include output related to self-harm, violence, graphic content, biosecurity issues, protected material, inaccurate information, hateful speech, or text that could relate to illegal activities. Classifiers such as those available in Azure AI Content Safety and metaprompting are two examples of mitigations that have been implemented in Microsoft 365 Copilot to help reduce the risk of these types of content. Classifiers classify text to flag different types of potentially harmful content in prompts or generated responses. Microsoft 365 Copilot uses AI-based classifiers and content filters. Flags lead to potential mitigations, such as not returning generated content to the user or diverting the user to a different topic. Microsoft offers certain content filtering controls for [admins](harmful-content-protection-copilot-chat.md) and [users](https://support.microsoft.com/topic/605db862-b859-4ec3-9327-d405cc164690) where filtering of potentially harmful or sensitive content in Microsoft 365 Copilot Chat doesn’t meet their needs. Metaprompting involves giving instructions to the model to guide its behavior, including so that the system behaves in accordance with Microsoft's AI Principles and user expectations. For example, the metaprompt may include a line such as “communicate in the user’s language of choice.”

- **Prompt enrichment.** In some cases, a user's prompt may be ambiguous. When this happens, Microsoft 365 Copilot may use the LLM to help build out more details in the prompt to help ensure users get the response they're seeking. Such prompt enrichment doesn't rely on any knowledge of the user or their prior searches, but instead on the LLM.

- **User-centered design and user experience interventions.** User-centered design and user experiences are an essential aspect of Microsoft’s approach to responsible AI. The goal is to root product design in the needs and expectations of users. As users interact with Microsoft 365 Copilot for the first time, we offer various touchpoints designed to help them understand the capabilities of the system, disclose to them that Microsoft 365 Copilot is powered by AI, and communicate limitations.

- **AI disclosure.** Microsoft 365 Copilot provides several touchpoints for meaningful AI disclosure where users are notified that they're interacting with an AI system as well as opportunities to learn more about Microsoft 365 Copilot. For example, when using Microsoft 365 Copilot in the Word app, AI-generated content is given alongside notice that AI-generated content may contain errors. Empowering users with this knowledge can help them avoid over-relying on AI-generated outputs and learn about the system’s strengths and limitations.

- **Media provenance.** For all images created with Designer's editing features from within Microsoft 365 Copilot, we have implemented content credentials, provenance based on the C2PA standard, to help people identify whether images were edited or generated with AI. Provenance metadata can be viewed on the [Content Credentials site](https://verify.contentauthenticity.org/).

- **Feedback and ongoing evaluation.** The Microsoft 365 Copilot experience builds on existing tooling that allows users to submit feedback about our products. Users can submit feedback about content generated by Microsoft 365 Copilot by using the pane that appears after selecting thumbs up or thumbs down buttons on responses. Feedback submitted by users is used to improve our offerings as part of our commitment to improving product performance. Customer admins can review feedback submitted in the Microsoft 365 admin center. We also continually improve and test the performance of Microsoft 365 Copilot and specific mitigations as part of our ongoing evaluation and improvement of the service. Learn more at [Providing feedback about Microsoft Copilot with Microsoft 365 apps](https://support.microsoft.com/topic/c481c26a-e01a-4be3-bdd0-aee0b0b2a423).

Our approach to mapping, measuring and managing risks will continue to evolve as we learn more, and we're already making improvements based on feedback we’ve received from customers.

## Best practices for deploying and adopting Microsoft 365 Copilot

Responsible AI is a shared commitment between Microsoft and its customers. While Microsoft builds AI systems with safety, fairness, and transparency at the core, customers play a critical role in deploying and using these technologies responsibly within their own contexts. To support this partnership, we offer the following best practices for deployers and end users to help customers implement responsible AI effectively.

### Deployers and end-user should:

- **Exercise caution and evaluate outcomes when using Microsoft 365 Copilot for consequential decisions or in sensitive domains:** Consequential decisions are those that may have a legal or significant impact on a person’s access to education, employment, financial services, government benefits, healthcare, housing, insurance, legal services, or that could result in physical, psychological, or financial harm. Sensitive domains—such as financial services, healthcare, and housing—require particular care due to the potential for disproportionate impact on different groups of people. When using AI for decisions in these areas, make sure that impacted stakeholders can understand how decisions are made, appeal decisions, and update any relevant input data.

- **Evaluate legal and regulatory considerations:** Customers need to evaluate potential specific legal and regulatory obligations when using any AI services and solutions, which may not be appropriate for use in every industry or scenario. Additionally, AI services or solutions aren't designed for and may not be used in ways prohibited in applicable terms of service and relevant codes of conduct.

- **Allow referencing of web content.** Allowing Microsoft 365 Copilot to reference web content can improve the quality, accuracy, and relevance of Microsoft 365 Copilot responses where a response would benefit from current, public information from the web. Note, however, that when Microsoft 365 Copilot references web content, it does so via the Bing Search service, and data-handling practices for Bing Search queries are different from how data is handled by Microsoft 365 Copilot. The use of Bing is covered by the [Microsoft Services Agreement](https://www.microsoft.com/servicesagreement) between each user and Microsoft, together with the [Microsoft Privacy Statement](https://www.microsoft.com/privacy/privacystatement).

- **Extend grounding in Microsoft Graph.** Microsoft 365 Copilot uses data from Microsoft Graph to ground responses in organization-specific data like emails, chats, files, and calendars. By extending Microsoft Graph with organizational data from sources like CRM systems, or external file repositories, organizations can include additional context-specific, relevant information that further enhances the richness and accuracy of Microsoft 365 Copilot responses.

### End-users should:

To improve the performance in relation to the accuracy of Microsoft 365 Copilot output, we recommend that organizations consider the following:

- **Write good prompts.** Writing good prompts is key to getting better outcomes with Microsoft 365 Copilot. Just like there are techniques to help people communicate effectively with a human, there are guidelines that may help users get better results with Microsoft 365 Copilot when writing prompts. For example: include details, structure prompts, provide positive instructions, iterate and regenerate, and always review and verify AI-generated responses. For more information, see [Get better results with Copilot prompting](https://support.microsoft.com/topic/77251d6c-e162-479d-b398-9e46cf73da55).

- **Exercise human oversight when appropriate:** Human oversight is an important safeguard when interacting with AI systems. While we continuously improve our AI systems, AI might still make mistakes. The outputs generated may be inaccurate, incomplete, biased, misaligned, or irrelevant to your intended goals. This could happen due to various reasons, such as ambiguity in the inputs or limitations of the underlying models. As such, users should review the responses generated by Microsoft 365 Copilot and verify that they match their expectations and requirements.  

- **Be aware of the risk of overreliance:** Overreliance on AI happens when users accept incorrect or incomplete AI outputs, mainly because mistakes in AI outputs may be hard to detect. For the end-user, overreliance could result in decreased productivity, loss of trust, product abandonment, financial loss, psychological harm, physical harm, among others. (for example, a doctor accepts an incorrect AI output). For Microsoft 365 Copilot, we help mitigate this risk by adding disclaimers to our products but users should still make sure to review the accuracy of the answers. 

- **Exercise caution when designing agentic AI in sensitive domains:** Users should exercise caution when designing and/or deploying agentic AI systems in sensitive domains where agent actions are irreversible or highly consequential. Additional precautions should also be taken when creating autonomous agentic AI as described further in either the [Microsoft Enterprise AI Services Code of Conduct](/legal/ai-code-of-conduct) (for organizations) or the [Code of Conduct section in the Microsoft Services Agreement](https://www.microsoft.com/servicesagreement#3_codeOfConduct) (for individuals).

### Deployers should:

Microsoft provides tools like the Microsoft Copilot Dashboard for Microsoft 365 customers and reports in the Microsoft 365 admin center. These tools are designed to help organizations measure usage, adoption, and the impact of Microsoft 365 Copilot. For example:

- **Microsoft 365 Copilot usage report** enables administrators to view a summary of how users’ adoption, retention, and engagement are with Microsoft 365 Copilot to manage and optimize licenses. For more information, see [Microsoft 365 Copilot usage](/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage).
- **Microsoft Copilot Dashboard** provides leaders, analysts, and delegates access to prebuilt reports about organization wide use of Microsoft 365 Copilot and Copilot Chat to measure adoption and impact. For more information, see [Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers](/viva/insights/org-team-insights/copilot-dashboard).
- **Copilot Business Impact** is available in Viva Insights allows analysts to compare usage of Microsoft 365 Copilot against business metrics to understand business value. For more information, see [Copilot business impact report](/viva/insights/advanced/analyst/templates/copilot-business-impact).

## Learn more about Microsoft 365 Copilot

For additional guidance on the responsible use of Microsoft 365 Copilot, we recommend reviewing the following documentation:

- [Microsoft 365 Copilot overview](microsoft-365-copilot-overview.md)
- [Data, Privacy, and Security for Microsoft 365 Copilot](microsoft-365-copilot-privacy.md)
- [Extensibility of Microsoft 365 Copilot](microsoft-365-copilot-privacy.md#extensibility-of-microsoft-365-copilot)

## Learn more about responsible AI

- [Microsoft AI principles](https://www.microsoft.com/ai/responsible-ai)
- [Microsoft responsible AI resources](https://www.microsoft.com/ai/tools-practices)
- [Microsoft Azure Learning courses on responsible AI](/ai)

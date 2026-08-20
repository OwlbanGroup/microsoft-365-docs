---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title: Chat Notes in Microsoft Teams
description: Admin guide for Chat Notes in Microsoft Teams
author:      alicezhang22 # GitHub alias
ms.author:   aliczhang # Microsoft alias
ms.service: microsoft-365-admin
ms.topic: faq
ms.date:     02/02/2026
manager: dihsu
ms.reviewer: dihsu
---

# Chat Notes in Microsoft Teams

### What are Chat Notes?

Chat Notes are flexible canvases that can be created within 1:1 chats and group chats in Microsoft Teams. Chat Notes are built on Microsoft Loop, which allows them to have a similar look, feel, and feature set as Loop Pages. However, there are a couple of key usage differences.

1. Chat Notes are stored within a tenant-owned SharePoint Embedded container rather than a particular user's space. This means that even if users leave the team, Chat Notes won't be deleted.

1. Chat Notes are locked to the chat that they're created in. Chat Notes are NOT shareable outside of the chat. The only way to access a Chat Note is through the chat that they're created in. Every member of a chat can view that chat's Chat Note. When new users are added to the chat, they can also view that chat's Chat Note.

1. Every chat has exactly one Chat Note. More Chat Notes can't be created. The default Chat Note cannot be deleted. The only way to delete a Chat Note is if all members of the chat leave the chat.

### Chat Notes Storage

Chat Notes are built on SharePoint Embedded and stored using tenant-owned Microsoft 365 File Storage Containers, or Containers for short. SharePoint Embedded is an API-only file and document management system. For more about SharePoint Embedded, see [Overview of SharePoint Embedded](/sharepoint/dev/embedded/overview). Your tenant's first Chat Note creates a new Container identified with the Container name prefix `IC3_TeamsContainerType_`. Each additional Chat Note uses an existing Container if that Container has available space, or creates a new Container if it doesn't. Containers are dedicated to Chat Notes and don't store other kinds of data.

### Turning Off Chat Notes

Chat Notes are turned on by default for each tenant. Chat Notes can be disabled in the [Teams admin center](https://admin.teams.microsoft.com/) by clicking on Messaging in the left navigation and navigating to Messaging Settings. In Messaging Settings, find the "Notes" section and toggle Messaging Notes to Off. Chat Notes can also be disabled using PowerShell through the `-MessagingNotes` [property](/powershell/module/microsoftteams/set-csteamsmessagingconfiguration) in the `Set-CsTeamsMessagingConfiguration` [command](/powershell/module/microsoftteams/set-csteamsmessagingconfiguration). Chat Notes can only be enabled or disabled for all team members. Chat Notes can't be turned on for only a subset of users.

### Setting Retention Policies

Retention policies on Chat Notes are managed in the Purview Data lifecycle management tool. Chat Notes are included in "SharePoint classic and communication sites", so no other configuration is needed to target Chat Notes with the same retention policy as other SharePoint content. To target Chat Notes with a different policy, you can use the "include" or "exclude" settings to scope your search to your Chat Note Container's URL.

### Chat Notes Container URLs

In certain Purview tools, such as eDiscovery or Retention policies, you may need Chat Notes Container URLs. Chat Notes Container URLs can be located in SharePoint Admin Center. In SharePoint Admin Center, navigate to "Activate containers" in the left navigation. Chat Notes containers begin with the `IC3_TeamsContainerType_` prefix.

### eDiscovery through Purview

Admins can perform eDiscovery searches on all SharePoint Embedded content using the "All Sharepoint Sites" workload. Admins can also specify specific Chat Notes containers using Chat Notes Container URLs. eDiscovery admins can perform eDiscovery Hold and Export on Chat Notes content.

### Are Admins able to use Share Point Embedded APIs to directly manage Chat Notes containers?

Chat Note containers are fully managed in Microsoft Teams' services. Admins can't directly use Share Point Embedded APIs to manage Chat Notes containers. Chat Notes content can only be modified by chat members by editing the Chat Note directly.

### Who has access to each Chat Note?

Chat Notes can be accessed by chat members only. Chat Notes can't be shared outside of the chat in which they reside. Teams Admins can't access Chat Notes unless they're also members of the chat it lives in.

### Can users delete Chat Notes?

Users can only delete the content of Chat Notes. The note itself can't be deleted by users. However, once all users in a chat leave that chat, the Chat Note is deleted since the chat can no longer be accessed.

### What happens to a Chat Note when the creator of that Chat Note is deactivated?

Since Chat Notes are stored in tenant-owned Microsoft 365 File Storage Containers rather than a specific user's space, the Chat Note will still exist even if the original creator's account is deactivated. The Chat Note remains in the chat as long as there are still members in the chat. Once the last member leaves the chat, the Chat Note is deleted and can't be recovered by the user.


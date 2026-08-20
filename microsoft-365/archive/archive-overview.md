---
title: Overview of Microsoft 365 Archive
ms.author: chucked
author: chuckedmonson
manager: jtremper
audience: admin
ms.reviewer: sreelakshmi
ms.date: 06/26/2025
ms.topic: overview
ms.service: microsoft-365-archive
ms.custom: archive
search.appverid:
ms.collection:
    - essentials-overview
ms.localizationpriority:  medium
description: Learn about how Microsoft 365 Archive can provide your organization with cost-effective storage solutions.
---

# Overview of Microsoft 365 Archive

Microsoft 365 Archive provides cost-effective storage for inactive SharePoint files and sites.

Organizations often need to retain inactive or aging data for long periods in case they need to retrieve it later. Storing this data in SharePoint helps simplify searchability, security, compliance, and data lifecycle management.

Microsoft 365 Archive allows you to retain inactive data by moving it into a cold storage tier within SharePoint. Data archived with Microsoft 365 Archive automatically retains the same searchability, security, and [compliance](archive-compliance.md)  standards at a reduced cost.

Other advantages of using Microsoft 365 Archive include:

- **Copilot optimization** - Copilot is not trained on archived content, maximizing response relevancy. 

- **Cost savings** - A lower list price on storage consumption beyond your license-allocated Microsoft 365 storage quota.

- **Lossless metadata** - A site retains all of its metadata and permissions upon reactivation.

- **Speed** - Ultra-fast archive of sites of any size and any number of sites.

- **Decluttering** - Explicit separation between active and inactive content to help manage your site's lifecycle.

Microsoft 365 Archive works with the Microsoft 365 search index and the [Microsoft Purview](/purview/purview) feature set to support long-term data management at a price aligned with the lifecycle of your content. Microsoft 365 Archive is managed in the SharePoint admin center by [SharePoint Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-administrator) or [Global Administrators](/entra/identity/role-based-access-control/permissions-reference#global-administrator).

[!INCLUDE [global-administrator-note](../includes/global-administrator-note.md)]

When a file or site is archived, it moves into an explicitly colder tier and no longer consumes the tenant's active storage quota. Instead, it contributes to Microsoft 365 Archive storage consumption. Content in this tier is no longer directly accessible to anyone. Full content search works for Purview Content Search, end-user search, and eDiscovery search experiences. Purview Content Search and eDiscovery can still directly export content but may take longer to export archived content.

When a site is archived, all content within the site is archived, including:

- Document libraries, folder structures, and files

- Lists and list data

- Permissions and all metadata

Administrators should notify site owners and end users before archiving a site so they're aware that the site will no longer be accessible.

## Limitations
### Site Archive limitations
- Publishing sites, channel sites, and some legacy site template types aren't available to archive with Microsoft 365 Archive. For more information, see [Site templates supported](./archive-manage.md#site-templates-supported).

- Sites associated with Teams that use only standard channels are supported for archiving. Sites associated with Teams that include private or shared channels are only partially supported:

    - SharePoint admin center: Archiving a site with channel sites is not possible. (Message: "The group connected site with channel sites associated can't be archived.")
  - PowerShell and Graph API: Archiving a site with channel sites isn't blocked.
  Only the main site associated to the Team (and its standard channels) is archived. The private and shared channel sites remain active. Archiving the channel sites directly is not possible, as these sites use unsupported site templates.
  
  
### File Archive (preview) limitations

- Some Microsoft 365 applications and services don't yet support file-level archiving. These applications might display incorrect error messages, fail to load correctly, or fail actions taken with archived content.  Because client support and user awareness for archived files continue to evolve during this preview period, we recommend that you use file-level archive thoughtfully and ensure users understand how to reactivate files at their original location if access is required-especially if they encounter unexpected open or load errors. The list of known limitation includes but isn't limited to:

     - Word and PowerPoint online.
    
     - Teams, OneDrive, and SharePoint mobile applications.
    
     - macOS with the OneDrive sync client.
    
     - Older versions of Windows, such as Windows 10 and earlier, with the OneDrive sync client.
  
    - This limitation also applies to Windows devices that aren't configured to receive frequent updates.
        
     - Older versions of Office desktop apps that haven't had updates since March 1, 2026.
    
     - Other apps such as Clipchamp and Power BI fail to load archived content when attempting to import.
    
- File-level archive is available only for SharePoint sites. When archived files are copied or moved, they retain their archived state. However, if an archived file is moved or copied into OneDrive, that archived state might not always be visually represented in the OneDrive user interface.

- Files that are reactivated cannot be archived again for 30 days.

- Certain file types can't be archived, including OneNote, SharePoint pages, and SharePoint agents.

- The Site Assets library on SharePoint sites does not support file-level archive.

## Related articles

[Education offering](archive-education-offering.md)


<!---
## Preview limitations

> [!NOTE]
> These limitations are temporary during the preview. Unless otherwise stated, these limitations will be resolved when the product is available for general release.

- As a part of the preview, tenants with more than 50,000 sites might face issues while trying to enumerate archived sites on the **Archived sites** page. Applicable enhancements are scheduled to roll out in the future. In this scenario, PowerShell can be used to more efficiently archive sites and manage archived content.

- Currently, archived content exported via eDiscovery doesn't require site reactivation for exporting, but will require it before general release.

- Currently, end user search results won't show any archived content.

- Columns such as Archived Date and Archived By aren't currently available but are planned and will be rolled out when available.

- For multi-geo tenants, while data residency requirements are honored, site moves aren't supported. Archived sites will need to be reactivated prior to any move.

- Currently, tenant rename isn't supported on archived sites. Sites will need to be reactivated before a tenant rename is triggered.

- Archiving a site that is currently enrolled in Microsoft 365 Backup will be blocked.

- If you archive a site that has a library syncing to a device, that device's sync client will display errors after the site is archived. We recommend that you remove syncing libraries before archiving a site.
--->

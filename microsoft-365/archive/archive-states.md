---
title: Archive states in Microsoft 365 Archive
ms.author: chucked
author: chuckedmonson
manager: jtremper
audience: admin
ms.reviewer: sreelakshmi
ms.date: 06/12/2025
ms.topic: article
ms.service: microsoft-365-archive
ms.custom: archive
search.appverid:
ms.collection:
    - m365initiative-syntex
ms.localizationpriority:  medium
description: Learn about the archive states and what they mean in Microsoft 365 Archive.
---

# Archive states in Microsoft 365 Archive

The following table describes the archive states and allowed operations. These states apply to both archived files and archived sites.

|Archive state  |Description  |Allowed operations  |
|---------|---------|---------|
|Recently archived    |This state is the first stage after a site or file is archived and lasts for seven days. During this stage, reactivations are instantaneous.|Reactivate, Delete         |
|Archived    |A site or file enters this state seven days after it is archived. In this stage, reactivations can take up to 24 hours.|Reactivate, Delete         |
|Reactivating     |If a site or file is reactivated from the "*Archived*" state, it remains in this stage until reactivation completes. After reactivation, the content becomes active. When a site finishes reactivation, it appears on the Active sites page. Files that are reactivating remain in the same location after reactivation completes. | None for sites. Delete for files. |

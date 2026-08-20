---
title: Developer guidance for Microsoft 365 Archive
description: Learn how third-party and ISV applications should detect, avoid, and gracefully handle archived files when using Microsoft Graph and SharePoint APIs.
ms.service: microsoft-365-archive
author: trent-green
ms.topic: conceptual
ms.date: 02/27/2026
ms.author: trgreen
ms.reviewer:
ms.localizationpriority: medium
---

# Developer guidance for Microsoft 365 Archive

## Overview

Microsoft 365 Archive provides a lower-cost storage tier for inactive content in SharePoint and OneDrive.

Archived files remain visible in list and library views, but their **file contents can't be downloaded or opened** until the file is reactivated. Reactivation can take up to 24 hours to complete, or may complete within seconds if the file was archived in the past week.

This guidance describes how third-party (3P) and independent software vendor (ISV) applications should **detect**, **avoid**, and **gracefully handle** archived files when using Microsoft Graph or SharePoint APIs.

## Enumerating files

Standard Microsoft Graph and SharePoint list APIs continue to return archived items when enumerating folders, lists, or drive items. These APIs return **metadata only**, and no additional handling is required during enumeration. These APIs will return a blank `archiveStatus` property for active files. For archived or reactivating files, the property indicates the corresponding state.

Archived files always appear in enumeration results. Applications should **not** assume a file is active simply because it is returned in a list. For most enumeration APIs, the archive status will be returned by default.

### Recommended enumeration APIs

- **Microsoft Graph** - `GET /drives/{drive-id}/root/children`
- **Microsoft Graph** - `GET /sites/{site-id}/lists/{list-id}/items/driveItem`
- **Microsoft Graph** - `GET /sites/{site-id}/lists/{list-id}/items?$expand=fields($select=_FileArchiveStatus)`

> [!NOTE]
> For list item enumeration, archive status is not returned by default. To retrieve the archive state, you must explicitly include `$expand=fields($select=_FileArchiveStatus)` in the request.

- **SharePoint REST/CSOM** - Standard list enumeration endpoints continue to function and return archive status by default.

## Accessing file contents

When an application attempts to download the contents of an archived file, the request fails. For example:

```http
GET /drives/{drive-id}/items/{item-id}/content
```

### Expected behavior

- The service returns **423 Locked** (or a similar *content unavailable* error).
- The response indicates that the file can't be opened because it is archived.
- The file must be reactivated before content is available.

**Developer expectation:** Treat these failures as a normal, expected scenario-not as a transient platform outage.

## Reactivating files

Users can reactivate archived files directly from SharePoint or OneDrive through the SharePoint document library user interface. Once reactivated, the file becomes readable again after the reactivation process completes.

### Guidance for applications

- Do not attempt rapid, repeated retries.
- Reactivation can take **up to 24 hours**, depending on system activity.
- Surface clear messaging indicating that the file is archived and requires reactivation when applicable.

## Best practices for 3P and ISV developers

### 1. Check metadata before attempting to read file contents

When your workflow requires a file's contents, evaluate the item's metadata first. If the file is archived, skip the content read and notify the user.

### 2. Handle content-access failures cleanly

If your application encounters a blocked download, surface an actionable message. For example:

> This file is archived. Reactivate it in SharePoint or OneDrive before accessing it.

### 3. Avoid unnecessary reactivation

Many workflows can operate using metadata alone. Only request reactivation, or instruct the user to reactivate, when your application truly requires file contents.

### 4. Prevent retry storms

Because reactivation can take time, avoid repeated requests that will deterministically fail.

## Archive and reactivate files using Microsoft Graph

You can archive and reactivate files using Microsoft Graph REST APIs. Use these operations when building automation or orchestration flows.

### Archive a file

```http
POST /drives/{driveId}/items/{itemId}/archive
```

### Reactivate a file

```http
POST /drives/{driveId}/items/{itemId}/unarchive
```

When reactivating a file, the response indicates whether the file is reactivated instantly or transitions into a rehydration period:

- If the file is reactivated instantly, no `archiveStatus` property is returned.
- If reactivation requires up to 24 hours, the response includes:

```json
{
  "archiveStatus": "reactivating"
}
```

For full details on parameters, permissions, throttling, and error handling, see the [Microsoft Graph documentation for Microsoft 365 Archive](/graph/api/driveitem-archive).

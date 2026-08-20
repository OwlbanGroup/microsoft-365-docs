---
title: Data Residency for Microsoft 365 web apps (formerly known as "Office for the Web")
description: Data Residency for Microsoft 365 web apps (formerly known as "Office for the Web")
ms.author: v-fahasen
author: fhasen-msft
manager: Justin.Giammona
ms.service: microsoft-365-enterprise
ms.subservice: advanced-data-residency
ms.topic: article
f1.keywords:
- NOCSH
ms.date: 05/10/2025
ms.reviewer: jugiammo
ms.custom:
- it-pro
ms.localizationpriority: medium
ms.collection:
- M365-subscription-management
- must-keep
---

# Data Residency for Microsoft 365 web apps (formerly known as "Office for the Web")

## Overview

Service documentation: [Microsoft 365 web apps Service Description](/office365/servicedescriptions/office-online-service-description/office-online-service-description)

Capability summary: Microsoft 365 web apps (formerly known as "Office for the Web") opens Word, Excel, and PowerPoint documents in your web browser. Microsoft 365 web apps makes it easier to work and share Office files from anywhere with an internet connection, from almost any device. Microsoft 365 customers with Word, Excel, or PowerPoint can view, create, and edit files on the go.

## Data Residency commitments available

### Advanced Data Residency add-on

Required Conditions:

1. _Tenant_ has a sign-up country/region included in a _Local Region Geography_.
1. _Tenant_ has a valid _Advanced Data Residency_ subscription for all users in the _Tenant_.
1. The Microsoft 365 web apps subscription customer data is provisioned in a _Local Region Geography_.

**Commitment:**

Refer to the [ADR Commitment page](m365-dr-commitments.md#microsoft-365-web-apps-formerly-known-as-office-for-the-web) for the specific customer data at rest commitment for Microsoft 365 web apps.
### Migration

The cache for documents isn't migrated to the new _Geography_, and will be reestablished as users work on documents.

### How can I determine customer data location?

We are in the process of updating the actual data location in _Tenant_ Admin Center. When this change is complete the tenant will be able to see the actual data location, for in scope data, by navigating to **Admin | Settings | Org Settings | Organization Profile | Data Location**. Until that change is visible, you can view the Exchange Online data or SharePoint location information in order to understand where the in scope data is stored for this service.

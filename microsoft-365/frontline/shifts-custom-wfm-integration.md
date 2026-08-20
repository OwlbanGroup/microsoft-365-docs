---
title: Create a custom integration to sync your workforce management system with Shifts
author: lana-chin
ms.author: jtremper
manager: jtremper
ms.reviewer: harrywong
ms.topic: integration
audience: admin
ms.service: microsoft-365-frontline
search.appverid: MET150
description: Learn how to create a custom integration using the Microsoft Graph API to integrate your workforce management (WFM) system with Shifts. 
ms.localizationpriority: high
ms.collection: 
  - M365-collaboration
  - m365-frontline
  - teams-1p-app-admin
appliesto: 
  - Microsoft Teams
  - Microsoft 365 for frontline workers
ms.date: 04/22/2026
---

# Create a custom integration to sync your workforce management system with Shifts

## Overview

Integrate Shifts, the schedule management app in Microsoft Teams, with your workforce management (WFM) system. This integration allows your frontline workforce to view and manage their schedules directly within Shifts.

This article guides you through how to create a connector using the Microsoft Graph API to facilitate this integration.

You can set up your integration for either a one-way data sync or a two-way data sync.

- **One-way sync (WFM system to Shifts)**: In this setup, schedule data in your WFM system is synced to Shifts. The connector reads the data in your WFM system and writes it to Shifts. However, any changes made in Shifts by users aren't reflected back in your WFM system.

- **Two-way sync (WFM system and Shifts)**: This setup allows for a bidirectional sync. Schedule data in your WFM system is synced to Shifts, and any changes made in Shifts by users are synced back to your WFM system. The connector validates and approves the changes users make in Shifts according to business rules enforced by your WFM system before the changes are written to Shifts.

> [!NOTE]
> If you're using Reflexis WFM, you can also use a connector managed by Zebra to integrate Shifts with your WFM system. To learn more, see [Shifts connectors](shifts-connectors.md).

### Terminology used in this article

|Term |Description |
|---------|---------|
|connector| An app that syncs schedule data between your WFM system and Shifts.        |
|workforce integration| An entity that defines the encryption method for communication, the callback URL for your connector, and the Shifts entities to be synced.|

## Before you begin

### Prerequisites

- Determine what data you want to sync according to your business needs.
- Understand the authentication and authorization concepts in the Microsoft identity platform. See [Authentication and authorization basics](/graph/auth/auth-concepts).
- Admin roles required:
  - At least a [Cloud Application Administrator](/entra/identity/role-based-access-control/permissions-reference?toc=%2Fgraph%2Ftoc.json#cloud-application-administrator) to register an app in the Microsoft Entra admin center
  - Global Administrator to register the workforce integration

### Get familiar with the integration process

Here's an overview of the integration steps. Review this information to get an understanding of the overall process, including who performs each step.

|Step|One-way sync |Two-way sync|Who performs this step|
|---------|---------|------------------|------------------|
|1|Create your connector:<ul><li>Step 1a: [Sync changes made in Shifts to your WFM system](#step-1a-sync-changes-made-in-shifts-to-your-wfm-system)<ul><li>Implement [/connect endpoint](#post-connect)</li><li>Implement [/update endpoint](#post-teamsteamidupdate) and [make Shifts read-only](#if-you-want-to-set-up-a-one-way-sync-make-shifts-read-only)</li></ul><li>Step 1b: [Sync data from your WFM system to Shifts](#step-1b-sync-data-from-your-wfm-system-to-shifts)</li></ul>|Create your connector:<ul><li>Step 1a: [Sync changes made in Shifts to your WFM system](#step-1a-sync-changes-made-in-shifts-to-your-wfm-system)<ul><li>Implement [/connect endpoint](#post-connect)</li><li>Implement [/update endpoint](#post-teamsteamidupdate)</li></ul><li>Step 1b: [Sync data from your WFM system to Shifts](#step-1b-sync-data-from-your-wfm-system-to-shifts)</li></ul>|Developer|
|2|[Register an app in the Microsoft Entra admin center](#step-2-register-an-app-in-the-microsoft-entra-admin-center)|[Register an app in the Microsoft Entra admin center](#step-2-register-an-app-in-the-microsoft-entra-admin-center)|An account that is at least a Cloud Application Administrator |
|3|[Create teams and schedules for syncing](#step-3-create-teams-and-schedules-for-syncing)|[Create teams and schedules for syncing](#step-3-create-teams-and-schedules-for-syncing)|Developer or Teams Administrator |
|4|Register and enable the workforce integration:<ul><li>Step 4a: [Register the workforce integration in your tenant](#step-4a-register-the-workforce-integration-in-your-tenant)</li><li>Step 4b: [Enable the workforce integration for your team schedules](#step-4b-enable-the-workforce-integration-for-your-team-schedules)</li></ul>|Register and enable the workforce integration:<ul><li>Step 4a: [Register the workforce integration in your tenant](#step-4a-register-the-workforce-integration-in-your-tenant)</li><li>Step 4b: [Enable the workforce integration for your team schedules](#step-4b-enable-the-workforce-integration-for-your-team-schedules)</li></ul>|Step 4a: Global Administrator<br>Step 4b: Developer|

## Step 1: Create your connector

To create your connector, complete the following steps:

- [Step 1a: Sync changes made in Shifts to your WFM system](#step-1a-sync-changes-made-in-shifts-to-your-wfm-system)
- [Step 1b: Sync data from your WFM system to Shifts](#step-1b-sync-data-from-your-wfm-system-to-shifts)

### Step 1a: Sync changes made in Shifts to your WFM system

To set up your connector to receive and process requests from Shifts, you need to implement the following endpoints:

- [/connect](#post-connect) (required)
- [/update](#post-teamsteamidupdate) (required)
- [/read](#post-teamsteamidread) (optional)

**Determine your base URL and endpoint URLs**

The base URL (webhook) is `{url}/v{apiVersion}`, where **url** and **apiVersion** are the properties you set in the [workforceIntegration](/graph/api/resources/workforceintegration) object when you [register the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant).

The relative paths of the endpoint URLs are as follows:

- /connect: `/connect`
- /update: `/teams/{teamid}/update`
- /read: `/teams/{teamid}/read`

For example, if **url** is `https://contosoconnector.com/wfi` and **apiVersion** is `1`:

- The base URL is `https://contosoconnector/com/wfi/v1`.
- The /connect endpoint is `https://contosoconnector/wfi/v1/connect`.
- The /update endpoint is `https://contosoconnector/wfi/v1/teams/{teamid}/update`.
- The /read endpoint is `https://contosoconnector/wfi/v1/teams/{teamid}/read`.

**Encryption**

All requests from Shifts to your connector are encrypted using AES-256-CBC with an HMAC-SHA-256 authentication tag. You specify the 64-character shared secret when you [register the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant). Responses sent back to Shifts shouldn't be encrypted.

Keep these two details in mind as you implement your decryption:

- **The 64-character shared secret is used as 64 raw ASCII bytes** (not Base64-decoded). The first 32 bytes are the HMAC authentication key; the last 32 bytes are the key-encryption key (KEK) that unwraps a per-message data-encryption key.
- **The HTTP body is a Microsoft Bond CompactBinary envelope**, not a raw `IV || ciphertext || HMAC` concatenation. An outer envelope `{ int32 KeyID; blob Ciphertext; }` wraps an inner struct `{ blob EK; blob IV; blob CT; blob AT; }`, where `AT = HMAC-SHA-256(authKey, "AES-256-CBC-HMAC-SHA256" || int32_le(KeyID) || EK || IV || CT)`.

The following sample decrypts a `/connect` or `/update` request body end to end using only platform crypto primitives.

# [C#](#tab/csharp)
```csharp
using System;
using System.Buffers.Binary;
using System.Security.Cryptography;
using System.Text;

public static class ShiftsPayloadDecryptor
{
    public static byte[] Decrypt(string sharedSecret, byte[] body)
    {
        if (sharedSecret is null || sharedSecret.Length != 64)
            throw new ArgumentException("sharedSecret must be 64 ASCII characters.", nameof(sharedSecret));

        // Master key: 64 ASCII bytes → 32-byte auth key + 32-byte KEK.
        var master  = Encoding.ASCII.GetBytes(sharedSecret);
        var authKey = master[..32];
        var kek     = master[32..];

        // Parse outer Bond envelope: { int32 KeyID; blob Ciphertext; } + BT_STOP.
        var p = 0;
        var keyId = ReadInt32Field(body, ref p, expectedId: 0);
        var inner = ReadBlobField (body, ref p, expectedId: 1);
        ReadStopByte(body, ref p);
        if (keyId != 1) throw new CryptographicException($"Unexpected KeyID {keyId}.");

        // Parse inner: { blob EK; blob IV; blob CT; blob AT; } + BT_STOP.
        var q = 0;
        var ek = ReadBlobField(inner, ref q, expectedId: 0);
        var iv = ReadBlobField(inner, ref q, expectedId: 1);
        var ct = ReadBlobField(inner, ref q, expectedId: 2);
        var at = ReadBlobField(inner, ref q, expectedId: 3);

        // AAD = UTF8("AES-256-CBC-HMAC-SHA256") || int32_little_endian(1).
        var aad = new byte[23 + 4];
        Encoding.UTF8.GetBytes("AES-256-CBC-HMAC-SHA256").CopyTo(aad, 0);
        BinaryPrimitives.WriteInt32LittleEndian(aad.AsSpan(23), 1);

        // Verify HMAC-SHA256 over AAD || EK || IV || CT.
        using var hmac = new HMACSHA256(authKey);
        hmac.TransformBlock(aad, 0, aad.Length, null, 0);
        hmac.TransformBlock(ek,  0, ek.Length,  null, 0);
        hmac.TransformBlock(iv,  0, iv.Length,  null, 0);
        hmac.TransformFinalBlock(ct, 0, ct.Length);
        if (!CryptographicOperations.FixedTimeEquals(hmac.Hash!, at))
            throw new CryptographicException("HMAC verification failed.");

        // Unwrap DEK with KEK using AES-256-ECB (no padding).
        byte[] dek;
        using (var aesKek = Aes.Create())
        {
            aesKek.Key = kek; aesKek.Mode = CipherMode.ECB; aesKek.Padding = PaddingMode.None;
            using var unwrap = aesKek.CreateDecryptor();
            dek = unwrap.TransformFinalBlock(ek, 0, ek.Length);
        }

        // Decrypt CT with DEK + IV using AES-256-CBC (PKCS#7).
        using var aes = Aes.Create();
        aes.Key = dek; aes.IV = iv; aes.Mode = CipherMode.CBC; aes.Padding = PaddingMode.PKCS7;
        using var dec = aes.CreateDecryptor();
        return dec.TransformFinalBlock(ct, 0, ct.Length);
    }

    // --- Bond CompactBinary v1 subset -------------------------------------
    // Tag byte: high-3-bits = field_id, low-5-bits = wire type (INT32=16, LIST=11).
    // Blob element type = INT8 (14). Integers use ZigZag varint. Struct body ends with 0x00.
    private const int BT_STOP = 0, BT_LIST = 11, BT_INT8 = 14, BT_INT32 = 16;

    private static int ReadInt32Field(byte[] buf, ref int p, int expectedId)
    {
        var tag = buf[p++];
        if ((tag & 0x1F) != BT_INT32 || (tag >> 5) != expectedId)
            throw new FormatException($"Expected int32 field {expectedId}, got tag 0x{tag:X2}.");
        var z = (uint)ReadVarUInt(buf, ref p);
        return (int)((z >> 1) ^ (uint)-(int)(z & 1));
    }

    private static byte[] ReadBlobField(byte[] buf, ref int p, int expectedId)
    {
        var tag = buf[p++];
        if ((tag & 0x1F) != BT_LIST || (tag >> 5) != expectedId)
            throw new FormatException($"Expected blob field {expectedId}, got tag 0x{tag:X2}.");
        if (buf[p++] != BT_INT8)
            throw new FormatException("Blob element type must be int8.");
        var len = (int)ReadVarUInt(buf, ref p);
        var result = new byte[len];
        Buffer.BlockCopy(buf, p, result, 0, len); p += len;
        return result;
    }

    private static void ReadStopByte(byte[] buf, ref int p)
    {
        if (buf[p++] != BT_STOP) throw new FormatException("Expected BT_STOP (0x00).");
    }

    private static ulong ReadVarUInt(byte[] buf, ref int p)
    {
        ulong result = 0; var shift = 0;
        while (true)
        {
            var b = buf[p++];
            result |= (ulong)(b & 0x7F) << shift;
            if ((b & 0x80) == 0) return result;
            shift += 7;
        }
    }
}
```

# [Python](#tab/python)
```python
import hmac, hashlib, struct
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives.padding import PKCS7

# Bond CompactBinary v1 subset: int32 field + blob fields + BT_STOP.
# Tag byte = (field_id << 5) | wire_type where int32=16, list=11; blob element type = int8 (14).
BT_STOP, BT_LIST, BT_INT8, BT_INT32 = 0, 11, 14, 16


def _read_varuint(buf, pos):
    result, shift = 0, 0
    while True:
        b = buf[pos]; pos += 1
        result |= (b & 0x7F) << shift
        if not (b & 0x80):
            return result, pos
        shift += 7


def _read_int32_field(buf, pos, expected_id):
    tag = buf[pos]; pos += 1
    if (tag & 0x1F) != BT_INT32 or (tag >> 5) != expected_id:
        raise ValueError(f"Expected int32 field {expected_id}, got tag 0x{tag:02X}.")
    z, pos = _read_varuint(buf, pos)
    return ((z >> 1) ^ -(z & 1)), pos  # ZigZag decode


def _read_blob_field(buf, pos, expected_id):
    tag = buf[pos]; pos += 1
    if (tag & 0x1F) != BT_LIST or (tag >> 5) != expected_id:
        raise ValueError(f"Expected blob field {expected_id}, got tag 0x{tag:02X}.")
    if buf[pos] != BT_INT8:
        raise ValueError("Blob element type must be int8.")
    pos += 1
    length, pos = _read_varuint(buf, pos)
    return buf[pos:pos + length], pos + length


def decrypt_shifts_payload(shared_secret: str, body: bytes) -> bytes:
    if len(shared_secret) != 64:
        raise ValueError("shared_secret must be 64 ASCII characters.")

    # Master key: 64 ASCII bytes → 32-byte auth key + 32-byte KEK.
    master = shared_secret.encode("ascii")
    auth_key, kek = master[:32], master[32:]

    # Parse outer Bond envelope: { int32 KeyID; blob Ciphertext; } + BT_STOP.
    p = 0
    key_id, p = _read_int32_field(body, p, expected_id=0)
    inner,  p = _read_blob_field (body, p, expected_id=1)
    if body[p] != BT_STOP:
        raise ValueError("Expected BT_STOP in outer envelope.")
    if key_id != 1:
        raise ValueError(f"Unexpected KeyID {key_id}.")

    # Parse inner: { blob EK; blob IV; blob CT; blob AT; } + BT_STOP.
    q = 0
    ek, q = _read_blob_field(inner, q, expected_id=0)
    iv, q = _read_blob_field(inner, q, expected_id=1)
    ct, q = _read_blob_field(inner, q, expected_id=2)
    at, q = _read_blob_field(inner, q, expected_id=3)

    # AAD = UTF8("AES-256-CBC-HMAC-SHA256") || int32_little_endian(1).
    aad = b"AES-256-CBC-HMAC-SHA256" + struct.pack("<i", 1)

    # Verify HMAC-SHA-256 over AAD || EK || IV || CT.
    mac = hmac.new(auth_key, aad + ek + iv + ct, hashlib.sha256).digest()
    if not hmac.compare_digest(mac, at):
        raise ValueError("HMAC verification failed.")

    # Unwrap DEK with KEK using AES-256-ECB (no padding).
    dek_cipher = Cipher(algorithms.AES(kek), modes.ECB())
    dek_decryptor = dek_cipher.decryptor()
    dek = dek_decryptor.update(ek) + dek_decryptor.finalize()

    # Decrypt CT with DEK + IV using AES-256-CBC (PKCS#7).
    content_cipher = Cipher(algorithms.AES(dek), modes.CBC(iv))
    content_decryptor = content_cipher.decryptor()
    padded = content_decryptor.update(ct) + content_decryptor.finalize()
    unpadder = PKCS7(128).unpadder()
    return unpadder.update(padded) + unpadder.finalize()
```

Install the required library with `pip install cryptography`.

---

#### Endpoints

##### POST /connect

Shifts calls this endpoint to test the connection when you [register the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant). A success response is returned only if this endpoint returns an HTTP `200 OK` response.

###### Example

**Request**<br>
ConnectRequest

```http
{
   "tenantId": "a1s2s355-a2s3-j7h6-f4d3-k2h9j4mqpz",
   "userId": "4fbc12d7-1234-56ef-8a90-bc123d45678f"
}
```

**Response**<br>
Return HTTP `200 OK`

##### POST /teams/{teamid}/update

Shifts calls this endpoint to get approval when a change is made to a Shifts entity in a [schedule](/graph/api/resources/schedule) that's [enabled for the workforce integration](#step-4b-enable-the-workforce-integration-for-your-team-schedules). If this endpoint approves the request, the change is saved in Shifts.

As your WFM system is the system of record, when the connector receives a request to this endpoint, it should first attempt to make the change in the WFM system. If the change is successful, return success. Otherwise, return failure.

Shifts calls this endpoint for every change (including changes initiated from the connector/WFM system). If the connector sent an update to Shifts using Graph API and added the `X-MS-WFMPassthrough: workforceIntegratonId` header, the request coming to this endpoint will have the same header, which allows you to identify and handle these requests appropriately. For example, return success without making the same change in the WFM system as it would be redundant and can cause the connector to get stuck in an infinite loop.

The following diagram shows the flow of data.

:::image type="content" source="media/shifts-custom-integration-update-from-shifts.png" alt-text="Diagram showing the flow for updates from Shifts to your WFM system." lightbox="media/shifts-custom-integration-update-from-shifts.png":::

> [!NOTE]
> For more information on Request and Response models, see [WfiRequest](#wfirequest) in the **Endpoint reference** section of this article.

**Return response code**<br>
Any response from the integration, including an error, must have an HTTP response code `200 OK`. The response body must have the status and error message that reflects the appropriate sub call error state. Any response from the integration other than `200 OK` is treated as an error and returned to the caller (client or Microsoft Graph).

###### If you want to set up a one-way sync, make Shifts read-only

For a one-way sync, you must make Shifts read-only so that users can't make changes in Shifts. To make Shifts read-only, return a failure response for all requests from Shifts.

For example, to block users from making changes to shifts in the schedule, this endpoint must return a failure response whenever it receives a request regarding a `shift` entity.

###### Example

**Request**<br>
WfiRequestContainer

The following example shows a request from Shifts that asks whether a shift, whose ID is SHFT_12345678-1234-1234-1234-1234567890ab and has the properties listed in **body**, can be saved in Shifts. This request was triggered when a user creates a shift in Shifts.

```http
{
  "requests": [
    {
      "id": "SHFT_12345678-1234-1234-1234-1234567890ab",
      "method": "POST",
      "url": "/shifts/SHFT_12345678-1234-1234-1234-1234567890ab",
      "headers": {
        "X-MS-Transaction-ID": "1",
        "X-MS-Expires": "2024-10-11T21:27:59.0134605Z"
      },
      "body": {
        "draftShift": {
          "activities": [],
          "isActive": true,
          "startDateTime": "2024-10-12T15:00:00.000Z",
          "endDateTime": "2024-10-12T17:00:00.000Z",
          "theme": "Blue"
        },
        "isStagedForDeletion": false,
        "schedulingGroupId": "TAG_a3e0b3f1-4a5c-4c2e-8eeb-5b8c3d1e3f8b",
        "userId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        "createdDateTime": "2024-10-11T21:27:28.762Z",
        "lastModifiedDateTime": "2024-10-11T21:27:28.762Z",
        "lastModifiedBy": {
          "user": {
            "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
            "displayName": "Adele Vance"
          }
        },
        "id": "SHFT_12345678-1234-1234-1234-1234567890ab"
      }
    }
  ]
}
```

**Response**<br>
WfiResponse

Success: Return HTTP `200 OK`

This example shows the response returned if the endpoint approved the request. In this scenario, the shift is saved in Shifts, and the user can see the shift in the schedule.

```http
{
  "responses": [
    {
      "id": "SHFT_12345678-1234-1234-1234-1234567890ab",
      "status": 200,
      "body": {
        "eTag": "3f4e5d6c-7a8b-9c0d-1e2f-3g4h5i6j7k8l",
        "error": null,
        "data": null
      }
    }
  ]
}
```

Failure: Return HTTP `200 OK`

This example shows the response returned if the endpoint denied the request. In this scenario, the user receives a "Could not add the shift" error message in Shifts. Every `id` in the incoming `requests` array must have a matching response object with a non-200 `status` — missing or incomplete responses are treated as implicit approval, and the change is written to Shifts. Match the status to the nature of the rejection: use `403` for a permanent, policy-driven denial (for example, read-only mode), or `500` for a transient error your WFM system might recover from.

```http
{
    "responses": [
        {
            "id": "SHFT_12345678-1234-1234-1234-1234567890ab",
            "status": 403,
            "body": {
                "error": {
                    "code": "403",
                    "message": "Could not add the shift"
                },
                "data": null
            }
        }
    ]
}
```

##### POST /teams/{teamid}/read

This endpoint handles requests from Shifts to fetch eligible time-off reasons or eligible shifts for swap requests for a user.

> [!NOTE]
> As of October 2024, this endpoint is supported only in the beta version of the Microsoft Graph API. You must also specify values for the **eligibilityFilteringEnabledEntities** property when you [register the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant).

The following diagram shows the flow of data.

:::image type="content" source="media/shifts-custom-integration-read-from-shifts.png" alt-text="Diagram showing the flow for eligibility filtering requests." lightbox="media/shifts-custom-integration-read-from-shifts.png":::

**Return response code**<br>
Any response from the integration, including an error, must have an HTTP response code `200 OK`. The response body must include the status and error message that reflects the appropriate sub call error state. Any response from the integration other than `200 OK` is treated as an error and returned to the caller (client or Microsoft Graph).

###### Example: TimeOffReason

**Request**

The following example shows a request from Shifts that asks which time off reasons a user (user ID aa162a04-bec6-4b81-ba99-96caa7b2b24d) is eligible for. This request was triggered when the user requests time off in Shifts.

```http
 { 
  "requests": [ 
    { 
      "id": "aa162a04-bec6-4b81-ba99-96caa7b2b24d", 
      "method": "GET", 
      "url": "/users/aa162a04-bec6-4b81-ba99-96caa7b2b24d/timeOffReasons?requestType=TimeOffReason"
    } 
  ] 
}
```

**Response**<br>
Success: Return HTTP `200 OK`

The following response shows that the eligible time off reason IDs for the user are "TOR_29f4a110-ae53-458b-83d6-00c910fe2fbc" and "TOR_8c0e8d07-ac1a-48dc-b3af-7bc71a62ff7d". In this scenario, the user sees the corresponding time-off reasons to choose from in Shifts.

```http
{
    "responses": [ 
      { 
        "id": "aa162a04-bec6-4b81-ba99-96caa7b2b24d", 
        "status": 200, 
        "body": { 
          "data": [ 
            "TOR_29f4a110-ae53-458b-83d6-00c910fe2fbc", 
            "TOR_8c0e8d07-ac1a-48dc-b3af-7bc71a62ff7d" 
          ], 
          "error": null 
          } 
        }
    ]
}
```

Failure: Return HTTP `200 OK`

In this example, an error response is returned because the connector couldn't reach the WFM system to retrieve time off reasons for the user.

```http
 {
  "responses": [
    {
      "id": "aa162a04-bec6-4b81-ba99-96caa7b2b24d",
      "status": 503,
      "body": {
        "data": null,
        "error": {
          "code": "503",
          "message": "Could not reach WFM"
        }
      }
    }
  ]
}
```

###### Example: SwapRequest

**Request**

The following example shows a request from Shifts that asks which shifts are eligible for a swap with the shift whose ID is SHFT_5e2b51ac-dc47-4a66-83ea-1bbbf81ac029 between 2024-10-01T04:00:00.0000000Z and 2024-11-01T03:59:59.9990000Z.

```http
{
  "requests": [
    {
      "id": "SHFT_5e2b51ac-dc47-4a66-83ea-1bbbf81ac029",
      "method": "GET",
      "url": "/shifts/SHFT_5e2b51ac-dc47-4a66-83ea-1bbbf81ac029/requestableShifts?requestType=SwapRequest&startTime=2024-10-01T04:00:00.0000000Z&endTime=2024-11-01T03:59:59.9990000Z"
    }
  ]
}
```

**Response**<br>
Success: Return HTTP `200 OK`

The following response shows that the shift can be swapped with the shift whose ID is SHFT_98e96e23-966b-43be-b90d-4697037b67af.

```http
{ 
  "responses": [ 
    { 
      "id": "SHFT_5e2b51ac-dc47-4a66-83ea-1bbbf81ac029", 
      "status": 200, 
      "body": { 
        "data": ["SHFT_98e96e23-966b-43be-b90d-4697037b67af"],
        "error": null, 
      } 
    }
  ]
}
```

Failure: Return HTTP `200 OK`

In this example, an error response is returned because the connector couldn't reach the WFM system to retrieve eligible shifts for a swap request for the user.

```http
{
  "responses": [
    {
      "id": "SHFT_5e2b51ac-dc47-4a66-83ea-1bbbf81ac029",
      "status": 503,
      "body": {
        "data": null,
        "error": {
          "code": "503",
          "message": "could not reach WFM"
        }
      }
    }
  ]
}

```

### Step 1b: Sync data from your WFM system to Shifts

Use Shifts APIs in Microsoft Graph to read schedule data from your WFM system and write the data to Shifts.

For example, to add a shift to Shifts, use the [Create shift](/graph/api/schedule-post-shifts) API.

See the [Microsoft Graph API v1.0 reference](/graph/api/resources/shift) for Shifts APIs, which are listed under **Shift management**.

The following diagram shows the flow of data.

:::image type="content" source="media/shifts-custom-integration-update-to-shifts.png" alt-text="Diagram that shows the flow for syncing data from your WFM system to Shifts." lightbox="media/shifts-custom-integration-update-to-shifts.png":::

#### Initial sync

For the first sync, the connector should read data in your WFM system and write the data to Shifts. We recommend you sync two weeks of future data.

#### After the initial sync

After the first sync, you can choose to:

- **Synchronously update Shifts with changes in your WFM system**: Send an update to Shifts for every change made in your WFM system.
- **Asynchronously update Shifts with changes in your WFM system**: Perform a periodic sync by writing all changes that occurred in your WFM system within a certain timeframe (for example, 10 minutes) to Shifts.

    All write operations to Shifts, including write operations initiated by the connector, trigger a call to the connector's /update endpoint. We recommend you include the `X-MS-WFMPassthrough: workforceIntegratonId` header to all write calls so the connector can identify and handle them appropriately. For example, if your WFM system initiated the change, approve it without applying an update to your WFM system.

  > [!NOTE]
  > If you're setting up your connector for a two-way sync of data between your WFM system and Shifts, exclude changes initiated from Shifts in the periodic sync. These changes are already written in Shifts.

## Step 2: Register an app in the Microsoft Entra admin center

Follow these steps to register an app for your connector in the Microsoft identity platform, configure permissions for the app to access Microsoft Graph, and get an access token.

1. Sign in to the Microsoft Entra admin center as at least a [Cloud Application Administrator](/entra/identity/role-based-access-control/permissions-reference#cloud-application-administrator).
1. Register your app. For steps, see [Register an application with the Microsoft identity platform](/graph/auth-register-app-v2).
1. Assign the *Schedule.ReadWrite.All* [application permissions](/graph/permissions-overview?tabs=http#application-permissions) to the app for app-only access and get an access token.

      For step-by-step guidance, see [Get access without a user](/graph/auth-v2-service).

      The access token verifies that your app is authorized to [call Microsoft Graph using its own identity](/graph/auth/auth-concepts#access-scenarios) using the *Schedule.ReadWrite.All* permission. It must be included in the Authorization header of requests.
1. If you plan to [register or update the workforce integration programmatically](#step-4a-register-the-workforce-integration-in-your-tenant) using app-only access, also assign the *WorkforceIntegration.ReadWrite.All* application permission to the app. A Global Administrator must grant admin consent for this permission.

## Step 3: Create teams and schedules for syncing

Set up the teams in Teams that you want to sync. You can use existing teams or create new teams.

1. Set up teams in Teams to correspond with the teams and locations in your WFM system. Ensure you add the following people to each team:

    - Frontline managers as team owners.
    - Frontline workers as team members.
1. Create a schedule in Shifts for each team. To learn more, see [Create or replace schedule](/graph/api/team-put-schedule). Schedule provisioning is asynchronous — poll the schedule's `provisionStatus` until it's `completed` before creating scheduling groups.
1. Add schedule groups to the schedule on each team. Schedule groups are used to group employees based on common characteristics within a team. For example, schedule groups can be departments or job types. To learn more, see [schedulingGroup resource type](/graph/api/resources/schedulinggroup).
1. Add employees to each schedule group. To learn more, see [Replace schedulingGroup](/graph/api/schedulinggroup-put).

> [!NOTE]
> You can also use the Teams admin center to set up your teams and deploy Shifts to the teams. To learn more, see:
>
>- [Deploy frontline dynamic teams at scale](deploy-dynamic-teams-at-scale.md)
>- [Deploy Shifts to your frontline teams at scale](deploy-shifts-at-scale.md)

## Step 4: Register and enable the workforce integration

A workforce integration defines the encryption settings for communication between Shifts and the connector, the URL for callbacks from Shifts, and the types of entities to sync.

To register and enable the workforce integration, complete the following steps:

- [Step 4a: Register the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant)
- [Step 4b: Enable the workforce integration for your team schedules](#step-4b-enable-the-workforce-integration-for-your-team-schedules)

### Step 4a: Register the workforce integration in your tenant

Use the [Create workforceIntegration](/graph/api/workforceintegration-post?tabs=http) API to register your workforce integration in your tenant.

You can perform this step interactively — for example, from [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer) signed in as a Global Administrator — or programmatically using an application token. In the programmatic case, the app must have the *WorkforceIntegration.ReadWrite.All* application permission consented by a Global Administrator (see [Step 2](#step-2-register-an-app-in-the-microsoft-entra-admin-center)).

Here's an example of a request.

```http
POST https://graph.microsoft.com/v1.0/teamwork/workforceIntegrations/
{ 
  "displayName": "Contoso integration", 
  "apiVersion": 1, 
  "encryption": { 
    "protocol": "sharedSecret", 
    "secret": "secret-value" 
  }, 
  "isActive": true, 
  "url": "https://contosoconnector.com/wfi", 
  "supportedEntities": "Shift,SwapRequest,UserShiftPreferences,Openshift,OpenShiftRequest,OfferShiftRequest",
}
```

See the following table for details. To learn more, see [workforceIntegration resource type](/graph/api/resources/workforceintegration).

|Property  |More information|
|---------|---------|
|apiVersion|API version for the callback URL. Your [base URL](#step-1a-sync-changes-made-in-shifts-to-your-wfm-system) is comprised of the **url** property and this property.|
|encryption|Set **protocol** to `sharedSecret`. The **secret** value must be exactly 64 characters. <br><br>Use the secret to decrypt the encrypted JSON payloads that are sent to your connector's endpoint from Shifts. The payload is encrypted using AES-256-CBC-HMAC-SHA256. Your app should safely persist this secret. For example, in a key vault.|
|supportedEntities|Specify the Shifts entities you want the connector to support for syncing. Shifts calls your connector's [/update](#post-teamsteamidupdate) endpoint when any of these entities change so that you can approve or reject the change. For the list of the possible values, see [workforceIntegration resource type](/graph/api/resources/workforceintegration)<br><br>**Note** This list is an [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations). You must use the `Prefer: include-unknown-enum-members` request header to get all the values.|
|eligibilityFilteringEnabledEntities|**Note**: As of October 2024, this endpoint is supported only in the beta version of the Microsoft Graph API.<br><br>Specify the Shifts entities that you want to connector to support for eligibility filtering. Possible values are:<ul><li>`none`: Empty list</li><li>`SwapRequests`: Shifts calls your connector's [/read](#post-teamsteamidread) endpoint to get a filtered list of shifts a user can choose from for a swap request.</li><li>`TimeOffReasons`: Shifts calls your connector's [/read](#post-teamsteamidread) endpoint to get a filtered list of time-off reasons a user can choose from when they request time off. </li></ul>**Note** This list is an [evolvable enumeration](/graph/best-practices-concept#handling-future-members-in-evolvable-enumerations). You must use the `Prefer: include-unknown-enum-members` request header to get all the values.|
|url|The workforce integration URL for callbacks from Shifts. Your [base URL](#step-1a-sync-changes-made-in-shifts-to-your-wfm-system) is comprised of this property and the **apiVersion** property.|

### Step 4b: Enable the workforce integration for your team schedules

Enable your workforce integration on the schedules you want to manage. To do this, use the [Create or replace schedule](/graph/api/team-put-schedule) API to create or update the schedule for your teams.

Here's an example of a request.

```http
POST https://graph.microsoft.com/v1.0/teams/{teamId}/schedule
{
  enabled: true,
  timezone: "America/New_York",
  workforceIntegrationIds: [ "workforceIntegrationId"]
}
```

- Specify the workforceIntegrationId that was generated when you [registered the workforce integration](#step-4a-register-the-workforce-integration-in-your-tenant).
- You can enable a maximum of one workforce integration on a schedule. If you include more than one workforceIntegrationId in the request, the first one is used.

## Troubleshooting

### Connector

#### When the connector responds to a request from Shifts, what happens if it returns a response code other than 200? Does it make a difference if it returns a status other than 200 in the response body?

There's a difference between these two scenarios.

- If the connector returns a response code other than 200, Shifts attempts to retry the /read and /update endpoints multiple times. Eventually, Shifts displays a "Something went wrong. The workforce integration setup on your team has responded with invalid data." error message.
- If the connector returns a status other than 200 in the response body, Shifts displays a "Something went wrong. Sorry, your change couldn't be completed," error message and stops retrying the endpoints.

#### What happens if the connector returns invalid data in the response body?

Shifts attempts to retry the /read and /update endpoints multiple times. Eventually, Shifts displays a "Something went wrong. The workforce integration set up on your team has responded with invalid data." error message.

#### How do I identify whether the request was originally made in Shifts or in the WFM system to prevent an infinite loop?

Add the `X-MS-WFMPassthrough: workforceIntegratonId` header to all write and update calls to identify/ignore the changes triggered by connector. This header is used to indicate that the request is made because of a preceding call that was made by the connector to Graph API to sync data from your WFM system to Shifts.

### Workforce integration registration

#### I registered the workforce integration and specified "eligibilityFilteringEnabledEntities" including "SwapRequest, OfferShiftRequest, and TimeOffReason' but the response body doesn't show the "eligibilityFilteringEnabledEntities" list.

Eligibility filtering is currently supported through the `https://graph.microsoft.com/beta` endpoint, not the `https://graph.microsoft.com/v1` endpoint.

#### I registered the workforce integration and added "supportedEntities" but receive a 400 Bad Request response and an "Invalid payload: Requested value 'shift, ....' was not found." message

Make sure that every Shifts entity in the `supportedEntities` list request body starts with an uppercase letter. For example,
`"supportedEntities":"Shift,SwapRequest,OpenShift"`.

#### I registered the workforce integration and implemented the /connect, /update, and /read endpoints, but the webhook isn't working.

Make sure your workforce integration is enabled for your team schedule. Additionally, check that the **url** and **apiVersion** properties are correct.

## Endpoint reference

### Request

#### ConnectRequest

|Property  |Type |Description |
|---------|---------|---------|
|tenantId|String|ID of the tenant for the workforce integration|
|userId|String|ID of the user for the workforce integration|

```http
{
  "tenantId": "string",
  "userId": "string"
}
```

#### WfiRequestContainer

|Property  |Type |Description |
|---------|---------|---------|
|requests|WfiRequest collection|List of WfiRequests|

```http
{
  "requests": [
    {
      "id": "string",
      "method": "string",
      "url": "string",
      "headers": {
        "X-MS-Transaction-ID": "string",
        "X-MS-Expires": "string (DateTime)"
      },
      "body": "ShiftsEntity"
    }
  ]
}
```

Number of elements in a request:

- In most cases, a request has one element.
- Some requests, such as swap shift request approvals, have five elements: one PUT swap request, two DELETE shifts (existing shifts), and two POST shifts (new shifts).

#### WfiRequest

|Property  |Type |Description |
|---------|---------|---------|
|id  |String|ID of the entity|
|method |String|The method invoked on the item. For example, `POST`, `PUT`, `GET`, `DELETE`. |
|url |String|Indicates the type of entity and operation details.|
|headers|WfiRequestHeader |Headers|
|body|ShiftsEntity |Body of the entity related to the request.|

##### For POST /teams/{teamId}/update

|Property  |Type |Description |
|---------|---------|---------|
|id  |String|ID of the entity|
|method |String|`POST` to create an entity, `PUT` to update an entity, `DELETE` to delete an entity. |
|url|String|The format is `/{EntityType}/{EntityId}`. Possible values for `{EntityType}` are `shifts`, `swapRequests`, `timeoffReasons`, `openshifts`, `openshiftrequests`, `offershiftrequests`, `timesoff`, `timeOffRequests`. For example, `/shifts/SHFT_12345678-1234-1234-1234-1234567890ab`.|
|header|WfiRequestHeader |Header|
|body|ShiftsEntity |Must match `{EntityType}` in the **url** property. Use one of [shift](/graph/api/resources/shift), [swapShiftsChangeRequest](/graph/api/resources/swapshiftschangerequest), [timeOffReason](/graph/api/resources/timeoffreason), [openshift](/graph/api/resources/openshift), [openShiftChangeRequest](/graph/api/resources/openshiftchangerequest), [offerShiftRequests](/graph/api/resources/offershiftrequest), [timeOff](/graph/api/resources/timeoff), [timeOffRequest](/graph/api/resources/timeoffrequest). For example, `/shifts/SHFT_12345678-1234-1234-1234-1234567890ab`.|

##### For POST /teams/{teamsId}/read  

|Property  |Type |Description |
|---------|---------|---------|
|id  |String|ID of the entity|
|method |String|Is always `GET`.|
|url|String|<ul><li>**TimeOffReasons**: The format is `/users/{userId}/timeOffReasons?requestType=TimeOffReason`. For example, `/users/aa162a04-bec6-4b81-ba99-96caa7b2b24d/timeOffReasons?requestType=TimeOffReason`.</li><li>**SwapRequest**: The format is `/shifts/{ShiftsId}/requestableShifts?requestType=SwapRequest\u0026startTime={startTime}\u0026endTime={endTime}`. For example, `shifts/SHFT_1132430e-365e-4dc5-b8b0-b800592a81a8/requestableShifts?requestType=SwapRequest\u0026startTime=2024-10-01T07:00:00.0000000Z\u0026endTime=2024-11-01T06:59:59.9990000Z`. </li></ul>|
|header|WfiRequestHeader |Header|
|body|ShiftsEntity |Is always `null`.|

#### WfiRequestHeader

|Property  |Type |Description |
|---------|---------|---------|
|X-MS-Transaction-ID |String|Transaction ID|
|X-MS-Expires|String (DateTime)|Transaction expiration DateTime|

`X-MS-WFMPassthrough: workforceIntegratonId` won't be included in WfiRequestHeader. It should be extracted from the HttpRequest.

### Response

#### WfiResponseContainer

|Property  |Type |Description |
|---------|---------|---------|
|responses |WfiResponse collection|List of WfiResponses|

```http
{
  "responses": [
    {
      "id": "string",
      "status": "string",
      "body": {
        "eTag": "string",
        "error": {
          "code": "string",
          "message": "string"
        },
        "data": ["string1", "string2"]
      }
    }
  ]
}
```

#### WfiResponse

|Property  |Type |Description |
|---------|---------|---------|
|id|String|ID of the entity|
|status|String|Result of the operation|
|body|WfiResponseBody|WfiResponseBody|

#### WfiResponseBody

|Property  |Type |Description |
|---------|---------|---------|
|eTag |String|eTag|
|error|WfiResponseError|Details about the error|
|data|String|The requested data (for read requests)|

#### WfiResponseError

|Property  |Type |Description |
|---------|---------|---------|
|code|String|Error code|
|message|String|Error message|

## Related articles

- [Shifts for your frontline organization](shifts-for-teams-landing-page.md)
- [Shifts connectors](shifts-connectors.md)

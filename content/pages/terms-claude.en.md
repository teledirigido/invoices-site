---
locale: en
slug: terms-claude
topText: Legal
title: Claude Connector — Data Use
lastUpdated: "Last updated: August 2026"
summary:
  - title: Only your own data
    desc: The connector only gives Claude access to your own Nitidez account, at your request.
  - title: Read and write access
    desc: Claude can view your records and, when you ask it to, create or update some of them.
  - title: Processed by Anthropic
    desc: Data you ask Claude to access is sent to Anthropic to generate its response.
  - title: Disconnect anytime
    desc: Remove the connector from Claude at any time to stop all access immediately.
disclaimer: This page describes the Claude Connector feature specifically and should be read together with our Privacy Policy. It is not legal advice.
---

## 1. What is the Claude Connector

Nitidez offers an integration ("Connector" or MCP server) that lets you use Anthropic's Claude to interact with your Nitidez account using natural language. This page explains what data the connector can access, how it is used, and who processes it. It complements our general [Privacy Policy](/pages/privacy) and applies specifically to this feature.

## 2. What Claude can access

When you connect your Nitidez account to Claude and authorize the connector, Claude can perform the following actions on your behalf, only when you ask it to:

- **View your data:** companies, customers, suppliers, expenses, invoices, invoice payment status, and tax insights associated with your account.
- **Create or update your data:** add new companies, customers, suppliers, and expenses; generate invoice creation links; and update invoice payment status.

The connector only ever operates on the account you have authorized it for, using your own authentication. Nitidez does not grant Claude access to any other user's data.

## 3. Anthropic as a data processor

To respond to your requests, the data you ask Claude to read or write is transmitted to and processed by **Anthropic, PBC**, the developer of Claude, as part of fulfilling your request. This processing is governed by Anthropic's own privacy policy, available at [anthropic.com/privacy](https://www.anthropic.com/legal/privacy). Nitidez does not control how Anthropic's infrastructure handles data in transit or during processing beyond what Anthropic's terms and privacy policy describe.

## 4. Data retention

Nitidez does not create a separate copy of your data for the connector: the connector reads from and writes to the same account data described in our Privacy Policy, and is retained under the same terms. Any retention of conversation data on Anthropic's side is governed by Anthropic's own privacy policy and your settings within Claude.

## 5. Disconnecting the connector

You can remove the Nitidez connector from your Claude account at any time (via Claude's connector or settings menu). Once removed, Claude no longer has access to your Nitidez data. Disconnecting does not delete data already created in your Nitidez account through the connector; you can manage or delete that data directly in Nitidez.

## 6. Security

Access through the connector uses the same authenticated, encrypted channels as the rest of Nitidez. We recommend only authorizing the connector on Claude accounts you control, and reviewing what the connector created or changed if you share account access with others.

## 7. Changes to this page

If we add new capabilities to the connector or change how data is processed, we will update this page and, where the change is material, notify active users by email.

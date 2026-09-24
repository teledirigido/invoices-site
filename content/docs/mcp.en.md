---
locale: en
slug: mcp
topText: Documentation
title: Nitidez MCP Connector
lastUpdated: "Last updated: September 2026"
---

Prefer a narrative walkthrough? Read the blog article on [what the Nitidez MCP connector can do](/blog/what-can-the-nitidez-mcp-do).

Documentation for IT admins and users evaluating or connecting the Nitidez Model Context Protocol (MCP) server for use with Claude, ChatGPT, or any other MCP-compatible client.

## Getting Started

Nitidez is an invoicing and tax-management platform for self-employed professionals and small companies in Spain. The Nitidez MCP server is a thin, hosted gateway that exposes a Nitidez account's invoices, expenses, customers, suppliers, and tax data as a set of tools an AI assistant can call on behalf of the signed-in user — always after that user authenticates and authorizes access via OAuth.

## Endpoint

`https://mcp.nitidez.es/mcp` — Streamable HTTP transport.

OAuth discovery metadata is published at `https://mcp.nitidez.es/.well-known/oauth-protected-resource`, pointing clients to Nitidez's own authorization server for login and consent.

## Authentication and Authorization

- Access is granted per user via standard OAuth. The MCP server never asks for or stores a Nitidez password — the user logs in and approves access through Nitidez's own hosted login and consent screen.
- Every request to the MCP server carries a bearer token, which the server verifies on each call against Nitidez's own token introspection endpoint. The MCP server holds no independent session or user database of its own.
- A connected assistant only ever acts within the scope of the authenticated user's own account — their own company, invoices, customers, suppliers, and expenses. There is no cross-account or admin-level access.
- Access can be revoked at any time from the user's Nitidez account settings, which immediately invalidates the token used by the connector.

## Data Accessed

The connector can read and write the same data the user already manages in their Nitidez account: company profile, invoices, customers, suppliers, expenses, attached receipts, and IVA/IRPF tax summaries. It does not access billing/payment details for the Nitidez subscription itself, and it does not access any other user's data.

The server exposes 13 tools, each annotated as read-only or as an action that creates or modifies data — MCP clients such as Claude typically surface that distinction to the user and ask for confirmation before running an action tool. The full reference for each tool, including its parameters, is below.

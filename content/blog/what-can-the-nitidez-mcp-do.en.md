---
locale: en
slug: what-can-the-nitidez-mcp-do
title: 'What can the Nitidez MCP connector do? Every tool, explained'
description: 'A full walkthrough of the Nitidez MCP server: every tool it exposes to Claude and ChatGPT, from listing invoices to checking your quarterly IVA and IRPF position.'
summaryText: "Nitidez ships an MCP connector so you can manage your invoicing from Claude or ChatGPT. Here's what each of its 13 tools actually does."
dateTime: '2026-09-24T09:00:00Z'
translationSlug: que-puede-hacer-el-mcp-de-nitidez
categorySlug: using-nitidez
---

If you use Claude or ChatGPT, you can now talk to your Nitidez account directly from the chat: ask "how much do I owe in IVA this quarter", "log this expense", or "send me the PDF of invoice 45" without opening the dashboard. That's what the Nitidez MCP connector does — it exposes your invoicing data as a set of tools an AI assistant can call, with your permission, on your behalf.

This article goes through everything the connector can do, grouped by what it's for.

## What MCP Is, in One Paragraph

MCP (Model Context Protocol) is an open standard that lets an AI assistant securely call tools exposed by a third-party server — in this case, Nitidez. Once you connect it (via Claude's or ChatGPT's connector settings, using your Nitidez account), the assistant can read and act on your invoices, expenses, customers, and taxes, always asking your permission before anything is created or changed.

## Checking Which Company Is Connected

You can ask who the connector is currently acting on behalf of, and get back the company's name, VAT number, address, and contact details (`whoami`). It's a useful sanity check before asking the assistant to do anything, or if you manage more than one identity and want to confirm which one is connected.

## Invoices

You can ask for your invoices, most recent first, optionally filtered by status — draft, sent, or deleted (`list_invoices`). Ask about a specific one and the assistant retrieves its full detail: line items, customer, amounts (`get_invoice`). You can also ask to mark an invoice as paid, pending, or overdue, without opening the app (`update_invoice_payment`).

Creating an invoice itself involves tax rates, line items, and Veri*Factu requirements that need the real form, so instead of guessing at it, the assistant hands you a direct link to the "create invoice" page, ready to fill in (`get_create_invoice_link`). And once an invoice has been sent, you can ask for its PDF: the assistant gets you a one-time download link, plus a permanent link to the invoice's page as a fallback (`download_invoice_pdf`).

## Customers and Suppliers

You can ask for your existing customers and their VAT numbers (`list_customers`), or add a new one — name, VAT number, address, country, and optionally email, phone, language, etc. (`add_customer`). The assistant always checks the existing list first to avoid creating a duplicate.

Suppliers work the same way: you can list the suppliers behind your expenses (`list_suppliers`) or add a new one (`add_supplier`). Before creating a supplier, the assistant will confirm with you first — "I couldn't find this supplier, should I add it?" — rather than doing it silently.

## Expenses

You can ask for your expenses, most recent first, filtered by supplier or by year and quarter — e.g. "what did I spend in Q2 2026?" (`list_expenses`). You can also log a new expense: amount, IVA and IRPF rates, category, dates, and optionally a linked supplier (`add_expense`). It has a special case for Social Security payments — pick the Social Security category and it auto-fills the description, the TGSS supplier, and zeroes out IVA/IRPF for you.

If you want to attach a receipt or photo to an expense, the assistant gives you a one-time upload link you open on your phone or browser to add it, valid for 5 minutes (`get_expense_attachment_upload_link`).

## Taxes

You can ask how much you owe for a given quarter, and get a summary of your IVA (Modelo 303) and IRPF (Modelo 130) position — how much you owe, how much carries forward as compensation, and whether it's already been paid (`get_tax_insights`). If you don't specify a quarter, it defaults to the current one, so "how much do I owe this quarter" just works.

## Registering Your Company

For a brand-new Nitidez account with no company set up yet, you can ask the assistant to register your business — name, VAT number, address, bank details for invoices — and it becomes your default company (`add_company`). Since a Nitidez account only holds one company, this only runs once.

## How to Connect It

Connect the Nitidez MCP server from your Claude or ChatGPT connector settings using your Nitidez account. Once connected, every action that creates or changes data — expenses, customers, payment status, and so on — still asks for your confirmation. The assistant never invoices or spends on your behalf without you seeing it first.

For the technical details — endpoint, authentication, and the exact permissions each tool has — see the [connector documentation](/docs/mcp).

## In Summary

- The Nitidez MCP connector gives Claude and ChatGPT 13 tools to read and manage your invoicing data.
- Read-only tools let the assistant answer questions: which company is connected, your invoices, customers, suppliers, expenses, and tax position.
- Action tools create or change data — new customers, suppliers, expenses, payment status updates, company registration — always with your confirmation.
- A couple of tools hand you a direct link instead of acting for you (creating an invoice, uploading or downloading a file), because those flows are better done by you, in the real form.

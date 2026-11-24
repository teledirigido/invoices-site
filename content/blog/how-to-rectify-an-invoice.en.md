---
locale: en
slug: how-to-rectify-an-invoice
title: 'How to rectify an invoice'
description: 'How to rectify an invoice you have already issued in Spain: when it is mandatory, which invoices can be rectified, the R1 to R4 reasons, substitution or difference, deadlines and where the correction is declared. And why a cancelled invoice cannot be rectified.'
summaryText: 'An issued invoice cannot be edited or deleted: if it has a mistake or something changed afterwards, you correct it with a rectifying invoice. We explain when you need one, how it works and what happens with cancelled invoices.'
dateTime: '2026-11-10T09:00:00Z'
translationSlug: como-rectificar-una-factura
categorySlugs: [agencia-tributaria, issuing-invoices]
---

You've issued an invoice and something doesn't add up: the VAT was wrong, the customer has returned part of the order, or you got a detail wrong. Invoices validated with Veri\*Factu can no longer be edited or deleted. You correct them by issuing a **rectifying invoice** (factura rectificativa).

::card
---

title: TL;DR
background: white
shadow: true
---

- A rectifying invoice is a new invoice that corrects one you've already issued. The original stays untouched.
- It's mandatory when the invoice has a mistake (a detail, the VAT) or when the amount changes after the sale: returns, discounts, customer insolvency or uncollectable debts.
- It carries a **reason**, given as a code from R1 to R4, a **type** (substitution or difference), and it goes in its **own series**.
- You have up to four years, but the rules ask you to issue it as soon as you know about the mistake.
- Only issued invoices can be rectified. You can't rectify draft or cancelled invoices.

::

## When you have to issue a rectifying invoice

It's governed by article 15 of the Invoicing Regulation (Real Decreto 1619/2012):

> A rectifying invoice must be issued when the original invoice does not meet any of the requirements set out in articles 6 or 7 [...]
>
> Likewise, a rectifying invoice must be issued when the VAT charged was determined incorrectly, or when any of the circumstances that, under article 80 of the VAT Law, give rise to a change in the taxable base have occurred.

In other words, you rectify in three situations:

- **A mandatory detail is missing or wrong:** the customer's tax ID (NIF), their address, the date, the description.
- **The VAT was calculated wrongly:** wrong rate, base added up incorrectly.
- **The base changes after the sale** for the reasons in article 80 of the VAT Law: returns, later discounts, transactions that are undone, customers in insolvency proceedings or uncollectable debts.

And there's a deadline. The same article 15 says:

> The rectifying invoice must be issued as soon as the person obliged to issue it becomes aware of the circumstances that, under the preceding paragraphs, require it, provided that four years have not passed since the tax became chargeable or, where applicable, since the circumstances referred to in article 80 of the VAT Law occurred.

## Which invoices can be rectified

Only **issued** invoices, whether or not they've been paid. Before that, there's nothing to rectify.

**A draft invoice is simply corrected.** The AEAT puts it this way in its clarifications for invoicing software developers:

> If errors are detected "while the invoice is being prepared", that is, while it is being edited but has not yet been issued, they are simply corrected before issuing it.

**A rectifying invoice with a mistake gets rectified itself.** If the rectifying invoice you issued was also wrong, the next correction is made on that rectifying invoice, not on the original. That's what the AEAT does in its examples of rectifying a previous rectifying invoice.

## What about cancelled invoices?

A cancelled (anulada) invoice **cannot be rectified**. Cancellation is a different, exceptional mechanism: it voids an invoice that should never have been issued, for example one for a transaction that never existed. The AEAT describes its effect like this:

> The consequence is that the invoice will have no tax effect at all, neither in the record books nor in the tax returns to be filed.

If the cancelled invoice has no tax effect, there's nothing left to correct. If you need a valid invoice in its place, you issue a new, ordinary invoice, not a rectifying one:

> If a new, correct invoice is to be issued, it must be registered as a new record with a different invoice number or issue date.

It also works the other way round: an invoice you've already rectified cannot be cancelled. We'll cover cancellation in a separate article.

## The reason: R1, R2, R3 or R4

Every rectifying invoice carries a code that says why it's being rectified. It's what gets sent to the AEAT with [Veri\*Factu](/en/blog/what-is-verifactu), and it's worth choosing it carefully, because it affects where the correction is declared.

| Code   | When it's used                                                                                                                                                                   | Example                                                                                                                                                                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R1** | Returns, discounts or price changes after the sale, transactions that are undone, provisional prices (art. 80 Uno, Dos and Seis of the VAT Law), or an error fundado de derecho. | The customer returns part of the order, or you agree on a discount after invoicing. Another example is agreeing a discount with the customer on an already invoiced delivery because you were late. |
| **R2** | The customer is in insolvency proceedings (art. 80.Tres of the VAT Law).                                                                                                         | You adjust the invoice of a customer who has entered insolvency proceedings.                                                                                                                        |
| **R3** | Uncollectable debt (art. 80.Cuatro of the VAT Law).                                                                                                                              | An unpaid invoice that meets the legal requirements for an uncollectable debt.                                                                                                                      |
| **R4** | Any other reason, including an ordinary mistake.                                                                                                                                 | You charged 21% VAT when it should have been 10%, or you got a quantity wrong.                                                                                                                      |

There's also **R5**, reserved for rectifying simplified invoices (receipts), whatever the reason.

The most common mistake is to think R1 means "error" and R4 "everything else". That's not how it works: an ordinary slip (a mistyped amount, a wrong customer detail) is **R4**. The AEAT explicitly lists under R4 the case:

> When any non-monetary data on the invoice has been entered incorrectly

R1 is for the article 80 reasons and for an error fundado de derecho, which is a misinterpretation of the law, not a slip.

And a case that's often confused with a cancellation: if the transaction **existed and was undone afterwards** (the customer returns the whole order or the contract is terminated), the invoice was correct when it was issued. It isn't cancelled: it's rectified with an **R1** for the full amount. We walk through an example in [A client cancelled a service on an invoice they already paid](/en/blog/prepaid-classes-cancelled).

## The type: substitution or difference

There are two ways to rectify, and both are valid. Using the AEAT's own example: an invoice with a 1,000 € base and 210 € VAT, on which you apply a 200 € discount.

|               | Substitution (S)                    | Difference (I)      |
| ------------- | ----------------------------------- | ------------------- |
| What it shows | The full invoice, already corrected | Only the difference |
| Taxable base  | 800 €                               | -200 €              |
| VAT (21%)     | 168 €                               | -42 €               |
| Total         | 968 €                               | -242 €              |

In a substitution rectifying invoice, the amounts of the original invoice (1,000 € base and 210 € VAT) are also reported, so it's clear what is being replaced.

## Other requirements for the rectifying invoice

- **It goes in its own series.** Article 6.1.a of the Invoicing Regulation requires rectifying invoices to be issued "in specific series". For example, R-001, R-002...
- **It identifies the invoice it corrects.** You can rectify several invoices in a single document, as long as you identify all of them (art. 15.4).

## Where the correction is declared

If you rectify an invoice from the same quarter that you haven't declared yet, the correction is simply netted in that return.

If you rectify an invoice from a quarter you've **already declared**, the VAT Law distinguishes between a rectification that lowers the VAT and one that raises it:

- **If the VAT goes down**, you can adjust it in the return for the quarter in which you rectify or in later ones, up to one year afterwards, refunding the customer the extra VAT you charged. You can also request the rectification of the original self-assessment.
- **If the VAT goes up because of article 80 reasons or an error fundado de derecho** (R1, R2, R3), you can include the difference in the current quarter.
- **If the VAT goes up for any other reason** (R4, an ordinary mistake), it doesn't go in the current quarter:

> the taxpayer must file a rectifying self-assessment return, applying the surcharge and late-payment interest that apply

::card
---

title: How Nitidez helps
background: white
showLogo: true
shadow: true
---

[Nitidez](/en) guides you through the rectification in four steps: customer, invoices, reason and type.

- **Invoices:** it only shows you the customer's sent invoices, so drafts and cancelled invoices don't appear. You can rectify several in a single document, as long as they're from the same quarter. If you pick an invoice that has already been replaced, Nitidez won't let you rectify it again: it tells you to rectify the latest rectifying invoice.
- **Reason and type:** it explains each reason (R1 to R4) and each type (substitution or difference) with examples.
- **Own series:** it helps you with the numbering.
- **Veri\*Factu:** it sends the rectifying invoice to the AEAT with its reason, its type and the invoices it corrects.
- **Taxes:** Nitidez places each rectifying invoice in the right place in Modelo 303, 130 and 349. If a correction requires filing a rectifying self-assessment for a previous quarter, it warns you before you create it.

[Create your free Nitidez account →]({{appUrl}}/register)

::

## In summary

- An issued invoice can't be edited or deleted: you correct it with a rectifying invoice, which is a new invoice.
- Only issued invoices can be rectified. Drafts are simply corrected, and cancelled invoices can't be rectified.
- An ordinary mistake is **R4**, not R1. R1 is for returns, discounts, transactions that are undone and errors of law.
- You can rectify by substitution (the full corrected invoice) or by difference (only the change).
- If an R4 raises the VAT of a quarter you've already declared, you file a rectifying self-assessment for that quarter.
- You have up to four years to rectify, but the rules ask you to do it as soon as you know about the mistake.

_Quotes from Spanish legislation and the AEAT are our own translations._

_Sources: [Invoicing Regulation, Real Decreto 1619/2012, arts. 6 and 15 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696), [VAT Law, art. 89 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740#a89), [Veri\*Factu FAQ: invoicing procedures (AEAT)](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/procedimientos-facturacion.html), [Clarifications for developers, section 17 (AEAT)](https://www.agenciatributaria.es/static_files/AEAT_Desarrolladores/EEDD/IVA/VERI-FACTU/FAQs-Desarrolladores.pdf#page=34) and [Modelo 303 instructions (AEAT)](https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/iva/modelo-303-iva-autoliquidacion_/instrucciones-2026.html)._

---
locale: en
slug: what-is-verifactu
title: 'What Is Veri*Factu, and why do you need to know'
description: 'A guide for the self-employed on Veri*Factu: what it is, when the obligation takes effect, and whether you need to use the AEAT platform or a compliant software is enough.'
summaryText: "Veri*Factu isn't a platform you have to use: it's a technical regulation your invoicing software must meet. Here's what it is and when it affects you."
dateTime: '2026-09-23T09:00:00Z'
translationSlug: que-es-verifactu
categorySlug: agencia-tributaria
---

If you're self-employed in Spain, you've probably heard about Veri*Factu in the last few months. It's one of the tax changes that raises the most questions, partly because the name gets used for several different things at once.

![Invoice validated by the AEAT](/images/verifactu-en.png)

## What Veri*Factu Is

Veri*Factu is the common name for the **Reglamento de los Sistemas Informáticos de Facturación (SIF)**, a Spanish Tax Agency (AEAT) regulation requiring invoicing software to meet certain technical requirements: each invoice's records must be complete, traceable, and unalterable, and chained together via a hash code, so that issued invoices can't be deleted or modified without leaving a trace.

Within that regulation there are two modes:

- **Veri\*Factu mode:** the software sends each invoice to the AEAT the moment it's issued. In return, the invoice includes the text "VERIFACTU", a QR code, and is automatically verified.
- **Non-Veri\*Factu mode:** the software doesn't send invoices in real time, but must still generate and keep hash-signed records, ready to be provided if the AEAT requests them.

In other words, **Veri\*Factu isn't a platform you have to use directly**: it's a set of requirements that the invoicing software you use must meet, whatever that software is.

## When It Becomes Mandatory

The deadlines have been pushed back from what was originally planned. According to the AEAT's official notice, the current dates are:

::card-group

::card
---

background: none
title: January 1, 2027
---

For companies subject to Corporate Income Tax (Impuesto sobre Sociedades).
::

::card
---

background: white
shadow: true
title: July 1, 2027
---

**Self-employed workers (autónomos)** and other tax obligors.
::

::

Until those dates, 2026 and the first half of 2027 work as a transition period: you can keep invoicing with systems that don't yet comply with the regulation, but it's best not to leave it until the last moment, since software providers need time to adapt and certify their systems.

## Do You Need to Use a Platform

Not necessarily the AEAT's platform. Here's the nuance that causes the most confusion:

- **What's mandatory** is that the invoicing software you use meets the regulation's technical requirements (integrity, traceability, hashing, etc.), regardless of the brand or provider.
- **What's optional** is using the AEAT's own free application (also called Veri*Factu), designed for self-employed workers with low invoicing volume who don't have their own management software.

If you already invoice with a management program, online invoicing tool, or similar, what you need is for that provider to adapt their software and declare it compliant with the regulation (there's no official seal certifying each individual product: it's the manufacturer itself that declares, under its own responsibility, that it complies with the regulation).

::card
---

title: How Nitidez Handles This
background: white
showLogo: true
shadow: true
---

If you invoice with [Nitidez](/), you don't need to do anything special: the platform already complies with Veri*Factu natively. Every invoice is hash-chained to the previous one, sent to the AEAT, and its verification QR code is generated automatically. You don't need to install anything, adapt a separate program, or rely on the Tax Agency's free application.

::video-player{src="/images/validar-verifactu-app.compressed.mp4" caption="Validando una factura Veri*Factu"}
::

::

## What You Should Do Now

- If you use software, check whether it's already adapted to Veri*Factu or plans to be before July 2027.
- If you invoice by hand, with spreadsheets, or with a tool that won't be adapted, now is a good time to plan a move to a managed invoicing system.
- There's no need to act overnight: the obligation doesn't take effect until July 2027 for the self-employed, but it's not worth waiting until the last few weeks either.

## In Summary

- Veri*Factu is a technical regulation for invoicing software, not a mandatory platform in itself.
- There are two modes: with immediate submission to the AEAT (Veri*Factu) and without immediate submission but with verifiable records.
- The obligation takes effect on January 1, 2027 for companies and July 1, 2027 for the self-employed.
- You can use the AEAT's free platform or any software certified by its manufacturer; you're not required to use the Tax Agency's own tool.

_Source: [AEAT official notice on the extension of the adaptation deadline for invoicing systems](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html)._

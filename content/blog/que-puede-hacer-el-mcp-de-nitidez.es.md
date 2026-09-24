---
locale: es
slug: que-puede-hacer-el-mcp-de-nitidez
title: '¿Qué puede hacer el conector MCP de Nitidez? Todas sus funciones explicadas'
description: 'Un recorrido completo por el servidor MCP de Nitidez: todo lo que ofrece a Claude y ChatGPT, desde listar facturas hasta consultar tu IVA e IRPF trimestral.'
summaryText: "Nitidez tiene un conector MCP para gestionar tu facturación desde Claude o ChatGPT. Esto es todo lo que puede hacer."
dateTime: '2026-09-24T09:00:00Z'
translationSlug: what-can-the-nitidez-mcp-do
categorySlug: usando-nitidez
---

Si usas Claude o ChatGPT, ya puedes hablar directamente con tu cuenta de Nitidez desde el chat: preguntar "¿cuánto debo de IVA este trimestre?", "apunta este gasto" o "envíame el PDF de la factura 45" sin abrir el panel. Eso es lo que hace el conector MCP de Nitidez: expone tus datos de facturación como un conjunto de acciones que un asistente de IA puede usar, con tu permiso, en tu nombre.

Este artículo repasa todo lo que puede hacer el conector, agrupado por para qué sirve.

## Qué es MCP, en un párrafo

MCP (Model Context Protocol) es un estándar abierto que permite que un asistente de IA llame de forma segura a herramientas que expone un servidor externo, en este caso Nitidez. Una vez lo conectas (desde la configuración de conectores de Claude o ChatGPT, usando tu cuenta de Nitidez), el asistente puede leer y actuar sobre tus facturas, gastos, clientes e impuestos, pidiendo siempre tu permiso antes de crear o cambiar algo.

## Comprobar qué empresa está conectada

Puedes preguntar en nombre de qué empresa está actuando el conector, y te devuelve su nombre, NIF, dirección y datos de contacto (`whoami`). Es útil como comprobación antes de pedirle al asistente que haga algo, o si gestionas más de una identidad y quieres confirmar cuál está conectada.

## Facturas

Puedes pedir tus facturas, de la más reciente a la más antigua, filtrando opcionalmente por estado: borrador, enviada o eliminada (`list_invoices`). Si preguntas por una en concreto, el asistente consulta su detalle completo: líneas, cliente, importes (`get_invoice`). También puedes pedir que marque una factura como pagada, pendiente o vencida, sin abrir la aplicación (`update_invoice_payment`).

Crear una factura en sí implica tipos de IVA, líneas y requisitos de Veri*Factu que necesitan el formulario real, así que en lugar de improvisarlo, el asistente te da un enlace directo a la página de "crear factura", lista para rellenar (`get_create_invoice_link`). Y una vez una factura está enviada, puedes pedir su PDF: el asistente te consigue un enlace de descarga de un solo uso, más un enlace permanente a la página de la factura como alternativa (`download_invoice_pdf`).

## Clientes y proveedores

Puedes pedir tus clientes existentes y su NIF (`list_customers`), o añadir uno nuevo: nombre, NIF, dirección, país y, opcionalmente, email, teléfono, idioma, etc. (`add_customer`). El asistente siempre revisa primero la lista existente para evitar duplicados.

Los proveedores funcionan igual: puedes listar los proveedores detrás de tus gastos (`list_suppliers`) o añadir uno nuevo (`add_supplier`). Antes de crear un proveedor, el asistente te lo confirma primero, "no encuentro este proveedor, ¿lo añado?", en lugar de hacerlo sin avisar.

## Gastos

Puedes pedir tus gastos, del más reciente al más antiguo, filtrados por proveedor o por año y trimestre, por ejemplo "qué gasté en el segundo trimestre de 2026" (`list_expenses`). También puedes registrar un gasto nuevo: importe, tipos de IVA e IRPF, categoría, fechas y, opcionalmente, un proveedor asociado (`add_expense`). Tiene un caso especial para los pagos a la Seguridad Social: eliges esa categoría y rellena automáticamente la descripción, el proveedor TGSS, y pone a cero el IVA y el IRPF.

Si quieres adjuntar un ticket o foto a un gasto, el asistente te da un enlace de subida de un solo uso que abres desde el móvil o el navegador para añadirlo, válido durante 5 minutos (`get_expense_attachment_upload_link`).

## Impuestos

Puedes preguntar cuánto debes en un trimestre concreto y recibir un resumen de tu situación de IVA (Modelo 303) e IRPF (Modelo 130): cuánto debes, cuánto se compensa para trimestres futuros y si ya está pagado (`get_tax_insights`). Si no indicas trimestre, usa el actual, así que "cuánto debo este trimestre" simplemente funciona.

## Registrar tu empresa

Para una cuenta de Nitidez nueva sin empresa configurada todavía, puedes pedirle al asistente que registre tu negocio (nombre, NIF, dirección, datos bancarios para las facturas) y queda como tu empresa por defecto (`add_company`). Como una cuenta de Nitidez solo tiene una empresa, esto solo se ejecuta una vez.

## Cómo conectarlo

Conecta el servidor MCP de Nitidez desde la configuración de conectores de Claude o ChatGPT, usando tu cuenta de Nitidez. Una vez conectado, cualquier acción que cree o cambie datos (gastos, clientes, estado de pago, etc.) sigue pidiendo tu confirmación: el asistente nunca factura ni gasta en tu nombre sin que lo veas antes.

## En resumen

- El conector MCP de Nitidez da a Claude y ChatGPT acceso para leer y gestionar tu facturación.
- Las funciones de solo lectura permiten que el asistente responda preguntas: qué empresa está conectada, tus facturas, clientes, proveedores, gastos y situación fiscal.
- Las funciones de acción crean o cambian datos (nuevos clientes, proveedores, gastos, estados de pago, registro de empresa), siempre con tu confirmación.
- Un par de funciones te dan un enlace directo en lugar de actuar por ti (crear una factura, subir o descargar un archivo), porque esos flujos se hacen mejor tú mismo, en el formulario real.

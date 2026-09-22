---
locale: es
slug: que-es-verifactu
title: 'Qué es Veri*Factu y qué necesitas saber'
description: 'Guía para autónomos sobre Veri*Factu: qué es, cuándo entra en vigor la obligación y si es necesario usar la plataforma de la AEAT o basta con un software homologado.'
summaryText: 'Veri*Factu no es una plataforma que tengas que usar: es una normativa técnica que debe cumplir tu software de facturación. Te explicamos qué es y cuándo te afecta.'
dateTime: '2026-09-23T09:00:00Z'
translationSlug: what-is-verifactu
categorySlug: agencia-tributaria
---

Si eres autónomo seguro que has oído hablar de Veri*Factu en los últimos meses. Es una de las novedades fiscales que más dudas genera, en parte porque el nombre se usa para varias cosas distintas a la vez.

## Qué es Veri*Factu

Veri*Factu es el nombre común del **Reglamento de los Sistemas Informáticos de Facturación (SIF)**, una normativa de la Agencia Tributaria que obliga a que el software de facturación cumpla ciertos requisitos técnicos: los registros de cada factura deben ser íntegros, trazables, inalterables y estar encadenados mediante un código hash, de forma que no se puedan borrar ni modificar facturas ya emitidas sin dejar rastro.

![Factura validada por la AEAT](/images/verifactu-es.png)

Dentro de esa normativa existen dos modalidades:

- **Modalidad Veri\*Factu:** el software envía cada factura a la AEAT en el momento de emitirla. A cambio, la factura incluye el texto "VERIFACTU", un código QR y queda verificada automáticamente.
- **Modalidad no Veri\*Factu:** el software no envía las facturas en tiempo real, pero igualmente debe generar y conservar los registros con hash y firma electrónica, listos para ser aportados si la AEAT los solicita.

Es decir, **Veri\*Factu no es una plataforma que tengas que usar tú directamente**: es un conjunto de requisitos que debe cumplir el programa de facturación que utilices, sea cual sea.

## Cuándo es obligatorio

Los plazos se han retrasado respecto a lo previsto inicialmente. Según la nota informativa de la AEAT, las fechas actuales son:

::card-group

::card
---

background: none
title: 1 de enero de 2027
---

Para las empresas sujetas al Impuesto sobre Sociedades.
::

::card
---

background: white
shadow: true
title: 1 de julio de 2027
---

**Autónomos** y el resto de obligados tributarios.
::

::

Hasta esas fechas, 2026 y la primera mitad de 2027 funcionan como periodo de transición: puedes seguir facturando con sistemas que aún no cumplan el reglamento, pero conviene no dejarlo para el último momento, ya que los proveedores de software necesitan tiempo para adaptar y certificar sus sistemas.

## Necesitas usar una plataforma

No necesariamente la plataforma de la AEAT. Aquí está el matiz que más confusión genera:

- **Lo obligatorio** es que el software de facturación que uses cumpla los requisitos técnicos del reglamento (integridad, trazabilidad, hash, etc.), sea cual sea la marca o el proveedor.
- **Lo opcional** es usar la aplicación gratuita de la propia AEAT (también llamada Veri*Factu), pensada para autónomos con poco volumen de facturación que no tengan un programa de gestión propio.

Si ya facturas con un programa de gestión, facturación online o similar, lo que necesitas es que ese proveedor adapte su software y lo declare conforme al reglamento (no existe un sello oficial que certifique cada producto individualmente: es el propio fabricante quien declara, bajo su responsabilidad, que cumple la normativa).

::card
---

title: Cómo lo gestiona Nitidez
background: white
showLogo: true
shadow: true
---

Si facturas con [Nitidez](/), no tienes que hacer nada especial: la plataforma ya cumple con Veri*Factu de forma nativa. Cada factura se encadena mediante hash con la anterior, se envía a la AEAT y se genera automáticamente su código QR de verificación. No necesitas instalar nada, adaptar un programa aparte ni depender de la aplicación gratuita de Hacienda.

::video-player{src="/images/validar-verifactu-app.compressed.mp4" caption="Validando una factura Veri*Factu"}
::

::

## Qué deberías hacer ahora

- Si usas un software, comprueba si ya está adaptado a Veri*Factu o tiene previsto estarlo antes de julio de 2027.
- Si facturas a mano, con hojas de cálculo o con una herramienta que no vaya a adaptarse, es buen momento para planificar el cambio a un sistema de facturación gestionado.
- No hace falta actuar de un día para otro: la obligación no entra en vigor hasta julio de 2027 para autónomos, pero tampoco conviene esperar a las últimas semanas.

## En resumen

- Veri*Factu es una normativa técnica para el software de facturación, no una plataforma obligatoria en sí misma.
- Existen dos modalidades: con envío inmediato a la AEAT (Veri*Factu) y sin envío inmediato pero con registros verificables.
- La obligación entra en vigor el 1 de enero de 2027 para sociedades y el 1 de julio de 2027 para autónomos.
- Puedes usar la plataforma gratuita de la AEAT o cualquier software homologado por su fabricante; no estás obligado a usar la de Hacienda.

_Fuente: [Nota informativa de la Agencia Tributaria sobre la ampliación del plazo de adaptación de los sistemas de facturación](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/nota-informativa-ampliacion-plazo-adaptacion-facturacion.html)._

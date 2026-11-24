---
locale: es
slug: clases-pagadas-por-adelantado-y-canceladas
title: 'Me han cancelado un servicio de una factura ya pagada. ¿Qué hago?'
description: 'Un caso práctico: Marta tiene un taller de cerámica donde cobra cuatro clases por adelantado y un alumno las ha cancelado. ¿Qué hacer con la factura?'
summaryText: 'Cobraste unas clases por adelantado, emitiste la factura y el cliente canceló. La factura no se anula: se emite una rectificativa con los mismos importes en negativo y el resultado final es cero.'
dateTime: '2026-11-24T09:00:00Z'
translationSlug: prepaid-classes-cancelled
categorySlugs: [emitiendo-facturas]
---

Marta da clases particulares en su taller de cerámica. Un alumno reserva cuatro clases y las paga por adelantado. Marta le emite la factura. Unos días después, el alumno cancela las cuatro y Marta le devuelve el dinero.

¿Qué hace Marta con esa factura?

::card
---

title: Respuesta corta
background: white
shadow: true
---

- La factura original no se anula. El cliente pagó, así que la factura era correcta.
- Emite una **factura rectificativa R1, por diferencias**, con los mismos importes en negativo.
- Devuelve el dinero al cliente.
- La factura original y la rectificativa se compensan: el resultado final es cero.

::

## Por qué no se anula

La anulación es solo para facturas que nunca debieron emitirse, por ejemplo una factura duplicada o de una operación que no existió.

Aquí el alumno pagó de verdad y Marta facturó ese pago. Es lo correcto: cuando cobras por adelantado, el IVA se genera en el momento del cobro, aunque la clase todavía no se haya dado. La Ley del IVA lo dice así (art. 75.Dos):

> en las operaciones sujetas a gravamen que originen pagos anticipados anteriores a la realización del hecho imponible el impuesto se devengará en el momento del cobro total o parcial del precio por los importes efectivamente percibidos.

Lo que pasó después, la cancelación, se corrige con una factura rectificativa.

## Qué rectificativa emitir

**Motivo R1.** Es el código para una operación que se deshace después de facturarla. La Ley del IVA lo recoge en su artículo 80.Dos:

> Cuando por resolución firme, judicial o administrativa o con arreglo a Derecho o a los usos de comercio queden sin efecto total o parcialmente las operaciones gravadas [...] la base imponible se modificará en la cuantía correspondiente.

No es R4. R4 es para errores normales, y aquí no hubo ningún error.

**Tipo por diferencias (I).** La rectificativa indica solo el cambio: los importes de la factura original con signo menos.

También es correcto hacerlo **por sustitución (S)**: la rectificativa indica cómo queda la factura, 0 € si se cancela todo, sin escribir importes en negativo. Las dos formas llevan al mismo resultado, así que depende de lo que prefieras. Lo vemos con el caso de Tom en [Me han cancelado unas clases ya facturadas: la rectificativa por sustitución](/blog/clases-canceladas-rectificativa-por-sustitucion). Las diferencias generales entre los dos tipos están en [Cómo rectificar una factura](/blog/como-rectificar-una-factura).

## Con qué importes

Si las cuatro clases costaban 100 € más IVA:

::card-group

::card
---

background: white
title: Factura original
---

- Base imponible: 100 €
- IVA (21%): 21 €
- **Total: 121 €**

::

::card
---

background: white
shadow: true
title: Rectificativa
---

- Base imponible: -100 €
- IVA (21%): -21 €
- **Total: -121 €**

::

::

La rectificativa lleva los mismos importes que la factura original, con signo menos. Las dos suman cero: el cliente no paga nada y tú no pagas IVA por esas clases.

Si el alumno solo cancela una parte (por ejemplo, vino a dos clases y cancela las otras dos), se hace igual, pero solo por las clases que devuelves.

::card
---

title: Cómo te ayuda Nitidez
background: white
showLogo: true
shadow: true
---

[Nitidez](/) te guía por la rectificación en cuatro pasos: cliente, facturas, motivo y tipo.

- **Motivo y tipo:** te explica cada motivo (R1 a R4) y cada tipo (sustitución o diferencias) con ejemplos.
- **Veri\*Factu:** envía la rectificativa a la AEAT con su motivo, su tipo y la factura que corrige.
- **Impuestos:** Nitidez coloca la rectificativa en el modelo 303 y el 130 que le corresponden.

[Crea tu cuenta gratis en Nitidez →]({{appUrl}}/register)

::

## En resumen

- Si el cliente pagó por adelantado, la factura era correcta. No se anula.
- Cuando cancela, emites una rectificativa **R1, por diferencias**, con los mismos importes en negativo.
- Le devuelves el dinero, y el resultado final es cero.

_Fuentes: [Ley del IVA, arts. 75 y 80 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740#a80), [Preguntas frecuentes Veri\*Factu: procedimientos de facturación (AEAT)](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/procedimientos-facturacion.html) y [Aclaraciones a dudas de los desarrolladores, apartado 17 (AEAT)](https://www.agenciatributaria.es/static_files/AEAT_Desarrolladores/EEDD/IVA/VERI-FACTU/FAQs-Desarrolladores.pdf#page=34)._

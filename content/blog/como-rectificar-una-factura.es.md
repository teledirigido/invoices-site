---
locale: es
slug: como-rectificar-una-factura
title: 'Cómo rectificar una factura'
description: 'Cómo rectificar una factura ya emitida: cuándo es obligatorio, qué facturas se pueden rectificar, los motivos R1 a R4, sustitución o diferencias, plazos y dónde se declara la corrección. Y por qué una factura anulada no se puede rectificar.'
summaryText: 'Una factura emitida no se edita ni se borra: si tiene un error o algo cambió después, se corrige con una factura rectificativa. Te explicamos cuándo hace falta, cómo se hace y qué pasa con las facturas anuladas.'
dateTime: '2026-11-10T09:00:00Z'
translationSlug: how-to-rectify-an-invoice
categorySlugs: [agencia-tributaria, emitiendo-facturas]
---

Has emitido una factura y algo no cuadra: el IVA no era ese, el cliente te ha devuelto parte del pedido o te has equivocado en un dato. Las facturas validadas con Veri\*Factu ya no pueden editarse o borrarse. Se pueden corregir emitiendo una **factura rectificativa**.

::card
---

title: Respuesta corta
background: white
shadow: true
---

- Una factura rectificativa es una factura nueva que corrige otra ya emitida. La original no se toca.
- Es obligatoria cuando la factura tiene un error (un dato, el IVA) o cuando el importe cambia después de la venta: devoluciones, descuentos, concurso del cliente o créditos incobrables.
- Lleva un **motivo**, los que se detallan en códigos de R1 a R4, un **tipo** (sustitución o diferencias) y va en una **serie propia**.
- Tienes hasta cuatro años, pero la norma pide emitirla en cuanto conoces el error.
- Solo se rectifican facturas emitidas. No puedes rectificar facturas en borradores o anuladas.

::

## Cuándo hay que emitir una factura rectificativa

Lo regula el artículo 15 del Reglamento de facturación (Real Decreto 1619/2012):

> Deberá expedirse una factura rectificativa en los casos en que la factura original no cumpla alguno de los requisitos que se establecen en los artículos 6 ó 7 [...]
>
> Igualmente, será obligatoria la expedición de una factura rectificativa en los casos en que las cuotas impositivas repercutidas se hubiesen determinado incorrectamente o se hubieran producido las circunstancias que, según lo dispuesto en el artículo 80 de la Ley del Impuesto, dan lugar a la modificación de la base imponible.

Dicho de otra forma, rectificas en tres situaciones:

- **Falta un dato obligatorio o está mal:** el NIF del cliente, su dirección, la fecha, la descripción.
- **El IVA se calculó mal:** tipo equivocado, base mal sumada.
- **La base cambia después de la venta** por las causas del artículo 80 de la Ley del IVA: devoluciones, descuentos posteriores, operaciones que se deshacen, clientes en concurso de acreedores o deudas incobrables.

Y hay plazo. El mismo artículo 15 dice:

> La expedición de la factura rectificativa deberá efectuarse tan pronto como el obligado a expedirla tenga constancia de las circunstancias que, conforme a los apartados anteriores, obligan a su expedición, siempre que no hubiesen transcurrido cuatro años a partir del momento en que se devengó el Impuesto o, en su caso, se produjeron las circunstancias a que se refiere el artículo 80 de la Ley del Impuesto.

## Qué facturas se pueden rectificar

Solo las facturas **emitidas**, estén cobradas o no. Antes de eso no hay nada que rectificar.

**Una factura en borrador se corrige sin más.** La AEAT lo explica así en sus aclaraciones para desarrolladores de software de facturación:

> Si los errores se detectan "mientras se está confeccionando la factura", es decir, cuando se está editando pero aún no se ha emitido, se corrigen sin más antes de emitirla.

**Si una rectificativa tiene un error, se rectifica esa rectificativa.** Si la rectificativa que emitiste también estaba mal, la siguiente corrección se hace sobre esa rectificativa, no sobre la factura original. Es lo que hace la AEAT en sus ejemplos de rectificación de una rectificativa previa.

## ¿Qué pasa con las facturas anuladas?

Una factura anulada **no se puede rectificar**. La anulación es un mecanismo distinto y excepcional: sirve para dejar sin efecto una factura que nunca debió emitirse, por ejemplo la de una operación que no existió. La AEAT describe así su efecto:

> La consecuencia de ello es que dicha factura no tendrá ningún efecto fiscal ni en libros registros, ni en autoliquidaciones a presentar.

Si la factura anulada no tiene ningún efecto fiscal, no queda nada que corregir. Si necesitas una factura válida en su lugar, se emite una factura nueva y normal, no una rectificativa:

> En el caso de que proceda emitir una nueva factura correcta se deberá registrar con un alta y con un número de factura o fecha de expedición diferente.

Funciona también en sentido contrario: una factura que ya has rectificado no se puede anular. Le dedicaremos a la anulación un artículo aparte.

## El motivo: R1, R2, R3 o R4

Cada rectificativa lleva un código que indica por qué se rectifica. Es lo que se envía a la AEAT con [Veri\*Factu](/blog/que-es-verifactu) y conviene elegirlo bien, porque afecta a dónde se declara la corrección.

| Código | Cuándo se usa                                                                                                                                                                          | Ejemplo                                                                                                                                                                                    |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **R1** | Devoluciones, descuentos o cambios de precio posteriores a la venta, operaciones que se deshacen, precios provisionales (art. 80 Uno, Dos y Seis LIVA), o un error fundado de derecho. | El cliente devuelve parte del pedido o acordáis un descuento después de facturar. Otro ejemplo es acordar un descuento en una entrega ya facturada con el cliente porque te has retrasado. |
| **R2** | El cliente está en concurso de acreedores (art. 80.Tres LIVA).                                                                                                                         | Ajustas una factura impagada de un cliente que ha entrado en concurso.                                                                                                                     |
| **R3** | Crédito incobrable (art. 80.Cuatro LIVA).                                                                                                                                              | Una factura impagada que cumple los requisitos de crédito incobrable de la ley.                                                                                                            |
| **R4** | Cualquier otra causa, incluido un error normal.                                                                                                                                        | Pusiste un 21% de IVA y era un 10%, o te equivocaste en una cantidad.                                                                                                                      |

Existe también el **R5**, reservado para rectificar facturas simplificadas (tickets), sea cual sea el motivo.

El error más común es pensar que R1 significa "error" y R4 "todo lo demás". No es así: un despiste normal (un importe mal escrito, un dato del cliente equivocado) es **R4**. La AEAT incluye expresamente en R4 el caso:

> Cuando se haya consignado erróneamente algún dato no monetario de la factura

R1 queda para las causas del artículo 80.Uno, Dos y Seis y para el error fundado de derecho, que es un error de interpretación de la norma, no un despiste.

Y un caso que a menudo se confunde con una anulación: si la operación **existió y después se deshizo** (el cliente devuelve todo el pedido o se resuelve el contrato), la factura era correcta cuando se emitió. No se anula: se rectifica con una **R1** por el importe total. Lo vemos con un ejemplo en [Me han cancelado un servicio de una factura ya pagada](/blog/clases-pagadas-por-adelantado-y-canceladas).

## El tipo: sustitución o diferencias

Hay dos formas de rectificar y las dos son válidas. Con el ejemplo que usa la propia AEAT: una factura de 1.000 € de base y 210 € de IVA, sobre la que aplicas un descuento de 200 €.

|                | Sustitución (S)                  | Diferencias (I)    |
| -------------- | -------------------------------- | ------------------ |
| Qué indica     | La factura completa ya corregida | Solo la diferencia |
| Base imponible | 800 €                            | -200 €             |
| IVA (21%)      | 168 €                            | -42 €              |
| Total          | 968 €                            | -242 €             |

En la rectificativa por sustitución, además, se informan los importes de la factura original (1.000 € de base y 210 € de cuota) para que quede claro qué se está sustituyendo.

## Otros requisitos de la rectificativa

- **Va en una serie propia.** El artículo 6.1.a del Reglamento de facturación obliga a expedir "en series específicas" las facturas rectificativas. Por ejemplo, R-001, R-002...
- **Identifica la factura que corrige.** Puedes rectificar varias facturas en un mismo documento, siempre que las identifiques todas (art. 15.4).

## Dónde se declara la corrección

Si rectificas una factura del mismo trimestre que todavía no has declarado, la corrección simplemente se compensa en esa declaración.

Si rectificas una factura de un trimestre **ya declarado**, la Ley del IVA distingue según la rectificación baje o suba el IVA:

- **Si baja el IVA**, puedes regularizarlo en la declaración del trimestre en que rectificas o en las siguientes, hasta un año después, devolviendo al cliente el IVA cobrado de más. También puedes pedir la rectificación de la autoliquidación original.
- **Si sube el IVA por causas del artículo 80 o por error fundado de derecho** (R1, R2, R3), puedes incluir la diferencia en el trimestre actual.
- **Si sube el IVA por cualquier otra causa** (R4, un error normal), no va en el trimestre actual:

> el sujeto pasivo deberá presentar una declaración-liquidación rectificativa aplicándose a la misma el recargo y los intereses de demora que procedan

::card
---

title: Cómo te ayuda Nitidez
background: white
showLogo: true
shadow: true
---

[Nitidez](/) te guía por la rectificación en cuatro pasos: cliente, facturas, motivo y tipo.

- **Facturas:** solo te muestra las facturas enviadas del cliente, los borradores y las anuladas no aparecen. Puedes rectificar varias en un mismo documento, siempre que sean del mismo trimestre. Si eliges una factura que ya fue sustituida, Nitidez no te deja rectificarla otra vez: te indica que rectifiques la última rectificativa.
- **Motivo y tipo:** te explica cada motivo (R1 a R4) y cada tipo (sustitución o diferencias) con ejemplos.
- **Serie propia:** Te ayuda con la numeración.
- **Veri\*Factu:** envía la rectificativa a la AEAT con su motivo, su tipo y las facturas que corrige.
- **Impuestos:** Nitidez coloca cada rectificativa en el modelo 303, el 130 y el 349 que le corresponde. Si una corrección obliga a presentar una autoliquidación rectificativa de un trimestre anterior, te avisa antes de crearla.

[Crea tu cuenta gratis en Nitidez →]({{appUrl}}/register)
::

## En resumen

- Una factura emitida no se edita ni se borra: se corrige con una factura rectificativa, que es una factura nueva.
- Solo se rectifican facturas emitidas. Los borradores se corrigen sin más, y las facturas anuladas no se pueden rectificar.
- Un error normal es **R4**, no R1. R1 es para devoluciones, descuentos, operaciones que se deshacen y errores de derecho.
- Puedes rectificar por sustitución (la factura completa corregida) o por diferencias (solo el cambio).
- Si una R4 sube el IVA de un trimestre ya declarado, se presenta una autoliquidación rectificativa de ese trimestre.
- Tienes hasta cuatro años para rectificar, pero la norma pide hacerlo en cuanto conozcas el error.

_Fuentes: [Reglamento de facturación, Real Decreto 1619/2012, arts. 6 y 15 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-2012-14696), [Ley del IVA, art. 89 (BOE)](https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740#a89), [Preguntas frecuentes Veri\*Factu: procedimientos de facturación (AEAT)](https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/preguntas-frecuentes/procedimientos-facturacion.html), [Aclaraciones a dudas de los desarrolladores, apartado 17 (AEAT)](https://www.agenciatributaria.es/static_files/AEAT_Desarrolladores/EEDD/IVA/VERI-FACTU/FAQs-Desarrolladores.pdf#page=34) e [Instrucciones del modelo 303 (AEAT)](https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/iva/modelo-303-iva-autoliquidacion_/instrucciones-2026.html)._

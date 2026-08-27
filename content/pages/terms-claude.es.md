---
locale: es
slug: terms-claude
topText: Legal
title: Conector de Claude — Uso de datos
lastUpdated: "Última actualización: agosto de 2026"
summary:
  - title: Solo tus propios datos
    desc: El conector solo da acceso a Claude a tu propia cuenta de Nitidez, cuando tú lo solicitas.
  - title: Acceso de lectura y escritura
    desc: Claude puede ver tus registros y, cuando se lo pides, crear o actualizar algunos de ellos.
  - title: Procesado por Anthropic
    desc: Los datos que le pides a Claude que consulte se envían a Anthropic para generar su respuesta.
  - title: Desconéctalo cuando quieras
    desc: Elimina el conector de Claude en cualquier momento para detener todo acceso de inmediato.
disclaimer: Esta página describe específicamente la función del Conector de Claude y debe leerse junto con nuestra Política de Privacidad. No constituye asesoramiento legal.
---

## 1. Qué es el Conector de Claude

Nitidez ofrece una integración ("Conector" o servidor MCP) que te permite usar Claude, de Anthropic, para interactuar con tu cuenta de Nitidez mediante lenguaje natural. Esta página explica a qué datos puede acceder el conector, cómo se usan y quién los procesa. Complementa nuestra [Política de Privacidad](/pages/privacy) general y se aplica específicamente a esta función.

## 2. A qué puede acceder Claude

Cuando conectas tu cuenta de Nitidez a Claude y autorizas el conector, Claude puede realizar las siguientes acciones en tu nombre, únicamente cuando se lo pides:

- **Ver tus datos:** empresas, clientes, proveedores, gastos, facturas, estado de pago de facturas e informes fiscales asociados a tu cuenta.
- **Crear o actualizar tus datos:** añadir nuevas empresas, clientes, proveedores y gastos; generar enlaces para crear facturas; y actualizar el estado de pago de las facturas.

El conector solo opera sobre la cuenta que has autorizado, usando tu propia autenticación. Nitidez no concede a Claude acceso a los datos de ningún otro usuario.

## 3. Anthropic como encargado del tratamiento

Para responder a tus solicitudes, los datos que le pides a Claude que lea o escriba se transmiten a **Anthropic, PBC**, la empresa desarrolladora de Claude, y son procesados por ella como parte de la respuesta a tu solicitud. Este tratamiento se rige por la propia política de privacidad de Anthropic, disponible en [anthropic.com/privacy](https://www.anthropic.com/legal/privacy). Nitidez no controla cómo la infraestructura de Anthropic gestiona los datos en tránsito o durante su procesamiento más allá de lo que describen los términos y la política de privacidad de Anthropic.

## 4. Plazo de conservación

Nitidez no crea una copia separada de tus datos para el conector: este lee y escribe sobre los mismos datos de la cuenta descritos en nuestra Política de Privacidad, y se conservan según los mismos plazos. Cualquier conservación de datos de conversación por parte de Anthropic se rige por su propia política de privacidad y por tu configuración dentro de Claude.

## 5. Desconectar el conector

Puedes eliminar el conector de Nitidez de tu cuenta de Claude en cualquier momento (desde el menú de conectores o ajustes de Claude). Una vez eliminado, Claude deja de tener acceso a tus datos de Nitidez. Desconectarlo no elimina los datos ya creados en tu cuenta de Nitidez a través del conector; puedes gestionarlos o eliminarlos directamente en Nitidez.

## 6. Seguridad

El acceso a través del conector utiliza los mismos canales autenticados y cifrados que el resto de Nitidez. Recomendamos autorizar el conector únicamente en cuentas de Claude que controles, y revisar qué ha creado o modificado el conector si compartes el acceso a tu cuenta con otras personas.

## 7. Cambios en esta página

Si añadimos nuevas funciones al conector o cambiamos cómo se procesan los datos, actualizaremos esta página y, cuando el cambio sea relevante, notificaremos por correo electrónico a los usuarios activos.

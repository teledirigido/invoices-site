---
locale: es
slug: mcp
topText: Documentación
title: Conector MCP de Nitidez
lastUpdated: "Última actualización: septiembre de 2026"
---

¿Prefieres una explicación narrativa? Lee el artículo del blog sobre [qué puede hacer el conector MCP de Nitidez](/blog/que-puede-hacer-el-mcp-de-nitidez).

Documentación para administradores de TI y usuarios que están evaluando o conectando el servidor MCP (Model Context Protocol) de Nitidez para usarlo con Claude, ChatGPT o cualquier otro cliente compatible con MCP.

## Primeros pasos

Nitidez es una plataforma de facturación y gestión fiscal para autónomos y pequeñas empresas en España. El servidor MCP de Nitidez es una pasarela ligera y alojada que expone las facturas, gastos, clientes, proveedores y datos fiscales de una cuenta de Nitidez como un conjunto de herramientas que un asistente de IA puede usar en nombre del usuario conectado, siempre después de que ese usuario se autentique y autorice el acceso mediante OAuth.

## Endpoint

`https://mcp.nitidez.es/mcp` — transporte Streamable HTTP.

Los metadatos de descubrimiento OAuth se publican en `https://mcp.nitidez.es/.well-known/oauth-protected-resource`, que indican a los clientes dónde está el servidor de autorización de Nitidez para el inicio de sesión y el consentimiento.

## Autenticación y autorización

- El acceso se concede por usuario mediante OAuth estándar. El servidor MCP nunca pide ni almacena la contraseña de Nitidez: el usuario inicia sesión y aprueba el acceso a través de la propia pantalla de inicio de sesión y consentimiento de Nitidez.
- Cada solicitud al servidor MCP lleva un token de tipo bearer, que el servidor verifica en cada llamada contra el endpoint de introspección de tokens de Nitidez. El servidor MCP no tiene sesión ni base de datos de usuarios propia.
- Un asistente conectado solo puede actuar dentro del alcance de la cuenta del usuario autenticado: su propia empresa, facturas, clientes, proveedores y gastos. No existe acceso entre cuentas ni acceso de administrador.
- El acceso se puede revocar en cualquier momento desde la configuración de la cuenta de Nitidez del usuario, lo que invalida de inmediato el token usado por el conector.

## Datos a los que accede

El conector puede leer y escribir los mismos datos que el usuario ya gestiona en su cuenta de Nitidez: perfil de la empresa, facturas, clientes, proveedores, gastos, adjuntos y resúmenes fiscales de IVA/IRPF. No accede a los datos de facturación/pago de la propia suscripción de Nitidez, ni a los datos de ningún otro usuario.

El servidor expone 13 herramientas, cada una marcada como de solo lectura o como una acción que crea o modifica datos. Los clientes MCP como Claude suelen mostrar esa distinción al usuario y pedir confirmación antes de ejecutar una herramienta de acción. La referencia completa de cada herramienta, incluidos sus parámetros, está más abajo.

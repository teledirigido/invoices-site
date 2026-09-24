<template>
  <PublicDocsPage slug="mcp" />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'public' });

useSeoMeta({
  title: 'Nitidez MCP Connector — Documentation',
  description:
    'Endpoint, authentication, data access, and the full list of tools exposed by the Nitidez MCP server for Claude, ChatGPT, and other MCP clients.',
  ogTitle: 'Nitidez MCP Connector — Documentation',
  ogDescription:
    'Endpoint, authentication, data access, and the full list of tools exposed by the Nitidez MCP server for Claude, ChatGPT, and other MCP clients.',
});
</script>

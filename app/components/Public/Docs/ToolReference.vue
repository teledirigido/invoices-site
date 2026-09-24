<template>
  <div class="tool-reference__content">
    <section v-for="group in groups" :key="group.name" :id="slugify(group.name)" class="tool-reference__group">
      <h3 class="f-size-ml f-light pb-2">{{ group.name }}</h3>

      <article v-for="tool in group.tools" :key="tool.name" :id="tool.name" class="tool-reference__tool">
        <div class="tool-reference__tool-header">
          <code class="tool-reference__name">{{ tool.name }}</code>
          <span
            class="tool-reference__badge"
            :class="tool.kind === 'read-only' ? 'is-read' : 'is-action'"
          >
            <Icon :name="tool.kind === 'read-only' ? 'mdi-eye-outline' : 'mdi-pencil-outline'" />
            {{ tool.kind === 'read-only' ? $t('docsMcp.readOnly') : $t('docsMcp.action') }}
          </span>
        </div>

        <p class="f-body-small c-text-secondary pb-1">{{ tool.description }}</p>

        <table v-if="tool.params.length" class="tool-reference__params">
          <thead>
            <tr>
              <th>{{ $t('docsMcp.parameter') }}</th>
              <th>{{ $t('docsMcp.type') }}</th>
              <th>{{ $t('docsMcp.required') }}</th>
              <th>{{ $t('docsMcp.description') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="param in tool.params" :key="param.name">
              <td><code>{{ param.name }}</code></td>
              <td><code>{{ param.type }}</code></td>
              <td>{{ param.required ? $t('docsMcp.yes') : $t('docsMcp.no') }}</td>
              <td>{{ param.description }}</td>
            </tr>
          </tbody>
        </table>
        <p v-else class="f-body-small c-text-secondary tool-reference__no-params">{{ $t('docsMcp.noParams') }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const groups = computed(() => getLocalizedToolGroups(locale.value as 'en' | 'es'));

defineExpose({ groups });
</script>

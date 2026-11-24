import { parsers as md } from 'prettier/plugins/markdown';

// Close MDC blocks (`::`, `:::`) on their own paragraph: without a blank line before,
// Markdown reads them as part of the previous list item and Prettier indents them.
const closeBlocks = (text) =>
  text.replace(/^[ \t]*(:{2,})[ \t]*$/gm, '\n$1').replace(/\n{3,}(:{2,})[ \t]*$/gm, '\n\n$1');

export const parsers = {
  markdown: {
    ...md.markdown,
    preprocess: (text, options) =>
      md.markdown.preprocess
        ? md.markdown.preprocess(closeBlocks(text), options)
        : closeBlocks(text),
  },
};

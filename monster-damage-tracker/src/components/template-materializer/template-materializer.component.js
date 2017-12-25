import { materializeTemplate } from './materialize-template';
import { materializeMacroWithRenderers } from './materialize-macro-with-renderer';

export default ({ template }) =>
  materializeTemplate(template, {
    materializeMacro: materializeMacroWithRenderers,
  });

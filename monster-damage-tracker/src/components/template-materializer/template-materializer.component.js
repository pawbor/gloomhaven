import { materializeTemplate } from './materialize-template';
import { materializeMacroWithRenderers } from './materialize-macro-with-renderer';

const TemplateMaterializer = ({ template }) =>
  materializeTemplate(template, {
    materializeMacro: materializeMacroWithRenderers,
  });

export default TemplateMaterializer;

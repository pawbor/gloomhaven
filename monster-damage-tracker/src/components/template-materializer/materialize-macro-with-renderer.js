import abilityRenderers from './ability-renderers';
import aoeRenderers from './aoe-renderers';
import conditionRenderers from './condition-renderers';
import elementRenderers from './element-renderers';

const allRenderers = {
  ...abilityRenderers,
  ...aoeRenderers,
  ...conditionRenderers,
  ...elementRenderers,
};

export function materializeMacroWithRenderers(
  macro,
  index
) {
  const macroRenderer = allRenderers[macro];
  return macroRenderer
    ? macroRenderer(index)
    : missingMacroRenderer(macro);
}

function missingMacroRenderer(macro) {
  return macro;
}

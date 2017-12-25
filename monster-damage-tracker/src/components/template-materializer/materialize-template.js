import { identity } from 'utils/function-utils';

const macroOpening = '{{';
const macroClosure = '}}';

const splitRE = new RegExp(
  `${macroOpening}|${macroClosure}`,
  'g'
);

export const materializeTemplate = (
  template,
  { materializeMacro = identity } = {}
) =>
  validateTemplate(template)
    ? template
        .split(splitRE)
        .map(
          (element, index) =>
            index % 2 === 0
              ? element
              : materializeMacro(`${element}`, index)
        )
    : [];

function validateTemplate(template) {
  if (typeof template !== 'string') {
    return false;
  }

  const bounds = template.match(splitRE) || [];
  return (
    !(bounds.length % 2) &&
    bounds.every(
      (bound, index) =>
        index % 2 === 0
          ? bound === macroOpening
          : bound === macroClosure
    )
  );
}

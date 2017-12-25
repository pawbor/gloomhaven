import { materializeTemplate } from './materialize-template';

describe('materializeTemplate', () => {
  test('is function', () => {
    expect(typeof materializeTemplate).toBe('function');
  });

  test('invalid template - missing macro opening', () => {
    const template = 'a}}';
    const expected = [];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('invalid template - missing macro closure', () => {
    const template = '{{a';
    const expected = [];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('invalid template - macro inside macro', () => {
    const template = '{{a{{b}}c}}';
    const expected = [];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('empty template', () => {
    const template = '';
    const expected = [template];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('template without macros', () => {
    const template = 'foo bar';
    const expected = [template];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('template starting with macro', () => {
    const template = '{{a}} foo bar';
    const expected = ['', 'a', ' foo bar'];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('template ending with macro', () => {
    const template = 'foo bar {{a}}';
    const expected = ['foo bar ', 'a', ''];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('template with many macro', () => {
    const template = 'foo {{a}} bar {{b}} baz';
    const expected = ['foo ', 'a', ' bar ', 'b', ' baz'];
    const result = materializeTemplate(template);
    expect(result).toEqual(expected);
  });

  test('template custom materializeMacro', () => {
    const template = 'foo {{a}} bar {{b}} baz';
    const materializeMacro = (macro) => `x${macro}`;
    const expected = ['foo ', 'xa', ' bar ', 'xb', ' baz'];
    const result = materializeTemplate(template, {
      materializeMacro,
    });
    expect(result).toEqual(expected);
  });
});

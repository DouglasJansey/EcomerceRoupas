const InputMask = (value, type) => {
  type.toLowerCase();
  if (!value && !type) return '';

  switch (type) {
    case 'cpf': {
      return value
        .replace(/[\D]/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})(\d+?)/, '$1');
    }
    case 'cel': {
      return value
        .replace(/[\D]/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
    }
    default: return '';
  }
};
export default InputMask;

import isEmail from 'validator/lib/isEmail';

export function email(value: string) {
  return value && !isEmail(value.trim()) ? 'Invalid email' : null;
}

function isDirty(value: number) {
  return value || value === 0;
}

export function required(requiredFields: string[], values: any): any {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'Required' }),
    }),
    {},
  );
}
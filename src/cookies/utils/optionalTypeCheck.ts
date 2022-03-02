export const optionalTypeCheck = (value: any, typeName: string): boolean =>
  typeof value === 'undefined' || typeof value === typeName;

module.exports = {
    null: (field) => `${field} requerido`,
    isEmail : () => `Por favor, provee un e-mail válido`,
    notEmpty : (field) => `${field} requerido`,
    unique : (field) => `Ya existe una cuenta con el nombre ${field})`,
    is : (field) => `El ${field} sólo puede contener letras y números (no caracteres especiales o espacios)`,
    len : (field,min,max) => `El ${field} sólo puede tener un rango de ${min} a ${max} caracteres`
}
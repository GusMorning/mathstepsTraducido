// The text to identify rules for each possible step that can be taken

module.exports = {
  NO_CHANGE: 'NO_CHANGE',

  // ARITHMETIC

  // e.g. 2 + 2 -> 4 or 2 * 2 -> 4
  SIMPLIFY_ARITHMETIC: 'Simplificación Aritmética',

  // BASICS

  // e.g. 2/-1 -> -2
  DIVISION_BY_NEGATIVE_ONE: 'División por 1 negativo',
  // e.g. 2/1 -> 2
  DIVISION_BY_ONE: 'División por 1',
  // e.g. x * 0 -> 0
  MULTIPLY_BY_ZERO: 'Multiplicación por 0',
  // e.g. x * 2 -> 2x
  REARRANGE_COEFF: 'Coeficiente de reordenación',
  // e.g. x ^ 0 -> 1
  REDUCE_EXPONENT_BY_ZERO: 'Reducir exponente por 0',
  // e.g. 0/1 -> 0
  REDUCE_ZERO_NUMERATOR: 'Reducir numerador 0',
  // e.g. 2 + 0 -> 2
  REMOVE_ADDING_ZERO: 'Quitar adición 0',
  // e.g. x ^ 1 -> x
  REMOVE_EXPONENT_BY_ONE: 'Remover exponente por 0',
  // e.g. 1 ^ x -> 1
  REMOVE_EXPONENT_BASE_ONE: 'Remover exponente de base 1',
  // e.g. x * -1 -> -x
  REMOVE_MULTIPLYING_BY_NEGATIVE_ONE: 'Remover multiplicación por 1 negativo',
  // e.g. x * 1 -> x
  REMOVE_MULTIPLYING_BY_ONE: 'Remover multiplicación por 1',
  // e.g. 2 - - 3 -> 2 + 3
  RESOLVE_DOUBLE_MINUS: 'Remover doble menos',

  // COLLECT AND COMBINE AND BREAK UP

  // e.g. 2 + x + 3 + x -> 5 + 2x
  COLLECT_AND_COMBINE_LIKE_TERMS: 'Recopilar y combinar términos similares',
  // e.g. x + 2 + x^2 + x + 4 -> x^2 + (x + x) + (4 + 2)
  COLLECT_LIKE_TERMS: 'Recoger términos similares',

  // MULTIPLYING CONSTANT POWERS
  // e.g. 10^2 * 10^3 -> 10^(2+3)
  COLLECT_CONSTANT_EXPONENTS: 'Recoger exponentes constantes',

  // ADDING POLYNOMIALS

  // e.g. 2x + x -> 2x + 1x
  ADD_COEFFICIENT_OF_ONE: 'Añadir coeficientes de 1',
  // e.g. x^2 + x^2 -> 2x^2
  ADD_POLYNOMIAL_TERMS: 'Añadir términos polinómicos',
  // e.g. 2x^2 + 3x^2 + 5x^2 -> (2+3+5)x^2
  GROUP_COEFFICIENTS: 'Grupo de coeficientes',
  // e.g. -x + 2x => -1*x + 2x
  UNARY_MINUS_TO_NEGATIVE_ONE: 'Menos unario a uno negativo',

  // MULTIPLYING POLYNOMIALS

  // e.g. x^2 * x -> x^2 * x^1
  ADD_EXPONENT_OF_ONE: 'Añadir exponente de uno',
  // e.g. x^2 * x^3 * x^1 -> x^(2 + 3 + 1)
  COLLECT_POLYNOMIAL_EXPONENTS: 'Recolectar exponentes polinómicos',
  // e.g. 2x * 3x -> (2 * 3)(x * x)
  MULTIPLY_COEFFICIENTS: 'Multiplicar exponentes',
  // e.g. 2x * x -> 2x ^ 2
  MULTIPLY_POLYNOMIAL_TERMS: 'Multiplicar exponentes polinómicos',

  // FRACTIONS

  // e.g. (x + 2)/2 -> x/2 + 2/2
  BREAK_UP_FRACTION: 'Separar fracciones',
  // e.g. -2/-3 => 2/3
  CANCEL_MINUSES: 'Cancelar minusos',
  // e.g. 2x/2 -> x
  CANCEL_TERMS: 'Cancelar términos',
  // e.g. 2/6 -> 1/3
  SIMPLIFY_FRACTION: 'Simplificar fracciones',
  // e.g. 2/-3 -> -2/3
  SIMPLIFY_SIGNS: 'Simplifcar signos',
  // e.g. 15/6 -> (5*3)/(2*3)
  FIND_GCD: 'Encontrar máximo común divisor',
  // e.g. (5*3)/(2*3) -> 5/2
  CANCEL_GCD: 'Cancelar máximo común divisor',
  // e.g. 1 2/3 -> 5/3
  CONVERT_MIXED_NUMBER_TO_IMPROPER_FRACTION: 'Convertir número mixto en fracción impropia',
  // e.g. 1 2/3 -> ((1 * 3) + 2) / 3
  IMPROPER_FRACTION_NUMERATOR: 'Numerador de fracciones impropio',

  // ADDING FRACTIONS

  // e.g. 1/2 + 1/3 -> 5/6
  ADD_FRACTIONS: 'Añadir fracciones',
  // e.g. (1 + 2)/3 -> 3/3
  ADD_NUMERATORS: 'Añadir numeradores',
  // e.g. (2+1)/5
  COMBINE_NUMERATORS: 'Combinar numeradores',
  // e.g. 2/6 + 1/4 -> (2*2)/(6*2) + (1*3)/(4*3)
  COMMON_DENOMINATOR: 'Común denominador',
  // e.g. 3 + 1/2 -> 6/2 + 1/2 (for addition)
  CONVERT_INTEGER_TO_FRACTION: 'Convertir entera a la fracción',
  // e.g. 1.2 + 1/2 -> 1.2 + 0.5
  DIVIDE_FRACTION_FOR_ADDITION: 'Dividir fracción por adicción',
  // e.g. (2*2)/(6*2) + (1*3)/(4*3) -> (2*2)/12 + (1*3)/12
  MULTIPLY_DENOMINATORS: 'Multiplicar denominadores',
  // e.g. (2*2)/12 + (1*3)/12 -> 4/12 + 3/12
  MULTIPLY_NUMERATORS: 'Multiplicar numeradores',

  // MULTIPLYING FRACTIONS

  // e.g. 1/2 * 2/3 -> 2/6
  MULTIPLY_FRACTIONS: 'Multiplicar fracciones',

  // DIVISION

  // e.g. 2/3/4 -> 2/(3*4)
  SIMPLIFY_DIVISION: 'Simplificar divisiones',
  // e.g. x/(2/3) -> x * 3/2
  MULTIPLY_BY_INVERSE: 'Multiplicar por inversa',

  // DISTRIBUTION

  // e.g. 2(x + y) -> 2x + 2y
  DISTRIBUTE: 'Distribuir',
  // e.g. -(2 + x) -> -2 - x
  DISTRIBUTE_NEGATIVE_ONE: 'Distribuir al negativo 1',
  // e.g. 2 * 4x + 2*5 --> 8x + 10 (as part of distribution)
  SIMPLIFY_TERMS: 'Simplificar términos',
  // e.g. (nthRoot(x, 2))^2 -> nthRoot(x, 2) * nthRoot(x, 2)
  // e.g. (2x + 3)^2 -> (2x + 3) (2x + 3)
  EXPAND_EXPONENT: 'Expandir exponentes',

  // ABSOLUTE
  // e.g. |-3| -> 3
  ABSOLUTE_VALUE: 'Valor absoluto',

  // ROOTS
  // e.g. nthRoot(x ^ 2, 4) -> nthRoot(x, 2)
  CANCEL_EXPONENT: 'Cancelar exponente',
  // e.g. nthRoot(x ^ 2, 2) -> x
  CANCEL_EXPONENT_AND_ROOT: 'Cancelar exponente y raíz',
  // e.g. nthRoot(x ^ 4, 2) -> x ^ 2
  CANCEL_ROOT: 'Cancelar raíz',
  // e.g. nthRoot(2, 2) * nthRoot(3, 2) -> nthRoot(2 * 3, 2)
  COMBINE_UNDER_ROOT: 'Combinar abajo de la raíz',
  // e.g. 2 * 2 * 2 -> 2 ^ 3
  CONVERT_MULTIPLICATION_TO_EXPONENT: 'Convertir multiplication al exponente',
  // e.g. nthRoot(2 * x) -> nthRoot(2) * nthRoot(x)
  DISTRIBUTE_NTH_ROOT: 'Distribuir la n-ésima raíz',
  // e.g. nthRoot(4) * nthRoot(x^2) -> 2 * x
  EVALUATE_DISTRIBUTED_NTH_ROOT: 'Evaluar la raíz n-ésima distribuida',
  // e.g. 12 -> 2 * 2 * 3
  FACTOR_INTO_PRIMES: 'Factor en los primos',
  // e.g. nthRoot(2 * 2 * 2, 2) -> nthRoot((2 * 2) * 2)
  GROUP_TERMS_BY_ROOT: 'Agrupar términos por raíz',
  // e.g. nthRoot(4) -> 2
  NTH_ROOT_VALUE: 'Valor de la n-ésima raíz ',
  // e.g. nthRoot(4) + nthRoot(4) = 2*nthRoot(4)
  ADD_NTH_ROOTS: 'Añadir n-ésima raíz',
  // e.g. nthRoot(x, 2) * nthRoot(x, 2) -> nthRoot(x^2, 2)
  MULTIPLY_NTH_ROOTS: 'Multiplicar n-ésima raíz',

  // SOLVING FOR A VARIABLE

  // e.g. x - 3 = 2 -> x - 3 + 3 = 2 + 3
  ADD_TO_BOTH_SIDES: 'Añadir hacia ámbos lugares',
  // e.g. 2x = 1 -> (2x)/2 = 1/2
  DIVIDE_FROM_BOTH_SIDES: 'Divir de ámbos lados',
  // e.g. (2/3)x = 1 -> (2/3)x * (3/2) = 1 * (3/2)
  MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION: 'Multiplicar ámbos lados por la fracción inversa',
  // e.g. -x = 2 -> -1 * -x = -1 * 2
  MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE: 'Multiplicar ámbos lados por negativo 1',
  // e.g. x/2 = 1 -> (x/2) * 2 = 1 * 2
  MULTIPLY_TO_BOTH_SIDES: 'Multiplicar ámbos lados',
  // e.g. x + 2 - 1 = 3 -> x + 1 = 3
  SIMPLIFY_LEFT_SIDE: 'Simplificar lado izquierdo',
  // e.g. x = 3 - 1 -> x = 2
  SIMPLIFY_RIGHT_SIDE: 'Simplificar lado derecho',
  // e.g. x + 3 = 2 -> x + 3 - 3 = 2 - 3
  SUBTRACT_FROM_BOTH_SIDES: 'Substraer de ámbos lados',
  // e.g. 2 = x -> x = 2
  SWAP_SIDES: 'Cambiar lados',
  // e.g. (x - 2) (x + 2) = 0 => x = [-2, 2]
  FIND_ROOTS: 'Encontrar raíz',

  // CONSTANT EQUATION

  // e.g. 2 = 2
  STATEMENT_IS_TRUE: 'La declaración es verdadera',
  // e.g. 2 = 3
  STATEMENT_IS_FALSE: 'La declaración es falsa',

  // FACTORING

  // e.g. x^2 - 4x -> x(x - 4)
  FACTOR_SYMBOL: 'Símbolo de factor',
  // e.g. x^2 - 4 -> (x - 2)(x + 2)
  FACTOR_DIFFERENCE_OF_SQUARES: 'Diferencia de cuadrados del factor',
  // e.g. x^2 + 2x + 1 -> (x + 1)^2
  FACTOR_PERFECT_SQUARE: 'Cuadrado perfecto del cuadrado',
  // e.g. x^2 + 3x + 2 -> (x + 1)(x + 2)
  FACTOR_SUM_PRODUCT_RULE: 'Regla del producto de la suma del factor',
  // e.g. 2x^2 + 4x + 2 -> 2x^2 + 2x + 2x + 2
  BREAK_UP_TERM: 'Romper el término',
};

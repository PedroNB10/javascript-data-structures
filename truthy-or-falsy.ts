function testTruthyOrFalsy(value: any): string {
  if (value) {
    return "Truthy";
  } else {
    return "Falsy";
  }
}

// Aqui estão os valores que são considerados "falsy" em JavaScript:

// false
// 0 (zero)
// '' (string vazia)
// null
// undefined
// NaN (Not-a-Number)

// Todos os outros valores são considerados "truthy", incluindo strings não vazias, números diferentes de zero, objetos vazios {}, arrays vazios [], e assim por diante.

testTruthyOrFalsy(0); // Falsy
testTruthyOrFalsy(1); // Truthy
testTruthyOrFalsy(true); // Truthy
testTruthyOrFalsy(false); // Falsy
testTruthyOrFalsy(null); // Falsy
testTruthyOrFalsy(undefined); // Falsy
testTruthyOrFalsy(""); // Falsy
testTruthyOrFalsy("Hello"); // Truthy
testTruthyOrFalsy([]); // Truthy
testTruthyOrFalsy({}); // Truthy
testTruthyOrFalsy(NaN); // Falsy
testTruthyOrFalsy(-1); // Truthy
testTruthyOrFalsy(0.1); // Truthy
testTruthyOrFalsy(-0.1); // Truthy
testTruthyOrFalsy(Infinity); // Truthy
testTruthyOrFalsy(-Infinity); // Truthy
testTruthyOrFalsy(testTruthyOrFalsy); // Truthy
testTruthyOrFalsy(Symbol("Hello")); // Truthy

export default function guardrail(mathFunction) {
  const newArray = [];
  try {
    newArray.push(mathFunction(), 'Guardrail was processed');
  } catch (err) {
    newArray.push(`Error: ${err.message}`, 'Guardrail was processed');
  }
  return newArray;
}

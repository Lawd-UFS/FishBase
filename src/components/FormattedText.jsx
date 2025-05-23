export function FormattedText({ text, boldText }) {
  // Separa o texto com base no placeholder do texto
  // Exemplo: "Olá, {nome}!" -> ["Olá, ", "!"]
  const parts = text.split(boldText.placeholder);

  // Após isso, o código irá percorrer cada parte do texto e inserir o texto em negrito entre as partes que foram separadas pelo placeholder
  return (
    <>
      {parts.map((part, index) => (
        <>
          {part}
          {index < parts.length - 1 && <strong>{boldText.text}</strong>}
        </>
      ))}
    </>
  );
}

async function buscarInstrumentos(tipo) {
    try {
      const response = await fetch(`http://localhost:3000/instrumentos?tipo=${tipo}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar instrumentos');
      }
      const data = await response.json();
      console.log(data); // Exibe os resultados no console
      // Aqui você pode atualizar o DOM para exibir os resultados
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  // Exemplo de uso
  buscarInstrumentos('baixo');
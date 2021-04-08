import { FormEvent, useState } from 'react';
import "./style.css";

export default function CampoTeste() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  function formataTexto(texto: string) {
    return texto.toLowerCase().replace(/\s+/g, '-').replace(/\.+/g, '-');
  }
  
  function onSubmitFormChange(event: FormEvent) {
    event.preventDefault();
    let textoConvertido = formataTexto(texto);
    setResultado(textoConvertido);
  }

  function limparCampos() {
    setTexto('');
    setResultado('');
  }

  return (
    <div className='container-body'>
      <div className='container'>
        <h1>Converte-texto</h1>
        <form onSubmit={onSubmitFormChange}>
          <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
          <div className='btn-container'>
            <button type="submit">Converter</button>
            <button type="button" onClick={limparCampos}>Limpar</button>
          </div>
        </form>
        <p>{'Resultado: '}{resultado}</p>
      </div>
    </div>
  );
}

// https://drawingdatabase.com/category/aircraft/page/18/
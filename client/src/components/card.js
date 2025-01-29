export function Card(data) {


  return (
    <>
      {data.data.length > 0 ? (
        data.data.map((evento, index) => (
          <div className="evento-card" key={index}>
            <img
              src={evento.imagem ? evento.imagem : "test"}
              alt={evento.nomeEvento}
              className="evento-imagem"
            />
            <div className="evento-info">
              <h2 className="evento-titulo">{evento.nomeEvento}</h2>
              <p className="evento-descricao">{evento.descricao}</p>
              <p className="evento-data">{evento.data}</p>
              <p className="evento-data">{evento.concelho}</p>
            </div>
          </div>
        ))
      ) : (
        <div>A Carregar</div>
      )}
    </>
  );
}

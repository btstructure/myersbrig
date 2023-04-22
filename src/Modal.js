function Modal({ personality, modalOpen, setModalOpen }) {
  return (
    modalOpen && (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => setModalOpen(false)}>X</button>
          </div>
          <div className="title">
            <h1>{personality.title}</h1>
          </div>
          <div>
            <img className="img-modal" src={personality.image}/>
          </div>
          <div className="body">
            <p>{personality.description}</p>
          </div>
          <div className="footer">
            <button onClick={() => setModalOpen(false)} id="cancelBtn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
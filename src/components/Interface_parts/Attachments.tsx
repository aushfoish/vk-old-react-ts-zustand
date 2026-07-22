
import Button from "./Button"


const Attachments = () => {

    return (
        <div className="post-attachments-add-button">
                  <Button 
                    className="post" 
                    children='Опубликовать'/>

                  <div className="post-attachments">
                    <a href="#" className="attachment-button">
                    Прикрепить
                    </a>
                  
                    <div className="attachment-menu">
                      <ul className="attachment-list">
                        <li className="attachment"><a>Фотография</a></li>
                        <li className="attachment"><a>Видеозапись</a></li>
                        <li className="attachment"><a>Аудиозапись</a></li>
                        <li className="attachment" id="attach-graffiti"><a>Граффити</a></li>
                        <li className="attachment"><a>Опрос</a></li>
                        <li className="attachment"><a>Файл</a></li>
                      </ul>
                    </div>

                    <dialog id="graffiti-overlay">
                      <div className="graffiti-content">
                        <canvas id="drawing-place" width="600" height="300">
                        </canvas>
                        <button id="clear">
                          очистить
                        </button>
                        <button id="drawing-save">
                          сохранить
                        </button>
                        <button id="drawing-close">
                          закрыть
                        </button>
                      </div>
                    </dialog>

                  </div>
                </div>
    )
}

export default Attachments
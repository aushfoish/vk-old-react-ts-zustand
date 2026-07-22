import Input from "../Interface_parts/Input"
import Micro_header from "../Interface_parts/Micro_header"

import Attachments from "../Interface_parts/Attachments"
import { useState } from "react"



const AccountWall = () => {

    const [inputFocused, setInputFocused] = useState(false)

    return (
        <>
            <div className="user-wall">

              <Micro_header 
                children='14 записей'
                secondChildren="Очистить стену"
              />

              <div className="add-post">


                <form className="post-add-form">
                  <Input 
                    id='input-post'
                    className="hidden"
                    type='text'
                    placeholder="Что у вас нового?"
                    label='Введите новый пост'
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                     />
                </form>
                
                {inputFocused === true && <Attachments />}
                  
                  
              </div>


            </div>

            <div className="wall-content">


              <div className="post-genuinely" id="0100">

                <div className="userpic">
                  <img className="userpic-post" src="https://sun9-34.userapi.com/s/v1/ig2/HOs5z98-4dBRiRZw6nMPJmEE5Pz8wa9H7djBWuH26wf_t2Zc5hzz3iSqdmBBtVBEk5nFbY4tJYCVc2eVbixvqrkw.jpg?quality=95&as=32x31,48x46,72x69,87x83&from=bu&u=Tpyu5o4na0XAeISLt7vTfRQvtjVMBgPEUuflBv4KoCI&cs=87x0"></img>
                </div>

                <div className="content-post">

                  <div className="post-head">
                    <a className="username">Павел Дуров</a>

                    
                  </div>

                  <div className="text-content">
                    <p className="user-content">
                      Эй йоу чуваки, меня турнули из ВКОНТАКТЕ, я терь безработный(
                    </p>
                  </div>

                  <div className="like-share-date">

                  <div className="date-time-container">
                    <p className="date-time">25 фев в 19:32</p>
                  </div>

                  <div className="like-share-container">
                    <div className="share">
                      поделиться
                    </div>
                    <div className="like">
                      Мне нравится
                    </div>
                  </div>
                  
                  </div>
                


                </div>
            
              </div>

              <div className="post-genuinely" id="0200">

              <div className="userpic">
                <img className="userpic-post" src="https://sun9-34.userapi.com/s/v1/ig2/HOs5z98-4dBRiRZw6nMPJmEE5Pz8wa9H7djBWuH26wf_t2Zc5hzz3iSqdmBBtVBEk5nFbY4tJYCVc2eVbixvqrkw.jpg?quality=95&as=32x31,48x46,72x69,87x83&from=bu&u=Tpyu5o4na0XAeISLt7vTfRQvtjVMBgPEUuflBv4KoCI&cs=87x0">
                </img>
              </div>

              <div className="content-post">
                <div className="username">Павел Дуров</div>

                <div className="user-content">
                  <p className="text-content">
                    Зацените, купил коту домик, а он неправильно им пользуется, думает это одеяло!  Все деньги на ветер(
                  </p>
                  <img className="content-picture" src="https://sun9-26.userapi.com/s/v1/ig2/xPNTMnjozOtjyxeOmbTsra3355PGPGmueKsQcBtRg9h6TcxDNskhu2GZynxpdmvsVKoG9ZEYurU8loBIURquhkcD.jpg?quality=96&as=32x34,48x51,72x76,108x114,160x168,240x253,360x379,480x505,540x569,640x674&from=bu&u=PtPEQZjTKHVm92ZmfmFHQJ_9lI-Anwuz1CUd8kV2X-A&cs=640x0">
                  </img>
                </div>

                <div className="like-share-date">

                  <div className="date-time-container">
                    <p className="date-time">25 фев в 19:32</p>
                  </div>

                  <div className="like-share-container">
                    <div className="share">
                      поделиться
                    </div>
                    <div className="like">
                      Мне нравится
                    </div>
                  </div>
                  
                </div>
                


              </div>
            
              </div>
            
            
            </div>
        </>
    )
}

export default AccountWall
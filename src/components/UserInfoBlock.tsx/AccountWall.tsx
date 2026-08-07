import Input from "../Interface_parts/Input"
import Micro_header from "../Interface_parts/Micro_header"
import { userPostsFetch, type UserPosts } from "../../UserPostsFetch"
import Attachments from "../Interface_parts/Attachments"
import { useEffect, useState } from "react"
import { AccountWallPost } from "../PostItem/AccountWallPost"
import { ModalWindow } from "../ModalWindow/ModalWindow"
import { GraffityModal } from "../GraffityPaint/GraffityModal"
import { AnimatePresence, motion } from "framer-motion"




const AccountWall = () => {

  const isLoading = userPostsFetch((state) => state.isLoading)
  const userFetch = userPostsFetch((state) => state.userFetch)
  const posts = userPostsFetch((state) => state.posts)
  const updatedPosts = userPostsFetch((state) => state.updatedPosts)
  const filterUpdatedPosts = userPostsFetch((state) => state.filterUpdatedPosts)

  useEffect(()=> {
    userFetch()
  }, [userFetch])

  useEffect(() => {

        // Флаг, который скажет сокету: "Эй, этот рендер уже отменили, ничего не делай!"
        let isCancelled = false; 
        let ws: WebSocket | null = null;
        let heartbeatInterval: ReturnType<typeof setInterval> | undefined;
        ws = new WebSocket("wss://tyekwqioulapfagzpswr.supabase.co/realtime/v1/websocket?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZWt3cWlvdWxhcGZhZ3pwc3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODI1NDQsImV4cCI6MjA5OTk1ODU0NH0.yCznoMTlwKslJoAYlYj5f36cC5ryXJ-JkaT-0e9Bi4E&vsn=1.0.0");

        ws.onopen = () => {
            if (isCancelled) {
                ws?.close();
                return;
            }

            console.log('Вебсокет подключён');
            const subscribeMessage = {
                topic: 'realtime:public:posts',
                event: 'phx_join',             
                payload: { config: { postgres_changes: [{ event: '*', schema: 'public', table: 'posts' }] } },
                ref: '1'
            };
            ws?.send(JSON.stringify(subscribeMessage));

            heartbeatInterval = setInterval(() => {
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: Date.now().toString() }));
                }
            }, 30000);
        };

        ws.onmessage = (event) => {
            if (isCancelled) return; 
            const response = JSON.parse(event.data);
            const payload = response.payload
            if (response.event === 'postgres_changes') {
                const type = response.payload?.data?.type || response.payload?.type;
                if (type === 'INSERT' && payload?.data?.record) {
                  updatedPosts(payload.data.record)
                } else if (type === 'DELETE') {
                  const oldRecordID = payload?.data?.old_record.id
                  if (oldRecordID !== null) {
                  filterUpdatedPosts(oldRecordID)
                  }
                  
                  
                }
            }
        };

        ws.onerror = (error) => {
            if (!isCancelled) console.error('Ошибка WS:', error);
        };

        return () => {
            isCancelled = true; 
            if (heartbeatInterval) clearInterval(heartbeatInterval);
            
            if (ws) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.close();
                }
            }
        };
    }, []);


    const [modalOpened, setModalOpened] = useState(false)
    const [inputFocused, setInputFocused] = useState(false)
    const setInputPost = userPostsFetch((state) => state.setInputPost)
    const inputPost = userPostsFetch((state) => state.inputPost)

    
    const lastSignCheck = (posts:UserPosts[]|null) => {
        if (posts !== null) {
            const arrayLengthLastsign = String(posts.length).slice(-1)
            const forA = ['2', '3', '4']
            const toA = forA.includes(arrayLengthLastsign)
            const forOv = ['5', '6', '7', '8', '9', '0']
            const toOv = forOv.includes(arrayLengthLastsign)
            
            if (toA) {
              return `${posts.length} поста`

            } else if (toOv) {
              return `${posts.length} постов`

            } else if (arrayLengthLastsign === '1'){
              return `${posts.length} пост`
            }
            }
        }

        const {sendPost} = userPostsFetch()
        
            const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
              e.preventDefault()
              sendPost()
              inputPost
            }

    return (
        <>
        {modalOpened === true && 
        (<ModalWindow onCloseModal={() => setModalOpened(false)} children={<GraffityModal onCloseModal={() => setModalOpened(false)}/>} 
          id="canvas" label="Ваше граффити на стену Романа Саныча" 
          />
        )}
            <div className="user-wall">

              <Micro_header 
                children={lastSignCheck(posts)}
              />

              <div className="add-post">


                <motion.form  className="post-add-form" autoComplete="off" onSubmit={handleSubmit} onBlur={(e) => {if (!e.currentTarget.contains(e.relatedTarget)) {
                      e.preventDefault()
                      setInputFocused(false)
                    } }}>
                  <Input 
                    id='input-post'
                    className="hidden"
                    type='text'
                    placeholder="Что у вас нового?"
                    label='Введите новый пост'
                    onFocus={() => setInputFocused(true)}
                    value={inputPost}
                    onChange={setInputPost}
                     />
                    <AnimatePresence>
                      {inputFocused &&  (
                        <Attachments 
                          setCanvasOpen={() => setModalOpened(true)}
                        />
                        )}
                    </AnimatePresence>
                </motion.form>
                
               
                  
                  
              </div>


            </div>

            <div className="wall-content">


              {!isLoading && posts !== null && (posts.map((post) => (
              <motion.div
                  layout
                  key={post.id}
                  initial={{opacity: 0, y: -40, scale: 0.95}}
                  animate={{opacity: 1, y: 0, scale: 1}}
                  transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 14
                  }}
                >
                <AccountWallPost 
                  userPicSrc={post?.userPictureSrc}
                  id={post.id}
                  text={post?.content}
                  label={post?.username}
                  date={post?.date}
                  imgSrc={post?.imageContentSrc}
                  />
              </motion.div>
              
            )
              ))
              }
            
            
            </div>
        </>
    )
}

export default AccountWall
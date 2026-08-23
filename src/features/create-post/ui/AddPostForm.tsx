import { GraffityModal } from "@/features/create-graffity";
import { Input } from "@/shared/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Attachments } from "./Attachments";
import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { useWallStore } from "@/entities/posts/model/useWallStore";
import styles from './CreatePost.module.scss'

export const AddPostForm = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const setInputPost = useWallStore((state) => state.setInputPost);
  const inputPost = useWallStore((state) => state.inputPost);
  const sendPost = useWallStore((state) => state.sendPost);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPost();
  };

  return (
    <>
      <AnimatePresence>
        {modalOpened === true && (
          <ModalWindow
            classname="canvas"
            onCloseModal={() => setModalOpened(false)}
            children={
              <GraffityModal onCloseModal={() => setModalOpened(false)} />
            }
            id="canvas"
            label="Ваше граффити на стену Романа Саныча"
          />
        )}
      </AnimatePresence>

        <motion.form
          className={styles.postForm}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Input
            containerClass={styles.postInput}
            classInput={styles.inputField}
            id="input-post"
            className="visuallyHidden"
            type="text"
            placeholder="Что у вас нового?"
            label="Введите новый пост"
            value={inputPost}
            onChange={setInputPost}
          />
          <AnimatePresence>
          <Attachments
              setCanvasOpen={() => {
                if (modalOpened === false) setModalOpened(true);
              }}
          />
          </AnimatePresence>
        </motion.form>
    </>
  );
};

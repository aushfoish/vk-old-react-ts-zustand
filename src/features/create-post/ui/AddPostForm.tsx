import { GraffityModal } from "@/features/create-graffity";
import { Input } from "@/shared/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Attachments } from "./Attachments";
import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { useWallStore } from "@/entities/posts/model/useWallStore";

export const AddPostForm = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
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

      <div className="add-post">
        <motion.form
          className="post-add-form"
          autoComplete="off"
          onSubmit={handleSubmit}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              e.preventDefault();
              setInputFocused(false);
            }
          }}
        >
          <Input
            id="input-post"
            className="hidden"
            type="text"
            placeholder="Что у вас нового?"
            label="Введите новый пост"
            onFocus={() => setInputFocused(true)}
            value={inputPost}
            onChange={setInputPost}
          />
          <AnimatePresence>
            {inputFocused && (
              <Attachments
                setCanvasOpen={() => {
                  if (modalOpened === false) setModalOpened(true);
                }}
              />
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </>
  );
};

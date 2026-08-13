import { GraffityModal } from "@/features/create-graffity";
import { Input } from "@/shared/ui";
import { userPostsFetch } from "@/UserPostsFetch";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Attachments } from "./Attachments";
import { ModalWindow } from "@/components/ModalWindow/ModalWindow";

export const AddPostForm = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const setInputPost = userPostsFetch((state) => state.setInputPost);
  const inputPost = userPostsFetch((state) => state.inputPost);
  const sendPost = userPostsFetch((state) => state.sendPost);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPost();
  };

  return (
    <>
      {modalOpened === true && (
        <ModalWindow
          onCloseModal={() => setModalOpened(false)}
          children={
            <GraffityModal onCloseModal={() => setModalOpened(false)} />
          }
          id="canvas"
          label="Ваше граффити на стену Романа Саныча"
        />
      )}
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

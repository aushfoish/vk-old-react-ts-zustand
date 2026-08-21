import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { Button, ErrorMessage, Input, Loader } from "@/shared/ui";
import { useEffect, useState } from "react";
import { handleFileReader } from "@/shared/lib/file/useFileReader";

interface AuthorizationModuleProps {
  onClose: () => void;
}

export const AuthorizationModule = (props: AuthorizationModuleProps) => {
  const { onClose } = props;

  const [username, setUsername] = useState("");
  const [userpic, setUserpic] = useState("");
  const [picUploading, setPicUploading] = useState(false);
  const [error, setError] = useState(false);

  const authorization = useAuthStore((state) => state.authorization);
  const authCheck = useAuthStore((state) => state.authCheck);
  const anonymous = useAuthStore((state) => state.anonymous);

  useEffect(() => {
    const loginData = localStorage.getItem("userdata");
    if (loginData) {
      authCheck();
      onClose();
    }
  }, [authCheck, onClose]);

  const onUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPicUploading(true);
    const userpicUrl = await handleFileReader(e, "userpic", "jpg", 40, 40);
    if (typeof userpicUrl === "string") {
      setUserpic(userpicUrl);
    }
    setPicUploading(false);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputsCheck = username !== "" && userpic !== "";
    if (inputsCheck === false) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else if (inputsCheck === true) {
      authorization(username, userpic);
      console.log("шнурки в стакане", username, userpic);
      onClose();
    }
  };

  return (
    <>
      <form className="authorization-inputs-container" onSubmit={handleSubmit}>
        <Input
          maxLength={25}
          id="username"
          placeholder="введите ваше имя.."
          type="text"
          label="Введите имя"
          className="default-label"
          value={username}
          classInput="auth-input"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />

        <ErrorMessage
          classname={error === true ? "isError" : ""}
          children="Добавьте имя и фото, либо нажмите в самый низ"
          id="auth-error"
        />
        <Input
          id="userpic"
          placeholder="добавьте ваше фото.."
          type="file"
          label="Добавьте ваше фото"
          className="default-label"
          classInput="auth-file"
          onChange={onUploadFile}
        />
        <div className="auth-buttons">
          <Button
            isLoading={picUploading}
            type="submit"
            className="post"
            children={picUploading ? <Loader /> : "Зарегистрироваться"}
          />

          <button
            type="button"
            className="modal-close-button option"
            onClick={() => {
              anonymous();
              onClose();
            }}
          >
            Не буду регаться
          </button>
        </div>
      </form>
    </>
  );
};

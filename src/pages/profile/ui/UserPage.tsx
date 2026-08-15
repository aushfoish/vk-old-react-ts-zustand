import { MainPageAuthorization } from "@/widgets/authorization-window/ui/MainPageAuthorization";
import { AccountSection } from "./AccountSection";
import { AccountTitle } from "@/entities/user";
import { useFetchProfile } from "@/entities/user/model/useFetchProfile";

export const UserPage = () => {
  const { isLoading, profile } = useFetchProfile();

  if (isLoading) return <div>загрузка</div>;
  if (!profile) return <div>данные не найдены</div>;
  return (
    <>
      <MainPageAuthorization />

      <AccountTitle />

      <AccountSection />
    </>
  );
};

import { MainPageAuthorization } from "@/widgets/authorization-window/ui/MainPageAuthorization";
import { AccountSection } from "./AccountSection";
import { AccountTitle } from "@/entities/user";
import { useFetchProfile } from "@/entities/user/model/useFetchProfile";
import { SkeletonMainPage } from "@/shared/ui/SkeletonMainPage";

export const UserPage = () => {
  const { isLoading, profile } = useFetchProfile();

  if (isLoading) return <SkeletonMainPage />;
  if (!profile) return <div></div>;
  return (
    <>
      <MainPageAuthorization />

      <AccountTitle />

      <AccountSection />
    </>
  );
};
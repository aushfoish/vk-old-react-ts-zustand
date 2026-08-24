import { AccountSection } from "./AccountSection";
import { AccountTitle } from "@/entities/user";
import { useFetchProfile } from "@/entities/user/model/useFetchProfile";
import { FetchErrorModal } from "@/features/fetch-error/ui/FetchErrorModal";
import { SkeletonMainPage } from "@/shared/ui/SkeletonMainPage";

export const UserPage = () => {
  const { isLoading, profile, isFetchPositive, refetch } = useFetchProfile();

  if (!profile && isFetchPositive === false) return <FetchErrorModal onClick={refetch}/>

  if (isLoading || !profile) return <SkeletonMainPage />;
  
  return (
    <>
      <AccountTitle />

      <AccountSection />
    </>
  );
};
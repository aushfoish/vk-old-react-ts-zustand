import { AdminAuthModule } from "@/features/pass-the-authorization/ui/AdminAuthModule";
import { AdminControl } from "@/pages/admin/ui/AdminControl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const jopa = 'diryavaya-huesoska'
  const [isAdmin] = useState(true);
  const nav = useNavigate();

  if (isAdmin) return <AdminControl />;

  if (!isAdmin) return <AdminAuthModule onClose={() => nav(-1)} />;
};

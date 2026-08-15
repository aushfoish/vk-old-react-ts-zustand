import { useWallStore } from "@/entities/posts/model/useWallStore";
import { useEffect } from "react";

export const useWallWebsocket = () => {
  const pagePostsFetch = useWallStore((state) => state.pagePostsFetch);
  const updatedPosts = useWallStore((state) => state.updatedPosts);
  const filterUpdatedPosts = useWallStore(
    (state) => state.filterUpdatedPosts,
  );

  useEffect(() => {
    pagePostsFetch();
  }, [pagePostsFetch]);

  useEffect(() => {
    let isCancelled = false;
    let ws: WebSocket | null = null;
    let heartbeatInterval: ReturnType<typeof setInterval> | undefined;
    ws = new WebSocket(
      "wss://tyekwqioulapfagzpswr.supabase.co/realtime/v1/websocket?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZWt3cWlvdWxhcGZhZ3pwc3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQzODI1NDQsImV4cCI6MjA5OTk1ODU0NH0.yCznoMTlwKslJoAYlYj5f36cC5ryXJ-JkaT-0e9Bi4E&vsn=1.0.0",
    );

    ws.onopen = () => {
      if (isCancelled) {
        ws?.close();
        return;
      }

      console.log("Вебсокет подключён");
      const subscribeMessage = {
        topic: "realtime:public:posts",
        event: "phx_join",
        payload: {
          config: {
            postgres_changes: [
              { event: "*", schema: "public", table: "posts" },
            ],
          },
        },
        ref: "1",
      };
      ws?.send(JSON.stringify(subscribeMessage));

      heartbeatInterval = setInterval(() => {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              topic: "phoenix",
              event: "heartbeat",
              payload: {},
              ref: Date.now().toString(),
            }),
          );
        }
      }, 30000);
    };

    ws.onmessage = (event) => {
      if (isCancelled) return;
      const response = JSON.parse(event.data);
      const payload = response.payload;
      if (response.event === "postgres_changes") {
        const type = response.payload?.data?.type || response.payload?.type;
        if (type === "INSERT" && payload?.data?.record) {
          updatedPosts(payload.data.record);
        } else if (type === "DELETE") {
          const oldRecordID = payload?.data?.old_record.id;
          if (oldRecordID !== null) {
            filterUpdatedPosts(oldRecordID);
          }
        }
      }
    };

    ws.onerror = (error) => {
      if (!isCancelled) console.error("Ошибка WS:", error);
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
  }, [updatedPosts, filterUpdatedPosts]);
};

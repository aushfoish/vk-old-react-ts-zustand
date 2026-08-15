import { postsHeaderLastSignCheck } from "@/entities/posts/lib/WallHeaderLastSignCheck";
import { motion } from "framer-motion";
import { useWallWebsocket } from "../model/useWallWebsocket";
import { AddPostForm } from "@/features/create-post/ui/AddPostForm";
import { AccountWallPost, Micro_header } from "@/entities/posts";
import { ContainerPlaceholder } from "@/shared/ui/ContainerPlaceholder/ContainerPlaceholder";
import { useWallStore } from "@/entities/posts/model/useWallStore";

export const AccountWall = () => {
  const posts = useWallStore((state) => state.posts);

  useWallWebsocket();

  return (
    <>
      <div className="user-wall">
        <Micro_header children={postsHeaderLastSignCheck(posts)} />

        <AddPostForm />
      </div>

      <div className="wall-content">
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
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
          ))
        ) : (
          <ContainerPlaceholder label="посты не найдены" />
        )}
      </div>
    </>
  );
};

import { postsHeaderLastSignCheck } from "@/entities/posts/lib/WallHeaderLastSignCheck";
import { motion } from "framer-motion";
import { useWallWebsocket } from "../model/useWallWebsocket";
import { AddPostForm } from "@/features/create-post/ui/AddPostForm";
import { AccountWallPost, Micro_header } from "@/entities/posts";

import styles from "./AccountWall.module.scss";
import { useFetchPosts } from "@/entities/posts/model/usePosts";
import { SkeletonWall } from "@/shared/ui/SkeletonMainPage/SkeletonWall";
import { Button, ContainerPlaceholder } from "@/shared/ui";

export const AccountWall = () => {
  useWallWebsocket();

  const { data: posts = [], isLoading, isError, refetch } = useFetchPosts();

  if (isLoading) {
    return <SkeletonWall />;
  }

  if (isError) {
    return (
      <div className={styles.wallContent}>
        <ContainerPlaceholder label="Стена не найдена, тут тебе не 2007" />
        <Button className="refetch" children="И всё же.." onClick={refetch} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.wallForm}>
        <Micro_header children={postsHeaderLastSignCheck(posts)} />
        <AddPostForm />
      </div>

      <div className={styles.wallContent}>
        {posts.map((post) => (
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
              alt={post.username}
              userPicSrc={post.userPictureSrc}
              id={post.id}
              text={post.content}
              label={post.username}
              date={post.date}
              imgSrc={post.imageContentSrc}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

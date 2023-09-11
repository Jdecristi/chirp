import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import { UserImage } from "@src/components/avatar/UserImage";
import { Button } from "@src/components/ui/button";
import { api } from "@src/utils/api";
import { isEmoji } from "@src/utils/zod";

const CreatePost = () => {
  const { user, isSignedIn } = useUser();
  const [inputValue, setInputValue] = useState<string>("");
  const ctx = api.useContext();

  const { isLoading: isPosting, mutate } = api.post.create.useMutation({
    onSuccess: () => {
      setInputValue("");
      void ctx.post.getAll.invalidate();
    },
  });

  const handleChangeInput = (newVal: string) => {
    try {
      isEmoji.parse(newVal);
      setInputValue(newVal);
    } catch (_err) {
      return;
    }
  };

  const handleSubmit = () => {
    mutate({ content: inputValue });
  };

  if (!isSignedIn) return null;
  if (!user) return <div className="flex h-12 items-center justify-center">Something went wrong</div>;

  return (
    <div className="flex w-full gap-12 border-b p-4">
      <UserImage imageUrl={user.imageUrl} username={user.username!} />
      <div className="flex w-full flex-col gap-4">
        <input
          placeholder="Type some emojis!"
          value={inputValue}
          onChange={(e) => handleChangeInput(e.target.value)}
          className="h-12 flex-grow bg-transparent focus:outline-none"
          disabled={isPosting}
        />
        <div className="flex w-full justify-end">
          <Button disabled={isPosting} onClick={handleSubmit}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CreatePost };

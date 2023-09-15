import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import { ProfileImage } from "@src/components/avatar/ProfileImage";
import { LoadingSpinner } from "@src/components/loading/Spinner";
import { Button } from "@src/components/ui/Button";
import { Column } from "@src/components/ui/Column";
import { Row } from "@src/components/ui/Row";
import { useToast } from "@src/hooks/useToast";
import { api } from "@src/utils/api";
import { onEnterKey } from "@src/utils/onKeyEnter";
import { isEmoji } from "@src/utils/zod";

const CreatePost = () => {
  const { user, isSignedIn } = useUser();
  const [inputValue, setInputValue] = useState<string>("");
  const { toast } = useToast();
  const ctx = api.useContext();

  const { isLoading: isPosting, mutate } = api.post.create.useMutation({
    onSuccess: () => {
      setInputValue("");
      void ctx.post.getAll.invalidate();
    },
    onError: (e) => {
      const errMessage = e.data?.zodError?.fieldErrors.content;

      toast({
        title: "Uh oh, Chirp not posted",
        description: errMessage?.[0] ? errMessage[0] : "Failed to post. Please try again later",
      });
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
    <Row content="left" align="top" className="gap-12 border-b p-4" filled>
      <ProfileImage imageUrl={user.imageUrl} username={user.username!} />
      <Column align="left" className="flex w-full flex-col gap-4">
        <input
          placeholder="Type some emojis!"
          value={inputValue}
          onChange={(e) => handleChangeInput(e.target.value)}
          className="h-12 grow bg-transparent focus:outline-none"
          disabled={isPosting}
          onKeyDown={(e) => onEnterKey(e, handleSubmit)}
        />
        <Row content="right" filled>
          <Button disabled={isPosting} onClick={handleSubmit}>
            <LoadingSpinner loading={isPosting} variant="dark" size="sm" /> Post
          </Button>
        </Row>
      </Column>
    </Row>
  );
};

export { CreatePost };

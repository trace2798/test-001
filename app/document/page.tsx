import Editor from "@/components/editor";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <>
      <div className="bg-white overflow-x-hidden">
        <Editor />
      </div>
    </>
  );
};

export default Page;

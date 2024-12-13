import { FC } from "react";

interface DocumentLayoutProps {
  children: React.ReactNode;
}

const DocumentLayout: FC<DocumentLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 overflow-x-hidden">
        <nav className="w-full bg-red-500">Document Navbar</nav>
        {children}
      </div>
    </>
  );
};

export default DocumentLayout;

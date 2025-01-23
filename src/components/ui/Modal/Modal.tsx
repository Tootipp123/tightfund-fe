import { MdClose } from "react-icons/md";

interface ModalProps {
  onClose: () => void;
  className?: string;
  persist?: boolean;
  children: React.ReactNode;
  showBackdrop?: boolean;
}

interface ChildProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: ChildProps) => {
  return (
    <div
      className={`dark:border-neutral-800 p-5 w-full z-[100] bottom-[0] absolute border-t dark:bg-darkTheme-600 bg-white`}
    >
      {children}
    </div>
  );
};

export const ModalContent = ({ height = "h-full", children }: any) => {
  return (
    <div className={`${height} content overflow-y-auto relative p-7`}>
      {children}
    </div>
  );
};

export const ModalHeader = ({ children }: ChildProps) => {
  return (
    <div
      className={`py-5 px-7 w-full top-0 sticky z-[100] dark:bg-darkTheme-600 bg-white`}
    >
      {children}
    </div>
  );
};

export const ModalTitle = ({ children }: ChildProps) => {
  return <h2 className={`font-semibold dark:font-normal`}>{children}</h2>;
};

export default function Modal({
  onClose,
  className,
  persist = false,
  children,
  showBackdrop = true,
}: ModalProps) {
  return (
    <>
      {showBackdrop && (
        <div
          className="fixed inset-0 w-full h-full dark:bg-neutral-700 bg-neutral-900 opacity-60 z-[600]"
          onClick={() => !persist && onClose()}
        ></div>
      )}
      <div
        className={`
          ${className}
          bg-transparent
          rounded-lg m-auto fixed inset-0 z-[700] flex items-center justify-center outline-none focus:outline-none
        `}
      >
        <div
          id="test2"
          className="relative w-full md:w-auto h-auto max-h-[90vh] flex flex-col rounded-lg dark:shadow-2xl"
        >
          <div className="rounded-lg w-full h-full md:w-auto border dark:border-neutral-800 overflow-hidden dark:bg-neutral-900 bg-white">
            <div
              onClick={() => !persist && onClose()}
              className="w-full absolute -mt-8 md:-mt-6"
            >
              <div
                onClick={onClose}
                className="flex ml-auto relative items-center mb-1 bg-neutral-700 cursor-pointer shadow-xl rounded-full w-7 md:w-5 h-7 md:h-5 z-[999]"
              >
                <MdClose
                  className={`fill-white w-5 h-5 md:w-4 md:h-4 m-auto`}
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

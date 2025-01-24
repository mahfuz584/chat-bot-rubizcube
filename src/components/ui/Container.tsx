import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "w-full mx-auto 2xl:max-w-[75%] lg:max-w-[90.5%] max-w-[95%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;

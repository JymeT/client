import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  status: number | "unknown";
  className?: string;
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusInfo = () => {
    if (status === "unknown") {
      return {
        backgroundColor: "bg-red-500",
        textColor: "text-white",
        label: "Unknown",
      };
    }

    if (status >= 200 && status < 300) {
      return {
        backgroundColor: "bg-green-500",
        textColor: "text-white",
        label: "Success",
      };
    }

    if (status >= 300 && status < 400) {
      return {
        backgroundColor: "bg-blue-500",
        textColor: "text-white",
        label: "Redirect",
      };
    }

    if (status >= 400 && status < 500) {
      return {
        backgroundColor: "bg-yellow-500",
        textColor: "text-white",
        label: "Client Error",
      };
    }

    if (status >= 500) {
      return {
        backgroundColor: "bg-red-500",
        textColor: "text-white",
        label: "Server Error",
      };
    }

    return {
      backgroundColor: "bg-red-500",
      textColor: "text-white",
      label: "Unknown",
    };
  };

  const { backgroundColor, textColor, label } = getStatusInfo();

  return (
    <span
      className={cn(
        "inline-flex justify-center items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        backgroundColor,
        textColor,
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full mr-1.5 bg-current inline-block align-middle"></span>
      {label} {status !== "unknown" && <span>({status})</span>}
    </span>
  );
};

export default StatusBadge;

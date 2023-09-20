import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@src/components/ui/Toast";
import { useBreakpoint } from "@src/hooks/useBreakpoint";
import { useToast } from "@src/hooks/useToast";

export function Toaster() {
  const { toasts } = useToast();
  const { md } = useBreakpoint();

  return (
    <ToastProvider swipeDirection={md ? "right" : "up"}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

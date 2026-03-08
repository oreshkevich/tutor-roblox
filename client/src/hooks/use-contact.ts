import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Произошла ошибка при отправке");
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Заявка успешно отправлена! 🎉",
        description: "Я свяжусь с вами в ближайшее время для обсуждения деталей.",
      });
    },
    onError: (error) => {
      toast({
        title: "Упс! Что-то пошло не так",
        description: error.message || "Попробуйте отправить заявку еще раз.",
        variant: "destructive",
      });
    }
  });
}

import { toast, Bounce } from "react-toastify";

export const toastConfig = {
    error: (message?: string) => toast.error(
        message || "Erro ao realizar ação",
        {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Bounce,
        }
    ),
    success: (message?: string) => toast.success(message || "Ação realizada com sucesso !!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
    }),
    warning: (message?: string) => toast.warning(message || "Atenção, atividade suspeita", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
    })
}
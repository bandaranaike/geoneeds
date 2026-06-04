export interface AdminToastState {
    type: "success" | "error";
    message: string;
}

export default function AdminToast({toast, onClose}: { toast: AdminToastState | null; onClose: () => void }) {
    if (!toast) return null;

    const colorClass = toast.type === "success"
        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
        : "border-red-200 bg-red-50 text-red-900";

    const dotClass = toast.type === "success" ? "bg-emerald-500" : "bg-red-500";

    return (
        <div className="fixed right-4 top-24 z-50 w-[calc(100%-2rem)] max-w-sm">
            <div className={`rounded-geo border px-4 py-3 shadow-xl shadow-slate-950/10 ${colorClass}`}>
                <div className="flex items-start gap-3">
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${dotClass}`}/>
                    <p className="flex-1 text-sm font-semibold leading-6">{toast.message}</p>
                    <button type="button" onClick={onClose} className="text-lg font-bold leading-none opacity-60 hover:opacity-100" aria-label="Close notification">
                        ×
                    </button>
                </div>
            </div>
        </div>
    );
}

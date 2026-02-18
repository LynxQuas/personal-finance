import { cn } from "@/lib/utils";

type SavingMicroProps = {
    className?: string;
    title: string;
    amount: number;
}

export default function SavingMicro({ className, title, amount }: SavingMicroProps) {
    return (
        <div className={
            cn(
                "flex gap-1 flex-col border-l-4 px-5 py-1 border-secondary-green",
                className
            )
        }>
            <span className="text-preset-5 text-medium-gray">{title}</span>
            <span className="text-preset-4 font-bold text-primary-gray">${amount}</span>
        </div>
    )
}

import { cn } from "@/lib/utils";

type SavingMicroProps = {
    className?: string;
    title: string;
    amount: number;
    limit?: string;
}

export default function SavingMicro({ className, title, amount, limit }: SavingMicroProps) {
    return (
        <div className={
            cn(
                "flex gap-1 flex-col border-l-4 px-5 py-1 border-secondary-green",
                className
            )
        }>
            <span className="text-preset-5 text-medium-gray">{title}</span>
            <div className="flex items-center gap-2">
                <span className="text-preset-4 font-bold text-primary-gray">${amount}</span>
                {limit && <span className="text-preset-5">{limit}</span>}
            </div>

        </div>
    )
}

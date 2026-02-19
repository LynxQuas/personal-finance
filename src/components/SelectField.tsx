import { cn } from "@/lib/utils";
import DropDown from "./icons/DropDownIcon";

type options = { name: string, value: string }


type SelectFieldProps = {
    options: options[];
    name: string;
    label: string;
    className?: string;
}

export default function SelectField({name, options, label, className }: SelectFieldProps) {
    return (
        <div className="w-full flex items-center gap-2">
            <label htmlFor={name}>{label}</label>
            <div className={cn("relative", className)}>
                <select id={name} name={name} className="appearance-none w-full bg-white py-3 px-5 pr-10
                                rounded-md border border-beige-500
                                outline-none"
                >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.name}</option>
                    ))}
                </select>

                <DropDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                />
            </div>
        </div>

    )
}

import * as React from "react";
import { ReactNode } from "react";
import { KeyboardEvent } from "react";

/**
 * Simple className utility that joins truthy string values.
 * This replaces the missing './utils' dependency.
 */
function cn(...parts: Array<string | false | null | undefined>) {
	return parts.filter(Boolean).join(" ");
}

type Props = {
	value: string
	onChange: (value: string) => void
	type: "text" | "number" | "color" | "email" | "password" | "date"
	className?: string
	id: string
	required?: boolean
	placeholder?: string
	readOnly?: boolean
	children?: ReactNode
	label?: string
	onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
}

type TagsInputProps = {
	values: string[]
	onChange: (values: string[]) => void
	id?: string
	placeholder?: string
	className?: string
	label?: string
	required?: boolean
	maxTags?: number
}

export const InputComponent = ({ value, onChange, type, className, id, required, placeholder, onKeyUp }: Props) => {
	return (
	    <input type={type} id={id} value={value} onChange={e => onChange(e.target.value)}
       className={cn(
        "file:text-gray-100  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
		   required={required ? required : false} placeholder={placeholder || ""} onKeyUp={e => {
			  if (onKeyUp) onKeyUp(e)
		   }} />
	)
}

export const InputGroupComponent = ({ value, onChange, type, className, id, required, placeholder, children, label, onKeyUp, readOnly }: Props) => {
	return (
		<div className="w-full flex flex-col gap-1 my-2">
			<strong className="text-xs font-bold text-slate-500">{label}{required == true ? <sup className="text-red-600">*&#41;</sup> : <></>}</strong>
			<div className={cn(
				"file:text-gray-100  selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				className,
				)}>
				{
					children ?
						<div className="px-2">
						{children}
						</div> : <div className=""></div>
				}
				<input type={type} id={id} value={value} onChange={e => onChange(e.target.value)}
					className={`text-sm w-full rounded-r-md p-2 bg-white  focus:outline-none ${className}`}
					required={required ? required : false} placeholder={placeholder || ""}
					readOnly={readOnly ? readOnly : false} onKeyUp={e => {
						if (onKeyUp) onKeyUp(e)
					}} />
			</div>
		</div>
  
	)
}

export const TextGroupComponent = ({ value, onChange, className, id, required, placeholder, label }: Props) => {
	return (
		<div className="w-full flex flex-col gap-1 my-2">
			<strong className="text-xs font-bold text-slate-500">
				{label}
				{required == true ? <sup className="text-red-600">*&#41;</sup> : <></>}
			</strong>
			<div className="w-full flex items-center gap-1 bg-white border-slate-500 rounded-md border">
				<textarea id={id} value={value} cols={10} rows={3} onChange={e => onChange(e.target.value)}
					className={`text-sm w-full rounded-md p-2 bg-white  focus:outline-none ${className}`}
					required={required ? required : false} placeholder={placeholder || ""} />
			</div>
		</div>
	)
}

export const TagsInputComponent = ({
	values,
	onChange,
	id,
	placeholder,
	className,
	label,
	required,
	maxTags,
}: TagsInputProps) => {
	const [input, setInput] = React.useState("")

	const normalize = (s: string) => s.trim().replace(/\s+/g, " ")
	const addTag = (raw: string) => {
		const normalized = normalize(raw)
		if (!normalized) return
		const parts = normalized.split(/[, \n]+/).map(p => p.trim()).filter(Boolean)
		if (parts.length === 0) return
		const next = [...values]
		for (const p of parts) {
			if (maxTags && next.length >= maxTags) break
			if (!next.includes(p)) next.push(p)
		}
		onChange(next)
		setInput("")
	}

	const removeAt = (index: number) => {
		const next = values.filter((_, i) => i !== index)
		onChange(next)
	}

	const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		// Enter, comma, space
		if (e.key === "Tab" || e.key === "Space" || e.key === ",") {
			e.preventDefault()
			addTag(input)
			return
		}
		// Backspace removes last tag when input empty
		if (e.key === "Backspace" && input === "" && values.length > 0) {
			e.preventDefault()
			removeAt(values.length - 1)
			return
		}
	}

	const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault()
		const text = e.clipboardData.getData("text")
		addTag(text)
	}

	return (
		<div className="w-full flex flex-col gap-1 my-2">
			{label ? (
				<strong className="text-xs font-bold text-slate-500">
					{label}
					{required ? <sup className="text-red-600">*</sup> : null}
				</strong>
			) : null}
			<div
				className={
					"flex items-center flex-wrap gap-2 min-h-[40px] rounded-md border px-2 py-1 bg-white " +
					(className || "")
				}
				onClick={() => {
					const el = document.getElementById(id || "")
					if (el) (el as HTMLInputElement).focus()
				}}
			>
				{values.map((tag, idx) => (
					<span
						key={tag + idx}
						className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 text-sm px-2 py-1 rounded"
					>
						<span className="truncate max-w-xs">{tag}</span>
						<button
							type="button"
							aria-label={`Remove ${tag}`}
							onClick={() => removeAt(idx)}
							className="text-xs text-slate-500 hover:text-slate-800"
						>
							×
						</button>
					</span>
				))}

				<input
					id={id}
					value={input}
					onChange={e => setInput(e.target.value)}
					onKeyDown={onKeyDown}
					onPaste={onPaste}
					placeholder={placeholder || "Type and press Enter, comma or space"}
					className="flex-1 min-w-[120px] outline-none p-1 text-sm bg-transparent"
					aria-required={required || undefined}
				/>
			</div>
		</div>
	)
}

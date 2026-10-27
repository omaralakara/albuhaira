import { ArrowRight, ArrowUpRight, Smartphone, Stethoscope } from "lucide-react"

import { IconBadge } from "@/components/site/icon-badge"
import { SmartLink } from "@/components/site/smart-link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import { finder, networkNotice } from "@/content/medical-network"
import { cn } from "@/lib/utils"

type SelectField = (typeof finder.fields)["emirate" | "providerType" | "networkType"]

const labelClass = "text-[0.9375rem] leading-snug font-semibold text-ink"
const hintClass = "text-sm leading-snug text-ink-muted"

/**
 * The provider finder: a real GET form with the live search's own field names
 * and values, so it opens genuine results on albuhaira.com in a new tab.
 * It shows no providers or result counts of its own. Server-rendered, no JS.
 */
export function FinderForm({ className }: { className?: string }) {
  const { emirate, providerType, networkType, keyword } = finder.fields

  return (
    <div className={cn("rounded-3xl border border-line bg-surface", className)}>
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-4">
          <IconBadge icon={Stethoscope} />
          <h3 id="finder-title" className="font-display text-display-3 font-normal text-ink">
            Find a medical provider
          </h3>
        </div>
        {/* What the search covers, before anyone fills it in */}
        <p id="finder-scope" className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
          {networkNotice.scope}
        </p>

        <form
          action={finder.action}
          method="get"
          target="_blank"
          aria-labelledby="finder-title"
          aria-describedby="finder-scope"
          className="mt-8 grid gap-8"
        >
          <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
            <SelectBlock id="finder-emirate" field={emirate} />
            <SelectBlock id="finder-provider-type" field={providerType} />
            <SelectBlock id="finder-network" field={networkType} />

            <div className="grid content-start gap-2.5">
              <Label htmlFor="finder-keyword" className={labelClass}>
                {keyword.label}
              </Label>
              <Input
                id="finder-keyword"
                name={keyword.name}
                type="text"
                autoComplete="off"
                enterKeyHint="search"
                placeholder={keyword.placeholder}
                aria-describedby="finder-keyword-hint"
                className="h-12 rounded-xl bg-surface px-4 text-base text-ink placeholder:text-ink-muted md:text-base"
              />
              <p id="finder-keyword-hint" className={hintClass}>
                {keyword.hint}
              </p>
            </div>
          </div>

          {Object.entries(finder.hiddenDefaults).map(([name, value]) => (
            <input key={name} type="hidden" name={name} value={value} />
          ))}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Search the network
              <ArrowUpRight aria-hidden="true" strokeWidth={2} />
              <span className="sr-only"> (opens in a new tab)</span>
            </Button>
            <p className="text-sm leading-snug text-ink-muted">Results open in the Al Buhaira medical network search.</p>
          </div>
        </form>
      </div>

      <div className="border-t border-line px-6 py-3 sm:px-8 lg:px-10">
        <SmartLink
          href="#digital-services"
          className="group flex min-h-11 items-center gap-3 py-1.5 text-[0.9375rem] leading-snug font-medium text-ink-soft transition-colors hover:text-brand"
        >
          <Smartphone aria-hidden="true" strokeWidth={1.75} className="size-[1.125rem] shrink-0 text-brand" />
          <span className="underline decoration-ink/20 underline-offset-[0.3em] group-hover:decoration-brand">
            Members can also find nearby providers in the ABNIC Health Vault app
          </span>
          <ArrowRight aria-hidden="true" strokeWidth={2} className="ml-auto size-4 shrink-0 text-brand" />
        </SmartLink>
      </div>
    </div>
  )
}

function SelectBlock({ id, field }: { id: string; field: SelectField }) {
  const hint = "hint" in field ? field.hint : undefined
  const hintId = hint ? `${id}-hint` : undefined

  return (
    <div className="grid content-start gap-2.5">
      <Label htmlFor={id} className={labelClass}>
        {field.label}
      </Label>
      <NativeSelect id={id} name={field.name} size="lg" defaultValue="" aria-describedby={hintId} className="w-full">
        <NativeSelectOption value="">{field.placeholder}</NativeSelectOption>
        {field.options.map((option) => (
          <NativeSelectOption key={option.value} value={option.value}>
            {option.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
      {hint && (
        <p id={hintId} className={hintClass}>
          {hint}
        </p>
      )}
    </div>
  )
}

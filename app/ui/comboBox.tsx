"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { DataColumn } from "@/components/colums";

interface ComboBoxProps {
  data: DataColumn[] | any;
  onSelectItem: (id: string) => void;
}

export function ComboBox({ data, onSelectItem }: ComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<{
    institution: string;
    id: string;
  } | null>(null);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={open}
          className="w-40 md:w-56 fixed top-0 justify-between overflow-hidden truncate whitespace-nowrap relative after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-gradient-to-l after:from-[rgba(255,255,255,0.9)] after:to-transparent after:pointer-events-none"
        >
          {selectedItem ? `${selectedItem.institution}` : "Select"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-80" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Search Institution" />
          <CommandList>
            <CommandEmpty>Loading...</CommandEmpty>
            <CommandGroup>
              {data.map((item: any) => (
                <CommandItem
                  key={item.id}
                  value={item.institution}
                  onSelect={() => {
                    setSelectedItem({
                      institution: item.institution,
                      id: item.id,
                    });
                    setOpen(false);
                    onSelectItem(item.id); // Pass the selected id to parent component
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.institution ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.institution}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

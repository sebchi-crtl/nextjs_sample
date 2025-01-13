"use client"

import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "fistName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
]

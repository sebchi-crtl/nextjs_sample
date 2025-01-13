'use client'

import { columns } from '@/components/columns';
import { DataTable } from '@/components/DataTable';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { api } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function TableList() {

  const useStudents = () => {
    return useQuery<Student[]>({
      queryKey: ['students'],
      queryFn: api.fetchStudents
    });
  }

  const { data: students } = useStudents();

  const handleDelete = (id: number) => {
    api.deleteStudent(id);
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={students} />
      </div>
      <Button >Bulk Delete</Button>
    </>
  );
}

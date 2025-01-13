'use client'

import { columns } from '@/components/columns';
import { DataTable } from '@/components/DataTable';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { api } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function TableList() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [bulkDeleteIds, setBulkDeleteIds] = useState<number[]>([]);

  const useStudents = () => {
    return useQuery<Student[]>({
      queryKey: ['students'],
      queryFn: api.fetchStudents,
      staleTime: 1 * 1000,
    });
  }

  const { data: students = [] } = useStudents();

//   const bulkDeleteMutation = useMutation(api.bulkDeleteStudents, {
//     onSuccess: () => queryClient.invalidateQueries(['students']),
//   });


//   const handleBulkDelete = () => {
//     bulkDeleteMutation.mutate(bulkDeleteIds);
//   };

  const handleDelete = (id: number) => {
    api.deleteStudent(id);
  };

  return (
    <>
      <div className="container w-[350px] mx-auto py-10">
        <DataTable columns={columns} data={students} />
      </div>
      {/* <Table data={students || []} onRowClick={setSelectedStudent}>
        <Table.Column title="First Name" field="firstName" />
        <Table.Column title="Last Name" field="lastName" />
        <Table.Column title="age" field="age" />
      </Table>

      <Modal open={!!selectedStudent} onClose={() => setSelectedStudent(null)}>
        <div>
          <h2>{selectedStudent?.firstName}</h2>
          <p>{selectedStudent?.lastName}</p>
          <p>{selectedStudent?.age}</p>
        </div>
      </Modal> */}
      {/* <Button >Bulk Delete</Button> */}
    </>
  );
}

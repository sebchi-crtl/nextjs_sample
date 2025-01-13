'use client'

import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { api } from '@/lib/api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function TableList() {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [bulkDeleteIds, setBulkDeleteIds] = useState<number[]>([]);
  const queryClient = useQueryClient();

//   const { data: students } = useQuery(['students'], api.fetchStudents);

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
      <Button >Bulk Delete</Button>
    </>
  );
}

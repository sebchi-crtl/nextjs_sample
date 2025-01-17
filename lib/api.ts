import { Student } from "@/app/type";

type Students = {
  firstName: string;
  lastName: string;
  age: number;
}
export const api = {
    fetchStudents: async (): Promise<Student[]> => {
      const response = await fetch('/api/students', {
        method: 'GET',
      });
      console.log("fetch", response);
      return response.json();
    },
  
    createStudent: async (data: Students): Promise<Students> => {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error creating student');
      }
      console.log("man", response);
      return response.json();
    },
  
    deleteStudent: async (id: number) => {
      const response = await fetch(`/api/students/${id}`, {
        method: 'DELETE',
      });
      return response.json();
    },
  
    bulkDeleteStudents: async (ids: number[]) => {
      const response = await fetch('/api/students', {
        method: 'DELETE',
        body: JSON.stringify({ ids }),
      });
      return response.json();
    },
  };
  
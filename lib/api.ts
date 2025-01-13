export const api = {
    fetchStudents: async () => {
      const response = await fetch('/api/students');
      return response.json();
    },
  
    createStudent: async (data: any) => {
      const response = await fetch('/api/students', {
        method: 'POST',
        body: JSON.stringify(data),
      });
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
  

// Mock Supabase client for development and testing

export const supabase = {
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (field: string, value: any) => ({
        order: (column: string, { ascending }: { ascending: boolean }) => ({
          limit: (num: number) => ({
            data: [],
            error: null
          })
        })
      }),
      order: (column: string, { ascending }: { ascending: boolean }) => ({
        limit: (num: number) => ({
          data: [],
          error: null
        })
      }),
      lt: (field: string, value: any) => ({
        order: (column: string, { ascending }: { ascending: boolean }) => ({
          limit: (num: number) => ({
            data: [],
            error: null
          })
        })
      }),
      gte: (field: string, value: any) => ({
        order: (column: string, { ascending }: { ascending: boolean }) => ({
          limit: (num: number) => ({
            data: [],
            error: null
          })
        })
      })
    }),
    insert: (data: any) => ({
      data: null,
      error: null
    }),
    update: (data: any) => ({
      eq: (field: string, value: any) => ({
        data: null,
        error: null
      })
    }),
    delete: () => ({
      eq: (field: string, value: any) => ({
        data: null,
        error: null
      })
    })
  })
};

export default supabase;

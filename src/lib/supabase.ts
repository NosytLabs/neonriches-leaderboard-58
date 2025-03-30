
// Mock supabase client implementation
const supabase = {
  from: (table: string) => ({
    select: (query = '*') => ({
      eq: (field: string, value: any) => ({
        order: (column: string, options: { ascending?: boolean } = {}) => ({
          limit: (limit: number) => ({
            then: (callback: any) => {
              // Mock data for different tables
              setTimeout(() => {
                if (table === 'referrals') {
                  callback({
                    data: Array.from({ length: 5 }, (_, i) => ({
                      id: `ref-${i + 1}`,
                      referrer_id: '1',
                      referee_id: `user-${i + 10}`,
                      status: i < 3 ? 'completed' : 'pending',
                      created_at: new Date().toISOString(),
                      referee: {
                        username: `newuser${i + 1}`,
                        display_name: `New User ${i + 1}`,
                        profile_image: `/images/avatars/default${i + 1}.jpg`
                      }
                    })),
                    error: null
                  });
                } else {
                  callback({
                    data: [],
                    error: null
                  });
                }
              }, 500);
            }
          })
        })
      })
    }),
    insert: (data: any) => ({
      then: (callback: any) => {
        setTimeout(() => {
          callback({
            data: { ...data, id: `new-${Date.now()}` },
            error: null
          });
        }, 500);
      }
    })
  }),
  auth: {
    user: () => ({ id: 'current-user-id' })
  }
};

export default supabase;

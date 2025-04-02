
/**
 * Mock Supabase client for development
 */

// Mock Supabase client that can be used in development
const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
    signUp: async () => ({ data: { user: null, session: null }, error: null }),
    signOut: async () => ({ error: null }),
    refreshSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    updateUser: async () => ({ data: { user: null }, error: null })
  },
  from: (table: string) => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        maybeSingle: async () => ({ data: null, error: null }),
        filter: () => ({
          order: () => ({
            range: () => ({ data: [], error: null }),
            limit: () => ({ data: [], error: null }),
            data: [], error: null
          }),
          data: [], error: null
        }),
        data: [], error: null
      }),
      filter: () => ({
        order: () => ({
          range: () => ({ data: [], error: null }),
          limit: () => ({ data: [], error: null }),
          data: [], error: null
        }),
        data: [], error: null
      }),
      order: () => ({
        range: () => ({ data: [], error: null }),
        limit: () => ({ data: [], error: null }),
        data: [], error: null
      }),
      range: () => ({ data: [], error: null }),
      limit: () => ({ data: [], error: null }),
      data: [], error: null
    }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ eq: () => ({ data: null, error: null }) }),
    upsert: () => ({ data: null, error: null }),
    delete: () => ({ eq: () => ({ data: null, error: null }) })
  }),
  storage: {
    from: (bucket: string) => ({
      upload: async () => ({ data: { path: '' }, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
      list: async () => ({ data: [], error: null }),
      remove: async () => ({ data: null, error: null })
    })
  }
};

export { supabase };
export default supabase;

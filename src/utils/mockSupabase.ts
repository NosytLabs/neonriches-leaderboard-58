
// Mock implementation of Supabase client for development
const createMockQueryBuilder = () => {
  const queryBuilder = {
    eq: (field: string, value: any) => queryBuilder,
    neq: (field: string, value: any) => queryBuilder,
    gt: (field: string, value: any) => queryBuilder,
    lt: (field: string, value: any) => queryBuilder,
    gte: (field: string, value: any) => queryBuilder,
    lte: (field: string, value: any) => queryBuilder,
    like: (field: string, value: any) => queryBuilder,
    ilike: (field: string, value: any) => queryBuilder,
    is: (field: string, value: any) => queryBuilder,
    in: (field: string, values: any[]) => queryBuilder,
    contains: (field: string, value: any) => queryBuilder,
    containedBy: (field: string, value: any) => queryBuilder,
    rangeLt: (field: string, range: any) => queryBuilder,
    rangeGt: (field: string, range: any) => queryBuilder,
    rangeGte: (field: string, range: any) => queryBuilder,
    rangeLte: (field: string, range: any) => queryBuilder,
    overlaps: (field: string, value: any) => queryBuilder,
    textSearch: (field: string, query: string) => queryBuilder,
    match: (query: any) => queryBuilder,
    not: (field: string, value: any) => queryBuilder,
    or: (filters: string, { foreignTable }: any = {}) => queryBuilder,
    filter: (column: string, operator: string, value: any) => queryBuilder,
    select: (columns: string) => queryBuilder,
    order: (column: string, { ascending }: { ascending: boolean }) => queryBuilder,
    limit: (count: number) => ({
      data: [],
      error: null
    }),
    single: () => ({
      data: null,
      error: null
    }),
    maybeSingle: () => ({
      data: null, 
      error: null
    })
  };
  
  return queryBuilder;
};

export const supabase = {
  from: (table: string) => createMockQueryBuilder(),
  rpc: (func: string, params?: any) => ({
    data: [],
    error: null
  }),
  auth: {
    signIn: () => Promise.resolve({ user: null, session: null, error: null }),
    signUp: () => Promise.resolve({ user: null, session: null, error: null }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  }
};

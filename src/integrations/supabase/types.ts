export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      certificates: {
        Row: {
          amount_spent: number
          created_at: string
          id: string
          image_uri: string | null
          is_minted: boolean | null
          metadata_uri: string | null
          mint_address: string | null
          minted_at: string | null
          rank: number
          user_id: string
        }
        Insert: {
          amount_spent: number
          created_at?: string
          id?: string
          image_uri?: string | null
          is_minted?: boolean | null
          metadata_uri?: string | null
          mint_address?: string | null
          minted_at?: string | null
          rank: number
          user_id: string
        }
        Update: {
          amount_spent?: number
          created_at?: string
          id?: string
          image_uri?: string | null
          is_minted?: boolean | null
          metadata_uri?: string | null
          mint_address?: string | null
          minted_at?: string | null
          rank?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      deposits: {
        Row: {
          amount: number
          created_at: string
          id: string
          sol_price_usd: number | null
          solana_amount: number | null
          transaction_signature: string | null
          user_id: string
          verified: boolean | null
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          sol_price_usd?: number | null
          solana_amount?: number | null
          transaction_signature?: string | null
          user_id: string
          verified?: boolean | null
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          sol_price_usd?: number | null
          solana_amount?: number | null
          transaction_signature?: string | null
          user_id?: string
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "deposits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deposits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "deposits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard_snapshots: {
        Row: {
          amount_spent: number
          created_at: string
          id: string
          rank: number
          snapshot_date: string
          user_id: string
        }
        Insert: {
          amount_spent: number
          created_at?: string
          id?: string
          rank: number
          snapshot_date: string
          user_id: string
        }
        Update: {
          amount_spent?: number
          created_at?: string
          id?: string
          rank?: number
          snapshot_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_snapshots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leaderboard_snapshots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leaderboard_snapshots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          bio: string | null
          display_name: string | null
          email: string | null
          gender: string | null
          id: string
          joined_at: string
          profile_image: string | null
          team: string | null
          tier: string
          updated_at: string
          username: string
          wallet_address: string | null
        }
        Insert: {
          bio?: string | null
          display_name?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          joined_at?: string
          profile_image?: string | null
          team?: string | null
          tier?: string
          updated_at?: string
          username: string
          wallet_address?: string | null
        }
        Update: {
          bio?: string | null
          display_name?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          joined_at?: string
          profile_image?: string | null
          team?: string | null
          tier?: string
          updated_at?: string
          username?: string
          wallet_address?: string | null
        }
        Relationships: []
      }
      withdrawals: {
        Row: {
          amount: number
          created_at: string
          id: string
          sol_price_usd: number | null
          solana_amount: number | null
          transaction_signature: string | null
          user_id: string
          verified: boolean | null
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          sol_price_usd?: number | null
          solana_amount?: number | null
          transaction_signature?: string | null
          user_id: string
          verified?: boolean | null
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          sol_price_usd?: number | null
          solana_amount?: number | null
          transaction_signature?: string | null
          user_id?: string
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "withdrawals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "withdrawals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "leaderboard_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "withdrawals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      leaderboard: {
        Row: {
          current_balance: number | null
          display_name: string | null
          id: string | null
          joined_at: string | null
          profile_image: string | null
          rank: number | null
          recent_deposits_count: number | null
          team: string | null
          tier: string | null
          total_deposited: number | null
          username: string | null
        }
        Relationships: []
      }
      leaderboard_view: {
        Row: {
          current_balance: number | null
          display_name: string | null
          id: string | null
          is_ranked: boolean | null
          joined_at: string | null
          profile_image: string | null
          rank: number | null
          recent_deposits_count: number | null
          team: string | null
          tier: string | null
          total_deposited: number | null
          username: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_user_current_balance: {
        Args: {
          user_uuid: string
        }
        Returns: number
      }
      get_user_rank: {
        Args: {
          user_uuid: string
        }
        Returns: number
      }
      get_user_total_deposits: {
        Args: {
          user_uuid: string
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

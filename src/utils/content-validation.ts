
import { z } from 'zod';

// Define the schema for noble titles
export const nobleTitleSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters")
    .refine(title => !title.includes("@"), "Title cannot contain @ symbol")
    .refine(title => !/^\s|\s$/.test(title), "Title cannot start or end with whitespace"),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(200, "Description cannot exceed 200 characters"),
  tier: z.enum(["crab", "octopus", "fish", "dolphin", "shark", "whale"]),
  createdAt: z.date().optional(),
  userId: z.string().uuid(),
  isApproved: z.boolean().default(false),
  isPurchased: z.boolean().default(false),
  price: z.number().min(0),
});

// Define the schema for user status updates
export const statusUpdateSchema = z.object({
  id: z.string().uuid().optional(),
  content: z.string()
    .min(1, "Status cannot be empty")
    .max(280, "Status cannot exceed 280 characters"),
  createdAt: z.date().optional(),
  userId: z.string().uuid(),
  visibility: z.enum(["public", "team", "private"]).default("public"),
  mentions: z.array(z.string()).optional(),
  likes: z.number().default(0),
  isPromoted: z.boolean().default(false),
});

// Type definitions based on schemas
export type NobleTitle = z.infer<typeof nobleTitleSchema>;
export type StatusUpdate = z.infer<typeof statusUpdateSchema>;

// Error handling for duplicate titles
export class DuplicateTitleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DuplicateTitleError";
  }
}

// Helper function to check for duplicate titles
export const checkDuplicateTitle = async (
  title: string,
  existingTitles: NobleTitle[]
): Promise<boolean> => {
  const normalizedTitle = title.toLowerCase().trim();
  return existingTitles.some(
    (existing) => existing.title.toLowerCase().trim() === normalizedTitle
  );
};

// Validate a noble title
export const validateNobleTitle = async (
  title: Partial<NobleTitle>,
  existingTitles: NobleTitle[] = []
): Promise<{ success: boolean; data?: NobleTitle; error?: string }> => {
  try {
    // First validate the schema
    const validatedData = nobleTitleSchema.parse(title);
    
    // Then check for duplicates
    if (await checkDuplicateTitle(validatedData.title, existingTitles)) {
      throw new DuplicateTitleError(
        "This noble title already exists. Please choose another."
      );
    }
    
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((e) => e.message).join(", ");
      return { success: false, error: errorMessage };
    }
    
    if (error instanceof DuplicateTitleError) {
      return { success: false, error: error.message };
    }
    
    return {
      success: false,
      error: "Failed to validate noble title: " + (error as Error).message,
    };
  }
};

// Validate a status update
export const validateStatusUpdate = (
  status: Partial<StatusUpdate>
): { success: boolean; data?: StatusUpdate; error?: string } => {
  try {
    const validatedData = statusUpdateSchema.parse(status);
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map((e) => e.message).join(", ");
      return { success: false, error: errorMessage };
    }
    
    return {
      success: false,
      error: "Failed to validate status update: " + (error as Error).message,
    };
  }
};

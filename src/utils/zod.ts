import { z } from "zod";

export const isEmoji = z.string().emoji().min(1).max(255);

import { z } from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(1,{message: "Tên không được để trống"}),
  price: z.number().min(1,{message: "giá tiền tối thiểu là 1"}),
  detailDesc: z.string().trim().min(1,{message: "detailDesc không được để trống"}),
  shortDesc: z.string().trim().min(1,{message: "shortDesc không được để trống"}),
  quantity: z.number().min(1,{message: "số lượng tối thiểu là 1"}),
  factory: z.string().trim().min(1,{message: "factory không được để trống"}),
  target: z.string().trim().min(1,{message: "target không được để trống"}),
});

export type TProductSchema = z.infer<typeof productSchema>;
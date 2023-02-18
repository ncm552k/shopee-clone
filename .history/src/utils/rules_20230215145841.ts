import type { RegisterOptions } from "react-hook-form"

type Rule ={[key : string]: RegisterOptions}

export const rules = {
  email:{
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email không đúng định dạng'
    },
    minLength:{
      value: 5,
      message: "Độ dài từ 5 - 160 ký tự"
    },
    maxLength:{
      value: 160,
      message: "Độ dài từ 5 - 160 ký tự"
    }
  }
}
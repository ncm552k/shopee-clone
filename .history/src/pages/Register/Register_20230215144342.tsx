import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  placeholder='Email'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email là bắt buộc'
                    },
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Email không đúng định dạng'
                    }
                  })}
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  placeholder='Password'
                  {...register('password')}
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'></div>
              </div>

              <div className='mt-3'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  placeholder='Confirm Password'
                  {...register('confirm_password')}
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'></div>
              </div>

              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng ký
                </button>
              </div>

              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

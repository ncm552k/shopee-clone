import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <header className='py-5'>
      <div className='container'>
	@@ -12,7 +14,7 @@ export default function RegisterHeader() {
              </g>
            </svg>
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}

import {AlertCircle} from 'lucide-react';

export default function NotFound() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50 px-4'>
      <div className='w-full max-w-md bg-white shadow-md rounded-xl p-6'>
        <div className='flex items-center gap-3 mb-4'>
          <AlertCircle className='h-8 w-8 text-red-500' />
          <h1 className='text-2xl font-bold text-gray-900'>
            404 — Страница не найдена
          </h1>
        </div>

        <p className='text-gray-600 text-sm'>
          Похоже, вы перешли по неверному адресу. Вернитесь на главную страницу.
        </p>
      </div>
    </div>
  );
}


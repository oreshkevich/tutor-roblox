import {motion} from 'framer-motion';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {Send, Loader2} from 'lucide-react';
import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Пожалуйста, введите ваше имя'),
  email: z.string().email('Введите корректный email адрес'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const EMAILJS_PUBLIC_KEY = '6NcNI4V84nXoFTdRg';
const EMAILJS_SERVICE_ID = 'service_4t5wg1e';
const EMAILJS_TEMPLATE_ID = 'template_vh6hm6a';

export function Contact() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSending(true);

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      alert('Заявка отправлена! Я свяжусь с вами в ближайшее время.');
      reset();
    } catch (error) {
      console.error(error);
      alert('Ошибка отправки. Попробуйте еще раз.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-white to-primary/5 -z-10'></div>

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-[2.5rem] shadow-2xl border border-primary/10 overflow-hidden flex flex-col lg:flex-row'>
          {/* LEFT INFO */}
          <div className='lg:w-2/5 bg-primary p-10 lg:p-12 text-white relative overflow-hidden'>
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div>
                <h3 className='text-3xl font-bold mb-4'>Давайте начнем!</h3>

                <p className='text-primary-foreground/80 text-lg mb-8'>
                  Заполните форму, и я свяжусь с вами для обсуждения деталей и
                  назначения пробного урока.
                </p>

                <div className='space-y-6'>
                  <div className='flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10'>
                    <div className='text-2xl'>🎁</div>

                    <div>
                      <div className='font-bold'>Скидка</div>
                      <div className='text-sm text-primary-foreground/80'>
                        При занятиях 3+ раза в неделю
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-12 text-primary-foreground/60 text-sm'>
                На любые вопросы с радостью отвечу в личных сообщениях.
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className='lg:w-3/5 p-10 lg:p-12'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-6'>
                {/* NAME */}
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-foreground/80'>
                    Ваше имя
                  </label>

                  <input
                    {...register('name')}
                    name='name'
                    className='w-full px-4 py-3 rounded-xl bg-slate-50 border border-border focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all'
                    placeholder='Иван Иванов'
                  />

                  {errors.name && (
                    <p className='text-sm text-red-500'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div className='space-y-2'>
                  <label className='text-sm font-semibold text-foreground/80'>
                    Email
                  </label>

                  <input
                    {...register('email')}
                    name='email'
                    type='email'
                    className='w-full px-4 py-3 rounded-xl bg-slate-50 border border-border focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all'
                    placeholder='email@example.com'
                  />

                  {errors.email && (
                    <p className='text-sm text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* PHONE */}
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground/80'>
                  Телефон (необязательно)
                </label>

                <input
                  {...register('phone')}
                  name='phone'
                  type='tel'
                  className='w-full px-4 py-3 rounded-xl bg-slate-50 border border-border focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all'
                  placeholder='+7 (999) 000-00-00'
                />
              </div>

              {/* MESSAGE */}
              <div className='space-y-2'>
                <label className='text-sm font-semibold text-foreground/80'>
                  Возраст ребенка и ваши пожелания
                </label>

                <textarea
                  {...register('message')}
                  name='message'
                  rows={4}
                  className='w-full px-4 py-3 rounded-xl bg-slate-50 border border-border focus:bg-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none'
                  placeholder='Ребенку 10 лет, любит играть в Roblox...'
                />

                {errors.message && (
                  <p className='text-sm text-red-500'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type='submit'
                disabled={isSending}
                className='w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2'
              >
                {isSending ? (
                  <>
                    <Loader2 className='w-5 h-5 animate-spin' />
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <Send className='w-5 h-5' />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


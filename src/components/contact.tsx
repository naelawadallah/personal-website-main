import { useState, useRef } from 'react';
import { Variants, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionWrapper from './sectionWrapper';
import { slideIn } from '../utils/motion';
import DogCanvas from './dog';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {};
  const handleSubmit = (e: any) => {};

  return (
    <div className='pointer-events-auto flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1) as Variants} className='flex-[0.75] rounded-2xl bg-secondary p-8'>
        <p className='section-subtitle'>Get in touch</p>
        <h3 className='section-title'>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-text'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='outlined-none rounded-lg border-none bg-background px-6 py-4 font-medium text-text placeholder:opacity-75'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-text'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='outlined-none rounded-lg border-none bg-background px-6 py-4 font-medium text-text placeholder:opacity-75'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 font-medium text-text'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='outlined-none rounded-lg border-none bg-background px-6 py-4 font-medium text-text placeholder:opacity-75'
            />
          </label>

          <button
            type='submit'
            className='w-fit rounded-xl bg-primary px-8 py-3 font-semibold text-text outline-none transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1) as Variants} className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'>
        {/* <DogCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
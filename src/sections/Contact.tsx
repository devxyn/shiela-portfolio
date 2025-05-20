import { contactData } from "@/utils/data";
import { useRef, useState, type JSX } from "react";
import emailjs from "@emailjs/browser";
import Loader from "@/components/Loader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const mailer = {
    serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formRef.current) {
        const res = await emailjs.sendForm(mailer.serviceId, mailer.templateId, formRef.current, mailer.publicKey);

        if (res.status === 200) setIsSent(true);
      }
    } catch (error) {
      console.error("EMAILJS ERROR: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMessage = () => {
    let message: string | JSX.Element = "Send Message";

    if (isSent) {
      message = "Message sent!";
    }

    if (!isSent && loading) {
      message = <Loader />;
    }

    return message;
  };

  return (
    <>
      <section
        id='contact'
        className='flex flex-col items-start justify-center gap-10 bg-cover bg-center py-10 md:pt-20'
        style={{
          backgroundImage: "url('/images/background.png')",
        }}>
        <div className='md:flex md:flex-row md:items-center lg:w-full lg:gap-20 lg:px-20'>
          <div className='w-full'>
            <h2 className='text-4xl md:text-3xl lg:text-5xl leading-normal font-petrona'>
              Looking forward to <span className='font-semibold italic'>connect with you!</span>
            </h2>
            <div className='text-left my-6'>
              <h3 className='text-text text-lg md:text-base uppercase mb-3'>Contacts</h3>
              <div className='flex flex-col gap-2'>
                {contactData?.map((data) => (
                  <div key={data.label} className='flex items-center gap-2'>
                    <img src={data.logo} alt={data.label} className='w-6 h-6' />
                    <a href={data.link} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                      {data.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='bg-white-50 rounded-xl w-full md:w-2/3 lg:w-full p-5 md:p-6 lg:p-10 flex flex-col gap-5'>
            <h4 className='md:text-lg font-500 md:font-semibold lg:text-2xl'>Let’s chat 🗣️</h4>
            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Name</label>
              <input
                className='bg-gray-50 px-4 py-3 rounded-xl'
                type='text'
                name='name'
                id='name'
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleChange}
                disabled={isSent}
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                className='bg-gray-50 px-4 py-3 rounded-xl'
                type='email'
                name='email'
                id='email'
                placeholder="What's your email address?"
                value={formData.email}
                onChange={handleChange}
                disabled={isSent}
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='bg-gray-50 px-4 py-3 rounded-xl'
                name='message'
                id='message'
                rows={5}
                placeholder='How can I help you?'
                value={formData.message}
                onChange={handleChange}
                disabled={isSent}
                required
              />
            </div>
            <button
              disabled={loading || isSent}
              type='submit'
              className='bg-blue-50 px-4 py-2 rounded-lg md:rounded-xl lg:text-lg cursor-pointer disabled:bg-blue-50/50 disabled:cursor-not-allowed'>
              {handleMessage()}
            </button>
          </form>
        </div>
        <footer className='w-full text-left'>
          <p className='text-xs'>ⓒ Shiela Mae Palad {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default Contact;

import React from 'react'

const Footear = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Shipping Info', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Return Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ],
    social: [
      { name: 'Facebook', icon: '📘', href: '#' },
      { name: 'Twitter', icon: '𝕏', href: '#' },
      { name: 'Instagram', icon: '📷', href: '#' },
      { name: 'LinkedIn', icon: '💼', href: '#' }
    ]
  }

  return (
    <footer className='w-full bg-black text-white py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          
          {/* Company Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className='text-gray-300 hover:text-white hover:underline transition'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Support</h3>
            <ul className='space-y-2'>
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className='text-gray-300 hover:text-white hover:underline transition'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              {footerLinks.legal.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className='text-gray-300 hover:text-white hover:underline transition'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Connect With Us</h3>
            <p className='text-gray-300 mb-4'>Email: support@ecommerce.com</p>
            <p className='text-gray-300 mb-4'>Phone: +1 (555) 123-4567</p>
            <div className='flex gap-4'>
              {footerLinks.social.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href} 
                  className='text-2xl hover:scale-110 transition transform'
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className='border-gray-700 my-8' />

        {/* Bottom Footer */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-gray-400 text-sm mb-4 md:mb-0'>
            © 2024 ECommerce Store. All rights reserved.
          </div>
          <div className='text-gray-400 text-sm'>
            Designed with ❤️ | Made for you
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footear
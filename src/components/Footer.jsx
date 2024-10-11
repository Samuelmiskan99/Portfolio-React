function Footer() {
   return (
      <div className='w-full text-center py-4 text-sm text-gray-500 border-t border-gray-300'>
         <p>&copy; {new Date().getFullYear()} Samuel Miskan. All rights reserved.</p>
         <p>Licensed under MIT License.</p>
      </div>
   );
}

export default Footer;

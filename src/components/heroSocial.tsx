import { motion, Variants } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const HeroSocial = () => {
  return (
    <div className='mt-5 flex gap-3'>
      <a href='https://www.linkedin.com/in/michaelbrusegard/' target='_blank' rel='noreferrer' className='h-9 w-9 cursor-pointer'>
        <motion.svg
          width='100%'
          height='100%'
          viewBox='0 0 256 256'
          className='text-text hover:text-primary'
          variants={fadeIn('left', '', 2.0, 0.5) as Variants}
          initial='hidden'
          animate='show'
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <path
            d='M58.4,80.571C46.229,80.571 36.4,70.686 36.4,58.571C36.4,46.457 46.229,36.571 58.4,36.571C70.514,36.571 80.4,46.457 80.4,58.571C80.4,70.743 70.571,80.571 58.4,80.571Z'
            className='fill-background'
          />
          <rect x='39.429' y='97.257' width='38' height='122.171' className='fill-background' />
          <path
            d='M219.6,219.429L181.657,219.429L181.657,160C181.657,145.829 181.371,127.6 161.943,127.6C142.171,127.6 139.143,143.029 139.143,158.971L139.143,219.429L101.2,219.429L101.2,97.257L137.6,97.257L137.6,113.943L138.114,113.943C143.2,104.343 155.6,94.229 174.057,94.229C212.457,94.229 219.6,119.543 219.6,152.457L219.6,219.429Z'
            className='fill-background'
          />
          <g transform='matrix(0.571429,0,0,0.571429,0,-18.2857)'>
            <path
              d='M416,32L31.9,32C14.3,32 0,46.5 0,64.3L0,447.7C0,465.5 14.3,480 31.9,480L416,480C433.6,480 448,465.5 448,447.7L448,64.3C448,46.5 433.6,32 416,32ZM135.5,416L69,416L69,202.2L135.5,202.2L135.5,416ZM102.2,173C80.9,173 63.7,155.7 63.7,134.5C63.7,113.3 80.9,96 102.2,96C123.4,96 140.7,113.3 140.7,134.5C140.7,155.8 123.5,173 102.2,173ZM384.3,416L317.9,416L317.9,312C317.9,287.2 317.4,255.3 283.4,255.3C248.8,255.3 243.5,282.3 243.5,310.2L243.5,416L177.1,416L177.1,202.2L240.8,202.2L240.8,231.4L241.7,231.4C250.6,214.6 272.3,196.9 304.6,196.9C371.8,196.9 384.3,241.2 384.3,298.8L384.3,416Z'
              fill='currentColor'
            />
          </g>
        </motion.svg>
      </a>
      <a href='https://github.com/michaelbrusegard/' target='_blank' rel='noreferrer' className='h-9 w-9 cursor-pointer'>
        <motion.svg
          width='100%'
          height='100%'
          viewBox='0 0 256 256'
          className='text-text hover:text-primary'
          variants={fadeIn('left', '', 2.5, 0.5) as Variants}
          initial='hidden'
          animate='show'
          whileHover={{ translateY: '-2px' }}
          transition={{ duration: 0.2 }}
        >
          <g transform='matrix(0.571429,0,0,0.571429,1.4988e-14,-18.2857)'>
            <path
              d='M277.3,415.7C268.9,417.2 265.8,412 265.8,407.7C265.8,402.3 266,374.7 266,352.4C266,336.8 260.8,326.9 254.7,321.7C291.7,317.6 330.7,312.5 330.7,248.6C330.7,230.4 324.2,221.3 313.6,209.6C315.3,205.3 321,187.6 311.9,164.6C298,160.3 266.2,182.5 266.2,182.5C253,178.8 238.7,176.9 224.6,176.9C210.5,176.9 196.2,178.8 183,182.5C183,182.5 151.2,160.3 137.3,164.6C128.2,187.5 133.8,205.2 135.6,209.6C125,221.3 120,230.4 120,248.6C120,312.2 157.3,317.6 194.3,321.7C189.5,326 185.2,333.4 183.7,344C174.2,348.3 149.9,355.7 135.4,330.1C126.3,314.3 109.9,313 109.9,313C93.7,312.8 108.8,323.2 108.8,323.2C119.6,328.2 127.2,347.4 127.2,347.4C136.9,377.1 183.3,367.1 183.3,367.1C183.3,381 183.5,403.6 183.5,407.7C183.5,412 180.5,417.2 172,415.7C106,393.6 59.8,330.8 59.8,257.4C59.8,165.6 130,95.9 221.8,95.9C313.6,95.9 388,165.6 388,257.4C388.1,330.8 343.3,393.7 277.3,415.7Z'
              className='fill-background'
            />
          </g>
          <g transform='matrix(0.571429,0,0,0.571429,1.4988e-14,-18.2857)'>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M69.371,165.143C69.143,165.657 68.4,165.772 67.771,165.372C67.029,165.029 66.686,164.4 66.914,163.886C67.143,163.543 67.771,163.372 68.514,163.657C69.257,164.057 69.6,164.686 69.371,165.143Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M73.2,169.372C72.686,169.886 71.829,169.6 71.2,169.029C70.571,168.286 70.457,167.429 70.971,167.029C71.486,166.514 72.343,166.8 72.971,167.372C73.6,168.114 73.714,168.972 73.2,169.372Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M76.914,174.914C76.4,175.257 75.429,174.914 74.8,174.057C74.171,173.2 74.171,172.229 74.8,171.829C75.429,171.314 76.4,171.714 76.914,172.572C77.543,173.429 77.543,174.457 76.914,174.914Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M82.114,180.114C81.6,180.743 80.514,180.629 79.657,179.772C78.8,179.029 78.571,177.943 79.143,177.429C79.657,176.8 80.743,176.914 81.6,177.772C82.343,178.514 82.629,179.657 82.114,180.114Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M89.143,183.2C88.914,183.943 87.771,184.286 86.8,183.943C85.714,183.714 84.971,182.857 85.2,182.114C85.429,181.372 86.571,181.029 87.543,181.257C88.686,181.6 89.429,182.457 89.143,183.2Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M102.4,184.343C101.314,184.572 100.286,184.114 100.172,183.372C100.057,182.514 100.8,181.772 101.886,181.543C102.972,181.429 104,181.886 104.114,182.629C104.286,183.372 103.543,184.114 102.4,184.343Z'
                className='fill-background'
              />
            </g>
            <g transform='matrix(1.75,0,0,1.75,-2.6229e-14,32)'>
              <path
                d='M96.972,183.829C96.972,184.572 96.114,185.2 94.971,185.2C93.714,185.314 92.857,184.686 92.857,183.829C92.857,183.086 93.714,182.457 94.857,182.457C95.943,182.343 96.972,182.972 96.972,183.829Z'
                className='fill-background'
              />
            </g>
            <path
              d='M400,32L48,32C21.5,32 0,53.5 0,80L0,432C0,458.5 21.5,480 48,480L400,480C426.5,480 448,458.5 448,432L448,80C448,53.5 426.5,32 400,32ZM277.3,415.7C268.9,417.2 265.8,412 265.8,407.7C265.8,402.3 266,374.7 266,352.4C266,336.8 260.8,326.9 254.7,321.7C291.7,317.6 330.7,312.5 330.7,248.6C330.7,230.4 324.2,221.3 313.6,209.6C315.3,205.3 321,187.6 311.9,164.6C298,160.3 266.2,182.5 266.2,182.5C253,178.8 238.7,176.9 224.6,176.9C210.5,176.9 196.2,178.8 183,182.5C183,182.5 151.2,160.3 137.3,164.6C128.2,187.5 133.8,205.2 135.6,209.6C125,221.3 120,230.4 120,248.6C120,312.2 157.3,317.6 194.3,321.7C189.5,326 185.2,333.4 183.7,344C174.2,348.3 149.9,355.7 135.4,330.1C126.3,314.3 109.9,313 109.9,313C93.7,312.8 108.8,323.2 108.8,323.2C119.6,328.2 127.2,347.4 127.2,347.4C136.9,377.1 183.3,367.1 183.3,367.1C183.3,381 183.5,403.6 183.5,407.7C183.5,412 180.5,417.2 172,415.7C106,393.6 59.8,330.8 59.8,257.4C59.8,165.6 130,95.9 221.8,95.9C313.6,95.9 388,165.6 388,257.4C388.1,330.8 343.3,393.7 277.3,415.7ZM179.2,354.6C177.3,355 175.5,354.2 175.3,352.9C175.1,351.4 176.4,350.1 178.3,349.7C180.2,349.5 182,350.3 182.2,351.6C182.5,352.9 181.2,354.2 179.2,354.6ZM169.7,353.7C169.7,355 168.2,356.1 166.2,356.1C164,356.3 162.5,355.2 162.5,353.7C162.5,352.4 164,351.3 166,351.3C167.9,351.1 169.7,352.2 169.7,353.7ZM156,352.6C155.6,353.9 153.6,354.5 151.9,353.9C150,353.5 148.7,352 149.1,350.7C149.5,349.4 151.5,348.8 153.2,349.2C155.2,349.8 156.5,351.3 156,352.6ZM143.7,347.2C142.8,348.3 140.9,348.1 139.4,346.6C137.9,345.3 137.5,343.4 138.5,342.5C139.4,341.4 141.3,341.6 142.8,343.1C144.1,344.4 144.6,346.4 143.7,347.2ZM134.6,338.1C133.7,338.7 132,338.1 130.9,336.6C129.8,335.1 129.8,333.4 130.9,332.7C132,331.8 133.7,332.5 134.6,334C135.7,335.5 135.7,337.3 134.6,338.1ZM128.1,328.4C127.2,329.3 125.7,328.8 124.6,327.8C123.5,326.5 123.3,325 124.2,324.3C125.1,323.4 126.6,323.9 127.7,324.9C128.8,326.2 129,327.7 128.1,328.4ZM121.4,321C121,321.9 119.7,322.1 118.6,321.4C117.3,320.8 116.7,319.7 117.1,318.8C117.5,318.2 118.6,317.9 119.9,318.4C121.2,319.1 121.8,320.2 121.4,321Z'
              fill='currentColor'
            />
          </g>
        </motion.svg>
      </a>
    </div>
  );
};

export default HeroSocial;
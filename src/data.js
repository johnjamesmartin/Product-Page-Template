const baseUrl = 'https://images.pexels.com/photos/';
const params = 'auto=compress&cs=tinysrgb&dpr=2&w=500';
const imgIds = ['936132', '434298', '995817'];

const data = {
  navbarItems: ['Features', 'How it works', 'Pricing'],
  features: [
    {
      title: 'Product feature 1',
      description: 'Lorem ipsum dolor sit amet.',
      classActive: true,
      image: {
        alt: 'Slide image 1',
        src: `${baseUrl}${imgIds[0]}/pexels-photo-${imgIds[0]}.jpeg?${params}`
      }
    },
    {
      title: 'Product feature 2',
      description: 'Nullam et nibh eu odio faucibus porttitor.',
      classActive: false,
      image: {
        alt: 'Slide image 2',
        src: `${baseUrl}/${imgIds[1]}/pexels-photo-${imgIds[1]}.jpeg?${params}`
      }
    },
    {
      title: 'Product feature 3',
      description: 'Integer facilisis ac diam eu rhoncus.',
      classActive: false,
      image: {
        alt: 'Slide image 3',
        src: `${baseUrl}/${imgIds[2]}/pexels-photo-${imgIds[2]}.jpeg?${params}`
      }
    }
  ],

  steps: {
    title: 'How it works',
    description: 'A brief overview',
    arr: [
      {
        title: 'Step 1: Buy',
        image: [1, 'gift'],
        description: 'Lorem ipsum dolor sit amet.'
      },
      {
        title: 'Step 2: Consume',
        image: [1, 'cog'],
        description: 'Consectetur adipiscing elit.'
      },
      {
        title: 'Step 3: Enjoy',
        image: [1, 'smile'],
        description: 'Sed do eiusmod tempor incididunt.'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/2YBtspm8j8M'
  },

  pricing: {
    title: 'Pricing',
    description: 'Purchasing options',
    arr: [
      {
        title: 'Basic',
        price: '£50',
        selectText: 'Select',
        features: ['Enim neque', 'Nibh ipsum', 'Vitae tempus']
      },
      {
        title: 'Standard',
        price: '£100',
        selectText: 'Select',
        features: ['Anim id est laborum', 'Dolor sit amet', 'Sunt in culpa']
      },
      {
        title: 'Supreme',
        price: '£150',
        selectText: 'Select',
        features: [
          'Duis aute irure',
          'Incididunt ut labore',
          'Dolare magna aliqua'
        ]
      }
    ]
  }
};

export default data;

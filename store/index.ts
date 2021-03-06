import { Context } from '@nuxt/types';
import { createLogger } from 'vuex';

export const plugins = [createLogger()];

export interface Product {
  id: number;
  title: string;
  snippet: string;
  description: string;
  image: string;
}

export interface DateRange {
  start: Date;
  end: Date;
}
export interface Rental extends Product {
  dateRange: DateRange;
}

export interface RootState {
  products: Product[];
  myRentals: Rental[];
}

export const state = (): RootState => ({
  products: [
    {
      id: 1,
      title: 'Dry Powder Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe7.jpg',
    },
    {
      id: 2,
      title: '2L Portable & Safe',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe8.jpg',
    },
    {
      id: 3,
      title: '2L Portable & Safe',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe9.jpg',
    },
    {
      id: 4,
      title: 'Cartridge Operated Dry Chemical Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe10.jpg',
    },
    {
      id: 5,
      title: 'Clean Agent Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe11.jpg',
    },
    {
      id: 6,
      title: 'Water Mist',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe12.jpg',
    },
    {
      id: 7,
      title: 'Clean Agent Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe13.jpg',
    },
    {
      id: 8,
      title: '2L Portable & Safe',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe14.jpg',
    },
    {
      id: 9,
      title: 'Water & Foam Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe15.jpg',
    },
    {
      id: 10,
      title: 'Clean Agent Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe16.jpg',
    },
    {
      id: 11,
      title: 'Water Mist',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe17.jpeg',
    },
    {
      id: 12,
      title: '2L Portable & Safe',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe18.jpg',
    },
    {
      id: 13,
      title: 'Water Mist',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe19.jpg',
    },
    {
      id: 14,
      title: 'Clean Agent',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe20.jpg',
    },
    {
      id: 15,
      title: 'ABC Powder Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe21.jpg',
    },
    {
      id: 16,
      title: 'Carbon Dioxide Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe22.jpg',
    },
    {
      id: 17,
      title: 'Wet Chemical Fire Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe23.jpg',
    },
    {
      id: 18,
      title: 'Dry Powder Extinguisher',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe24.jpg',
    },
    {
      id: 19,
      title: "Toronto's Portable 2L Fire Extinguisher",
      snippet:
        'This fire extinguisher saved homes from completely burning down. People that used it only had 98% of their homes burned down.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe1.jpg',
    },
    {
      id: 20,
      title: 'Empty Super Red Fire Extinguisher',
      snippet:
        "This is one of the most red fire extinguishers you will ever see. Super clean. It's pretty much useless otherwise.",
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe2.jpg',
    },
    {
      id: 21,
      title: 'Fire Extinguisher, Perfect for Pools',
      snippet:
        'If you ever find that your pool is on fire then this is the fire extinguisher for you. It has a 100% success rate.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe3.jpg',
    },
    {
      id: 22,
      title: 'Vintage 1864 Fire Extinguisher',
      snippet:
        "This is hands down the worst fire extinguisher you can use in a crisis. The radiation will kill you if the fire doesn't",
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe4.png',
    },
    {
      id: 23,
      title: 'Pure Silver & Gold Fire Extinguisher',
      snippet:
        'This one is made out of 50k worth of pure silver and white gold. The metal choice was a poor for functionality, but was great for style!',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe5.png',
    },
    {
      id: 24,
      title: 'Two in One Fire Extinguisher',
      snippet:
        "This is the first ever two in one fire extinguisher. Good if both you and your friend's houses are burining down",
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe6.jpg',
    },
  ],
  myRentals: [
    {
      id: 1,
      title: '2L Portable & Safe',
      snippet:
        'Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!',
      image: 'fe7.jpg',
      dateRange: {
        start: new Date(),
        end: new Date(),
      },
    },
  ],
});

export const mutations = {
  rent(
    this: Context,
    state: RootState,
    { productId, dateRange }: { productId: number; dateRange: DateRange }
  ) {
    this.$logger('mutations');

    const product = state.products.find((p) => p.id === productId);
    if (!product) return;
    state.myRentals.push({
      ...product,
      dateRange,
    });
  },
};

export const getters = {
  productById(state: RootState) {
    return function (id: number) {
      return state.products.find((p) => p.id === id);
    };
  },
};

export const actions = {
  // When mode is universal, Nuxt will call nuxtServerInit with the context from the server-side.
  // It's useful when we have some data on the server we want to give directly to the client-side.

  // @ts-ignore
  async nuxtServerInit({ commit }, { req }) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    console.log('nuxtServerInit - req', req);
  },
};

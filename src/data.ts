import { Metadata } from "next";
import { FaLinkedin, FaTwitter, FaGithub, FaDribbble, FaInstagram, FaMedium } from 'react-icons/fa';
import { ContactInfo, ContactUsData, HowItWorksData, IntegrationData, MainCatchCardData } from "./types";
import { faArrowAltCircleDown, faChartBar, faCheckCircle, faDollarSign, faSync, faUser } from "@fortawesome/free-solid-svg-icons";
import { PricingCardProps } from "./components/pricing-card/PricingCard";
import { HeroProps } from "./components/hero-card/HeroCard";

export const metaData: Metadata = {
    title: "Quick Pay",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fugit illo! Eos, iure molestias. Perspiciatis eius consequatur eos excepturi necessitatibus facere quam animi molestias rerum, eum accusamus nulla, voluptatem provident!",
};

export const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    {
        name: 'Pages',
        subItems: [
            { name: 'Pricing', href: '#pricing' },
            { name: 'Contact Us', href: '#contact' },
            { name: 'Team', href: '#team' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'FAQs', href: '#faqs' },
        ],
    }
];

[{
    "resource": "/c:/Users/Nkengbeza/Documents/QuickPay/quick-pay-web-client/src/data.ts",
    "owner": "typescript",
    "code": "2749",
    "severity": 8,
    "message": "'FiArrowRightCircle' refers to a value, but is being used as a type here. Did you mean 'typeof FiArrowRightCircle'?",
    "source": "ts",
    "startLineNumber": 40,
    "startColumn": 16,
    "endLineNumber": 40,
    "endColumn": 34
}]

export const whatWeOfferCardData = [
    {
        imgSrc: '/assets/icon-3.png',
        title: 'lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
    {
        imgSrc: '/assets/icon-3.png',
        title: 'lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
    {
        imgSrc: '/assets/icon-3.png',
        title: 'lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida',
    },
]

export const howItWorksData: HowItWorksData = {
    header: "How It Works",
    description:
        "We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient.",
    primaryButtonText: "Click Here",
    secondaryButtonText: "Click Here",
    primaryButtonLink: "/",
    secondaryButtonLink: "/",
    imageUrl: "https://picsum.photos/500/500?random=$100",
    steps: [
        {
            icon: faUser,
            step: "Step 1: Sign Up",
            procedure: "Create an account by providing your basic information and choosing a plan that suits your needs.",
        },
        {
            icon: faArrowAltCircleDown,
            step: "Step 2: Customize",
            procedure: "Customize your settings and preferences to align the platform with your business needs.",
        },
        {
            icon: faCheckCircle,
            step: "Step 3: Launch",
            procedure:
                "Launch your first campaign and start tracking your results in real-time.",
        },
    ],
};

export const integrationData: IntegrationData = {
    outerImageUrl: "https://picsum.photos/800/600?random=1",
    innerImageUrl: "https://picsum.photos/300/300?random=2",
    header: "Simple to integrate to your system",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ex.",
    heroContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda sint nobis sunt harum culpa doloremque quaerat corporis inventore accusamus ullam aliquid aut laborum aspernatur eum, blanditiis, neque delectus pariatur?",
    headerCard: {
        title: "100+ Integration",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ex.",
    },
    primaryButtonLink: "",
    primaryButtonText: "Try API",
    secondaryButtonLink: "",
    secondaryButtonText: "API Doc",
};

export const contactInfo: ContactInfo = {
    address: "Plaza X, XY Floor, XYZ Street",
    phone: "+123-456-7890",
    email: "yourname@email.com",
    workingHours: "Monday To Friday 8:00am to 8:00pm AEDT",
    helpText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi debitis sunt sequi tempora corporis, sed id animi eveniet.",
    socialMedia: [
        { platform: "Facebook", url: "https://www.facebook.com" },
        { platform: "Twitter", url: "https://www.twitter.com" },
        { platform: "Instagram", url: "https://www.instagram.com" },
        { platform: "LinkedIn", url: "https://www.linkedin.com" },
    ]
};

export const dashboardSummaryData = [
    {
        count: '10',
        option: 'lorem',
    },
    {
        count: '05',
        option: 'lorem',
    },
    {
        count: '01',
        option: 'lorem',
    },
    {
        count: '01',
        option: 'lorem',
    },
    {
        count: '01',
        option: 'lorem',
    },
]

export const contactUsData: ContactUsData = {
    title: 'Email Us',
    description: 'If you have any questions, feel free to reach out to us using the form below.',
    fields: [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            label: 'Phone',
            name: 'phone',
            type: 'text',
        },
        {
            label: 'Subject',
            name: 'subject',
            type: 'text',
        },
        {
            label: 'Message',
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
    submitButtonText: 'Submit',
};

export const notificationData = [
    {
        title: '',
        description: '',
        time: '',
        icon: ''
    },
]

export type FAQ = {
    category: string;
    question: string;
    answer: string;
    description: string;
};

export const faqData: FAQ[] = [
    {
        category: 'Popular',
        question: 'What is QuickPay?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Popular',
        question: 'Can I transact quickpay-to-quickpay?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'How to Use',
        question: 'How does QuickPay work?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'How to Use',
        question: 'What types of businesses are eligible for this service?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'How long does it take to receive funds?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'How can I contact with support?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'What about the refund Policies?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Popular',
        question: 'What is QuickPay?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Popular',
        question: 'Can I transact quickpay-to-quickpay?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'How to Use',
        question: 'How does QuickPay work?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'How to Use',
        question: 'What types of businesses are eligible for this service?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'How long does it take to receive funds?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'How can I contact with support?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        category: 'Support',
        question: 'What about the refund Policies?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
];

export const coreFeaturesData = {
    title: "Core Features",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Obcaecati qui repellat, consectetur adipisicing elit.blanditiis rem earum dolore corrupti vel!",
    imageUrl: "https://picsum.photos/500/500?random=$100",
    features: [
        {
            title: "Secure Transactions",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
        {
            title: "Seamless Integration",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
        {
            title: "Robust Security",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
        {
            title: "Multiple Payment",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
        {
            title: "Customizable Checkout",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
        {
            title: "Reporting and Analytics",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Non veniam reiciendis molestiae.",
        },
    ],
};

export const successData = [
    { value: "100K+", label: "Active Users" },
    { value: "400K+", label: "App Downloads" },
    { value: "90%", label: "Satisfied Users" },
    { value: "200+", label: "Partners Joined" },
];

export const teamData = {
    title: "Our Team",
    description: "lorem ble bla bla bla bla bla",
    team: [
        {
            name: "Michael Brown",
            image: "https://picsum.photos/500/500?random=$100",
            about: "Michael is a DevOps specialist who excels in cloud architecture and automation. He ensures the smooth deployment and operation of large-scale systems.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/michaelbrown", icon: FaLinkedin },
                { platform: "Twitter", url: "https://twitter.com/michaelbrown", icon: FaTwitter },
                { platform: "GitHub", url: "https://github.com/michaelbrown", icon: FaGithub },
            ],
        },
        {
            name: "Emily Davis",
            image: "https://picsum.photos/500/500?random=$100",
            about: "Emily is a talented backend developer with expertise in database management and API development. She focuses on creating robust and secure backend systems.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/emilydavis", icon: FaLinkedin },
                { platform: "GitHub", url: "https://github.com/emilydavis", icon: FaGithub },
                { platform: "Medium", url: "https://medium.com/@emilydavis", icon: FaMedium },
            ],
        },
        {
            name: "John Doe",
            image: "https://picsum.photos/500/500?random=$100",
            about: "John is a seasoned software engineer with over 10 years of experience in full-stack development. He specializes in building scalable web applications.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/johndoe", icon: FaLinkedin },
                { platform: "Twitter", url: "https://twitter.com/johndoe", icon: FaTwitter },
                { platform: "GitHub", url: "https://github.com/johndoe", icon: FaGithub },
            ],
        },
        {
            name: "Jane Smith",
            image: "https://picsum.photos/500/500?random=$100",
            about: "Jane is a creative UI/UX designer with a passion for crafting user-friendly and aesthetically pleasing interfaces.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/janesmith", icon: FaLinkedin },
                { platform: "Dribbble", url: "https://dribbble.com/janesmith", icon: FaDribbble },
                { platform: "Instagram", url: "https://www.instagram.com/janesmith", icon: FaInstagram },
            ],
        },
        {
            name: "Michael Brown",
            image: "https://picsum.photos/500/500?random=$100",
            about: "Michael is a DevOps specialist who excels in cloud architecture and automation. He ensures the smooth deployment and operation of large-scale systems.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/michaelbrown", icon: FaLinkedin },
                { platform: "Twitter", url: "https://twitter.com/michaelbrown", icon: FaTwitter },
                { platform: "GitHub", url: "https://github.com/michaelbrown", icon: FaGithub },
            ],
        },
        {
            name: "Emily Davis",
            image: "https://picsum.photos/500/500?random=$100",
            about: "Emily is a talented backend developer with expertise in database management and API development. She focuses on creating robust and secure backend systems.",
            socialMedia: [
                { platform: "LinkedIn", url: "https://www.linkedin.com/in/emilydavis", icon: FaLinkedin },
                { platform: "GitHub", url: "https://github.com/emilydavis", icon: FaGithub },
                { platform: "Medium", url: "https://medium.com/@emilydavis", icon: FaMedium },
            ],
        },
    ]
};

interface LocationData {
    address: string;
    googleMapUrl: string;
}

export const locations: LocationData[] = [
    {
        address: "Copital Hotel, Clerk's Quarter, Buea SW, Cameroon",
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.184715383898!2d9.239297716973628!3d4.152443067784108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061339916f0cc27%3A0x7eb443549985a696!2sCapitol%20Hotel%20Residence!5e0!3m2!1sen!2scm!4v1723429398383!5m2!1sen!2scm",
    },
    {
        address: "Buea Town, Buea SW, Cameroon",
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3269705732896!2d9.2632243!3d4.1559658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133822134dc8f%3A0xdc122654f4b3d50c!2sBuea%20town!5e0!3m2!1sen!2scm!4v1723428913830!5m2!1sen!2scm",
    },
    {
        address: "Molyko, Buea SW, Cameroon",
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3422905001444!2d9.277818799999999!3d4.1529289999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613347a45bdbc3%3A0x488a54fc3dbaa1a8!2sMolyko!5e0!3m2!1sen!2scm!4v1723428551299!5m2!1sen!2scm",
    },
];

export interface TestimonialProps {
    imageUrl: string;
    quote: string;
    rate: number;
    name: string;
    title: string;
}

export const testimonialsData = {
    header: 'TRUSTED BY PROFESSIONALS',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente vel asperiores vero repudiandae neque! Ut suscipit neque eligendi alias vero repellat enim corporis incidunt, ex, natus qui quia nulla sint.',
    testimonials: [
        {
            imageUrl: 'https://picsum.photos/200/200?random=1',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim qui porro perferendis voluptatibus minima, eius illo animi nihil sed natus! Delectus dicta dolores.',
            rate: 3,
            name: 'Tom Hiddellon',
            title: 'Entrepreneur',
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=2',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim qui porro perferendis voluptatibus minima, eius illo animi nihil sed natus! Delectus dicta dolores.',
            rate: 5,
            name: 'Nkeng Derick',
            title: 'Developer',
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=3',
            quote: 'Quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.',
            rate: 4,
            name: 'Jane Doe',
            title: 'Graphic Designer',
        },
        {
            imageUrl: 'https://picsum.photos/200/200?random=4',
            quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            rate: 4,
            name: 'John Smith',
            title: 'Marketing Specialist',
        },
    ],
};

export const mainCatchCardData: MainCatchCardData = {
    header: 'UNLOCKING THE POWER OF DIGITAL PAYMENTS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et dolorem error aspernatur nulla. Ipsa architecto, cupiditate deleniti maiores aut nostrum alias ullam esse eligendi corrupti.',
    catches: [
        {
            title: "Market Share",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta corrupti nihil?",
            icon: faChartBar
        },
        {
            title: "Easy Payment",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque nam pariatur.",
            icon: faDollarSign
        },
        {
            title: "Awesome Services",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rem quos corrupti.",
            icon: faSync
        }
    ],
};

export const pricingPlans: PricingCardProps[] = [
    {
      plan: "Customer",
      amount: "$0.00",
      duration: "/month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      plan: "Merchant",
      amount: "$9.99",
      duration: "/month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  export const sloganData: HeroProps = {
    header: "LOREM LOREM IPSUM DOLORS",
    description: "We are a dedicated team of payment processing experts committed to providing the best solutions for your business. Our mission is to simplify payments and ensure your transactions are secure and efficient.",
    primaryButtonText: "Click Here",
    secondaryButtonText: "Click Here",
    primaryButtonLink: "/",
    secondaryButtonLink: "/",
    imageUrl: "https://picsum.photos/500/500?random=$100",
    reverse: false,
  };

  export const whyChooseUsData = {
    header: "Why Choose Us",
    description: "We provide a range of services to help you manage payments effortlessly. Whether it's handling transactions, creating invoices, or generating payment links, our platform has you covered.",
    primaryButtonText: "Learn More",
    secondaryButtonText: "Get Started",
    primaryButtonLink: "/learn-more",
    secondaryButtonLink: "/get-started",
    imageUrl: "https://picsum.photos/500/500?random=$100",
    whyUs: [
      { title: 'Lorem ipsum, dolor', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, ex.' },
      { title: 'Lorem ipsum, dolor', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, ex.' }
    ],
    reverse: false,
  };

  export const whereWeHaveGoneData = {
    header: "We Toue All Over",
    description: "We provide a range of services to help you manage payments effortlessly. Whether it's handling transactions, creating invoices, or generating payment links, our platform has you covered.",
    primaryButtonText: "Learn More",
    secondaryButtonText: "Get Started",
    primaryButtonLink: "/learn-more",
    secondaryButtonLink: "/get-started",
    imageUrl: "https://picsum.photos/500/500?random=$100",
    reverse: false,
  };


export const whatWeOfferData = {
    header: "What We Offer",
    description: "We provide a range of services to help you manage payments effortlessly. Whether it's handling transactions, creating invoices, or generating payment links, our platform has you covered.",
    primaryButtonText: "Learn More",
    secondaryButtonText: "Get Started",
    primaryButtonLink: "/learn-more",
    secondaryButtonLink: "/get-started",
    imageUrl: "/images/what-we-offer.png",
    reverse: false,
  };
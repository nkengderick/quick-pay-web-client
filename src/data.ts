import { faBell, faHouse, faPerson } from "@fortawesome/free-solid-svg-icons"
import { ChatBubbleLeftIcon, CheckBadgeIcon, CurrencyDollarIcon, InformationCircleIcon, LanguageIcon, LockClosedIcon, MagnifyingGlassIcon, PencilIcon, PhoneIcon, QuestionMarkCircleIcon, ShareIcon, StarIcon } from '@heroicons/react/24/outline'
import { ProfileSection } from "./types/profile.types"

export const signupField = [
    {
        label: 'Username',
        name: 'username',
    },
    {
        label: 'Tel',
        name: 'phone',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        name: `password`,
        label: `Password`,
    },
    {
        name: `confirm_password`,
        label: `Confirm Password`,
    },
]

export const loginField = [
    {
        label: 'Email',
        name: 'email',
    },
    {
        name: `password`,
        label: `Password`,
    },
]
export const ResetPasswordField = [
    {
        name: `password`,
        label: `New Password`,
    },
    {
        label: 'Confirm Password',
        name: 'confirm_password',
    },
]

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

export const howWeWorkData = [
    {
        icon: '/assets/one.png',
        title: 'Lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
    {
        icon: '/assets/two.png',
        title: 'lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
    {
        icon: '/assets/three.png',
        title: 'Lorem lorem',
        content: 'Lorem ipsum dolor sit amet consectetur. Id elementum amet fusce elit molestie dignissim. A in sociis at vulputate. Ac nisl pretium massa nisi. Neque ac accumsan sodales dignissim nisl. Rutrum sit lacus ultrices viverra sed gravida'
    },
]

export const dashboardLink = [
    {
        icon: faHouse,
        link: '/dashboard',
        name: 'Dashboard'
    },
    {
        icon: faHouse,
        link: '/',
        name: 'Dashboard'
    },
    {
        icon: faBell,
        link: '/notifications',
        name: 'Notifications'
    },
    {
        icon: faPerson,
        link: '/profile',
        name: 'Profile'
    },
]

export const MerchantLink = [
    {
        icon: faHouse,
        link: '/agent',
        name: 'Home'
    },
    {
        icon: faHouse,
        link: '/agent',
        name: 'Home'
    },
    {
        icon: faHouse,
        link: '/agent',
        name: 'Home'
    },
]

export const requestStatus = [
    'all', 'pending', 'in progress', 'completed', 'rejected'
]

export const requestData = [
    {
        title: 'lorem',
        id: '#12345',
        status: 'in progress'
    },
]

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

export const step1Fields = [
    {
        name: `my_school`,
        label: `What is your school?`,
    },
    {
        name: `doc_type`,
        label: `What type of document do you want?`,
    },
    {
        name: `num_doc`,
        label: `Number of documents requested`,
    },
    {
        name: `trans_mode`,
        label: `Transaction mode`,
    },
]

export const step2Fields = [
    {
        name: `name`,
        label: `Name`,
    },
    {
        name: `matricule`,
        label: `Matricule of applicant`,
    },
    {
        name: `faculty`,
        label: `Faculty`,
    },
    {
        name: `department`,
        label: `Department`,
    },
    {
        name: `level`,
        label: `Level`,
    },
]

export const step3Fields = [
    {
        name: `payment_mode`,
        label: `How would you like to pay`,
    },
    {
        name: `phone`,
        label: `Phone number`,
    }
]

export const steps = [
    {
        id: 'Step 1',
        name: 'Document information',
        description: 'Let’s begin your application process. Please fill in the  form below',
        fields: ['my_school', 'doc_type', 'num_doc', 'trans_mode'],
        label: [`What is your school?`,
            `What type of document do you want?`,
            `Number of documents requested`,
            `Transaction mode`,
        ],
    },
    {
        id: 'Step 2',
        name: 'Applicant Information',
        description: 'Please enter the relevant applicant information',
        fields: ['name', 'matricule', 'faculty', 'department', 'level'],
        label: ['Name', 'Matricule of applicant', 'Faculty', 'Department', 'Level'],
    },
    {
        id: 'Step 3',
        name: 'Make Payments',
        description: 'You can now pay for your desired document to complete the process',
        fields: ['payment_mode', 'phone'],
        label: ['How would you like to pay', 'Phone number',],
    },
]

export const summaryLabel = [
    { label: 'label', name: 'name' },
    { label: 'label', name: 'name' },
    { label: 'label', name: 'name' },
    { label: 'label', name: 'name' },
]

export const profileData: ProfileSection[] = [
    {
        section: 'Settings',
        items: [
            {
                icon: LanguageIcon,
                label: 'Language',
                link: 'language',
                value: 'Anglais',
            },
            {
                icon: CurrencyDollarIcon,
                label: 'Currency',
                link: 'currency',
                value: 'USD',
            },
        ],
    },
    {
        section: 'Account',
        items: [
            {
                icon: PhoneIcon,
                label: 'Phone',
                link: '',
                value: '+237681390155',
            },
            {
                icon: ChatBubbleLeftIcon,
                label: 'Mail',
                link: '',
                value: 'nkengbezaderick@gmail.com',
                isVerified: false,
            },
        ],
    },
    {
        section: 'Security',
        items: [
            {
                icon: CheckBadgeIcon,
                label: 'Limits',
                link: '',
                value: 'Verified',
            },
            {
                icon: LockClosedIcon,
                label: 'Change password',
                link: 'change-password',
            },
            {
                icon: LockClosedIcon,
                label: 'Change PIN',
                link: 'change-pin',
            },
        ],
    },
    {
        section: 'Others',
        items: [
            {
                icon: StarIcon,
                label: 'Referral programme',
                link: 'referral-programme',
                value: '0 Referred',
            },
            {
                icon: InformationCircleIcon,
                label: 'About us',
                link: 'about',
            },
            {
                icon: QuestionMarkCircleIcon,
                label: 'What do you think of PaySika?',
                link: 'feedback',
            },
            {
                icon: ShareIcon,
                label: 'Share PaySika on social media platforms',
                link: 'share',
            },
        ],
    }
]
export const contactUs = [
    {
        label: 'Username',
        name: 'username',
    },
    {
        label: 'Email',
        name: 'email',
    },
    {
        label: 'Message title',
        name: 'message_title',
    },
    {
        label: '',
        name: 'message',
    },
]

export const notificationData = [
    {
        title: '',
        description: '',
        time: '',
        icon: ''
    },
]

export const headerSignup = ''
export const parSignup = ''
export const parLogin = ''
export const parFogotPassword = ''


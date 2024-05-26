import { useState } from 'react';

const SignupPopup = ({handleOpenOtpPopup, onClose }) => {

    console.log(onClose)
    const [tab, setTab] = useState('SignUp');
    const [select, setSelect] = useState();
    const [businessOptions, setBusinessOptions] = useState([]);

    const switchTab = (newTab) => {
        setTab(newTab);
    };

    const switchSelect = (newSelect) => {
        setSelect(newSelect);

        if (newSelect === 'Free Property Listing') {
            setBusinessOptions([
                'Owner',
                'Buyer',
                'Agent',
                'Developer'
            ]);
        } else if (newSelect === 'Business Listing') {
            setBusinessOptions([
                'Rent Agreement',
                'Home Loan',
                'Property Valuer',
                'Legal Services',
                'Chartered Accountant',
                'Home Décor',
                'Home Interior',
                'Vastu Shastra',
                'Furniture Dealer',
                'Modular Kitchen',
                'Construction Contractor',
                'Electronic Goods Dealer',
                'Packer & Movers',
                'Pest Control',
                'Solar Product Dealer',
                'Carpenter',
                'Plumbing Contractor',
                'Security System Dealer',
                'Sanitary Dealer',
                'Painting Service',
                'Flooring & Marble Dealer'
            ]);
        }
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
       handleOpenOtpPopup();
    };

    return (
        <div className="fixed z-10 inset-0">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-white w-full max-w-sm mx-auto rounded-lg shadow-lg border-2 border-blue-200 overflow-auto min-h-[200px]">
                    <div className="flex justify-between border-b border-gray-200">
                        <div className="flex">
                            <div className={`p-3 text-center ${tab === 'SignIn' ? 'font-semibold text-white bg-blue-600' : ''}`} onClick={() => switchTab('SignIn')}>
                                Sign In
                            </div>
                            <div className="h-full border-r-2 border-gray-200"></div>
                            <div className={`p-3 text-center ${tab === 'SignUp' ? 'font-semibold text-white bg-blue-600' : ''}`} onClick={() => switchTab('SignUp')}>
                                Sign Up
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 p-2 text-gray-600 cursor-pointer" onClick={onClose}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="p-5">
                        {tab === 'SignIn' && (
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" className="mt-1 px-2 block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input type="password" className="mt-1 px-2 block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className='mb-4 flex flex-row justify-between'>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <div className="text-xs">Remember Me</div>
                                    </div>
                                    <div className='text-blue-600 text-xs cursor-pointer'>Lost your Password?</div>
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Sign In</button>
                            </form>
                        )}
                        {tab === 'SignUp' && (
                            <form onSubmit={handleSignUpSubmit}>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Name</label>
                                    <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Mobile Number</label>
                                    <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Email*</label>
                                    <input type="email" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Type of listing</label>
                                    <div className='mt-1 flex rounded-2xl border-2 border-blue-200 justify-between'>
                                        <div className={`w-full rounded-l-2xl text-xs px-2 py-1 ${select === 'Free Property Listing' ? 'text-white bg-blue-600' : ''}`} onClick={() => switchSelect('Free Property Listing')}>
                                            Free Property Listing
                                        </div>
                                        <div className={`w-full rounded-r-2xl text-xs px-2 py-1 ${select === 'Business Listing' ? 'text-white bg-blue-600' : ''}`} onClick={() => switchSelect('Business Listing')}>
                                            Business Listing
                                        </div>
                                    </div>
                                </div>
                                {select && (
                                    <div className="mb-3">
                                        <label className="block text-sm font-bold text-gray-700">{select === 'Free Property Listing' ? 'Select your account type*' : 'Type of Business'}</label>
                                        <select className="mt-1 px-2 py-1 block w-full rounded-2xl border-2 border-blue-200 text-xs">
                                            {businessOptions.map((option, index) => (
                                                <option key={index} value={option} className='text-xs'>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Username</label>
                                    <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Password</label>
                                    <input type="password" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700">Retype Password</label>
                                    <input type="password" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                                </div>
                                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Sign Up</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPopup;

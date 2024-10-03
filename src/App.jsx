import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const App = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "97608b1f-4fb7-45d2-9c3a-7c0477ddfefd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const Languages = [
        {
            id: 1,
            label: 'HTML',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'w-1/3 text-right devicon-html5-plain colored font-semibold text-2xl'
        },
        {
            id: 2,
            label: 'CSS',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'w-1/3 text-right devicon-css3-plain colored font-semibold text-2xl'
        },
        {
            id: 3,
            label: 'Javascript',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'w-1/3 text-right devicon-javascript-plain colored font-semibold text-2xl'
        }
    ]
    const Library = [
        {
            id: 1,
            label: 'React Js',
            div_class: 'flex border-b-4 border-blue-500 ',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-react-original w-1/3 text-right colored font-semibold text-2xl'
        },
        {
            id: 2,
            label: 'Tailwind-CSS',
            div_class: 'flex border-b-4 border-blue-500 ',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-tailwindcss-original w-1/3 text-right colored font-semibold text-2xl'
        },
        {
            id: 3,
            label: 'Bootstrap',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-bootstrap-plain colored w-1/3 text-right font-semibold text-2xl'
        }
    ]
    const Tools = [
        {
            id: 1,
            label: 'VS-Code',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-vscode-plain colored font-semibold w-1/3 text-right text-2xl'
        },
        {
            id: 2,
            label: 'Github',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-github-plain colored font-semibold text-2xl w-1/3 text-right'
        },
        {
            id: 3,
            label: 'Git',
            div_class: 'flex border-b-4 border-blue-500',
            label_classes: 'w-2/3 text-left',
            icon_classes: 'devicon-git-plain colored font-semibold text-2xl w-1/3 text-right'
        }
    ]
    const Navbar_links = [
        {
            id: 1,
            label: 'Home',
            href: '#home',
            className: 'hover:text-gray-50 text-white'
        },
        {
            id: 2,
            label: 'About',
            href: '#about',
            className: 'hover:text-gray-50 text-white'
        },
        {
            id: 3,
            label: 'Skills',
            href: '#skills',
            className: 'hover:text-gray-50 text-white'
        },
        {
            id: 4,
            label: 'Qualification',
            href: '#qualification',
            className: 'hover:text-gray-50 text-white'
        },
        {
            id: 5,
            label: 'Projects',
            href: '#projects',
            className: 'hover:text-gray-50 text-white'
        },
        {
            id: 6,
            label: 'Contact_Me',
            href: '#contact_me',
            className: 'hover:text-gray-50 text-white'
        },
    ]
    const Social = [
        {
            id: 1,
            label: 'LinkedIn',
            className: 'text-white transition duration-300',
            href: 'https://www.linkedin.com/in/abhishek-shinde-561279220/',
            icon: 'bi bi-linkedin'
        },
        {
            id: 2,
            label: 'Github',
            className: 'text-white transition duration-300',
            href: 'https://github.com/Abhishek0340',
            icon: 'bi bi-github'
        },
        {
            id: 3,
            label: 'Twitter',
            className: 'text-white transition duration-300',
            href: '',
            icon: 'bi bi-twitter'
        },
        {
            id: 4,
            label: 'Whatsapp',
            className: 'text-white transition duration-300',
            href: 'https://wa.me/qr/E3NF6KT6GXYTO1',
            icon: 'bi bi-whatsapp'
        },
    ]

    return (
        <>
            <div className="font-sans scroll-smooth" style={{ backgroundColor: 'white' }}>
                {/* Navbar */}

                <nav className=" bg-blue-400 text-black p-4 fixed w-full top-0 z-10">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-semibold hover:text-gray-50 text-white cursor-pointer">My Portfolio</h1>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`md:flex space-x-6 font-semibold hidden`}>
                            {Navbar_links.map((item) => (
                                <li key={item.id}>
                                    <a href={item.href} className={item.className}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {isOpen && (
                        <div className="md:hidden h-screen bg-gradient-to-r from-purple-400 to-blue-400 text-white p-4">
                            <ul className="flex flex-col space-y-2">
                                {Navbar_links.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.href} className={item.className}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>

                {/* Main content */}
                <div className="mt-1">
                    <section className=" bg-blue-400 text-black h-screen flex flex-col justify-center items-center space-y-4">
                        <h2 className="text-5xl font-bold text-center text-white">Hi, I'm Abhishek</h2>
                        <p className="text-2xl text-white font-bold text-center">I am
                            <span className="font-bold ml-3 text-yellow-200">
                                <Typewriter words={['Web Developer.', 'UI/UX Designer.']} loop={Infinity} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </p>
                        <p className="text-xl text-center text-gray-300 mb-10">
                            Building frontend applications to solve real life problems
                        </p>
                        <button className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                            Contact Me
                        </button>
                    </section>


                    {/* About Section */}
                    <section id='about' style={{ scrollMarginTop: '6rem' }} className=" text-gray-800 mt-20 sm:mt-10 ">
                        <h2 className="text-4xl font-bold text-gray-900 text-center">About Me</h2>
                        <p className="text-md mt-4 text-center">My Introduction</p>
                        <div className=" container  py-14 px-4 mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
                            <div className="lg:w-3/4 md:w-3/4">
                                <p className="text-lg mt-4 leading-relaxed">
                                    A 22-year-old BSc Computer Science graduate, currently pursuing an MSc in Computer Science. I am a passionate Front-End Developer with a focus on creating seamless, user-centric experiences. Proficient in HTML, CSS, and JavaScript, with hands-on experience in modern frameworks like React. I am detail-oriented and dedicated to delivering high-quality solutions. I continuously enhance my skills to keep pace with evolving industry trends, seeking an opportunity to join an innovative organization where I can contribute and grow professionally.
                                </p>
                                <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                                    Resume
                                </button>
                            </div>
                            <div className="lg:w-1/4 md:w-1/4 sm:w-1/2 w-full p-2  block m-auto">
                                <img
                                    className="rounded-lg shadow-lg w-auto md:w-auto lg:h-[250px] "
                                    src='./src/assets/Abhishek.jpg'
                                    alt='Abhishek Shinde Portfolio'
                                />
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <div id='skills' style={{ scrollMarginTop: '2rem' }} className=" text-gray-900 py-16 px-4">
                        <div className="container mx-auto">
                            <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                                    <p className="text-lg mb-4">Languages that I have picked up over the years</p>
                                    <hr />
                                    <div className="mt-2 space-y-4 w-full">
                                        {Languages.map((item1, index) => (
                                            <div key={index} className={item1.div_class}>
                                                <label className={item1.label_classes}>{item1.label}</label>
                                                <i className={item1.icon_classes}></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-2xl font-semibold mb-4">Libraries & Frameworks</h3>
                                    <p className="text-lg mb-4">Libraries and frameworks that I prefer to work with</p>
                                    <hr />
                                    <div className="mt-2 w-full space-y-4">
                                        {Library.map((item2, index) => (
                                            <div key={index} className={item2.div_class}>
                                                <label className={item2.label_classes}>{item2.label}</label>
                                                <i className={item2.icon_classes}></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-2xl font-semibold mb-4">Tools</h3>
                                    <p className="text-lg mb-4">Tools that I know and use on a daily basis <br /><br /></p>
                                    <hr />
                                    <div className="mt-2 space-y-4 w-full">
                                        {Tools.map((item3, index) => (
                                            <div key={index} className={item3.div_class}>
                                                <label className={item3.label_classes}>{item3.label}</label>
                                                <i className={item3.icon_classes}></i>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}
                <section id="projects" className="py-20 hidden bg-white">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                        <div className="flex flex-wrap justify-center space-x-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80">
                                <h3 className="text-2xl font-bold">Project 1</h3>
                                <p>A brief description of the project.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-80">
                                <h3 className="text-2xl font-bold">Project 2</h3>
                                <p>A brief description of the project.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Qualification Section */}
                <section id='qualification' style={{ scrollMarginTop: '2.5rem' }} className="py-16 pt-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8 text-center">
                            Qualifications
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white shadow-lg rounded-xl p-8">
                                <h3 className="text-3xl font-semibold text-blue-400 mb-4">Bachelor of Computer Science (BSc)</h3>
                                <p className="text-gray-700 mb-2">Shivaji University, Kolhapur</p>
                                <p className="text-gray-700 mb-4">2020 - 2023</p>
                                <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition hover:bg-purple-700 cursor-pointer">
                                    View Details
                                </span>
                            </div>
                            <div className="bg-white shadow-lg rounded-xl p-8">
                                <h3 className="text-3xl font-semibold text-blue-400 mb-4">Master of Computer Science (MSc)</h3>
                                <p className="text-gray-700 mb-2">Karmaveer Bhavrao Patil University, Satara</p>
                                <p className="text-gray-700 mb-4">2023 - 2025 </p>
                                <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition hover:bg-purple-700 cursor-pointer">
                                    View Details
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <footer id='contact_me' style={{}} className=" bg-blue-400 mt-20  text-white py-10">
                    <div className="container mx-auto px-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                            <div className='p-8'>
                                <h2 className="text-3xl font-bold">Contact Me</h2><br />
                                <form onSubmit={onSubmit} className="space-y-2">
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="name"> Name</label>
                                        <input type="text" name='name' id="name" className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="email"> Email</label>
                                        <input type="email" id="email" name='email' className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2" htmlFor="message"> Message</label>
                                        <textarea id="message" rows="3" name='message' className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Write your message"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"> Send Message </button>
                                </form>
                            </div>

                            <div className='p-8'>
                                <h2 className="text-3xl font-bold mb-6">Follow Me</h2>
                                <p className="text-gray-200 mb-4">
                                    Connect with me on social media and check out more of my work.
                                </p>
                                <ul className="space-y-3">
                                    {Social.map((item4, index) => (
                                        <li key={index}>
                                            <i className={item4.icon} style={{ marginRight: '10px' }}></i>
                                            <a href={item4.href} className={item4.className}>{item4.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-white">&copy; 2024 Abhishek. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
}


export default App
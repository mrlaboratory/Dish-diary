import React from 'react';
import ReactToPdf from "react-to-pdf"

const ref = React.createRef();
const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [8.5, 11],
  };
const Blog = () => {
    return (

        <div  className='p-3 container mx-auto flex flex-col justify-center items-center w-full h-full' ref={ref}>
       
            <div className='grid grid-cols-1 md:grid-cols-2 ' >

                <div className='w-full sm:w-[500px] mt-10'>

                    <h2 className='my-5 text-center text-gray-600 font-bold text-3xl'>Question and Answer</h2>

                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the differences between uncontrolled and controlled components.
                        </div>
                        <div className="collapse-content">
                            <p>                            An uncontrolled component is one that manages its own state internally using the DOM, rather than relying on React's state management system. This means that the value of an input element, for example, is stored in the component's local state and not in React's state. Uncontrolled components are useful when you only need to get a value from an input field on submission, without needing to update it programmatically.
                            </p>
                            <p>                            On the other hand, a controlled component is one where the value of the input is controlled by React's state management system. In this case, the component's value is stored in the parent component's state and is passed down as a prop to the child component. The value is then updated through onChange events, which trigger updates to the parent component's state. Controlled components are useful when you want to constantly monitor changes to an input field and update the UI accordingly.
                            </p>                        </div>
                    </div>
                    <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How to validate React props using PropTypes
                        </div>
                        <div className="collapse-content">
                            <p>                        PropTypes is a library included in React that provides a way to validate the props passed to a component. To use PropTypes, you need to define your component and its propTypes, which specify the types of your props.
                            </p>
                            <p>PropTypes has validation methods such as isRequired, which marks the prop as required, and if it's not provided, an error will be thrown. You can also specify more complex propTypes by using objects or arrays.</p>

                            <p>By using PropTypes, you can catch errors early in development by validating the types of your props. It also makes it easier for other developers to understand what props a component expects.</p>
                        </div>
                    </div>
                    <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Tell us the difference between nodejs and express js.
                        </div>
                        <div className="collapse-content">
                            <p>                        Node.js is a server-side JavaScript runtime environment that provides an event-driven architecture and non-blocking I/O model. It allows developers to use JavaScript on the server, which makes it possible to create web applications with a consistent language across the entire stack.
                            </p>
                            <p>Express.js is a web application framework for Node.js. It provides a set of tools and utilities for building web applications, such as routing, middleware support, and template engines. Express.js is built on top of Node.js and simplifies the process of building web applications by providing a higher-level API.
                            </p>
                            <p>The main difference between Node.js and Express.js is that Node.js is a runtime environment for executing JavaScript code on the server, whereas Express.js is a framework for building web applications using Node.js. Node.js provides the core functionality required for building web servers, but it doesn't provide any additional features that make it easy to develop web applications. This is where Express.js comes in - it provides a set of abstractions and utility functions that make it easier to develop web applications in Node.js.
                            </p>                        </div>
                    </div>
                    <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is a custom hook, and why will you create a custom hook?
                        </div>
                        <div className="collapse-content">
                            <p>A custom hook is a reusable function in React that allows you to extract logic that can be shared across multiple components. Custom hooks are functions that use built-in hooks or other custom hooks to provide additional functionality and abstract away repetitive code.
                            </p>
                            <p>You would create a custom hook when you find yourself repeating the same code in multiple components. By creating a custom hook, you can abstract away this repetitive logic into a single function, which can then be reused across multiple components. This makes your code more modular, easier to maintain, and reduces the likelihood of bugs due to duplicated code.
                            </p>                        </div>
                    </div>
                </div>

                <div>
                    <img className='w-full p-5' src="/qa.png" alt="" />
                </div>
            </div>
            <ReactToPdf targetRef={ref} filename="blog.pdf" options={options} >
                {({ toPdf }) => (
                        <button onClick={toPdf} className='my-10 btn-primary btn'>Genrate PDF</button>
                )}
            </ReactToPdf>
       
        </div>
    );
};

export default Blog;
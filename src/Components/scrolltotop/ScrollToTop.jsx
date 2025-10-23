// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { MessageSquare, X } from "lucide-react";

// // const ScrollToTop = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState([
// //     {
// //       text: "Hi, welcome to Apply Funds! How can I assist you today?",
// //       sender: "bot",
// //     },
// //   ]);
// //   const [showOptions, setShowOptions] = useState(false);
// //   const [showRestartOptions, setShowRestartOptions] = useState(false);
// //   const navigate = useNavigate();

// //   const contactNumber = "+91 9894978394";
// //   const email = "info@oneassist.net";

// //   const handleUserMessage = (message) => {
// //     setMessages((prev) => [...prev, { text: message, sender: "user" }]);
// //     setTimeout(() => {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           text: "We offer the following services. Please select one:",
// //           sender: "bot",
// //         },
// //       ]);
// //       setShowOptions(true);
// //     }, 500);
// //   };

// //   const handleOptionClick = (option, path) => {
// //     setMessages((prev) => [...prev, { text: option, sender: "user" }]);
// //     setShowOptions(false);

// //     setTimeout(() => {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           text: `Sure! Redirecting you to the ${option} page...`,
// //           sender: "bot",
// //         },
// //       ]);

// //       setTimeout(() => {
// //         navigate(path);
// //         setMessages((prev) => [
// //           ...prev,
// //           {
// //             text: `If you have any doubts, feel free to contact us:\n📧 ${email}\n📞 ${contactNumber}`,
// //             sender: "bot",
// //           },
// //           {
// //             text: "Would you like to go back to the main menu? (Yes/No)",
// //             sender: "bot",
// //           },
// //         ]);
// //         setShowRestartOptions(true);
// //       }, 1000);
// //     }, 500);
// //   };

// //   const handleRestartClick = (answer) => {
// //     setMessages((prev) => [...prev, { text: answer, sender: "user" }]);
// //     setShowRestartOptions(false);

// //     if (answer.toLowerCase() === "yes") {
// //       setTimeout(() => {
// //         setMessages([
// //           {
// //             text: "Hi, welcome to Apply Funds! How can I assist you today?",
// //             sender: "bot",
// //           },
// //         ]);
// //       }, 500);
// //     } else {
// //       setTimeout(() => {
// //         setMessages((prev) => [
// //           ...prev,
// //           {
// //             text: `Thank you! I hope this helps. If you need any further assistance, please contact us:\n📧 ${email}\n📞 ${contactNumber}`,
// //             sender: "bot",
// //           },
// //         ]);
// //       }, 500);
// //     }
// //   };

// //   return (
// //     <div className="fixed bottom-4 right-4 flex flex-col items-end">
// //       {isOpen && (
// //         <div className="w-80 bg-white rounded-2xl shadow-lg p-4 border">
// //           <div className="flex justify-between items-center mb-2">
// //             <h2 className="font-bold">ChatBot</h2>
// //             <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
// //           </div>
// //           <div className="h-60 overflow-y-auto space-y-2 p-2 border rounded-md">
// //             {messages.map((msg, index) => (
// //               <div
// //                 key={index}
// //                 className={`p-2 rounded-md text-sm ${
// //                   msg.sender === "user"
// //                     ? "bg-blue-500 text-white self-end"
// //                     : "bg-gray-200 text-black"
// //                 }`}
// //               >
// //                 {msg.text}
// //               </div>
// //             ))}

// //             {!showOptions && !showRestartOptions && (
// //               <button
// //                 className="bg-blue-500 text-white p-2 rounded-md mt-2"
// //                 onClick={() => handleUserMessage("I need assistance.")}
// //               >
// //                 Start Chat
// //               </button>
// //             )}

// //             {showOptions && (
// //               <div className="flex flex-col space-y-2 mt-2">
// //                 <button
// //                   className="bg-blue-500 text-white p-2 rounded-md"
// //                   onClick={() => handleOptionClick("Home Loan", "/home-loan")}
// //                 >
// //                   Home Loan
// //                 </button>
// //                 <button
// //                   className="bg-blue-500 text-white p-2 rounded-md"
// //                   onClick={() =>
// //                     handleOptionClick("Personal Loan", "/personal-loan")
// //                   }
// //                 >
// //                   Personal Loan
// //                 </button>
// //                 <button
// //                   className="bg-blue-500 text-white p-2 rounded-md"
// //                   onClick={() =>
// //                     handleOptionClick("Business Loan", "/buisness-loan")
// //                   }
// //                 >
// //                   Business Loan
// //                 </button>
// //                 <button
// //                   className="bg-blue-500 text-white p-2 rounded-md"
// //                   onClick={() =>
// //                     handleOptionClick("Loan Against Property", "/loan-against")
// //                   }
// //                 >
// //                   Loan Against Property
// //                 </button>
// //               </div>
// //             )}

// //             {showRestartOptions && (
// //               <div className="flex space-x-2 mt-2">
// //                 <button
// //                   className="bg-green-500 text-white p-2 rounded-md"
// //                   onClick={() => handleRestartClick("Yes")}
// //                 >
// //                   Yes
// //                 </button>
// //                 <button
// //                   className="bg-red-500 text-white p-2 rounded-md"
// //                   onClick={() => handleRestartClick("No")}
// //                 >
// //                   No
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //       <button
// //         className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <MessageSquare />
// //       </button>
// //     </div>
// //   );
// // };

// // export default ScrollToTop;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MessageSquare, X } from "lucide-react";

// const ScrollToTop = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     {
//       text: "Hi, welcome to Apply Funds! How can I assist you today?",
//       sender: "bot",
//     },
//   ]);
//   const [showOptions, setShowOptions] = useState(false);
//   const [showRestartOptions, setShowRestartOptions] = useState(false);
//   const [inputMessage, setInputMessage] = useState(""); // State for input
//   const navigate = useNavigate();

//   const contactNumber = "+91 9894978394";
//   const email = "info@oneassist.net";

//   const handleUserMessage = () => {
//     if (inputMessage.trim() === "") return; // Prevent empty messages

//     setMessages((prev) => [...prev, { text: inputMessage, sender: "user" }]);
//     setInputMessage(""); // Clear input field

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "We offer the following services. Please select one:",
//           sender: "bot",
//         },
//       ]);
//       setShowOptions(true);
//     }, 500);
//   };

//   const handleOptionClick = (option, path) => {
//     setMessages((prev) => [...prev, { text: option, sender: "user" }]);
//     setShowOptions(false);

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: `Sure! Redirecting you to the ${option} page...`,
//           sender: "bot",
//         },
//       ]);

//       setTimeout(() => {
//         navigate(path);
//         setMessages((prev) => [
//           ...prev,
//           {
//             text: `If you have any doubts, feel free to contact us:\n📧 ${email}\n📞 ${contactNumber}`,
//             sender: "bot",
//           },
//           {
//             text: "Would you like to go back to the main menu? (Yes/No)",
//             sender: "bot",
//           },
//         ]);
//         setShowRestartOptions(true);
//       }, 1000);
//     }, 500);
//   };

//   const handleRestartClick = (answer) => {
//     setMessages((prev) => [...prev, { text: answer, sender: "user" }]);
//     setShowRestartOptions(false);

//     if (answer.toLowerCase() === "yes") {
//       setTimeout(() => {
//         setMessages([
//           {
//             text: "Hi, welcome to Apply Funds! How can I assist you today?",
//             sender: "bot",
//           },
//         ]);
//       }, 500);
//     } else {
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           {
//             text: `Thank you! I hope this helps. If you need any further assistance, please contact us:\n📧 ${email}\n📞 ${contactNumber}`,
//             sender: "bot",
//           },
//         ]);
//       }, 500);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end">
//       {isOpen && (
//         <div className="w-80 bg-white rounded-2xl shadow-lg p-4 border flex flex-col">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="font-bold">ChatBot</h2>
//             <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
//           </div>

//           {/* Scrollable messages area */}
//           <div className="h-60 overflow-y-auto space-y-2 p-2 border rounded-md flex flex-col">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 rounded-md text-sm ${
//                   msg.sender === "user"
//                     ? "bg-blue-500 text-white self-end"
//                     : "bg-gray-200 text-black"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}

//             {showOptions && (
//               <div className="flex flex-col space-y-2 mt-2">
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-md"
//                   onClick={() => handleOptionClick("Home Loan", "/home-loan")}
//                 >
//                   Home Loan
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-md"
//                   onClick={() =>
//                     handleOptionClick("Personal Loan", "/personal-loan")
//                   }
//                 >
//                   Personal Loan
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-md"
//                   onClick={() =>
//                     handleOptionClick("Business Loan", "/business-loan")
//                   }
//                 >
//                   Business Loan
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white p-2 rounded-md"
//                   onClick={() =>
//                     handleOptionClick("Loan Against Property", "/loan-against")
//                   }
//                 >
//                   Loan Against Property
//                 </button>
//               </div>
//             )}

//             {showRestartOptions && (
//               <div className="flex space-x-2 mt-2">
//                 <button
//                   className="bg-green-500 text-white p-2 rounded-md"
//                   onClick={() => handleRestartClick("Yes")}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   className="bg-red-500 text-white p-2 rounded-md"
//                   onClick={() => handleRestartClick("No")}
//                 >
//                   No
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Input field stays fixed at the bottom */}
//           <div className="mt-2 flex items-center space-x-2">
//             <input
//               type="text"
//               className="flex-grow p-2 border rounded-md"
//               placeholder="Type a message..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
//             />
//             <button
//               className="bg-blue-500 text-white p-2 rounded-md"
//               onClick={handleUserMessage}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//       <button
//         className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <MessageSquare />
//       </button>
//     </div>
//   );
// };

// export default ScrollToTop;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageSquare, X } from "lucide-react";

const ScrollToTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi, welcome to Apply Funds! How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const [showRestartOptions, setShowRestartOptions] = useState(false);
  const [inputMessage, setInputMessage] = useState(""); // State for input
  const navigate = useNavigate();

  const contactNumber = "+91 9894978394";
  const email = "info@oneassist.net";

  const handleUserMessage = () => {
    if (inputMessage.trim() === "") return; // Prevent empty messages

    setMessages((prev) => [...prev, { text: inputMessage, sender: "user" }]);
    setInputMessage(""); // Clear input field

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sure, I'd be happy to help you!",
          sender: "bot",
        },
        {
          text: "We offer the following services. Please select one:",
          sender: "bot",
        },
      ]);
      setShowOptions(true);
    }, 500);
  };

  const handleOptionClick = (option, path) => {
    setMessages((prev) => [...prev, { text: option, sender: "user" }]);
    setShowOptions(false);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: `Sure! Redirecting you to the ${option} page...`,
          sender: "bot",
        },
      ]);

      setTimeout(() => {
        navigate(path);
        setMessages((prev) => [
          ...prev,
          {
            text: `If you have any doubts, feel free to contact us:\n📧 ${email}\n📞 ${contactNumber}`,
            sender: "bot",
          },
          {
            text: "Would you like to go back to the main menu? (Yes/No)",
            sender: "bot",
          },
        ]);
        setShowRestartOptions(true);
      }, 1000);
    }, 500);
  };

  const handleRestartClick = (answer) => {
    setMessages((prev) => [...prev, { text: answer, sender: "user" }]);
    setShowRestartOptions(false);

    if (answer.toLowerCase() === "yes") {
      setTimeout(() => {
        setMessages([
          {
            text: "Hi, welcome to Apply Funds! How can I assist you today?",
            sender: "bot",
          },
        ]);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: `Thank you! I hope this helps. If you need any further assistance, please contact us:\n📧 ${email}\n📞 ${contactNumber}`,
            sender: "bot",
          },
        ]);
      }, 500);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-lg p-4 border flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold">ChatBot</h2>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>

          {/* Scrollable messages area */}
          <div className="h-60 overflow-y-auto space-y-2 p-2 border rounded-md flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {showOptions && (
              <div className="flex flex-col space-y-2 mt-2">
                <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={() => handleOptionClick("Home Loan", "/home-loan")}
                >
                  Home Loan
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={() =>
                    handleOptionClick("Personal Loan", "/personal-loan")
                  }
                >
                  Personal Loan
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={() =>
                    handleOptionClick("Business Loan", "/buisness-loan")
                  }
                >
                  Business Loan
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-md"
                  onClick={() =>
                    handleOptionClick("Loan Against Property", "/loan-against")
                  }
                >
                  Loan Against Property
                </button>
              </div>
            )}

            {showRestartOptions && (
              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-green-500 text-white p-2 rounded-md"
                  onClick={() => handleRestartClick("Yes")}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded-md"
                  onClick={() => handleRestartClick("No")}
                >
                  No
                </button>
              </div>
            )}
          </div>

          {/* Input field stays fixed at the bottom */}
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded-md"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleUserMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare />
      </button>
    </div>
  );
};

export default ScrollToTop;

import React, { useState } from "react";

// Define the type for the props
interface SectionProps {
    title: string;
    description: string;
    isVisible : boolean; 
    setIsVisible: any;
}

const Section = ({isVisible, title,description, setIsVisible} : SectionProps)  => {
    return(
        <>
        <h2>{title}</h2>
        {isVisible? <button onClick={()=>setIsVisible()}>Hide</button> :
        <button onClick={()=>setIsVisible()}>Show</button>
        }
        {isVisible && <p>{description}</p>}
        </>
    )
}
const Accordion = () => {
    const[visibeSection, setVisibeSection] = useState("about")
    return(
        <div className="App-body">
            <div style={{padding:'10px'}}>
            <Section 
            isVisible={visibeSection==="about"}
            title="About US" 
            description="Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping, personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Career Choice, Fire tablets, Fire TV, Amazon Echo, Alexa, Just Walk Out technology, Amazon Studios, and The Climate Pledge are some of the things pioneered by Amazon."
            setIsVisible={()=>{
                setVisibeSection( visibeSection=== "about"? "" : "about");
            }}
            />
            <Section  
            isVisible={visibeSection==="leadership"}
            title="Leadership"
            description="We hold ourselves and each other accountable for demonstrating the Amazon Leadership Principles through our actions every day. Our Leadership Principles describe how Amazon does business, how leaders lead, and how we keep the customer at the center of our decisions. Our unique Amazon culture, described by our Leadership Principles, helps us relentlessly pursue our mission of being Earth’s most customer-centric company, best employer, and safest place to work."
            setIsVisible={()=>{
                setVisibeSection( visibeSection=== "leadership"? "" : "leadership");
            }}
            />
            <Section  
             setIsVisible={()=>{
                setVisibeSection( visibeSection=== "positions"? "" : "positions");
            }}
            isVisible={visibeSection==="positions"}
            title="Positions" 
            description="We created this page to provide customers, investors, policymakers, employees, and others our views on certain issues. While our positions are carefully considered and deeply held, there is much room for healthy debate and differing opinions. We hope being clear about our positions is helpful."/>
            </div>
        </div>
    );
}

export default Accordion;
import "./App.css";
import { useState } from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import AvatarEditor from "react-avatar-editor";

function App() {
    const [name, setName] = useState("");
    const [brief, setbrief] = useState("");
    const [edu, setEdu] = useState("");
    const [services, setServices] = useState([]);
    const [slots, setSlots] = useState([]);
    const [test, setTest] = useState([]);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsApp, setWhatsApp] = useState("");
    const [image, setImage] = useState(
        "https://www.svgrepo.com/show/213882/avatar-user.svg"
    );

    return (
        <div className="app">
            <a href="#app-preview" className="preview-btn">
                {" "}
                preview &#8595;{" "}
            </a>
            <a
                href="#app-details"
                className={window.innerWidth < 1200 ? "detail-btn" : "hide"}
            >
                Top &#8593;
            </a>
            <form className="app-details" id="app-details">
                <span>Name</span>
                <div className="name-cont">
                    <input
                        autoComplete="none"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    ></input>
                </div>
                <span>Brief Description</span>
                <div className="brief-cont">
                    <textarea
                        onChange={(e) => {
                            setbrief(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div className="image-cont">
                    <span>Upload an Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        id="image-upload"
                        onChange={(e) => {
                            setImage(
                                window.URL.createObjectURL(e.target.files[0])
                            );
                        }}
                    ></input>
                    <label htmlFor="image-upload" className="upload-label">
                        Upload
                    </label>
                </div>
                <span>Email</span>
                <div className="email-cont">
                    <input
                        type="email"
                        autoComplete="none"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    ></input>
                </div>
                <span>Phone</span>
                <div className="phone-cont">
                    <input
                        type="phone"
                        autoComplete="none"
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    ></input>
                </div>
                <div className="service-cont">
                    <span>Service Offered</span>
                    <select
                        onClick={(e) => {
                            if (services.indexOf(e.target.value) === -1)
                                setServices([...services, e.target.value]);
                        }}
                    >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                    <div className="curr-serv">
                        {services.map((item, idx) => (
                            <div key={idx} className="serv-item" id={item}>
                                {item}{" "}
                                <p
                                    className="del"
                                    onClick={(e) => {
                                        let ser =
                                            e.currentTarget.parentElement.id;
                                        let currServ = [];
                                        for (
                                            let i = 0;
                                            i < services.length;
                                            i++
                                        ) {
                                            if (services[i] === ser) {
                                                continue;
                                            }
                                            currServ.push(services[i]);
                                        }
                                        setServices(currServ);
                                    }}
                                >
                                    x
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <span>Educational Background</span>
                <div className="edu-cont">
                    <textarea
                        onChange={(e) => {
                            setEdu(e.target.value);
                        }}
                    ></textarea>
                </div>
                <div className="time-cont">
                    <span>from</span>
                    <input type="time" className="time-from"></input>
                    <span>to</span>
                    <input type="time" className="time-to"></input>
                    <a
                        href="#"
                        className="time-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            const from = document.querySelector(".time-from")
                                .value;
                            const to = document.querySelector(".time-to").value;
                            if (!from) alert("Please Specify from time");
                            if (!to) alert("Please specify to time");
                            if (to && from) {
                                let timeslot = from + " - " + to;
                                setSlots([...slots, timeslot]);
                                document.querySelector(
                                    ".time-from"
                                ).value = null;
                                document.querySelector(".time-to").value = null;
                            }
                        }}
                    >
                        Add Timeslot
                    </a>
                </div>
                <div className="time-slot">
                    {slots.map((item, idx) => (
                        <div key={idx} className="slot-item" id={item}>
                            {item}{" "}
                            <p
                                className="del"
                                onClick={(e) => {
                                    let slot = e.currentTarget.parentElement.id;
                                    let currSlots = [];
                                    for (let i = 0; i < slots.length; i++) {
                                        if (slots[i] === slot) {
                                            continue;
                                        }
                                        currSlots.push(slots[i]);
                                    }
                                    setSlots(currSlots);
                                }}
                            >
                                x
                            </p>
                        </div>
                    ))}
                </div>
                <span>WhatsApp</span>
                <div className="wp-cont">
                    <input
                        type="phone"
                        onChange={(e) => {
                            setWhatsApp(e.target.value);
                        }}
                    ></input>
                </div>
                <span>Testimonials</span>
                <div className="test-cont">
                    <textarea className="test-text"></textarea>
                    <a
                        href="#"
                        className="test-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            let testimonial = document.querySelector(
                                ".test-text"
                            );
                            setTest([...test, testimonial.value]);
                            testimonial.value = "";
                        }}
                    >
                        Add Testimonial
                    </a>
                </div>
            </form>

            <div className="app-preview" id="app-preview">
                <AvatarEditor
                    className = "preview-img"
                    image={image}
                    width={300}
                    height={300}
                    border={50}
                    borderRadius={250}
                ></AvatarEditor>
                <h1>About</h1>
                <div className="preview-name">Dr {name}</div>
                <div className="preview-brief">Brief </div>
                <div className="brief-show">{brief}</div>
                <div className="edu">Educational Background</div>
                <p className="edu-show">{edu}</p> <h1>Services</h1>
                <div className="services">
                    {services.map((item, idx) => {
                        return <p key={idx}>{item}</p>;
                    })}
                </div>
                <h1>Time slots</h1>
                <div className="avail">
                    {slots.map((item, idx) => {
                        return <p key={idx}>{item}</p>;
                    })}
                </div>
                <h1>Testimonials</h1>
                <div className="testimonial">
                    {test.map((item, idx) => {
                        return <div key={idx}>{item}</div>;
                    })}
                </div>
                <div className="contact">
                    <BiMailSend color="white" className="svg-icon" />
                    {email}
                    <BiPhoneCall color="white" className="svg-icon" />
                    {phone}
                    <FaWhatsapp color="white" className="svg-icon" />
                    {whatsApp}
                </div>
            </div>
        </div>
    );
}

export default App;

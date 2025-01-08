const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2 rounded-md" placeholder="name" />
                <input type="text" className="border border-black m-2 p-2 rounded-md" placeholder="message" />
                <button className="rounded-lg bg-slate-500 m-2 p-2">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
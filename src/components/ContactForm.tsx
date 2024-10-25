function ContactForm() {
    const accessKey = '89d79f9c-7128-455a-8467-7afc6fb8cf00';

    return (
        <form action="https://api.web3forms.com/submit" method="POST">
            <h3 className="text-center" >Contact Me</h3>

            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form"></input>

            <input name="full_name" type="text" placeholder="Enter your full name" required />
            <input name="email" type="email" placeholder="Enter your email" required />
            <textarea name="message" placeholder="Tell me something"></textarea>
            <button>Send</button>
        </form>
    )
}

export default ContactForm;


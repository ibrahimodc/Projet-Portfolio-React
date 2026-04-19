import { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ nom: '', email: '', message: '' });
    const [envoye, setEnvoye] = useState(false);

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setEnvoye(true);
    setForm({ nom: '', email: '', message: '' });
    };
}
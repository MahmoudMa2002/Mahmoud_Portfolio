import { Linkedin, Mail, Phone } from "lucide-react";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export default function ContactSection() {
    return (
        <section id="contact" className=" px-4 relative">

            <div className="container mx-auto max-w-6xl">
                <FadeInOnScroll delay={0.2} direction="up" >
                    {/* Title*/}
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div class="w-24 h-1 mb-4 bg-gradient-to-r from-primary to-border mx-auto rounded-full"></div>
                    <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                        Send me a message via email, call my phone number, or connect with me on LinkedIn.
                    </p>
                </FadeInOnScroll>

                <FadeInOnScroll delay={0.4} direction="up" >
                    <div className="bg-card p-8 md:p-12 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {/* Email */}
                            <div className="flex flex-col items-center text-center space-y-3 group py-6 border-b md:border-b-0 md:border-r border-primary">
                                <a
                                    href="mailto:mazenmahmod201@gmail.com"
                                    className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                >
                                    <Mail className="h-6 w-6 text-primary" />
                                </a>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                    <a
                                        href="mailto:mazenmahmod201@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm break-all"
                                    >
                                        mazenmahmod201@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center text-center space-y-3 group py-6 border-b md:border-b-0 md:border-r border-primary">
                                <a
                                    href="tel:+962795123571"
                                    className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                >
                                    <Phone className="h-6 w-6 text-primary" />
                                </a>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                                    <a
                                        href="tel:+962795123571"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                                    >
                                        +962 7 9512 3571
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex flex-col items-center text-center space-y-3 group py-6">
                                <a
                                    href="https://www.linkedin.com/in/mahmoud-abu-al-hayja%E2%80%99a-30a270275/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                                >
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/mahmoud-abu-al-hayja%E2%80%99a-30a270275/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm break-all"
                                    >
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>
        </section>
    );
}
